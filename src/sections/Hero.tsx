import { useTranslation } from "react-i18next";
import Section from "../components/Section";

export default function Hero() {
  const { t } = useTranslation();

  const PUBLIC_EMAIL = "rlfnsl7159@naver.com";
  const PUBLIC_PHONE = "010-5531-7159";

  const PublicChips = [
    "hero.chip.0",
    "hero.chip.1",
    "hero.chip.2",
    "hero.chip.3",
    "hero.chip.4",
    "hero.chip.5",
  ];

  return (
    <Section id="home" title={t("hero.section.title")} subtitle={t("hero.section.subtitle")}>
      <div className="hero">
        <div className="heroLeft">
          <h1 className="heroTitle">
            {t("hero.title.prefix")}
            <span className="heroAccent"> {t("hero.title.name")}</span>
          </h1>

          <p className="heroDesc">{t("hero.desc")}</p>

          <div className="heroContact">
            <div className="heroContactRow">
              <span className="heroContactLabel">{t("hero.contact.email")}</span>
              <span className="heroContactValue">{PUBLIC_EMAIL}</span>
            </div>
            <div className="heroContactRow">
              <span className="heroContactLabel">{t("hero.contact.phone")}</span>
              <span className="heroContactValue">{PUBLIC_PHONE}</span>
            </div>
          </div>

          <div className="heroMeta">
            {PublicChips.map((k) => (
              <span key={k} className="chip">
                {t(k)}
              </span>
            ))}
          </div>

          <div className="aboutCard">
            <div className="aboutCardTitle">{t("hero.about.title")}</div>
            <div className="aboutCardBody">{t("hero.about.body")}</div>

            <ul className="aboutCardList">
              <li>{t("hero.about.li0")}</li>
              <li>{t("hero.about.li1")}</li>
              <li>{t("hero.about.li2")}</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}