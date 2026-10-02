import Link from "next/link";

type CaseNavigationProps = {
  placement?: "top" | "bottom";
};

export function CaseNavigation({ placement = "top" }: CaseNavigationProps) {
  const isBottom = placement === "bottom";

  return (
    <nav aria-label={isBottom ? "Retorno aos projetos" : "Navegação do case"}>
      <Link
        href="/#projetos"
        className={`inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 ${
          isBottom
            ? "border border-cyan-300/30 bg-cyan-300/10 px-5 text-cyan-100 hover:border-cyan-300/60 hover:bg-cyan-300/15"
            : "text-slate-300 hover:text-cyan-200"
        }`}
      >
        <span aria-hidden="true">←</span> Voltar para projetos
      </Link>
    </nav>
  );
}
