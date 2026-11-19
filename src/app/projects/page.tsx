import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectGallery from "@/components/ProjectGallery";
import CTABand from "@/components/CTABand";
import { IMG, PROJECT_CATEGORIES, PROJECTS, STATS } from "@/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore residential, commercial, hospitality, architecture, renovation and landscape projects by XYZ Design Studio.",
};

export default function ProjectsPage() {
  const delivered = STATS.find((s) => s.label === "Spaces delivered");
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Spaces we&apos;ve <em className="text-bronze">brought to life</em>
          </>
        }
        intro={`${PROJECTS.length} featured case studies across ${PROJECT_CATEGORIES.length} categories, selected from ${delivered?.value}${delivered?.suffix} spaces delivered since 2014.`}
        image={IMG.poolLiving}
        crumbs={[{ label: "Projects" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <ProjectGallery controls />
        </div>
      </section>
      <CTABand />
    </>
  );
}
