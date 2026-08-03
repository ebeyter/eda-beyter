"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/data";

export function ContactFooter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${encodeURIComponent(
      contact.email
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <footer
      id="contact"
      className="bg-crust pb-6 pt-6 text-foreground"
    >
      <div className="mx-auto max-w-230 px-7">
        <h2 className="bg-gradient-to-r from-mauve to-pink bg-clip-text text-[clamp(1.7rem,4vw,2.4rem)] font-extrabold text-transparent">
          Let&apos;s talk.
        </h2>
        <p className="max-w-[50ch] text-[0.92rem] text-subtext1">
          Open to conversations about brilliant ideas, sports and markets.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 grid max-w-130 gap-2.5">
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label htmlFor="cf-name" className="mb-1 block text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-subtext1">
                Your name
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-[10px] border border-surface1 bg-surface0/60 px-3.5 py-2 text-[0.9rem] text-foreground outline-none focus:outline-2 focus:outline-mauve focus:outline-offset-1"
              />
            </div>
            <div>
              <label htmlFor="cf-email" className="mb-1 block text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-subtext1">
                Your email
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[10px] border border-surface1 bg-surface0/60 px-3.5 py-2 text-[0.9rem] text-foreground outline-none focus:outline-2 focus:outline-mauve focus:outline-offset-1"
              />
            </div>
          </div>
          <div>
            <label htmlFor="cf-message" className="mb-1 block text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-subtext1">
              Message
            </label>
            <textarea
              id="cf-message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-16 w-full resize-y rounded-[10px] border border-surface1 bg-surface0/60 px-3.5 py-2 text-[0.9rem] text-foreground outline-none focus:outline-2 focus:outline-mauve focus:outline-offset-1"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-pink to-mauve px-5 py-2.5 text-[0.88rem] font-bold text-crust transition-transform hover:-translate-y-0.5"
          >
            Send message
          </button>
        </form>

        <div className="mt-6 flex flex-wrap justify-between gap-2 text-[0.75rem] text-subtext0/70">
          <span>Eda Beyter — {contact.location}</span>
          <span>Built 2026</span>
        </div>
      </div>
    </footer>
  );
}
