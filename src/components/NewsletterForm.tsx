"use client";

import { useState } from "react";

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
      className="flex max-w-sm items-center rounded-full border border-linen/20 p-1 focus-within:border-bronze"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email"
        className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-linen placeholder:text-linen/40 focus:outline-none"
      />
      <button type="submit" className="rounded-full bg-bronze px-4 py-2 text-xs font-semibold transition hover:bg-bronze-dark">
        Subscribe
      </button>
    </form>
  );
}
