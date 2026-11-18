import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { IMG, STUDIO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free consultation with XYZ Design Studio. Visit our Gulshan-2 studio or call +880 1700-000 000.",
};

export default function ContactPage() {
  const cards = [
    { label: "Call us", value: STUDIO.phone, href: STUDIO.phoneHref },
    { label: "Email", value: STUDIO.email, href: `mailto:${STUDIO.email}` },
    { label: "WhatsApp", value: "Chat with a designer", href: STUDIO.whatsapp },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about <em className="text-bronze">your space.</em>
          </>
        }
        intro="Tell us a little about your project. A designer will call you back within one working day to book your free consultation."
        image={IMG.minimalRoom}
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between rounded-[1.5rem] border border-ink/10 bg-linen p-6 transition-all duration-500 hover:border-bronze hover:shadow-lg"
              >
                <span>
                  <span className="block text-xs font-semibold tracking-[0.2em] text-mist uppercase">{c.label}</span>
                  <span className="mt-1 block font-display text-2xl font-medium break-all">{c.value}</span>
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/15 transition-all group-hover:border-bronze group-hover:bg-bronze group-hover:text-linen">
                  ↗
                </span>
              </a>
            ))}
            <div className="rounded-[1.5rem] bg-forest p-6 text-linen">
              <p className="text-xs font-semibold tracking-[0.2em] text-linen/55 uppercase">Studio &amp; material library</p>
              <p className="mt-2 font-display text-2xl">{STUDIO.address}</p>
              <p className="mt-3 text-sm text-linen/70">{STUDIO.hours}</p>
              <p className="mt-1 text-sm text-linen/70">Walk-ins welcome · free parking</p>
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-16">
          <Reveal className="overflow-hidden rounded-[2rem] border border-ink/10 bg-sand">
            <iframe
              title="Map showing XYZ Design Studio in Gulshan-2, Dhaka"
              src="https://www.google.com/maps?q=Gulshan+2+Circle,+Dhaka&z=15&output=embed"
              className="h-[380px] w-full grayscale-[0.6] md:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
