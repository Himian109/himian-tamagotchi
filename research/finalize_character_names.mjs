import { readFile, writeFile } from "node:fs/promises";

const root = "/home/ubuntu/himian-Tamagotchi";
const catalog = JSON.parse(await readFile(`${root}/research/character-catalog.json`, "utf8")).catalog;
const draft = JSON.parse(await readFile(`${root}/research/character-name-localizations.json`, "utf8")).translations;
const userChartMappings = JSON.parse(await readFile(`${root}/research/user-chart-name-mappings.json`, "utf8")).mappings;
const userChartById = new Map();
for (const item of userChartMappings) {
  const current = userChartById.get(item.catalog_id);
  if (current && current.user_name_traditional !== item.user_name_traditional) {
    throw new Error(`Conflicting user chart names for ${item.catalog_id}: ${current.user_name_traditional} / ${item.user_name_traditional}`);
  }
  userChartById.set(item.catalog_id, item);
}

const priority = { official_zh: 3, community_zh: 2, transliteration: 1 };
const byEnglish = new Map();
for (const item of draft) {
  const current = byEnglish.get(item.english_name);
  if (!current || (priority[item.naming_basis] ?? 0) > (priority[current.naming_basis] ?? 0)) {
    byEnglish.set(item.english_name, item);
  }
}

const genericOverrides = {
  "Forest Kid": "森林幼年體",
  "Frozen Kid": "冰原幼年體",
  "Land Kid": "陸地幼年體",
  "Sky Kid": "天空幼年體",
  "Tropical Kid": "熱帶幼年體",
  "Water Kid": "水域幼年體",
  "Tigaotchi": "提伽歐吉",
  "Bumble Young": "嗡嗡青年體",
  "Chirp Young": "啾啾青年體",
  "Flap Young": "拍拍青年體",
  "Float Young": "漂漂青年體",
  "Glide Young": "滑翔青年體",
  "Leap Young": "跳跳青年體",
  "Lick Young": "舔舔青年體",
  "Paddle Young": "划划青年體",
  "Roar Young": "吼吼青年體",
  "Rocky Young": "岩岩青年體",
  "Sprout Young": "芽芽青年體",
  "Toddle Young": "踏踏青年體",
};

const explicitUserNameCorrections = {
  Babymarutchi: "BB麻呂吉",
  Bbmarutchi: "巨型麻呂吉",
  Batatchi: "啪嗒吉",
  Batchi: "蝠吉",
  Hatchitchi: "蜂蜂吉",
};

const regionalPrefixes = [
  { english: "Forest ", artwork: /^Forest/i, chinese: "森林" },
  { english: "Tropical ", artwork: /^Tropical/i, chinese: "熱帶" },
  { english: "Frozen ", artwork: /^Frozen/i, chinese: "冰原" },
  { english: "Icy ", artwork: /^(Icy|Shiro)/i, chinese: "冰原" },
];

const cleanRegionalPrefix = (name) => name.replace(/^(森林|熱帶|冰原)/, "");

const mappings = catalog.map((character) => {
  let source = byEnglish.get(character.name);
  let chineseName = genericOverrides[character.name] || source?.chinese_name || "";
  let namingBasis = genericOverrides[character.name] ? "descriptive_zh" : source?.naming_basis || "transliteration";
  let sourceUrl = source?.source_url || character.sourceUrl;
  let notes = source?.notes || "";

  for (const region of regionalPrefixes) {
    const hasEnglishPrefix = character.name.startsWith(region.english);
    const hasArtworkPrefix = region.artwork.test(character.artworkFile || "");
    if (!hasEnglishPrefix && !hasArtworkPrefix) continue;
    const baseEnglish = hasEnglishPrefix ? character.name.slice(region.english.length) : character.name;
    const baseSource = byEnglish.get(baseEnglish);
    const baseChinese = genericOverrides[baseEnglish] || baseSource?.chinese_name || chineseName;
    chineseName = `${region.chinese}${cleanRegionalPrefix(baseChinese)}`;
    namingBasis = baseSource?.naming_basis || namingBasis;
    sourceUrl = baseSource?.source_url || sourceUrl;
    notes = `地區型態；${notes}`;
    break;
  }

  const userChartName = userChartById.get(character.id);
  if (userChartName) {
    chineseName = userChartName.user_name_traditional;
    namingBasis = "user_chart";
    notes = `依使用者提供的 ${userChartName.field} 場地成長圖表外觀核對；${userChartName.slot}`;
  }

  if (explicitUserNameCorrections[character.name]) {
    chineseName = explicitUserNameCorrections[character.name];
  }

  if (!chineseName) throw new Error(`Missing Chinese name: ${character.id} (${character.name})`);
  return { id: character.id, englishName: character.name, chineseName, namingBasis, sourceUrl, notes };
});

const missing = mappings.filter((item) => !item.chineseName);
const output = {
  generatedAt: new Date().toISOString(),
  count: mappings.length,
  uniqueEnglishNames: new Set(mappings.map((item) => item.englishName)).size,
  userChartMappedForms: mappings.filter((item) => item.namingBasis === "user_chart").length,
  preservedForms: mappings.filter((item) => item.namingBasis !== "user_chart").length,
  missing,
  mappings,
};

await writeFile(`${root}/research/character-name-localizations-final.json`, JSON.stringify(output, null, 2));
console.log(JSON.stringify({ count: output.count, uniqueEnglishNames: output.uniqueEnglishNames, missing: missing.length }, null, 2));
