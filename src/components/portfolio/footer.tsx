export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold text-white">Manoela Portes Alves</p>
          <p className="mt-1 text-slate-400">Senior Front-end Developer &amp; Tech Lead</p>
        </div>
        <div className="text-slate-400 sm:text-right">
          <p>Designed &amp; built with Next.js, TypeScript and Vercel.</p>
          <p className="mt-1">© {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
