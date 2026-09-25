export type Experience = {
  company: string;
  role: string;
  period?: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
};

export type Project = {
  name: string;
  type: string;
  description: string;
  responsibilities?: string[];
  stack: string[];
  status?: string;
  slug?: string;
  demoUrl?: string;
  repositoryUrl?: string;
};

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
