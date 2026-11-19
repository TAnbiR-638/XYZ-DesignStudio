/**
 * Indicative 2026 Dhaka design + build rates used by the cost calculators.
 * Room packages cover civil touch-ups, electrical, ceiling, joinery and finishes for that room.
 */
export const TIERS = [
  { id: "essential", label: "Essential", note: "Smart layouts, quality local finishes, laminate joinery" },
  { id: "signature", label: "Signature", note: "Custom joinery, veneer/PU finishes, layered lighting" },
  { id: "luxe", label: "Luxe", note: "Imported stone, bespoke furniture, premium fittings" },
] as const;

export type TierId = (typeof TIERS)[number]["id"];
type Rate = Record<TierId, number>;

export type RoomType = { id: string; label: string; hint: string; max: number; default: number; rate: Rate };

export const ROOMS: RoomType[] = [
  { id: "living", label: "Living & dining", hint: "TV wall, feature wall, ceiling & lighting", max: 2, default: 1, rate: { essential: 450000, signature: 800000, luxe: 1400000 } },
  { id: "master", label: "Master bedroom", hint: "Wardrobe, bed-back panel, dresser", max: 2, default: 1, rate: { essential: 300000, signature: 550000, luxe: 950000 } },
  { id: "bedroom", label: "Other bedrooms", hint: "Wardrobe, study/vanity unit", max: 5, default: 2, rate: { essential: 220000, signature: 400000, luxe: 700000 } },
  { id: "kitchen", label: "Kitchen", hint: "Modular cabinets, worktop, backsplash", max: 2, default: 1, rate: { essential: 350000, signature: 650000, luxe: 1100000 } },
  { id: "bath", label: "Bathrooms", hint: "Tiles, fittings, vanity, waterproofing", max: 6, default: 3, rate: { essential: 150000, signature: 280000, luxe: 500000 } },
  { id: "balcony", label: "Balconies", hint: "Flooring, planters, lighting", max: 4, default: 2, rate: { essential: 40000, signature: 90000, luxe: 160000 } },
  { id: "foyer", label: "Foyer & passage", hint: "Shoe cabinet, console, wall finish", max: 1, default: 1, rate: { essential: 80000, signature: 150000, luxe: 280000 } },
  { id: "prayer", label: "Prayer / study room", hint: "Storage, flooring, lighting", max: 2, default: 0, rate: { essential: 90000, signature: 170000, luxe: 300000 } },
];

export type AddOn = { id: string; label: string; hint: string; perSqft?: Rate; flat?: Rate; percent?: number };

export const ADDONS: AddOn[] = [
  { id: "ceiling", label: "False ceiling & cove lighting", hint: "Gypsum ceiling in living areas and bedrooms", perSqft: { essential: 160, signature: 240, luxe: 340 } },
  { id: "paint", label: "Full repainting & wall finishes", hint: "Putty, primer, premium emulsion", perSqft: { essential: 35, signature: 55, luxe: 90 } },
  { id: "smart", label: "Smart lighting & automation", hint: "App/voice control, scenes, sensors", flat: { essential: 180000, signature: 350000, luxe: 600000 } },
  { id: "curtains", label: "Curtains & blinds", hint: "All windows, with tracks", flat: { essential: 60000, signature: 120000, luxe: 220000 } },
  { id: "furniture", label: "Loose furniture & décor", hint: "Sofas, beds, dining, rugs and styling", percent: 0.25 },
];

export const formatBDT = (n: number) => {
  if (n >= 1e7) return `৳${(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `৳${(n / 1e5).toFixed(1)} Lakh`;
  return `৳${Math.round(n).toLocaleString("en-IN")}`;
};
