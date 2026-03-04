import type { Project } from "../projects";

const PublicVideoStage2 = new URL("../../assets/projects/memory/video_stage2.mp4", import.meta.url).toString();
const PublicVideoStage4 = new URL("../../assets/projects/memory/video_stage4.mp4", import.meta.url).toString();
const PublicThumb = new URL("../../assets/projects/memory/thumb.jpg", import.meta.url).toString();

const PublicCode00 = new URL("../../assets/projects/memory/code_drag_and_place.png", import.meta.url).toString();

const PublicCode01_01 = new URL("../../assets/projects/memory/code_01_move_touch_01.png", import.meta.url).toString();
const PublicCode01_02 = new URL("../../assets/projects/memory/code_01_move_touch_02.png", import.meta.url).toString();

const PublicCode02_01 = new URL("../../assets/projects/memory/code_02_stage_save_01.png", import.meta.url).toString();
const PublicCode02_02 = new URL("../../assets/projects/memory/code_02_stage_save_02.png", import.meta.url).toString();

const PublicCode03 = new URL("../../assets/projects/memory/code_03_admob.png", import.meta.url).toString();
const PublicCode04 = new URL("../../assets/projects/memory/code_04_answer_button.png", import.meta.url).toString();

const PublicProject: Project = {
  id: "memory-convenience-store",
  mediaFolder: "memory",

  titleKey: "project.memory-convenience-store.title",
  oneLineKey: "project.memory-convenience-store.oneLine",

  category: "게임",
  period: "2020.02 ~ 2020.05",

  tags: ["Unity", "Mobile", "Puzzle", "Touch", "PlayerPrefs", "AdMob", "PM"],

  teamKey: "project.memory-convenience-store.team",
  environment: ["Unity", "Visual Studio"],

  roleKeys: [
    "project.memory-convenience-store.roles.0",
    "project.memory-convenience-store.roles.1",
    "project.memory-convenience-store.roles.2",
  ],

  highlightKeys: [
    "project.memory-convenience-store.highlights.0",
    "project.memory-convenience-store.highlights.1",
    "project.memory-convenience-store.highlights.2",
    "project.memory-convenience-store.highlights.3",
    "project.memory-convenience-store.highlights.4",
  ],

  links: [{ labelKey: "link.playstore", url: "https://play.google.com/store/apps/details?id=com.DC.PA" }],

  videos: [
    { kind: "local", labelKey: "project.memory-convenience-store.videos.stage2", src: PublicVideoStage2 },
    { kind: "local", labelKey: "project.memory-convenience-store.videos.stage4", src: PublicVideoStage4 },
  ],

  sourceCode: {
    enabled: true,
    blocks: [
      {
        titleKey: "project.memory-convenience-store.code.0.title",
        descKey: "project.memory-convenience-store.code.0.desc",
        images: [{ src: PublicCode00 }],
      },
      {
        titleKey: "project.memory-convenience-store.code.1.title",
        descKey: "project.memory-convenience-store.code.1.desc",
        images: [{ src: PublicCode01_01 }, { src: PublicCode01_02 }],
      },
      {
        titleKey: "project.memory-convenience-store.code.2.title",
        descKey: "project.memory-convenience-store.code.2.desc",
        images: [{ src: PublicCode02_01 }, { src: PublicCode02_02 }],
      },
      {
        titleKey: "project.memory-convenience-store.code.3.title",
        descKey: "project.memory-convenience-store.code.3.desc",
        images: [{ src: PublicCode03 }],
      },
      {
        titleKey: "project.memory-convenience-store.code.4.title",
        descKey: "project.memory-convenience-store.code.4.desc",
        images: [{ src: PublicCode04 }],
      },
    ],
  },
};

export default PublicProject;