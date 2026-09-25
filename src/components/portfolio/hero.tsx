import type { PortfolioData } from "@/types/portfolio";

type HeroProps = {
  person: PortfolioData["person"];
};

export function Hero({ person }: HeroProps) {
  const capabilities = [
    { label: "Architecture", widthClassName: "w-[88%]" },
    { label: "Design Systems", widthClassName: "w-[79%]" },
    { label: "Performance", widthClassName: "w-[70%]" },
    { label: "AI Workflow", widthClassName: "w-[61%]" },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">
            {person.role}
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
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
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-cyan-300/70 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-4 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
          <div className="relative rounded-lg border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-xs text-slate-500">portfolio.system</span>
            </div>
            <div className="grid gap-4">
              {capabilities.map((item, index) => (
                  <div
                    key={item.label}
                    className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-sm text-slate-200">{item.label}</span>
                      <span className="text-xs text-cyan-300">0{index + 1}</span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-slate-800">
                      <div
                        className={`h-2 rounded-full bg-cyan-300 ${item.widthClassName}`}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
