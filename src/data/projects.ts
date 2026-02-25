export type ProjectCategory = "게임" | "콘텐츠" | "시스템 연동";

export type ProjectItem = {
  id: string;
  title: string;
  period: string;
  oneLine: string;
  tags: string[];
  imageSrc: string;
  category: ProjectCategory;
  summary: string;
  role: string[];
  tech: string[];
  problems: string[];
  results: string[];
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "project-a",
    title: "프로젝트 A",
    period: "YYYY.MM - YYYY.MM",
    oneLine: "멀티플레이 전투 및 실시간 동기화 구조 구현",
    tags: ["Fusion", "동기화", "URP"],
    imageSrc: "/projects/project-a.png",
    category: "게임",
    summary: "프로젝트 요약을 여기에 작성하세요.",
    role: ["내 역할을 여기에 작성하세요."],
    tech: ["사용 기술을 여기에 작성하세요."],
    problems: ["해결한 문제를 여기에 작성하세요."],
    results: ["성과를 여기에 작성하세요."],
  },
  {
    id: "project-b",
    title: "프로젝트 B",
    period: "YYYY.MM - YYYY.MM",
    oneLine: "라이브 운영을 고려한 데이터 기반 클라이언트 구조",
    tags: ["Addressables", "데이터", "운영"],
    imageSrc: "/projects/project-b.png",
    category: "콘텐츠",
    summary: "프로젝트 요약을 여기에 작성하세요.",
    role: ["내 역할을 여기에 작성하세요."],
    tech: ["사용 기술을 여기에 작성하세요."],
    problems: ["해결한 문제를 여기에 작성하세요."],
    results: ["성과를 여기에 작성하세요."],
  },
  {
    id: "project-c",
    title: "프로젝트 C",
    period: "YYYY.MM - YYYY.MM",
    oneLine: "외부 시스템 연동이 필요한 디바이스 클라이언트",
    tags: ["연동", "디바이스", "UI"],
    imageSrc: "/projects/project-c.png",
    category: "시스템 연동",
    summary: "프로젝트 요약을 여기에 작성하세요.",
    role: ["내 역할을 여기에 작성하세요."],
    tech: ["사용 기술을 여기에 작성하세요."],
    problems: ["해결한 문제를 여기에 작성하세요."],
    results: ["성과를 여기에 작성하세요."],
  },
];

export function GetProjectById(id: string) {
  return PROJECTS.find((p) => p.id === id) ?? null;
}