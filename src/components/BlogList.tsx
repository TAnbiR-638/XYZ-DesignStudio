"use client";

import { useState } from "react";
import type { BlogPost } from "@/data";
import BlogCard from "./BlogCard";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? posts : posts.filter((p) => p.category === cat);

  return (
    <div>
      <div role="tablist" aria-label="Filter articles" className="no-scrollbar -mx-5 mb-12 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition ${
              cat === c ? "border-ink bg-ink text-linen" : "border-ink/15 hover:border-ink/50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <div key={`${cat}-${p.slug}`} className="animate-fade-up" style={{ animationDelay: `${(i % 3) * 90}ms` }}>
            <BlogCard post={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
