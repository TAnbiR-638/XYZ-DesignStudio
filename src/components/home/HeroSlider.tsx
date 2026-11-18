"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { HERO_SLIDES } from "@/lib/data";

const INTERVAL = 6500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = HERO_SLIDES.length;

  const go = useCallback((i: number) => setIndex((i + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  const slide = HERO_SLIDES[index];

  return (
    <section
      className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden bg-forest text-linen"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.title}
          aria-hidden={i !== index}
          className={`absolute inset-0 -z-10 transition-opacity duration-[1400ms] ease-soft ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === index ? "animate-kenburns" : ""}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

      <div className="container-x relative pt-36 pb-10 md:pb-14">
        <div className="max-w-4xl">
          <p className="eyebrow animate-fade-up text-linen/85">Interior &amp; Architecture Studio · Dhaka</p>
          <h1 className="mt-6 animate-fade-up font-display text-[3.2rem] leading-[0.95] font-medium tracking-tight [animation-delay:150ms] sm:text-7xl lg:text-[6.6rem]">
            Spaces that feel <br className="hidden sm:block" />
            like <em className="font-normal text-bronze">you</em>, only better.
          </h1>
          <p className="mt-7 max-w-xl animate-fade-up text-base leading-relaxed text-linen/80 [animation-delay:300ms] md:text-lg">
            We design and build calm, characterful homes, workplaces and restaurants — from the first sketch
            to the last cushion, with one team and one honest price.
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:450ms]">
            <Link href="/projects" className="btn btn-bronze">
              Explore our work <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Free consultation
            </Link>
          </div>
        </div>

        {/* Slide meta + controls */}
        <div className="mt-14 flex flex-col gap-6 border-t border-linen/20 pt-6 sm:flex-row sm:items-end sm:justify-between md:mt-20">
          <div aria-live="polite" className="min-h-[3.25rem]">
            <p key={slide.eyebrow} className="animate-fade-up text-xs font-semibold tracking-[0.25em] text-linen/60 uppercase">
              {slide.eyebrow}
            </p>
            <p key={slide.title} className="mt-1 animate-fade-up font-display text-2xl italic">
              {slide.title}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <span className="font-display text-lg tabular-nums">
              {String(index + 1).padStart(2, "0")}
              <span className="text-linen/40"> / {String(total).padStart(2, "0")}</span>
            </span>
            <div className="flex gap-2">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show slide ${i + 1}: ${s.title}`}
                  aria-current={i === index}
                  className="group relative h-8 w-10 sm:w-14"
                >
                  <span className="absolute inset-x-0 top-1/2 h-px bg-linen/25" />
                  <span
                    key={`${index}-${paused}`}
                    className={`absolute top-1/2 left-0 h-px bg-linen ${
                      i < index ? "w-full" : i === index ? (paused ? "w-full" : "progress-fill") : "w-0"
                    }`}
                    style={i === index && !paused ? { animationDuration: `${INTERVAL}ms` } : undefined}
                  />
                </button>
              ))}
            </div>
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="grid h-11 w-11 place-items-center rounded-full border border-linen/30 transition hover:bg-linen hover:text-ink"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="grid h-11 w-11 place-items-center rounded-full border border-linen/30 transition hover:bg-linen hover:text-ink"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
