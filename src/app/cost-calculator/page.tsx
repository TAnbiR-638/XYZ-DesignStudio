import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RoomCalculator from "@/components/RoomCalculator";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import { FAQ_GROUPS, IMG } from "@/data";

export const metadata: Metadata = {
  title: "Interior Cost Calculator",
  description: "Estimate your interior design and fit-out cost in Dhaka room by room — instant, itemised and free.",
};

export default function CostCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tool"
        title={
          <>
            Interior cost <em className="text-bronze">calculator</em>
          </>
        }
        intro="Build your estimate room by room. Adjust the finish level and extras to see how each choice affects your budget."
        image={IMG.oakKitchen}
        crumbs={[{ label: "Cost calculator" }]}
      />
      <section className="bg-sand/40 py-16 md:py-24">
        <div className="container-x">
          <RoomCalculator />
        </div>
      </section>
      <section className="py-24 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <span className="eyebrow">About pricing</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] font-medium sm:text-5xl">
              How we <em className="text-bronze">price</em> projects
            </h2>
          </Reveal>
          <FAQ items={FAQ_GROUPS[1].items} />
        </div>
      </section>
    </>
  );
}
