export type PersistedEventResult = { eventId: string; duplicate: boolean };

export type EventBoundary = {
  idempotencyKey: string;
  persist: () => Promise<PersistedEventResult>;
  enqueue: (eventId: string) => Promise<void>;
  markQueued: (eventId: string) => Promise<void>;
  markQueuePending: (eventId: string, errorCode: string) => Promise<void>;
};

export function bindingsReady(environment: Record<string, unknown>) {
  const database = environment.FLYPIG_DB as { prepare?: unknown } | undefined;
  const queue = environment.OUTBOUND_EVENTS as { send?: unknown } | undefined;
  return typeof database?.prepare === "function" && typeof queue?.send === "function";
}

export async function acceptPersistedEvent(boundary: EventBoundary) {
  if (!boundary.idempotencyKey.trim()) throw new Error("Idempotency key is required");
  const persisted = await boundary.persist();
  if (persisted.duplicate) return { ...persisted, queued: false };
  try {
    await boundary.enqueue(persisted.eventId);
    await boundary.markQueued(persisted.eventId);
    return { ...persisted, queued: true };
  } catch {
    await boundary.markQueuePending(persisted.eventId, "queue_unavailable");
    return { ...persisted, queued: false };
  }
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function stableJson(value: Record<string, unknown>) {
  return JSON.stringify(Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b))));
}

function hex(bytes: ArrayBuffer) {
  return [...new Uint8Array(bytes)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function auditDigest(value: Record<string, unknown>) {
  return hex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(stableJson(value))));
}

function base64UrlEncode(bytes: Uint8Array) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

function base64UrlDecode(value: string) {
  const padded = value.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function hmac(value: string, secret: string) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value)));
}

export async function signUnsubscribeToken(email: string, secret: string, expiresAt: number) {
  if (secret.length < 8) throw new Error("Unsubscribe secret is not configured");
  const payload = base64UrlEncode(new TextEncoder().encode(JSON.stringify({ email: normalizeEmail(email), expiresAt })));
  return `${payload}.${base64UrlEncode(await hmac(payload, secret))}`;
}

export async function verifyUnsubscribeToken(token: string, secret: string, now = Date.now()) {
  const [payload, signature, extra] = token.split(".");
  if (!payload || !signature || extra) throw new Error("Invalid unsubscribe token");
  const actual = base64UrlDecode(signature);
  const expected = await hmac(payload, secret);
  if (actual.length !== expected.length || !actual.every((byte, index) => byte === expected[index])) throw new Error("Invalid unsubscribe token");
  let decoded: unknown;
  try { decoded = JSON.parse(new TextDecoder().decode(base64UrlDecode(payload))); } catch { throw new Error("Invalid unsubscribe token"); }
  if (!decoded || typeof decoded !== "object") throw new Error("Invalid unsubscribe token");
  const { email, expiresAt } = decoded as { email?: unknown; expiresAt?: unknown };
  if (typeof email !== "string" || typeof expiresAt !== "number") throw new Error("Invalid unsubscribe token");
  if (expiresAt < now) throw new Error("Unsubscribe token expired");
  return { email: normalizeEmail(email), expiresAt };
}

export function deliveryDisposition(eventType: string, subscriberStatus?: string) {
  if (eventType.startsWith("newsletter.") && subscriberStatus === "unsubscribed") return "suppressed" as const;
  return "deliver" as const;
}
