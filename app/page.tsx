import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import MoreProjectsHorizontal from "@/components/MoreProjectsHorizontal";
import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import { projects, blogPosts, moreProjects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="section scroll-mt-24">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-blue-600 dark:text-blue-400 block mb-4">
                Full-Stack Software Engineer (Web & AI)
              </span>

              <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6">
                About
              </h2>

              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  I’m a software developer who builds digital experiences where performance,
                  clarity, and design work together. I specialize in high-performance web apps,
                  AI-driven tools, and clean UI systems.
                </p>
                <p>
                  My projects range from real-time communication tools to intelligent
                  blogging systems and cloud-native dashboards.
                </p>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)]">
                Featured Projects
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="projects" className="section scroll-mt-24">
        <div className="content-container">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              Other Projects
            </h2>
            <span className="hidden md:block text-sm text-neutral-500">Scroll →</span>
          </div>
        </div>

        <MoreProjectsHorizontal items={moreProjects} />
      </section>

      <section id="blog" className="section scroll-mt-24">
        <div className="content-container">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--text-primary)]">
            Blog
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blogPosts.map((b) => (
              <BlogCard key={b.slug} post={b} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section scroll-mt-24 mb-20">
        <div className="content-container">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--text-primary)]">
            Contact
          </h2>

          <div className="bg-black/5 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 
            rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
