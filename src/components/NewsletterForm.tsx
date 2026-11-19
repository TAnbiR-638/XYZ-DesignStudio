"use client";

import { useState, type CSSProperties } from "react";

const autofill = { "--autofill-bg": "#1c1a17", "--autofill-text": "#fbf8f3" } as CSSProperties;

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return <p className="text-sm text-linen/80">Thank you — you&apos;re on the list. ✦</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex max-w-sm items-center gap-1 overflow-hidden rounded-full border border-linen/20 p-1 transition-colors focus-within:border-bronze"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        autoComplete="email"
        placeholder="Your email"
        style={autofill}
        className="h-10 min-w-0 flex-1 rounded-full bg-transparent px-4 text-sm text-linen placeholder:text-linen/40 focus:outline-none"
      />
      <button
        type="submit"
        className="h-10 shrink-0 rounded-full bg-bronze px-5 text-xs font-semibold text-linen transition hover:bg-bronze-dark"
      >
        Subscribe
      </button>
    </form>
  );
}
