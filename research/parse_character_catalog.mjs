import { readFile, writeFile } from "node:fs/promises";

const input = "/home/ubuntu/himian-Tamagotchi/research/character-list-api.json";
const output = "/home/ubuntu/himian-Tamagotchi/research/character-catalog.json";
const raw = JSON.parse(await readFile(input, "utf8"));
const wiki = raw.parse.wikitext["*"];

const clean = (value = "") => value
  .replace(/\[\[File:[^\]]+\]\]/g, "")
  .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
  .replace(/\[\[([^\]]+)\]\]/g, "$1")
  .replace(/'''/g, "")
  .replace(/''/g, "")
  .replace(/<[^>]+>/g, "")
  .replace(/&nbsp;/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const getLinkLabel = (cell = "") => {
  const match = cell.match(/\[\[([^\]]+)\]\]/);
  if (match) {
    const [target, label] = match[1].split("|");
    return clean(label || target);
  }
  const externalMatch = cell.match(/\[https?:\/\/\S+\s+([^\]]+)\]/);
  return externalMatch ? clean(externalMatch[1]) : "";
};

const getArtwork = (cell = "") => {
  const match = cell.match(/\[\[File:([^|\]]+)/i);
  return match ? match[1].trim() : "";
};

const parseCells = (row = []) => {
  const cells = [];
  let current = "";
  let started = false;
  for (const line of row) {
    if (line.startsWith("|") && !line.startsWith("|-")) {
      if (started) cells.push(current.trim());
      current = line.slice(1);
      started = true;
    } else if (started) {
      current += `\n${line}`;
    }
  }
  if (started) cells.push(current.trim());
  return cells;
};

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const lines = wiki.split("\n");
const records = [];
let versionGroup = "";
let stage = "";
let field = "Any";
let species = "";
let active = false;
let row = [];

const flush = () => {
  if (!row.length || !active || !stage || !versionGroup) {
    row = [];
    return;
  }
  const cells = parseCells(row);
  const name = getLinkLabel(cells[0]);
  if (!name || /^File:/i.test(name) || !cells[1]) {
    row = [];
    return;
  }
  const artworkFile = getArtwork(cells[1]);
  if (!artworkFile) {
    row = [];
    return;
  }
  let itemField = field;
  if (stage === "Kid") itemField = name.replace(/\s*Kid$/i, "") || "Any";
  if (stage === "Baby") itemField = "Any";
  const rowSpecies = stage === "Young" ? clean(cells[4] || species) : species;
  const obtaining = clean(cells.at(-1));
  const careMatch = obtaining.match(/(?:\b0\b|0-1|2-5|6\+) care mistakes?/i);
  const perfectCare = /Fill Hunger and Happy meters 5\+ times each/i.test(obtaining);
  const connection = /Connect|connection/i.test(obtaining) ? obtaining : "";
  const variantKey = `${versionGroup}|${itemField}|${rowSpecies}|${obtaining}`;
  records.push({
    id: slugify(`${name}-${versionGroup}-${itemField}-${records.length + 1}`),
    name,
    stage,
    versionGroup,
    field: itemField || "Any",
    species: rowSpecies || (stage === "Young" ? name.replace(/\s*Young$/i, "") : "Any"),
    evolvesFrom: stage === "Baby" ? "Egg" : stage === "Kid" ? "Babymarutchi" : stage === "Young" ? `${itemField} Kid` : rowSpecies ? `${rowSpecies} Young` : "Any Young",
    careMistakes: careMatch?.[0] || "特殊條件",
    perfectCare,
    connection,
    obtaining,
    secret: Boolean(connection) || /secret|exclusive/i.test(obtaining),
    artworkFile,
    artworkUrl: `https://tamagotchi.fandom.com/wiki/Special:Redirect/file/${encodeURIComponent(artworkFile)}`,
    variantKey,
    sourceUrl: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list",
  });
  row = [];
};

for (const line of lines) {
  const trimmed = line.trim();
  if (trimmed === "== Land, Water and Sky Versions ==") {
    flush(); active = true; versionGroup = "Land／Water／Sky 原始三版"; field = "Any"; species = ""; continue;
  }
  if (trimmed === "== Jade Forest Version ==") {
    flush(); active = true; versionGroup = "Jade Forest"; field = "Any"; species = ""; continue;
  }
  if (trimmed === "== Tropics and Glacier Versions ==") {
    flush(); active = true; versionGroup = "Orange Tropics／White Glacier"; field = "Any"; species = ""; continue;
  }
  if (trimmed === "== Lab Tama Exclusive ==" || trimmed === "== Non-Raisable Characters ==") {
    flush(); active = false; versionGroup = ""; continue;
  }
  const stageMatch = trimmed.match(/^=== (Baby|Kid|Young|Adult) Stage ===$/);
  if (stageMatch) {
    flush(); stage = stageMatch[1]; field = "Any"; species = ""; continue;
  }
  const fieldHeading = trimmed.match(/^==== (Land|Water|Sky|Forest|Tropical|Ice|Any) Field/);
  if (fieldHeading) {
    flush(); field = fieldHeading[1]; species = ""; continue;
  }
  const tableField = trimmed.match(/^! colspan="\d+" \|(Land|Water|Sky|Forest|Tropical|Ice|Any) Field/);
  if (tableField) {
    flush(); field = tableField[1]; species = ""; continue;
  }
  const speciesHeading = trimmed.match(/^! colspan="\d+" \|(.+?) Species/);
  if (speciesHeading) {
    flush(); species = clean(speciesHeading[1]); continue;
  }
  if (trimmed === "|-") {
    flush();
    continue;
  }
  if (trimmed === "|}") {
    flush();
    continue;
  }
  if (active && stage) row.push(line);
}
flush();

const grouped = new Map();
for (const record of records) {
  const key = `${record.name}|${record.stage}|${record.artworkFile}`;
  if (!grouped.has(key)) {
    grouped.set(key, {
      id: slugify(`${record.name}-${record.artworkFile}`),
      name: record.name,
      stage: record.stage,
      artworkFile: record.artworkFile,
      artworkUrl: record.artworkUrl,
      fields: [],
      versions: [],
      species: [],
      secret: false,
      variants: [],
      sourceUrl: record.sourceUrl,
    });
  }
  const item = grouped.get(key);
  item.fields = [...new Set([...item.fields, record.field])];
  item.versions = [...new Set([...item.versions, record.versionGroup])];
  item.species = [...new Set([...item.species, record.species].filter(Boolean))];
  item.secret ||= record.secret;
  if (!item.variants.some((variant) => variant.variantKey === record.variantKey)) item.variants.push(record);
}

const stageOrder = { Baby: 0, Kid: 1, Young: 2, Adult: 3 };
const catalog = [...grouped.values()].sort((a, b) => stageOrder[a.stage] - stageOrder[b.stage] || a.name.localeCompare(b.name));

await writeFile(output, JSON.stringify({ generatedAt: "2026-08-29", records, catalog }, null, 2), "utf8");

const byStage = Object.groupBy(catalog, (item) => item.stage);
const byVersion = Object.groupBy(records, (item) => item.versionGroup);
console.log(JSON.stringify({
  rawRows: records.length,
  uniqueCharacters: catalog.length,
  byStage: Object.fromEntries(Object.entries(byStage).map(([key, value]) => [key, value.length])),
  byVersion: Object.fromEntries(Object.entries(byVersion).map(([key, value]) => [key, value.length])),
}, null, 2));
