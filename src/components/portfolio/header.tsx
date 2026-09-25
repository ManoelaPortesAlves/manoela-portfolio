type HeaderProps = {
  githubUrl: string;
};

const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "IA", href: "#ia" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contato" },
];

export function Header({ githubUrl }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 px-6 py-3 sm:px-10 lg:flex-nowrap lg:px-16">
        <a
          href="#inicio"
          className="font-mono text-lg font-semibold text-white transition-colors hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
          aria-label="Ir para o início"
        >
          MP<span className="text-cyan-300">.</span>
        </a>

        <nav
          className="order-3 mt-3 w-full overflow-x-auto border-t border-white/10 pt-3 lg:order-none lg:mt-0 lg:w-auto lg:overflow-visible lg:border-0 lg:pt-0"
          aria-label="Navegação principal"
        >
          <ul className="flex min-w-max items-center gap-2 px-2 text-sm text-slate-300 sm:gap-5 sm:px-0 lg:gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-1 transition-colors hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-white/15 px-3 text-sm font-medium text-slate-100 transition-colors hover:border-cyan-300/60 hover:bg-white/5 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
          aria-label="GitHub de Manoela Portes Alves (abre em uma nova aba)"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
