import Link from "next/link";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import { FOOTER_LINKS, SERVICES, STUDIO } from "@/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-linen">
      <div className="container-x pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-linen/65">
              An interior and architecture studio in Dhaka designing calm, characterful spaces for families, teams and
              hospitality brands since {STUDIO.founded}.
            </p>
            <p lang="bn" className="mt-3 font-bangla text-sm text-linen/50">{STUDIO.taglineBn}</p>
            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-bronze uppercase">Design notes, monthly</p>
              <NewsletterForm />
              <p className="mt-2 text-xs text-linen/40">One email a month. Unsubscribe anytime.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:pl-10">
            <div>
              <h3 className="mb-5 text-xs font-semibold tracking-[0.25em] text-linen/45 uppercase">Studio</h3>
              <ul className="space-y-3 text-sm">
                {FOOTER_LINKS.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="link-underline text-linen/80 hover:text-linen">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-xs font-semibold tracking-[0.25em] text-linen/45 uppercase">Services</h3>
              <ul className="space-y-3 text-sm">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="link-underline text-linen/80 hover:text-linen">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="mb-5 text-xs font-semibold tracking-[0.25em] text-linen/45 uppercase">Visit us</h3>
              <address className="space-y-3 text-sm not-italic text-linen/80">
                <p>{STUDIO.address}</p>
                <p>
                  <a href={STUDIO.phoneHref} className="link-underline hover:text-linen">{STUDIO.phone}</a>
                </p>
                <p>
                  <a href={`mailto:${STUDIO.email}`} className="link-underline hover:text-linen">{STUDIO.email}</a>
                </p>
                <p className="text-linen/55">
                  {STUDIO.hours}
                  <br />
                  {STUDIO.closed}
                </p>
              </address>
              <ul className="mt-6 flex flex-wrap gap-2">
                {STUDIO.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border border-linen/20 px-3 py-1.5 text-xs text-linen/75 transition hover:border-bronze hover:bg-bronze hover:text-linen"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p
          aria-hidden
          className="pointer-events-none mt-16 text-center font-display text-[18vw] leading-[0.8] font-semibold tracking-tight text-linen/[0.05] select-none lg:text-[13rem]"
        >
          XYZ Studio
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-linen/10 pt-8 text-xs text-linen/50 sm:flex-row">
          <p>© 2026 XYZ Design Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-linen">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-linen">Terms of Service</Link>
            <a href="#top" className="hover:text-linen">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
