export const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const IMG = {
  heroLiving: u("1618221195710-dd6b41faaea6"),
  sunLiving: u("1600210492486-724fe5c67fb0"),
  houseNight: u("1600585154340-be6161a56a0c"),
  softLiving: u("1616486338812-3dadae4b4ace"),
  openLiving: u("1600607687939-ce8a6c25118c"),
  yellowChair: u("1586023492125-27b2c045efd7"),
  bohoLiving: u("1631679706909-1844bbd07221"),
  officeCorridor: u("1497366216548-37526070297c"),
  officeOpen: u("1497366811353-6870744d04b2"),
  officeLounge: u("1524758631624-e2822e304c36"),
  houseFacade: u("1600566753190-17f0baa2a6c3"),
  dining: u("1617806118233-18e1de247200"),
  rattanLiving: u("1615529182904-14819c35db37"),
  greyLiving: u("1600121848594-d8644e57abab"),
  classicBedroom: u("1505693416388-ac5ce068fe85"),
  whiteKitchen: u("1484154218962-a197022b5858"),
  blueSofa: u("1493809842364-78817add7ffb"),
  plantLiving: u("1502672260266-1c1ef2d93688"),
  sageLiving: u("1554995207-c18c203602cb"),
  orangeSofa: u("1567016432779-094069958ea5"),
  calmBedroom: u("1600607687644-c7171b42498f"),
  bathroom: u("1552321554-5fefe8c9ef14"),
  restaurant: u("1517248135467-4c7edcad34c4"),
  islandKitchen: u("1507089947368-19c1da9775ae"),
  darkFacade: u("1600585154526-990dced4db0d"),
  minimalRoom: u("1513694203232-719a280e022f"),
  apartment: u("1522708323590-d24dbb6b0267"),
  brightLiving: u("1560448204-e02f11c3d0e2"),
  greyBedroom: u("1595526114035-0d45ed16cfbf"),
  poolLiving: u("1600573472550-8090b5e0745e"),
  openDining: u("1604014237800-1c9102c219da"),
  warmLiving: u("1589834390005-5d4fb9bf3d32"),
  wallDecor: u("1534349762230-e0cadf78f5da"),
};

export const PEOPLE = {
  w1: u("1494790108377-be9c29b29330"),
  m1: u("1507003211169-0a1dd7228f2d"),
  w2: u("1438761681033-6461ffad8d80"),
  m2: u("1500648767791-00dcc994a43e"),
  w3: u("1573496359142-b8d87734a5a2"),
  m3: u("1519085360753-af0119f7cbe7"),
  w4: u("1580489944761-15a19d654956"),
};

export const STUDIO = {
  name: "XYZ Design Studio",
  tagline: "Interiors with intention.",
  phone: "+880 1700-000 000",
  phoneHref: "tel:+8801700000000",
  whatsapp: "https://wa.me/8801700000000",
  email: "hello@xyzdesignstudio.com",
  address: "House 27, Road 104, Gulshan-2, Dhaka 1212",
  hours: "Sat – Thu · 10:00 AM – 7:00 PM",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
  ],
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

export const HERO_SLIDES = [
  {
    image: IMG.heroLiving,
    eyebrow: "Residential · Gulshan",
    title: "The Ashwood Residence",
  },
  {
    image: IMG.officeOpen,
    eyebrow: "Workplace · Banani",
    title: "Northlight Studio HQ",
  },
  {
    image: IMG.poolLiving,
    eyebrow: "Duplex · Baridhara",
    title: "Lakeview Duplex",
  },
  {
    image: IMG.restaurant,
    eyebrow: "Hospitality · Dhanmondi",
    title: "Ember & Oak Bistro",
  },
];

export const STATS = [
  { value: 12, suffix: "+", label: "Years of practice" },
  { value: 640, suffix: "+", label: "Spaces delivered" },
  { value: 98, suffix: "%", label: "Clients who refer us" },
  { value: 35, suffix: "", label: "Designers & craftsmen" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  includes: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "residential",
    title: "Residential Interiors",
    short: "Apartments, duplexes and family homes shaped around how you live.",
    description:
      "From a single bedroom refresh to a full duplex fit-out, we plan every room around your routines, your light and your keepsakes. Expect calm layouts, hard-working storage and finishes that age gracefully in Dhaka's climate.",
    image: IMG.sageLiving,
    includes: [
      "Space planning & furniture layout",
      "Material, colour & lighting palette",
      "Custom joinery and wardrobes",
      "Kitchen & bathroom design",
    ],
  },
  {
    slug: "commercial",
    title: "Office & Commercial",
    short: "Workplaces that help teams focus, meet and grow.",
    description:
      "We design offices, showrooms and clinics that reflect your brand and make the working day easier. Acoustic zoning, smart cable management and durable finishes come as standard.",
    image: IMG.officeLounge,
    includes: [
      "Workplace strategy & zoning",
      "Brand-led reception & meeting rooms",
      "Acoustic and lighting design",
      "Phased fit-out to avoid downtime",
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality & Retail",
    short: "Restaurants, cafés and stores people remember and return to.",
    description:
      "Atmosphere sells. We combine layout efficiency with mood: seating flow, bar and kitchen planning, signage and lighting scenes that change from lunch to late evening.",
    image: IMG.restaurant,
    includes: [
      "Concept & mood development",
      "Seating, flow & back-of-house planning",
      "Feature lighting & signage",
      "Furniture sourcing",
    ],
  },
  {
    slug: "3d-visualization",
    title: "3D Visualization",
    short: "See every corner in photoreal detail before work begins.",
    description:
      "Walk through your space before a single tile is laid. Our photoreal renders and 360° views remove guesswork, speed up decisions and keep everyone aligned on the final look.",
    image: IMG.openLiving,
    includes: [
      "Photoreal still renders",
      "360° virtual walkthroughs",
      "Material & lighting options",
      "Two revision rounds included",
    ],
  },
  {
    slug: "architecture",
    title: "Architecture & Exterior",
    short: "Façades, extensions and rooftops that complete the story.",
    description:
      "Good interiors start with good architecture. We design façades, rooftop gardens and extensions in coordination with structural engineers, so inside and outside speak the same language.",
    image: IMG.darkFacade,
    includes: [
      "Façade & elevation design",
      "Rooftop & landscape design",
      "Structural coordination",
      "Approval drawings support",
    ],
  },
  {
    slug: "turnkey",
    title: "Turnkey Execution",
    short: "One team, one timeline — from drawings to the final handover.",
    description:
      "Our in-house site engineers and workshop handle civil works, electrical, joinery and styling. You get one point of contact, weekly progress updates and a fixed handover date.",
    image: IMG.islandKitchen,
    includes: [
      "In-house joinery workshop",
      "Dedicated project manager",
      "Weekly photo progress reports",
      "12-month workmanship warranty",
    ],
  },
];

export type ProjectCategory = "Residential" | "Commercial" | "Hospitality" | "Architecture";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  area: string;
  year: string;
  duration: string;
  cover: string;
  gallery: string[];
  summary: string;
  story: string;
  palette: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "ashwood-residence",
    title: "The Ashwood Residence",
    category: "Residential",
    location: "Gulshan-2, Dhaka",
    area: "3,200 sq ft",
    year: "2026",
    duration: "14 weeks",
    cover: IMG.heroLiving,
    gallery: [IMG.heroLiving, IMG.dining, IMG.calmBedroom, IMG.bathroom],
    summary: "A warm, low-slung family apartment built around long views and natural oak.",
    story:
      "The owners wanted a home that felt relaxed for weekdays yet generous enough to host extended family on Eid. We opened the living and dining zones into one long room, lowered the furniture to keep sightlines clear, and wrapped the space in oiled oak, linen and handmade clay tiles.",
    palette: ["#C9B8A0", "#7A5B3E", "#E9E1D4", "#3B3A36"],
  },
  {
    slug: "northlight-hq",
    title: "Northlight Studio HQ",
    category: "Commercial",
    location: "Banani, Dhaka",
    area: "6,800 sq ft",
    year: "2025",
    duration: "10 weeks",
    cover: IMG.officeOpen,
    gallery: [IMG.officeOpen, IMG.officeCorridor, IMG.officeLounge, IMG.minimalRoom],
    summary: "A creative agency floor with focus pods, a client lounge and a lot of daylight.",
    story:
      "Northlight's team had outgrown a maze of small cabins. We stripped the floor back to the slab, created a bright open studio along the windows and pushed meeting rooms to the core with glass fronts, so daylight reaches every desk.",
    palette: ["#2F3438", "#B9B2A6", "#E6E3DD", "#8C6B4A"],
  },
  {
    slug: "lakeview-duplex",
    title: "Lakeview Duplex",
    category: "Residential",
    location: "Baridhara, Dhaka",
    area: "5,400 sq ft",
    year: "2025",
    duration: "20 weeks",
    cover: IMG.poolLiving,
    gallery: [IMG.poolLiving, IMG.openDining, IMG.islandKitchen, IMG.greyBedroom],
    summary: "A double-height duplex that brings the lake indoors through glass and stone.",
    story:
      "We kept the palette quiet — travertine, smoked oak and soft white plaster — to let the lake view do the talking. A floating stair links the two levels and doubles as a gallery wall for the family's art collection.",
    palette: ["#D8D2C6", "#55524C", "#A48A6D", "#F2EFE9"],
  },
  {
    slug: "ember-oak-bistro",
    title: "Ember & Oak Bistro",
    category: "Hospitality",
    location: "Dhanmondi, Dhaka",
    area: "2,400 sq ft",
    year: "2026",
    duration: "8 weeks",
    cover: IMG.restaurant,
    gallery: [IMG.restaurant, IMG.openDining, IMG.dining, IMG.warmLiving],
    summary: "An intimate bistro with layered lighting that shifts from lunch to late night.",
    story:
      "The brief was 'a place you never want to leave'. Dark timber booths, brass details and three programmable lighting scenes give the room a different mood for every service, while a reworked kitchen pass cut ticket times by a third.",
    palette: ["#2A211C", "#8A5A35", "#C9A27A", "#E8DCCB"],
  },
  {
    slug: "sage-house",
    title: "Sage House",
    category: "Residential",
    location: "Bashundhara, Dhaka",
    area: "2,100 sq ft",
    year: "2024",
    duration: "11 weeks",
    cover: IMG.sageLiving,
    gallery: [IMG.sageLiving, IMG.plantLiving, IMG.classicBedroom, IMG.whiteKitchen],
    summary: "Sage walls, terracotta and plenty of plants for a young couple's first home.",
    story:
      "A tight budget pushed us to be clever: we kept the existing tiles, invested in custom joinery and used colour to define zones instead of walls. The result feels twice its size.",
    palette: ["#8FA38A", "#C7764A", "#EFE8DC", "#3E4A3C"],
  },
  {
    slug: "meridian-facade",
    title: "Meridian Residence Façade",
    category: "Architecture",
    location: "Uttara, Dhaka",
    area: "7 storeys",
    year: "2025",
    duration: "26 weeks",
    cover: IMG.darkFacade,
    gallery: [IMG.darkFacade, IMG.houseNight, IMG.houseFacade, IMG.poolLiving],
    summary: "A layered timber-and-steel façade that shades the west sun and glows at night.",
    story:
      "Vertical timber fins cut heat gain on the west face while giving the building a calm, crafted identity. Concealed linear lighting turns the façade into a lantern after dark.",
    palette: ["#1F2124", "#9C7552", "#CFC7BA", "#5E6166"],
  },
  {
    slug: "linen-loft",
    title: "The Linen Loft",
    category: "Residential",
    location: "Banani DOHS, Dhaka",
    area: "1,650 sq ft",
    year: "2026",
    duration: "9 weeks",
    cover: IMG.softLiving,
    gallery: [IMG.softLiving, IMG.bohoLiving, IMG.calmBedroom, IMG.bathroom],
    summary: "Soft neutrals and rounded forms for a calm, light-filled apartment.",
    story:
      "Curves everywhere — from the arched mirrors to the boucle sofa — soften a boxy floor plan. Hidden storage keeps surfaces clear so the light can bounce around freely.",
    palette: ["#EDE6DB", "#C2B29B", "#8A7B68", "#FFFFFF"],
  },
  {
    slug: "atelier-showroom",
    title: "Atelier Furniture Showroom",
    category: "Commercial",
    location: "Tejgaon, Dhaka",
    area: "4,200 sq ft",
    year: "2024",
    duration: "7 weeks",
    cover: IMG.openLiving,
    gallery: [IMG.openLiving, IMG.yellowChair, IMG.rattanLiving, IMG.blueSofa],
    summary: "A gallery-style showroom where every vignette feels like a real home.",
    story:
      "We broke a cavernous warehouse into a series of room sets connected by a single route, with flexible track lighting so the merchandising team can restyle in an afternoon.",
    palette: ["#F1EEE8", "#272727", "#D2A54A", "#9A8F80"],
  },
];

export const PROCESS = [
  {
    title: "Discovery Call",
    time: "Day 1",
    text: "A free 45-minute conversation about your space, lifestyle, budget and timeline.",
  },
  {
    title: "Site Visit & Brief",
    time: "Week 1",
    text: "We measure, photograph and listen — then turn it all into a clear written brief.",
  },
  {
    title: "Concept & Mood",
    time: "Weeks 2–3",
    text: "Layouts, mood boards and a material palette so you can feel the direction early.",
  },
  {
    title: "3D & Detailing",
    time: "Weeks 3–6",
    text: "Photoreal renders, working drawings and a transparent, itemised quotation.",
  },
  {
    title: "Build & Craft",
    time: "Weeks 6–16",
    text: "Our own site team and workshop deliver, with weekly photo updates on WhatsApp.",
  },
  {
    title: "Style & Handover",
    time: "Final week",
    text: "We style, deep-clean and walk you through every detail. Then you move in.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "They listened more than they talked. Our apartment finally feels like us — and they finished two days before Eid, exactly as promised.",
    name: "Nusrat Jahan",
    role: "Homeowner, Gulshan",
    image: PEOPLE.w1,
  },
  {
    quote:
      "The 3D walkthrough sold our board on the design in one meeting. Moving day was seamless; the team hardly lost an hour of work.",
    name: "Tanvir Rahman",
    role: "COO, Northlight Studio",
    image: PEOPLE.m1,
  },
  {
    quote:
      "Weekly progress photos, honest pricing, zero surprises. I have recommended XYZ to three friends already.",
    name: "Farzana Akter",
    role: "Homeowner, Baridhara",
    image: PEOPLE.w2,
  },
  {
    quote:
      "Our guests compliment the lighting every single night. Covers went up 30% in the first quarter after the redesign.",
    name: "Arif Hossain",
    role: "Founder, Ember & Oak",
    image: PEOPLE.m2,
  },
];

export const TEAM = [
  { name: "Sabrina Karim", role: "Founder & Principal Designer", image: PEOPLE.w3 },
  { name: "Imran Chowdhury", role: "Head of Architecture", image: PEOPLE.m3 },
  { name: "Maliha Islam", role: "Lead Interior Designer", image: PEOPLE.w4 },
  { name: "Rafiq Ahmed", role: "Site & Workshop Lead", image: PEOPLE.m2 },
];

export const VALUES = [
  {
    title: "Listen first",
    text: "Every project starts with how you live and work — not with a style we want to sell.",
  },
  {
    title: "Honest numbers",
    text: "Itemised quotations, no hidden margins, and a budget tracker you can check anytime.",
  },
  {
    title: "Made to last",
    text: "Materials chosen for Dhaka's humidity and heat, built by our own craftsmen.",
  },
  {
    title: "On time, every time",
    text: "A fixed handover date in the contract — and a track record of hitting it.",
  },
];

export const FAQS = [
  {
    q: "How much does an interior design project cost?",
    a: "It depends on size, scope and finish level. As a guide, full residential fit-outs typically range from ৳1,800 to ৳4,500 per sq ft. Try the estimator on our homepage, then we'll give you an itemised quotation after the site visit.",
  },
  {
    q: "Is the first consultation really free?",
    a: "Yes. The discovery call and the first site visit within Dhaka are free, with no obligation to continue.",
  },
  {
    q: "How long does a typical project take?",
    a: "A 1,500–2,500 sq ft apartment usually takes 10–14 weeks from approved design to handover. Commercial timelines depend on the scope and building approvals.",
  },
  {
    q: "Can you work with furniture I already own?",
    a: "Absolutely. We often restore or reupholster heirloom pieces and design the new scheme around them.",
  },
  {
    q: "Do you work outside Dhaka?",
    a: "Yes — we have delivered projects in Chattogram, Sylhet and Cox's Bazar. Travel costs are quoted separately.",
  },
];

export const CLIENTS = [
  "Northlight",
  "Ember & Oak",
  "Meridian Group",
  "Atelier Living",
  "Bluewave Tech",
  "Saffron Hotels",
  "Riverstone",
  "Kawa Coffee",
];
