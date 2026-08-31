import { readFile, writeFile } from "node:fs/promises";

const root = "/home/ubuntu/himian-Tamagotchi";
const catalog = JSON.parse(await readFile(`${root}/research/character-catalog.json`, "utf8")).catalog;
const localizations = JSON.parse(await readFile(`${root}/research/character-name-localizations-final.json`, "utf8")).mappings;
const localizationById = new Map(localizations.map((item) => [item.id, item]));
const uploadLog = await readFile(`${root}/research/catalog-upload.txt`, "utf8");
const uploads = new Map();

const bbmarutchiConditionZh = "在幼兒期維持任一類場地細胞少於 4 個，經過 4 小時後即可進化（例如每次在滿 15 分鐘前切換場地）；也可從兒童期開始持續切換場地，阻止一般進化來取得；巨型麻呂吉無法與其他成年期角色繁殖";

for (const line of uploadLog.split("\n")) {
  const match = line.match(/^\[SUCCESS\]\s+(.+?)\s+->\s+(\/manus-storage\/\S+)$/);
  if (match) uploads.set(match[1], match[2]);
}

const replaceTerms = (text = "") => text
  .replace(/Fill Hunger and Happy meters 5\+ times each/gi, "飢餓與快樂量表各補滿至少 5 次")
  .replace(/care mistakes?/gi, "次照顧失誤")
  .replace(/Always hatches from an egg/gi, "固定從蛋中孵化")
  .replace(/Evolution is prompted upon obtaining 4 of a single field cell type/gi, "取得 4 個相同場地細胞後觸發進化")
  .replace(/Automatically evolves if the evolution prompt is missed twice, or after 4 total hours/gi, "若錯過兩次進化提示，或孵化後總計 4 小時，會自動進化")
  .replace(/Evolution is prompted when there are 4 ([^.]+) icons in its Tama Cells/gi, "Tama Cell 出現 4 個 $1 圖示時觸發進化")
  .replace(/Raise ([^.]+?) in the ([^.]+?) Field/gi, "在 $2 場地培育 $1")
  .replace(/Have majority ([^.]+?) icons in its Tama Cells/gi, "Tama Cell 內以 $1 圖示佔多數")
  .replace(/Appears if a ([^.]+?)'s diet is indeterminable/gi, "$1 的飲食沒有明顯傾向時進化")
  .replace(/Connect ([^.]+)/gi, "連線條件：$1")
  .replace(/during the Young Stage/gi, "（Young 階段）")
  .replace(/Cannot evolve from ([^.]+)/gi, "不能由 $1 進化")
  .replace(/version exclusive/gi, "版本限定")
  .replace(/Land Field/gi, "陸地場地")
  .replace(/Water Field/gi, "水域場地")
  .replace(/Sky Field/gi, "天空場地")
  .replace(/Forest Field/gi, "森林場地")
  .replace(/Tropical Field/gi, "熱帶場地")
  .replace(/Ice Field/gi, "冰原場地")
  .replace(/None/gi, "無")
  .replace(/\s*\*\s*/g, "；")
  .replace(/\s*;\s*/g, "；")
  .replace(/；+/g, "；")
  .replace(/^；|；$/g, "")
  .trim();

const normalized = catalog.map((character) => {
  const localization = localizationById.get(character.id);
  if (!localization) throw new Error(`Missing localization for ${character.id}`);
  return {
    id: character.id,
    name: character.name,
    nameZh: localization.chineseName,
    nameBasis: localization.namingBasis,
    stage: character.stage,
    artwork: uploads.get(character.localAsset) || "",
    artworkSource: character.assetSourceUrl || character.artworkUrl,
    fields: character.fields,
    versions: character.versions,
    species: character.species.filter((item) => item !== "Any"),
    secret: character.secret,
    variants: character.variants.map((variant) => {
      const isBbmarutchi = character.name === "Bbmarutchi";
      return {
        version: variant.versionGroup,
        field: variant.field,
        species: variant.species,
        evolvesFrom: isBbmarutchi ? "任意青年期角色" : variant.evolvesFrom,
        careMistakes: variant.careMistakes === "特殊條件" ? "特殊條件" : replaceTerms(variant.careMistakes),
        perfectCare: variant.perfectCare,
        conditionZh: isBbmarutchi ? bbmarutchiConditionZh : replaceTerms(variant.obtaining),
        conditionOriginal: variant.obtaining,
      };
    }),
    sourceUrl: character.sourceUrl,
  };
});

const contents = `/**
 * 口袋星球角色圖鑑：資料來自 Tamagotchi Wiki Character List，圖片由 MediaWiki imageinfo 提供。
 * 133 個可見成長型態，包含地區版 Young 造型；非官方繁中名稱優先採官方／通行名，其餘使用一致音譯。
 */

export type GrowthStage = "Baby" | "Kid" | "Young" | "Adult";

export interface CharacterVariant {
  version: string;
  field: string;
  species: string;
  evolvesFrom: string;
  careMistakes: string;
  perfectCare: boolean;
  conditionZh: string;
  conditionOriginal: string;
}

export interface CharacterEntry {
  id: string;
  name: string;
  nameZh: string;
  nameBasis: "user_chart" | "official_zh" | "community_zh" | "transliteration" | "descriptive_zh";
  stage: GrowthStage;
  artwork: string;
  artworkSource: string;
  fields: string[];
  versions: string[];
  species: string[];
  secret: boolean;
  variants: CharacterVariant[];
  sourceUrl: string;
}

export const characterCatalog: CharacterEntry[] = ${JSON.stringify(normalized, null, 2)};

export const characterNameByEnglish = characterCatalog.reduce<Record<string, string>>((names, character) => {
  if (!names[character.name]) names[character.name] = character.nameZh;
  return names;
}, {});

export function getCharacterNameZh(englishName: string, field?: string) {
  const candidates = characterCatalog.filter((character) => character.name === englishName);
  const fieldMatch = field ? candidates.find((character) => character.fields.includes(field)) : undefined;
  return fieldMatch?.nameZh || candidates[0]?.nameZh || characterNameByEnglish[englishName] || englishName;
}

export const characterCatalogMeta = {
  generatedAt: "2026-08-29",
  visibleForms: ${normalized.length},
  uniqueNames: ${new Set(normalized.map((item) => item.name)).size},
  localizedForms: ${normalized.filter((item) => item.nameZh).length},
  stages: { Baby: ${normalized.filter((item) => item.stage === "Baby").length}, Kid: ${normalized.filter((item) => item.stage === "Kid").length}, Young: ${normalized.filter((item) => item.stage === "Young").length}, Adult: ${normalized.filter((item) => item.stage === "Adult").length} },
  sourceUrl: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list",
};
`;

await writeFile(`${root}/client/src/data/characters.ts`, contents, "utf8");
console.log(JSON.stringify({ records: normalized.length, localized: normalized.filter((item) => item.nameZh).length, images: normalized.filter((item) => item.artwork).length }, null, 2));
