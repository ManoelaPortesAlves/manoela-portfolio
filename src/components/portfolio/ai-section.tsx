import { SectionHeading } from "@/components/portfolio/section-heading";
import type { PortfolioData } from "@/types/portfolio";

type AiSectionProps = {
  ai: PortfolioData["ai"];
};

export function AiSection({ ai }: AiSectionProps) {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16" aria-labelledby="ai-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Engenharia"
          id="ai-title"
          title={ai.title}
          description={ai.description}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ai.practices.map((practice) => (
            <article
              key={practice.title}
              className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.06] p-5"
            >
              <h3 className="text-lg font-semibold text-white">{practice.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{practice.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
