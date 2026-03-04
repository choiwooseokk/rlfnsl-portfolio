import { useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

type SectionItem = {
  id: string;
  label: string;
};

type Props = {
  sections: SectionItem[];
  activeId: string;
};

export default function Navbar({ sections }: Props) {
  const { t } = useTranslation();
  const PublicNavigate = useNavigate();
  const PublicLocation = useLocation();
  const PrivateIsHome = PublicLocation.pathname === "/";

  const PrivateScrollTo = (id: string) => {
    const _el = document.getElementById(id);
    if (!_el) return;
    _el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const OnBrandClick = () => {
    if (PrivateIsHome) {
      PrivateScrollTo("home");
      return;
    }

    PublicNavigate("/");
    setTimeout(() => {
      PrivateScrollTo("home");
    }, 0);
  };

  const PrivateHasLinks = (sections?.length ?? 0) > 0;

  return (
    <header className="nav">
      <div className="container navInner">
        <button className="brand" type="button" onClick={OnBrandClick}>
          {t("hero.title.name")}
        </button>

        <div className="navRight">
          {PrivateHasLinks ? (
            <nav className="navLinks" aria-label="섹션 이동">
              {sections.map((s, _i) => {
                const _showDivider = _i !== 0;

                return (
                  <span key={s.id} className="navItem">
                    {_showDivider ? <span className="navDivider">-</span> : null}
                    <button type="button" className="navLink" onClick={() => PrivateScrollTo(s.id)}>
                      {s.label}
                    </button>
                  </span>
                );
              })}
            </nav>
          ) : null}

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}