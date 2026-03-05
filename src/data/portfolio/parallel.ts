import type { Project } from "../projects";

const PUBLIC_CODE_00 = new URL("../../assets/projects/parallel/code_00_monsterhelp.png", import.meta.url).toString();

const PUBLIC_CODE_01_01 = new URL("../../assets/projects/parallel/code_01_joystick_rotate_01.png", import.meta.url).toString();
const PUBLIC_CODE_01_02 = new URL("../../assets/projects/parallel/code_01_joystick_rotate_02.png", import.meta.url).toString();

const PUBLIC_CODE_02_01 = new URL("../../assets/projects/parallel/code_02_camera_battery_01.png", import.meta.url).toString();
const PUBLIC_CODE_02_02 = new URL("../../assets/projects/parallel/code_02_camera_battery_02.png", import.meta.url).toString();

const PUBLIC_CODE_03_01 = new URL("../../assets/projects/parallel/code_03_Batter_01.png", import.meta.url).toString();
const PUBLIC_CODE_03_02 = new URL("../../assets/projects/parallel/code_03_Batter_02.png", import.meta.url).toString();

const PUBLIC_CODE_04_01 = new URL(
  "../../assets/projects/parallel/code_04_screenshot_scrollsnap_01.png",
  import.meta.url
).toString();
const PUBLIC_CODE_04_02 = new URL(
  "../../assets/projects/parallel/code_04_screenshot_scrollsnap_02.png",
  import.meta.url
).toString();
const PUBLIC_CODE_04_03 = new URL(
  "../../assets/projects/parallel/code_04_screenshot_scrollsnap_03.png",
  import.meta.url
).toString();

const PUBLIC_CODE_05 = new URL("../../assets/projects/parallel/code_05_scrollSnap.png", import.meta.url).toString();

const PUBLIC_PROJECT: Project = {
  id: "parallel",
  mediaFolder: "parallel",

  titleKey: "project.parallel.title",
  oneLineKey: "project.parallel.oneLine",

  category: "게임",
  period: "2021.03.14 ~ 2021.07.29",

  tags: ["Unity", "Mobile", "Horror", "EscapeRoom", "Joystick", "Camera", "Screenshot", "PlayerPrefs", "PM"],

  teamKey: "project.parallel.team",
  environment: ["Unity", "Visual Studio"],

  roleKeys: ["project.parallel.roles.0", "project.parallel.roles.1", "project.parallel.roles.2"],

  highlightKeys: [
    "project.parallel.highlights.0",
    "project.parallel.highlights.1",
    "project.parallel.highlights.2",
    "project.parallel.highlights.3",
    "project.parallel.highlights.4",
  ],

  links: [
    { labelKey: "link.playstore", url: "https://play.google.com/store/apps/details?id=com.BJSH.Parallel&hl=ko" },
    { labelKey: "link.onestore", url: "https://m.onestore.co.kr/v2/ko-kr/app/0000758221" },
  ],

  videos: [],

  sourceCode: {
    enabled: true,
    blocks: [
      {
        titleKey: "project.parallel.code.0.title",
        descKey: "project.parallel.code.0.desc",
        images: [{ src: PUBLIC_CODE_00 }],
      },
      {
        titleKey: "project.parallel.code.1.title",
        descKey: "project.parallel.code.1.desc",
        images: [{ src: PUBLIC_CODE_01_01 }, { src: PUBLIC_CODE_01_02 }],
      },
      {
        titleKey: "project.parallel.code.2.title",
        descKey: "project.parallel.code.2.desc",
        images: [{ src: PUBLIC_CODE_02_01 }, { src: PUBLIC_CODE_02_02 }],
      },
      {
        titleKey: "project.parallel.code.3.title",
        descKey: "project.parallel.code.3.desc",
        images: [{ src: PUBLIC_CODE_03_01 }, { src: PUBLIC_CODE_03_02 }],
      },
      {
        titleKey: "project.parallel.code.4.title",
        descKey: "project.parallel.code.4.desc",
        images: [{ src: PUBLIC_CODE_04_01 }, { src: PUBLIC_CODE_04_02 }, { src: PUBLIC_CODE_04_03 }],
      },
      {
        titleKey: "project.parallel.code.5.title",
        descKey: "project.parallel.code.5.desc",
        images: [{ src: PUBLIC_CODE_05 }],
      },
    ],
  },
};

export default PUBLIC_PROJECT;