import Nav from "./components/Nav";
import BrushCursor from "./components/BrushCursor";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";
import Direct from "./components/DirectHireForm";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <BrushCursor />

      <main className="pt-24">
        <Hero />

        <Section id="about" title="About">
          <About/>
        </Section>

        <Section id="projects" title="Project Showcase">
          <Projects />
        </Section>


        <Section id="resume" title="Resume">
          <Resume/> 
        </Section>

        <Section id="contact" title="Get in Touch">
          <Contact/>
          <Direct />
        </Section>

      

        <footer className="border-t border-white/10 py-10 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Kunal Biswas
        </footer>
      </main>
    </div>
  );
}
