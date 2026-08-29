import { auditDigest, normalizeEmail } from "../_shared/events";
import { apiResponse, FunctionContext, idempotencyKey, persistAndQueue, rateLimit, readPayload, requestOriginAllowed, runtimeReady } from "../_shared/runtime";

function text(value: unknown, maximum: number) {
  return typeof value === "string" && value.trim().length <= maximum ? value.trim() : null;
}

export const onRequestPost = async ({ request, env }: FunctionContext): Promise<Response> => {
  if (!runtimeReady(env)) return apiResponse("unavailable", 503, "The inquiry service is temporarily unavailable.");
  if (!requestOriginAllowed(request)) return apiResponse("invalid", 400, "Invalid request origin.");
  if (!(await rateLimit(request, env))) return apiResponse("rate_limited", 429, "Too many requests. Please try again later.");
  const raw = await readPayload(request);
  if (!raw) return apiResponse("invalid", 400, "Invalid request body.");
  if (text(raw.company_site, 200)) return apiResponse("accepted", 202, "Your request has been received.");

  const name = text(raw.name, 100);
  const company = text(raw.company, 160);
  const email = text(raw.email, 160);
  const country = text(raw.country, 100);
  const audience = text(raw.audience, 100);
  const technology = text(raw.technology, 100);
  const stage = text(raw.stage, 100);
  const message = text(raw.message, 3000);
  if (!name || !company || !email || !country || !audience || !technology || !stage || !message || message.length < 20 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return apiResponse("invalid", 422, "Please review the required inquiry fields.");
  }

  const payload = {
    name, company, email: normalizeEmail(email), country, audience, technology, stage, message,
    phone: text(raw.phone, 60), website: text(raw.website, 240), timeline: text(raw.timeline, 100), referral: text(raw.referral, 160),
    support: Array.isArray(raw.support) ? raw.support.filter((item): item is string => typeof item === "string").slice(0, 12) : [],
  };
  const locale = text(raw.locale, 10) ?? "en";
  const key = idempotencyKey(request);

  try {
    const boundary = await persistAndQueue({
      env,
      idempotencyKey: key,
      persist: async (eventId, now, auditHash) => {
        const requestId = crypto.randomUUID();
        const sourceIpHash = await auditDigest({ ip: request.headers.get("cf-connecting-ip") ?? "unknown" });
        await env.FLYPIG_DB.batch([
          env.FLYPIG_DB.prepare("INSERT INTO contact_requests (id, normalized_email, payload_json, locale, source_ip_hash, created_at, updated_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?6)").bind(requestId, payload.email, JSON.stringify(payload), locale, sourceIpHash, now),
          env.FLYPIG_DB.prepare("INSERT INTO event_inbox (id, event_type, idempotency_key, domain_record_id, state, created_at, updated_at) VALUES (?1, 'contact.received', ?2, ?3, 'pending', ?4, ?4)").bind(eventId, key, requestId, now),
          env.FLYPIG_DB.prepare("INSERT INTO event_audit (id, event_id, action, actor, metadata_hash, created_at) VALUES (?1, ?2, 'persisted', 'pages', ?3, ?4)").bind(crypto.randomUUID(), eventId, auditHash, now),
        ]);
      },
    });
    return apiResponse("accepted", 202, boundary.duplicate ? "Your request was already received." : "Your request has been received.");
  } catch {
    return apiResponse("unavailable", 503, "The inquiry could not be stored safely. Please try again later.");
  }
};
