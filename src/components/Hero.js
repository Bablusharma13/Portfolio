"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/resume";
import { FiArrowRight, FiDownload, FiGithub } from "react-icons/fi";
import Chip from "./Chip";
import HeroVisual from "./HeroVisual";
import TechMarquee from "./TechMarquee";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const visual = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
};

export default function Hero() {
  const firstName = profile.name.split(" ")[0];

  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="aurora" />
      <div className="absolute inset-0 grid-bg fade-radial opacity-70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-5">
            <Chip>MERN stack · full-stack developer</Chip>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-[family-name:var(--font-display)] text-[44px] sm:text-6xl lg:text-[72px] leading-[1] tracking-tight uppercase text-ink"
          >
            Hi, I&apos;m {firstName}.
            <br />
            I <span className="text-accent">build</span> products,
            <br />
            and <span className="text-ink-2 italic">ship</span> them.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-fg">
            {profile.tagline}. From responsive <code className="code-inline">React</code> frontends to scalable{" "}
            <code className="code-inline">Node.js</code> APIs — production patterns, real impact.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-semibold btn-primary transition"
            >
              View my work
              <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" size={15} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-semibold btn-outline transition"
            >
              <FiDownload size={16} />
              Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-semibold btn-outline transition"
            >
              <FiGithub size={16} />
              GitHub
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-6 text-[12px] text-muted-2 font-mono flex-wrap"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full pulse-soft" />
              open to opportunities
            </span>
            <span>·</span>
            <a
              href="https://marketxy.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition"
            >
              marketxy.com
            </a>
            <span>·</span>
            <span>{profile.title}</span>
          </motion.div>
        </motion.div>

        <motion.div variants={visual} initial="hidden" animate="show" className="relative">
          <HeroVisual />
        </motion.div>
      </div>

      <TechMarquee />
    </section>
  );
}
