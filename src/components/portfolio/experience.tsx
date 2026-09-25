import { SectionHeading } from "@/components/portfolio/section-heading";
import type { Experience as ExperienceType } from "@/types/portfolio";

type ExperienceProps = {
  experiences: ExperienceType[];
};

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16" aria-labelledby="experience-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Trajetória" id="experience-title" title="Experiência" />
        <div className="mt-10 grid gap-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6"
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
              <p className="mt-5 text-base leading-8 text-slate-300">
                {experience.description}
              </p>
              {experience.technologies?.length ? (
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologias">
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
