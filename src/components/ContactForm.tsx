"use client";

import { useState, type FormEvent } from "react";

const TYPES = ["Apartment", "Duplex / Villa", "Office", "Restaurant / Retail", "Architecture", "Other"];
const BUDGETS = ["Under ৳10 Lakh", "৳10–30 Lakh", "৳30–60 Lakh", "৳60 Lakh – 1 Cr", "Above ৳1 Cr"];

const field =
  "peer w-full rounded-xl border border-ink/15 bg-linen px-4 pt-6 pb-2.5 text-[0.95rem] text-ink transition placeholder:text-transparent focus:border-bronze focus:ring-1 focus:ring-bronze focus:outline-none";
const floatLabel =
  "pointer-events-none absolute top-4 left-4 origin-left text-sm text-mist transition-all peer-focus:top-2 peer-focus:text-[0.7rem] peer-focus:text-bronze peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[0.7rem]";

export default function ContactForm() {
  const [type, setType] = useState(TYPES[0]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [name, setName] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setName(String(data.get("name") || "").split(" ")[0]);
    setStatus("sending");
    // Front-end prototype: simulate a request.
    setTimeout(() => setStatus("sent"), 1100);
  };

  if (status === "sent") {
    return (
      <div className="flex min-h-[520px] animate-fade-up flex-col items-start justify-center rounded-[2rem] bg-linen p-8 md:p-12">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-bronze text-2xl text-linen">✓</span>
        <h2 className="mt-8 font-display text-4xl font-medium md:text-5xl">
          Thank you{name ? `, ${name}` : ""}.
        </h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-stone">
          Your request is with our design team. We&apos;ll call you within one working day to schedule your free
          consultation.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-8">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] bg-linen p-6 shadow-[0_30px_80px_-50px_rgba(28,26,23,0.4)] sm:p-10">
      <h2 className="font-display text-3xl font-medium md:text-4xl">Book a free consultation</h2>
      <p className="mt-2 text-sm text-stone">Takes about a minute. Fields marked * are required.</p>

      <fieldset className="mt-8">
        <legend className="mb-3 text-xs font-semibold tracking-[0.2em] text-stone uppercase">Project type</legend>
        <div className="flex flex-wrap gap-2">
          {TYPES.map((t) => (
            <label
              key={t}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition ${
                type === t ? "border-ink bg-ink text-linen" : "border-ink/15 hover:border-ink/40"
              }`}
            >
              <input type="radio" name="type" value={t} checked={type === t} onChange={() => setType(t)} className="sr-only" />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="relative">
          <input id="name" name="name" required autoComplete="name" placeholder="Full name" className={field} />
          <label htmlFor="name" className={floatLabel}>Full name *</label>
        </div>
        <div className="relative">
          <input id="phone" name="phone" type="tel" required autoComplete="tel" pattern="[0-9+\-\s]{8,}" placeholder="Phone" className={field} />
          <label htmlFor="phone" className={floatLabel}>Phone *</label>
        </div>
        <div className="relative">
          <input id="email" name="email" type="email" autoComplete="email" placeholder="Email" className={field} />
          <label htmlFor="email" className={floatLabel}>Email</label>
        </div>
        <div className="relative">
          <input id="location" name="location" placeholder="Project location" className={field} />
          <label htmlFor="location" className={floatLabel}>Project location (e.g. Banani)</label>
        </div>
        <div className="relative">
          <input id="area" name="area" type="number" min={100} placeholder="Area" className={field} />
          <label htmlFor="area" className={floatLabel}>Approx. area (sq ft)</label>
        </div>
        <div className="relative">
          <select id="budget" name="budget" defaultValue="" className={`${field} appearance-none`}>
            <option value="" disabled>
              Select a range
            </option>
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
          <label htmlFor="budget" className="pointer-events-none absolute top-2 left-4 text-[0.7rem] text-mist">
            Budget range
          </label>
          <span aria-hidden className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-xs text-stone">▼</span>
        </div>
        <div className="relative sm:col-span-2">
          <textarea id="message" name="message" rows={4} placeholder="Message" className={`${field} resize-none`} />
          <label htmlFor="message" className={floatLabel}>Tell us about your space and timeline</label>
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-stone">
        <input type="checkbox" name="whatsapp" defaultChecked className="mt-0.5 h-4 w-4 accent-bronze" />
        Send me updates on WhatsApp
      </label>

      <button type="submit" disabled={status === "sending"} className="btn btn-primary mt-8 w-full disabled:opacity-70 sm:w-auto">
        {status === "sending" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-linen/30 border-t-linen" />
            Sending…
          </>
        ) : (
          <>
            Request my consultation <span aria-hidden>→</span>
          </>
        )}
      </button>
    </form>
  );
}
