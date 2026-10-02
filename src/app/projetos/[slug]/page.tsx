import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/portfolio/footer";
import { CaseDetailGrid } from "@/components/portfolio/project-case/case-detail-grid";
import { CaseFlow } from "@/components/portfolio/project-case/case-flow";
import { CaseHero } from "@/components/portfolio/project-case/case-hero";
import { CaseNavigation } from "@/components/portfolio/project-case/case-navigation";
import { CaseOverview } from "@/components/portfolio/project-case/case-overview";
import { CaseSection } from "@/components/portfolio/project-case/case-section";
import { CaseStack } from "@/components/portfolio/project-case/case-stack";
import { getProjectBySlug, getProjectSlugs } from "@/data/portfolio";

type ProjectCasePageProps = PageProps<"/projetos/[slug]">;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectCasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return {
    title: `${project.title} | Manoela Portes Alves`,
    description: project.seoDescription,
  };
}

export default async function ProjectCasePage({ params }: ProjectCasePageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main>
        <article aria-labelledby="case-title">
          <CaseHero project={project} />
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <CaseOverview overview={project.overview} />
            <CaseStack stack={project.stack} />

            <CaseSection id="problema" index="03" title="Problema">
              <div className="max-w-3xl space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
                {project.problem.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="solucao" index="04" title="Solução">
              <div className="max-w-3xl space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
                {project.solution.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="fluxo" index="05" title="Fluxo">
              <CaseFlow items={project.flow} label="Fluxo de análise de currículos" />
            </CaseSection>

            <CaseSection id="minha-atuacao" index="06" title="Minha atuação">
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {project.caseResponsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3 text-base leading-7 text-slate-200">
                    <span className="text-cyan-300" aria-hidden="true">+</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection id="desafios" index="07" title="Desafios técnicos">
              <CaseDetailGrid items={project.technicalChallenges} />
            </CaseSection>

            <CaseSection id="arquitetura" index="08" title="Arquitetura">
              <CaseFlow items={project.architecture} label="Arquitetura conceitual da aplicação" />
            </CaseSection>

            <CaseSection
              id="decisoes"
              index="09"
              title="Decisões de produto e engenharia"
            >
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.decisions.map((decision, index) => (
                  <li
                    key={decision}
                    className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.025] p-5 text-sm leading-7 text-slate-200"
                  >
                    <span className="font-mono text-xs text-cyan-300" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {decision}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection id="aprendizados" index="10" title="Aprendizados">
              <p className="max-w-3xl text-lg leading-9 text-slate-300">
                {project.learnings}
              </p>
            </CaseSection>

            <div className="border-t border-white/10 py-14 sm:py-16">
              <CaseNavigation placement="bottom" />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
