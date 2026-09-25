import { SectionHeading } from "@/components/portfolio/section-heading";
import type { AboutIndicator } from "@/types/portfolio";

type AboutProps = {
  paragraphs: string[];
  indicators: AboutIndicator[];
};

export function About({ paragraphs, indicators }: AboutProps) {
  return (
    <section
      id="sobre"
      className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
        <SectionHeading eyebrow="Perfil" id="about-title" title="Sobre mim" />
        <div>
          <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="mt-10 grid border-y border-white/10 sm:grid-cols-2">
            {indicators.map((indicator) => (
              <div
                key={indicator.value}
                className="border-b border-white/10 py-5 last:border-b-0 sm:px-5 sm:first:pl-0 sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(3)]:border-b-0"
              >
                <dt className="text-sm leading-6 text-slate-400">{indicator.label}</dt>
                <dd className="mt-1 text-lg font-semibold text-white">{indicator.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
