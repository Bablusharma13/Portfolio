"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Chip from "./Chip";
import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-line/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Chip>/* tools & technologies */</Chip>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl tracking-tight uppercase text-ink">
            The <span className="text-accent">stack</span> I ship with.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="surface surface-hover rounded-2xl p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-ink">{group.category}</h3>
                  <span className="chip font-mono">{group.items.length} tools</span>
                </div>
                <ul className="mt-2 pt-5 border-t border-line space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-[12px] font-mono text-muted-fg flex items-center gap-2">
                      <span className="text-muted-2">›</span>
                      <motion.span whileHover={{ x: 2 }} className="hover:text-accent transition-colors">
                        {item}
                      </motion.span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
