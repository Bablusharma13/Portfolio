import { profile } from "@/data/resume";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 40 40" fill="none" aria-hidden>
      <defs>
        <linearGradient id="lg-footer" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#a1a1aa" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="36" height="36" rx="10" fill="#ffffff" opacity="0.08" />
      <path
        d="M11 25 L17 13 L29 13"
        stroke="url(#lg-footer)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="29" cy="13" r="2.6" fill="#fbbf24" />
      <circle cx="11" cy="25" r="2.2" fill="#ffffff" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 bg-elevated">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-muted-2">
        <div className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-mono">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink inline-flex items-center gap-1.5 transition"
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink inline-flex items-center gap-1.5 transition"
          >
            <FiLinkedin size={14} /> LinkedIn
          </a>
        </div>
        <span className="font-mono hover:text-ink transition">Built with Next.js · Tailwind</span>
      </div>
    </footer>
  );
}
