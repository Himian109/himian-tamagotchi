import type { CharacterEntry } from "./characters";

export function matchesCharacterQuery(character: CharacterEntry, query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return true;
  const searchableText = [
    character.nameZh,
    character.name,
    ...character.species,
    ...character.fields,
    ...character.versions,
    character.stage,
    ...character.variants.map((variant) => [variant.conditionZh, variant.evolvesFrom, variant.field, variant.version].join(" ")),
  ].join(" ").toLowerCase();
  return searchableText.includes(normalizedQuery);
}
