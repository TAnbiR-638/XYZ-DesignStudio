import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { IMG, STUDIO } from "@/data";

export default function CTABand() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-x">
        <Reveal className="grain relative isolate overflow-hidden rounded-[2rem] bg-forest px-6 py-16 text-linen sm:px-12 md:py-24 lg:px-20">
          <Image src={IMG.warmLiving} alt="" fill sizes="(max-width: 1320px) 100vw, 1320px" className="-z-10 object-cover opacity-25" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest via-forest/90 to-forest/40" />
          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="eyebrow">Let&apos;s begin</span>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Have a space in mind? <em className="text-bronze">Let&apos;s shape it together.</em>
              </h2>
              <p className="mt-5 max-w-lg text-linen/75">
                Book a free 45-minute discovery call. You&apos;ll leave with honest advice, a rough budget and a
                clear next step — no obligation.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Link href="/contact" className="btn btn-bronze">
                Book free consultation
                <span aria-hidden>→</span>
              </Link>
              <a href={STUDIO.phoneHref} className="btn btn-ghost">
                Call {STUDIO.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
