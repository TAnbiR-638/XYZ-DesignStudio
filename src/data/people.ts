import { PORTRAITS } from "./images";
import { PROJECTS } from "./projects";

export type TeamMember = { name: string; role: string; image: string; bio: string; since: number };

export const TEAM: TeamMember[] = [
  { name: "Sabrina Karim", role: "Founder & Principal Designer", image: PORTRAITS.sabrina, since: 2014, bio: "Trained in interior architecture; has led more than 200 residential projects." },
  { name: "Imran Chowdhury", role: "Head of Architecture", image: PORTRAITS.imran, since: 2018, bio: "Registered architect focused on climate-responsive homes and façades." },
  { name: "Maliha Islam", role: "Lead Interior Designer", image: PORTRAITS.maliha, since: 2016, bio: "Leads our residential studio and material library." },
  { name: "Rafiq Ahmed", role: "Head of Projects & Workshop", image: PORTRAITS.rafiq, since: 2015, bio: "Civil engineer running site teams and the Tejgaon joinery workshop." },
  { name: "Nadia Haque", role: "Commercial Design Lead", image: PORTRAITS.nadia, since: 2019, bio: "Designs workplaces, clinics and showrooms for growing companies." },
  { name: "Tahsin Alam", role: "3D Visualization Lead", image: PORTRAITS.tahsin, since: 2020, bio: "Turns drawings into photoreal renders and 360° walkthroughs." },
  { name: "Farhana Rahman", role: "Landscape Designer", image: PORTRAITS.farhana, since: 2021, bio: "Specialises in rooftop gardens and native, low-water planting." },
  { name: "Kamal Hossain", role: "Client Relations Manager", image: PORTRAITS.kamal, since: 2017, bio: "Your first point of contact — from discovery call to warranty visit." },
];

/** Testimonials come from real project records so names, roles and projects always match. */
export const TESTIMONIALS = PROJECTS.filter((p) => p.testimonial).map((p) => ({
  ...p.testimonial!,
  projectSlug: p.slug,
  projectTitle: p.title,
  image: p.cover,
}));
