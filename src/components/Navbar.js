"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/resume";
import { FiGithub, FiDownload } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="2" y="2" width="36" height="36" rx="10" fill="var(--ink)" opacity="0.08" />
      <path
        d="M17 12 L10 20 L17 28"
        stroke="var(--ink)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 12 L30 20 L23 28"
        stroke="var(--ink)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="21.5"
        y1="10"
        x2="18.5"
        y2="30"
        stroke="var(--accent)"
        strokeWidth="2.4"
        strokeLinecap="round"
        className="pulse-soft"
      />
    </svg>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const ratios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        const [topId] = [...ratios.entries()].sort((a, b) => b[1] - a[1])[0] ?? [];
        if (topId && ratios.get(topId) > 0) setActive(topId);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40 w-full border-b border-line bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between gap-3 py-3">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <LogoMark />
          <span className="text-[15px] tracking-tight font-semibold text-ink">
            {profile.name.split(" ")[0]}
            <span className="text-accent">.</span>
            <span className="text-muted-2 font-normal">dev</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] text-muted-fg min-w-0">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`hover:text-ink transition whitespace-nowrap ${
                active === link.id ? "text-ink" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted-fg hover:text-ink px-3 py-1.5 rounded-xl border border-line btn-outline transition font-medium"
            aria-label="GitHub profile"
          >
            <FiGithub size={14} />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="hidden lg:inline-flex items-center gap-1.5 text-[13px] text-muted-fg hover:text-ink px-3 py-1.5 rounded-xl border border-line btn-outline transition font-medium"
          >
            <FiDownload size={14} />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[13px] px-3 py-1.5 rounded-xl transition font-semibold btn-primary"
          >
            Contact
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="text-ink p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 bg-ink block transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`h-0.5 bg-ink block transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-0.5 bg-ink block transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-5 mt-2 overflow-hidden surface rounded-2xl"
          >
            <ul className="flex flex-col px-5 py-4 gap-4">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="text-muted-fg text-sm hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-sm text-muted-fg"
                >
                  <FiDownload /> Resume
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent"
                >
                  <FiGithub /> GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
