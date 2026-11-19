"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";

/** Editorial image grid; clicking any image opens a full-screen viewer with keyboard and swipe support. */
export default function Lightbox({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const n = images.length;
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const [touchX, setTouchX] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {images.map((src, i) => (
          <Reveal
            key={`${src}-${i}`}
            delay={(i % 2) * 100}
            className={`relative overflow-hidden rounded-[2rem] bg-sand ${i === 0 ? "aspect-[16/9] md:col-span-2" : "aspect-[4/3]"} ${
              i === 3 ? "md:col-span-2 md:aspect-[21/9]" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open image ${i + 1} of ${n} full screen`}
              className="group absolute inset-0 cursor-zoom-in"
            >
              <Image
                src={src}
                alt={`${title} — view ${i + 1}`}
                fill
                sizes={i === 0 || i === 3 ? "(max-width: 1320px) 100vw, 1320px" : "(max-width: 768px) 100vw, 50vw"}
                className="object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-105"
              />
              <span className="absolute right-4 bottom-4 grid h-11 w-11 place-items-center rounded-full bg-linen/90 text-ink opacity-0 transition-opacity group-hover:opacity-100">
                ⤢
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          className="fixed inset-0 z-[60] flex animate-fade-up items-center justify-center bg-ink/95 p-4 [animation-duration:300ms]"
          onClick={close}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            setTouchX(null);
          }}
        >
          <div className="relative h-[80vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image src={images[index]} alt={`${title} — view ${index + 1}`} fill sizes="100vw" className="object-contain" />
          </div>
          <p className="absolute top-5 left-5 text-sm text-linen/80 tabular-nums">
            {index + 1} / {n}
          </p>
          <button type="button" onClick={close} aria-label="Close gallery" className="absolute top-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-linen/10 text-2xl text-linen hover:bg-linen/20">
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full bg-linen/10 text-linen hover:bg-linen/20"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full bg-linen/10 text-linen hover:bg-linen/20"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
