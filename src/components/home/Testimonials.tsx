"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % n), 7000);
    return () => clearTimeout(t);
  }, [i, paused, n]);

  const t = TESTIMONIALS[i];

  return (
    <div
      className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto h-56 w-48 sm:h-72 sm:w-60">
        {TESTIMONIALS.map((x, k) => (
          <div
            key={x.name}
            className={`absolute inset-0 overflow-hidden rounded-t-full transition-all duration-700 ease-soft ${
              k === i ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <Image src={x.image} alt={x.name} fill sizes="240px" className="object-cover" />
          </div>
        ))}
        <span className="absolute -right-4 -bottom-4 grid h-16 w-16 place-items-center rounded-full bg-bronze font-display text-5xl leading-none text-linen">
          &rdquo;
        </span>
      </div>

      <div>
        <div className="mb-6 flex gap-1 text-bronze" aria-label="Rated 5 out of 5">
          {Array.from({ length: 5 }).map((_, k) => (
            <svg key={k} width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M10 1.5l2.6 5.5 6 .7-4.5 4.1 1.2 5.9L10 14.8 4.7 17.7l1.2-5.9L1.4 7.7l6-.7z" />
            </svg>
          ))}
        </div>
        <blockquote key={t.name} className="animate-fade-up">
          <p className="font-display text-3xl leading-[1.2] font-medium text-balance text-linen md:text-[2.6rem]">
            {t.quote}
          </p>
          <footer className="mt-8">
            <p className="font-semibold text-linen">{t.name}</p>
            <p className="text-sm text-linen/55">{t.role}</p>
          </footer>
        </blockquote>

        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setI((i - 1 + n) % n)}
            aria-label="Previous testimonial"
            className="grid h-12 w-12 place-items-center rounded-full border border-linen/25 text-linen transition hover:bg-linen hover:text-ink"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setI((i + 1) % n)}
            aria-label="Next testimonial"
            className="grid h-12 w-12 place-items-center rounded-full border border-linen/25 text-linen transition hover:bg-linen hover:text-ink"
          >
            →
          </button>
          <div className="ml-2 flex gap-2">
            {TESTIMONIALS.map((x, k) => (
              <button
                key={x.name}
                type="button"
                onClick={() => setI(k)}
                aria-label={`Testimonial from ${x.name}`}
                aria-current={k === i}
                className={`h-2 rounded-full transition-all duration-500 ${k === i ? "w-8 bg-bronze" : "w-2 bg-linen/30 hover:bg-linen/60"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
