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
      className="bg-gradient-to-b from-mantle to-crust pb-10 pt-17.5 text-foreground"
    >
      <div className="mx-auto max-w-230 px-7">
        <h2 className="text-[clamp(1.6rem,4vw,2.3rem)] text-foreground">Let&apos;s talk.</h2>
        <p className="max-w-[50ch] text-subtext1">
          Open to conversations on Model UN, early-stage startups, markets, or split times.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid max-w-130 gap-3.5">
          <div>
            <label htmlFor="cf-name" className="mb-1.5 block text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-subtext1">
              Your name
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-[10px] border border-surface1 bg-surface0/60 px-3.5 py-2.5 text-[0.95rem] text-foreground outline-none focus:outline-2 focus:outline-mauve focus:outline-offset-1"
            />
          </div>
          <div>
            <label htmlFor="cf-email" className="mb-1.5 block text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-subtext1">
              Your email
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-[10px] border border-surface1 bg-surface0/60 px-3.5 py-2.5 text-[0.95rem] text-foreground outline-none focus:outline-2 focus:outline-mauve focus:outline-offset-1"
            />
          </div>
          <div>
            <label htmlFor="cf-message" className="mb-1.5 block text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-subtext1">
              Message
            </label>
            <textarea
              id="cf-message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-27.5 w-full resize-y rounded-[10px] border border-surface1 bg-surface0/60 px-3.5 py-2.5 text-[0.95rem] text-foreground outline-none focus:outline-2 focus:outline-mauve focus:outline-offset-1"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-peach px-5.5 py-3 text-[0.92rem] font-bold text-crust transition-transform hover:-translate-y-0.5"
          >
            Send message
          </button>
          <p className="mt-1 text-[0.8rem] text-subtext1">
            Opens your email app with everything pre-filled — nothing is stored or sent from this page.
          </p>
        </form>

        <div className="mt-12.5 flex flex-wrap justify-between gap-2 text-[0.78rem] text-subtext0/70">
          <span>Eda Beyter — {contact.location}</span>
          <span>Built 2026</span>
        </div>
      </div>
    </footer>
  );
}
