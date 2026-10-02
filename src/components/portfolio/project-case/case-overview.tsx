import { CaseSection } from "@/components/portfolio/project-case/case-section";

type CaseOverviewProps = {
  overview: string;
};

export function CaseOverview({ overview }: CaseOverviewProps) {
  return (
    <CaseSection id="visao-geral" index="01" title="Visão geral">
      <p className="max-w-3xl text-lg leading-9 text-slate-300">{overview}</p>
    </CaseSection>
  );
}
