export const SUPPORT_POPUP_STORAGE_KEY = "himian-support-popup-seen-v1";

type ReadableStorage = Pick<Storage, "getItem">;
type WritableStorage = Pick<Storage, "setItem">;

export function hasSeenSupportPopup(storage: ReadableStorage) {
  return storage.getItem(SUPPORT_POPUP_STORAGE_KEY) === "1";
}

export function markSupportPopupSeen(storage: WritableStorage) {
  storage.setItem(SUPPORT_POPUP_STORAGE_KEY, "1");
}
