type CaseFlowProps = {
  items: string[];
  label: string;
};

export function CaseFlow({ items, label }: CaseFlowProps) {
  return (
    <ol className="grid gap-3 md:grid-cols-5" aria-label={label}>
      {items.map((item, index) => (
        <li
          key={item}
          className="relative flex min-h-28 flex-col justify-between rounded-lg border border-white/10 bg-white/[0.025] p-4"
        >
          <span className="font-mono text-xs text-cyan-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mt-5 text-sm font-medium leading-6 text-slate-100">{item}</span>
          {index < items.length - 1 ? (
            <>
              <span className="mt-3 text-center text-cyan-300 md:hidden" aria-hidden="true">
                ↓
              </span>
              <span
                className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 bg-slate-950 px-1 text-cyan-300 md:block"
                aria-hidden="true"
              >
                →
              </span>
            </>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
