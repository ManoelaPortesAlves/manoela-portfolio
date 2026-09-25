import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionHeading } from "@/components/portfolio/section-heading";
import type { Project } from "@/types/portfolio";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projetos"
      className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Portfólio" id="projects-title" title="Projetos & Cases" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
