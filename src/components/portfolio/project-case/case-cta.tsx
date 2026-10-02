type CaseCtaProps = {
  demoUrl?: string;
  repositoryUrl?: string;
};

export function CaseCta({ demoUrl, repositoryUrl }: CaseCtaProps) {
  if (!demoUrl && !repositoryUrl) return null;

  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      {demoUrl ? (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
          aria-label="Abrir aplicação (abre em uma nova aba)"
        >
          Abrir aplicação <span className="ml-1.5" aria-hidden="true">↗</span>
        </a>
      ) : null}
      {repositoryUrl ? (
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 text-sm font-semibold text-white transition-colors hover:border-cyan-300/70 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
          aria-label="Abrir repositório no GitHub (abre em uma nova aba)"
        >
          GitHub <span className="ml-1.5" aria-hidden="true">↗</span>
        </a>
      ) : null}
    </div>
  );
}
