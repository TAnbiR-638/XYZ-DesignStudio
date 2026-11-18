"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const SPACES = [
  { id: "apartment", label: "Apartment", base: 1.0 },
  { id: "duplex", label: "Duplex / Villa", base: 1.15 },
  { id: "office", label: "Office", base: 0.9 },
  { id: "restaurant", label: "Restaurant / Café", base: 1.25 },
];

const TIERS = [
  { id: "essential", label: "Essential", rate: 1800, note: "Smart layouts, quality local finishes" },
  { id: "signature", label: "Signature", rate: 2800, note: "Custom joinery, layered lighting" },
  { id: "luxe", label: "Luxe", rate: 4200, note: "Imported stone, bespoke furniture" },
];

const fmt = (n: number) => {
  if (n >= 1e7) return `৳${(n / 1e7).toFixed(2)} Cr`;
  return `৳${(n / 1e5).toFixed(1)} Lakh`;
};

export default function CostEstimator() {
  const [space, setSpace] = useState(SPACES[0].id);
  const [tier, setTier] = useState(TIERS[1].id);
  const [area, setArea] = useState(1800);
  const [withFurniture, setWithFurniture] = useState(true);

  const { low, high, weeks } = useMemo(() => {
    const s = SPACES.find((x) => x.id === space)!;
    const t = TIERS.find((x) => x.id === tier)!;
    const mid = area * t.rate * s.base * (withFurniture ? 1 : 0.72);
    return {
      low: mid * 0.88,
      high: mid * 1.12,
      weeks: Math.max(6, Math.round(6 + area / 280)),
    };
  }, [space, tier, area, withFurniture]);

  return (
    <div className="grid overflow-hidden rounded-[2rem] bg-linen shadow-[0_30px_80px_-40px_rgba(28,26,23,0.35)] lg:grid-cols-[1.25fr_1fr]">
      <div className="space-y-9 p-6 sm:p-10 lg:p-12">
        <fieldset>
          <legend className="mb-4 text-xs font-semibold tracking-[0.2em] text-stone uppercase">1 · Type of space</legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {SPACES.map((s) => (
              <label
                key={s.id}
                className={`cursor-pointer rounded-xl border px-3 py-3 text-center text-sm font-medium transition-all ${
                  space === s.id ? "border-ink bg-ink text-linen" : "border-ink/15 hover:border-ink/40"
                }`}
              >
                <input type="radio" name="space" value={s.id} checked={space === s.id} onChange={() => setSpace(s.id)} className="sr-only" />
                {s.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <div className="mb-4 flex items-baseline justify-between">
            <label htmlFor="area" className="text-xs font-semibold tracking-[0.2em] text-stone uppercase">
              2 · Area
            </label>
            <span className="font-display text-3xl font-medium">
              {area.toLocaleString("en-US")} <span className="text-base text-stone">sq ft</span>
            </span>
          </div>
          <input
            id="area"
            type="range"
            min={400}
            max={8000}
            step={50}
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-sand accent-bronze"
            style={{
              background: `linear-gradient(to right, var(--color-bronze) ${((area - 400) / 7600) * 100}%, var(--color-sand) 0)`,
            }}
          />
          <div className="mt-2 flex justify-between text-xs text-mist">
            <span>400</span>
            <span>8,000</span>
          </div>
        </div>

        <fieldset>
          <legend className="mb-4 text-xs font-semibold tracking-[0.2em] text-stone uppercase">3 · Finish level</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {TIERS.map((t) => (
              <label
                key={t.id}
                className={`cursor-pointer rounded-xl border p-4 transition-all ${
                  tier === t.id ? "border-bronze bg-bronze/10 ring-1 ring-bronze" : "border-ink/15 hover:border-ink/40"
                }`}
              >
                <input type="radio" name="tier" value={t.id} checked={tier === t.id} onChange={() => setTier(t.id)} className="sr-only" />
                <span className="block font-display text-xl font-semibold">{t.label}</span>
                <span className="mt-1 block text-xs leading-snug text-stone">{t.note}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-ink/15 p-4">
          <span>
            <span className="block text-sm font-semibold">Include loose furniture &amp; décor</span>
            <span className="text-xs text-stone">Sofas, beds, rugs, curtains and styling</span>
          </span>
          <input type="checkbox" checked={withFurniture} onChange={(e) => setWithFurniture(e.target.checked)} className="peer sr-only" />
          <span className="relative h-7 w-12 shrink-0 rounded-full bg-sand transition peer-checked:bg-bronze peer-focus-visible:ring-2 peer-focus-visible:ring-bronze after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-5" />
        </label>
      </div>

      <div className="grain relative flex flex-col justify-between gap-10 bg-forest p-6 text-linen sm:p-10 lg:p-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-linen/60 uppercase">Estimated investment</p>
          <p className="mt-4 font-display text-5xl leading-none font-medium sm:text-6xl" aria-live="polite">
            {fmt(low)}
            <span className="block text-2xl text-linen/50 sm:text-3xl">to {fmt(high)}</span>
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-linen/15 pt-6">
            <div>
              <p className="text-xs text-linen/55">Approx. timeline</p>
              <p className="mt-1 font-display text-2xl">{weeks}–{weeks + 4} weeks</p>
            </div>
            <div>
              <p className="text-xs text-linen/55">Design fee</p>
              <p className="mt-1 font-display text-2xl">Included</p>
            </div>
          </div>
          <ul className="mt-8 space-y-3" aria-label="Typical budget split">
            {(withFurniture
              ? [
                  ["Civil, electrical & plumbing", 30],
                  ["Joinery & built-ins", 32],
                  ["Lighting & finishes", 16],
                  ["Furniture & décor", 22],
                ]
              : [
                  ["Civil, electrical & plumbing", 38],
                  ["Joinery & built-ins", 42],
                  ["Lighting & finishes", 20],
                ]
            ).map(([label, pct]) => (
              <li key={label}>
                <div className="mb-1.5 flex justify-between text-xs text-linen/70">
                  <span>{label}</span>
                  <span className="tabular-nums">{pct}%</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-linen/10">
                  <div className="h-full rounded-full bg-bronze transition-all duration-700 ease-soft" style={{ width: `${pct}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-5 text-xs leading-relaxed text-linen/55">
            Indicative range for Dhaka projects in 2026. Your itemised quotation follows the free site visit.
          </p>
          <Link href="/contact" className="btn btn-bronze w-full">
            Get my exact quote <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
