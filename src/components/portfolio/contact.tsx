import type { PortfolioData } from "@/types/portfolio";

type ContactProps = {
  contact: PortfolioData["contact"];
  githubUrl: string;
};

export function Contact({ contact, githubUrl }: ContactProps) {
  return (
    <section
      id="contato"
      className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
      aria-labelledby="contact-title"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg border border-cyan-300/20 bg-white/[0.04] px-6 py-12 sm:px-10 lg:px-12 lg:py-14">
        <div className="absolute inset-y-0 left-0 w-1 bg-cyan-300" aria-hidden="true" />
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 id="contact-title" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {contact.text}
            </p>
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Manoela Portes Alves (abre em uma nova aba)"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
          >
            GitHub <span className="ml-1.5" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
