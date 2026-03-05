import type { Project } from "../projects";

const PublicCode00_01 = new URL("../../assets/projects/epacse/code_00_move_01.png", import.meta.url).toString();
const PublicCode00_02 = new URL("../../assets/projects/epacse/code_00_move_02.png", import.meta.url).toString();

const PublicCode01 = new URL("../../assets/projects/epacse/code_01_teleport.png", import.meta.url).toString();
const PublicCode02 = new URL("../../assets/projects/epacse/code_02_stop.png", import.meta.url).toString();

const PublicProject: Project = {
  id: "epacse",
  mediaFolder: "epacse",

  titleKey: "project.epacse.title",
  oneLineKey: "project.epacse.oneLine",

  category: "게임",
  period: "2018.08 ~ 2018.11",

  tags: ["Unity", "VR", "Horror", "Vive", "AI", "G-STAR"],

  teamKey: "project.epacse.team",
  environment: ["Unity", "C#", "Vive"],

  roleKeys: [
    "project.epacse.roles.0",
    "project.epacse.roles.1",
    "project.epacse.roles.2",
    "project.epacse.roles.3",
    "project.epacse.roles.4",
  ],

  highlightKeys: [
    "project.epacse.highlights.0",
    "project.epacse.highlights.1",
    "project.epacse.highlights.2",
    "project.epacse.highlights.3",
    "project.epacse.highlights.4",
  ],

  links: [
    { labelKey: "link.drive", url: "https://drive.google.com/drive/folders/1bM01ZxxDKKQu3UPMVQjHeitVpApudqhz" },
    { labelKey: "link.stovevr", url: "https://www.stovevr.com/kor/index.html" },
  ],

  videos: [{ kind: "youtube", labelKey: "project.epacse.videos.play", videoId: "pWAU2b_fLNY" }],

  sourceCode: {
    enabled: true,
    blocks: [
      {
        titleKey: "project.epacse.code.0.title",
        descKey: "project.epacse.code.0.desc",
        images: [{ src: PublicCode00_01 }, { src: PublicCode00_02 }],
      },
      {
        titleKey: "project.epacse.code.1.title",
        descKey: "project.epacse.code.1.desc",
        images: [{ src: PublicCode01 }],
      },
      {
        titleKey: "project.epacse.code.2.title",
        descKey: "project.epacse.code.2.desc",
        images: [{ src: PublicCode02 }],
      },
    ],
  },
};

export default PublicProject;