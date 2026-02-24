import Section from "../components/Section.jsx";

const EXPERIENCE = [
  {
    company: "EOAG게임즈",
    period: "2024.07 ~ 2026.02",
    role: "개발팀",
    bullets: [
      "글로벌 출시 대응 및 퍼블리셔 협업 환경에서 개발",
      "BM 구조 기획 및 내부 구현 커뮤니케이션 수행",
      "스팀 멀티플레이 프로젝트 메인 개발",
    ],
  },
  {
    company: "SAMG",
    period: "2023.06 ~ 2024.06",
    role: "개발팀",
    bullets: ["국가지원사업 프로젝트 메인 개발", "이모션티니핑 서브 개발"],
  },
  {
    company: "하트버스",
    period: "2022.05 ~ 2023.04",
    role: "개발팀",
    bullets: ["프로젝트 개발 및 최적화", "서버 동기화 관련 업무 수행"],
  },
  {
    company: "매쓰마스터",
    period: "2020.12 ~ 2022.02",
    role: "개발팀",
    bullets: ["프로그램 안정화", "스테이지 제작 및 콘텐츠 기획", "팀 내 교육 및 업무 지원"],
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="경력" subtitle="핵심만 짧게 정리">
      <div className="timeline">
        {EXPERIENCE.map((e) => (
          <div key={`${e.company}-${e.period}`} className="timelineItem">
            <div className="timelineTop">
              <div className="timelineTitle">
                <span className="timelineCompany">{e.company}</span>
                <span className="timelineRole">{e.role}</span>
              </div>
              <div className="timelinePeriod">{e.period}</div>
            </div>
            <ul className="list">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}