import { About } from "@/components/portfolio/about";
import { AiSection } from "@/components/portfolio/ai-section";
import { Contact } from "@/components/portfolio/contact";
import { Experience } from "@/components/portfolio/experience";
import { Footer } from "@/components/portfolio/footer";
import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { TechStack } from "@/components/portfolio/tech-stack";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-cyan-300 px-4 py-2 font-semibold text-slate-950 transition-transform focus:translate-y-0"
      >
        Ir para o conteúdo
      </a>
      <Header githubUrl={portfolio.person.githubUrl} />
      <main id="conteudo" tabIndex={-1}>
        <Hero person={portfolio.person} />
        <About paragraphs={portfolio.about} indicators={portfolio.aboutIndicators} />
        <Experience experiences={portfolio.experiences} />
        <Projects projects={portfolio.projects} />
        <AiSection ai={portfolio.ai} />
        <TechStack groups={portfolio.techStack} />
        <Contact contact={portfolio.contact} githubUrl={portfolio.person.githubUrl} />
      </main>
      <Footer />
    </div>
  );
}
