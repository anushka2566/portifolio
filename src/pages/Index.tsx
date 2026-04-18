import { Navbar } from "@/components/Navbar";
import { ParticleField } from "@/components/ParticleField";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Research } from "@/components/sections/Research";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleField />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Research />
      <Contact />
    </main>
  );
};

export default Index;
