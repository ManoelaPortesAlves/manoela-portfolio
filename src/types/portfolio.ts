export type Experience = {
  company: string;
  role: string;
  period?: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
};

export type Project = {
  title: string;
  type: string;
  description: string;
  shortDescription?: string;
  responsibilities?: string[];
  stack: string[];
  status?: string;
  slug?: string;
  overview?: string;
  problem?: string[];
  solution?: string[];
  flow?: string[];
  caseResponsibilities?: string[];
  technicalChallenges?: ProjectChallenge[];
  architecture?: string[];
  decisions?: string[];
  learnings?: string;
  seoDescription?: string;
  demoUrl?: string;
  repositoryUrl?: string;
};

export type ProjectChallenge = {
  title: string;
  description: string;
};

export type ProjectCase = Project &
  Required<
    Pick<
      Project,
      | "slug"
      | "overview"
      | "problem"
      | "solution"
      | "flow"
      | "caseResponsibilities"
      | "technicalChallenges"
      | "architecture"
      | "decisions"
      | "learnings"
      | "seoDescription"
    >
  >;

export type FocusArea = {
  title: string;
  details: string;
};

export type AboutIndicator = {
  value: string;
  label: string;
};

export type AiPractice = {
  title: string;
  description: string;
};

export type TechStackGroup = {
  title: string;
  items: string[];
};

export type PortfolioData = {
  person: {
    name: string;
    role: string;
    headline: string;
    description: string;
    githubUrl: string;
    focusAreas: FocusArea[];
  };
  about: string[];
  aboutIndicators: AboutIndicator[];
  experiences: Experience[];
  projects: Project[];
  ai: {
    title: string;
    description: string;
    practices: AiPractice[];
  };
  techStack: TechStackGroup[];
  contact: {
    title: string;
    text: string;
  };
};
