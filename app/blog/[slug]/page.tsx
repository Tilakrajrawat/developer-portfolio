import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

// 1. Dynamic SEO for Blog Posts
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    return {
        title: post ? `${post.title} — Blog` : "Post Not Found",
        description: post?.excerpt || "Blog post details",
    };
}

// 2. The Page Component
export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <section className="section pt-40 min-h-screen">
            {/* Back Button: FIXES APPLIED */}
            <Link
                href="/" // Linking to Homepage Root for stability
                className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-[var(--text-primary)] transition-colors mb-12 group focus:outline-none"
            >
                <ArrowLeft size={20} className="flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                
                {/* FIX: Added whitespace-nowrap for perfect alignment and stability */}
                <span className="font-medium whitespace-nowrap">Return to Homepage</span>
            </Link>

            {/* Article Header and Content (Glass Panel) */}
            {/* Note: I'm adding a glass-panel wrapper here as that was the final design aesthetic, 
               but keep it separate if you prefer the black background look. */}
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

                {/* Article Content */}
                <article className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300 leading-loose">
                    <p className="whitespace-pre-line">
                        {post.content}
                    </p>
                </article>
            </div>
        </section>
    );
}