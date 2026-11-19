export type FaqItem = { q: string; a: string };
export type FaqGroup = { topic: string; items: FaqItem[] };

export const FAQ_GROUPS: FaqGroup[] = [
  {
    topic: "Getting started",
    items: [
      { q: "Is the first consultation really free?", a: "Yes. The 45-minute discovery call and the first site visit within Dhaka city are free, with no obligation to continue." },
      { q: "What should I prepare before the first meeting?", a: "Your floor plan (a phone photo is fine), a rough budget, your ideal move-in date and a few images of spaces you like. If you don't have these, we'll help you work them out." },
      { q: "Do you work outside Dhaka?", a: "Yes — we have delivered projects in Chattogram, Sylhet and Cox's Bazar. Travel and accommodation for site teams are quoted separately and transparently." },
      { q: "I live abroad. Can you manage my project remotely?", a: "Yes. Around a quarter of our clients are overseas Bangladeshis. Approvals happen over video call and you receive a progress report every week." },
    ],
  },
  {
    topic: "Cost & payment",
    items: [
      { q: "How much does an interior design project cost?", a: "For design + build, residential projects in Dhaka typically range from ৳1,800 to ৳4,200 per sq ft depending on finish level; offices start around ৳1,500 per sq ft. Use our cost calculator for a room-by-room estimate, then we'll give you an itemised quotation after the site visit." },
      { q: "Do you charge a separate design fee?", a: "On design + build projects the design fee is included. For design-only projects it starts from ৳120 per sq ft." },
      { q: "How are payments structured?", a: "Typically 30% on signing, staged payments tied to completed milestones, and the final 10% after handover. Every payment is matched to work you can see." },
      { q: "Will the price change once work starts?", a: "Not unless you change the scope. The BOQ is fixed at signing; any change you request is priced and approved in writing before we do it." },
    ],
  },
  {
    topic: "Process & timeline",
    items: [
      { q: "How long does a typical project take?", a: "A 1,500–2,500 sq ft apartment usually takes 10–14 weeks from approved design to handover. Offices take 6–12 weeks depending on size. Your exact date is written into the contract." },
      { q: "How will I know what is happening on site?", a: "You get a dedicated project manager and a WhatsApp report every Thursday with photos, a short video and next week's plan." },
      { q: "Can you work with furniture I already own?", a: "Absolutely. We often restore or reupholster heirloom pieces and design the new scheme around them." },
    ],
  },
  {
    topic: "Materials & warranty",
    items: [
      { q: "Which materials suit Dhaka's humidity?", a: "We use marine-grade plywood or HDHMR boards for joinery, moisture-resistant gypsum in wet areas, and proper waterproofing membranes in bathrooms and balconies." },
      { q: "What does your warranty cover?", a: "Workmanship is covered for 12 months after handover, including a free check-up visit at month six. Branded hardware and appliances carry their manufacturers' warranties." },
      { q: "Can I visit your workshop or material library?", a: "Yes. Our Gulshan-2 studio has a walk-in material library, and workshop visits in Tejgaon can be arranged during your project." },
    ],
  },
];

export const FAQS: FaqItem[] = FAQ_GROUPS.flatMap((g) => g.items);

/** A short, curated set for the homepage. */
export const HOME_FAQS: FaqItem[] = [
  FAQ_GROUPS[1].items[0],
  FAQ_GROUPS[0].items[0],
  FAQ_GROUPS[2].items[0],
  FAQ_GROUPS[2].items[2],
  FAQ_GROUPS[0].items[3],
];
