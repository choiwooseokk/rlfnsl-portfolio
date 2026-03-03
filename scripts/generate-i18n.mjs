import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const INPUT = path.join(ROOT, "src", "locales", "i18n.tsv");
const OUT_DIR = path.join(ROOT, "src", "locales", "generated");
const OUT_FILE = path.join(OUT_DIR, "resources.json");

function EnsureDir(_dir) {
  if (!fs.existsSync(_dir)) fs.mkdirSync(_dir, { recursive: true });
}

function ParseTsv(_text) {
  const _lines = _text.replace(/\r/g, "").split("\n").filter((l) => l.trim().length > 0);
  const _header = (_lines[0] ?? "").split("\t").map((s) => s.trim());
  const _langs = _header.slice(1);

  const _rows = [];
  for (let i = 1; i < _lines.length; i++) {
    const _cols = _lines[i].split("\t");
    const _key = (_cols[0] ?? "").trim();
    if (_key.length === 0) continue;

    const _values = {};
    for (let j = 0; j < _langs.length; j++) {
      const _lang = _langs[j];
      const _value = (_cols[j + 1] ?? "").trim();
      _values[_lang] = _value;
    }
    _rows.push({ key: _key, values: _values });
  }

  return { langs: _langs, rows: _rows };
}

function Main() {
  if (!fs.existsSync(INPUT)) {
    console.error("Missing TSV:", INPUT);
    process.exit(1);
  }

  const _tsv = fs.readFileSync(INPUT, "utf-8");
  const { langs: _langs, rows: _rows } = ParseTsv(_tsv);

  if (_langs.length === 0) {
    console.error("No language columns found in TSV header.");
    process.exit(1);
  }

  const _resources = {};
  for (const _lang of _langs) {
    _resources[_lang] = { translation: {} };
  }

  for (const r of _rows) {
    for (const _lang of _langs) {
      const _v = r.values[_lang];
      if (_v == null || _v.length === 0) continue;
      _resources[_lang].translation[r.key] = _v;
    }
  }

  EnsureDir(OUT_DIR);
  fs.writeFileSync(OUT_FILE, JSON.stringify(_resources, null, 2), "utf-8");
  console.log("generated:", OUT_FILE);
}

Main();