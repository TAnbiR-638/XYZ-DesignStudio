"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { NAV, SERVICES, STUDIO } from "@/data";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setMegaOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMegaOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const showMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const hideMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const solid = (scrolled || megaOpen) && !open;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  return (
    <>
      <header
        className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-soft ${
          solid ? "bg-ivory/95 py-3 shadow-[0_1px_0_rgba(28,26,23,0.08)] backdrop-blur-md" : "bg-transparent py-5"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Logo light={!solid} onClick={() => setOpen(false)} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className={`flex items-center gap-7 text-[0.82rem] font-medium tracking-wide ${solid ? "text-ink" : "text-linen"}`}>
              {NAV.map((item) =>
                item.href === "/services" ? (
                  <li key={item.href} className="relative" onMouseEnter={showMega} onMouseLeave={hideMega}>
                    <Link
                      href={item.href}
                      aria-haspopup="true"
                      aria-expanded={megaOpen}
                      onFocus={showMega}
                      className={`flex items-center gap-1 py-2 transition-colors hover:text-bronze ${isActive(item.href) ? "text-bronze" : ""}`}
                    >
                      {item.label}
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden className={`transition-transform ${megaOpen ? "rotate-180" : ""}`}>
                        <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </Link>
                  </li>
                ) : (
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
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/cost-calculator"
              className={`hidden items-center gap-2 text-sm font-medium xl:flex ${solid ? "text-ink" : "text-linen"} link-underline`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <path d="M8 6h8M8 11h2M12 11h2M16 11v6M8 15h2M12 15h2M8 19h6" />
              </svg>
              Cost Calculator
            </Link>
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
              <span className={`absolute h-px w-5 bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
              <span className={`absolute h-px w-5 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute h-px w-5 bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </div>

        {/* Desktop services mega menu */}
        <div
          onMouseEnter={showMega}
          onMouseLeave={hideMega}
          className={`absolute inset-x-0 top-full hidden border-t border-ink/10 bg-ivory shadow-2xl shadow-ink/10 transition-all duration-300 lg:block ${
            megaOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="container-x grid grid-cols-[1fr_300px] gap-10 py-10">
            <ul className="grid grid-cols-3 gap-x-8 gap-y-2">
              {SERVICES.map((s, i) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    tabIndex={megaOpen ? 0 : -1}
                    onClick={() => setMegaOpen(false)}
                    className="group flex gap-4 rounded-2xl p-3 transition-colors hover:bg-linen"
                  >
                    <span className="pt-0.5 text-xs font-semibold text-bronze">0{i + 1}</span>
                    <span>
                      <span className="block font-display text-xl font-medium text-ink group-hover:text-bronze">{s.title}</span>
                      <span className="mt-0.5 block text-xs leading-snug text-stone">{s.short}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/cost-calculator"
              tabIndex={megaOpen ? 0 : -1}
              onClick={() => setMegaOpen(false)}
              className="group relative flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl p-6 text-linen"
            >
              <Image src={SERVICES[0].gallery[0]} alt="" fill sizes="300px" className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 to-ink/10" />
              <span className="text-xs font-semibold tracking-[0.2em] text-linen/70 uppercase">Free tool</span>
              <span className="mt-1 font-display text-2xl">Estimate your project cost room by room →</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`no-print fixed inset-0 z-40 overflow-y-auto bg-forest text-linen transition-[clip-path] duration-700 ease-soft lg:hidden ${
          open ? "[clip-path:circle(150%_at_100%_0)]" : "pointer-events-none [clip-path:circle(0%_at_100%_0)]"
        }`}
        aria-hidden={!open}
      >
        <div className="container-x flex min-h-full flex-col justify-between gap-10 pb-10 pt-28">
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {NAV.map((item, i) => (
                <li
                  key={item.href}
                  className="transition-all duration-700 ease-soft"
                  style={{
                    transitionDelay: open ? `${150 + i * 50}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "none" : "translateY(20px)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      tabIndex={open ? 0 : -1}
                      className="flex items-baseline gap-4 py-1.5 font-display text-4xl sm:text-5xl"
                    >
                      <span className="font-sans text-xs text-bronze">0{i + 1}</span>
                      <span className={isActive(item.href) ? "italic text-bronze" : ""}>{item.label}</span>
                    </Link>
                    {item.href === "/services" && (
                      <button
                        type="button"
                        tabIndex={open ? 0 : -1}
                        aria-expanded={mobileServices}
                        aria-label="Show all services"
                        onClick={() => setMobileServices((v) => !v)}
                        className="grid h-10 w-10 place-items-center rounded-full border border-linen/25"
                      >
                        <span className={`transition-transform ${mobileServices ? "rotate-45" : ""}`}>+</span>
                      </button>
                    )}
                  </div>
                  {item.href === "/services" && (
                    <div className={`grid transition-[grid-template-rows] duration-500 ${mobileServices ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <ul className="overflow-hidden pl-8">
                        {SERVICES.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              tabIndex={open && mobileServices ? 0 : -1}
                              onClick={() => setOpen(false)}
                              className="block py-1.5 text-base text-linen/75 hover:text-linen"
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-4 border-t border-linen/15 pt-6 text-sm text-linen/75">
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/contact" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="btn btn-bronze w-full">
                Book a free consultation
              </Link>
              <Link href="/cost-calculator" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="btn btn-ghost w-full">
                Cost calculator
              </Link>
            </div>
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
