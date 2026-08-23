"use client";

import Reveal from "./Reveal";
import Chip from "./Chip";
import { profile } from "@/data/resume";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin, FiArrowRight } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-elevated-strong p-10 sm:p-16 text-center">
            <svg
              className="absolute -top-20 -right-20 w-80 h-80 opacity-40 pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
              aria-hidden
            >
              <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.18)" strokeDasharray="2 6" />
              <circle cx="100" cy="100" r="60" stroke="rgba(255,255,255,0.14)" strokeDasharray="2 6" />
              <circle cx="100" cy="100" r="40" stroke="rgba(251,191,36,0.35)" strokeDasharray="2 6" />
            </svg>

            <div className="relative">
              <Chip>$ let&apos;s connect</Chip>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl tracking-tight uppercase text-ink">
                Build something
                <br />
                <span className="text-accent">together</span>.
              </h2>
              <p className="mt-5 max-w-xl mx-auto text-ink-2 text-[16px]">
                Open to new opportunities and collaborations. Reach out and I&apos;ll get back to you as
                soon as I can.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-semibold btn-primary transition"
                >
                  <FiMail size={16} />
                  Say hello
                  <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" size={15} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-semibold btn-outline transition"
                >
                  <FiLinkedin size={16} />
                  LinkedIn
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[13px] text-muted-2 font-mono">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-ink transition">
                  <FiMail /> {profile.email}
                </a>
                <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-ink transition">
                  <FiPhone /> {profile.phone}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-ink transition"
                >
                  <FiGithub /> GitHub
                </a>
                <span className="flex items-center gap-2">
                  <FiMapPin /> {profile.location}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
