import { projects, moreProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

// Helper to find project in EITHER list
const getProject = (slug: string) => {
    const allProjects = [...projects, ...moreProjects];
    return allProjects.find((p) => p.slug === slug);
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);

    return {
        title: project ? `${project.title} — Tilak Raj` : "Project Not Found",
    };
}

// 👇 This line is what was missing or broken
export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;

    const project = getProject(slug);

    if (!project) {
        notFound();
    }

    // Safely access optional properties
    const tags = (project as any).tags || [];
    const longDesc = (project as any).longDesc || project.short;
    const githubUrl = (project as any).githubUrl;
    const demoUrl = (project as any).demoUrl;

    return (
        <section className="section pt-40 min-h-screen">
            {/* Back Button */}
            <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-[var(--text-primary)] transition-colors mb-12 group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Projects</span>
            </Link>

            {/* Header with Glass Effect */}
            <div className="glass-panel p-8 md:p-12 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div className="relative z-10">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 text-glow text-[var(--text-primary)]">
                        {project.title}
                    </h1>

                    {/* Only show tags if they exist */}
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-3 mb-8">
                            {tags.map((tag: string) => (
                                <span key={tag} className="px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 text-sm backdrop-blur-md text-[var(--text-primary)]">
                  {tag}
                </span>
                            ))}
                        </div>
                    )}

                    {/* ACTION BUTTONS */}
                    <div className="flex flex-wrap gap-4 mt-10">

                        {/* CONDITIONAL RENDERING: Only show if demoUrl exists */}
                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-transform"
                            >
                                <ExternalLink size={20} />
                                Visit Site
                            </a>
                        )}

                        {/* CONDITIONAL RENDERING: Only show if githubUrl exists */}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-8 py-4 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 backdrop-blur-md hover:bg-black/10 dark:hover:bg-white/20 transition-colors text-[var(--text-primary)]"
                            >
                                <Github size={20} />
                                View Code
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold mb-6 opacity-80 text-[var(--text-primary)]">Overview</h3>
                <p className="text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 font-light whitespace-pre-line">
                    {longDesc}
                </p>
            </div>
        </section>
    );
}