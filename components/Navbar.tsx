"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastY(currentY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const NavItem = ({ id, label }: any) => {
    const href = isHome ? `#${id}` : `/#${id}`;

    const click = (e: any) => {
      if (isHome) {
        e.preventDefault();
        scrollTo(id);
      }
    };

    const active = typeof window !== "undefined" && window.location.hash === `#${id}`;

    return (
      <Link
        href={href}
        onClick={click}
        className={`
          px-3 py-1 rounded-md text-xs sm:text-sm transition
          hover:bg-black/5 dark:hover:bg-white/10 
          ${active ? "text-[var(--text-primary)]" : "text-neutral-400 dark:text-neutral-300"}
        `}
      >
        {label}
      </Link>
    );
  };

  return (
    <div
      className={`
        fixed left-0 right-0 flex justify-center z-50 transition-all duration-300
        ${hidden ? "-top-20" : "top-3"}
      `}
    >
      <nav
        className="
          glass-panel
          px-3 py-1.5 sm:px-4 sm:py-2
          rounded-full
          shadow-xl backdrop-blur-xl border border-white/10
          flex items-center gap-1 sm:gap-2 relative
        "
      >
        <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-all duration-500 pointer-events-none 
          bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent blur-2xl">
        </div>

        <Link
          href="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="
            px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium 
            hover:bg-black/5 dark:hover:bg-white/10 rounded-md
          "
        >
          Tilak Raj Rawat
        </Link>

        <div className="w-px h-4 bg-white/10 mx-1"></div>

        <NavItem id="projects" label="Work" />
        <NavItem id="about" label="About" />
        <NavItem id="blog" label="Blog" />
        <NavItem id="contact" label="Contact" />

        <div
          className="pl-1 sm:pl-2 relative z-50 scale-90 sm:scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
}
