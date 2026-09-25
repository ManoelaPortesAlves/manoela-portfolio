import { SectionHeading } from "@/components/portfolio/section-heading";

type AboutProps = {
  paragraphs: string[];
};

export function About({ paragraphs }: AboutProps) {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr]">
        <SectionHeading eyebrow="Perfil" id="about-title" title="Sobre mim" />
        <div className="space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
