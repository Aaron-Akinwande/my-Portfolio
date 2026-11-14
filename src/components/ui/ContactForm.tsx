"use client";

import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import type { FormEvent } from "react";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full bg-white/5 backdrop-blur-xs border border-border-slate rounded-xl py-3.5 px-4 text-light placeholder:text-tertiary/60 focus:outline-hidden focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300";

const labelClass = "block text-tertiary text-sm font-medium mb-2";

export function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Bots fill every field; people never see this one.
    if (data.get("company")) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      // Loaded on first submit, so the library is not part of the initial page load.
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
        },
        { publicKey: PUBLIC_KEY },
      );
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form: message was not sent.", error);
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            autoComplete="name"
            placeholder="John Doe"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            autoComplete="email"
            placeholder="john@example.com"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className={`${fieldClass} resize-none`}
          />
        </div>

        {/* Honeypot: hidden from people and assistive tech. */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-primary to-secondary text-dark rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          <span>{sending ? "Sending..." : "Send Message"}</span>
          <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      <div aria-live="polite">
        {status === "success" && (
          <div className="mt-6 flex items-center gap-3 bg-secondary/10 border border-secondary/30 rounded-xl p-4 animate-fade-up">
            <CheckCircleIcon className="w-6 h-6 text-secondary shrink-0" />
            <p className="text-secondary font-medium">
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="mt-6 flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4 animate-fade-up">
            <ExclamationCircleIcon className="w-6 h-6 text-red-500 shrink-0" />
            <p className="text-red-500 font-medium">
              Failed to send message. Please try again, or email me at{" "}
              <a href={`mailto:${fallbackEmail}`} className="underline">
                {fallbackEmail}
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </>
  );
}
