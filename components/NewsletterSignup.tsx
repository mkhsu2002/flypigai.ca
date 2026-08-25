"use client";

import { FormEvent, useState } from "react";
import "./newsletter.css";

export default function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Unable to subscribe.");
      setStatus("success");
      setMessage("You're on the list. We’ll send only high-signal Taiwan Edge AI and Physical AI updates.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to subscribe.");
    }
  }

  return <form className="newsletter-form" onSubmit={onSubmit}>
    <label htmlFor="newsletter-email">Work email</label>
    <div className="newsletter-row">
      <input id="newsletter-email" name="email" type="email" placeholder="you@company.com" required autoComplete="email" />
      <button className="pill primary" type="submit" disabled={status === "loading"}>{status === "loading" ? "Joining…" : "Subscribe"}</button>
    </div>
    <p className={`form-message ${status === "success" ? "success" : status === "error" ? "error" : ""}`} aria-live="polite">{message || "A concise briefing on Taiwan technologies, design routes and Canada-facing opportunities."}</p>
  </form>;
}
