import { IMG } from "./images";

export const PROJECT_CATEGORIES = ["Residential", "Commercial", "Hospitality", "Architecture", "Renovation", "Landscape"] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  /** Area in sq ft, used for sorting and display. */
  areaSqft: number;
  year: number;
  durationWeeks: number;
  client: string;
  cover: string;
  gallery: string[];
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  /** Service slugs delivered on this project. */
  scope: string[];
  highlights: { value: string; label: string }[];
  palette: string[];
  featured?: boolean;
  testimonial?: { quote: string; name: string; role: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "ashwood-residence",
    title: "The Ashwood Residence",
    category: "Residential",
    location: "Gulshan-2, Dhaka",
    areaSqft: 3200,
    year: 2026,
    durationWeeks: 14,
    client: "Private family of five",
    cover: IMG.heroLiving,
    gallery: [IMG.heroLiving, IMG.dining, IMG.calmBedroom, IMG.darkBath],
    summary: "A warm, low-slung family apartment built around long views and natural oak.",
    challenge:
      "The family wanted a home that felt relaxed on weekdays yet could host thirty relatives on Eid. The original plan split living and dining into two dark rooms with a corridor between them.",
    approach:
      "We removed a non-structural partition to create one long living-dining room, lowered the furniture to keep sightlines open to the lake, and wrapped the space in oiled oak, linen and handmade clay tiles. A hidden pantry wall keeps hosting clutter out of sight.",
    outcome:
      "The apartment now seats 14 for dinner and still feels calm for a family of five. Daylight reaches 40% deeper into the plan.",
    scope: ["residential", "furniture", "turnkey"],
    highlights: [
      { value: "14", label: "Dinner guests seated" },
      { value: "40%", label: "Deeper daylight" },
      { value: "2 days", label: "Handed over early" },
    ],
    palette: ["#C9B8A0", "#7A5B3E", "#E9E1D4", "#3B3A36"],
    featured: true,
    testimonial: {
      quote: "They listened more than they talked. Our apartment finally feels like us — and they finished two days before Eid, exactly as promised.",
      name: "Nusrat Jahan",
      role: "Homeowner, Gulshan-2",
    },
  },
  {
    slug: "northlight-hq",
    title: "Northlight Studio HQ",
    category: "Commercial",
    location: "Banani, Dhaka",
    areaSqft: 6800,
    year: 2025,
    durationWeeks: 10,
    client: "Northlight, creative agency",
    cover: IMG.officeOpen,
    gallery: [IMG.officeOpen, IMG.officeCorridor, IMG.officeLounge, IMG.officeFloor],
    summary: "A creative agency floor with focus pods, a client lounge and a lot of daylight.",
    challenge:
      "Northlight's 70-person team had outgrown a maze of small cabins. Meeting rooms were always booked and half the desks had no natural light.",
    approach:
      "We stripped the floor back to the slab, created a bright open studio along the windows and pushed meeting rooms to the core behind glass so daylight reaches every desk. Six acoustic phone booths and a bookable project room solved the meeting crunch.",
    outcome: "Capacity grew from 70 to 96 seats on the same floor, and meeting-room bookings dropped by a third.",
    scope: ["commercial", "3d-visualization", "turnkey"],
    highlights: [
      { value: "96", label: "Seats (from 70)" },
      { value: "6", label: "Acoustic booths" },
      { value: "0", label: "Working days lost" },
    ],
    palette: ["#2F3438", "#B9B2A6", "#E6E3DD", "#8C6B4A"],
    featured: true,
    testimonial: {
      quote: "The 3D walkthrough sold our board on the design in one meeting. Moving day was seamless; the team hardly lost an hour of work.",
      name: "Tanvir Rahman",
      role: "COO, Northlight",
    },
  },
  {
    slug: "lakeview-duplex",
    title: "Lakeview Duplex",
    category: "Residential",
    location: "Baridhara, Dhaka",
    areaSqft: 5400,
    year: 2025,
    durationWeeks: 20,
    client: "Private family",
    cover: IMG.poolLiving,
    gallery: [IMG.poolLiving, IMG.openDining, IMG.islandKitchen, IMG.luxeBedroom],
    summary: "A double-height duplex that brings the lake indoors through glass and stone.",
    challenge: "A dramatic double-height volume felt cold and echoey, and the staircase blocked the view of the lake.",
    approach:
      "We kept the palette quiet — travertine, smoked oak and soft white plaster — to let the view do the talking. A new floating stair opens the sightline and doubles as a gallery wall for the family's art collection. Acoustic plaster tamed the echo.",
    outcome: "Winner of Best Residential Interior at the 2025 Bangladesh Design Awards.",
    scope: ["residential", "architecture", "furniture", "turnkey"],
    highlights: [
      { value: "2025", label: "Design award winner" },
      { value: "6 m", label: "Floating stair span" },
      { value: "20 wks", label: "Concept to keys" },
    ],
    palette: ["#D8D2C6", "#55524C", "#A48A6D", "#F2EFE9"],
    featured: true,
    testimonial: {
      quote: "Weekly progress photos, honest pricing, zero surprises. I have recommended XYZ to three friends already.",
      name: "Farzana Akter",
      role: "Homeowner, Baridhara",
    },
  },
  {
    slug: "ember-oak-bistro",
    title: "Ember & Oak Bistro",
    category: "Hospitality",
    location: "Dhanmondi, Dhaka",
    areaSqft: 2400,
    year: 2026,
    durationWeeks: 8,
    client: "Ember & Oak",
    cover: IMG.restaurant,
    gallery: [IMG.restaurant, IMG.diningHall, IMG.dining, IMG.warmLiving],
    summary: "An intimate bistro with layered lighting that shifts from lunch to late night.",
    challenge: "The brief was 'a place you never want to leave' — in a narrow 2,400 sq ft unit with a cramped kitchen pass.",
    approach:
      "Dark timber booths, brass details and three programmable lighting scenes give the room a different mood for every service. We reworked the kitchen pass and service path with the head chef.",
    outcome: "Covers grew 30% in the first quarter and ticket times dropped by a third.",
    scope: ["hospitality", "furniture", "turnkey"],
    highlights: [
      { value: "+30%", label: "Covers in Q1" },
      { value: "3", label: "Lighting scenes" },
      { value: "8 wks", label: "Fit-out time" },
    ],
    palette: ["#2A211C", "#8A5A35", "#C9A27A", "#E8DCCB"],
    featured: true,
    testimonial: {
      quote: "Our guests compliment the lighting every single night. Covers went up 30% in the first quarter after the redesign.",
      name: "Arif Hossain",
      role: "Founder, Ember & Oak",
    },
  },
  {
    slug: "sage-house",
    title: "Sage House",
    category: "Residential",
    location: "Bashundhara R/A, Dhaka",
    areaSqft: 2100,
    year: 2024,
    durationWeeks: 11,
    client: "Young couple, first home",
    cover: IMG.sageLiving,
    gallery: [IMG.sageLiving, IMG.plantLiving, IMG.oakBedroom, IMG.shakerKitchen],
    summary: "Sage walls, terracotta and plenty of plants for a young couple's first home.",
    challenge: "A tight budget and a developer-finished apartment with tiles the clients did not love but could not afford to replace.",
    approach:
      "We kept the existing floor tiles, invested in custom joinery and used colour to define zones instead of walls. Rugs and warm timber balance the cool tiles.",
    outcome: "Delivered 6% under the agreed budget, with storage for everything and room to grow.",
    scope: ["residential", "furniture"],
    highlights: [
      { value: "6%", label: "Under budget" },
      { value: "11 wks", label: "Start to finish" },
      { value: "38 m", label: "Built-in storage" },
    ],
    palette: ["#8FA38A", "#C7764A", "#EFE8DC", "#3E4A3C"],
  },
  {
    slug: "meridian-facade",
    title: "Meridian Residence Façade",
    category: "Architecture",
    location: "Uttara, Dhaka",
    areaSqft: 14000,
    year: 2025,
    durationWeeks: 26,
    client: "Meridian Group",
    cover: IMG.darkFacade,
    gallery: [IMG.darkFacade, IMG.screenFacade, IMG.houseFacade, IMG.houseNight],
    summary: "A layered timber-and-steel façade that shades the west sun and glows at night.",
    challenge: "A seven-storey residential building with a full west-facing glass façade that overheated every afternoon.",
    approach:
      "Vertical composite-timber fins on a steel frame cut direct afternoon sun while keeping views. Concealed linear lighting turns the façade into a lantern after dark.",
    outcome: "Measured afternoon indoor temperatures on west-facing flats dropped by up to 4 °C.",
    scope: ["architecture", "3d-visualization"],
    highlights: [
      { value: "−4 °C", label: "Afternoon indoor temp." },
      { value: "7", label: "Storeys" },
      { value: "320", label: "Shading fins" },
    ],
    palette: ["#1F2124", "#9C7552", "#CFC7BA", "#5E6166"],
  },
  {
    slug: "linen-loft",
    title: "The Linen Loft",
    category: "Residential",
    location: "Banani DOHS, Dhaka",
    areaSqft: 1650,
    year: 2026,
    durationWeeks: 9,
    client: "Working professional",
    cover: IMG.softLiving,
    gallery: [IMG.softLiving, IMG.bohoLiving, IMG.frameBedroom, IMG.tubBath],
    summary: "Soft neutrals and rounded forms for a calm, light-filled apartment.",
    challenge: "A boxy, low-ceilinged apartment that felt smaller than its 1,650 sq ft.",
    approach:
      "Curves everywhere — from arched mirrors to a bouclé sofa — soften the plan. Floor-to-ceiling hidden storage keeps surfaces clear so light bounces freely.",
    outcome: "The client describes it as 'twice the size' — and it was finished in nine weeks.",
    scope: ["residential", "furniture", "turnkey"],
    highlights: [
      { value: "9 wks", label: "Fit-out time" },
      { value: "100%", label: "Hidden storage" },
      { value: "5", label: "Custom pieces" },
    ],
    palette: ["#EDE6DB", "#C2B29B", "#8A7B68", "#FFFFFF"],
  },
  {
    slug: "atelier-showroom",
    title: "Atelier Furniture Showroom",
    category: "Commercial",
    location: "Tejgaon, Dhaka",
    areaSqft: 4200,
    year: 2024,
    durationWeeks: 7,
    client: "Atelier Living",
    cover: IMG.openLiving,
    gallery: [IMG.openLiving, IMG.yellowChair, IMG.rattanLiving, IMG.blueSofa],
    summary: "A gallery-style showroom where every vignette feels like a real home.",
    challenge: "A cavernous warehouse where furniture looked lost and customers wandered without direction.",
    approach:
      "We broke the space into room sets connected by one guided route, with flexible track lighting so the merchandising team can restyle in an afternoon.",
    outcome: "Average visit time doubled and the showroom became the brand's best-performing store.",
    scope: ["commercial", "turnkey"],
    highlights: [
      { value: "2×", label: "Average visit time" },
      { value: "12", label: "Room vignettes" },
      { value: "7 wks", label: "Fit-out time" },
    ],
    palette: ["#F1EEE8", "#272727", "#D2A54A", "#9A8F80"],
  },
  {
    slug: "kawa-coffee-gulshan",
    title: "Kawa Coffee, Gulshan",
    category: "Hospitality",
    location: "Gulshan-1, Dhaka",
    areaSqft: 1300,
    year: 2025,
    durationWeeks: 6,
    client: "Kawa Coffee",
    cover: IMG.cafe,
    gallery: [IMG.cafe, IMG.cafeWindow, IMG.cafeSeating, IMG.plantConsole],
    summary: "A plant-filled neighbourhood café designed for both laptops and long conversations.",
    challenge: "The client needed one room to work for morning takeaway rush, daytime remote workers and evening groups.",
    approach:
      "A long communal table with power at every seat anchors the room, a window bar serves solo guests, and soft booths at the back suit groups. Planting and timber slats absorb noise.",
    outcome: "Average spend per visit rose 18% as guests stayed longer.",
    scope: ["hospitality", "furniture"],
    highlights: [
      { value: "+18%", label: "Spend per visit" },
      { value: "48", label: "Seats" },
      { value: "6 wks", label: "Fit-out time" },
    ],
    palette: ["#3E4A3C", "#B7835A", "#EADFCF", "#1F1E1C"],
  },
  {
    slug: "saffron-suites",
    title: "Saffron Boutique Suites",
    category: "Hospitality",
    location: "Cox's Bazar",
    areaSqft: 18500,
    year: 2025,
    durationWeeks: 24,
    client: "Saffron Hotels",
    cover: IMG.hotelSuite,
    gallery: [IMG.hotelSuite, IMG.hotelRoom, IMG.hotelBed, IMG.resortPool],
    summary: "Twenty-four guest suites with a calm coastal palette and salt-resistant finishes.",
    challenge: "Sea air was corroding fittings and fading fabrics within two years in the old rooms.",
    approach:
      "We specified marine-grade hardware, solution-dyed fabrics and teak, and designed a coastal palette of sand, sea-glass and timber. Every suite gained a proper work desk and blackout lighting control.",
    outcome: "Guest review scores rose from 8.1 to 9.0 within six months of reopening.",
    scope: ["hospitality", "furniture", "turnkey"],
    highlights: [
      { value: "24", label: "Suites" },
      { value: "9.0", label: "Guest rating (from 8.1)" },
      { value: "24 wks", label: "Phased works" },
    ],
    palette: ["#E3D6C1", "#7F9C9A", "#8C6A48", "#FAF7F2"],
  },
  {
    slug: "orbit-fintech",
    title: "Orbit Fintech Office",
    category: "Commercial",
    location: "Mohakhali DOHS, Dhaka",
    areaSqft: 9200,
    year: 2026,
    durationWeeks: 12,
    client: "Orbit Fintech",
    cover: IMG.officeFloor,
    gallery: [IMG.officeFloor, IMG.officeDesk, IMG.teamTable, IMG.greenStudy],
    summary: "A hybrid-work office designed around collaboration days and quiet focus.",
    challenge: "With staff in office three days a week, Orbit needed fewer fixed desks and far more meeting space.",
    approach:
      "We reduced fixed desks by 30% and reinvested the space in project rooms, a town-hall stair and a library-style quiet zone. A desk-booking system ties it together.",
    outcome: "Office attendance on collaboration days rose to 87%.",
    scope: ["commercial", "3d-visualization", "turnkey"],
    highlights: [
      { value: "87%", label: "Collaboration-day attendance" },
      { value: "14", label: "Meeting spaces" },
      { value: "12 wks", label: "Fit-out time" },
    ],
    palette: ["#202326", "#6E8B74", "#E8E4DC", "#C08A55"],
  },
  {
    slug: "riverstone-villa",
    title: "Riverstone Villa",
    category: "Architecture",
    location: "Purbachal, Dhaka",
    areaSqft: 6200,
    year: 2026,
    durationWeeks: 40,
    client: "Private family",
    cover: IMG.modernHouse,
    gallery: [IMG.modernHouse, IMG.treeHouse, IMG.indoorOutdoor, IMG.stairLiving],
    summary: "A new family villa organised around a shaded courtyard and a mature jackfruit tree.",
    challenge: "The family wanted privacy from neighbouring plots without losing light or cross-ventilation.",
    approach:
      "The house wraps around an internal courtyard that keeps the original tree. Deep overhangs, jaali screens and high windows give privacy, shade and constant airflow.",
    outcome: "The house stays comfortable without air-conditioning for most of the year outside peak summer.",
    scope: ["architecture", "residential", "landscape", "turnkey"],
    highlights: [
      { value: "1", label: "Tree saved" },
      { value: "4", label: "Bedrooms" },
      { value: "40 wks", label: "Design + build" },
    ],
    palette: ["#BFA88A", "#4D4A42", "#EEE7DC", "#6F7F5C"],
  },
  {
    slug: "dhanmondi-heritage-flat",
    title: "Dhanmondi Heritage Flat",
    category: "Renovation",
    location: "Dhanmondi, Dhaka",
    areaSqft: 2300,
    year: 2025,
    durationWeeks: 12,
    client: "Retired couple",
    cover: IMG.whiteLiving,
    gallery: [IMG.whiteLiving, IMG.shakerKitchen, IMG.showerBath, IMG.classicBedroom],
    summary: "A 25-year-old apartment rewired, re-plumbed and opened up — keeping its mosaic floors.",
    challenge: "Damp walls, unsafe wiring and a closed-off kitchen in a much-loved family flat with original mosaic floors.",
    approach:
      "We renewed all wiring and plumbing, treated the damp at its source, opened the kitchen to the dining room and carefully restored the mosaic floors.",
    outcome: "A safe, bright home with the character the owners loved — completed while they stayed in two rooms.",
    scope: ["renovation", "residential"],
    highlights: [
      { value: "25 yrs", label: "Original building age" },
      { value: "100%", label: "Rewired" },
      { value: "2", label: "Rooms lived in during works" },
    ],
    palette: ["#F1EDE6", "#A7896A", "#40505A", "#D9CBB5"],
  },
  {
    slug: "uttara-kitchen-remodel",
    title: "Uttara Kitchen & Bath Remodel",
    category: "Renovation",
    location: "Uttara Sector 4, Dhaka",
    areaSqft: 420,
    year: 2026,
    durationWeeks: 5,
    client: "Family of four",
    cover: IMG.brassKitchen,
    gallery: [IMG.brassKitchen, IMG.marbleKitchen, IMG.marbleBath, IMG.tubBath],
    summary: "A dark galley kitchen and two bathrooms turned bright, practical and easy to clean.",
    challenge: "A cramped kitchen with no counter space and two leaking bathrooms.",
    approach:
      "An L-shaped modular kitchen with quartz tops doubled the counter space. Bathrooms were fully waterproofed, with wall-hung fittings and large-format tiles for easy cleaning.",
    outcome: "Finished in five weeks while the family lived at home.",
    scope: ["renovation", "furniture"],
    highlights: [
      { value: "2×", label: "Counter space" },
      { value: "3", label: "Rooms remodelled" },
      { value: "5 wks", label: "Total time" },
    ],
    palette: ["#F4F1EC", "#B8955E", "#5D6B6B", "#2B2B2B"],
  },
  {
    slug: "gulshan-rooftop-garden",
    title: "Gulshan Rooftop Garden",
    category: "Landscape",
    location: "Gulshan-1, Dhaka",
    areaSqft: 2800,
    year: 2025,
    durationWeeks: 7,
    client: "Apartment owners' association",
    cover: IMG.lawn,
    gallery: [IMG.lawn, IMG.gardening, IMG.indoorOutdoor, IMG.resortPool],
    summary: "An unused rooftop turned into a shared garden with shade, seating and a kids' lawn.",
    challenge: "A hot, leaking rooftop that residents avoided, shared by 18 households.",
    approach:
      "We re-waterproofed the roof, added a pergola and planters with native species, a soft lawn for children and a drip-irrigation system on a timer.",
    outcome: "The roof is now used daily, and top-floor flats report noticeably cooler ceilings.",
    scope: ["landscape"],
    highlights: [
      { value: "18", label: "Households served" },
      { value: "40+", label: "Plant species" },
      { value: "7 wks", label: "Build time" },
    ],
    palette: ["#5F7A4E", "#C9B48E", "#3C3A35", "#E9E4D8"],
  },
  {
    slug: "greenleaf-clinic",
    title: "Greenleaf Family Clinic",
    category: "Commercial",
    location: "Mirpur DOHS, Dhaka",
    areaSqft: 3600,
    year: 2024,
    durationWeeks: 9,
    client: "Greenleaf Clinics",
    cover: IMG.greenStudy,
    gallery: [IMG.greenStudy, IMG.consoleMirror, IMG.greyLounge, IMG.officeCorridor],
    summary: "A calm, non-clinical family clinic that puts anxious patients at ease.",
    challenge: "Patients, many of them children, found the old clinic noisy, bright and stressful.",
    approach:
      "Warm lighting, wood and soft greens replace harsh white. Separate waiting zones for children and adults, and antimicrobial yet warm-looking finishes throughout.",
    outcome: "Patient satisfaction scores improved by 22% in the first year.",
    scope: ["commercial", "turnkey"],
    highlights: [
      { value: "+22%", label: "Patient satisfaction" },
      { value: "8", label: "Consultation rooms" },
      { value: "9 wks", label: "Fit-out time" },
    ],
    palette: ["#6E8B74", "#E6DED0", "#B98E64", "#FFFFFF"],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
