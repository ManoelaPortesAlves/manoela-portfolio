import type { ReactNode } from "react";

type CaseSectionProps = {
  children: ReactNode;
  id: string;
  index: string;
  title: string;
};

export function CaseSection({ children, id, index, title }: CaseSectionProps) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[0.38fr_1fr] lg:gap-16 lg:py-16"
      aria-labelledby={headingId}
    >
      <div>
        <p className="font-mono text-xs font-medium text-cyan-300">{index}</p>
        <h2
          id={headingId}
          className="mt-3 text-3xl font-semibold tracking-tight text-white"
        >
          {title}
        </h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
