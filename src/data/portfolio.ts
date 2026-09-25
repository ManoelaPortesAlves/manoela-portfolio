import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  person: {
    name: "Manoela Portes Alves",
    role: "Senior Front-end Developer & Tech Lead",
    headline:
      "React, Next.js, TypeScript e IA aplicada ao desenvolvimento de produtos digitais.",
    description:
      "Desenvolvo aplicações modernas, escaláveis e performáticas, conectando arquitetura front-end, experiência do usuário e inteligência artificial. Atuo da definição de padrões técnicos à entrega em produção, com foco em código sustentável, acessibilidade e qualidade.",
    githubUrl: "https://github.com/ManoelaPortesAlves",
  },
  about: [
    "Sou desenvolvedora Front-end com mais de 5 anos de experiência na construção e evolução de aplicações web. Minha atuação combina desenvolvimento, arquitetura e liderança técnica, principalmente com React, Next.js e TypeScript.",
    "Além da implementação de interfaces, trabalho com definição de padrões, Design Systems, integração com APIs, autenticação, code review, CI/CD e publicação de aplicações em cloud.",
    "Nos últimos projetos, também venho incorporando IA ao processo de desenvolvimento, utilizando agentes, MCP e automações para melhorar produtividade, qualidade e padronização das entregas.",
  ],
  experiences: [
    {
      company: "Stefanini Group - alocação COPEL",
      role: "Senior Front-end Developer / Tech Lead",
      period: "2026 - atual",
      description:
        "Atuação na arquitetura e evolução de aplicações front-end corporativas utilizando React, Next.js e TypeScript. Responsável também por definição de padrões técnicos, Design Systems, code review, integração com APIs e autenticação, além de iniciativas relacionadas a CI/CD, cloud e adoção de IA no fluxo de desenvolvimento.",
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
      name: "Backoffice corporativo de contratos",
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
      name: "Portal Front-end",
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
      name: "Currículo Match",
      type: "Projeto pessoal",
      description:
        "Aplicação que utiliza inteligência artificial para analisar currículos e identificar o nível de aderência de candidatos a uma determinada vaga.",
      stack: ["React", "TypeScript", "Electron", "IA"],
      status: "Em evolução",
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
