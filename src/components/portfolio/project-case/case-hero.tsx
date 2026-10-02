import { CaseCta } from "@/components/portfolio/project-case/case-cta";
import { CaseNavigation } from "@/components/portfolio/project-case/case-navigation";
import type { ProjectCase } from "@/types/portfolio";

type CaseHeroProps = {
  project: ProjectCase;
};

export function CaseHero({ project }: CaseHeroProps) {
  return (
    <header className="border-b border-white/10 px-6 py-10 sm:px-10 sm:py-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <CaseNavigation />
        <div className="mt-14 max-w-4xl sm:mt-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              {project.type}
            </span>
            {project.status ? (
              <span className="rounded-md border border-emerald-300/20 px-3 py-1 text-xs font-medium text-emerald-200">
                {project.status}
              </span>
            ) : null}
          </div>
          <h1
            id="case-title"
            className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {project.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            {project.shortDescription ?? project.description}
          </p>
          <CaseCta
            demoUrl={project.demoUrl}
            repositoryUrl={project.repositoryUrl}
          />
        </div>
      </div>
    </header>
  );
}
