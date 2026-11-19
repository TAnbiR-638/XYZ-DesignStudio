# XYZ Design Studio

Marketing website for **XYZ Design Studio**, an interior and architecture studio based in Dhaka.
Frontend-only prototype built with **Next.js (App Router)** and **Tailwind CSS v4**.

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero slider, services, why-us, featured projects, concept-vs-delivered slider, process, quick budget estimator, testimonials, awards & press, clients, latest articles, FAQ, service areas |
| `/about` | Studio story, stats, values, milestones, team (8), awards |
| `/services` | All 9 services, engagement packages, timeline, materials we specify, pricing FAQ |
| `/services/[slug]` | Service detail: price, timeline, inclusions, deliverables, 4-step approach, gallery, related projects, FAQ |
| `/projects` | Portfolio of 16 case studies with category filter, search and sort |
| `/projects/[slug]` | Case study: facts, challenge / approach / result, outcomes, material palette, full-screen gallery, client quote |
| `/cost-calculator` | Room-by-room cost calculator with itemised breakdown, WhatsApp share and print |
| `/blog`, `/blog/[slug]` | Insights: 6 articles with category filter, author, reading time, share buttons |
| `/careers` | Benefits, 5 open roles with department filter, application form |
| `/faq` | 14 questions grouped by topic |
| `/contact` | Consultation form, contact cards, map |
| `/privacy`, `/terms` | Legal pages |

`sitemap.xml` and `robots.txt` are generated automatically.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Project structure

```
src/
  app/                  routes, layout and global styles
  components/           shared UI (header, footer, cards, forms, sliders, calculators)
  components/home/      homepage-only sections
  data/                 all site content, one file per topic
    site.ts             studio details, navigation, stats, process, awards, service areas
    services.ts         services and packages
    projects.ts         portfolio case studies
    people.ts           team; testimonials (derived from projects)
    blog.ts             articles
    careers.ts          job openings and benefits
    faqs.ts             grouped FAQs
    pricing.ts          calculator rates
    images.ts           image references
  lib/image-loader.ts   custom next/image loader for the Unsplash CDN
```

Content is kept in one place so numbers stay consistent across pages (for example, headline stats live only in `site.ts`, and testimonials are tied to the project they belong to).

## Configuration

Set `NEXT_PUBLIC_SITE_URL` to the production URL so the sitemap and social previews use the right domain.

## Deployment

The site is fully static and deploys to Vercel with zero configuration:
import the GitHub repository at [vercel.com/new](https://vercel.com/new) and keep the default Next.js settings.

## Notes

- No backend, database or API. Forms simulate a successful submission on the client.
- Photography is from Unsplash and is placeholder content for the demo.
- Studio details, people, clients, projects, awards and prices are fictional demo content.
