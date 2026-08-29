import { auditDigest, deliveryDisposition, signUnsubscribeToken } from "../../functions/_shared/events";

type D1Statement = { bind: (...values: unknown[]) => D1Statement; first: <T = Record<string, unknown>>() => Promise<T | null>; run: () => Promise<unknown>; all: <T = Record<string, unknown>>() => Promise<{ results: T[] }> };
type D1Database = { prepare: (query: string) => D1Statement; batch: (statements: D1Statement[]) => Promise<unknown> };
type QueueProducer = { send: (body: { eventId: string }) => Promise<void> };
type QueueMessage = { body: unknown; attempts: number; ack: () => void; retry: () => void };
type QueueBatch = { messages: QueueMessage[] };

type Env = {
  FLYPIG_DB: D1Database;
  OUTBOUND_EVENTS: QueueProducer;
  RESEND_API_KEY: string;
  CONTACT_FROM: string;
  CONTACT_TO: string;
  NEWSLETTER_FROM: string;
  UNSUBSCRIBE_SECRET: string;
  REPLAY_TOKEN: string;
  SITE_URL?: string;
};

type InboxEvent = { id: string; event_type: string; domain_record_id: string; state: string; attempt_count: number };
type Subscriber = { normalized_email: string; status: string };

function escapeHtml(value: unknown) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

async function audit(env: Env, eventId: string, action: string, metadata: Record<string, unknown>) {
  const now = new Date().toISOString();
  await env.FLYPIG_DB.prepare("INSERT INTO event_audit (id, event_id, action, actor, metadata_hash, created_at) VALUES (?1, ?2, ?3, 'worker', ?4, ?5)")
    .bind(crypto.randomUUID(), eventId, action, await auditDigest(metadata), now).run();
}

async function finish(env: Env, eventId: string, state: "sent" | "suppressed" | "failed", providerId: string | null, errorCode: string | null) {
  const now = new Date().toISOString();
  await env.FLYPIG_DB.batch([
    env.FLYPIG_DB.prepare("UPDATE event_inbox SET state = ?1, provider_id = ?2, error_code = ?3, processed_at = ?4, updated_at = ?4 WHERE id = ?5").bind(state, providerId, errorCode, now, eventId),
    env.FLYPIG_DB.prepare("INSERT INTO event_audit (id, event_id, action, actor, metadata_hash, created_at) VALUES (?1, ?2, ?3, 'worker', ?4, ?5)").bind(crypto.randomUUID(), eventId, state, await auditDigest({ eventId, state, errorCode }), now),
  ]);
}

async function markDeadLetter(env: Env, eventId: string, errorCode: string) {
  const now = new Date().toISOString();
  await env.FLYPIG_DB.batch([
    env.FLYPIG_DB.prepare("UPDATE event_inbox SET state = 'failed', error_code = ?1, dead_lettered_at = ?2, updated_at = ?2 WHERE id = ?3").bind(errorCode, now, eventId),
    env.FLYPIG_DB.prepare("INSERT INTO event_audit (id, event_id, action, actor, metadata_hash, created_at) VALUES (?1, ?2, 'dead_lettered', 'worker', ?3, ?4)").bind(crypto.randomUUID(), eventId, await auditDigest({ eventId, action: "dead_lettered", errorCode }), now),
  ]);
}

async function sendResend(env: Env, eventId: string, body: Record<string, unknown>) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json", "Idempotency-Key": eventId },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`provider_http_${response.status}`);
  const data: unknown = await response.json();
  return data && typeof data === "object" && "id" in data && typeof data.id === "string" ? data.id : null;
}

async function contactMessage(env: Env, event: InboxEvent) {
  const record = await env.FLYPIG_DB.prepare("SELECT payload_json, locale FROM contact_requests WHERE id = ?1").bind(event.domain_record_id).first<{ payload_json: string; locale: string }>();
  if (!record) throw new Error("domain_record_missing");
  const payload = JSON.parse(record.payload_json) as Record<string, unknown>;
  const support = Array.isArray(payload.support) ? payload.support.join(", ") : "—";
  const fields = [["Name", payload.name], ["Company", payload.company], ["Email", payload.email], ["Country", payload.country], ["Audience", payload.audience], ["Technology", payload.technology], ["Stage", payload.stage], ["Requested support", support], ["Timeline", payload.timeline]];
  const html = `<div style="font-family:Arial,sans-serif;max-width:760px;margin:auto"><h1>New FlyPig AI inquiry</h1><table>${fields.map(([label, value]) => `<tr><td style="padding:8px;color:#667085">${escapeHtml(label)}</td><td style="padding:8px"><strong>${escapeHtml(value || "—")}</strong></td></tr>`).join("")}</table><h2>Message</h2><div style="white-space:pre-wrap">${escapeHtml(payload.message)}</div></div>`;
  return sendResend(env, event.id, { from: env.CONTACT_FROM, to: [env.CONTACT_TO], reply_to: payload.email, subject: `[FlyPig AI] ${payload.company} — ${payload.audience}`, html });
}

async function newsletterMessage(env: Env, event: InboxEvent, subscriber: Subscriber) {
  const siteUrl = env.SITE_URL ?? "https://flypigai.ca";
  const expiresAt = Date.now() + 1000 * 60 * 60 * 24 * 365;
  const token = await signUnsubscribeToken(subscriber.normalized_email, env.UNSUBSCRIBE_SECRET, expiresAt);
  const unsubscribeUrl = `${siteUrl}/newsletter/unsubscribe?token=${encodeURIComponent(token)}`;
  const html = `<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto"><h1>FlyPig AI Industry Signals</h1><p>Your subscription has been confirmed. Future briefings will focus on sourced Canada–Taiwan Edge AI and Physical AI intelligence.</p><p><a href="${escapeHtml(unsubscribeUrl)}">Unsubscribe</a></p></div>`;
  return sendResend(env, event.id, { from: env.NEWSLETTER_FROM, to: [subscriber.normalized_email], subject: "FlyPig AI Industry Signals subscription confirmed", html, headers: { "List-Unsubscribe": `<${unsubscribeUrl}>` } });
}

async function processEvent(env: Env, eventId: string) {
  const event = await env.FLYPIG_DB.prepare("SELECT id, event_type, domain_record_id, state, attempt_count FROM event_inbox WHERE id = ?1").bind(eventId).first<InboxEvent>();
  if (!event || ["sent", "suppressed"].includes(event.state)) return;
  const now = new Date().toISOString();
  await env.FLYPIG_DB.prepare("UPDATE event_inbox SET state = 'processing', attempt_count = attempt_count + 1, error_code = NULL, updated_at = ?1 WHERE id = ?2").bind(now, event.id).run();
  await audit(env, event.id, "processing", { eventId: event.id, attempt: event.attempt_count + 1 });

  if (event.event_type === "newsletter.unsubscribed") {
    await finish(env, event.id, "sent", null, null);
    return;
  }
  if (event.event_type === "contact.received") {
    await finish(env, event.id, "sent", await contactMessage(env, event), null);
    return;
  }
  if (event.event_type === "newsletter.welcome") {
    const subscriber = await env.FLYPIG_DB.prepare("SELECT normalized_email, status FROM subscribers WHERE id = ?1").bind(event.domain_record_id).first<Subscriber>();
    if (!subscriber) throw new Error("domain_record_missing");
    if (deliveryDisposition(event.event_type, subscriber.status) === "suppressed") {
      await finish(env, event.id, "suppressed", null, "subscriber_unsubscribed");
      return;
    }
    await finish(env, event.id, "sent", await newsletterMessage(env, event, subscriber), null);
    return;
  }
  throw new Error("unsupported_event_type");
}

async function queue(batch: QueueBatch, env: Env) {
  for (const message of batch.messages) {
    const body = message.body;
    const eventId = body && typeof body === "object" && "eventId" in body && typeof body.eventId === "string" ? body.eventId : null;
    if (!eventId) { message.ack(); continue; }
    try { await processEvent(env, eventId); message.ack(); }
    catch (error) {
      const code = error instanceof Error && /^[a-z0-9_]+$/.test(error.message) ? error.message : "delivery_failed";
      if (message.attempts >= 5) await markDeadLetter(env, eventId, code);
      else await finish(env, eventId, "failed", null, code);
      message.retry();
    }
  }
}

async function scheduled(_controller: unknown, env: Env) {
  const cutoff = new Date(Date.now() - 15 * 60 * 1000).toISOString();
  const rateLimitCutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  await env.FLYPIG_DB.prepare("DELETE FROM request_rate_limits WHERE updated_at < ?1").bind(rateLimitCutoff).run();
  const { results } = await env.FLYPIG_DB.prepare("SELECT id FROM event_inbox WHERE state IN ('pending', 'failed') AND dead_lettered_at IS NULL AND updated_at < ?1 ORDER BY updated_at LIMIT 100").bind(cutoff).all<{ id: string }>();
  for (const event of results) {
    await env.OUTBOUND_EVENTS.send({ eventId: event.id });
    await audit(env, event.id, "requeued_recovery", { eventId: event.id });
  }
}

async function fetchHandler(request: Request, env: Env) {
  const url = new URL(request.url);
  if (request.method === "GET" && url.pathname === "/health") {
    const configured = Boolean(env.FLYPIG_DB && env.OUTBOUND_EVENTS && env.RESEND_API_KEY && env.CONTACT_FROM && env.CONTACT_TO && env.NEWSLETTER_FROM && env.UNSUBSCRIBE_SECRET && env.REPLAY_TOKEN);
    return Response.json({ ok: configured, status: configured ? "ready" : "unavailable" }, { status: configured ? 200 : 503 });
  }
  const match = request.method === "POST" ? url.pathname.match(/^\/replay\/([A-Za-z0-9-]+)$/) : null;
  if (!match || request.headers.get("authorization") !== `Bearer ${env.REPLAY_TOKEN}`) return new Response("Not found", { status: 404 });
  const event = await env.FLYPIG_DB.prepare("SELECT id, state FROM event_inbox WHERE id = ?1").bind(match[1]).first<{ id: string; state: string }>();
  if (!event || !["pending", "failed"].includes(event.state)) return Response.json({ ok: false, status: "invalid" }, { status: 409 });
  await env.FLYPIG_DB.prepare("UPDATE event_inbox SET dead_lettered_at = NULL, error_code = NULL, state = 'pending', updated_at = ?1 WHERE id = ?2").bind(new Date().toISOString(), event.id).run();
  await env.OUTBOUND_EVENTS.send({ eventId: event.id });
  await audit(env, event.id, "requeued_manual", { eventId: event.id });
  return Response.json({ ok: true, status: "accepted" }, { status: 202 });
}

export default { fetch: fetchHandler, queue, scheduled };
