import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link"; // Using native Next.js Link
import { ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

// 1. Dynamic SEO for Blog Posts - FINAL FIX APPLIED HERE
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    // If the post is not found here, we return generic metadata,
    // and let the component below handle the final notFound() call.
    return {
        title: post ? `${post.title} — Blog` : "Blog Post",
        description: post?.excerpt || "A detailed look at the topic.",
    };
}

// 2. The Page Component
export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;

    const post = blogPosts.find((p) => p.slug === slug);

    // This is the correct place for the final, aggressive check.
    if (!post) {
        notFound();
    }

    return (
        <section className="section pt-40 min-h-screen">
            {/* Back Button: Uses native Link pointing to the root page */}
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-[var(--text-primary)] transition-colors mb-12 group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Return to Homepage</span>
            </Link>

            {/* Article Header and Content (Glass Panel) */}
            <div className="glass-panel p-8 md:p-12 mb-12">
                <header className="mb-10">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4 font-medium text-sm uppercase tracking-widest">
                        <Calendar size={16} />
                        <time>{post.date}</time>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 leading-tight text-glow">
                        {post.title}
                    </h1>
                </header>

                <article className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300 leading-loose">
                    <p className="whitespace-pre-line">
                        {post.content}
                    </p>
                </article>
            </div>
        </section>
    );
}