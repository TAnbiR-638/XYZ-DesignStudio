import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProjectCard, { formatArea } from "@/components/ProjectCard";
import Lightbox from "@/components/Lightbox";
import CTABand from "@/components/CTABand";
import { PROJECTS, SERVICES } from "@/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.summary, openGraph: { images: [p.cover] } } : {};
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = PROJECTS[index];
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const sameCategory = PROJECTS.filter((x) => x.slug !== p.slug && x.category === p.category);
  const more = (sameCategory.length ? sameCategory : PROJECTS.filter((x) => x.slug !== p.slug)).slice(0, 2);
  const services = SERVICES.filter((s) => p.scope.includes(s.slug));

  const facts = [
    { label: "Category", value: p.category },
    { label: "Location", value: p.location },
    { label: "Area", value: formatArea(p.areaSqft) },
    { label: "Duration", value: `${p.durationWeeks} weeks` },
    { label: "Completed", value: String(p.year) },
    { label: "Client", value: p.client },
  ];

  const story = [
    { label: "The challenge", text: p.challenge },
    { label: "Our approach", text: p.approach },
    { label: "The result", text: p.outcome },
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
        <dl className="container-x grid grid-cols-2 gap-y-6 py-8 sm:grid-cols-3 lg:grid-cols-6">
          {facts.map((f) => (
            <div key={f.label} className="pr-4">
              <dt className="text-xs font-semibold tracking-[0.2em] text-mist uppercase">{f.label}</dt>
              <dd className="mt-1 font-display text-xl font-medium md:text-2xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <div className="space-y-12">
            {story.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <span className="eyebrow">{s.label}</span>
                <p className="mt-4 font-display text-2xl leading-[1.35] text-balance text-ink md:text-3xl">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="space-y-10 lg:pt-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-stone uppercase">Services delivered</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="inline-block rounded-full border border-ink/15 px-4 py-2 text-sm transition hover:border-bronze hover:text-bronze">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-stone uppercase">Material palette</p>
              <ul className="mt-4 flex gap-3">
                {p.palette.map((c) => (
                  <li key={c} className="text-center">
                    <span className="block h-14 w-14 rounded-full border border-ink/10 shadow-inner" style={{ background: c }} />
                    <span className="mt-2 block text-[0.65rem] tracking-wider text-mist uppercase">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Start a similar project <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-linen">
        <dl className="container-x grid sm:grid-cols-3">
          {p.highlights.map((h, i) => (
            <div key={h.label} className={`flex flex-col-reverse py-10 text-center ${i > 0 ? "border-t border-ink/10 sm:border-t-0 sm:border-l" : ""}`}>
              <dt className="mt-2 text-xs font-semibold tracking-[0.2em] text-stone uppercase">{h.label}</dt>
              <dd className="font-display text-5xl font-medium text-bronze">{h.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <p className="mb-6 text-sm text-stone">Tap any image to view it full screen.</p>
          <Lightbox images={p.gallery} title={p.title} />
        </div>
      </section>

      {p.testimonial && (
        <section className="grain relative overflow-hidden bg-forest py-20 text-linen md:py-28">
          <Reveal className="container-x max-w-4xl text-center">
            <span className="font-display text-7xl leading-none text-bronze">&ldquo;</span>
            <blockquote>
              <p className="font-display text-3xl leading-[1.25] text-balance md:text-4xl">{p.testimonial.quote}</p>
              <footer className="mt-8">
                <p className="font-semibold">{p.testimonial.name}</p>
                <p className="text-sm text-linen/60">{p.testimonial.role}</p>
              </footer>
            </blockquote>
          </Reveal>
        </section>
      )}

      <nav aria-label="More projects" className="border-b border-ink/10">
        <div className="container-x grid sm:grid-cols-2">
          <Link href={`/projects/${prev.slug}`} className="group border-b border-ink/10 py-10 sm:border-r sm:border-b-0 sm:pr-8">
            <span className="text-xs font-semibold tracking-[0.2em] text-mist uppercase">← Previous project</span>
            <span className="mt-2 block font-display text-2xl transition-colors group-hover:text-bronze md:text-3xl">{prev.title}</span>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group py-10 text-right sm:pl-8">
            <span className="text-xs font-semibold tracking-[0.2em] text-mist uppercase">Next project →</span>
            <span className="mt-2 block font-display text-2xl transition-colors group-hover:text-bronze md:text-3xl">{next.title}</span>
          </Link>
        </div>
      </nav>

      <section className="bg-sand/60 py-20 md:py-28">
        <div className="container-x">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl font-medium sm:text-5xl">
              More <em className="text-bronze">{sameCategory.length ? p.category.toLowerCase() : "selected"}</em> work
            </h2>
            <Link href="/projects" className="btn btn-outline">
              All projects <span aria-hidden>→</span>
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
