"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [
  { id: "nova", color: "bg-cyan-400" },
  { id: "dark", color: "bg-neutral-300" },
  { id: "crimson", color: "bg-red-500" },
  { id: "oled", color: "bg-cyan-300" },
  { id: "twilight", color: "bg-orange-400" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 px-2 py-1">
      {themes.map((t) => {
        const active = theme === t.id;

        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`
              w-4 h-4 rounded-full transition-all
              ${t.color}
              ${active ? "scale-125 ring-2 ring-white/70 shadow-[0_0_12px_rgba(255,255,255,0.5)]" : "opacity-70 hover:opacity-100"}
            `}
            aria-label={`Activate ${t.id} theme`}
          />
        );
      })}
    </div>
  );
}
