"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SERVICES } from "@/lib/data";
import Reveal from "../Reveal";

/** Editorial list on desktop: hovering a row swaps the sticky preview image. */
export default function ServicesList() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
      <ul className="border-t border-ink/10">
        {SERVICES.map((s, i) => (
          <Reveal as="li" key={s.slug} delay={i * 60}>
            <Link
              href={`/services#${s.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group flex items-start gap-5 border-b border-ink/10 py-6 transition-colors md:gap-8 md:py-8"
            >
              <span className={`pt-2 text-xs font-semibold tabular-nums transition-colors ${active === i ? "text-bronze" : "text-mist"}`}>
                0{i + 1}
              </span>
              <span className="flex-1">
                <span
                  className={`block font-display text-3xl leading-tight font-medium transition-all duration-500 md:text-[2.6rem] ${
                    active === i ? "translate-x-2 text-ink italic" : "text-ink/75"
                  }`}
                >
                  {s.title}
                </span>
                <span className="mt-2 block max-w-md text-sm leading-relaxed text-stone">{s.short}</span>
                {/* Inline image for small screens */}
                <span className="relative mt-5 block aspect-[16/10] overflow-hidden rounded-2xl lg:hidden">
                  <Image src={s.image} alt={s.title} fill sizes="100vw" className="object-cover" />
                </span>
              </span>
              <span
                aria-hidden
                className={`mt-2 hidden h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-500 sm:grid ${
                  active === i ? "rotate-0 border-bronze bg-bronze text-linen" : "-rotate-45 border-ink/15 text-ink"
                }`}
              >
                →
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>

      <div className="relative hidden lg:block">
        <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
          {SERVICES.map((s, i) => (
            <Image
              key={s.slug}
              src={s.image}
              alt={s.title}
              fill
              sizes="45vw"
              className={`object-cover transition-all duration-[900ms] ease-soft ${
                active === i ? "scale-100 opacity-100" : "scale-110 opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-8 text-linen">
            <p className="text-xs font-semibold tracking-[0.25em] text-linen/70 uppercase">What&apos;s included</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
              {SERVICES[active].includes.map((inc) => (
                <li key={inc} className="flex gap-2">
                  <span className="text-bronze">—</span>
                  {inc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
