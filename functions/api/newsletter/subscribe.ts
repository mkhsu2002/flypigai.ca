import { normalizeEmail } from "../../_shared/events";
import { apiResponse, FunctionContext, idempotencyKey, persistAndQueue, rateLimit, readPayload, requestOriginAllowed, runtimeReady } from "../../_shared/runtime";

export const onRequestPost = async ({ request, env }: FunctionContext): Promise<Response> => {
  if (!runtimeReady(env)) return apiResponse("unavailable", 503, "The subscription service is temporarily unavailable.");
  if (!requestOriginAllowed(request)) return apiResponse("invalid", 400, "Invalid request origin.");
  if (!(await rateLimit(request, env))) return apiResponse("rate_limited", 429, "Too many requests. Please try again later.");
  const raw = await readPayload(request, 4096);
  const email = typeof raw?.email === "string" ? normalizeEmail(raw.email) : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || raw?.consent !== true) return apiResponse("invalid", 422, "A valid email and explicit consent are required.");
  if (typeof raw?.company_site === "string" && raw.company_site) return apiResponse("accepted", 202, "Your request has been received.");

  const existing = await env.FLYPIG_DB.prepare("SELECT id, status FROM subscribers WHERE normalized_email = ?1").bind(email).first<{ id: string; status: string }>();
  if (existing?.status === "subscribed") return apiResponse("already_subscribed", 200, "This email is already subscribed.");
  const subscriberId = existing?.id ?? crypto.randomUUID();
  const key = idempotencyKey(request);

  try {
    const boundary = await persistAndQueue({
      env,
      idempotencyKey: key,
      persist: async (eventId, now, auditHash) => {
        const subscriberStatement = existing
          ? env.FLYPIG_DB.prepare("UPDATE subscribers SET status = 'subscribed', consent_source = 'web', consent_at = ?1, unsubscribed_at = NULL, updated_at = ?1 WHERE id = ?2").bind(now, subscriberId)
          : env.FLYPIG_DB.prepare("INSERT INTO subscribers (id, normalized_email, status, consent_source, consent_at, created_at, updated_at) VALUES (?1, ?2, 'subscribed', 'web', ?3, ?3, ?3)").bind(subscriberId, email, now);
        await env.FLYPIG_DB.batch([
          subscriberStatement,
          env.FLYPIG_DB.prepare("INSERT INTO event_inbox (id, event_type, idempotency_key, domain_record_id, state, created_at, updated_at) VALUES (?1, 'newsletter.welcome', ?2, ?3, 'pending', ?4, ?4)").bind(eventId, key, subscriberId, now),
          env.FLYPIG_DB.prepare("INSERT INTO event_audit (id, event_id, action, actor, metadata_hash, created_at) VALUES (?1, ?2, 'persisted', 'pages', ?3, ?4)").bind(crypto.randomUUID(), eventId, auditHash, now),
        ]);
      },
    });
    return apiResponse(boundary.duplicate ? "already_subscribed" : "accepted", boundary.duplicate ? 200 : 202, boundary.duplicate ? "This subscription was already received." : "Your subscription has been received.");
  } catch {
    return apiResponse("unavailable", 503, "The subscription could not be stored safely. Please try again later.");
  }
};
