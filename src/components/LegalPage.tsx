import Link from "next/link";

type Section = { heading: string; body: string[] };

export default function LegalPage({ title, updated, intro, sections }: { title: string; updated: string; intro: string; sections: Section[] }) {
  return (
    <>
    <div className="grain relative bg-forest pt-36 pb-14 text-linen md:pt-44 md:pb-20">
      <div className="mx-auto max-w-3xl px-5">
        <nav aria-label="Breadcrumb" className="text-xs text-linen/65">
          <Link href="/" className="hover:text-linen">Home</Link> <span className="mx-1 opacity-50">/</span> {title}
        </nav>
        <h1 className="mt-6 font-display text-5xl font-medium md:text-6xl">{title}</h1>
        <p className="mt-3 text-sm text-linen/55">Last updated: {updated}</p>
      </div>
    </div>
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <p className="text-lg leading-relaxed text-stone">{intro}</p>
        {sections.map((s, i) => (
          <div key={s.heading} className="mt-10">
            <h2 className="font-display text-2xl font-medium md:text-3xl">
              {i + 1}. {s.heading}
            </h2>
            {s.body.map((p) => (
              <p key={p} className="mt-3 leading-relaxed text-ink/80">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
