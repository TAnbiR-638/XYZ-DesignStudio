import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import JobBoard from "@/components/JobBoard";
import { IMG, JOBS, PERKS, STUDIO } from "@/data";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join XYZ Design Studio — open roles for interior designers, architects, site engineers and 3D visualizers in Dhaka.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Do the best work <em className="text-bronze">of your career.</em>
          </>
        }
        intro={`${JOBS.length} open roles in design, architecture, projects and visualization. Grow with a studio that builds what it designs.`}
        image={IMG.teamMeeting}
        crumbs={[{ label: "Careers" }]}
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <span className="eyebrow">Life at XYZ</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] font-medium text-balance sm:text-5xl">
              Designers who build. <em className="text-bronze">Builders who design.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone">
              Because we run our own workshop and site teams, our designers see their drawings become real rooms — and learn
              faster because of it. We are a team of 35 people who share lunch, critique each other&apos;s work kindly and
              celebrate every handover.
            </p>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
              <Image src={IMG.teamTable} alt="Team working together at the studio" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-[2rem]">
              <Image src={IMG.drafting} alt="Designer drafting plans" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-linen py-24 md:py-28">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Benefits" title={<>What we <em className="text-bronze">offer</em></>} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PERKS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90} className="rounded-[1.5rem] border border-ink/10 bg-ivory p-8">
                <span className="font-display text-4xl text-bronze/50">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl font-medium">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="scroll-mt-20 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Open positions"
            title={<>Current <em className="text-bronze">openings</em></>}
            intro="Don't see your role? Send a general application — we keep strong portfolios on file."
          />
          <JobBoard jobs={JOBS} email={STUDIO.careersEmail} />
        </div>
      </section>
    </>
  );
}
