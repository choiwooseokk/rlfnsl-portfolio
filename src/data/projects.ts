export type ProjectCategory = "게임" | "콘텐츠";

export type ProjectLink = {
  labelKey: string;
  url: string;
};

export type ProjectVideo =
  | { kind: "external"; labelKey: string; url: string }
  | { kind: "local"; labelKey: string; src: string; poster?: string }
  | { kind: "youtube"; labelKey: string; videoId: string; startSeconds?: number };

export type ProjectCodeImageItem = {
  src: string;
  captionKey?: string;
};

export type ProjectCodeBlock = {
  titleKey?: string;
  descKey?: string;
  images?: ProjectCodeImageItem[];

  language?: string;
  code?: string;
};

export type Project = {
  id: string;

  titleKey: string;
  oneLineKey: string;

  category: ProjectCategory;
  period?: string;

  tags?: string[];

  mediaFolder?: string;

  imageSrc?: string;
  screenshots?: string[];

  teamKey?: string;
  environment?: string[];

  roleKeys?: string[];
  highlightKeys?: string[];

  links?: ProjectLink[];
  videos?: ProjectVideo[];

  sourceCode?: {
    enabled: boolean;
    blocks: ProjectCodeBlock[];
  };
};

type ProjectModule = { default: Project };
type UrlModule = { default: string };

const PRIVATE_PROJECT_MODULES = import.meta.glob<ProjectModule>("./portfolio/*.ts", { eager: true });

const PRIVATE_THUMB_MODULES = import.meta.glob<UrlModule>(
  "../assets/projects/**/thumb.{png,jpg,jpeg,webp}",
  { eager: true, query: "?url" }
);

const PRIVATE_SHOT_MODULES = import.meta.glob<UrlModule>(
  "../assets/projects/**/shots/*.{png,jpg,jpeg,webp}",
  { eager: true, query: "?url" }
);

function privateGetFolderFromThumbPath(_path: string) {
  const _match = _path.match(/\/assets\/projects\/([^/]+)\/thumb\.(png|jpg|jpeg|webp)$/);
  return _match ? _match[1] : "";
}

function privateGetFolderFromShotPath(_path: string) {
  const _match = _path.match(/\/assets\/projects\/([^/]+)\/shots\//);
  return _match ? _match[1] : "";
}

function privateBuildThumbMap() {
  const _map: Record<string, string> = {};
  for (const [_path, _mod] of Object.entries(PRIVATE_THUMB_MODULES)) {
    const _folder = privateGetFolderFromThumbPath(_path);
    if (_folder) _map[_folder] = _mod.default;
  }
  return _map;
}

function privateBuildShotsMap() {
  const _map: Record<string, string[]> = {};
  for (const [_path, _mod] of Object.entries(PRIVATE_SHOT_MODULES)) {
    const _folder = privateGetFolderFromShotPath(_path);
    if (!_folder) continue;
    if (!_map[_folder]) _map[_folder] = [];
    _map[_folder].push(_mod.default);
  }

  for (const _key of Object.keys(_map)) {
    _map[_key].sort((a, b) => a.localeCompare(b));
  }

  return _map;
}

const PRIVATE_THUMBS_BY_FOLDER = privateBuildThumbMap();
const PRIVATE_SHOTS_BY_FOLDER = privateBuildShotsMap();

function privateNormalizeProject(_project: Project): Project {
  const _folder = _project.mediaFolder ?? _project.id;

  const _imageSrc = _project.imageSrc ?? PRIVATE_THUMBS_BY_FOLDER[_folder];
  const _screenshots = _project.screenshots ?? PRIVATE_SHOTS_BY_FOLDER[_folder];

  return {
    ..._project,
    imageSrc: _imageSrc,
    screenshots: _screenshots,
  };
}

function privateParseYearMonth(_text: string): number {
  const _m = _text.trim().match(/^(\d{4})(?:\.(\d{1,2}))?$/);
  if (!_m) return Number.NEGATIVE_INFINITY;

  const _year = Number(_m[1]);
  const _month = _m[2] ? Number(_m[2]) : 0;

  if (!Number.isFinite(_year)) return Number.NEGATIVE_INFINITY;
  if (_month < 0 || _month > 12) return Number.NEGATIVE_INFINITY;

  return _year * 100 + _month;
}

function privateGetProjectSortKey(_project: Project): number {
  const _period = _project.period?.trim();
  if (!_period) return Number.NEGATIVE_INFINITY;

  const _parts = _period.split("~").map((_p) => _p.trim());
  if (_parts.length === 1) return privateParseYearMonth(_parts[0]);

  const _end = _parts[_parts.length - 1];
  const _start = _parts[0];

  const _endKey = privateParseYearMonth(_end);
  if (_endKey !== Number.NEGATIVE_INFINITY) return _endKey;

  return privateParseYearMonth(_start);
}

export const PROJECTS: Project[] = Object.values(PRIVATE_PROJECT_MODULES)
  .map((_m) => privateNormalizeProject(_m.default))
  .sort((_a, _b) => {
    const _aKey = privateGetProjectSortKey(_a);
    const _bKey = privateGetProjectSortKey(_b);

    if (_aKey !== _bKey) return _bKey - _aKey;

    return _a.id.localeCompare(_b.id);
  });

export function FindProjectById(_id: string): Project | undefined {
  return PROJECTS.find((_p) => _p.id === _id);
}