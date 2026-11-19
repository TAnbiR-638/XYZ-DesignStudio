"use client";

import { useRef, useState, type FormEvent } from "react";
import type { Job } from "@/data";

const field =
  "w-full rounded-xl border border-ink/15 bg-linen px-4 py-3.5 text-[0.95rem] text-ink transition placeholder:text-mist focus:border-bronze focus:ring-1 focus:ring-bronze focus:outline-none";

export default function JobBoard({ jobs, email }: { jobs: Job[]; email: string }) {
  const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department)))];
  const [dept, setDept] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const [role, setRole] = useState(jobs[0]?.title ?? "");
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const list = dept === "All" ? jobs : jobs.filter((j) => j.department === dept);

  const apply = (title: string) => {
    setRole(title);
    setSent(false);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
      <div className="min-w-0">
        <div className="no-scrollbar -mx-5 mb-8 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
          {departments.map((d) => (
            <button
              key={d}
              type="button"
              aria-pressed={dept === d}
              onClick={() => setDept(d)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                dept === d ? "border-ink bg-ink text-linen" : "border-ink/15 hover:border-ink/50"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <ul className="space-y-4">
          {list.map((j) => {
            const isOpen = open === j.slug;
            return (
              <li key={j.slug} className={`overflow-hidden rounded-[1.5rem] border bg-linen transition-colors ${isOpen ? "border-bronze" : "border-ink/10"}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : j.slug)}
                  className="flex w-full flex-col gap-3 p-6 text-left sm:flex-row sm:items-center sm:justify-between md:p-8"
                >
                  <span>
                    <span className="block font-display text-2xl font-medium md:text-3xl">{j.title}</span>
                    <span className="mt-2 flex flex-wrap gap-2 text-xs">
                      {[j.department, j.type, j.location, j.experience].map((t) => (
                        <span key={t} className="rounded-full bg-ivory px-3 py-1 font-medium text-stone">
                          {t}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition ${isOpen ? "rotate-45 border-bronze bg-bronze text-linen" : "border-ink/15"}`}>
                    +
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-soft ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="border-t border-ink/10 p-6 md:p-8">
                      <p className="text-stone">{j.summary}</p>
                      <div className="mt-6 grid gap-8 sm:grid-cols-2">
                        <div>
                          <h4 className="text-xs font-semibold tracking-[0.2em] text-ink uppercase">You will</h4>
                          <ul className="mt-3 space-y-2 text-sm text-stone">
                            {j.responsibilities.map((r) => (
                              <li key={r} className="flex gap-2">
                                <span className="text-bronze">—</span>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold tracking-[0.2em] text-ink uppercase">You have</h4>
                          <ul className="mt-3 space-y-2 text-sm text-stone">
                            {j.requirements.map((r) => (
                              <li key={r} className="flex gap-2">
                                <span className="text-bronze">—</span>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button type="button" onClick={() => apply(j.title)} className="btn btn-primary mt-8">
                        Apply for this role →
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div ref={formRef} className="min-w-0 scroll-mt-28">
        <div className="rounded-[2rem] bg-forest p-6 text-linen sm:p-8 lg:sticky lg:top-28">
          {sent ? (
            <div className="py-10 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-bronze text-xl">✓</span>
              <h3 className="mt-6 font-display text-3xl">Application received</h3>
              <p className="mt-3 text-sm text-linen/70">
                Thank you for applying for <strong>{role}</strong>. Our team reviews every application and replies within ten working days.
              </p>
              <button type="button" onClick={() => setSent(false)} className="btn btn-ghost mt-8">
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <h3 className="font-display text-3xl">Apply now</h3>
              <p className="text-sm text-linen/65">
                Prefer email? Send your CV and portfolio to{" "}
                <a href={`mailto:${email}`} className="underline decoration-bronze underline-offset-4">
                  {email}
                </a>
              </p>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold tracking-wider text-linen/60 uppercase">Position</span>
                <select value={role} onChange={(e) => setRole(e.target.value)} className={field}>
                  {jobs.map((j) => (
                    <option key={j.slug}>{j.title}</option>
                  ))}
                  <option>General application</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold tracking-wider text-linen/60 uppercase">Full name *</span>
                <input required autoComplete="name" className={field} />
              </label>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold tracking-wider text-linen/60 uppercase">Email *</span>
                  <input required type="email" autoComplete="email" className={field} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold tracking-wider text-linen/60 uppercase">Phone *</span>
                  <input required type="tel" autoComplete="tel" className={field} />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold tracking-wider text-linen/60 uppercase">Portfolio link</span>
                <input type="url" placeholder="https://" className={field} />
              </label>
              <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-linen/30 px-4 py-4 text-sm transition hover:border-bronze">
                <span className="truncate text-linen/75">{fileName || "Attach CV (PDF, max 5 MB)"}</span>
                <span className="shrink-0 rounded-full bg-linen/10 px-3 py-1 text-xs">Browse</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                />
              </label>
              <button type="submit" className="btn btn-bronze w-full">
                Submit application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
