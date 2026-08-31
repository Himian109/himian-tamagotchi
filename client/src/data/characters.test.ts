import { describe, expect, it } from "vitest";
import { matchesCharacterQuery } from "./characterSearch";
import { characterCatalog, characterCatalogMeta, characterNameByEnglish, getCharacterNameZh } from "./characters";

describe("Tamagotchi Paradise 中文角色名稱", () => {
  it("covers all 133 visible forms with a Chinese primary name", () => {
    expect(characterCatalog).toHaveLength(133);
    expect(characterCatalogMeta.localizedForms).toBe(133);
    expect(new Set(characterCatalog.map((character) => character.id)).size).toBe(133);
    expect(characterCatalog.every((character) => /[\u3400-\u9fff]/u.test(character.nameZh))).toBe(true);
  });

  it("prioritizes names from the user-provided appearance charts", () => {
    expect(characterCatalog.filter((character) => character.nameBasis === "user_chart")).toHaveLength(125);
    expect(characterNameByEnglish.Mametchi).toBe("豆丁吉");
    expect(characterNameByEnglish.Mimitchi).toBe("大耳吉");
    expect(characterNameByEnglish.Kuchipatchi).toBe("大嘴吉");
    expect(characterNameByEnglish.Oretatchi).toBe("礦石吉");
    expect(characterNameByEnglish.Ishikorotchi).toBe("岩石吉");
    expect(characterNameByEnglish.Irukatchi).toBe("海豚吉");
    expect(characterNameByEnglish["Tropical Meowtchi"]).toBe("南方貓貓吉");
    expect(characterNameByEnglish.Ginjirotchi).toBe("銀次郎吉");
    expect(characterNameByEnglish.Tigaotchi).toBe("老虎吉");
  });

  it("applies the five user-requested name corrections without changing character identity", () => {
    expect(characterNameByEnglish.Babymarutchi).toBe("BB麻呂吉");
    expect(characterNameByEnglish.Bbmarutchi).toBe("巨型麻呂吉");
    expect(characterNameByEnglish.Batatchi).toBe("啪嗒吉");
    expect(characterNameByEnglish.Batchi).toBe("蝠吉");
    expect(characterNameByEnglish.Hatchitchi).toBe("蜂蜂吉");

    const batatchi = characterCatalog.find((character) => character.name === "Batatchi");
    const batchi = characterCatalog.find((character) => character.name === "Batchi");
    const hatchitchi = characterCatalog.find((character) => character.name === "Hatchitchi");
    expect(matchesCharacterQuery(batatchi!, "啪嗒吉")).toBe(true);
    expect(matchesCharacterQuery(batchi!, "蝠吉")).toBe(true);
    expect(matchesCharacterQuery(hatchitchi!, "蜂蜂吉")).toBe(true);
  });

  it("shows Bbmarutchi growth sources and conditions entirely in Traditional Chinese", () => {
    const bbmarutchi = characterCatalog.find((character) => character.name === "Bbmarutchi");
    expect(bbmarutchi?.variants).toHaveLength(3);
    expect(matchesCharacterQuery(bbmarutchi!, "巨型麻呂吉")).toBe(true);
    expect(matchesCharacterQuery(bbmarutchi!, "Bbmarutchi")).toBe(true);
    expect(bbmarutchi?.variants.every((variant) => variant.evolvesFrom === "任意青年期角色")).toBe(true);
    expect(bbmarutchi?.variants.every((variant) => variant.conditionZh.includes("在幼兒期維持任一類場地細胞少於 4 個"))).toBe(true);
    expect(bbmarutchi?.variants.every((variant) => variant.conditionZh.includes("無法與其他成年期角色繁殖"))).toBe(true);
    expect(bbmarutchi?.variants.some((variant) => /Evolves|Baby stage|Kid stage|Cannot breed/u.test(variant.conditionZh))).toBe(false);
  });

  it("finds the same character by Chinese or English name", () => {
    const mametchi = characterCatalog.find((character) => character.name === "Mametchi");
    expect(mametchi).toBeDefined();
    expect(matchesCharacterQuery(mametchi!, "豆丁吉")).toBe(true);
    expect(matchesCharacterQuery(mametchi!, "Mametchi")).toBe(true);
    expect(matchesCharacterQuery(mametchi!, "大嘴巴")).toBe(false);
  });

  it("keeps regional Young forms distinguishable", () => {
    const roarNames = characterCatalog.filter((character) => character.name === "Roar Young").map((character) => character.nameZh);
    expect(roarNames).toHaveLength(4);
    expect(roarNames).toEqual(expect.arrayContaining(["羔羔", "佩洛", "特庫"]));
    expect(roarNames.filter((name) => name === "羔羔")).toHaveLength(2);
  });

  it("uses the field-specific user name for ambiguous Young sources", () => {
    expect(getCharacterNameZh("Toddle Young", "Land")).toBe("特庫特庫");
    expect(getCharacterNameZh("Toddle Young", "Tropical")).toBe("特庫");
    expect(getCharacterNameZh("Toddle Young", "Ice")).toBe("羔羔");
  });
});
