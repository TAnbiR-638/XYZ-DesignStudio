import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import { PROJECTS, SERVICES } from "@/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.short } : {};
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const index = SERVICES.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const s = SERVICES[index];

  // Projects that actually delivered this service; fall back to the same category.
  const byScope = PROJECTS.filter((p) => p.scope.includes(s.slug));
  const related = (byScope.length ? byScope : PROJECTS.filter((p) => p.category === s.category)).slice(0, 2);
  const others = SERVICES.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHero
        eyebrow={`Service ${String(index + 1).padStart(2, "0")} / ${String(SERVICES.length).padStart(2, "0")}`}
        title={s.title}
        intro={s.short}
        image={s.image}
        crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]}
      />

      <section className="border-b border-ink/10 bg-linen">
        <dl className="container-x grid gap-6 py-8 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold tracking-[0.2em] text-mist uppercase">Starting price</dt>
            <dd className="mt-1 font-display text-xl font-medium md:text-2xl">{s.startingPrice}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-[0.2em] text-mist uppercase">Typical timeline</dt>
            <dd className="mt-1 font-display text-xl font-medium md:text-2xl">{s.timeline}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-[0.2em] text-mist uppercase">Ideal for</dt>
            <dd className="mt-1 font-display text-xl font-medium md:text-2xl">{s.idealFor[0]}</dd>
          </div>
        </dl>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">Overview</span>
            <p className="mt-6 font-display text-3xl leading-[1.3] text-balance md:text-4xl">{s.description}</p>
            <h2 className="mt-14 text-xs font-semibold tracking-[0.2em] text-stone uppercase">What&apos;s included</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.includes.map((inc) => (
                <li key={inc} className="flex items-start gap-3 rounded-xl border border-ink/10 bg-linen p-4 text-sm font-medium">
                  <span className="mt-0.5 text-bronze">✦</span>
                  {inc}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-forest p-8 text-linen md:p-10 lg:sticky lg:top-28">
              <h2 className="font-display text-3xl">You will receive</h2>
              <ul className="mt-6 space-y-3 text-sm text-linen/85">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="text-bronze">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-linen/15 pt-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-linen/55 uppercase">Best suited to</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.idealFor.map((x) => (
                    <li key={x} className="rounded-full border border-linen/20 px-3 py-1 text-xs">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="btn btn-bronze mt-8 w-full">
                Book a free consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {s.gallery.map((src, i) => (
            <Reveal key={src} delay={i * 90} className={`relative overflow-hidden rounded-[1.5rem] ${i === 0 ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[4/5]" : "aspect-[4/5]"}`}>
              <Image src={src} alt={`${s.title} example ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-forest py-24 text-linen md:py-28">
        <div className="container-x">
          <SectionHeading light eyebrow="How it works" title={<>Our approach in <em className="text-bronze">four steps</em></>} />
          <ol className="grid gap-px overflow-hidden rounded-[2rem] bg-linen/10 sm:grid-cols-2 lg:grid-cols-4">
            {s.steps.map((st, i) => (
              <Reveal as="li" key={st.title} delay={i * 90} className="bg-forest p-8">
                <span className="font-display text-5xl text-linen/30">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl">{st.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-linen/65">{st.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-24 md:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="Related work"
              title={<>Projects featuring <em className="text-bronze">{s.title.toLowerCase()}</em></>}
              aside={
                <Link href="/projects" className="btn btn-outline">
                  Full portfolio →
                </Link>
              }
            />
            <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-sand/50 py-24 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] font-medium sm:text-5xl">
              About this <em className="text-bronze">service</em>
            </h2>
          </Reveal>
          <FAQ items={s.faqs} />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-stone uppercase">Other services</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} className="btn btn-outline !py-2.5">
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  );
}
