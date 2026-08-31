import type { EggHuntItem, HuntFieldId, HuntLocationId } from "./eggHunt";
import { eggHuntFields, eggHuntLocations } from "./eggHunt";

export interface EggHuntFilters {
  query?: string;
  field?: HuntFieldId | "all";
  location?: HuntLocationId | "all";
}

export function filterEggHuntItems(items: EggHuntItem[], filters: EggHuntFilters) {
  const query = filters.query?.trim().toLocaleLowerCase("zh-TW") || "";
  return items.filter((item) => {
    if (filters.field && filters.field !== "all" && item.field !== filters.field) return false;
    if (filters.location && filters.location !== "all" && item.location !== filters.location) return false;
    if (!query) return true;
    const field = eggHuntFields.find((entry) => entry.id === item.field);
    const location = eggHuntLocations.find((entry) => entry.id === item.location);
    return [item.name, item.category, field?.label, field?.english, location?.label].some((value) => value?.toLocaleLowerCase("zh-TW").includes(query));
  });
}
