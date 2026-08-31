import { mkdir, readFile, writeFile } from "node:fs/promises";

const root = "/home/ubuntu/himian-Tamagotchi";
const mapResult = JSON.parse(await readFile("/home/ubuntu/transcribe_user_character_charts.json", "utf8"));
const partsDir = `${root}/research/user-chart-parts`;
await mkdir(partsDir, { recursive: true });

const charts = [];
for (const [index, result] of mapResult.results.entries()) {
  const response = await fetch(result.output.transcription_file);
  if (!response.ok) throw new Error(`Failed to download ${result.output.field}: ${response.status}`);
  const raw = await response.json();
  const rawItems = Array.isArray(raw) ? raw : raw.items;
  const items = rawItems.map((item) => ({
    ...item,
    chinese_name: item.chinese_name || item.name,
    uncertain: Boolean(item.uncertain),
  }));
  await writeFile(`${partsDir}/${result.output.field.toLowerCase()}.json`, JSON.stringify(items, null, 2));
  charts.push({ field: result.output.field, imagePath: result.input, order: index + 1, items });
}

const total = charts.reduce((sum, chart) => sum + chart.items.length, 0);
const invalid = charts.flatMap((chart) => chart.items.filter((item) => !item.chinese_name || !item.slot || !item.appearance));
await writeFile(`${root}/research/user-chart-transcriptions.json`, JSON.stringify({ total, charts }, null, 2));
console.log(JSON.stringify({ charts: charts.length, total, invalid: invalid.length, fields: charts.map((chart) => chart.field) }, null, 2));
