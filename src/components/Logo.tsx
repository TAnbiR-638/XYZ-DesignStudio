import Link from "next/link";

export default function Logo({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="XYZ Design Studio — home"
      className={`group flex items-center gap-3 ${light ? "text-linen" : "text-ink"}`}
    >
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-t-full border border-current transition-colors duration-500 group-hover:border-bronze">
        <span className="font-display text-[0.95rem] font-semibold italic tracking-tight">xyz</span>
        <span className="absolute inset-x-0 bottom-0 h-0 bg-bronze/90 transition-all duration-500 group-hover:h-1" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] font-semibold tracking-wide">XYZ</span>
        <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.38em] opacity-80">
          Design Studio
        </span>
      </span>
    </Link>
  );
}
