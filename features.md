# XYZ Design Studio — Website Features

A modern, responsive website for **XYZ Design Studio**, an interior and architecture studio in Dhaka.
Built with Next.js and Tailwind CSS as a frontend-only prototype (no backend, database or API).

---

## At a glance

| | |
|---|---|
| Total pages | 47 (all pre-rendered static pages) |
| Services | 9, each with its own detail page |
| Project case studies | 16 across 6 categories |
| Articles | 6 |
| Job openings | 5 |
| FAQs | 14 in 4 topics |
| Team profiles | 8 |
| Interactive tools | Quick budget estimator, room-by-room cost calculator, concept-vs-delivered comparison slider |
| Devices | Mobile, tablet and desktop |

---

## 1. Site-wide features

### Header and navigation
- Transparent header over hero images that turns solid when the page scrolls.
- Main menu: Home, About, Services, Projects, Insights, Careers, Contact.
- **Services mega menu** on desktop listing all 9 services with short descriptions, plus a shortcut card to the cost calculator.
- **Cost Calculator** quick link and **Book Consultation** button always visible on desktop.
- Active page highlighted in the menu.
- **Full-screen mobile menu** with an animated reveal, an expandable list of all services, consultation and calculator buttons, and the studio's phone, email and address.
- Menus close on route change or when the Esc key is pressed.

### Footer
- Studio introduction with a Bangla tagline.
- **Newsletter sign-up** with a confirmation message.
- Link groups: Studio pages, all 9 services, and contact details (address, phone, email, opening hours, closed day).
- Social media links (Instagram, Facebook, LinkedIn, Pinterest, YouTube).
- Privacy Policy, Terms of Service and Back-to-top links.

### Floating actions
- **WhatsApp chat button** on every page.
- **Back-to-top button** that appears after scrolling.

### Design system
- Warm, editorial look: ivory, sand, deep green and bronze colour palette.
- Elegant serif headings (Cormorant Garamond), clean sans-serif body text (Manrope) and Bangla support (Hind Siliguri).
- Subtle scroll-reveal animations, animated counters, image zoom on hover and slow "Ken Burns" hero images.
- Animations are reduced automatically for visitors who prefer reduced motion.
- Custom 404 page.
- Custom monogram site icon.

---

## 2. Pages

### Home (`/`)
1. **Hero slider** — four featured projects that cross-fade automatically, with progress bars, previous/next controls and pause on hover. Each slide links to its project.
2. **Services ribbon** — scrolling marquee of all services.
3. **Studio introduction** — layered photo collage, key promises and links to About and Services.
4. **Stats bar** — animated counters (12+ years, 640+ spaces delivered, 98% referral rate, 35 team members).
5. **Services list** — hover a service to change the large preview image and show what is included (on mobile, each service shows its own image).
6. **Why choose us** — six reasons: one team, fixed handover date, itemised pricing, own joinery workshop, weekly progress reports, 12-month warranty.
7. **Featured projects** — filterable by category.
8. **Concept vs delivered slider** — drag to compare a concept-style sketch with the finished room.
9. **Six-step process** — from discovery call to handover, with typical timings.
10. **Quick budget estimator** — see the interactive tools section below.
11. **Testimonials carousel** — client quotes linked to their projects, with auto-play and manual controls.
12. **Awards and press** — award list and publications the studio has been featured in.
13. **Client marquee**.
14. **Latest articles** — three most recent posts.
15. **FAQ and service areas** — five common questions and the 12 areas served.
16. **Call-to-action banner** — book a consultation or call.

### About (`/about`)
- Studio story with founder signature.
- Photo collage and the shared stats bar.
- Four core values.
- Milestone timeline from 2014 to 2026.
- Team of eight with role, short bio and year joined (photos turn to colour on hover).
- Awards and honours.

### Services (`/services`)
- Cards for all 9 services showing starting price and typical timeline.
- **Three engagement packages**: Design Only, Design + Build (most popular) and Consult & Style.
- Project timeline overview.
- Hardware and materials the studio regularly specifies.
- Cost and payment FAQs.

### Service detail pages (`/services/[service]`)
Available for: Residential Interiors, Office & Commercial, Hospitality & Retail, 3D Visualization, Architecture & Building Design, Landscape & Rooftop Gardens, Renovation & Remodeling, Custom Furniture & Joinery, Turnkey Execution.

Each page includes:
- Starting price, typical timeline and ideal client.
- Overview and what's included.
- Full list of deliverables and who the service suits best.
- Photo gallery.
- Four-step approach.
- Related projects that actually used this service.
- Service-specific FAQs.
- Links to the other services.

### Projects (`/projects`)
- Portfolio of 16 case studies.
- **Category filter** (Residential, Commercial, Hospitality, Architecture, Renovation, Landscape) with counts.
- **Search** by name, area or description.
- **Sort** by newest, largest or smallest area.
- Result count and an empty-state message with a "clear filters" button.

### Project case studies (`/projects/[project]`)
- Key facts: category, location, area, duration, completion year and client.
- **The challenge, our approach and the result**.
- Three measurable highlights (for example "+30% covers in Q1").
- Services delivered (linked to the service pages).
- Material colour palette.
- **Full-screen photo gallery** with keyboard arrows, swipe on mobile and a close button.
- Client testimonial, where available.
- Previous / next project navigation and related projects.

### Cost Calculator (`/cost-calculator`)
See the interactive tools section below. Also includes pricing FAQs.

### Insights / Blog (`/blog`)
- Featured latest article.
- All articles with a **category filter** (Budgeting, Materials, Design Tips, Workplace, Outdoor, Trends).
- Each card shows the date and reading time.

### Article pages (`/blog/[article]`)
- Headings, lists, pull quotes and highlighted tip boxes.
- Author card with photo and role.
- **Share buttons**: Facebook, WhatsApp and copy link.
- "Keep reading" suggestions, with the same category shown first.

Articles:
1. How much does interior design cost in Dhaka in 2026?
2. Seven materials that survive Dhaka's humidity
3. Ten ways to make a small apartment feel bigger
4. Designing the hybrid office: fewer desks, better days
5. A practical guide to rooftop gardens in Dhaka
6. Interior trends we're seeing in Bangladeshi homes in 2026

### Careers (`/careers`)
- Life at the studio.
- Six employee benefits.
- **Five job openings** with a department filter. Each expands to show the summary, responsibilities and requirements.
- **Application form**: position, name, email, phone, portfolio link and CV upload. The "Apply for this role" button pre-selects the position and scrolls to the form.

### FAQ (`/faq`)
- 14 questions in four topics: Getting started, Cost & payment, Process & timeline, Materials & warranty.
- Topic navigation that stays visible while scrolling on desktop.
- "Still have a question?" contact prompt.

### Contact (`/contact`)
- **Consultation request form**:
  - Project type chips (Apartment, Duplex / Villa, Office, Restaurant / Retail, Renovation, Architecture, Rooftop / Landscape, Other).
  - Name, phone, email, location, area, budget range and message fields.
  - Floating labels, built-in validation and a WhatsApp updates option.
  - Loading state and a personalised thank-you message.
- Contact cards for phone, email and WhatsApp.
- Studio address, opening hours and closed day.
- Embedded Google Map.

### Privacy Policy and Terms of Service
- Plain-language legal pages linked from the footer.

---

## 3. Interactive tools

### Quick budget estimator (Home page)
- Choose type of space, area (slider), finish level (Essential, Signature or Luxe) and whether to include furniture.
- Instantly shows a cost range in Taka (Lakh / Crore), approximate timeline and a typical budget split.

### Room-by-room cost calculator (`/cost-calculator`)
- Set total area with a slider or by typing the number.
- Choose a finish level: Essential, Signature or Luxe.
- Add or remove rooms with +/− buttons: living & dining, master bedroom, other bedrooms, kitchen, bathrooms, balconies, foyer, prayer/study room.
- Optional extras: false ceiling & cove lighting, repainting, smart lighting, curtains & blinds, loose furniture & décor.
- Live results:
  - Estimate range.
  - Timeline in weeks.
  - Average rate per square foot.
  - **Itemised breakdown** of every line.
- **Send estimate on WhatsApp** — a pre-written message with the full summary.
- **Print / save as PDF** with a clean print layout.
- **Sticky live total bar on phones**, which hides when the full summary is on screen.

### Concept vs delivered slider (Home page)
- Drag (or use the keyboard) to compare a sketch-style concept with the finished room.

---

## 4. Responsive design

- Layouts are designed for phones, tablets and desktops.
- Filter bars scroll sideways on small screens instead of wrapping awkwardly.
- No horizontal page scrolling on phone (390 px) or tablet (820 px) widths.
- Touch-friendly buttons, swipe support in the gallery and a phone-friendly menu.

---

## 5. Accessibility

- Semantic headings, landmarks and breadcrumbs.
- Keyboard-accessible menus, accordions, sliders, gallery and forms.
- Visible focus outlines.
- Screen-reader labels on icon buttons and form fields; live regions announce changing totals and slides.
- Reduced-motion support.
- Browser autofill styled to match the design, so fields keep their rounded shape and colours.

---

## 6. Search engines and sharing

- A unique title and description on every page.
- Social sharing images for projects and articles.
- Automatically generated `sitemap.xml` and `robots.txt`.
- Clean, readable URLs (for example `/services/renovation` and `/projects/lakeview-duplex`).

---

## 7. Performance and technology

- **Next.js (App Router)** with **Tailwind CSS v4** and TypeScript.
- Every page is pre-rendered as static HTML, so pages load fast and can be hosted anywhere.
- Images are resized on the fly by the image CDN and lazy-loaded.
- Fonts are self-hosted through Next.js with no layout shift.
- Ready for one-click deployment on Vercel.

---

## 8. Content management

All text, numbers and images live in `src/data/`, one file per topic:

| File | Content |
|---|---|
| `site.ts` | Studio details, navigation, stats, process, values, milestones, awards, press, clients, service areas |
| `services.ts` | Services and packages |
| `projects.ts` | Portfolio case studies |
| `people.ts` | Team and testimonials |
| `blog.ts` | Articles |
| `careers.ts` | Job openings and benefits |
| `faqs.ts` | FAQs |
| `pricing.ts` | Calculator rates |
| `images.ts` | Image references |

Because each number is stored once, it stays consistent everywhere it appears. For example, the headline stats feed both the Home and About pages, and every testimonial is tied to the project it describes.

---

## 9. Prototype notes

- Forms (consultation, newsletter, job application) show a success message but do not send data, because there is no backend.
- Photos are placeholder images from Unsplash.
- Studio details, people, clients, projects, awards and prices are sample content for the demo and should be replaced with real information before launch.
