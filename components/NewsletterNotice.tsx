"use client";

import { FormEvent, useState } from "react";
import "./newsletter.css";

export default function NewsletterNotice() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "already" | "error">("idle");

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "");
    setStatus("sending");
    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Idempotency-Key": crypto.randomUUID() },
        body: JSON.stringify({ email, consent: true }),
      });
      const result = await response.json() as { status?: string };
      if (!response.ok) throw new Error("Subscription failed");
      setStatus(result.status === "already_subscribed" ? "already" : "success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return <form className="newsletter-notice newsletter-form" onSubmit={subscribe}>
    <p className="newsletter-label">Briefing access</p>
    <label htmlFor="newsletter-email">Email address</label>
    <div className="newsletter-fields">
      <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required disabled={status === "sending"} />
      <button className="pill primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Subscribing…" : "Subscribe"}</button>
    </div>
    <label className="newsletter-consent"><input name="consent" type="checkbox" required disabled={status === "sending"} /> <span>I agree to receive FlyPig AI Industry Signals and can unsubscribe at any time.</span></label>
    <p className="form-message" aria-live="polite">
      {status === "success" ? "Subscription confirmed. Check your inbox for the welcome message." : null}
      {status === "already" ? "This email is already subscribed." : null}
      {status === "error" ? "Subscription could not be completed. Please try again." : null}
      {status === "idle" || status === "sending" ? "Source-based Canada–Taiwan Edge AI and Physical AI updates. No unsolicited sales lists." : null}
    </p>
  </form>;
}
