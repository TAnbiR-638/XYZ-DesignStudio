import { IMG } from "./images";
import type { ProjectCategory } from "./projects";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  gallery: string[];
  startingPrice: string;
  timeline: string;
  includes: string[];
  deliverables: string[];
  idealFor: string[];
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  /** Portfolio category used to show related projects. */
  category: ProjectCategory;
};

export const SERVICES: Service[] = [
  {
    slug: "residential",
    title: "Residential Interiors",
    short: "Apartments, duplexes and family homes shaped around how you live.",
    description:
      "From a single bedroom refresh to a full duplex fit-out, we plan every room around your routines, your light and your keepsakes. Expect calm layouts, hard-working storage and finishes that age gracefully in Dhaka's climate.",
    image: IMG.sageLiving,
    gallery: [IMG.heroLiving, IMG.luxeBedroom, IMG.marbleKitchen],
    startingPrice: "৳1,800 / sq ft (design + build)",
    timeline: "10–16 weeks for a 1,500–2,500 sq ft apartment",
    includes: [
      "Space planning & furniture layout",
      "Material, colour & lighting palette",
      "Custom joinery and wardrobes",
      "Kitchen & bathroom design",
    ],
    deliverables: [
      "Measured survey & existing-condition drawings",
      "2 layout options with furniture plans",
      "Mood boards and physical material samples",
      "Photoreal 3D renders of every main room",
      "Electrical, ceiling and joinery working drawings",
      "Itemised bill of quantities (BOQ)",
    ],
    idealFor: ["New apartment handovers", "Family homes & duplexes", "Rental upgrades before letting"],
    steps: [
      { title: "Lifestyle brief", text: "We map how each family member uses the home — mornings, guests, storage and prayer space." },
      { title: "Layout & zoning", text: "Two layout options that balance privacy, light and circulation." },
      { title: "Look & feel", text: "Mood boards, samples and 3D views until every room feels right." },
      { title: "Build & style", text: "Our site team and workshop build, then we style and hand over." },
    ],
    faqs: [
      { q: "Can you work with an apartment that is still under construction?", a: "Yes — it is the best time to start. We coordinate electrical points, plumbing and ceiling heights with the developer before handover, which avoids costly breaking later." },
      { q: "Do you design prayer rooms and maid's quarters?", a: "Yes. We plan every space a Bangladeshi home needs, including prayer corners, maid's rooms, utility balconies and generator/IPS points." },
    ],
    category: "Residential",
  },
  {
    slug: "commercial",
    title: "Office & Commercial",
    short: "Workplaces that help teams focus, meet and grow.",
    description:
      "We design offices, showrooms and clinics that reflect your brand and make the working day easier. Acoustic zoning, smart cable management and durable finishes come as standard, and we phase fit-outs so your business keeps running.",
    image: IMG.officeLounge,
    gallery: [IMG.officeOpen, IMG.officeFloor, IMG.officeDesk],
    startingPrice: "৳1,500 / sq ft (design + build)",
    timeline: "6–12 weeks depending on floor area",
    includes: [
      "Workplace strategy & zoning",
      "Brand-led reception & meeting rooms",
      "Acoustic and lighting design",
      "Phased fit-out to avoid downtime",
    ],
    deliverables: [
      "Headcount & growth planning workshop",
      "Space plan with desk, meeting and collaboration ratios",
      "Branding & wayfinding integration",
      "Lighting, HVAC and data-cabling coordination drawings",
      "3D walkthrough for leadership sign-off",
      "Fit-out programme with weekend/night work plan",
    ],
    idealFor: ["Corporate & tech offices", "Clinics and diagnostic centres", "Showrooms & experience centres"],
    steps: [
      { title: "Workplace audit", text: "We study headcount, meeting patterns and growth plans for the next 3–5 years." },
      { title: "Space plan", text: "Zoning for focus, collaboration and client-facing areas." },
      { title: "Brand & detail", text: "Materials, signage and lighting that express your brand." },
      { title: "Phased fit-out", text: "Night and weekend work so your team keeps working." },
    ],
    faqs: [
      { q: "Can you work while our office stays open?", a: "Yes. We regularly phase works floor-by-floor or zone-by-zone and schedule noisy work after hours." },
      { q: "Do you handle building approvals for fit-outs?", a: "We prepare the drawings and coordinate with your building management and fire-safety consultant for fit-out approvals." },
    ],
    category: "Commercial",
  },
  {
    slug: "hospitality",
    title: "Hospitality & Retail",
    short: "Restaurants, cafés, hotels and stores people remember and return to.",
    description:
      "Atmosphere sells. We combine layout efficiency with mood: seating flow, bar and kitchen planning, signage and lighting scenes that change from lunch to late evening — all built to survive heavy daily use.",
    image: IMG.restaurant,
    gallery: [IMG.diningHall, IMG.cafe, IMG.hotelSuite],
    startingPrice: "৳2,200 / sq ft (design + build)",
    timeline: "8–14 weeks",
    includes: [
      "Concept & mood development",
      "Seating, flow & back-of-house planning",
      "Feature lighting & signage",
      "Furniture sourcing",
    ],
    deliverables: [
      "Brand & concept story board",
      "Seating plan with cover count optimisation",
      "Kitchen & bar layout coordinated with your chef",
      "Lighting scenes for day and night service",
      "Signage, menu-board and façade design",
      "Commercial-grade furniture specification",
    ],
    idealFor: ["Restaurants & cafés", "Boutique hotels & resorts", "Retail stores & salons"],
    steps: [
      { title: "Concept story", text: "Who is your guest and how should they feel? We build the concept around that." },
      { title: "Operational layout", text: "Seat count, service paths and back-of-house planned with your team." },
      { title: "Atmosphere", text: "Lighting, acoustics, materials and signage that create a mood." },
      { title: "Open on time", text: "Fixed opening date with a snag-free soft launch." },
    ],
    faqs: [
      { q: "Can you help increase our seating capacity?", a: "Usually, yes. Re-planning seating and service paths typically adds 10–20% covers without making the room feel crowded." },
      { q: "Do you design for franchises with brand guidelines?", a: "Yes — we adapt brand standards to local sites and sourcing while keeping the experience consistent." },
    ],
    category: "Hospitality",
  },
  {
    slug: "3d-visualization",
    title: "3D Visualization",
    short: "See every corner in photoreal detail before work begins.",
    description:
      "Walk through your space before a single tile is laid. Our photoreal renders and 360° views remove guesswork, speed up decisions and keep everyone — family, partners or board members — aligned on the final look.",
    image: IMG.openLiving,
    gallery: [IMG.stairLiving, IMG.archLiving, IMG.indoorOutdoor],
    startingPrice: "৳8,000 per render",
    timeline: "5–10 working days",
    includes: [
      "Photoreal still renders",
      "360° virtual walkthroughs",
      "Material & lighting options",
      "Two revision rounds included",
    ],
    deliverables: [
      "4K still renders (day and evening lighting)",
      "Interactive 360° panoramas viewable on any phone",
      "Material alternates side-by-side",
      "Animated walkthrough video (optional)",
      "Marketing-ready images for developers",
    ],
    idealFor: ["Homeowners comparing options", "Real-estate developers & marketing", "Architects needing visualization support"],
    steps: [
      { title: "Brief & references", text: "Share drawings, photos and inspiration images." },
      { title: "Clay model", text: "We model the space and confirm camera angles with you." },
      { title: "Materials & light", text: "Textures, furniture and lighting are dressed in." },
      { title: "Final renders", text: "High-resolution images after two rounds of revisions." },
    ],
    faqs: [
      { q: "Can I order renders without your design service?", a: "Yes. We regularly render designs prepared by other architects and developers." },
      { q: "What do I need to provide?", a: "Floor plans (PDF or CAD), ceiling heights and any reference images. We handle the rest." },
    ],
    category: "Residential",
  },
  {
    slug: "architecture",
    title: "Architecture & Building Design",
    short: "Homes, façades and extensions where inside and outside speak the same language.",
    description:
      "Good interiors start with good architecture. We design new homes, façades, extensions and rooftops in coordination with structural and MEP engineers, and prepare drawings for RAJUK approval submission.",
    image: IMG.darkFacade,
    gallery: [IMG.modernHouse, IMG.treeHouse, IMG.screenFacade],
    startingPrice: "From ৳45 / sq ft (design fee)",
    timeline: "8–20 weeks for drawings",
    includes: [
      "Façade & elevation design",
      "New homes and extensions",
      "Structural & MEP coordination",
      "Approval drawings support",
    ],
    deliverables: [
      "Site analysis: sun path, wind and setbacks",
      "Concept massing and façade options",
      "Architectural drawing set for approval submission",
      "Coordinated structural, plumbing and electrical drawings",
      "Exterior 3D renders",
      "Site supervision visits during construction",
    ],
    idealFor: ["Private houses & duplexes", "Façade upgrades of existing buildings", "Small commercial buildings"],
    steps: [
      { title: "Site study", text: "Plot, orientation, by-laws and your space requirements." },
      { title: "Concept design", text: "Massing, floor plans and façade options." },
      { title: "Design development", text: "Engineer coordination and detailed drawings." },
      { title: "Approval & supervision", text: "Submission support and regular site supervision." },
    ],
    faqs: [
      { q: "Do you submit drawings to RAJUK?", a: "We prepare the complete drawing set and support you or your appointed representative through the submission process. Approval timelines are set by the authority." },
      { q: "Can you redesign only the façade of my building?", a: "Yes. Façade upgrades are a large part of our architecture work, including sun-shading screens and lighting." },
    ],
    category: "Architecture",
  },
  {
    slug: "landscape",
    title: "Landscape & Rooftop Gardens",
    short: "Rooftops, courtyards and balconies turned into green outdoor rooms.",
    description:
      "In a city as dense as Dhaka, outdoor space is precious. We design rooftop gardens, terraces, courtyards and balconies with proper waterproofing, drainage and native planting that survives monsoon and summer.",
    image: IMG.lawn,
    gallery: [IMG.gardening, IMG.indoorOutdoor, IMG.resortPool],
    startingPrice: "৳900 / sq ft (design + build)",
    timeline: "4–10 weeks",
    includes: [
      "Rooftop & terrace gardens",
      "Waterproofing & drainage detailing",
      "Native, low-maintenance planting",
      "Outdoor lighting & seating",
    ],
    deliverables: [
      "Structural load check with your engineer",
      "Planting plan with species list",
      "Hardscape, decking and pergola drawings",
      "Irrigation and drainage layout",
      "Outdoor lighting plan",
      "3-month plant care guide",
    ],
    idealFor: ["Rooftops & terraces", "Courtyards and front yards", "Office and hotel outdoor areas"],
    steps: [
      { title: "Site & load check", text: "We confirm what your roof or terrace can safely carry." },
      { title: "Garden design", text: "Zones for seating, planting, shade and play." },
      { title: "Waterproof & build", text: "Membrane, drainage, decking and planters." },
      { title: "Plant & care", text: "Planting, irrigation and a care plan for the first season." },
    ],
    faqs: [
      { q: "Will a rooftop garden cause leaks?", a: "Not when it is detailed properly. We install a root-resistant waterproof membrane, protection board and drainage layer before any soil goes in." },
      { q: "Which plants work best on Dhaka rooftops?", a: "Hardy, heat-tolerant species such as bougainvillea, areca palm, lemongrass, curry leaf and native grasses, combined with shade structures." },
    ],
    category: "Landscape",
  },
  {
    slug: "renovation",
    title: "Renovation & Remodeling",
    short: "Give an older home or office a second life — without starting from scratch.",
    description:
      "Many of Dhaka's best apartments are 15–25 years old with dated layouts, wiring and plumbing. We remodel kitchens, bathrooms and whole homes while you stay informed every step of the way, and we can phase work so you can stay living in part of the home.",
    image: IMG.whiteLiving,
    gallery: [IMG.shakerKitchen, IMG.marbleBath, IMG.greyLounge],
    startingPrice: "৳1,400 / sq ft (design + build)",
    timeline: "6–14 weeks",
    includes: [
      "Kitchen & bathroom remodels",
      "Rewiring and re-plumbing",
      "Layout changes & wall removal",
      "Damp-proofing and waterproofing",
    ],
    deliverables: [
      "Condition survey of wiring, plumbing and damp",
      "Engineer check before any wall removal",
      "Remodel layout and 3D views",
      "Phasing plan if you stay in the home",
      "Itemised BOQ separating essential and optional works",
    ],
    idealFor: ["Older apartments (15+ years)", "Kitchen & bathroom upgrades", "Homes bought second-hand"],
    steps: [
      { title: "Condition survey", text: "We check what is hidden behind the walls first." },
      { title: "Remodel plan", text: "Layout changes and upgrades, prioritised by budget." },
      { title: "Strip & rebuild", text: "Services renewed, surfaces rebuilt, dust controlled." },
      { title: "Finish & hand over", text: "New finishes, deep clean and walkthrough." },
    ],
    faqs: [
      { q: "Can we live in the apartment during renovation?", a: "Often yes, if the work is phased. Full kitchen or bathroom remodels usually need 2–3 weeks where that room is out of use." },
      { q: "Can you remove a wall to open up the living area?", a: "Only after a structural engineer confirms it is safe. Many partition walls can go; load-bearing walls and columns cannot." },
    ],
    category: "Renovation",
  },
  {
    slug: "furniture",
    title: "Custom Furniture & Joinery",
    short: "Made-to-measure wardrobes, kitchens and furniture from our own workshop.",
    description:
      "Every piece is drawn by our designers and built in our Tejgaon workshop using seasoned hardwood, marine plywood and imported hardware. Built-ins fit to the millimetre, and loose furniture is sized to your rooms rather than to a showroom.",
    image: IMG.shelving,
    gallery: [IMG.greenSofa, IMG.woodStool, IMG.oakKitchen],
    startingPrice: "Wardrobes from ৳2,600 / sq ft of front",
    timeline: "4–8 weeks",
    includes: [
      "Wardrobes & walk-in closets",
      "Modular kitchens",
      "TV units, consoles & shelving",
      "Sofas, beds and dining tables",
    ],
    deliverables: [
      "Shop drawings for every piece",
      "Material and hardware samples",
      "Factory finishing (PU, veneer or laminate)",
      "Delivery and on-site installation",
      "Hardware warranty documentation",
    ],
    idealFor: ["New apartments needing built-ins", "Modular kitchen upgrades", "One-off statement pieces"],
    steps: [
      { title: "Measure & design", text: "On-site measurement and design drawings." },
      { title: "Samples", text: "Approve wood, finish and hardware samples." },
      { title: "Workshop build", text: "Built and finished in our own workshop." },
      { title: "Install", text: "Delivery, fitting and final adjustment." },
    ],
    faqs: [
      { q: "What materials do you use for wardrobes?", a: "Marine-grade plywood or HDHMR boards for carcasses (both resist humidity), with veneer, laminate or PU-painted fronts and branded soft-close hardware." },
      { q: "Can I order furniture without a full interior project?", a: "Yes. Custom furniture and kitchens can be ordered as a standalone service." },
    ],
    category: "Residential",
  },
  {
    slug: "turnkey",
    title: "Turnkey Execution",
    short: "One team, one timeline — from drawings to the final handover.",
    description:
      "Our in-house site engineers and workshop handle civil works, electrical, plumbing, joinery and styling. You get one point of contact, weekly progress updates and a fixed handover date written into the contract.",
    image: IMG.islandKitchen,
    gallery: [IMG.construction, IMG.blueprint, IMG.brassKitchen],
    startingPrice: "Included in design + build packages",
    timeline: "Agreed in contract",
    includes: [
      "In-house joinery workshop",
      "Dedicated project manager",
      "Weekly photo progress reports",
      "12-month workmanship warranty",
    ],
    deliverables: [
      "Detailed work programme (Gantt chart)",
      "Procurement and material quality control",
      "Daily site supervision by an engineer",
      "Weekly WhatsApp progress report",
      "Snag list, deep clean and handover file",
      "Warranty and maintenance guide",
    ],
    idealFor: ["Busy professionals & expatriates", "Companies wanting one accountable contractor", "Overseas Bangladeshis building at home"],
    steps: [
      { title: "Programme", text: "A week-by-week schedule agreed before work starts." },
      { title: "Procure", text: "Materials ordered, checked and stored correctly." },
      { title: "Build", text: "Civil, MEP, ceiling, joinery and finishes in sequence." },
      { title: "Handover", text: "Snagging, cleaning, styling and documentation." },
    ],
    faqs: [
      { q: "I live abroad. Can you manage the project remotely?", a: "Yes. Around a quarter of our clients are overseas Bangladeshis. We run approvals over video calls and share weekly progress reports." },
      { q: "How are payments structured?", a: "Typically 30% on signing, then staged payments tied to completed milestones, with the final 10% after handover." },
    ],
    category: "Residential",
  },
];

export const PACKAGES = [
  {
    name: "Design Only",
    price: "From ৳120 / sq ft",
    text: "A complete design package you can build with your own contractor.",
    points: ["Space planning & layouts", "Mood boards & material palette", "Photoreal 3D renders", "Working drawings & BOQ"],
  },
  {
    name: "Design + Build",
    price: "From ৳1,800 / sq ft",
    text: "Our most popular option — one team from concept to handover.",
    points: ["Everything in Design Only", "In-house joinery & site team", "Dedicated project manager", "12-month warranty"],
    featured: true,
  },
  {
    name: "Consult & Style",
    price: "From ৳25,000",
    text: "Quick expert help for a single room or a finishing touch.",
    points: ["2-hour on-site consultation", "Colour & furniture advice", "Shopping list with links", "Optional styling day"],
  },
];
