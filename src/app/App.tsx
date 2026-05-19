import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Section2, Section3, Section4, Section5 } from "./components/Sections2to5";
import { Section6, Section7, Section8, Section9, Footer } from "./components/Sections6to9";
import { GameConceptSection } from "./components/GameModuleSections";
import { Reveal } from "./components/Effects";

export default function App() {
  const sections = [HeroSection, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Section9, GameConceptSection, Footer];
  const [activeHref, setActiveHref] = useState<string>("#van-de");

  useEffect(() => {
    const trackedSections = ["#van-de", "#triet-hoc", "#niem-tin", "#nhan-thuc", "#vi-du", "#thuc-tien", "#checklist", "#truth-hunter"];
    const observers: IntersectionObserver[] = [];

    trackedSections.forEach((href) => {
      const element = document.querySelector(href);
      if (!element) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveHref(href);
            }
          });
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 },
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div id="top" style={{ fontFamily: "'Be Vietnam Pro', 'Segoe UI', sans-serif", background: "linear-gradient(180deg, #0B1220 0%, #1E293B 100%)", minHeight: "100vh" }}>
      <Navbar activeHref={activeHref} />
      {sections.map((Section, index) => (
        <Reveal key={Section.name} delay={Math.min(index * 0.04, 0.32)}>
          <Section />
        </Reveal>
      ))}
    </div>
  );
}
