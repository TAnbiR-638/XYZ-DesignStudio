"use client";

import { useState } from "react";

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const url = () => (typeof window !== "undefined" ? window.location.href : "");
  const open = (href: string) => window.open(href, "_blank", "noopener,noreferrer");

  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.2em] text-stone uppercase">Share</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url())}`)}
          className="rounded-full border border-ink/15 px-3 py-1.5 text-xs transition hover:border-bronze hover:text-bronze"
        >
          Facebook
        </button>
        <button
          type="button"
          onClick={() => open(`https://wa.me/?text=${encodeURIComponent(`${title} ${url()}`)}`)}
          className="rounded-full border border-ink/15 px-3 py-1.5 text-xs transition hover:border-bronze hover:text-bronze"
        >
          WhatsApp
        </button>
        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(url());
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            } catch {
              /* clipboard unavailable */
            }
          }}
          className="rounded-full border border-ink/15 px-3 py-1.5 text-xs transition hover:border-bronze hover:text-bronze"
        >
          {copied ? "Link copied ✓" : "Copy link"}
        </button>
      </div>
    </div>
  );
}
