import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  crumbs?: { label: string; href?: string }[];
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, intro, image, crumbs = [], children }: Props) {
  return (
    <section className="grain relative isolate flex min-h-[72svh] items-end overflow-hidden bg-forest text-linen">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 animate-kenburns object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/30" />
      <div className="container-x pt-36 pb-14 md:pb-20">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 animate-fade-up text-xs tracking-wide text-linen/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-linen">Home</Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-2">
                  <span aria-hidden className="opacity-50">/</span>
                  {c.href ? (
                    <Link href={c.href} className="hover:text-linen">{c.label}</Link>
                  ) : (
                    <span aria-current="page" className="text-linen">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <span className="eyebrow animate-fade-up text-linen/85 [animation-delay:100ms]">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl animate-fade-up font-display text-5xl leading-[1] font-medium tracking-tight text-balance [animation-delay:200ms] sm:text-6xl lg:text-[5.5rem]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-linen/80 [animation-delay:300ms] md:text-lg">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
