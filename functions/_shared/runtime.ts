import { acceptPersistedEvent, auditDigest, bindingsReady } from "./events";

export type D1Result<T = unknown> = { success: boolean; results?: T[] };
export type D1Statement = { bind: (...values: unknown[]) => D1Statement; first: <T = Record<string, unknown>>() => Promise<T | null>; run: () => Promise<D1Result> };
export type D1Database = { prepare: (query: string) => D1Statement; batch: (statements: D1Statement[]) => Promise<D1Result[]> };
export type EventQueue = { send: (body: { eventId: string }) => Promise<void> };
export type RateLimiter = { limit: (options: { key: string }) => Promise<{ success: boolean }> };

export type ProducerEnv = {
  FLYPIG_DB: D1Database;
  OUTBOUND_EVENTS: EventQueue;
  RATE_LIMITER?: RateLimiter;
  UNSUBSCRIBE_SECRET?: string;
};

export type FunctionContext = { request: Request; env: ProducerEnv };

export function apiResponse(status: "accepted" | "already_subscribed" | "unsubscribed" | "invalid" | "rate_limited" | "unavailable", httpStatus: number, message: string) {
  return Response.json({ ok: httpStatus < 400, status, message }, { status: httpStatus });
}

export function runtimeReady(env: Partial<ProducerEnv>): env is ProducerEnv {
  return bindingsReady(env as unknown as Record<string, unknown>);
}

export async function readPayload(request: Request, maximumBytes = 16_384): Promise<Record<string, unknown> | null> {
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) return null;
  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > maximumBytes) return null;
  try {
    const value: unknown = await request.json();
    return value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : null;
  } catch { return null; }
}

export function requestOriginAllowed(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}

export function idempotencyKey(request: Request) {
  const value = request.headers.get("idempotency-key")?.trim();
  return value && /^[A-Za-z0-9:_-]{8,200}$/.test(value) ? value : crypto.randomUUID();
}

export async function rateLimit(request: Request, env: ProducerEnv) {
  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  const actorHash = await auditDigest({ ip });
  if (env.RATE_LIMITER) return (await env.RATE_LIMITER.limit({ key: actorHash })).success;
  const now = new Date();
  const bucket = now.toISOString().slice(0, 16);
  await env.FLYPIG_DB.prepare("INSERT INTO request_rate_limits (bucket, actor_hash, request_count, updated_at) VALUES (?1, ?2, 1, ?3) ON CONFLICT(bucket, actor_hash) DO UPDATE SET request_count = request_count + 1, updated_at = excluded.updated_at").bind(bucket, actorHash, now.toISOString()).run();
  const result = await env.FLYPIG_DB.prepare("SELECT request_count FROM request_rate_limits WHERE bucket = ?1 AND actor_hash = ?2").bind(bucket, actorHash).first<{ request_count: number }>();
  return Boolean(result && result.request_count <= 10);
}

export async function persistAndQueue(options: {
  env: ProducerEnv;
  idempotencyKey: string;
  persist: (eventId: string, now: string, auditHash: string) => Promise<void>;
}) {
  const existing = await options.env.FLYPIG_DB.prepare("SELECT id FROM event_inbox WHERE idempotency_key = ?1").bind(options.idempotencyKey).first<{ id: string }>();
  return acceptPersistedEvent({
    idempotencyKey: options.idempotencyKey,
    persist: async () => {
      if (existing) return { eventId: existing.id, duplicate: true };
      const eventId = crypto.randomUUID();
      const now = new Date().toISOString();
      try {
        await options.persist(eventId, now, await auditDigest({ eventId, action: "persisted" }));
      } catch (error) {
        const concurrent = await options.env.FLYPIG_DB.prepare("SELECT id FROM event_inbox WHERE idempotency_key = ?1").bind(options.idempotencyKey).first<{ id: string }>();
        if (concurrent) return { eventId: concurrent.id, duplicate: true };
        throw error;
      }
      return { eventId, duplicate: false };
    },
    enqueue: async (eventId) => options.env.OUTBOUND_EVENTS.send({ eventId }),
    markQueued: async (eventId) => {
      const now = new Date().toISOString();
      await options.env.FLYPIG_DB.batch([
        options.env.FLYPIG_DB.prepare("UPDATE event_inbox SET state = 'queued', queued_at = ?1, updated_at = ?1 WHERE id = ?2").bind(now, eventId),
        options.env.FLYPIG_DB.prepare("INSERT INTO event_audit (id, event_id, action, actor, metadata_hash, created_at) VALUES (?1, ?2, 'queued', 'pages', ?3, ?4)").bind(crypto.randomUUID(), eventId, await auditDigest({ eventId, action: "queued" }), now),
      ]);
    },
    markQueuePending: async (eventId, errorCode) => {
      const now = new Date().toISOString();
      await options.env.FLYPIG_DB.batch([
        options.env.FLYPIG_DB.prepare("UPDATE event_inbox SET state = 'pending', error_code = ?1, updated_at = ?2 WHERE id = ?3").bind(errorCode, now, eventId),
        options.env.FLYPIG_DB.prepare("INSERT INTO event_audit (id, event_id, action, actor, metadata_hash, created_at) VALUES (?1, ?2, 'queue_pending', 'pages', ?3, ?4)").bind(crypto.randomUUID(), eventId, await auditDigest({ eventId, action: "queue_pending", errorCode }), now),
      ]);
    },
  });
}
