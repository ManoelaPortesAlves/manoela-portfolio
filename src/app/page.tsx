import { About } from "@/components/portfolio/about";
import { AiSection } from "@/components/portfolio/ai-section";
import { Contact } from "@/components/portfolio/contact";
import { Experience } from "@/components/portfolio/experience";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { TechStack } from "@/components/portfolio/tech-stack";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Hero person={portfolio.person} />
      <About paragraphs={portfolio.about} />
      <Experience experiences={portfolio.experiences} />
      <Projects projects={portfolio.projects} />
      <AiSection ai={portfolio.ai} />
      <TechStack groups={portfolio.techStack} />
      <Contact contact={portfolio.contact} githubUrl={portfolio.person.githubUrl} />
    </main>
  );
}
