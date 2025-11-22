"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <Link href={`/projects/${project.slug}`} className="group block h-full relative">
        <div
          className="glass-panel p-5 sm:p-6 lg:p-7 h-full rounded-3xl 
          transition-all duration-500 hover:-translate-y-1 
          hover:shadow-[0_8px_30px_-8px_rgba(59,130,246,0.25)]"
        >
          <div
            className="absolute -inset-1 opacity-0 group-hover:opacity-100 
            bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent 
            blur-2xl rounded-3xl transition duration-700 pointer-events-none"
          />

          <div className="relative z-10 flex flex-col h-full justify-between gap-4">
            <div>
              <div className="flex justify-between items-start">
                <h3
                  className="text-lg sm:text-xl lg:text-2xl font-bold 
                text-[var(--text-primary)] group-hover:text-blue-500"
                >
                  {project.title}
                </h3>
                <ArrowUpRight className="text-neutral-400 group-hover:text-blue-500 transition" />
              </div>

              <p
                className="mt-3 text-sm sm:text-base text-neutral-400 
              leading-relaxed"
              >
                {project.short}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((t: string) => (
                <span
                  key={t}
                  className="px-3 py-1 text-[10px] sm:text-xs uppercase 
                  border border-white/10 rounded-full bg-white/5"
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
