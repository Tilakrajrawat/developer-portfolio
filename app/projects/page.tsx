import ProjectCard from "@/components/ProjectCard";
import MoreProjectsHorizontal from "@/components/MoreProjectsHorizontal";
import { projects, moreProjects } from "@/lib/data";

export default function ProjectsIndex() {
  return (
    <section className="section">
      <div className="content-container">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--text-primary)]">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">More Projects</h2>
      </div>

      <MoreProjectsHorizontal items={moreProjects} />
    </section>
  );
}
