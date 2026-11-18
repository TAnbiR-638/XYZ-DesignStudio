import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Counter from "@/components/Counter";
import CTABand from "@/components/CTABand";
import { IMG, STATS, TEAM, VALUES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Meet XYZ Design Studio — interior designers, architects and craftsmen working from Gulshan, Dhaka since 2014.",
};

const MILESTONES = [
  { year: "2014", text: "Founded as a two-person design practice in a Dhanmondi flat." },
  { year: "2017", text: "Opened our own joinery workshop to control quality and timelines." },
  { year: "2020", text: "Added architecture and 3D visualization teams." },
  { year: "2023", text: "Moved into our Gulshan-2 studio and material library." },
  { year: "2026", text: "640+ spaces delivered across six cities in Bangladesh." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title={
          <>
            Quietly bold spaces, <em className="text-bronze">made by people</em> who care.
          </>
        }
        intro="Since 2014 we have helped families, founders and restaurateurs turn ordinary floor plans into places they love coming back to."
        image={IMG.rattanLiving}
        crumbs={[{ label: "About" }]}
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl">
              We started with one belief: <em className="text-bronze">good design should feel easy.</em>
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-lg leading-relaxed text-stone">
            <p>
              XYZ Design Studio began as a small team sketching at a kitchen table in Dhanmondi. Our first clients were
              friends and neighbours who wanted their homes to feel calmer, brighter and more personal — without the
              stress that usually comes with renovation.
            </p>
            <p>
              Twelve years later we are thirty-five designers, architects, engineers and craftsmen, but the approach is
              the same. We listen carefully, design around real life, price honestly, and build with our own hands so
              every detail is right.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <Image src={TEAM[0].image} alt={TEAM[0].name} fill sizes="56px" className="object-cover" />
              </div>
              <div>
                <p className="font-display text-2xl text-ink italic">{TEAM[0].name}</p>
                <p className="text-sm">{TEAM[0].role}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-20 grid grid-cols-6 gap-4 md:gap-6">
          <Reveal className="relative col-span-6 aspect-[16/10] overflow-hidden rounded-[2rem] md:col-span-4 md:aspect-auto">
            <Image src={IMG.openDining} alt="Open plan dining and living area" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
          </Reveal>
          <div className="col-span-6 grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-1 md:gap-6">
            <Reveal delay={100} className="relative aspect-square overflow-hidden rounded-[2rem]">
              <Image src={IMG.wallDecor} alt="Styled wall with plants and art" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
            </Reveal>
            <Reveal delay={200} className="relative aspect-square overflow-hidden rounded-[2rem]">
              <Image src={IMG.orangeSofa} alt="Terracotta sofa detail" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-linen">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`py-10 text-center md:py-14 ${i % 2 === 1 ? "border-l border-ink/10" : ""} ${i >= 2 ? "border-t border-ink/10 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <p className="font-display text-5xl font-medium md:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-stone uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we stand for"
            title={
              <>
                Four promises we <em className="text-bronze">keep</em>
              </>
            }
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="group rounded-[1.5rem] border border-ink/10 bg-linen p-8 transition-all duration-500 hover:-translate-y-1 hover:border-bronze/40 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-bronze/10 font-display text-xl text-bronze transition-colors group-hover:bg-bronze group-hover:text-linen">
                  0{i + 1}
                </span>
                <h3 className="mt-8 font-display text-2xl font-medium">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-forest py-24 text-linen md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="eyebrow">Milestones</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] font-medium sm:text-5xl">
              Twelve years, <em className="text-bronze">one craft</em>
            </h2>
          </Reveal>
          <ol className="relative border-l border-linen/15 pl-8 md:pl-12">
            {MILESTONES.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 80} className="relative pb-10 last:pb-0">
                <span className="absolute top-2 -left-[2.3rem] h-3 w-3 rounded-full bg-bronze ring-4 ring-forest md:-left-[3.3rem]" />
                <p className="font-display text-4xl text-bronze">{m.year}</p>
                <p className="mt-2 max-w-md text-linen/75">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="The people"
            title={
              <>
                Meet the <em className="text-bronze">leadership</em> team
              </>
            }
            intro="Behind them stand 30+ designers, engineers, carpenters and stylists — all in-house."
          />
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 90} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-sand">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium">{m.name}</h3>
                <p className="text-sm text-stone">{m.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
