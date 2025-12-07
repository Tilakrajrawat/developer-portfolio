"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MoreProjectsHorizontal({ items }: { items: any[] }) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState(14);

  const loopItems = [...items, ...items];

  useEffect(() => {
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      x.set(x.get() - speed * dt);

      const width = containerRef.current?.scrollWidth ?? 0;
      if (Math.abs(x.get()) >= width / 2) x.set(0);

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [speed]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex gap-6 w-max"
        style={{ x }}
        onHoverStart={() => setSpeed(28)}
        onHoverEnd={() => setSpeed(14)}
      >
        {loopItems.map((it, i) => (
          <motion.div
            key={`${it.slug}-${i}`}
            className="min-w-[260px] md:min-w-[300px]"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.25 }}
          >
            <Link href={`/projects/${it.slug}`} className="group block">
              <div className="glass-panel p-5 rounded-xl transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-blue-400 transition">
                    {it.title}
                  </h4>
                  <ArrowRight className="text-neutral-500 group-hover:text-blue-400 transition" />
                </div>

                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  {it.short}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
