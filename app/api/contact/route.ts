import { NextResponse } from "next/server";
import { Resend } from "resend";
import { social } from "@/lib/content";

const MAX_MESSAGE_LENGTH = 5000;

type ContactPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
  company?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: hidden from real users via CSS, so anything filling it in is
  // almost certainly a bot. Pretend to succeed either way.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const projectType = body.projectType?.trim() || "Not specified";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in your name, email, and message." }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL || social.email;

  if (!apiKey) {
    console.error("Contact form submitted but RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "The contact form isn't set up yet. Please try again later." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Matt Downey <contact@dialectrek.com>",
    to,
    replyTo: email,
    subject: `New project inquiry — ${projectType}`,
    text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`,
  });

  if (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json({ error: "Couldn't send your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
