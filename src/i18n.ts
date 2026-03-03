import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./locales/generated/resources.json";

type ResourcesShape = Record<string, any>;

function GetDefaultLang() {
  const PublicRes = resources as unknown as ResourcesShape;
  const PublicSupported = new Set(Object.keys(PublicRes));

  const PublicSaved = localStorage.getItem("lang");
  if (PublicSaved && PublicSupported.has(PublicSaved)) return PublicSaved;

  const PublicNav = (navigator.language || "").toLowerCase();

  if (PublicNav.startsWith("zh")) {
    if (PublicNav.includes("tw") || PublicNav.includes("hk") || PublicNav.includes("hant")) {
      if (PublicSupported.has("zhTW")) return "zhTW";
    }
    if (PublicSupported.has("zhCN")) return "zhCN";
  }

  const PublicBase = PublicNav.split("-")[0];
  if (PublicSupported.has(PublicBase)) return PublicBase;

  if (PublicSupported.has("en")) return "en";
  return Object.keys(PublicRes)[0] || "en";
}

i18n.use(initReactI18next).init({
  resources: resources as any,
  lng: GetDefaultLang(),
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;