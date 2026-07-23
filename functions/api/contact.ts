interface Env {
  RESEND_API_KEY: string;
}

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  country?: string;
  website?: string;
  audience?: string;
  technology?: string;
  stage?: string;
  support?: string | string[];
  message?: string;
  timeline?: string;
  referral?: string;
  company_site?: string;
  locale?: string;
}

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toOptionalString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

function parsePayload(value: unknown): ContactPayload | null {
  if (!isRecord(value)) return null;

  const supportValue = value.support;
  const support = Array.isArray(supportValue)
    ? supportValue.filter((item): item is string => typeof item === "string")
    : toOptionalString(supportValue);

  return {
    name: toOptionalString(value.name),
    company: toOptionalString(value.company),
    email: toOptionalString(value.email),
    phone: toOptionalString(value.phone),
    country: toOptionalString(value.country),
    website: toOptionalString(value.website),
    audience: toOptionalString(value.audience),
    technology: toOptionalString(value.technology),
    stage: toOptionalString(value.stage),
    support,
    message: toOptionalString(value.message),
    timeline: toOptionalString(value.timeline),
    referral: toOptionalString(value.referral),
    company_site: toOptionalString(value.company_site),
    locale: toOptionalString(value.locale),
  };
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const rawPayload: unknown = await context.request.json();
    const payload = parsePayload(rawPayload);

    if (!payload) {
      return Response.json({ error: "Invalid request body" }, { status: 400 });
    }

    if (payload.company_site) {
      return Response.json({ ok: true });
    }

    const required = [payload.name, payload.company, payload.email, payload.country, payload.audience, payload.technology, payload.stage, payload.message];
    if (required.some((value) => !value || String(value).trim().length === 0)) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email ?? "")) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    if ((payload.message ?? "").length > 3000) {
      return Response.json({ error: "Message too long" }, { status: 400 });
    }

    if (!context.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return Response.json({ error: "Email service is not configured" }, { status: 503 });
    }

    const support = Array.isArray(payload.support) ? payload.support.join(", ") : payload.support || "Not specified";
    const fields = [
      ["Language", payload.locale],
      ["Name", payload.name],
      ["Company", payload.company],
      ["Email", payload.email],
      ["Phone / WhatsApp", payload.phone],
      ["Country / region", payload.country],
      ["Website", payload.website],
      ["Organization type", payload.audience],
      ["Technology area", payload.technology],
      ["Current stage", payload.stage],
      ["Requested support", support],
      ["Timeline", payload.timeline],
      ["Referral", payload.referral],
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:760px;margin:auto;color:#1f2933">
        <h1 style="font-size:24px">New FlyPig AI inquiry</h1>
        <table style="width:100%;border-collapse:collapse">
          ${fields.map(([label, value]) => `<tr><td style="padding:9px;border-bottom:1px solid #ddd;color:#667085;width:32%">${escapeHtml(label)}</td><td style="padding:9px;border-bottom:1px solid #ddd"><strong>${escapeHtml(value || "—")}</strong></td></tr>`).join("")}
        </table>
        <h2 style="font-size:18px;margin-top:28px">Message</h2>
        <div style="white-space:pre-wrap;line-height:1.7;padding:18px;background:#f4f8f7;border-left:3px solid #0f766e">${escapeHtml(payload.message)}</div>
      </div>`;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FlyPig AI <contact@insightestate.ca>",
        to: ["mkhsu2002@gmail.com"],
        reply_to: payload.email,
        subject: `[FlyPig AI] ${payload.company} — ${payload.audience}`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text();
      console.error("Resend error", detail);
      return Response.json({ error: "Email service error" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
};