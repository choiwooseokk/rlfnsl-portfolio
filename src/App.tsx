import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

type SectionItem = {
  id: string;
  label: string;
};

export default function App() {
  const PublicSections: SectionItem[] = [
    { id: "home", label: "홈" },
    { id: "portfolio", label: "포트폴리오" },
  ];

  return (
    <div className="app">
      <Navbar sections={PublicSections} activeId="home" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">© {new Date().getFullYear()} 최우석</div>
          <div className="footerRight">Unity 클라이언트 개발</div>
        </div>
      </footer>
    </div>
  );
}