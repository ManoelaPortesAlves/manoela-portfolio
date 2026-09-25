export type Experience = {
  company: string;
  role: string;
  period?: string;
  description: string;
  technologies?: string[];
};

export type Project = {
  name: string;
  type: string;
  description: string;
  responsibilities?: string[];
  stack: string[];
  status?: string;
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
  };
  about: string[];
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
