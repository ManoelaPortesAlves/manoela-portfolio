import { SectionHeading } from "@/components/portfolio/section-heading";
import type { TechStackGroup } from "@/types/portfolio";

type TechStackProps = {
  groups: TechStackGroup[];
};

export function TechStack({ groups }: TechStackProps) {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16" aria-labelledby="tech-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Stack" id="tech-title" title="Tecnologias" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {groups.map((group) => (
            <article key={group.title} className="rounded-lg border border-white/10 p-5">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
