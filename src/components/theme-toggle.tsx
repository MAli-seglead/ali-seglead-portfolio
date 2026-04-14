"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/60"
      >
        Dark
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/70 transition hover:text-white dark:text-white/70"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}