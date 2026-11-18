# XYZ Design Studio

Marketing website for **XYZ Design Studio**, an interior and architecture studio based in Dhaka.
Frontend-only prototype built with **Next.js (App Router)** and **Tailwind CSS v4**.

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero slider, services, featured projects with filters, concept-vs-delivered comparison slider, process, budget estimator, testimonials, FAQ |
| `/about` | Studio story, values, milestones, leadership team |
| `/services` | Detailed services, engagement packages, timeline, FAQ |
| `/projects` | Filterable portfolio |
| `/projects/[slug]` | Project case study with facts, material palette and gallery |
| `/contact` | Consultation form (client-side only), contact details, map |

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
  app/            routes, layout and global styles
  components/     shared UI (header, footer, cards, forms, sliders)
  components/home homepage-only sections
  lib/data.ts     all site content: services, projects, team, FAQs, contact info
  lib/image-loader.ts  custom next/image loader for the Unsplash CDN
```

All copy and images live in `src/lib/data.ts`, so content can be updated without touching components.

## Deployment

The site is fully static and deploys to Vercel with zero configuration:
import the GitHub repository at [vercel.com/new](https://vercel.com/new) and keep the default Next.js settings.

## Notes

- No backend, database or API. Forms simulate a successful submission on the client.
- Photography is from Unsplash and is placeholder content for the demo.
- Brand names, people, phone numbers and addresses are fictional.
