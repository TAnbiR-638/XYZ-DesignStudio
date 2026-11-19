import { IMG } from "./images";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://xyz-design-studio.vercel.app";

export const STUDIO = {
  name: "XYZ Design Studio",
  founded: 2014,
  tagline: "Interiors with intention.",
  taglineBn: "আপনার স্বপ্নের ঘর, আমাদের যত্নের নকশায়",
  phone: "+880 1700-000 000",
  phoneHref: "tel:+8801700000000",
  whatsapp: "https://wa.me/8801700000000",
  whatsappNumber: "8801700000000",
  email: "hello@xyzdesignstudio.com",
  careersEmail: "careers@xyzdesignstudio.com",
  address: "House 27, Road 104, Gulshan-2, Dhaka 1212",
  hours: "Sat – Thu · 10:00 AM – 7:00 PM",
  closed: "Friday closed",
  mapQuery: "Gulshan+2+Circle,+Dhaka",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "About the studio", href: "/about" },
  { label: "Our process", href: "/#process" },
  { label: "Projects", href: "/projects" },
  { label: "Cost calculator", href: "/cost-calculator" },
  { label: "Insights", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const HERO_SLIDES = [
  { image: IMG.heroLiving, eyebrow: "Residential · Gulshan-2", title: "The Ashwood Residence", slug: "ashwood-residence" },
  { image: IMG.officeOpen, eyebrow: "Workplace · Banani", title: "Northlight Studio HQ", slug: "northlight-hq" },
  { image: IMG.poolLiving, eyebrow: "Duplex · Baridhara", title: "Lakeview Duplex", slug: "lakeview-duplex" },
  { image: IMG.restaurant, eyebrow: "Hospitality · Dhanmondi", title: "Ember & Oak Bistro", slug: "ember-oak-bistro" },
];

/** Single source of truth for headline numbers (used on Home and About). */
export const STATS = [
  { value: 12, suffix: "+", label: "Years of practice" },
  { value: 640, suffix: "+", label: "Spaces delivered" },
  { value: 98, suffix: "%", label: "Clients who refer us" },
  { value: 35, suffix: "", label: "In-house team members" },
];

export const WHY_US = [
  {
    title: "One team, start to finish",
    text: "Designers, architects, engineers and craftsmen under one roof — no hand-offs, no finger-pointing.",
  },
  {
    title: "Fixed handover date",
    text: "Your completion date is written into the contract. 94% of projects in 2025 were handed over on or before it.",
  },
  {
    title: "Itemised, honest pricing",
    text: "A line-by-line bill of quantities before work starts, and a shared budget tracker during the build.",
  },
  {
    title: "Own joinery workshop",
    text: "A 6,000 sq ft workshop in Tejgaon builds our wardrobes, kitchens and furniture to millimetre accuracy.",
  },
  {
    title: "Weekly progress reports",
    text: "Photos, a short video and the next week's plan on WhatsApp every Thursday evening.",
  },
  {
    title: "12-month warranty",
    text: "Workmanship is covered for a full year after handover, with a free check-up visit at month six.",
  },
];

export const PROCESS = [
  { title: "Discovery Call", time: "Day 1", text: "A free 45-minute conversation about your space, lifestyle, budget and timeline." },
  { title: "Site Visit & Brief", time: "Week 1", text: "We measure, photograph and listen — then turn it all into a clear written brief." },
  { title: "Concept & Mood", time: "Weeks 2–3", text: "Layouts, mood boards and a material palette so you can feel the direction early." },
  { title: "3D & Detailing", time: "Weeks 3–6", text: "Photoreal renders, working drawings and a transparent, itemised quotation." },
  { title: "Build & Craft", time: "Weeks 6–16", text: "Our own site team and workshop deliver, with weekly photo updates on WhatsApp." },
  { title: "Style & Handover", time: "Final week", text: "We style, deep-clean and walk you through every detail. Then you move in." },
];

export const VALUES = [
  { title: "Listen first", text: "Every project starts with how you live and work — not with a style we want to sell." },
  { title: "Honest numbers", text: "Itemised quotations, no hidden margins, and a budget tracker you can check anytime." },
  { title: "Made to last", text: "Materials chosen for Dhaka's humidity and heat, built by our own craftsmen." },
  { title: "On time, every time", text: "A fixed handover date in the contract — and a track record of hitting it." },
];

export const MILESTONES = [
  { year: "2014", text: "Founded as a two-person design practice in a Dhanmondi flat." },
  { year: "2016", text: "Completed our 100th residential project." },
  { year: "2017", text: "Opened our own joinery workshop in Tejgaon to control quality and timelines." },
  { year: "2020", text: "Added architecture, landscape and 3D visualization teams." },
  { year: "2023", text: "Moved into our Gulshan-2 studio with a walk-in material library." },
  { year: "2026", text: "640+ spaces delivered across six cities in Bangladesh." },
];

export const AWARDS = [
  { year: "2025", title: "Best Residential Interior", by: "Bangladesh Design Awards", project: "Lakeview Duplex" },
  { year: "2025", title: "Workplace of the Year — Finalist", by: "Dhaka Business Interiors Forum", project: "Northlight Studio HQ" },
  { year: "2024", title: "Hospitality Design Award", by: "South Asia Interior Review", project: "Ember & Oak Bistro" },
  { year: "2023", title: "Emerging Studio of the Year", by: "Bangladesh Design Awards", project: "Studio" },
];

export const PRESS = ["Interior Review BD", "Dhaka Living", "Habitat Weekly", "The Design Ledger", "Business Standard Living", "Urban Spaces Asia"];

export const CLIENTS = [
  "Northlight",
  "Ember & Oak",
  "Meridian Group",
  "Atelier Living",
  "Bluewave Tech",
  "Saffron Hotels",
  "Riverstone",
  "Kawa Coffee",
  "Greenleaf Clinics",
  "Orbit Fintech",
];

export const SERVICE_AREAS = [
  "Gulshan",
  "Banani",
  "Baridhara",
  "Dhanmondi",
  "Bashundhara R/A",
  "Uttara",
  "Mirpur DOHS",
  "Mohakhali DOHS",
  "Purbachal",
  "Chattogram",
  "Sylhet",
  "Cox's Bazar",
];

export const PARTNERS = ["Hettich", "Blum", "Häfele", "Berger Paints", "RAK Ceramics", "Philips Lighting", "Grohe", "Asian Paints"];
