import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const caseUrl = project.demoUrl ?? (project.slug ? `/projetos/${project.slug}` : project.repositoryUrl);
  const isExternal = caseUrl?.startsWith("http");

  return (
    <article className="group flex h-full flex-col rounded-lg border border-white/10 bg-slate-950/70 p-6 transition-colors hover:border-cyan-300/35 hover:bg-white/[0.025]">
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
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
        {project.name}
      </h3>
      <p className="mt-4 text-base leading-8 text-slate-300">{project.description}</p>
      {project.responsibilities?.length ? (
        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-100">Responsabilidades</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="rounded-md bg-white/[0.04] px-3 py-1 text-sm text-slate-300"
              >
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mt-6 border-t border-white/10 pt-6">
        <p className="text-sm font-semibold text-slate-100">Stack</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((stackItem) => (
            <li
              key={stackItem}
              className="rounded-md border border-white/10 px-3 py-1 text-sm text-slate-300"
            >
              {stackItem}
            </li>
          ))}
        </ul>
      </div>
      {caseUrl ? (
        <a
          href={caseUrl}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-7 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
          aria-label={`Ver case: ${project.name}${isExternal ? " (abre em uma nova aba)" : ""}`}
        >
          Ver case <span aria-hidden="true">{isExternal ? "↗" : "→"}</span>
        </a>
      ) : null}
    </article>
  );
}
