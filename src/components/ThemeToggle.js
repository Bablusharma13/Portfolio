"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="flex items-center rounded-xl border border-line bg-elevated p-0.5 gap-0.5"
      role="group"
      aria-label="Theme"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-pressed={!isDark}
        aria-label="Light theme"
        className={`inline-flex items-center justify-center h-7 w-8 rounded-lg transition ${
          !isDark
            ? "bg-btn-solid text-btn-solid-fg shadow-sm"
            : "text-muted-2 hover:text-ink"
        }`}
      >
        <FiSun size={14} strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={isDark}
        aria-label="Dark theme"
        className={`inline-flex items-center justify-center h-7 w-8 rounded-lg transition ${
          isDark
            ? "bg-btn-solid text-btn-solid-fg shadow-sm"
            : "text-muted-2 hover:text-ink"
        }`}
      >
        <FiMoon size={14} strokeWidth={2} />
      </button>
    </div>
  );
}
