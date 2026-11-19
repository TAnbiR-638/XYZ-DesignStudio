import Counter from "./Counter";
import { STATS } from "@/data";

export default function StatsBar() {
  return (
    <section aria-label="Studio in numbers" className="border-y border-ink/10 bg-linen">
      <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col-reverse py-10 text-center md:py-14 ${i % 2 === 1 ? "border-l border-ink/10" : ""} ${
              i >= 2 ? "border-t border-ink/10 lg:border-t-0" : ""
            } ${i === 2 ? "lg:border-l" : ""}`}
          >
            <dt className="mt-2 text-xs font-semibold tracking-[0.2em] text-stone uppercase">{s.label}</dt>
            <dd className="font-display text-5xl font-medium text-ink md:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
