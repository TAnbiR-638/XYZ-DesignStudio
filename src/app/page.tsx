import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/home/HeroSlider";
import ServicesList from "@/components/home/ServicesList";
import ConceptSlider from "@/components/home/ConceptSlider";
import CostEstimator from "@/components/home/CostEstimator";
import Testimonials from "@/components/home/Testimonials";
import ProjectGallery from "@/components/ProjectGallery";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import { CLIENTS, IMG, PROCESS, STATS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Service ribbon */}
      <section aria-label="What we design" className="border-b border-ink/10 bg-linen py-6 md:py-8">
        <Marquee
          items={["Residential", "Workplaces", "Restaurants & Cafés", "3D Visualization", "Façades", "Custom Joinery", "Turnkey Fit-out"]}
          itemClassName="font-display text-3xl italic text-ink/80 md:text-5xl"
        />
      </section>

      {/* Intro / studio */}
      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-[82%] overflow-hidden rounded-t-full bg-sand">
              <Image src={IMG.bohoLiving} alt="Soft neutral living room by XYZ Design Studio" fill sizes="(max-width: 1024px) 80vw, 40vw" className="object-cover" />
            </div>
            <div className="absolute right-0 bottom-[-8%] aspect-square w-[46%] overflow-hidden rounded-[1.5rem] border-8 border-ivory bg-sand shadow-2xl">
              <Image src={IMG.yellowChair} alt="Detail of a yellow lounge chair" fill sizes="(max-width: 1024px) 45vw, 22vw" className="object-cover" />
            </div>
            <div className="absolute top-10 -left-2 rounded-2xl bg-linen px-5 py-4 shadow-xl sm:-left-6">
              <p className="font-display text-4xl font-semibold text-bronze">12+</p>
              <p className="text-xs font-medium text-stone">years shaping Dhaka homes</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">The studio</span>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:text-[3.6rem]">
                Design that starts with <em className="text-bronze">how you live</em> — not with a trend.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-7 text-lg leading-relaxed text-stone">
                XYZ Design Studio is a team of interior designers, architects and craftsmen who believe a good room
                should make everyday life easier and quietly beautiful. We handle everything under one roof — concept,
                3D, joinery, site work and styling — so you get one point of contact and one honest price.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Free first consultation", "Fixed handover date", "In-house workshop", "12-month warranty"].map((x) => (
                  <li key={x} className="flex items-center gap-3 text-sm font-medium">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-bronze/15 text-xs text-bronze">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/about" className="btn btn-primary">
                  Meet the studio <span aria-hidden>→</span>
                </Link>
                <Link href="/services" className="btn btn-outline">
                  Our services
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-ink/10 bg-linen">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className={`py-10 text-center md:py-14 ${i % 2 === 1 ? "border-l border-ink/10" : ""} ${i >= 2 ? "border-t border-ink/10 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <p className="font-display text-5xl font-medium text-ink md:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-stone uppercase">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Six ways we bring <em className="text-bronze">spaces</em> to life
              </>
            }
            aside={
              <Link href="/services" className="btn btn-outline">
                All services <span aria-hidden>→</span>
              </Link>
            }
          />
          <ServicesList />
        </div>
      </section>

      {/* Projects */}
      <section className="bg-sand/60 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Recent projects, <em className="text-bronze">lived in</em> and loved
              </>
            }
            intro="A look at homes, offices and restaurants we've completed across Dhaka in the last two years."
            aside={
              <Link href="/projects" className="btn btn-primary">
                View all projects <span aria-hidden>→</span>
              </Link>
            }
          />
          <ProjectGallery limit={4} />
        </div>
      </section>

      {/* Concept vs Delivered */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="From sketch to reality"
            align="center"
            title={
              <>
                What you approve is <em className="text-bronze">what you get</em>
              </>
            }
            intro="Drag the handle. Every project starts with detailed concepts and photoreal 3D, so the finished room matches the plan — down to the last fixture."
          />
          <Reveal>
            <ConceptSlider image={IMG.sunLiving} alt="Living room for the Ashwood Residence" />
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="grain relative scroll-mt-20 overflow-hidden bg-forest py-24 text-linen md:py-32">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="How we work"
            title={
              <>
                A clear path from <em className="text-bronze">hello</em> to handover
              </>
            }
            intro="Six simple stages, one dedicated project manager and weekly updates — so you always know what's happening and what comes next."
          />
          <ol className="grid gap-px overflow-hidden rounded-[2rem] bg-linen/10 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={(i % 3) * 100}
                className="group relative bg-forest p-8 transition-colors duration-500 hover:bg-forest-light md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-6xl leading-none font-medium text-linen/30 transition-colors duration-500 group-hover:text-bronze">
                    0{i + 1}
                  </span>
                  <span className="rounded-full border border-linen/20 px-3 py-1 text-[0.7rem] font-semibold tracking-wider text-linen/70">
                    {p.time}
                  </span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-medium md:text-3xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-linen/65">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Estimator */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Budget planner"
            title={
              <>
                Estimate your project <em className="text-bronze">in 30 seconds</em>
              </>
            }
            intro="Pick your space, size and finish level to see a realistic budget range. No sign-up, no spam."
          />
          <Reveal>
            <CostEstimator />
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="grain relative overflow-hidden bg-ink py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Kind words</span>
          </Reveal>
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section aria-label="Clients" className="border-b border-ink/10 bg-linen py-14">
        <p className="container-x mb-8 text-center text-xs font-semibold tracking-[0.25em] text-stone uppercase">
          Trusted by homeowners and brands like
        </p>
        <Marquee items={CLIENTS} separator="·" itemClassName="font-display text-3xl font-semibold tracking-wide text-ink/35 md:text-4xl" />
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <span className="eyebrow">Good questions</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl">
              Everything you <em className="text-bronze">wanted to ask</em>
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-stone">
              Still unsure? Our designers are happy to talk it through — no pressure, no jargon.
            </p>
            <Link href="/contact" className="btn btn-outline mt-8">
              Ask us anything
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <FAQ />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
