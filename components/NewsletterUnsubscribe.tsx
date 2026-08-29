"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function NewsletterUnsubscribe() {
  const token = useSearchParams().get("token") ?? "";
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function unsubscribe() {
    if (!token) { setStatus("error"); return; }
    setStatus("sending");
    try {
      const response = await fetch("/api/newsletter/unsubscribe", { method: "POST", headers: { "Content-Type": "application/json", "Idempotency-Key": crypto.randomUUID() }, body: JSON.stringify({ token }) });
      if (!response.ok) throw new Error("Unsubscribe failed");
      setStatus("done");
    } catch { setStatus("error"); }
  }

  return <div className="card">
    <p>Confirm that you no longer want to receive FlyPig AI Industry Signals by email.</p>
    <button className="pill primary" type="button" onClick={unsubscribe} disabled={status === "sending" || status === "done"}>{status === "sending" ? "Updating…" : status === "done" ? "Unsubscribed" : "Confirm unsubscribe"}</button>
    {status === "done" ? <p className="form-message success" aria-live="polite">Your subscription has been removed.</p> : null}
    {status === "error" ? <p className="form-message error" aria-live="polite">This link is invalid, expired or temporarily unavailable. Email info@flypigai.ca for help.</p> : null}
  </div>;
}
