import type { ProjectChallenge } from "@/types/portfolio";

type CaseDetailGridProps = {
  items: ProjectChallenge[];
};

export function CaseDetailGrid({ items }: CaseDetailGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="rounded-lg border border-white/10 bg-white/[0.025] p-5 sm:p-6"
        >
          <span className="font-mono text-xs text-cyan-300" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
