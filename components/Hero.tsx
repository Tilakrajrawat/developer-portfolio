"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 md:py-36 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="dark:block hidden absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[420px] sm:w-[600px] h-[300px] sm:h-[380px] bg-blue-500/18 rounded-full blur-[120px]" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md border border-black/5 dark:border-white/10 text-sm font-medium text-black dark:text-white tracking-wide"
        >
          Full-Stack Software Engineer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]"
        >
          Tilak Raj Rawat
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 max-w-xl mx-auto text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
        >
          Creating spatial interactions that feel fast, fluid, and intentional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold shadow-lg"
          >
            View Work
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
