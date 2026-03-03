import type { Project } from "../projects";

const PublicProject: Project = {
  id: "memory-convenience-store",
  mediaFolder: "memory",

  titleKey: "project.memory-convenience-store.title",
  oneLineKey: "project.memory-convenience-store.oneLine",
  category: "게임",
  period: "2020.02 ~ 2020.05",
  tags: ["Unity", "Mobile", "Puzzle", "Touch", "PlayerPrefs", "AdMob"],

  teamKey: "project.memory-convenience-store.team",
  environment: ["Unity", "Visual Studio"],

  roleKeys: ["project.memory-convenience-store.roles.0", "project.memory-convenience-store.roles.1"],
  highlightKeys: [
    "project.memory-convenience-store.highlights.0",
    "project.memory-convenience-store.highlights.1",
    "project.memory-convenience-store.highlights.2",
    "project.memory-convenience-store.highlights.3",
    "project.memory-convenience-store.highlights.4",
  ],

  links: [{ labelKey: "link.playstore", url: "https://example.com/store" }],
  videos: [{ kind: "external", labelKey: "link.youtube", url: "https://youtube.com/..." }],

  sourceCode: { enabled: false, blocks: [] },
};

export default PublicProject;