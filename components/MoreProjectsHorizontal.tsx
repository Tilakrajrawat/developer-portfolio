"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MoreProjectsHorizontal({ items }: { items: any[] }) {
  const baseSpeed = 18;
  const hoverSpeed = 38;
  const dragElasticity = 0.1;
  const x = useMotionValue(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState(baseSpeed);

  const loopItems = [...items, ...items];

  const cursorX = useMotionValue(0);
  const direction = useMotionValue(1);

  function handleMouseMove(e: any) {
    const mid = window.innerWidth / 2;
    cursorX.set(e.clientX);
    if (e.clientX < mid) direction.set(-1);
    else direction.set(1);
  }

  useEffect(() => {
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      x.set(x.get() - direction.get() * speed * dt);

      const width = containerRef.current?.scrollWidth ?? 0;

      if (Math.abs(x.get()) >= width / 2) {
        x.set(0);
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [speed]);

  const onHoverStart = () => setSpeed(hoverSpeed);
  const onHoverEnd = () => setSpeed(baseSpeed);

  return (
    <div className="relative w-full overflow-hidden" onMouseMove={handleMouseMove}>
      <motion.div
        ref={containerRef}
        className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
        drag="x"
        dragElastic={dragElasticity}
        dragConstraints={{ left: -Infinity, right: Infinity }}
        style={{ x }}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
      >
        {loopItems.map((it, i) => {
          const depth = (i % items.length) / items.length;
          const scale = useTransform(x, (val) => 1 + depth * 0.03);

          return (
            <motion.div
              key={`${it.slug}-${i}`}
              className="min-w-[220px] sm:min-w-[270px] lg:min-w-[320px]"
              style={{ scale }}
              whileHover={{ scale: 1.1, rotateY: 6, rotateX: 3 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/projects/${it.slug}`} className="group block">
                <div className="glass-panel p-5 sm:p-6 relative transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute -inset-2 blur-[60px] bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-blue-400">
                        {it.title}
                      </h4>
                      <ArrowRight className="text-neutral-400 group-hover:text-blue-400" />
                    </div>

                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{it.short}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
