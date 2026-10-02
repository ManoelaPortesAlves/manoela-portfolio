import { CaseSection } from "@/components/portfolio/project-case/case-section";

type CaseStackProps = {
  stack: string[];
};

export function CaseStack({ stack }: CaseStackProps) {
  return (
    <CaseSection id="stack-do-projeto" index="02" title="Stack">
      <ul className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas no projeto">
        {stack.map((item) => (
          <li
            key={item}
            className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"
          >
            {item}
          </li>
        ))}
      </ul>
    </CaseSection>
  );
}
