import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[90svh] items-center overflow-hidden bg-forest text-linen">
      <div className="container-x py-36 text-center">
        <p className="font-display text-[9rem] leading-none font-medium text-bronze md:text-[13rem]">404</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">This room hasn&apos;t been designed yet.</h1>
        <p className="mx-auto mt-4 max-w-md text-linen/70">The page you&apos;re looking for has moved or never existed.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-bronze">Back to home</Link>
          <Link href="/projects" className="btn btn-ghost">Browse projects</Link>
        </div>
      </div>
    </section>
  );
}
