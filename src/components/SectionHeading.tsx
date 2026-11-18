import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  aside?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, intro, align = "left", light = false, aside }: Props) {
  const center = align === "center";
  return (
    <div
      className={`mb-12 flex flex-col gap-6 md:mb-16 ${
        center ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between"
      }`}
    >
      <Reveal className={center ? "max-w-2xl" : "max-w-2xl"}>
        <span className="eyebrow">{eyebrow}</span>
        <h2
          className={`mt-5 font-display text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:text-[3.6rem] ${
            light ? "text-linen" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p className={`mt-5 max-w-xl text-base leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-linen/70" : "text-stone"}`}>
            {intro}
          </p>
        )}
      </Reveal>
      {aside && <Reveal delay={150}>{aside}</Reveal>}
    </div>
  );
}
