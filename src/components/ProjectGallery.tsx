"use client";

import { useMemo, useState } from "react";
import { PROJECTS, type ProjectCategory } from "@/lib/data";
import ProjectCard from "./ProjectCard";

const FILTERS: ("All" | ProjectCategory)[] = ["All", "Residential", "Commercial", "Hospitality", "Architecture"];

export default function ProjectGallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const list = useMemo(() => {
    const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

  return (
    <div>
      <div role="tablist" aria-label="Filter projects" className="no-scrollbar -mx-5 mb-10 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0">
        {FILTERS.map((f) => {
          const count = f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? "border-ink bg-ink text-linen"
                  : "border-ink/15 text-ink hover:border-ink/50"
              }`}
            >
              {f}
              <span className={`text-[0.7rem] ${filter === f ? "text-bronze" : "text-mist"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {list.map((p, i) => (
          <div
            key={`${filter}-${p.slug}`}
            className={`animate-fade-up ${i % 2 === 1 ? "md:mt-20" : ""}`}
            style={{ animationDelay: `${(i % 4) * 90}ms` }}
          >
            <ProjectCard project={p} tall={i % 3 === 0} />
          </div>
        ))}
      </div>

      {list.length === 0 && (
        <p className="py-20 text-center text-stone">New projects in this category are coming soon.</p>
      )}
    </div>
  );
}
