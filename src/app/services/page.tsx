import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import { IMG, PROCESS, SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential interiors, office fit-outs, hospitality design, 3D visualization, architecture and turnkey execution in Dhaka.",
};

const PACKAGES = [
  {
    name: "Design Only",
    price: "From ৳120 / sq ft",
    text: "Full design package you can build with your own contractor.",
    points: ["Space planning & layouts", "Mood boards & material palette", "Photoreal 3D renders", "Working drawings & BOQ"],
  },
  {
    name: "Design + Build",
    price: "From ৳1,800 / sq ft",
    text: "Our most popular option — one team from concept to handover.",
    points: ["Everything in Design Only", "In-house joinery & site team", "Dedicated project manager", "12-month warranty"],
    featured: true,
  },
  {
    name: "Consult & Style",
    price: "From ৳25,000",
    text: "Quick expert help for a single room or a finishing touch.",
    points: ["2-hour on-site consultation", "Colour & furniture advice", "Shopping list with links", "Optional styling day"],
  },
];

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
        intro="Design, 3D, architecture, joinery and site execution — delivered by one accountable team."
        image={IMG.islandKitchen}
        crumbs={[{ label: "Services" }]}
      />

      {/* Quick nav */}
      <nav aria-label="Services" className="sticky top-[68px] z-30 border-b border-ink/10 bg-ivory/90 backdrop-blur-md">
        <ul className="container-x no-scrollbar flex gap-6 overflow-x-auto py-4 text-sm font-medium whitespace-nowrap">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="link-underline text-stone hover:text-ink">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="py-20 md:py-28">
        <div className="container-x space-y-24 md:space-y-32">
          {SERVICES.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-36 items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <Reveal className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] ${i % 2 ? "lg:order-2" : ""}`}>
                <Image src={s.image} alt={s.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <span className="absolute top-5 left-5 grid h-14 w-14 place-items-center rounded-full bg-linen font-display text-xl text-ink">
                  0{i + 1}
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="font-display text-4xl leading-tight font-medium tracking-tight sm:text-5xl">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-stone">{s.description}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3 rounded-xl border border-ink/10 bg-linen p-4 text-sm font-medium">
                      <span className="mt-0.5 text-bronze">✦</span>
                      {inc}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-primary mt-8">
                  Discuss your {s.title.split(" ")[0].toLowerCase()} project <span aria-hidden>→</span>
                </Link>
              </Reveal>
            </article>
          ))}
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
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-bronze px-4 py-1 text-xs font-semibold text-linen">
                    Most popular
                  </span>
                )}
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

      <section className="pb-8">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] font-medium sm:text-5xl">
              Questions about <em className="text-bronze">services</em>
            </h2>
          </Reveal>
          <FAQ />
        </div>
      </section>

      <CTABand />
    </>
  );
}
