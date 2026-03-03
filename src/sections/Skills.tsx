import { useTranslation } from "react-i18next";
import Section from "../components/Section";

const SKILLS = [
  { title: "Unity", items: ["C#", "Addressables", "AssetBundle", "에디터 툴링"] },
  { title: "Network", items: ["Photon Fusion2", "Photon PUN", "뒤끝", "동기화 경험"] },
  { title: "Rendering", items: ["URP", "최적화 관점 설계", "이펙트 및 머티리얼 관리"] },
  { title: "Live SDK", items: ["Firebase", "Google 로그인", "Admob", "IronSource", "Singular", "AppsFlyer"] },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <Section id="skills" title={t("skills.title")} subtitle={t("skills.subtitle")}>
      <div className="grid2">
        {SKILLS.map((s) => (
          <div key={s.title} className="card">
            <div className="cardTitle">{s.title}</div>
            <div className="chips">
              {s.items.map((it) => (
                <span key={it} className="chip">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}