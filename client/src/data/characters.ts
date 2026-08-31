/**
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

export const characterCatalog: CharacterEntry[] = [
  {
    "id": "babymarutchi-babymarutchi-png",
    "name": "Babymarutchi",
    "nameZh": "BB麻呂吉",
    "nameBasis": "community_zh",
    "stage": "Baby",
    "artwork": "/manus-storage/babymarutchi-babymarutchi-png_1a6e96b5.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Babymarutchi.png",
    "fields": [
      "Any"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Any",
        "species": "Any",
        "evolvesFrom": "Egg",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "固定從蛋中孵化；取得 4 個相同場地細胞後觸發進化；若錯過兩次進化提示，或孵化後總計 4 小時，會自動進化",
        "conditionOriginal": "* Always hatches from an egg * Evolution is prompted upon obtaining 4 of a single field cell type * Automatically evolves if the evolution prompt is missed twice, or after 4 total hours"
      },
      {
        "version": "Jade Forest",
        "field": "Any",
        "species": "Any",
        "evolvesFrom": "Egg",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "固定從蛋中孵化；取得 4 個相同場地細胞後觸發進化；若錯過兩次進化提示，或孵化後總計 4 小時，會自動進化",
        "conditionOriginal": "* Always hatches from an egg * Evolution is prompted upon obtaining 4 of a single field cell type * Automatically evolves if the evolution prompt is missed twice, or after 4 total hours"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Any",
        "species": "Any",
        "evolvesFrom": "Egg",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "固定從蛋中孵化；取得 4 個相同場地細胞後觸發進化；若錯過兩次進化提示，或孵化後總計 4 小時，會自動進化",
        "conditionOriginal": "* Always hatches from an egg * Evolution is prompted upon obtaining 4 of a single field cell type * Automatically evolves if the evolution prompt is missed twice, or after 4 total hours"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "forest-kid-forestkidparadiseartwork-png",
    "name": "Forest Kid",
    "nameZh": "森林幼年體",
    "nameBasis": "descriptive_zh",
    "stage": "Kid",
    "artwork": "/manus-storage/forest-kid-forestkidparadiseartwork-png_a8801d90.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/ForestKidParadiseArtwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Any",
        "evolvesFrom": "Babymarutchi",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "在 Forest 場地培育 Babymarutchi；Tama Cell 出現 4 個 bamboo 圖示時觸發進化",
        "conditionOriginal": "* Raise Babymarutchi in the Forest Field * Evolution is prompted when there are 4 bamboo icons in its Tama Cells"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Any",
        "evolvesFrom": "Babymarutchi",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "在 Forest 場地培育 Babymarutchi；Tama Cell 出現 4 個 bamboo 圖示時觸發進化",
        "conditionOriginal": "* Raise Babymarutchi in the Forest Field * Evolution is prompted when there are 4 bamboo icons in its Tama Cells"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "frozen-kid-frozenkidparadiseartwork-png",
    "name": "Frozen Kid",
    "nameZh": "冰原幼年體",
    "nameBasis": "descriptive_zh",
    "stage": "Kid",
    "artwork": "/manus-storage/frozen-kid-frozenkidparadiseartwork-png_70f7a2f3.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/FrozenKidParadiseArtwork.png",
    "fields": [
      "Frozen"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Frozen",
        "species": "Any",
        "evolvesFrom": "Babymarutchi",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "在 Ice 場地培育 Babymarutchi；Tama Cell 出現 4 個 snowflake 圖示時觸發進化",
        "conditionOriginal": "* Raise Babymarutchi in the Ice Field * Evolution is prompted when there are 4 snowflake icons in its Tama Cells"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "land-kid-land-kid-png",
    "name": "Land Kid",
    "nameZh": "陸地幼年體",
    "nameBasis": "descriptive_zh",
    "stage": "Kid",
    "artwork": "/manus-storage/land-kid-land-kid-png_5de93ce2.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Land_Kid.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Any",
        "evolvesFrom": "Babymarutchi",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "在 Land 場地培育 Babymarutchi；Tama Cell 出現 4 個 leaf 圖示時觸發進化",
        "conditionOriginal": "* Raise Babymarutchi in the Land Field * Evolution is prompted when there are 4 leaf icons in its Tama Cells"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Any",
        "evolvesFrom": "Babymarutchi",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "在 Land 場地培育 Babymarutchi；Tama Cell 出現 4 個 leaf 圖示時觸發進化",
        "conditionOriginal": "* Raise Babymarutchi in the Land Field * Evolution is prompted when there are 4 leaf icons in its Tama Cells"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "sky-kid-sky-kid-png",
    "name": "Sky Kid",
    "nameZh": "天空幼年體",
    "nameBasis": "descriptive_zh",
    "stage": "Kid",
    "artwork": "/manus-storage/sky-kid-sky-kid-png_4c1d9c60.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Sky_Kid.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Any",
        "evolvesFrom": "Babymarutchi",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "在 Sky 場地培育 Babymarutchi；Tama Cell 出現 4 個 cloud 圖示時觸發進化",
        "conditionOriginal": "* Raise Babymarutchi in the Sky Field * Evolution is prompted when there are 4 cloud icons in its Tama Cells"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "tropical-kid-tropicalkidparadiseartwork-png",
    "name": "Tropical Kid",
    "nameZh": "熱帶幼年體",
    "nameBasis": "descriptive_zh",
    "stage": "Kid",
    "artwork": "/manus-storage/tropical-kid-tropicalkidparadiseartwork-png_627f299c.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/TropicalKidParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Any",
        "evolvesFrom": "Babymarutchi",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "在 Tropical 場地培育 Babymarutchi；Tama Cell 出現 4 個 hibiscus 圖示時觸發進化",
        "conditionOriginal": "* Raise Babymarutchi in the Tropical Field * Evolution is prompted when there are 4 hibiscus icons in its Tama Cells"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "water-kid-water-kid-png",
    "name": "Water Kid",
    "nameZh": "水域幼年體",
    "nameBasis": "descriptive_zh",
    "stage": "Kid",
    "artwork": "/manus-storage/water-kid-water-kid-png_ea174b4f.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Water_Kid.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Any",
        "evolvesFrom": "Babymarutchi",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "在 Water 場地培育 Babymarutchi；Tama Cell 出現 4 個 bubble 圖示時觸發進化",
        "conditionOriginal": "* Raise Babymarutchi in the Water Field * Evolution is prompted when there are 4 bubble icons in its Tama Cells"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Any",
        "evolvesFrom": "Babymarutchi",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "在 Water 場地培育 Babymarutchi；Tama Cell 出現 4 個 bubble 圖示時觸發進化",
        "conditionOriginal": "* Raise Babymarutchi in the Water Field * Evolution is prompted when there are 4 bubble icons in its Tama Cells"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "bumble-young-bumble-young-png",
    "name": "Bumble Young",
    "nameZh": "奔奔",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/bumble-young-bumble-young-png_e1e57a42.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Bumble_Young.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Flutter"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Flutter",
        "evolvesFrom": "Sky Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "chirp-young-chirp-young-paradise-artwork-png",
    "name": "Chirp Young",
    "nameZh": "皮優皮優",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/chirp-young-chirp-young-paradise-artwork-png_d5b73d1f.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Chirp_Young_Paradise_Artwork.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Chirp"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Chirp",
        "evolvesFrom": "Sky Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "Chirp Young is misnamed as \"Flap Young\" on the device",
        "conditionOriginal": "* Chirp Young is misnamed as \"Flap Young\" on the device"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "chirp-young-forestchirpyoungparadiseartwork-png",
    "name": "Chirp Young",
    "nameZh": "皮優皮優",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/chirp-young-forestchirpyoungparadiseartwork-png_2d71d52c.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/ForestChirpYoungParadiseArtwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Chirp"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Chirp",
        "evolvesFrom": "Forest Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Chirp",
        "evolvesFrom": "Forest Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "flap-young-flap-young-paradise-artwork-png",
    "name": "Flap Young",
    "nameZh": "帕塔帕塔",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/flap-young-flap-young-paradise-artwork-png_91d77316.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Flap_Young_Paradise_Artwork.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Flap"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Flap",
        "evolvesFrom": "Sky Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "Flap Young is misnamed as \"Chirp Young\" on the device",
        "conditionOriginal": "* Flap Young is misnamed as \"Chirp Young\" on the device"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "float-young-float-young-png",
    "name": "Float Young",
    "nameZh": "浮游浮游",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/float-young-float-young-png_6155ce20.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Float_Young.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Float"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Float",
        "evolvesFrom": "Water Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "Cannot evolve into Mermarintchi",
        "conditionOriginal": "* Cannot evolve into Mermarintchi"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Float",
        "evolvesFrom": "Water Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "float-young-frozenfloatyoungparadiseartwork-png",
    "name": "Float Young",
    "nameZh": "浮游",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/float-young-frozenfloatyoungparadiseartwork-png_8a70614d.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/FrozenFloatYoungParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Float"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Float",
        "evolvesFrom": "Ice Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "Cannot evolve into Hobohorntchi",
        "conditionOriginal": "* Cannot evolve into Hobohorntchi"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "glide-young-glide-young-png",
    "name": "Glide Young",
    "nameZh": "斯亦斯亦",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/glide-young-glide-young-png_4ee31a7c.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Glide_Young.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Glide"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Glide",
        "evolvesFrom": "Water Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Glide",
        "evolvesFrom": "Water Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "glide-young-frozenglideyoungparadiseartwork-png",
    "name": "Glide Young",
    "nameZh": "斯亦",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/glide-young-frozenglideyoungparadiseartwork-png_916aaf97.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/FrozenGlideYoungParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Glide"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Glide",
        "evolvesFrom": "Ice Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "leap-young-leap-young-png",
    "name": "Leap Young",
    "nameZh": "皮奇皮奇",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/leap-young-leap-young-png_49b91cb1.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Leap_Young.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Leap"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Leap",
        "evolvesFrom": "Water Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Leap",
        "evolvesFrom": "Water Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "lick-young-lick-young-png",
    "name": "Lick Young",
    "nameZh": "佩洛佩洛",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/lick-young-lick-young-png_34454acd.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Lick_Young.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Lick"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Lick",
        "evolvesFrom": "Land Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Lick",
        "evolvesFrom": "Land Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "lick-young-tropicallickyoungparadiseartwork-png",
    "name": "Lick Young",
    "nameZh": "羔羔",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/lick-young-tropicallickyoungparadiseartwork-png_9d6cadc3.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/TropicalLickYoungParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Lick"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Lick",
        "evolvesFrom": "Tropical Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "paddle-young-paddle-young-png",
    "name": "Paddle Young",
    "nameZh": "拍拍",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/paddle-young-paddle-young-png_f47c8d58.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Paddle_Young.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Paddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Paddle",
        "evolvesFrom": "Water Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Paddle",
        "evolvesFrom": "Water Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "roar-young-roar-young-png",
    "name": "Roar Young",
    "nameZh": "羔羔",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/roar-young-roar-young-png_07c92a28.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Roar_young.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Roar",
        "evolvesFrom": "Land Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Roar",
        "evolvesFrom": "Land Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "roar-young-forestroaryoungparadiseartwork-png",
    "name": "Roar Young",
    "nameZh": "羔羔",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/roar-young-forestroaryoungparadiseartwork-png_5a51aeaf.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/ForestRoarYoungParadiseArtwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Roar",
        "evolvesFrom": "Forest Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Roar",
        "evolvesFrom": "Forest Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "roar-young-tropicalroaryoungparadiseartwork-png",
    "name": "Roar Young",
    "nameZh": "佩洛",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/roar-young-tropicalroaryoungparadiseartwork-png_34908441.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/TropicalRoarYoungParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Roar",
        "evolvesFrom": "Tropical Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "roar-young-frozenroaryoungparadiseartwork-png",
    "name": "Roar Young",
    "nameZh": "特庫",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/roar-young-frozenroaryoungparadiseartwork-png_3aa70dbc.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/FrozenRoarYoungParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Roar",
        "evolvesFrom": "Ice Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "rocky-young-rocky-young-png",
    "name": "Rocky Young",
    "nameZh": "卡奇卡奇",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/rocky-young-rocky-young-png_f096bd61.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Rocky_Young.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Mineral"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Mineral",
        "evolvesFrom": "Sky Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "Cannot evolve into Yayacorntchi",
        "conditionOriginal": "* Cannot evolve into Yayacorntchi"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "sprout-young-sprout-young-png",
    "name": "Sprout Young",
    "nameZh": "扭奇扭奇",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/sprout-young-sprout-young-png_187ad43d.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Sprout_Young.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Sprout",
        "evolvesFrom": "Land Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "Cannot evolve into Chodracotchi",
        "conditionOriginal": "* Cannot evolve into Chodracotchi"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Sprout",
        "evolvesFrom": "Land Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "sprout-young-forestsproutyoungparadiseartwork-png",
    "name": "Sprout Young",
    "nameZh": "扭奇扭奇",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/sprout-young-forestsproutyoungparadiseartwork-png_6d3aaf45.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/ForestSproutYoungParadiseArtwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Sprout",
        "evolvesFrom": "Forest Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "Cannot evolve into Tatsutchi",
        "conditionOriginal": "* Cannot evolve into Tatsutchi"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Sprout",
        "evolvesFrom": "Forest Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "sprout-young-tropicalsproutyoungparadiseartwork-png",
    "name": "Sprout Young",
    "nameZh": "扭奇",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/sprout-young-tropicalsproutyoungparadiseartwork-png_0c491810.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/TropicalSproutYoungParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Sprout",
        "evolvesFrom": "Tropical Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "Cannot evolve into Manapatchi",
        "conditionOriginal": "* Cannot evolve into Manapatchi"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "toddle-young-toddle-young-png",
    "name": "Toddle Young",
    "nameZh": "特庫特庫",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/toddle-young-toddle-young-png_ab63a69a.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Toddle_Young.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Toddle",
        "evolvesFrom": "Land Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Toddle",
        "evolvesFrom": "Land Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "toddle-young-foresttoddleyoungparadiseartwork-png",
    "name": "Toddle Young",
    "nameZh": "特庫特庫",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/toddle-young-foresttoddleyoungparadiseartwork-png_e8fdec4b.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/ForestToddleYoungParadiseArtwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Toddle",
        "evolvesFrom": "Forest Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Toddle",
        "evolvesFrom": "Forest Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "toddle-young-tropicaltoddleyoungparadiseartwork-png",
    "name": "Toddle Young",
    "nameZh": "特庫",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/toddle-young-tropicaltoddleyoungparadiseartwork-png_e11dce6d.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/TropicalToddleYoungParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Toddle",
        "evolvesFrom": "Tropical Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "toddle-young-frozentoddleyoungparadiseartwork-png",
    "name": "Toddle Young",
    "nameZh": "羔羔",
    "nameBasis": "user_chart",
    "stage": "Young",
    "artwork": "/manus-storage/toddle-young-frozentoddleyoungparadiseartwork-png_73e08245.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/FrozenToddleYoungParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Toddle",
        "evolvesFrom": "Ice Kid",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "",
        "conditionOriginal": ""
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "amefuratchi-amefuratchi-paradise-png",
    "name": "Amefuratchi",
    "nameZh": "海兔吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/amefuratchi-amefuratchi-paradise-png_9af16a83.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Amefuratchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Float"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Float",
        "evolvesFrom": "Float Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Float",
        "evolvesFrom": "Float Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "ananatchi-ananatchiparadiseartwork-png",
    "name": "Ananatchi",
    "nameZh": "菠蘿吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/ananatchi-ananatchiparadiseartwork-png_875a7c51.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/AnanatchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "ankotchi-ankotchi-paradise-png",
    "name": "Ankotchi",
    "nameZh": "安康吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/ankotchi-ankotchi-paradise-png_3221cec3.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Ankotchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Paddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Paddle",
        "evolvesFrom": "Paddle Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Paddle",
        "evolvesFrom": "Paddle Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "avovotchi-avovotchiparadiseartwork-png",
    "name": "Avovotchi",
    "nameZh": "牛油果吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/avovotchi-avovotchiparadiseartwork-png_f240ba97.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/AvovotchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "axolopatchi-axolopatchi-paradise-png",
    "name": "Axolopatchi",
    "nameZh": "阿活洛帕吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/axolopatchi-axolopatchi-paradise-png_5fca8d1e.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Axolopatchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Leap"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Leap",
        "evolvesFrom": "Leap Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Leap",
        "evolvesFrom": "Leap Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "azaratchi-azaratchiparadiseartwork-png",
    "name": "Azaratchi",
    "nameZh": "海豹吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/azaratchi-azaratchiparadiseartwork-png_17a64704.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/AzaratchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "batatchi-batatchi-paradise-png",
    "name": "Batatchi",
    "nameZh": "啪嗒吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/batatchi-batatchi-paradise-png_0a3df0b5.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Batatchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Chirp"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Chirp",
        "evolvesFrom": "Chirp Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "batchi-batchi-paradise-png",
    "name": "Batchi",
    "nameZh": "蝠吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/batchi-batchi-paradise-png_9291a5cb.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Batchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Flap"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Flap",
        "evolvesFrom": "Flap Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "bbmarutchi-bbmarutchi-paradise-artwork-png",
    "name": "Bbmarutchi",
    "nameZh": "巨型麻呂吉",
    "nameBasis": "community_zh",
    "stage": "Adult",
    "artwork": "/manus-storage/bbmarutchi-bbmarutchi-paradise-artwork-png_4bab3edf.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Bbmarutchi_Paradise_Artwork.png",
    "fields": [
      "Any"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Any",
        "species": "Any",
        "evolvesFrom": "任意青年期角色",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "在幼兒期維持任一類場地細胞少於 4 個，經過 4 小時後即可進化（例如每次在滿 15 分鐘前切換場地）；也可從兒童期開始持續切換場地，阻止一般進化來取得；巨型麻呂吉無法與其他成年期角色繁殖",
        "conditionOriginal": "* Evolves after 4 hours in the Baby stage by maintaining less than four of a single Field Cell type (e.g. switching Tama Fields just before 15 minutes) * Can also be obtained from the Kid stage by consistently switching fields and preventing evolution * Cannot breed with other adults"
      },
      {
        "version": "Jade Forest",
        "field": "Any",
        "species": "Any",
        "evolvesFrom": "任意青年期角色",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "在幼兒期維持任一類場地細胞少於 4 個，經過 4 小時後即可進化（例如每次在滿 15 分鐘前切換場地）；也可從兒童期開始持續切換場地，阻止一般進化來取得；巨型麻呂吉無法與其他成年期角色繁殖",
        "conditionOriginal": "* Evolves after 4 hours in the Baby stage by maintaining less than four of a single Field Cell type (e.g. switching Tama Fields just before 15 minutes) * Can also be obtained from the Kid stage by consistently switching fields and preventing evolution * Cannot breed with other adults"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Any",
        "species": "Any",
        "evolvesFrom": "任意青年期角色",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "在幼兒期維持任一類場地細胞少於 4 個，經過 4 小時後即可進化（例如每次在滿 15 分鐘前切換場地）；也可從兒童期開始持續切換場地，阻止一般進化來取得；巨型麻呂吉無法與其他成年期角色繁殖",
        "conditionOriginal": "* Evolves after 4 hours in the Baby stage by maintaining less than four of a single Field Cell type (e.g. switching Tama Fields just before 15 minutes) * Can also be obtained from the Kid stage by consistently switching fields and preventing evolution * Cannot breed with other adults"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "beavertchi-beavertchi-paradise-png",
    "name": "Beavertchi",
    "nameZh": "比巴吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/beavertchi-beavertchi-paradise-png_7bc5f2bc.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Beavertchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Leap"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Leap",
        "evolvesFrom": "Leap Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Leap",
        "evolvesFrom": "Leap Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "chameleotchi-chameleotchi-png",
    "name": "Chameleotchi",
    "nameZh": "變色龍吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/chameleotchi-chameleotchi-png_f15b3ac6.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Chameleotchi.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Lick"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Lick",
        "evolvesFrom": "Lick Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "chodracotchi-chodracotchi-paradise-png",
    "name": "Chodracotchi",
    "nameZh": "小龍吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/chodracotchi-chodracotchi-paradise-png_df80f14b.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Chodracotchi_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "???"
    ],
    "secret": true,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "???",
        "evolvesFrom": "??? Young",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "連線條件：a Pink Land version with two different versions （Young 階段）；不能由 Sprout Young 進化",
        "conditionOriginal": "* Connect a Pink Land version with two different versions during the Young Stage * Cannot evolve from Sprout Young"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "crocotchi-crocotchiparadiseartwork-png",
    "name": "Crocotchi",
    "nameZh": "鱷魚吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/crocotchi-crocotchiparadiseartwork-png_1880ecf6.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/CrocotchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "dangouotchi-dangouotchiparadiseartwork-png",
    "name": "Dangouotchi",
    "nameZh": "圓魚吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/dangouotchi-dangouotchiparadiseartwork-png_6c56562c.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/DangouotchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Float"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Float",
        "evolvesFrom": "Float Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "eagletchi-eagletchi-paradise-png",
    "name": "Eagletchi",
    "nameZh": "伊哥吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/eagletchi-eagletchi-paradise-png_50dec659.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Eagletchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Flap"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Flap",
        "evolvesFrom": "Flap Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "elizardotchi-elizardotchi-paradise-png",
    "name": "Elizardotchi",
    "nameZh": "蜥蜥吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/elizardotchi-elizardotchi-paradise-png_41ec4450.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Elizardotchi_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Lick"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Lick",
        "evolvesFrom": "Lick Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Lick",
        "evolvesFrom": "Lick Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "forest-horhotchi-foresthorhotchifaceforward-artwork-png",
    "name": "Forest Horhotchi",
    "nameZh": "夥夥吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/forest-horhotchi-foresthorhotchifaceforward-artwork-png_2a865b71.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/ForestHorhotchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "furawatchi-furawatchi-paradise-artwork-png",
    "name": "Furawatchi",
    "nameZh": "芙朵吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/furawatchi-furawatchi-paradise-artwork-png_0cef2bf6.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Furawatchi_Paradise_Artwork.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "gemtchi-gemtchi-paradise-png",
    "name": "Gemtchi",
    "nameZh": "寶石吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/gemtchi-gemtchi-paradise-png_7eb57006.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Gemtchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Mineral"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Mineral",
        "evolvesFrom": "Mineral Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "ginjirotchi-ginjirotchiparadiseartwork-png",
    "name": "Ginjirotchi",
    "nameZh": "銀次郎吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/ginjirotchi-ginjirotchiparadiseartwork-png_5701917b.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/GinjirotchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Glide"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Glide",
        "evolvesFrom": "Glide Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "gumax-gumax-paradise-png",
    "name": "Gumax",
    "nameZh": "叉叉熊",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/gumax-gumax-paradise-png_80615ced.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Gumax_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "gusokutchi-gusokutchi-paradise-png",
    "name": "Gusokutchi",
    "nameZh": "多多吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/gusokutchi-gusokutchi-paradise-png_39a32288.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Gusokutchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Float"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Float",
        "evolvesFrom": "Float Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Float",
        "evolvesFrom": "Float Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "hatchitchi-hatchitchi-paradise-png",
    "name": "Hatchitchi",
    "nameZh": "蜂蜂吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/hatchitchi-hatchitchi-paradise-png_1e651833.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Hatchitchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Flutter"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Flutter",
        "evolvesFrom": "Flutter Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "heavytchi-heavytchi-paradise-png",
    "name": "Heavytchi",
    "nameZh": "蛇蛇吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/heavytchi-heavytchi-paradise-png_c462f841.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Heavytchi_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Lick"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Lick",
        "evolvesFrom": "Lick Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Lick",
        "evolvesFrom": "Lick Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "hobohorntchi-hobohorntchiparadiseartwork-png",
    "name": "Hobohorntchi",
    "nameZh": "獨角鯨吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/hobohorntchi-hobohorntchiparadiseartwork-png_1e497834.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/HobohorntchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "???"
    ],
    "secret": true,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "???",
        "evolvesFrom": "??? Young",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "連線條件：a White Glacier version with two different versions （Young 階段）；不能由 a Frozen Float Young 進化",
        "conditionOriginal": "* Connect a White Glacier version with two different versions during the Young Stage * Cannot evolve from a Frozen Float Young"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "hoppentchi-hoppentchiparadiseartwork-png",
    "name": "Hoppentchi",
    "nameZh": "企鵝吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/hoppentchi-hoppentchiparadiseartwork-png_ddabb3fa.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/HoppentchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Glide"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Glide",
        "evolvesFrom": "Glide Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "horhotchi-horhotchi-paradise-png",
    "name": "Horhotchi",
    "nameZh": "伙伙吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/horhotchi-horhotchi-paradise-png_fb53dfe8.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Horhotchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Flap"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Flap",
        "evolvesFrom": "Flap Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "icy-irukatchi-shiroirukatchiparadiseartwork-png",
    "name": "Icy Irukatchi",
    "nameZh": "白海豚吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/icy-irukatchi-shiroirukatchiparadiseartwork-png_c0d5f3ba.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/ShiroIrukatchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Glide"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Glide",
        "evolvesFrom": "Glide Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "iguanatchi-iguanatchiparadiseartwork-png",
    "name": "Iguanatchi",
    "nameZh": "鬣蜥吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/iguanatchi-iguanatchiparadiseartwork-png_e5843fbe.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/IguanatchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Lick"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Lick",
        "evolvesFrom": "Lick Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "imoritchi-imoritchi-paradise-png",
    "name": "Imoritchi",
    "nameZh": "伊莫哩吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/imoritchi-imoritchi-paradise-png_9312d13f.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Imoritchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Leap"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Leap",
        "evolvesFrom": "Leap Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Leap",
        "evolvesFrom": "Leap Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "irukatchi-irukatchi-paradise-png",
    "name": "Irukatchi",
    "nameZh": "海豚吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/irukatchi-irukatchi-paradise-png_43ab5003.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Irukatchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Glide"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Glide",
        "evolvesFrom": "Glide Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Glide",
        "evolvesFrom": "Glide Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "ishikorotchi-ishikorotchi-paradise-png",
    "name": "Ishikorotchi",
    "nameZh": "岩石吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/ishikorotchi-ishikorotchi-paradise-png_ed888800.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Ishikorotchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Mineral"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Mineral",
        "evolvesFrom": "Mineral Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "kabutotchi-kabutotchi-paradise-png",
    "name": "Kabutotchi",
    "nameZh": "甲蟲吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/kabutotchi-kabutotchi-paradise-png_7c84ad35.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Kabutotchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Flutter"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Flutter",
        "evolvesFrom": "Flutter Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "kachitchi-kachitchifaceforward-artwork-png",
    "name": "Kachitchi",
    "nameZh": "鵲鵲吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/kachitchi-kachitchifaceforward-artwork-png_f85d1358.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/KachitchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Chirp"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Chirp",
        "evolvesFrom": "Chirp Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Chirp",
        "evolvesFrom": "Chirp Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "kametchi-kametchi-paradise-png",
    "name": "Kametchi",
    "nameZh": "龜龜吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/kametchi-kametchi-paradise-png_6f231b08.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Kametchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Glide"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Glide",
        "evolvesFrom": "Glide Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Glide",
        "evolvesFrom": "Glide Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "kanokotchi-kanokotchifaceforward-artwork-png",
    "name": "Kanokotchi",
    "nameZh": "小鹿吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/kanokotchi-kanokotchifaceforward-artwork-png_c367ac88.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/KanokotchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "kawazutchi-kawazutchi-paradise-png",
    "name": "Kawazutchi",
    "nameZh": "雨蛙吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/kawazutchi-kawazutchi-paradise-png_b4e9db2f.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Kawazutchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Leap"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Leap",
        "evolvesFrom": "Leap Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Leap",
        "evolvesFrom": "Leap Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "kiwitchi-kiwitchi-paradise-png",
    "name": "Kiwitchi",
    "nameZh": "奇異吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/kiwitchi-kiwitchi-paradise-png_c272fb4e.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Kiwitchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Chirp"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Chirp",
        "evolvesFrom": "Chirp Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "konkotchi-konkotchifaceforward-artwork-png",
    "name": "Konkotchi",
    "nameZh": "狐狐吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/konkotchi-konkotchifaceforward-artwork-png_19f620b8.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/KonkotchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "kuchipatchi-kuchipatchi-paradise-png",
    "name": "Kuchipatchi",
    "nameZh": "大嘴吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/kuchipatchi-kuchipatchi-paradise-png_7beecf09.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Kuchipatchi_paradise.png",
    "fields": [
      "Sky",
      "Forest"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Chirp"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Chirp",
        "evolvesFrom": "Chirp Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Chirp",
        "evolvesFrom": "Chirp Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Chirp",
        "evolvesFrom": "Chirp Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "kuikuitchi-kuikuitchiparadiseartwork-png",
    "name": "Kuikuitchi",
    "nameZh": "食蟻吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/kuikuitchi-kuikuitchiparadiseartwork-png_ffbf0982.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/KuikuitchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Lick"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Lick",
        "evolvesFrom": "Lick Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "kujiratchi-kujiratchi-paradise-png",
    "name": "Kujiratchi",
    "nameZh": "鯨鯨吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/kujiratchi-kujiratchi-paradise-png_87e77b5a.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Kujiratchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Glide"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Glide",
        "evolvesFrom": "Glide Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Glide",
        "evolvesFrom": "Glide Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "kuraratchi-kuraratchi-paradise-png",
    "name": "Kuraratchi",
    "nameZh": "浮浮吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/kuraratchi-kuraratchi-paradise-png_d1dc501f.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Kuraratchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Float"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Float",
        "evolvesFrom": "Float Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Float",
        "evolvesFrom": "Float Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "lemmingtchi-lemmingtchiparadiseartwork-png",
    "name": "Lemmingtchi",
    "nameZh": "旅鼠吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/lemmingtchi-lemmingtchiparadiseartwork-png_03e9e313.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/LemmingtchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "leopatchi-leopatchi-paradise-png",
    "name": "Leopatchi",
    "nameZh": "守宮吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/leopatchi-leopatchi-paradise-png_e70e6b90.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Leopatchi_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Lick"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Lick",
        "evolvesFrom": "Lick Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Lick",
        "evolvesFrom": "Lick Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "lessapantchi-lessapantchifaceforward-artwork-png",
    "name": "Lessapantchi",
    "nameZh": "小熊貓吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/lessapantchi-lessapantchifaceforward-artwork-png_fcdd1527.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/LessapantchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "madillotchi-madillotchiparadiseartwork-png",
    "name": "Madillotchi",
    "nameZh": "犰狳吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/madillotchi-madillotchiparadiseartwork-png_b3c57852.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/MadillotchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "magmatchi-magmatchi-paradise-png",
    "name": "Magmatchi",
    "nameZh": "岩漿吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/magmatchi-magmatchi-paradise-png_bc7f67b6.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Magmatchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Mineral"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Mineral",
        "evolvesFrom": "Mineral Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "mametchi-mametchi-paradise-png",
    "name": "Mametchi",
    "nameZh": "豆丁吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/mametchi-mametchi-paradise-png_c6454ddb.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Mametchi_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "manapatchi-manapatchiparadiseartwork-png",
    "name": "Manapatchi",
    "nameZh": "馬納葉吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/manapatchi-manapatchiparadiseartwork-png_3d9639e8.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/ManapatchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "???"
    ],
    "secret": true,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "???",
        "evolvesFrom": "??? Young",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "連線條件：an Orange Tropics version with two different versions （Young 階段）；不能由 a Tropical Sprout Young 進化",
        "conditionOriginal": "* Connect an Orange Tropics version with two different versions during the Young Stage * Cannot evolve from a Tropical Sprout Young"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "mendakotchi-mendakotchi-paradise-png",
    "name": "Mendakotchi",
    "nameZh": "萌噠吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/mendakotchi-mendakotchi-paradise-png_b867a796.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Mendakotchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Float"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Float",
        "evolvesFrom": "Float Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Float",
        "evolvesFrom": "Float Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "meowtchi-meowtchi-png",
    "name": "Meowtchi",
    "nameZh": "貓貓吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/meowtchi-meowtchi-png_a2ac628f.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Meowtchi.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "mermarintchi-mermarintchi-paradise-png",
    "name": "Mermarintchi",
    "nameZh": "人魚吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/mermarintchi-mermarintchi-paradise-png_de100f07.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Mermarintchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "???"
    ],
    "secret": true,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "???",
        "evolvesFrom": "??? Young",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "連線條件：a Blue Water version with two different versions （Young 階段）；不能由 Float Young 進化",
        "conditionOriginal": "* Connect a Blue Water version with two different versions during the Young Stage * Cannot evolve from Float Young"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "mimitchi-mimitchi-paradise-png",
    "name": "Mimitchi",
    "nameZh": "大耳吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/mimitchi-mimitchi-paradise-png_738f5bd0.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Mimitchi_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "molmotchi-molmotchi-paradise-png",
    "name": "Molmotchi",
    "nameZh": "摩爾吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/molmotchi-molmotchi-paradise-png_b1839640.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Molmotchi_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "mongatchi-mongatchi-paradise-artwork-png",
    "name": "Mongatchi",
    "nameZh": "飛鼠吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/mongatchi-mongatchi-paradise-artwork-png_607af7de.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Mongatchi_Paradise_Artwork.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Flap"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Flap",
        "evolvesFrom": "Flap Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "moosetchi-moosetchiparadiseartwork-png",
    "name": "Moosetchi",
    "nameZh": "駝鹿吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/moosetchi-moosetchiparadiseartwork-png_7fe2cc9c.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/MoosetchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "namakemotchi-namakemotchiparadiseartwork-png",
    "name": "Namakemotchi",
    "nameZh": "樹懶吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/namakemotchi-namakemotchiparadiseartwork-png_887ed055.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/NamakemotchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "nappatchi-nappatchifaceforward-png",
    "name": "Nappatchi",
    "nameZh": "菜葉吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/nappatchi-nappatchifaceforward-png_523122ab.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/NappatchiFaceForward.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "nerinetchi-nerinetchiparadiseartwork-png",
    "name": "Nerinetchi",
    "nameZh": "海天使吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/nerinetchi-nerinetchiparadiseartwork-png_7852952d.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/NerinetchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Float"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Float",
        "evolvesFrom": "Float Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "okojotchi-okojotchiparadiseartwork-png",
    "name": "Okojotchi",
    "nameZh": "雪貂吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/okojotchi-okojotchiparadiseartwork-png_ae6cadf8.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/OkojotchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "oretatchi-oretatchi-paradise-png",
    "name": "Oretatchi",
    "nameZh": "礦石吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/oretatchi-oretatchi-paradise-png_cb89e7a0.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Oretatchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Mineral"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Mineral",
        "evolvesFrom": "Mineral Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "otototchi-otototchi-paradise-png",
    "name": "Otototchi",
    "nameZh": "海馬吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/otototchi-otototchi-paradise-png_07d33623.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Otototchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Paddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Paddle",
        "evolvesFrom": "Paddle Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Paddle",
        "evolvesFrom": "Paddle Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "panbootchi-panbootchifaceforward-artwork-png",
    "name": "Panbootchi",
    "nameZh": "熊貓豬吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/panbootchi-panbootchifaceforward-artwork-png_fefefb66.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/PanbootchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "papillotchi-papillotchi-paradise-png",
    "name": "Papillotchi",
    "nameZh": "蝶蝶吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/papillotchi-papillotchi-paradise-png_080a6cc8.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Papillotchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Flutter"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Flutter",
        "evolvesFrom": "Flutter Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "parorotchi-parorotchiparadiseartwork-png",
    "name": "Parorotchi",
    "nameZh": "鸚鵡吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/parorotchi-parorotchiparadiseartwork-png_7045005d.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/ParorotchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "peacotchi-peacotchi-paradise-png",
    "name": "Peacotchi",
    "nameZh": "孔雀吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/peacotchi-peacotchi-paradise-png_9bcb13fc.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Peacotchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Chirp"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Chirp",
        "evolvesFrom": "Chirp Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "peatchi-peatchifaceforward-artwork-png",
    "name": "Peatchi",
    "nameZh": "桃桃吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/peatchi-peatchifaceforward-artwork-png_3f068c8c.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/PeatchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "pochitchi-pochitchi-paradise-png",
    "name": "Pochitchi",
    "nameZh": "波吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/pochitchi-pochitchi-paradise-png_fdc3e0d6.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Pochitchi_(Paradise).png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "poizutchi-poizutchiparadiseartwork-png",
    "name": "Poizutchi",
    "nameZh": "箭蛙吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/poizutchi-poizutchiparadiseartwork-png_004c2e7e.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/PoizutchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Lick"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Lick",
        "evolvesFrom": "Lick Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "polakumatchi-polakumatchiparadiseartwork-png",
    "name": "Polakumatchi",
    "nameZh": "冰熊吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/polakumatchi-polakumatchiparadiseartwork-png_fd5c3530.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/PolakumatchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "potsunentchi-potsunentchi-paradise-png",
    "name": "Potsunentchi",
    "nameZh": "一朵吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/potsunentchi-potsunentchi-paradise-png_7d5d0658.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Potsunentchi_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "raichotchi-raichotchiparadiseartwork-png",
    "name": "Raichotchi",
    "nameZh": "雷鳥吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/raichotchi-raichotchiparadiseartwork-png_055f17cc.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/RaichotchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "rakkotchi-rakkotchiparadiseartwork-png",
    "name": "Rakkotchi",
    "nameZh": "海獺吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/rakkotchi-rakkotchiparadiseartwork-png_406433ca.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/RakkotchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Glide"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Glide",
        "evolvesFrom": "Glide Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "ratchi-ratchi-paradise-png",
    "name": "Ratchi",
    "nameZh": "樂樂吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/ratchi-ratchi-paradise-png_a452f0e0.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Ratchi_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "rushraditchi-rushraditchifaceforward-artwork-png",
    "name": "Rushraditchi",
    "nameZh": "跑蘿吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/rushraditchi-rushraditchifaceforward-artwork-png_ade2b49a.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/RushraditchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "sebiretchi-sebiretchi-paradise-png",
    "name": "Sebiretchi",
    "nameZh": "龍崽吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/sebiretchi-sebiretchi-paradise-png_c6d0e28a.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Sebiretchi_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Lick"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Lick",
        "evolvesFrom": "Lick Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Lick",
        "evolvesFrom": "Lick Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "sharktchi-sharktchi-paradise-png",
    "name": "Sharktchi",
    "nameZh": "鯊魚吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/sharktchi-sharktchi-paradise-png_14233c42.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Sharktchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Paddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Paddle",
        "evolvesFrom": "Paddle Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Paddle",
        "evolvesFrom": "Paddle Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "sheeptchi-sheeptchi-paradise-png",
    "name": "Sheeptchi",
    "nameZh": "咩咩吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/sheeptchi-sheeptchi-paradise-png_a84d6028.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Sheeptchi_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "shigemi-san-shigemisan-paradise-png",
    "name": "Shigemi-san",
    "nameZh": "灌木吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/shigemi-san-shigemisan-paradise-png_8a280b43.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Shigemisan_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "shiitaketchi-shitaketchifaceforward-artwork-png",
    "name": "Shiitaketchi",
    "nameZh": "香菇吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/shiitaketchi-shitaketchifaceforward-artwork-png_1ee0fe19.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/ShitaketchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "sparrotchi-sparrotchifaceforward-artwork-png",
    "name": "Sparrotchi",
    "nameZh": "麻雀吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/sparrotchi-sparrotchifaceforward-artwork-png_53528e12.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/SparrotchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Chirp"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Chirp",
        "evolvesFrom": "Chirp Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Chirp",
        "evolvesFrom": "Chirp Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "suigyutchi-sugyutchifaceforward-artwork-png",
    "name": "Suigyutchi",
    "nameZh": "水牛吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/suigyutchi-sugyutchifaceforward-artwork-png_60236b31.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/SugyutchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "tachutchi-tachutchi-paradise-png",
    "name": "Tachutchi",
    "nameZh": "足足吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/tachutchi-tachutchi-paradise-png_1d44735b.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Tachutchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Paddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Paddle",
        "evolvesFrom": "Paddle Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Paddle",
        "evolvesFrom": "Paddle Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "tanoontchi-tanoontchifaceforward-artwork-png",
    "name": "Tanoontchi",
    "nameZh": "狸貓吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/tanoontchi-tanoontchifaceforward-artwork-png_fd50151e.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/TanoontchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "tarantytchi-tarantytchiparadiseartwork-png",
    "name": "Tarantytchi",
    "nameZh": "塔蘭托吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/tarantytchi-tarantytchiparadiseartwork-png_a3541e5c.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/TarantytchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "tatsutchi-tatsutchi-front-facing-artwork-png",
    "name": "Tatsutchi",
    "nameZh": "立龍吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/tatsutchi-tatsutchi-front-facing-artwork-png_619a028a.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Tatsutchi_Front-Facing_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest"
    ],
    "species": [
      "???"
    ],
    "secret": true,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "???",
        "evolvesFrom": "??? Young",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "連線條件：a Jade Forest version with two different versions （Young 階段）；不能由 a Forest Sprout Young 進化",
        "conditionOriginal": "* Connect a Jade Forest version with two different versions during the Young Stage * Cannot evolve from a Forest Sprout Young"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "tenatchi-tenatchiparadiseartwork-png",
    "name": "Tenatchi",
    "nameZh": "長臂吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/tenatchi-tenatchiparadiseartwork-png_2a902703.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/TenatchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "tentotchi-tentotchi-paradise-png",
    "name": "Tentotchi",
    "nameZh": "小瓢吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/tentotchi-tentotchi-paradise-png_f90d583a.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Tentotchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "Flutter"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "Flutter",
        "evolvesFrom": "Flutter Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "tigaotchi-tigaotchifaceforward-artwork-png",
    "name": "Tigaotchi",
    "nameZh": "老虎吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/tigaotchi-tigaotchifaceforward-artwork-png_a9734d4b.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/TigaotchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "tokipatchi-tokipatchifaceforward-artwork-png",
    "name": "Tokipatchi",
    "nameZh": "朱鷺吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/tokipatchi-tokipatchifaceforward-artwork-png_9a693be0.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/TokipatchiFaceForward_Artwork.png",
    "fields": [
      "Forest"
    ],
    "versions": [
      "Jade Forest",
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Chirp"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Jade Forest",
        "field": "Forest",
        "species": "Chirp",
        "evolvesFrom": "Chirp Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      },
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Forest",
        "species": "Chirp",
        "evolvesFrom": "Chirp Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "tropical-mametchi-tropicalmametchiparadiseartwork-png",
    "name": "Tropical Mametchi",
    "nameZh": "南方豆丁吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/tropical-mametchi-tropicalmametchiparadiseartwork-png_d4c1f62f.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/TropicalMametchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "tropical-meowtchi-tropicalmeowtchiparadiseartwork-png",
    "name": "Tropical Meowtchi",
    "nameZh": "南方貓貓吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/tropical-meowtchi-tropicalmeowtchiparadiseartwork-png_00e8c497.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/TropicalMeowtchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "tropical-potsunentchi-tropicalpotsunentchiparadiseartwork-png",
    "name": "Tropical Potsunentchi",
    "nameZh": "南方一朵吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/tropical-potsunentchi-tropicalpotsunentchiparadiseartwork-png_0ad638b2.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/TropicalPotsunentchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "tustustchi-tustustchi-paradise-png",
    "name": "Tustustchi",
    "nameZh": "刺刺吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/tustustchi-tustustchi-paradise-png_8a34167a.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Tustustchi_paradise.png",
    "fields": [
      "Land"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Land",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Land",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "uruotchi-uruotchi-paradise-png",
    "name": "Uruotchi",
    "nameZh": "烏爾吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/uruotchi-uruotchi-paradise-png_f029aca9.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Uruotchi_paradise.png",
    "fields": [
      "Water"
    ],
    "versions": [
      "Land／Water／Sky 原始三版",
      "Jade Forest"
    ],
    "species": [
      "Glide"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Water",
        "species": "Glide",
        "evolvesFrom": "Glide Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      },
      {
        "version": "Jade Forest",
        "field": "Water",
        "species": "Glide",
        "evolvesFrom": "Glide Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "wolftchi-wolftchiparadiseartwork-png",
    "name": "Wolftchi",
    "nameZh": "冰狼吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/wolftchi-wolftchiparadiseartwork-png_4cdee029.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/WolftchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Roar"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Roar",
        "evolvesFrom": "Roar Young",
        "careMistakes": "0-1 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "0-1 次照顧失誤",
        "conditionOriginal": "* 0-1 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "yashikitchi-yashikitchiparadiseartwork-png",
    "name": "Yashikitchi",
    "nameZh": "椰樹吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/yashikitchi-yashikitchiparadiseartwork-png_d455ea5c.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/YashikitchiParadiseArtwork.png",
    "fields": [
      "Tropical"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Sprout"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Tropical",
        "species": "Sprout",
        "evolvesFrom": "Sprout Young",
        "careMistakes": "0 次照顧失誤",
        "perfectCare": true,
        "conditionZh": "0 次照顧失誤；飢餓與快樂量表各補滿至少 5 次",
        "conditionOriginal": "* 0 care mistakes * Fill Hunger and Happy meters 5+ times each"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "yayacorntchi-yayacorntchi-paradise-png",
    "name": "Yayacorntchi",
    "nameZh": "獨角吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/yayacorntchi-yayacorntchi-paradise-png_ac75295f.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/Yayacorntchi_paradise.png",
    "fields": [
      "Sky"
    ],
    "versions": [
      "Land／Water／Sky 原始三版"
    ],
    "species": [
      "???"
    ],
    "secret": true,
    "variants": [
      {
        "version": "Land／Water／Sky 原始三版",
        "field": "Sky",
        "species": "???",
        "evolvesFrom": "??? Young",
        "careMistakes": "特殊條件",
        "perfectCare": false,
        "conditionZh": "連線條件：a Purple Sky version with two different versions （Young 階段）；不能由 Rocky Young 進化",
        "conditionOriginal": "* Connect a Purple Sky version with two different versions during the Young Stage * Cannot evolve from Rocky Young"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "yaytytchi-yaytytchiparadiseartwork-png",
    "name": "Yaytytchi",
    "nameZh": "雪蟹吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/yaytytchi-yaytytchiparadiseartwork-png_3898a93c.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/YaytytchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Float"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Float",
        "evolvesFrom": "Float Young",
        "careMistakes": "2-5 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "2-5 次照顧失誤",
        "conditionOriginal": "* 2-5 care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "yukiraratchi-yukiraratchiparadiseartwork-png",
    "name": "Yukiraratchi",
    "nameZh": "雪晶吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/yukiraratchi-yukiraratchiparadiseartwork-png_043a2342.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/YukiraratchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Float"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Float",
        "evolvesFrom": "Float Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  },
  {
    "id": "yukiusatchi-yukiusatchiparadiseartwork-png",
    "name": "Yukiusatchi",
    "nameZh": "雪兔吉",
    "nameBasis": "user_chart",
    "stage": "Adult",
    "artwork": "/manus-storage/yukiusatchi-yukiusatchiparadiseartwork-png_a15a02eb.png",
    "artworkSource": "https://tamagotchi.fandom.com/wiki/Special:Redirect/file/YukiusatchiParadiseArtwork.png",
    "fields": [
      "Ice"
    ],
    "versions": [
      "Orange Tropics／White Glacier"
    ],
    "species": [
      "Toddle"
    ],
    "secret": false,
    "variants": [
      {
        "version": "Orange Tropics／White Glacier",
        "field": "Ice",
        "species": "Toddle",
        "evolvesFrom": "Toddle Young",
        "careMistakes": "6+ 次照顧失誤",
        "perfectCare": false,
        "conditionZh": "6+ 次照顧失誤",
        "conditionOriginal": "* 6+ care mistakes"
      }
    ],
    "sourceUrl": "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list"
  }
];

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
  visibleForms: 133,
  uniqueNames: 121,
  localizedForms: 133,
  stages: { Baby: 1, Kid: 6, Young: 24, Adult: 102 },
  sourceUrl: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list",
};
