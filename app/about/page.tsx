import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — Tilak Raj Rawat",
    description: "Full-Stack Software Engineer (Web & AI)",
};

export default function AboutPage() {
    return (
        <section className="section pt-40 min-h-screen">
            <div className="max-w-4xl mx-auto">
                {/* Title Label */}
                <span className="text-sm font-medium tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-6 block">
                    Full-Stack Software Engineer (Web & AI)
                </span>

                {/* Main Heading: Uses variable for black/white switching */}
                <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-12 tracking-tight">
                    About
                </h1>

                {/* Content inside a Glass Panel for the premium look */}
                <div className="glass-panel p-8 md:p-12">
                    <div className="space-y-8 text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 font-light">
                        <p>
                            I’m a software developer who builds digital experiences where performance,
                            clarity, and design work together. I specialize in crafting high-performance
                            web applications, AI-driven tools, and elegant UI systems using Next.js,
                            MERN, and modern cloud technologies.
                        </p>
                        <p>
                            My projects range from real-time communication tools to intelligent blog
                            systems, cloud-native dashboards, accessibility analyzers, and immersive
                            portfolio experiences.
                        </p>
                        <p>
                            I enjoy building products that feel smooth, responsive, and intentional —
                            with attention to subtle motion, detail, and overall user experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}