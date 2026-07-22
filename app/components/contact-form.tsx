"use client";

import { useState, type FormEvent } from "react";

export function ContactForm({ kind = "general" }: { kind?: "general" | "hire" | "consulting" }) {
  const [note, setNote] = useState("");
  const subjects = {
    general: "Portfolio inquiry",
    hire: "Hiring inquiry",
    consulting: "Consulting inquiry",
  };

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const context = String(data.get("context") || "");
    const message = String(data.get("message") || "");
    const body = [`Name: ${name}`, `Email: ${email}`, context && `Context: ${context}`, "", message].filter(Boolean).join("\n");
    window.location.href = `mailto:paraskaushik862@gmail.com?subject=${encodeURIComponent(subjects[kind])}&body=${encodeURIComponent(body)}`;
    setNote("Your email app should open with the message ready to send.");
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label>
      </div>
      <label>{kind === "hire" ? "Role / company" : kind === "consulting" ? "Project / company" : "What is this about?"}<input name="context" placeholder={kind === "hire" ? "Applied AI Engineer at..." : kind === "consulting" ? "Document AI, voice agent, product build..." : "A role, product, or collaboration"} /></label>
      <label>Message<textarea name="message" required rows={5} placeholder="A little context helps me respond usefully." /></label>
      <button className="btn primary" type="submit">Prepare email <span>↗</span></button>
      <p className="form-note" aria-live="polite">{note}</p>
    </form>
  );
}

