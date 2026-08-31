import { describe, expect, it } from "vitest";
import { eggHuntFields, eggHuntItems, eggHuntMeta } from "./eggHunt";
import { filterEggHuntItems } from "./eggHuntSearch";

describe("egg hunt ingredient atlas", () => {
  it("covers six fields with four ingredient positions per location", () => {
    expect(eggHuntMeta.fields).toBe(6);
    expect(eggHuntMeta.itemPositions).toBe(48);
    for (const field of eggHuntFields) {
      expect(eggHuntItems.filter((item) => item.field === field.id && item.location === "volcano")).toHaveLength(4);
      expect(eggHuntItems.filter((item) => item.field === field.id && item.location === "spring")).toHaveLength(4);
    }
  });

  it("preserves key ingredient names from the user charts", () => {
    expect(eggHuntItems).toEqual(expect.arrayContaining([
      expect.objectContaining({ field: "land", location: "volcano", name: "大塊肉排" }),
      expect.objectContaining({ field: "ocean", location: "spring", name: "綠色海藻" }),
      expect.objectContaining({ field: "sky", location: "volcano", name: "整隻飛天雞" }),
      expect.objectContaining({ field: "forest", location: "spring", name: "紫蘇葉" }),
      expect.objectContaining({ field: "tropical", location: "spring", name: "熱帶水果" }),
      expect.objectContaining({ field: "ice", location: "spring", name: "鮭魚卵" }),
    ]));
  });

  it("filters by search, field and location", () => {
    expect(filterEggHuntItems(eggHuntItems, { query: "大餐" })).toHaveLength(10);
    expect(filterEggHuntItems(eggHuntItems, { field: "ice", location: "spring" })).toHaveLength(4);
    expect(filterEggHuntItems(eggHuntItems, { query: "火山", field: "land" })).toHaveLength(4);
  });
});
