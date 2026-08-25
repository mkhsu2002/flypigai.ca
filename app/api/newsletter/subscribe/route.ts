import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ message: "Newsletter service is not configured yet." }, { status: 503 });
  }

  let email = "";
  try {
    const body = (await request.json()) as { email?: string };
    email = String(body.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (!emailPattern.test(email) || email.length > 254) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const response = await fetch("https://api.resend.com/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      unsubscribed: false,
      properties: { source: "flypigai.ca-industry-signals" },
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    if (response.status === 409 || detail.toLowerCase().includes("already")) {
      return NextResponse.json({ message: "You are already subscribed." });
    }
    console.error("Resend contact creation failed", response.status, detail);
    return NextResponse.json({ message: "Unable to subscribe right now." }, { status: 502 });
  }

  return NextResponse.json({ message: "Subscribed." });
}
