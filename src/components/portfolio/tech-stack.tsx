import { SectionHeading } from "@/components/portfolio/section-heading";
import type { TechStackGroup } from "@/types/portfolio";

type TechStackProps = {
  groups: TechStackGroup[];
};

export function TechStack({ groups }: TechStackProps) {
  return (
    <section
      id="stack"
      className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20"
      aria-labelledby="tech-title"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Stack" id="tech-title" title="Tecnologias" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2">
          {groups.map((group, index) => (
            <article
              key={group.title}
              className={`bg-slate-950 p-6 sm:p-7 ${index === groups.length - 1 ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-cyan-300" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-1.5 text-sm text-slate-300"
                  >
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
