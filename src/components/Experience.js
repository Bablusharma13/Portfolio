"use client";

import Reveal from "./Reveal";
import Chip from "./Chip";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-line/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Chip>{`// where I've worked`}</Chip>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl tracking-tight uppercase text-ink">
            Experience that <span className="text-accent">ships</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <article className="surface surface-hover rounded-2xl p-6 sm:p-8 group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="chip font-mono text-[11px]">{job.period}</span>
                    <h3 className="mt-3 text-xl font-semibold text-ink">{job.role}</h3>
                    <p className="text-accent text-sm font-medium mt-1">{job.company}</p>
                    <p className="text-sm text-muted-2 mt-1 font-mono">{job.location}</p>
                  </div>
                </div>
                <ul className="mt-4 pt-5 border-t border-line space-y-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="text-[14px] text-muted-fg flex items-start gap-3 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
