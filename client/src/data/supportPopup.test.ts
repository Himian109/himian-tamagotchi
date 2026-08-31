import { describe, expect, it } from "vitest";
import { hasSeenSupportPopup, markSupportPopupSeen, SUPPORT_POPUP_STORAGE_KEY } from "./supportPopup";

function createStorage() {
  const values = new Map<string, string>();
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => values.set(key, value),
    values,
  };
}

describe("首次造訪支持視窗", () => {
  it("shows before the browser has recorded an appearance", () => {
    const storage = createStorage();
    expect(hasSeenSupportPopup(storage)).toBe(false);
  });

  it("stays hidden after closing or following the support link", () => {
    const storage = createStorage();
    markSupportPopupSeen(storage);
    expect(storage.values.get(SUPPORT_POPUP_STORAGE_KEY)).toBe("1");
    expect(hasSeenSupportPopup(storage)).toBe(true);
  });
});
