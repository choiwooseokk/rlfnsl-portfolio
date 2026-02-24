import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

type SectionItem = {
  id: string;
  label: string;
};

const SECTIONS: SectionItem[] = [
  { id: "home", label: "홈" },
  { id: "about", label: "소개" },
  { id: "skills", label: "기술" },
  { id: "experience", label: "경력" },
  { id: "contact", label: "연락" },
];

export default function App() {
  const [_activeId, _setActiveId] = useState<string>("home");
  const _sectionIds = useMemo(() => SECTIONS.map((s) => s.id), []);

  useEffect(() => {
    const _elements = _sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const _io = new IntersectionObserver(
      (entries) => {
        const _visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (_visible?.target && _visible.target instanceof HTMLElement) {
          _setActiveId(_visible.target.id);
        }
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: "-20% 0px -55% 0px" }
    );

    _elements.forEach((el) => _io.observe(el));
    return () => _io.disconnect();
  }, [_sectionIds]);

  return (
    <div className="app">
      <Navbar sections={SECTIONS} activeId={_activeId} />

      <main className="content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="footer">
        <div className="footerInner">
          <span>© {new Date().getFullYear()} 최우석</span>
          <span className="footerDot">•</span>
          <span>Unity 클라이언트 개발자 포트폴리오</span>
        </div>
      </footer>
    </div>
  );
}