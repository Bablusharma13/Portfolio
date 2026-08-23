"use client";

import Reveal from "./Reveal";
import Chip from "./Chip";
import { profile } from "@/data/resume";

const stats = [
  { label: "Years Experience", value: "2+", accent: false },
  { label: "Domain Records at Scale", value: "600M+", accent: true },
  { label: "Production Apps (MarketXY)", value: "3", accent: false },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-line/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Chip>/ about me</Chip>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl tracking-tight uppercase text-ink">
            Building <span className="text-accent">real products</span> at scale.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-fg text-[16px]">
            Full-stack developer focused on performance, clean UX, and systems that hold up in production.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-5 gap-5 lg:gap-8">
          <Reveal delay={0.1} className="md:col-span-3">
            <div className="surface surface-hover rounded-2xl p-6 sm:p-8 h-full">
              <p className="text-ink-2 leading-relaxed text-[16px]">
                I&apos;m a {profile.title} based in {profile.location}, focused on building responsive,
                performant interfaces and secure, scalable backend systems for multi-tenant SaaS products.
                I work across the full MERN stack — from Next.js/React frontends to Node.js/Express APIs
                backed by MongoDB, Redis and Elasticsearch.
              </p>
              <p className="mt-4 text-muted-fg leading-relaxed text-[15px]">
                I care about clean UI, real-time features, and performance — whether that&apos;s caching with
                Redis, offloading work to BullMQ job queues, or optimizing search with Elasticsearch.
                Currently building{" "}
                <a
                  href="https://marketxy.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-2 font-medium hover:text-accent transition"
                >
                  MarketXY
                </a>{" "}
                at <span className="text-ink-2 font-medium">AllHeart Web</span>.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2 grid grid-cols-1 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="surface surface-hover rounded-2xl p-6">
                <div
                  className={`font-[family-name:var(--font-display)] text-4xl sm:text-5xl tracking-tight ${
                    s.accent ? "text-accent" : "text-ink"
                  }`}
                >
                  {s.value}
                </div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-muted-2 font-mono">
                  {s.label}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
