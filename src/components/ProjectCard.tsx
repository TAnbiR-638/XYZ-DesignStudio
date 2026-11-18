import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, tall = false, sizes = "(max-width: 768px) 100vw, 50vw" }: { project: Project; tall?: boolean; sizes?: string }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className={`relative overflow-hidden rounded-[1.5rem] bg-sand ${tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute top-4 left-4 rounded-full bg-linen/90 px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-ink backdrop-blur">
          {project.category}
        </span>
        <span className="absolute right-4 bottom-4 grid h-12 w-12 translate-y-3 place-items-center rounded-full bg-linen text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          ↗
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-medium transition-colors group-hover:text-bronze md:text-[1.7rem]">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-stone">{project.location}</p>
        </div>
        <p className="shrink-0 pt-1 text-xs font-semibold tracking-wider text-mist">
          {project.area} · {project.year}
        </p>
      </div>
    </Link>
  );
}
