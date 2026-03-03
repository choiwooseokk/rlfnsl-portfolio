export type ProjectCategory = "게임" | "콘텐츠";

export type ProjectLink = {
  labelKey: string;
  url: string;
};

export type ProjectVideo =
  | { kind: "external"; labelKey: string; url: string }
  | { kind: "local"; labelKey: string; src: string; poster?: string };

export type Project = {
  id: string;

  titleKey: string;
  oneLineKey: string;

  category: ProjectCategory;
  period?: string;

  tags?: string[];
  imageSrc?: string;

  teamKey?: string;
  environment?: string[];

  roleKeys?: string[];
  highlightKeys?: string[];

  links?: ProjectLink[];
  videos?: ProjectVideo[];
  screenshots?: string[];

  sourceCode?: {
    enabled: boolean;
    blocks: Array<{
      titleKey?: string;
      language?: string;
      code: string;
    }>;
  };
};

export const PROJECTS: Project[] = [
  {
    id: "memory-convenience-store",
    titleKey: "project.memory-convenience-store.title",
    oneLineKey: "project.memory-convenience-store.oneLine",
    category: "게임",
    period: "2020.02 ~ 2020.05",
    tags: ["Unity", "Mobile", "Puzzle", "Touch", "PlayerPrefs", "AdMob"],
    imageSrc: "/assets/projects/memory/thumb.jpg",

    teamKey: "project.memory-convenience-store.team",
    environment: ["Unity", "Visual Studio"],

    roleKeys: [
      "project.memory-convenience-store.roles.0",
      "project.memory-convenience-store.roles.1",
    ],
    highlightKeys: [
      "project.memory-convenience-store.highlights.0",
      "project.memory-convenience-store.highlights.1",
      "project.memory-convenience-store.highlights.2",
      "project.memory-convenience-store.highlights.3",
      "project.memory-convenience-store.highlights.4",
    ],

    links: [
      { labelKey: "link.playstore", url: "https://example.com/store" }
    ],

    videos: [
      { kind: "external", labelKey: "link.youtube", url: "https://youtube.com/..." }
    ],

    screenshots: [
      "/assets/projects/memory/shot1.jpg",
      "/assets/projects/memory/shot2.jpg",
    ],

    sourceCode: { enabled: false, blocks: [] },
  },
];

export function FindProjectById(_id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === _id);
}