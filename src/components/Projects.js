"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import Chip from "./Chip";
import { projects } from "@/data/resume";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const featuredIndex = projects.findIndex((p) => p.featured);
  const [expanded, setExpanded] = useState(featuredIndex >= 0 ? featuredIndex : null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-line/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Chip>/ things I&apos;ve built</Chip>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl tracking-tight uppercase text-ink">
            Projects with <span className="text-accent">production</span> patterns.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => {
            const isOpen = expanded === i;
            return (
              <Reveal
                key={p.title}
                delay={i * 0.06}
                className={p.featured ? "sm:col-span-2" : undefined}
              >
                <motion.article layout className="surface surface-hover rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="chip font-mono">{p.period}</span>
                      {p.featured ? (
                        <span className="chip font-mono text-accent border-accent/25">
                          Featured
                        </span>
                      ) : null}
                    </div>
                    <button
                      onClick={() => setExpanded(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="shrink-0 text-[12px] font-mono text-muted-2 hover:text-accent transition"
                    >
                      {isOpen ? "− less" : "+ details"}
                    </button>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-ink mb-2">{p.title}</h3>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] font-mono text-accent hover:opacity-80 mb-2 -mt-1 transition"
                    >
                      {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      <FiExternalLink size={13} />
                    </a>
                  ) : null}
                  <p className="text-[14px] sm:text-[15px] text-muted-fg leading-relaxed flex-1">{p.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono rounded-full border border-line text-muted-fg px-2.5 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className={`overflow-hidden mt-5 pt-5 border-t border-line space-y-2 ${
                          p.featured ? "sm:columns-2 sm:gap-x-8" : ""
                        }`}
                      >
                        {p.highlights.map((h) => (
                          <li key={h} className="text-[12px] font-mono text-muted-fg flex gap-2 break-inside-avoid mb-2">
                            <span className="text-muted-2">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
