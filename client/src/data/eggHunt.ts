export type HuntFieldId = "land" | "ocean" | "sky" | "forest" | "tropical" | "ice";
export type HuntLocationId = "volcano" | "spring";
export type IngredientCategory = "肉類" | "蔬果" | "蟲類餐點" | "海鮮" | "植物" | "甜品" | "穀物";

export interface EggHuntField {
  id: HuntFieldId;
  label: string;
  english: string;
  color: string;
  pale: string;
  mascot: string;
}

export interface EggHuntLocation {
  id: HuntLocationId;
  label: string;
  shortLabel: string;
}

export interface EggHuntItem {
  id: string;
  field: HuntFieldId;
  location: HuntLocationId;
  name: string;
  category: IngredientCategory;
}

export const eggHuntFields: EggHuntField[] = [
  { id: "land", label: "陸地", english: "LAND", color: "#f8a7c8", pale: "#fff0f6", mascot: "Meowtchi" },
  { id: "ocean", label: "海洋", english: "OCEAN", color: "#82d9ef", pale: "#ecfaff", mascot: "Irukatchi" },
  { id: "sky", label: "天空", english: "SKY", color: "#b8b8f4", pale: "#f3f1ff", mascot: "Horhotchi" },
  { id: "forest", label: "森林", english: "FOREST", color: "#74d6b0", pale: "#ecfff7", mascot: "Forest Horhotchi" },
  { id: "tropical", label: "熱帶", english: "TROPICAL", color: "#ffad73", pale: "#fff4e8", mascot: "Ananatchi" },
  { id: "ice", label: "冰川", english: "ICE", color: "#bde2f6", pale: "#f1fbff", mascot: "Icy Irukatchi" },
];

export const eggHuntLocations: EggHuntLocation[] = [
  { id: "volcano", label: "咚咚火山", shortLabel: "火山" },
  { id: "spring", label: "咚咚泉／溫泉", shortLabel: "泉／溫泉" },
];

const categoryByName: Record<string, IngredientCategory> = {
  大塊肉排: "肉類", 小塊肉排: "肉類", 熱帶肉: "肉類", 熱帶肉餅: "肉類", 冰凍肉: "肉類", 肉罐頭: "肉類",
  蘋果: "蔬果", 胡蘿蔔: "蔬果", 櫻桃: "蔬果", 柿子: "蔬果", 石榴: "蔬果", 熱帶水果: "蔬果", 香蕉: "蔬果", 甜菜: "蔬果", 紅莓: "蔬果",
  甲蟲大餐: "蟲類餐點", 蠕蟲大餐: "蟲類餐點", 蝦米大餐: "蟲類餐點", 浮游生物大餐: "蟲類餐點", 蝴蝶點心: "蟲類餐點", 螞蟻大餐: "蟲類餐點",
  海鮮: "海鮮", 貝類: "海鮮", 北方海鮮: "海鮮", 鮭魚卵: "海鮮",
  綠色海藻: "植物", 紅色海藻: "植物", 紫蘇葉: "植物", 赤竹: "植物",
  鮮花糖漿: "甜品", 蜂蜜糖漿: "甜品",
  整隻飛天雞: "肉類", 飛天雞肌肉: "肉類", 叉燒: "肉類", 北京烤鴨: "肉類",
  玉米: "穀物",
};

const sourceRows = sourceRowsJson as Record<HuntFieldId, Record<HuntLocationId, string[]>>;

export const eggHuntItems: EggHuntItem[] = eggHuntFields.flatMap((field) =>
  eggHuntLocations.flatMap((location) =>
    sourceRows[field.id][location.id].map((name, index) => ({
      id: `${field.id}-${location.id}-${index + 1}`,
      field: field.id,
      location: location.id,
      name,
      category: categoryByName[name],
    })),
  ),
);

export const eggHuntMeta = {
  source: "使用者提供的尋蛋食材圖表",
  fields: eggHuntFields.length,
  locations: eggHuntLocations.length,
  itemPositions: eggHuntItems.length,
  uniqueIngredients: new Set(eggHuntItems.map((item) => item.name)).size,
};
import sourceRowsJson from "./eggHuntSource.json";
