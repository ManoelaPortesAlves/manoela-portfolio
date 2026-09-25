import { SectionHeading } from "@/components/portfolio/section-heading";
import type { Experience as ExperienceType } from "@/types/portfolio";

type ExperienceProps = {
  experiences: ExperienceType[];
};

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section
      id="experiencia"
      className="border-y border-white/5 bg-white/[0.015] px-6 py-16 sm:px-10 lg:px-16 lg:py-20"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Trajetória" id="experience-title" title="Experiência" />
        <div className="mt-10 grid gap-5">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className={`rounded-lg border p-6 sm:p-7 ${
                index === 0
                  ? "border-cyan-300/25 bg-cyan-300/[0.04]"
                  : "border-white/10 bg-white/[0.025]"
              }`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                  <p className="mt-1 text-sm font-medium text-cyan-300">
                    {experience.company}
                  </p>
                </div>
                {experience.period ? (
                  <p className="text-sm text-slate-400">{experience.period}</p>
                ) : null}
              </div>
              <p className="mt-5 max-w-5xl text-base leading-7 text-slate-300">
                {experience.description}
              </p>
              {experience.highlights?.length ? (
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
                    Principais atuações
                  </p>
                  <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-200">
                        <span className="text-cyan-300" aria-hidden="true">+</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {experience.technologies?.length ? (
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Tecnologias utilizadas em ${experience.company}`}>
                  {experience.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
