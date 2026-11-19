import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { FAQ_GROUPS, FAQS, IMG } from "@/data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about cost, payment, timelines, materials and warranty for interior design projects with XYZ Design Studio.",
};

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions, <em className="text-bronze">answered.</em>
          </>
        }
        intro={`${FAQS.length} straightforward answers about cost, process, materials and warranty.`}
        image={IMG.greyLounge}
        crumbs={[{ label: "FAQ" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
          <nav aria-label="FAQ topics" className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold tracking-[0.25em] text-stone uppercase">Topics</p>
            <ul className="no-scrollbar mt-4 flex gap-2 overflow-x-auto lg:flex-col lg:gap-1">
              {FAQ_GROUPS.map((g) => (
                <li key={g.topic} className="shrink-0">
                  <a
                    href={`#${slugify(g.topic)}`}
                    className="block rounded-full border border-ink/15 px-4 py-2 text-sm transition hover:border-bronze hover:text-bronze lg:rounded-xl lg:border-0 lg:px-3"
                  >
                    {g.topic} <span className="text-mist">({g.items.length})</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 hidden rounded-[1.5rem] bg-forest p-6 text-linen lg:block">
              <p className="font-display text-2xl">Still have a question?</p>
              <p className="mt-2 text-sm text-linen/70">A designer will reply within one working day.</p>
              <Link href="/contact" className="btn btn-bronze mt-5 w-full">Ask us</Link>
            </div>
          </nav>
          <div className="min-w-0 space-y-16">
            {FAQ_GROUPS.map((g, i) => (
              <Reveal key={g.topic} delay={i * 60}>
                <section id={slugify(g.topic)} className="scroll-mt-28">
                  <h2 className="mb-4 font-display text-3xl font-medium md:text-4xl">{g.topic}</h2>
                  <FAQ items={g.items} defaultOpen={null} />
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
