"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogCard({ post }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full relative">
        <div
          className="glass-panel p-5 sm:p-6 lg:p-7 rounded-3xl 
          transition-all hover:-translate-y-1 
          hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] relative"
        >
          <div
            className="absolute -inset-1 blur-2xl bg-gradient-to-tr 
            from-blue-500/10 via-purple-500/5 to-transparent 
            opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl pointer-events-none"
          />

          <div className="relative z-10">
            <div className="flex justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-neutral-400 border-l-2 border-blue-400/50 pl-3">
                {post.date}
              </span>
              <ArrowRight className="text-neutral-400 group-hover:text-blue-500 transition" />
            </div>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight text-[var(--text-primary)] group-hover:text-blue-500">
              {post.title}
            </h3>

            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
