import { mkdir, readFile, writeFile } from "node:fs/promises";

const root = "/home/ubuntu/himian-Tamagotchi";
const mapResult = JSON.parse(await readFile("/home/ubuntu/match_user_names_to_catalog_artwork.json", "utf8"));
const catalog = JSON.parse(await readFile(`${root}/research/character-catalog.json`, "utf8")).catalog;
const catalogById = new Map(catalog.map((item) => [item.id, item]));
const partsDir = `${root}/research/user-chart-mappings`;
await mkdir(partsDir, { recursive: true });

const mappings = [];
const fieldChecks = [];

for (const result of mapResult.results) {
  const field = result.output.field;
  const localPath = `${partsDir}/${field.toLowerCase()}.json`;
  let items;
  try {
    items = JSON.parse(await readFile(localPath, "utf8"));
  } catch {
    const response = await fetch(result.output.mapping_file);
    if (!response.ok) throw new Error(`Failed to download ${field}: ${response.status}`);
    const raw = await response.json();
    items = Array.isArray(raw) ? raw : raw.mappings || raw.items;
    await writeFile(localPath, JSON.stringify(items, null, 2));
  }

  const ids = items.map((item) => item.catalog_id);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  const invalidIds = ids.filter((id) => !catalogById.has(id));
  const stageErrors = items.filter((item) => {
    const stage = catalogById.get(item.catalog_id)?.stage;
    return item.slot === "young" ? stage !== "Young" : stage !== "Adult";
  });
  const lowConfidence = items.filter((item) => item.confidence !== "high" && item.confidence !== 1);
  fieldChecks.push({ field, count: items.length, duplicates, invalidIds, stageErrors, lowConfidence });
  mappings.push(...items.map((item) => ({ ...item, field })));
}

const allIds = mappings.map((item) => item.catalog_id);
const globalDuplicates = [...new Set(allIds.filter((id, index) => allIds.indexOf(id) !== index))];
const eligibleCatalog = catalog.filter((item) => (item.stage === "Young" || item.stage === "Adult") && !item.fields.includes("Any"));
const occurrenceErrors = eligibleCatalog.flatMap((item) => {
  const expectedFields = item.fields.filter((field) => ["Land", "Forest", "Sky", "Water", "Tropical", "Ice"].includes(field));
  const mappedRows = mappings.filter((mapping) => mapping.catalog_id === item.id);
  const actualFields = mappedRows.map((mapping) => mapping.field).sort();
  const expectedSorted = [...expectedFields].sort();
  return JSON.stringify(actualFields) === JSON.stringify(expectedSorted)
    ? []
    : [{ id: item.id, englishName: item.name, expectedFields: expectedSorted, actualFields }];
});
const unmappedAnyField = catalog
  .filter((item) => (item.stage === "Young" || item.stage === "Adult") && item.fields.includes("Any"))
  .map((item) => ({ id: item.id, englishName: item.name }));

const output = {
  generatedAt: new Date().toISOString(),
  source: "使用者提供的六張場地成長圖表",
  count: mappings.length,
  fieldChecks,
  globalDuplicates,
  occurrenceErrors,
  unmappedAnyField,
  mappings,
};
await writeFile(`${root}/research/user-chart-name-mappings.json`, JSON.stringify(output, null, 2));

console.log(JSON.stringify({
  count: output.count,
  fields: fieldChecks.map(({ field, count, duplicates, invalidIds, stageErrors, lowConfidence }) => ({
    field, count, duplicateCount: duplicates.length, invalidIdCount: invalidIds.length, stageErrorCount: stageErrors.length, lowConfidenceCount: lowConfidence.length,
  })),
  uniqueIds: new Set(allIds).size,
  legitimateCrossFieldIds: globalDuplicates,
  occurrenceErrorCount: occurrenceErrors.length,
  unmappedAnyField,
}, null, 2));
