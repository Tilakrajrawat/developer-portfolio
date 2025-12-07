"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full"
    >
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <div
          className="
            glass-panel
            rounded-2xl
            p-6
            
            min-h-[340px]
            max-h-[380px]
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[0_10px_40px_-12px_rgba(59,130,246,0.25)]
          "
        >
          <div className="relative flex flex-col h-full justify-between gap-4">
            {/* Top */}
            <div>
              <div className="flex items-start justify-between gap-3">
                <h3
                  className="
                    text-xl lg:text-2xl font-semibold
                    leading-tight tracking-tight
                    break-normal hyphens-none
                    text-[var(--text-primary)]
                    group-hover:text-blue-400
                    transition-colors
                  "
                >
                  {project.title}
                </h3>
                <ArrowUpRight className="text-neutral-500 group-hover:text-blue-400 transition" />
              </div>

              <p className="mt-3 text-sm text-neutral-400 leading-relaxed max-w-[90%]">
                {project.short}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t: string) => (
                <span
                  key={t}
                  className="
                    text-[11px] uppercase tracking-wide
                    px-3 py-1
                    rounded-full
                    border border-white/10
                    bg-white/5
                    text-white/60
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
