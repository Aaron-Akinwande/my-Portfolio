"use client";

import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import type { FormEvent } from "react";

import { button } from "@/components/ui/styles";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";

/** Give up after this long, so the form never sits on "Sending…". */
const SEND_TIMEOUT_MS = 15000;

const field =
  "w-full rounded-xl border border-line-strong bg-canvas px-4 py-3 text-ink placeholder:text-muted transition-colors duration-200 focus:border-focus";

const label = "mb-2 block text-sm font-medium text-ink";

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
      const sent = emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
        },
        { publicKey: PUBLIC_KEY },
      );
      const timedOut = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Timed out")), SEND_TIMEOUT_MS),
      );
      await Promise.race([sent, timedOut]);
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
          <label htmlFor="name" className={label}>
            Your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            autoComplete="name"
            placeholder="Ada Lovelace"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="email" className={label}>
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            autoComplete="email"
            placeholder="ada@example.com"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="message" className={label}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={6}
            placeholder="Tell me about the project or role"
            className={`${field} resize-y`}
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
          className={`${button("primary", "lg")} w-full`}
        >
          {sending ? "Sending…" : "Send message"}
          <PaperAirplaneIcon aria-hidden="true" className="size-5" />
        </button>
      </form>

      <div aria-live="polite">
        {status === "success" && (
          <p className="mt-5 flex items-start gap-3 rounded-xl border border-success/30 bg-success-surface p-4 font-medium text-success">
            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            Message sent. I&apos;ll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p className="mt-5 flex items-start gap-3 rounded-xl border border-danger/30 bg-danger-surface p-4 font-medium text-danger">
            <ExclamationCircleIcon
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0"
            />
            <span>
              That didn&apos;t send. Try again, or email me at{" "}
              <a href={`mailto:${fallbackEmail}`} className="underline">
                {fallbackEmail}
              </a>
              .
            </span>
          </p>
        )}
      </div>
    </>
  );
}
