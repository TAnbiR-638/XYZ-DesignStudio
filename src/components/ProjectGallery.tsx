"use client";

import { useMemo, useState } from "react";
import { PROJECT_CATEGORIES, PROJECTS, type ProjectCategory } from "@/data";
import ProjectCard from "./ProjectCard";

type Filter = "All" | ProjectCategory;
type Sort = "newest" | "largest" | "smallest";

type Props = {
  /** Show only featured projects (homepage). */
  featuredOnly?: boolean;
  /** Show search and sort controls (portfolio page). */
  controls?: boolean;
};

export default function ProjectGallery({ featuredOnly = false, controls = false }: Props) {
  const source = featuredOnly ? PROJECTS.filter((p) => p.featured) : PROJECTS;
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("newest");

  const filters: Filter[] = ["All", ...PROJECT_CATEGORIES.filter((c) => source.some((p) => p.category === c))];

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out = source.filter(
      (p) =>
        (filter === "All" || p.category === filter) &&
        (!q || `${p.title} ${p.location} ${p.category} ${p.summary}`.toLowerCase().includes(q)),
    );
    return [...out].sort((a, b) =>
      sort === "largest" ? b.areaSqft - a.areaSqft : sort === "smallest" ? a.areaSqft - b.areaSqft : b.year - a.year,
    );
  }, [source, filter, query, sort]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div role="tablist" aria-label="Filter projects by category" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
          {filters.map((f) => {
            const count = f === "All" ? source.length : source.filter((p) => p.category === f).length;
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === f ? "border-ink bg-ink text-linen" : "border-ink/15 text-ink hover:border-ink/50"
                }`}
              >
                {f}
                <span className={`text-[0.7rem] ${filter === f ? "text-bronze" : "text-mist"}`}>{count}</span>
              </button>
            );
          })}
        </div>

        {controls && (
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="relative flex-1 sm:w-72 sm:flex-none">
              <span className="sr-only">Search projects</span>
              <svg className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-mist" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or area…"
                className="h-11 w-full rounded-full border border-ink/15 bg-linen pr-4 pl-11 text-sm focus:border-bronze focus:ring-1 focus:ring-bronze focus:outline-none"
              />
            </label>
            <label className="relative">
              <span className="sr-only">Sort projects</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="h-11 w-full appearance-none rounded-full border border-ink/15 bg-linen pr-10 pl-5 text-sm focus:border-bronze focus:outline-none"
              >
                <option value="newest">Newest first</option>
                <option value="largest">Largest area</option>
                <option value="smallest">Smallest area</option>
              </select>
              <span aria-hidden className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[0.6rem] text-stone">▼</span>
            </label>
          </div>
        )}
      </div>

      {controls && (
        <p className="mb-8 text-sm text-stone" aria-live="polite">
          Showing <strong className="text-ink">{list.length}</strong> of {source.length} projects
        </p>
      )}

      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {list.map((p, i) => (
          <div
            key={`${filter}-${sort}-${p.slug}`}
            className={`animate-fade-up ${i % 2 === 1 ? "md:mt-20" : ""}`}
            style={{ animationDelay: `${(i % 4) * 90}ms` }}
          >
            <ProjectCard project={p} tall={i % 3 === 0} />
          </div>
        ))}
      </div>

      {list.length === 0 && (
        <div className="rounded-[1.5rem] border border-dashed border-ink/20 py-20 text-center">
          <p className="font-display text-2xl">No projects match your search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
            className="btn btn-outline mt-6"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
