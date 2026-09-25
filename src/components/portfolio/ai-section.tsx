import { SectionHeading } from "@/components/portfolio/section-heading";
import type { PortfolioData } from "@/types/portfolio";

type AiSectionProps = {
  ai: PortfolioData["ai"];
};

export function AiSection({ ai }: AiSectionProps) {
  return (
    <section
      id="ia"
      className="border-y border-white/5 bg-white/[0.015] px-6 py-16 sm:px-10 lg:px-16 lg:py-20"
      aria-labelledby="ai-title"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Engenharia"
          id="ai-title"
          title={ai.title}
          description={ai.description}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {ai.practices.map((practice, index) => (
            <article
              key={practice.title}
              className={`rounded-lg border p-5 transition-colors hover:border-cyan-300/35 ${
                index < 2
                  ? "border-cyan-300/25 bg-cyan-300/[0.07] sm:p-7 lg:col-span-3"
                  : "border-white/10 bg-white/[0.025] lg:col-span-2"
              }`}
            >
              <span className="font-mono text-xs text-cyan-300" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={`mt-4 font-semibold text-white ${index < 2 ? "text-xl" : "text-lg"}`}>
                {practice.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{practice.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
