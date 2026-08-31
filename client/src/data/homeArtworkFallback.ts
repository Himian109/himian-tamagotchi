import { characterCatalog } from "./characters";

// The original artwork references point to Tamagotchi Wiki/Fandom's MediaWiki files.
// Use those preserved source URLs when the old Manus storage paths are unavailable.
for (const character of characterCatalog) {
  if (character.artworkSource) character.artwork = character.artworkSource;
}
