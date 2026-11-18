"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

/** Drag-to-compare: the left side shows the "concept sketch" treatment, the right side the finished room. */
export default function ConceptSlider({ image, alt }: { image: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-pan-y overflow-hidden rounded-[2rem] select-none md:aspect-[16/9]"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <Image src={image} alt={`${alt} — finished`} fill sizes="(max-width: 1320px) 100vw, 1320px" className="object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={image}
          alt={`${alt} — concept`}
          fill
          sizes="(max-width: 1320px) 100vw, 1320px"
          className="object-cover [filter:grayscale(1)_contrast(1.35)_brightness(1.15)_sepia(0.25)]"
          draggable={false}
        />
        <div
          className="absolute inset-0 opacity-40 mix-blend-multiply"
          style={{
            backgroundImage:
              "linear-gradient(rgba(28,26,23,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(28,26,23,.25) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <span className="absolute top-5 left-5 rounded-full bg-ink/80 px-4 py-1.5 text-xs font-semibold tracking-wider text-linen uppercase backdrop-blur">
        Concept
      </span>
      <span className="absolute top-5 right-5 rounded-full bg-linen/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-ink uppercase backdrop-blur">
        Delivered
      </span>

      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -left-px w-0.5 bg-linen shadow-[0_0_20px_rgba(0,0,0,.35)]" />
        <div className="absolute top-1/2 left-0 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-linen text-ink shadow-xl">
          <span className="text-sm tracking-tighter">◀ ▶</span>
        </div>
      </div>

      <label className="sr-only" htmlFor="concept-range">
        Compare concept and delivered room
      </label>
      <input
        id="concept-range"
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
