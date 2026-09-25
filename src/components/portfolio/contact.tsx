import type { PortfolioData } from "@/types/portfolio";

type ContactProps = {
  contact: PortfolioData["contact"];
  githubUrl: string;
};

export function Contact({ contact, githubUrl }: ContactProps) {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-white/[0.04] px-6 py-10 sm:px-10 lg:px-12">
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
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
