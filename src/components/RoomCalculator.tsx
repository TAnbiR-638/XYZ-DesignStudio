"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ADDONS, ROOMS, STUDIO, TIERS, formatBDT, type TierId } from "@/data";

const VARIANCE = 0.1;

export default function RoomCalculator() {
  const [tier, setTier] = useState<TierId>("signature");
  const [area, setArea] = useState(1800);
  const [counts, setCounts] = useState<Record<string, number>>(() => Object.fromEntries(ROOMS.map((r) => [r.id, r.default])));
  const [addons, setAddons] = useState<Record<string, boolean>>({ ceiling: true, paint: true, smart: false, curtains: true, furniture: false });

  // Phones: show a sticky total until the full summary card scrolls into view.
  const summaryRef = useRef<HTMLElement>(null);
  const [summaryVisible, setSummaryVisible] = useState(false);
  useEffect(() => {
    const el = summaryRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setSummaryVisible(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const setCount = (id: string, v: number, max: number) => setCounts((c) => ({ ...c, [id]: Math.max(0, Math.min(max, v)) }));

  const result = useMemo(() => {
    const roomLines = ROOMS.filter((r) => counts[r.id] > 0).map((r) => ({
      label: counts[r.id] > 1 ? `${r.label} × ${counts[r.id]}` : r.label,
      amount: r.rate[tier] * counts[r.id],
    }));
    const roomsTotal = roomLines.reduce((s, l) => s + l.amount, 0);
    const addonLines = ADDONS.filter((a) => addons[a.id]).map((a) => ({
      label: a.label,
      amount: a.perSqft ? a.perSqft[tier] * area : a.flat ? a.flat[tier] : (a.percent ?? 0) * roomsTotal,
    }));
    const total = roomsTotal + addonLines.reduce((s, l) => s + l.amount, 0);
    const roomCount = Object.values(counts).reduce((a, b) => a + b, 0);
    const weeks = Math.max(6, Math.round(5 + area / 300 + roomCount * 0.3));
    return { roomLines, addonLines, total, weeks, perSqft: area ? total / area : 0 };
  }, [tier, area, counts, addons]);

  const tierLabel = TIERS.find((t) => t.id === tier)!.label;
  const summary = [
    `Hello XYZ Design Studio, I used your cost calculator:`,
    `• Area: ${area.toLocaleString("en-US")} sq ft, ${tierLabel} finish`,
    ...result.roomLines.map((l) => `• ${l.label}`),
    ...result.addonLines.map((l) => `• ${l.label}`),
    `Estimate: ${formatBDT(result.total * (1 - VARIANCE))} – ${formatBDT(result.total * (1 + VARIANCE))}`,
    `I'd like a detailed quotation.`,
  ].join("\n");

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
      <div className="space-y-8">
        {/* Step 1 */}
        <section className="rounded-[2rem] bg-linen p-6 sm:p-8">
          <h2 className="flex items-center gap-3 font-display text-2xl font-medium">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-sans text-xs text-linen">1</span>
            Size &amp; finish level
          </h2>
          <div className="mt-6">
            <div className="mb-3 flex items-baseline justify-between">
              <label htmlFor="calc-area" className="text-sm font-medium text-stone">
                Total apartment area
              </label>
              <span className="flex items-baseline gap-1">
                <input
                  type="number"
                  min={400}
                  max={10000}
                  step={50}
                  value={area}
                  onChange={(e) => setArea(Math.max(0, Number(e.target.value)))}
                  aria-label="Area in square feet"
                  className="w-24 rounded-lg border border-ink/15 bg-ivory px-2 py-1 text-right font-display text-2xl focus:border-bronze focus:outline-none"
                />
                <span className="text-sm text-stone">sq ft</span>
              </span>
            </div>
            <input
              id="calc-area"
              type="range"
              min={400}
              max={10000}
              step={50}
              value={Math.min(10000, Math.max(400, area))}
              onChange={(e) => setArea(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full accent-bronze"
              style={{ background: `linear-gradient(to right, var(--color-bronze) ${((Math.min(10000, Math.max(400, area)) - 400) / 9600) * 100}%, var(--color-sand) 0)` }}
            />
          </div>
          <fieldset className="mt-8">
            <legend className="mb-3 text-sm font-medium text-stone">Finish level</legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {TIERS.map((t) => (
                <label
                  key={t.id}
                  className={`cursor-pointer rounded-xl border p-4 transition-all ${
                    tier === t.id ? "border-bronze bg-bronze/10 ring-1 ring-bronze" : "border-ink/15 hover:border-ink/40"
                  }`}
                >
                  <input type="radio" name="calc-tier" checked={tier === t.id} onChange={() => setTier(t.id)} className="sr-only" />
                  <span className="block font-display text-xl font-semibold">{t.label}</span>
                  <span className="mt-1 block text-xs leading-snug text-stone">{t.note}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </section>

        {/* Step 2 */}
        <section className="rounded-[2rem] bg-linen p-6 sm:p-8">
          <h2 className="flex items-center gap-3 font-display text-2xl font-medium">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-sans text-xs text-linen">2</span>
            Rooms to design
          </h2>
          <ul className="mt-6 divide-y divide-ink/10">
            {ROOMS.map((r) => (
              <li key={r.id} className="flex items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <p className="font-medium">{r.label}</p>
                  <p className="text-xs text-stone">
                    {r.hint} · {formatBDT(r.rate[tier])} each
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1 rounded-full border border-ink/15 bg-ivory p-1">
                  <button
                    type="button"
                    onClick={() => setCount(r.id, counts[r.id] - 1, r.max)}
                    disabled={counts[r.id] === 0}
                    aria-label={`Fewer: ${r.label}`}
                    className="grid h-8 w-8 place-items-center rounded-full text-lg transition hover:bg-sand disabled:opacity-30"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-semibold tabular-nums" aria-live="polite">
                    {counts[r.id]}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCount(r.id, counts[r.id] + 1, r.max)}
                    disabled={counts[r.id] === r.max}
                    aria-label={`More: ${r.label}`}
                    className="grid h-8 w-8 place-items-center rounded-full text-lg transition hover:bg-sand disabled:opacity-30"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Step 3 */}
        <section className="rounded-[2rem] bg-linen p-6 sm:p-8">
          <h2 className="flex items-center gap-3 font-display text-2xl font-medium">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-sans text-xs text-linen">3</span>
            Extras
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {ADDONS.map((a) => (
              <label
                key={a.id}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                  addons[a.id] ? "border-bronze bg-bronze/5" : "border-ink/15 hover:border-ink/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={!!addons[a.id]}
                  onChange={(e) => setAddons((s) => ({ ...s, [a.id]: e.target.checked }))}
                  className="mt-1 h-4 w-4 shrink-0 accent-bronze"
                />
                <span>
                  <span className="block text-sm font-semibold">{a.label}</span>
                  <span className="block text-xs text-stone">{a.hint}</span>
                </span>
              </label>
            ))}
          </div>
        </section>
      </div>

      {/* Summary */}
      <div
        className={`no-print fixed inset-x-0 bottom-0 z-30 border-t border-linen/10 bg-forest/95 py-3 pr-20 pl-5 text-linen backdrop-blur transition-transform duration-500 lg:hidden ${
          summaryVisible ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <button
          type="button"
          onClick={() => summaryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
          className="flex w-full items-center justify-between gap-3 text-left"
        >
          <span>
            <span className="block text-[0.65rem] font-semibold tracking-[0.2em] text-linen/60 uppercase">Live estimate</span>
            <span className="font-display text-xl">
              {formatBDT(result.total * (1 - VARIANCE))} – {formatBDT(result.total * (1 + VARIANCE))}
            </span>
          </span>
          <span className="shrink-0 rounded-full bg-bronze px-3 py-1.5 text-xs font-semibold">Details ↓</span>
        </button>
      </div>

      <aside ref={summaryRef} id="estimate" className="scroll-mt-24 lg:sticky lg:top-28" aria-label="Estimate summary">
        <div className="grain relative overflow-hidden rounded-[2rem] bg-forest p-6 text-linen sm:p-8">
          <p className="text-xs font-semibold tracking-[0.25em] text-linen/60 uppercase">Your estimate</p>
          <p className="mt-3 font-display text-4xl leading-tight sm:text-5xl" aria-live="polite">
            {formatBDT(result.total * (1 - VARIANCE))}
            <span className="block text-2xl text-linen/55">to {formatBDT(result.total * (1 + VARIANCE))}</span>
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 border-y border-linen/15 py-5 text-sm">
            <div>
              <p className="text-xs text-linen/55">Timeline</p>
              <p className="mt-1 font-display text-xl">
                {result.weeks}–{result.weeks + 4} weeks
              </p>
            </div>
            <div>
              <p className="text-xs text-linen/55">Average rate</p>
              <p className="mt-1 font-display text-xl">৳{Math.round(result.perSqft).toLocaleString("en-IN")}/sq ft</p>
            </div>
          </div>

          <details className="group mt-5" open>
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
              Itemised breakdown
              <span className="transition-transform group-open:rotate-180">▾</span>
            </summary>
            <ul className="mt-4 space-y-2 text-sm">
              {[...result.roomLines, ...result.addonLines].map((l) => (
                <li key={l.label} className="flex justify-between gap-4">
                  <span className="text-linen/75">{l.label}</span>
                  <span className="shrink-0 tabular-nums">{formatBDT(l.amount)}</span>
                </li>
              ))}
              <li className="flex justify-between gap-4 border-t border-linen/15 pt-2 font-semibold">
                <span>Design &amp; 3D</span>
                <span className="text-bronze">Included</span>
              </li>
            </ul>
          </details>

          <div className="no-print mt-7 grid gap-2">
            <a
              href={`https://wa.me/${STUDIO.whatsappNumber}?text=${encodeURIComponent(summary)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-bronze w-full"
            >
              Send estimate on WhatsApp
            </a>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/contact" className="btn btn-ghost w-full !px-3">
                Book site visit
              </Link>
              <button type="button" onClick={() => window.print()} className="btn btn-ghost w-full !px-3">
                Print / PDF
              </button>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-stone">
          Indicative 2026 Dhaka prices including materials, labour and project management. Excludes structural changes, appliances
          and VAT. Your final itemised quotation follows a free site visit.
        </p>
      </aside>
    </div>
  );
}
