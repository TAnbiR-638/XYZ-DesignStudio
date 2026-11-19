import { IMG } from "./images";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "tip"; title: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Design Tips" | "Materials" | "Budgeting" | "Workplace" | "Outdoor" | "Trends";
  cover: string;
  author: string;
  /** ISO date */
  date: string;
  body: BlogBlock[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "interior-design-cost-dhaka-2026",
    title: "How much does interior design cost in Dhaka in 2026?",
    excerpt: "A clear, honest breakdown of per-square-foot rates, what drives the price up or down, and how to plan your budget.",
    category: "Budgeting",
    cover: IMG.marbleKitchen,
    author: "Sabrina Karim",
    date: "2026-10-28",
    body: [
      { type: "p", text: "It is the first question almost every client asks, and the honest answer is: it depends on size, scope and finish level. But 'it depends' is not very helpful when you are planning a budget, so here is how pricing really works for design-and-build projects in Dhaka this year." },
      { type: "h2", text: "Typical ranges per square foot" },
      { type: "list", items: [
        "Essential finish: around ৳1,800 per sq ft — smart layouts, quality local materials, laminate joinery.",
        "Signature finish: around ৳2,800 per sq ft — custom joinery, veneer or PU finishes, layered lighting.",
        "Luxe finish: ৳4,200 per sq ft and above — imported stone, bespoke furniture, home automation.",
      ] },
      { type: "p", text: "These figures include design, civil and electrical works, false ceilings, joinery, finishes and project management. Loose furniture and décor usually add 20–30% on top." },
      { type: "h2", text: "What pushes the price up" },
      { type: "list", items: [
        "Moving kitchens or bathrooms (new plumbing and waterproofing).",
        "Imported materials with long lead times and import duty.",
        "Extensive false ceilings with cove lighting in every room.",
        "Tight deadlines that need extra crews or night work.",
      ] },
      { type: "h2", text: "Where you can save without regret" },
      { type: "p", text: "Keep existing floor tiles if they are in good condition, invest in joinery in the rooms you use most, and phase décor purchases over a few months. A good designer will tell you where money shows and where it doesn't." },
      { type: "tip", title: "Try it yourself", text: "Our room-by-room cost calculator gives you an instant estimate for your own apartment — no sign-up required." },
    ],
  },
  {
    slug: "humidity-proof-materials",
    title: "Seven materials that survive Dhaka's humidity",
    excerpt: "Swollen wardrobe doors and peeling paint are avoidable. These are the materials we specify for long-lasting interiors.",
    category: "Materials",
    cover: IMG.shelving,
    author: "Rafiq Ahmed",
    date: "2026-09-14",
    body: [
      { type: "p", text: "Relative humidity in Dhaka sits above 80% for much of the monsoon. Materials that perform well in drier climates can swell, warp or grow mould here within a year. After twelve years and hundreds of projects, these are the materials we trust." },
      { type: "list", items: [
        "Marine-grade plywood or HDHMR board for wardrobe and kitchen carcasses.",
        "PU or acrylic finishes on doors — sealed on all six sides, including edges.",
        "Moisture-resistant (green) gypsum board in kitchens and bathrooms.",
        "Quartz or granite worktops instead of porous marble in busy kitchens.",
        "Vitrified or porcelain tiles with epoxy grout in wet areas.",
        "Washable, anti-fungal emulsion paints for walls.",
        "Stainless steel 304 hardware — it won't rust near balconies or the coast.",
      ] },
      { type: "h2", text: "Details matter as much as materials" },
      { type: "p", text: "Even the best board fails if edges are left unsealed or wardrobes are fixed tight against an external wall. We leave a ventilation gap behind built-ins, seal every cut edge and add ventilated back panels where walls are prone to damp." },
      { type: "quote", text: "Most 'bad material' problems are really installation problems." },
    ],
  },
  {
    slug: "small-apartment-feel-bigger",
    title: "Ten ways to make a small apartment feel bigger",
    excerpt: "Light, layout and storage tricks we use to make 1,000–1,500 sq ft apartments feel generous.",
    category: "Design Tips",
    cover: IMG.softLiving,
    author: "Maliha Islam",
    date: "2026-08-02",
    body: [
      { type: "p", text: "Most new apartments in Dhaka are compact, and many families need them to do a lot: host guests, house parents, and provide a quiet place to work. Here are the techniques we rely on." },
      { type: "list", items: [
        "Run storage floor-to-ceiling so walls, not floors, do the work.",
        "Use one flooring material throughout to make rooms flow.",
        "Choose furniture with legs — seeing the floor makes rooms feel larger.",
        "Paint ceilings a shade lighter than walls.",
        "Place mirrors opposite windows, not opposite doors.",
        "Swap swing doors for sliding or pocket doors where possible.",
        "Keep curtains high and wide to exaggerate window size.",
        "Pick a sofa without bulky arms.",
        "Light the corners — dark corners shrink a room.",
        "Limit the palette to three main colours plus timber.",
      ] },
      { type: "tip", title: "See it in a real project", text: "The Linen Loft in Banani DOHS uses most of these ideas in just 1,650 sq ft." },
    ],
  },
  {
    slug: "hybrid-office-design",
    title: "Designing the hybrid office: fewer desks, better days",
    excerpt: "Teams come to the office to collaborate. Here is how to plan space for the way people actually work now.",
    category: "Workplace",
    cover: IMG.officeFloor,
    author: "Nadia Haque",
    date: "2026-06-19",
    body: [
      { type: "p", text: "Since hybrid work became normal, many offices in Dhaka sit half-empty on Mondays and Fridays and overflowing mid-week. Simply adding more desks is rarely the answer." },
      { type: "h2", text: "Start with data, not assumptions" },
      { type: "p", text: "We begin every workplace project by measuring how space is used: desk occupancy, meeting-room bookings and the size of typical meetings. Most teams discover that 60% of meetings involve four people or fewer — yet their meeting rooms seat twelve." },
      { type: "h2", text: "A better mix of spaces" },
      { type: "list", items: [
        "Fewer fixed desks, with a simple booking system.",
        "Many small rooms and phone booths instead of a few large ones.",
        "A flexible 'town hall' space for all-hands and events.",
        "A quiet library-style zone for focused work.",
      ] },
      { type: "p", text: "At Orbit Fintech, this approach freed 30% of desk space for meeting rooms and raised attendance on collaboration days to 87%." },
    ],
  },
  {
    slug: "rooftop-garden-guide",
    title: "A practical guide to rooftop gardens in Dhaka",
    excerpt: "Waterproofing, weight, plants and maintenance — everything to check before you turn your roof green.",
    category: "Outdoor",
    cover: IMG.lawn,
    author: "Farhana Rahman",
    date: "2026-04-07",
    body: [
      { type: "p", text: "A rooftop garden can cool the flats below, give children somewhere to play and bring a building's residents together. Done badly, it causes leaks. Here is what to get right." },
      { type: "h2", text: "1. Check the load" },
      { type: "p", text: "Wet soil is heavy. Ask a structural engineer to confirm the roof's capacity before planning anything, and keep heavy planters over beams and columns." },
      { type: "h2", text: "2. Waterproof first" },
      { type: "p", text: "Install a root-resistant waterproofing membrane, a protection board and a drainage layer before any soil goes down. Test it by flooding the roof for 48 hours." },
      { type: "h2", text: "3. Choose hardy plants" },
      { type: "list", items: [
        "Bougainvillea and ixora for colour.",
        "Areca palm and bamboo for screening.",
        "Lemongrass, curry leaf and chilli for the kitchen.",
        "Native grasses for low-water lawns.",
      ] },
      { type: "h2", text: "4. Automate watering" },
      { type: "p", text: "A simple drip system on a timer keeps plants alive through hot weeks and holidays, and uses far less water than hand watering." },
    ],
  },
  {
    slug: "interior-trends-2026",
    title: "Interior trends we're seeing in Bangladeshi homes in 2026",
    excerpt: "Warm minimalism, local craft and smarter lighting — the ideas our clients are asking for this year.",
    category: "Trends",
    cover: IMG.archLiving,
    author: "Maliha Islam",
    date: "2026-02-11",
    body: [
      { type: "p", text: "Trends come and go, so we only follow the ones that make homes better to live in. These are the requests we've heard most often this year." },
      { type: "list", items: [
        "Warm minimalism: fewer objects, but warmer timber, linen and plaster.",
        "Local craft: jute, cane, terracotta and nakshi kantha used in modern ways.",
        "Curved forms: arched doorways, rounded sofas and soft-edged tables.",
        "Layered lighting: dimmable cove, task and accent lights instead of one bright tube light.",
        "Earthy colour: sage, terracotta and clay tones replacing all-white schemes.",
        "Flexible rooms: guest rooms that double as studies or prayer rooms.",
      ] },
      { type: "quote", text: "The best trend is a home that suits the people living in it." },
    ],
  },
];

const WORDS_PER_MINUTE = 200;

export function readingTime(post: BlogPost) {
  const words = post.body
    .map((b) => (b.type === "list" ? b.items.join(" ") : b.type === "tip" ? `${b.title} ${b.text}` : b.text))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / WORDS_PER_MINUTE));
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
