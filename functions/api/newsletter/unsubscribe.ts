import { verifyUnsubscribeToken } from "../../_shared/events";
import { apiResponse, FunctionContext, idempotencyKey, persistAndQueue, readPayload, requestOriginAllowed, runtimeReady } from "../../_shared/runtime";

export const onRequestPost = async ({ request, env }: FunctionContext): Promise<Response> => {
  if (!runtimeReady(env) || !env.UNSUBSCRIBE_SECRET) return apiResponse("unavailable", 503, "The unsubscribe service is temporarily unavailable.");
  if (!requestOriginAllowed(request)) return apiResponse("invalid", 400, "Invalid request origin.");
  const raw = await readPayload(request, 4096);
  if (typeof raw?.token !== "string") return apiResponse("invalid", 422, "A valid unsubscribe token is required.");
  let email: string;
  try { ({ email } = await verifyUnsubscribeToken(raw.token, env.UNSUBSCRIBE_SECRET)); }
  catch { return apiResponse("invalid", 422, "The unsubscribe link is invalid or expired."); }
  const subscriber = await env.FLYPIG_DB.prepare("SELECT id, status FROM subscribers WHERE normalized_email = ?1").bind(email).first<{ id: string; status: string }>();
  if (!subscriber || subscriber.status === "unsubscribed") return apiResponse("unsubscribed", 200, "This email is unsubscribed.");
  const key = idempotencyKey(request);
  try {
    await persistAndQueue({
      env,
      idempotencyKey: key,
      persist: async (eventId, now, auditHash) => {
        await env.FLYPIG_DB.batch([
          env.FLYPIG_DB.prepare("UPDATE subscribers SET status = 'unsubscribed', unsubscribed_at = ?1, updated_at = ?1 WHERE id = ?2").bind(now, subscriber.id),
          env.FLYPIG_DB.prepare("INSERT INTO event_inbox (id, event_type, idempotency_key, domain_record_id, state, created_at, updated_at) VALUES (?1, 'newsletter.unsubscribed', ?2, ?3, 'pending', ?4, ?4)").bind(eventId, key, subscriber.id, now),
          env.FLYPIG_DB.prepare("INSERT INTO event_audit (id, event_id, action, actor, metadata_hash, created_at) VALUES (?1, ?2, 'persisted', 'pages', ?3, ?4)").bind(crypto.randomUUID(), eventId, auditHash, now),
        ]);
      },
    });
    return apiResponse("unsubscribed", 200, "This email is unsubscribed.");
  } catch {
    return apiResponse("unavailable", 503, "The unsubscribe request could not be stored safely.");
  }
};
