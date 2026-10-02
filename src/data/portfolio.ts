import type { PortfolioData, Project, ProjectCase } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  person: {
    name: "Manoela Portes Alves",
    role: "Senior Front-end Developer & Tech Lead",
    headline:
      "React, Next.js, TypeScript e IA aplicada ao desenvolvimento de produtos digitais.",
    description:
      "Desenvolvo aplicações modernas, escaláveis e performáticas, conectando arquitetura front-end, experiência do usuário e inteligência artificial. Atuo da definição de padrões técnicos à entrega em produção, com foco em código sustentável, acessibilidade e qualidade.",
    githubUrl: "https://github.com/ManoelaPortesAlves",
    focusAreas: [
      {
        title: "Front-end Architecture",
        details: "React • Next.js • TypeScript",
      },
      {
        title: "Design Systems",
        details: "Components • Standards • UX",
      },
      {
        title: "Engineering Quality",
        details: "Performance • Testing • Accessibility",
      },
      {
        title: "AI Engineering",
        details: "Agents • MCP • Automation",
      },
    ],
  },
  about: [
    "Sou desenvolvedora Front-end com mais de 5 anos de experiência na construção e evolução de aplicações web. Minha atuação combina desenvolvimento, arquitetura e liderança técnica, principalmente com React, Next.js e TypeScript.",
    "Além da implementação de interfaces, trabalho com definição de padrões, Design Systems, integração com APIs, autenticação, code review, CI/CD e publicação de aplicações em cloud.",
    "Nos últimos projetos, também venho incorporando IA ao processo de desenvolvimento, utilizando agentes, MCP e automações para melhorar produtividade, qualidade e padronização das entregas.",
  ],
  aboutIndicators: [
    { value: "5+ anos", label: "Experiência em Front-end" },
    { value: "React / Next.js", label: "Stack principal" },
    { value: "Tech Lead", label: "Arquitetura e padrões" },
    { value: "IA", label: "Agents • MCP • Automação" },
  ],
  experiences: [
    {
      company: "Stefanini Group - alocação COPEL",
      role: "Senior Front-end Developer / Tech Lead",
      period: "2026 - atual",
      description:
        "Atuação na arquitetura e evolução de aplicações front-end corporativas utilizando React, Next.js e TypeScript. Responsável também por definição de padrões técnicos, Design Systems, code review, integração com APIs e autenticação, além de iniciativas relacionadas a CI/CD, cloud e adoção de IA no fluxo de desenvolvimento.",
      highlights: [
        "Arquitetura front-end",
        "Definição de padrões técnicos",
        "Design Systems",
        "Code review",
        "Integração com APIs",
        "Autenticação",
        "CI/CD e cloud",
        "IA aplicada ao desenvolvimento",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "GitLab CI/CD",
        "Docker",
        "GCP",
        "Cloud Run",
        "Terraform",
        "AI Agents",
        "MCP",
      ],
    },
    {
      company: "Banco Bari",
      role: "Front-end Developer",
      description:
        "Desenvolvimento e evolução de produtos digitais do setor financeiro com React, Next.js e TypeScript, trabalhando com SSR, SSG, componentes reutilizáveis, integrações REST e GraphQL, performance, segurança e acessibilidade.",
    },
    {
      company: "Aprende Brasil Educação",
      role: "Front-end Developer",
      description:
        "Desenvolvimento de produtos web utilizando React, Vue e Angular, com integração de APIs, autenticação, acessibilidade, SEO e otimizações de performance.",
    },
  ],
  projects: [
    {
      title: "Backoffice corporativo de contratos",
      type: "Case profissional",
      description:
        "Aplicação corporativa para gerenciamento de contratos e processos de parcelamento, construída com arquitetura moderna em Next.js e integração com diferentes serviços e mecanismos de autenticação.",
      responsibilities: [
        "Arquitetura front-end",
        "Integração com APIs",
        "Autenticação",
        "Componentização",
        "Tratamento de erros",
        "Code review",
        "CI/CD",
        "Cloud",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "NextAuth",
        "Keycloak",
        "Tailwind",
        "GCP",
        "Cloud Run",
        "GitLab CI/CD",
      ],
    },
    {
      title: "Portal Front-end",
      type: "Case profissional",
      description:
        "Portal interno criado para centralizar padrões, tecnologias, documentação, projetos, templates, comunicados e conteúdos utilizados pelo time de desenvolvimento front-end.",
      responsibilities: [
        "Arquitetura",
        "Autenticação",
        "Gestão de conteúdo",
        "Componentização",
        "Cloudflare",
        "Banco de dados",
        "Experiência do usuário",
      ],
      stack: ["React", "TypeScript", "Cloudflare Workers", "D1", "R2", "Markdown"],
    },
    {
      title: "Currículo Match",
      type: "Projeto pessoal",
      description:
        "Aplicação que utiliza inteligência artificial para analisar currículos e identificar o nível de aderência de candidatos a uma determinada vaga.",
      stack: ["React", "TypeScript", "Electron", "IA"],
      status: "Em evolução",
      slug: "curriculo-match",
      overview:
        "O Currículo Match foi criado para auxiliar processos de recrutamento que envolvem análise de grandes volumes de currículos. A proposta é organizar as informações dos candidatos e facilitar a identificação dos perfis mais aderentes aos requisitos de uma vaga.",
      problem: [
        "Em processos seletivos com muitos candidatos, a análise manual de currículos pode consumir bastante tempo e dificultar a comparação consistente entre diferentes perfis.",
        "O projeto busca transformar esse processo em um fluxo mais estruturado, permitindo comparar competências, experiências e requisitos de uma vaga de forma mais organizada.",
      ],
      solution: [
        "A aplicação permite importar currículos, extrair informações relevantes dos candidatos e utilizar inteligência artificial para apoiar a análise de aderência em relação às competências definidas para uma vaga.",
        "O objetivo não é substituir a decisão humana, mas organizar informações e fornecer apoio para a triagem.",
      ],
      flow: [
        "Upload de currículos",
        "Extração das informações",
        "Análise",
        "Comparação com requisitos da vaga",
        "Apresentação dos candidatos",
      ],
      caseResponsibilities: [
        "Definição do produto",
        "Arquitetura da aplicação",
        "Desenvolvimento front-end",
        "Organização do fluxo de análise",
        "Experiência do usuário",
        "Integração de IA ao processo",
        "Evolução da aplicação desktop",
      ],
      technicalChallenges: [
        {
          title: "Extração de dados",
          description:
            "Organizar informações provenientes de currículos com formatos e estruturas diferentes.",
        },
        {
          title: "Classificação",
          description:
            "Criar uma forma consistente de comparar os dados dos candidatos com os requisitos da vaga.",
        },
        {
          title: "Experiência do usuário",
          description:
            "Permitir que o processo de análise seja compreensível mesmo quando muitos candidatos são processados.",
        },
        {
          title: "IA como apoio",
          description:
            "Utilizar inteligência artificial como apoio à análise sem apresentar sua resposta como uma decisão definitiva.",
        },
      ],
      architecture: [
        "Interface",
        "Importação de currículos",
        "Processamento",
        "Análise",
        "Resultado",
      ],
      decisions: [
        "Separar análise automatizada da decisão humana",
        "Manter o fluxo de triagem compreensível para o usuário",
        "Organizar responsabilidades da aplicação em etapas",
        "Permitir evolução gradual das regras de análise",
      ],
      learnings:
        "O projeto reforça a importância de tratar inteligência artificial como parte de um fluxo de produto, e não apenas como uma funcionalidade isolada. Além da análise técnica, a experiência precisa deixar claro ao usuário como as informações estão sendo utilizadas e permitir que a decisão final continue sob controle humano.",
      seoDescription:
        "Case técnico do Currículo Match, projeto de Manoela Portes Alves que utiliza inteligência artificial como apoio à análise e organização de currículos.",
    },
  ],
  ai: {
    title: "IA aplicada ao desenvolvimento",
    description:
      "Utilizo inteligência artificial como ferramenta de engenharia, não apenas para geração de código. Tenho trabalhado com agentes especializados, MCP, integração com ferramentas de design, automação de validações e criação de fluxos que auxiliam desenvolvimento, revisão e documentação.",
    practices: [
      {
        title: "AI Agents",
        description: "Agentes especializados por responsabilidade.",
      },
      {
        title: "MCP",
        description: "Integração entre ferramentas, contexto e desenvolvimento.",
      },
      {
        title: "Figma + IA",
        description: "Apoio na transformação de design em interfaces.",
      },
      {
        title: "Code Review",
        description: "IA auxiliando análise, padrões e qualidade.",
      },
      {
        title: "Automação",
        description: "Redução de tarefas repetitivas no ciclo de desenvolvimento.",
      },
    ],
  },
  techStack: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Arquitetura",
      items: [
        "Server Components",
        "SSR",
        "SSG",
        "REST",
        "GraphQL",
        "Design Systems",
        "Autenticação",
      ],
    },
    {
      title: "Qualidade",
      items: ["ESLint", "Cypress", "Jest", "Vitest", "Acessibilidade", "Performance"],
    },
    {
      title: "DevOps / Cloud",
      items: ["Git", "GitLab CI/CD", "Docker", "Terraform", "Google Cloud", "Cloud Run", "Cloudflare"],
    },
    {
      title: "IA",
      items: ["AI Agents", "MCP", "LLMs", "Automação"],
    },
  ],
  contact: {
    title: "Vamos construir algo juntos?",
    text: "Estou sempre interessada em projetos desafiadores, produtos digitais e oportunidades onde tecnologia, experiência do usuário e inovação caminham juntas.",
  },
};

function isProjectCase(project: Project): project is ProjectCase {
  return Boolean(
    project.slug &&
      project.overview &&
      project.problem?.length &&
      project.solution?.length &&
      project.flow?.length &&
      project.caseResponsibilities?.length &&
      project.technicalChallenges?.length &&
      project.architecture?.length &&
      project.decisions?.length &&
      project.learnings &&
      project.seoDescription,
  );
}

export function getProjectBySlug(slug: string) {
  return portfolio.projects.find(
    (project): project is ProjectCase =>
      isProjectCase(project) && project.slug === slug,
  );
}

export function getProjectSlugs() {
  return portfolio.projects.filter(isProjectCase).map((project) => project.slug);
}
