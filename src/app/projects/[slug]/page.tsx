import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import CTABand from "@/components/CTABand";
import { PROJECTS } from "@/lib/data";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.summary };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const related = PROJECTS.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 2);
  const more = related.length ? related : PROJECTS.filter((x) => x.slug !== p.slug).slice(0, 2);

  const facts = [
    { label: "Category", value: p.category },
    { label: "Location", value: p.location },
    { label: "Area", value: p.area },
    { label: "Duration", value: p.duration },
    { label: "Completed", value: p.year },
  ];

  return (
    <>
      <PageHero
        eyebrow={p.category}
        title={p.title}
        intro={p.summary}
        image={p.cover}
        crumbs={[{ label: "Projects", href: "/projects" }, { label: p.title }]}
      />

      <section className="border-b border-ink/10 bg-linen">
        <dl className="container-x grid grid-cols-2 gap-y-6 py-8 sm:grid-cols-3 lg:grid-cols-5">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-xs font-semibold tracking-[0.2em] text-mist uppercase">{f.label}</dt>
              <dd className="mt-1 font-display text-xl font-medium md:text-2xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">The brief &amp; the result</span>
            <p className="mt-6 font-display text-3xl leading-[1.3] text-balance text-ink md:text-4xl">{p.story}</p>
          </Reveal>
          <Reveal delay={120} className="lg:pt-14">
            <p className="text-xs font-semibold tracking-[0.2em] text-stone uppercase">Material palette</p>
            <ul className="mt-5 flex gap-3">
              {p.palette.map((c) => (
                <li key={c} className="text-center">
                  <span className="block h-16 w-16 rounded-full border border-ink/10 shadow-inner" style={{ background: c }} />
                  <span className="mt-2 block text-[0.65rem] tracking-wider text-mist uppercase">{c}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-primary mt-10">
              Start a similar project <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="container-x mt-16 grid gap-4 md:grid-cols-2 md:gap-6">
          {p.gallery.map((src, i) => (
            <Reveal
              key={`${src}-${i}`}
              delay={(i % 2) * 100}
              className={`relative overflow-hidden rounded-[2rem] bg-sand ${i === 0 ? "aspect-[16/9] md:col-span-2" : "aspect-[4/3]"} ${i === 3 ? "md:col-span-2 md:aspect-[21/9]" : ""}`}
            >
              <Image
                src={src}
                alt={`${p.title} — view ${i + 1}`}
                fill
                sizes={i === 0 || i === 3 ? "(max-width: 1320px) 100vw, 1320px" : "(max-width: 768px) 100vw, 50vw"}
                className="object-cover transition-transform duration-[1200ms] ease-soft hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand/60 py-20 md:py-28">
        <div className="container-x">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl font-medium sm:text-5xl">
              More <em className="text-bronze">{related.length ? p.category.toLowerCase() : "selected"}</em> work
            </h2>
            <Link href={`/projects/${next.slug}`} className="btn btn-outline">
              Next: {next.title} <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {more.map((x) => (
              <ProjectCard key={x.slug} project={x} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
