import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import BlogList from "@/components/BlogList";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { IMG, POSTS } from "@/data";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical interior design advice for Bangladeshi homes and workplaces — costs, materials, small spaces, offices and rooftop gardens.",
};

export default function BlogPage() {
  const [featured, ...rest] = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Ideas, advice &amp; <em className="text-bronze">honest answers</em>
          </>
        }
        intro="Practical guidance from our designers, architects and engineers — written for homeowners and businesses in Bangladesh."
        image={IMG.wallDecor}
        crumbs={[{ label: "Insights" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <p className="mb-6 text-xs font-semibold tracking-[0.25em] text-stone uppercase">Latest article</p>
          <Reveal>
            <BlogCard post={featured} large />
          </Reveal>
          <hr className="my-20 border-ink/10" />
          <h2 className="mb-8 font-display text-4xl font-medium">All articles</h2>
          <BlogList posts={rest} />
        </div>
      </section>
      <CTABand />
    </>
  );
}
