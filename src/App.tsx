import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

type SectionItem = {
  id: string;
  label: string;
};

export default function App() {
  const { t } = useTranslation();
  const PublicLocation = useLocation();
  const PublicIsHome = PublicLocation.pathname === "/";

  const PublicSections: SectionItem[] = [
    { id: "home", label: t("nav.home") },
    { id: "portfolio", label: t("nav.portfolio") },
  ];

  return (
    <div className="app">
      <Navbar sections={PublicIsHome ? [] : []} activeId="home" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">{t("footer.left", { year: new Date().getFullYear() })}</div>
          <div className="footerRight">{t("footer.right")}</div>
        </div>
      </footer>
    </div>
  );
}