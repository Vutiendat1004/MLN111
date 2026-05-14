import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Section2, Section3, Section4, Section5 } from "./components/Sections2to5";
import { Section6, Section7, Section8, Section9, Footer } from "./components/Sections6to9";
import { Reveal } from "./components/Effects";

export default function App() {
  const sections = [HeroSection, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Section9, Footer];

  return (
    <div style={{ fontFamily: "'Be Vietnam Pro', 'Segoe UI', sans-serif", background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />
      {sections.map((Section, index) => (
        <Reveal key={Section.name} delay={Math.min(index * 0.04, 0.32)}>
          <Section />
        </Reveal>
      ))}
    </div>
  );
}
