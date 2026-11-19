import type { MetadataRoute } from "next";
import { POSTS, PROJECTS, SERVICES, SITE_URL } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/projects", "/blog", "/careers", "/cost-calculator", "/faq", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...SERVICES.map((s) => ({ url: `${SITE_URL}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...PROJECTS.map((p) => ({ url: `${SITE_URL}/projects/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
    ...POSTS.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
