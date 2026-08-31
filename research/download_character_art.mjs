import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const catalogPath = "/home/ubuntu/himian-Tamagotchi/research/character-catalog.json";
const outputDir = "/home/ubuntu/webdev-static-assets/tamagotchi-catalog";
const catalog = JSON.parse(await readFile(catalogPath, "utf8")).catalog;
await mkdir(outputDir, { recursive: true });

const sanitize = (value) => value
  .replace(/\.[^.]+$/, "")
  .normalize("NFKD")
  .replace(/[^a-zA-Z0-9]+/g, "-")
  .replace(/^-|-$/g, "")
  .toLowerCase();

const queue = [...catalog];
let completed = 0;
let failed = 0;

async function worker() {
  while (queue.length) {
    const character = queue.shift();
    const originalExt = path.extname(character.artworkFile).toLowerCase();
    const ext = [".png", ".jpg", ".jpeg", ".webp", ".gif"].includes(originalExt) ? originalExt : ".png";
    const fileName = `${sanitize(character.id)}${ext}`;
    const outputPath = path.join(outputDir, fileName);
    try {
      const existing = await stat(outputPath).catch(() => null);
      if (existing?.size > 1024) {
        character.localAsset = outputPath;
        character.assetFileName = fileName;
        character.assetSourceUrl = character.artworkUrl;
        delete character.assetError;
        completed += 1;
        continue;
      }
      const apiUrl = `https://tamagotchi.fandom.com/api.php?action=query&titles=${encodeURIComponent(`File:${character.artworkFile}`)}&prop=imageinfo&iiprop=url&format=json`;
      const apiResponse = await fetch(apiUrl, { headers: { "user-agent": "Mozilla/5.0 himian-Tamagotchi catalog builder" } });
      if (!apiResponse.ok) throw new Error(`Image API HTTP ${apiResponse.status}`);
      const apiData = await apiResponse.json();
      const page = Object.values(apiData.query?.pages || {})[0];
      const sourceUrl = page?.imageinfo?.[0]?.url;
      if (!sourceUrl) throw new Error("No imageinfo URL");
      const response = await fetch(sourceUrl, { headers: { "user-agent": "Mozilla/5.0 himian-Tamagotchi catalog builder" }, redirect: "follow" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      await writeFile(outputPath, buffer);
      character.localAsset = outputPath;
      character.assetFileName = fileName;
      character.assetSourceUrl = sourceUrl;
      delete character.assetError;
      completed += 1;
    } catch (error) {
      character.localAsset = "";
      character.assetFileName = "";
      character.assetError = String(error);
      failed += 1;
    }
  }
}

await Promise.all(Array.from({ length: 8 }, worker));
await writeFile(catalogPath, JSON.stringify({ generatedAt: "2026-08-29", records: [], catalog }, null, 2), "utf8");
console.log(JSON.stringify({ completed, failed, outputDir }, null, 2));
