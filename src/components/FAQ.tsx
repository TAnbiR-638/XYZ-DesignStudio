"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/data";

export default function FAQ({ items, defaultOpen = 0 }: { items: FaqItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const uid = useId();

  return (
    <ul className="border-t border-ink/10">
      {items.map((f, i) => {
        const isOpen = open === i;
        const qId = `${uid}-q-${i}`;
        const aId = `${uid}-a-${i}`;
        return (
          <li key={f.q} className="border-b border-ink/10">
            <h3>
              <button
                type="button"
                id={qId}
                aria-expanded={isOpen}
                aria-controls={aId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className={`font-display text-xl font-medium transition-colors md:text-2xl ${isOpen ? "text-bronze" : "text-ink"}`}>
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                    isOpen ? "rotate-180 border-bronze bg-bronze text-linen" : "border-ink/15"
                  }`}
                >
                  <span className="absolute h-px w-3.5 bg-current" />
                  <span className={`absolute h-3.5 w-px bg-current transition-transform duration-500 ${isOpen ? "scale-y-0" : ""}`} />
                </span>
              </button>
            </h3>
            <div
              id={aId}
              role="region"
              aria-labelledby={qId}
              className={`grid transition-[grid-template-rows] duration-500 ease-soft ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 leading-relaxed text-stone">{f.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
