import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const resultPath = "/home/ubuntu/localize_tamagotchi_character_names.json";
const partsDir = path.join(projectRoot, "research", "zh-name-parts");
const catalogPath = path.join(projectRoot, "research", "character-catalog.json");
const outputPath = path.join(projectRoot, "research", "character-name-localizations.json");

await mkdir(partsDir, { recursive: true });
const mapResult = JSON.parse(await readFile(resultPath, "utf8"));
const catalogData = JSON.parse(await readFile(catalogPath, "utf8"));
const translations = [];

for (const [index, result] of mapResult.results.entries()) {
  const response = await fetch(result.output.translation_file);
  if (!response.ok) throw new Error(`Failed to download part ${index + 1}: ${response.status}`);
  const part = await response.json();
  await writeFile(path.join(partsDir, `part-${index + 1}.json`), JSON.stringify(part, null, 2));
  translations.push(...part);
}

const byId = new Map();
for (const item of translations) {
  if (!item?.id || !item?.chinese_name) continue;
  byId.set(item.id, item);
}

const missing = catalogData.catalog
  .filter((character) => !byId.has(character.id))
  .map((character) => ({ id: character.id, english_name: character.name, stage: character.stage, field: character.field }));

const duplicates = translations
  .map((item) => item.id)
  .filter((id, index, ids) => ids.indexOf(id) !== index);

const output = {
  generatedAt: new Date().toISOString(),
  catalogCount: catalogData.catalog.length,
  translationCount: byId.size,
  missing,
  duplicates: [...new Set(duplicates)],
  translations: [...byId.values()].sort((a, b) => a.english_name.localeCompare(b.english_name)),
};

await writeFile(outputPath, JSON.stringify(output, null, 2));
console.log(JSON.stringify({
  catalogCount: output.catalogCount,
  translationCount: output.translationCount,
  missingCount: missing.length,
  missing,
  duplicateCount: output.duplicates.length,
}, null, 2));
