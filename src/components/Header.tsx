"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV, STUDIO } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled && !open;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-soft ${
          solid
            ? "bg-ivory/90 py-3 shadow-[0_1px_0_rgba(28,26,23,0.08)] backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Logo light={!solid} onClick={() => setOpen(false)} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className={`flex items-center gap-8 text-[0.82rem] font-medium tracking-wide ${solid ? "text-ink" : "text-linen"}`}>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative py-2 transition-colors hover:text-bronze ${isActive(item.href) ? "text-bronze" : ""}`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-bronze" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={STUDIO.phoneHref}
              className={`hidden text-sm font-medium xl:block ${solid ? "text-ink" : "text-linen"} link-underline`}
            >
              {STUDIO.phone}
            </a>
            <Link href="/contact" className={`btn hidden !py-3 sm:inline-flex ${solid ? "btn-primary" : "btn-bronze"}`}>
              Book Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`relative grid h-11 w-11 place-items-center rounded-full border lg:hidden ${
                solid ? "border-ink/20 text-ink" : "border-linen/40 text-linen"
              }`}
            >
              <span
                className={`absolute h-px w-5 bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`}
              />
              <span className={`absolute h-px w-5 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span
                className={`absolute h-px w-5 bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-forest text-linen transition-[clip-path] duration-700 ease-soft lg:hidden ${
          open ? "[clip-path:circle(150%_at_100%_0)]" : "pointer-events-none [clip-path:circle(0%_at_100%_0)]"
        }`}
        aria-hidden={!open}
      >
        <div className="container-x flex h-full flex-col justify-between pb-10 pt-28">
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {NAV.map((item, i) => (
                <li
                  key={item.href}
                  className="transition-all duration-700 ease-soft"
                  style={{
                    transitionDelay: open ? `${150 + i * 60}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "none" : "translateY(20px)",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className="flex items-baseline gap-4 py-2 font-display text-4xl sm:text-5xl"
                  >
                    <span className="font-sans text-xs text-bronze">0{i + 1}</span>
                    <span className={isActive(item.href) ? "italic text-bronze" : ""}>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-4 border-t border-linen/15 pt-6 text-sm text-linen/75">
            <Link href="/contact" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="btn btn-bronze w-full sm:hidden">
              Book a free consultation
            </Link>
            <p>
              <a href={STUDIO.phoneHref} tabIndex={open ? 0 : -1}>{STUDIO.phone}</a>
              <span className="mx-2 opacity-40">/</span>
              <a href={`mailto:${STUDIO.email}`} tabIndex={open ? 0 : -1}>{STUDIO.email}</a>
            </p>
            <p>{STUDIO.address}</p>
          </div>
        </div>
      </div>
    </>
  );
}
