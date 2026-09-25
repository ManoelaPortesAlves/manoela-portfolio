import type { PortfolioData } from "@/types/portfolio";

type HeroProps = {
  person: PortfolioData["person"];
};

export function Hero({ person }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-white/5 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center xl:gap-20">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">
            {person.role}
          </p>
          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {person.name}
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-200">
            {person.headline}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            {person.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              Ver projetos
            </a>
            <a
              href={person.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Manoela Portes Alves (abre em uma nova aba)"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-cyan-300/70 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              GitHub <span className="ml-1.5" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-4 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
          <div className="relative rounded-lg border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-xs text-slate-400">portfolio.system</span>
            </div>
            <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Focus Areas
            </h2>
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {person.focusAreas.map((item, index) => (
                <li key={item.title} className="grid grid-cols-[2.25rem_1fr] gap-3 py-4 sm:gap-4">
                  <span className="font-mono text-xs text-cyan-300" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-mono text-sm font-medium text-slate-100">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-400">{item.details}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
