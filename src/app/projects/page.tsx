import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectGallery from "@/components/ProjectGallery";
import CTABand from "@/components/CTABand";
import { IMG, PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore residential, commercial, hospitality and architecture projects by XYZ Design Studio.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Spaces we&apos;ve <em className="text-bronze">brought to life</em>
          </>
        }
        intro={`${PROJECTS.length} featured projects from a portfolio of 640+ homes, offices and restaurants.`}
        image={IMG.poolLiving}
        crumbs={[{ label: "Projects" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <ProjectGallery />
        </div>
      </section>
      <CTABand />
    </>
  );
}
