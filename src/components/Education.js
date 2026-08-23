"use client";

import Reveal from "./Reveal";
import Chip from "./Chip";
import { education } from "@/data/resume";

export default function Education() {
  const primary = education.find((e) => e.primary) ?? education[0];
  const secondary = education.filter((e) => e !== primary);

  return (
    <section id="education" className="relative py-24 sm:py-32 border-t border-line/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Chip>/ academic background</Chip>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl tracking-tight uppercase text-ink">
            Education &amp; <span className="text-accent">foundation</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-14 max-w-2xl">
          <div className="surface surface-hover rounded-2xl px-6 py-6 sm:p-8">
            <span className="chip font-mono">Primary degree</span>
            <span className="chip font-mono ml-2">{primary.period}</span>
            <h3 className="mt-4 text-xl font-semibold text-ink">{primary.school}</h3>
            <p className="text-[15px] text-muted-fg mt-2 font-mono">{primary.degree}</p>
          </div>
        </Reveal>

        {secondary.length > 0 ? (
          <Reveal delay={0.12} className="mt-5 max-w-2xl">
            <ul className="rounded-2xl border border-line/80 divide-y divide-line/80">
              {secondary.map((e) => (
                <li
                  key={e.school}
                  className="px-5 py-4 flex flex-wrap items-baseline justify-between gap-2 text-[13px]"
                >
                  <div>
                    <span className="text-ink-2">{e.degree}</span>
                    <span className="text-faint mx-2">·</span>
                    <span className="text-muted-2">{e.school}</span>
                  </div>
                  <span className="font-mono text-faint">{e.period}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
