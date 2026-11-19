import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import { FAQ_GROUPS, IMG, PACKAGES, PARTNERS, PROCESS, SERVICES } from "@/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential and office interiors, hospitality design, 3D visualization, architecture, landscape, renovation, custom furniture and turnkey execution in Dhaka.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything your space needs, <em className="text-bronze">under one roof.</em>
          </>
        }
        intro={`${SERVICES.length} specialist services — design, 3D, architecture, landscape, joinery and site execution — delivered by one accountable team.`}
        image={IMG.islandKitchen}
        crumbs={[{ label: "Services" }]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-linen transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={s.image} alt={s.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-105" />
                    <span className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-full bg-linen font-display text-lg">0{i + 1}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h2 className="font-display text-2xl font-medium transition-colors group-hover:text-bronze md:text-3xl">{s.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">{s.short}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-ink/10 pt-5 text-xs">
                      <div>
                        <dt className="font-semibold tracking-wider text-mist uppercase">Starting at</dt>
                        <dd className="mt-1 font-medium text-ink">{s.startingPrice}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold tracking-wider text-mist uppercase">Timeline</dt>
                        <dd className="mt-1 font-medium text-ink">{s.timeline}</dd>
                      </div>
                    </dl>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      Explore service <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/60 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Ways to work with us"
            title={
              <>
                Choose the level of <em className="text-bronze">support</em> you need
              </>
            }
            intro="Transparent starting prices. Your final quotation is itemised line by line after the site visit."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 100}
                className={`relative flex flex-col rounded-[2rem] p-8 md:p-10 ${
                  p.featured ? "bg-forest text-linen shadow-2xl lg:-translate-y-4" : "border border-ink/10 bg-linen"
                }`}
              >
                {p.featured && <span className="absolute -top-3 left-8 rounded-full bg-bronze px-4 py-1 text-xs font-semibold text-linen">Most popular</span>}
                <h3 className="font-display text-3xl font-medium">{p.name}</h3>
                <p className={`mt-2 text-sm ${p.featured ? "text-linen/70" : "text-stone"}`}>{p.text}</p>
                <p className="mt-8 font-display text-4xl text-bronze">{p.price}</p>
                <ul className={`mt-8 flex-1 space-y-3 border-t pt-8 text-sm ${p.featured ? "border-linen/15" : "border-ink/10"}`}>
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="text-bronze">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn mt-10 w-full ${p.featured ? "btn-bronze" : "btn-outline"}`}>
                  Get started
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-stone">
            Want a number for your own space?{" "}
            <Link href="/cost-calculator" className="font-semibold text-ink underline decoration-bronze underline-offset-4">
              Try the room-by-room cost calculator
            </Link>
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Timeline" title={<>What happens <em className="text-bronze">when</em></>} />
          <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
            {PROCESS.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 70} className="relative border-t border-ink/15 pt-6">
                <span className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-bronze" />
                <p className="text-xs font-semibold tracking-wider text-bronze uppercase">{p.time}</p>
                <h3 className="mt-2 font-display text-2xl font-medium">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-linen py-14">
        <div className="container-x">
          <p className="text-center text-xs font-semibold tracking-[0.25em] text-stone uppercase">Hardware &amp; materials we regularly specify</p>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {PARTNERS.map((p) => (
              <li key={p} className="font-display text-2xl font-semibold text-ink/40 md:text-3xl">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] font-medium sm:text-5xl">
              Questions about <em className="text-bronze">cost &amp; payment</em>
            </h2>
            <Link href="/faq" className="btn btn-outline mt-8">
              All FAQs
            </Link>
          </Reveal>
          <FAQ items={FAQ_GROUPS[1].items} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
