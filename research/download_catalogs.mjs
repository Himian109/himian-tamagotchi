import { readFile, writeFile, mkdir } from "node:fs/promises";

const sourcePath = "/home/ubuntu/build_all_pet_growth_catalog.json";
const outputDir = "/home/ubuntu/himian-Tamagotchi/research/catalog-parts";

await mkdir(outputDir, { recursive: true });
const source = JSON.parse(await readFile(sourcePath, "utf8"));

for (const [index, result] of source.results.entries()) {
  const response = await fetch(result.output.catalog_file);
  if (!response.ok) throw new Error(`Part ${index + 1} download failed: ${response.status}`);
  const text = await response.text();
  await writeFile(`${outputDir}/part-${index + 1}.json`, text, "utf8");
  console.log(`part-${index + 1}.json: ${text.length} bytes`);
}
