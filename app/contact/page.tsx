import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import MoreProjectsHorizontal from '@/components/MoreProjectsHorizontal'
import BlogCard from '@/components/BlogCard'
import ContactForm from '@/components/ContactForm'
import { projects, blogPosts, moreProjects } from '@/lib/data'

export default function Home() {
    return (
        <>
            <Hero />

            {/* Added 'scroll-mt-28' so the Navbar doesn't cover the title */}
            <section id="about" className="section scroll-mt-28">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="col-span-1">
                        <h2 className="text-4xl font-semibold text-white">About</h2>
                        <p className="mt-4 text-neutral-400 leading-relaxed">
                            I build digital experiences that marry form and function. I focus on performance, motion and clarity.
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-semibold text-white mb-8">Featured Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((p) => (
                                <ProjectCard key={p.slug} project={p} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="section scroll-mt-28">
                <h2 className="text-3xl font-semibold mb-8 text-white">More Projects</h2>
                <MoreProjectsHorizontal items={moreProjects} />
            </section>

            <section id="blog" className="section scroll-mt-28">
                <h2 className="text-3xl font-semibold mb-8 text-white">Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts.map((b) => (
                        <BlogCard key={b.slug} post={b} />
                    ))}
                </div>
            </section>

            <section id="contact" className="section scroll-mt-28 mb-20">
                <h2 className="text-3xl font-semibold mb-8 text-white">Contact</h2>
                <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-8">
                    <ContactForm />
                </div>
            </section>
        </>
    )
}