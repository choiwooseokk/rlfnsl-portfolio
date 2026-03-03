import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import resources from "../locales/generated/resources.json";

type ResourcesShape = Record<string, { translation?: Record<string, string> }>;

function GetLangCodes() {
  const PublicRes = resources as unknown as ResourcesShape;
  return Object.keys(PublicRes).sort();
}

function NormalizeLang(_lang: string) {
  return (_lang || "ko").split("-")[0];
}

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const PublicLangCodes = useMemo(() => GetLangCodes(), []);
  const PublicCurrent = NormalizeLang(i18n.resolvedLanguage || i18n.language || "ko");

  const OnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const _next = e.target.value;
    i18n.changeLanguage(_next);
    localStorage.setItem("lang", _next);
  };

  return (
    <div className="langSelectWrap">
      <select className="langSelect" value={PublicCurrent} onChange={OnChange} aria-label={t("ui.lang.label")}>
        {PublicLangCodes.map((code) => (
          <option key={code} value={code}>
            {t(`ui.lang.${code}`, { defaultValue: code })}
          </option>
        ))}
      </select>
    </div>
  );
}