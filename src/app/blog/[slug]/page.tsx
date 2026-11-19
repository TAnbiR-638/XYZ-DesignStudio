import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import ShareButtons from "@/components/ShareButtons";
import CTABand from "@/components/CTABand";
import { POSTS, TEAM, formatDate, readingTime, type BlogBlock } from "@/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  return p
    ? { title: p.title, description: p.excerpt, openGraph: { type: "article", publishedTime: p.date, images: [p.cover] } }
    : {};
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 font-display text-3xl font-medium md:text-4xl">{block.text}</h2>;
    case "p":
      return <p className="mt-5 text-lg leading-[1.8] text-ink/80">{block.text}</p>;
    case "list":
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((it) => (
            <li key={it} className="flex gap-4 text-lg leading-relaxed text-ink/80">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
              {it}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-12 border-l-2 border-bronze pl-6 font-display text-3xl leading-snug text-ink italic md:text-4xl">
          {block.text}
        </blockquote>
      );
    case "tip":
      return (
        <aside className="mt-10 rounded-[1.5rem] bg-forest p-7 text-linen">
          <p className="text-xs font-semibold tracking-[0.2em] text-bronze uppercase">{block.title}</p>
          <p className="mt-2 text-lg">{block.text}</p>
        </aside>
      );
  }
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = POSTS.find((x) => x.slug === slug);
  if (!post) notFound();
  const author = TEAM.find((t) => t.name === post.author);
  const related = POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category) || b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        image={post.cover}
        crumbs={[{ label: "Insights", href: "/blog" }, { label: post.category }]}
        compact
      >
        <p className="mt-6 animate-fade-up text-sm text-linen/80 [animation-delay:300ms]">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {readingTime(post)} min read · By {post.author}
        </p>
      </PageHero>

      <article className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_minmax(0,720px)_1fr]">
          <aside className="order-2 lg:order-1">
            {author && (
              <div className="lg:sticky lg:top-28">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image src={author.image} alt={author.name} fill sizes="64px" className="object-cover" />
                </div>
                <p className="mt-3 font-display text-xl">{author.name}</p>
                <p className="text-sm text-stone">{author.role}</p>
                <div className="mt-6">
                  <ShareButtons title={post.title} />
                </div>
              </div>
            )}
          </aside>
          <div className="order-1 lg:order-2">
            <p className="font-display text-2xl leading-relaxed text-ink md:text-3xl">{post.excerpt}</p>
            {post.body.map((b, i) => (
              <Block key={i} block={b} />
            ))}
            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-8">
              <Link href="/blog" className="btn btn-outline">← All articles</Link>
              <Link href="/contact" className="btn btn-primary">Talk to a designer</Link>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-sand/60 py-20 md:py-28">
        <div className="container-x">
          <h2 className="mb-12 font-display text-4xl font-medium sm:text-5xl">
            Keep <em className="text-bronze">reading</em>
          </h2>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
