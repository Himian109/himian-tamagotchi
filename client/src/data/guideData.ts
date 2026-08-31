/**
 * 口袋星球圖鑑：資料層以「先找答案、再探索」為原則，所有攻略條目保留來源與版本限制。
 */

export type SourceInfo = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  level: "官方" | "社群整理" | "玩家實測";
};

export type GuideSection = {
  id: string;
  category: string;
  eyebrow: string;
  title: string;
  summary: string;
  points: string[];
  tip?: string;
  caution?: string;
  sources: string[];
};

export type CodeEntry = {
  name: string;
  code: string;
  type: "Lab Code" | "食物" | "點心" | "戶外玩具" | "星球裝飾";
  version: string;
};

export const assets = {
  hero: "/manus-storage/himian-tamagotchi-hero_dbedba01.png",
  fields: "/manus-storage/himian-tamagotchi-fields_29925e9b.png",
  evolution: "/manus-storage/himian-tamagotchi-evolution_1789ba41.png",
  connection: "/manus-storage/himian-tamagotchi-connection_722d005c.png",
  logo: "/manus-storage/himian-tamagotchi-logo_b4345249.png",
};

export const sources: SourceInfo[] = [
  {
    id: "official-howto",
    title: "How to Play｜Tamagotchi Paradise",
    publisher: "Tamagotchi 官方網站",
    url: "https://tamagotchi-official.com/us/series/paradise/howto/",
    level: "官方",
  },
  {
    id: "official-faq",
    title: "Tamagotchi Paradise FAQ",
    publisher: "Tamagotchi 官方網站",
    url: "https://tamagotchi-official.com/us/series/paradise/faq/",
    level: "官方",
  },
  {
    id: "official-manual",
    title: "Tamagotchi Paradise 日文電子說明書",
    publisher: "BANDAI",
    url: "https://tamagotchi-official.com/manual/toy/paradise/paradise_web_manual_IS_JP.pdf",
    level: "官方",
  },
  {
    id: "official-code",
    title: "【たまラボ研究記録】アイテムコードパラダイス",
    publisher: "Tamagotchi 官方網站",
    url: "https://tamagotchi-official.com/jp/series/paradise/news/01_1142/",
    level: "官方",
  },
  {
    id: "wiki-main",
    title: "Tamagotchi Paradise",
    publisher: "Tamagotchi Wiki",
    url: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise",
    level: "社群整理",
  },
  {
    id: "wiki-characters",
    title: "Tamagotchi Paradise Character List",
    publisher: "Tamagotchi Wiki",
    url: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Character_list",
    level: "社群整理",
  },
  {
    id: "wiki-unlocks",
    title: "Unlocks and Missions",
    publisher: "Tamagotchi Wiki",
    url: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/Unlocks_and_Missions",
    level: "社群整理",
  },
  {
    id: "wiki-codes",
    title: "List of Codes",
    publisher: "Tamagotchi Wiki",
    url: "https://tamagotchi.fandom.com/wiki/Tamagotchi_Paradise/List_of_Codes",
    level: "社群整理",
  },
  {
    id: "tamapara",
    title: "たまごっちパラダイス完全攻略wiki",
    publisher: "日文玩家攻略站",
    url: "https://tamapara-wiki.com/",
    level: "社群整理",
  },
  {
    id: "ign-codes",
    title: "Tamagotchi Paradise Codes List",
    publisher: "IGN",
    url: "https://www.ign.com/wikis/tamagotchi-paradise/Tamagotchi_Paradise_Codes_List_(and_How_to_Redeem)",
    level: "社群整理",
  },
];

export const quickFacts = [
  { value: "4 層", label: "Zoom Dial 觀察尺度" },
  { value: "6 種", label: "目前主要機身版本" },
  { value: "10 級", label: "星球最高等級" },
  { value: "50,000+", label: "Breeding 外觀組合" },
];

export const categories = [
  { id: "start", label: "新手起步", glyph: "01" },
  { id: "care", label: "日常照顧", glyph: "02" },
  { id: "growth", label: "成長進化", glyph: "03" },
  { id: "fields", label: "場地版本", glyph: "04" },
  { id: "planet", label: "星球解鎖", glyph: "05" },
  { id: "breed", label: "連線繁殖", glyph: "06" },
  { id: "games", label: "遊戲道具", glyph: "07" },
  { id: "codes", label: "代碼大全", glyph: "08" },
];

export const guideSections: GuideSection[] = [
  {
    id: "start",
    category: "新手起步",
    eyebrow: "START HERE",
    title: "開機後的第一顆星球",
    summary:
      "裝入 2 顆 AAA 鹼性電池，依序設定語言、日期時間與生日；完成 Egg Bang 後，你的 New Tamagotchi Planet 正式誕生。",
    points: [
      "A 鍵負責移動／選擇，B 鍵確認，C 鍵取消／返回；Zoom Dial 可旋轉縮放，中央也可按下或長按。",
      "語言共有 9 種，含簡體中文但不含繁體中文；首次選定後若要更改，必須重置裝置。",
      "長按 Zoom Dial 可開啟 Lab Mode；聲音、亮度、日期時間都在 SETTINGS 內調整。",
      "官方建議使用鹼性電池；裝置不防水，也不具防潑水能力。",
    ],
    tip: "第一次玩先把日期與時間設準，睡眠、每日 Egg Hunt、商店折扣都會受裝置時間影響。",
    sources: ["official-manual", "official-faq"],
  },
  {
    id: "zoom",
    category: "新手起步",
    eyebrow: "ZOOM DIAL",
    title: "四層縮放各自做什麼？",
    summary: "Paradise 的核心不是單一寵物畫面，而是從宇宙一路放大到細胞。",
    points: [
      "TAMA SPACE：看時間、連線、Tama Stars、裝飾星球、太空旅行與 Planet Level。",
      "TAMA FIELD：切換場地、放置戶外玩具、Egg Hunt、清理便便。",
      "TAMA：餵食、玩耍、洗澡，處理大部分日常照顧。",
      "TAMA CELL：檢查場地細胞、食物細胞、Care Mistakes 與疾病，並治療病毒。",
    ],
    sources: ["official-howto", "official-manual", "wiki-main"],
  },
  {
    id: "care",
    category: "日常照顧",
    eyebrow: "DAILY CARE",
    title: "每天優先處理的六件事",
    summary: "飽足、心情、便便、髒污、疾病與睡眠，是最常影響成長結果的照顧項目。",
    points: [
      "正餐補飽足；點心或 Play 小遊戲補心情。特定食物還會改變 Young 階段的物種分支。",
      "Field 畫面的便便可清理成 Biofuel，供後續 Space Travel 使用；放置太久變深色的便便不會轉成燃料。",
      "身體變髒時，在 TAMA 畫面使用清潔功能洗澡。",
      "生病時縮放到 TAMA CELL，用按鍵或轉盤擊退包圍細胞的病毒。",
      "19:00–21:59 可手動哄睡，06:00–09:59 可手動叫醒；之後會自動睡／醒。",
      "需暫離時可用 Lab Mode → HELP → Tama Sitter，花費 300G 托育至 19:00。",
    ],
    caution: "睡眠時段與部分疾病機率來自社群拆解／實測；若日後韌體或新版機身有差異，請以裝置顯示為準。",
    sources: ["official-howto", "official-faq", "wiki-characters"],
  },
  {
    id: "growth",
    category: "成長進化",
    eyebrow: "GROWTH ROUTE",
    title: "蛋 → Baby → Kid → Young → Adult",
    summary: "進化不是只看照顧好壞：場地、飲食細胞與 Care Mistake 會在不同階段一起決定結果。",
    points: [
      "Baby 約 1–4 小時。每在同一場地約 15 分鐘取得 1 個 Field Cell，累積 4 個同類型後可觸發 Kid 進化。",
      "Kid 約 24–28 小時；此階段的主要食物類型會決定 Young 的物種分支。",
      "Young 約 24 小時；Adult 的結果由 Young 物種、累積 Care Mistakes，以及是否完成完美照顧條件決定。",
      "Care Mistake：寵物呼叫注意後，15 分鐘內沒有處理飢餓、低心情或疾病，即記 1 次。Kid 開始累積至 Young，不會在進化時歸零。",
      "完美照顧通常要求 0 次失誤，並在 Young 階段把飽足與心情各補滿至少 5 次；可在 Cell View 看飯糰與太陽圖示。",
    ],
    tip: "想指定角色時，先鎖定『機身版本 → 場地 → Kid 飲食 → Young 照顧失誤』四個條件，再開始養。",
    sources: ["wiki-characters", "tamapara"],
  },
  {
    id: "fields",
    category: "場地版本",
    eyebrow: "TAMA FIELDS",
    title: "機身顏色決定可用場地",
    summary: "每台都能解鎖三個場地，但六種版本的場地組合與專屬稀有角色不同。",
    points: [
      "原始三版：Pink Land、Blue Water、Purple Sky，共用 Land／Water／Sky，只是初始與解鎖順序不同。",
      "Jade Forest：以 Forest 取代 Sky，可遊玩 Forest／Land／Water。",
      "Orange Tropics 與 White Glacier：可遊玩 Tropical／Ice／Forest，並加入場地擴充與連線遊戲。",
      "每個機身顏色各有一隻只能在該版本預設場地養成的稀有角色。",
    ],
    caution: "即使跨機連線與遺傳，仍不能突破自己機身所支援的場地角色範圍。",
    sources: ["official-faq", "wiki-main", "tamapara"],
  },
  {
    id: "planet",
    category: "星球解鎖",
    eyebrow: "PLANET LEVEL",
    title: "星球最高 Level 10",
    summary: "角色成長推動星球升級；場地、商店、料理、旅行與難度會逐步開放。",
    points: [
      "Level 1：養出第一隻 Kid，開放食物／點心與初階 Lab Mini Games。",
      "Level 2：養出第一隻 Young，開放戶外玩具。",
      "Level 3：養出第一隻 Adult，開放 Breed 與 New Egg；新版機身也會提早開放更多 Lab 功能。",
      "Level 4：進入下一世代，開放第二場地與更多小遊戲。",
      "Level 6：原始三版開放第三場地、Space Travel、星球裝飾、販售與中等難度。",
      "Level 10：完成星球培育；Tropics／Glacier 可用 10,000G 永久擴充單一場地容量。",
    ],
    caution: "Jade Forest 與 Tropics／Glacier 的部分解鎖時點不同，網站的等級表可切換版本查看。",
    sources: ["wiki-unlocks", "wiki-main"],
  },
  {
    id: "breed",
    category: "連線繁殖",
    eyebrow: "BREEDING",
    title: "單機也能 Breed，雙機可遺傳",
    summary: "不必購買第二台才能進入下一代；雙機連線的主要價值是 Playdate、送禮與外觀遺傳。",
    points: [
      "單機：長按 Zoom Dial → HELP → NEW TAMA → BREED，從目前場地的候選角色中配對；每天最多嘗試 3 次。",
      "雙機：掀開上蓋連接兩台 Paradise，可 Playdate、交換物品或進行繁殖。",
      "遺傳主要影響眼睛與身體顏色；新角色的身體仍由下一代的場地、飲食與照顧方式決定。",
      "所有 Paradise 顏色版本可互連，但不能與 Uni、Original 或 Connection 等舊機型連線。",
      "選 New Egg 會開始沒有遺傳的新蛋；舊角色會離開目前養成位置。",
    ],
    sources: ["official-faq", "wiki-main"],
  },
  {
    id: "games",
    category: "遊戲道具",
    eyebrow: "GAMES & ITEMS",
    title: "Play 補心情，Mini Games 賺錢",
    summary: "兩種遊戲的用途不同；商店解鎖等級也不同，先知道目的能省下很多時間。",
    points: [
      "TAMA 畫面的 Play 類遊戲會增加心情，但不給 Gotchi Points。",
      "Lab Mode 的 Mini Games 用來賺 Gotchi Points，不增加心情，而且寵物睡覺時也能玩。",
      "Egg Hunt 每隻參與角色每天可進行一次，取得會影響成長的場地食物；完全成功需收集 9 顆蛋。",
      "食物／點心於 Level 1 開放，戶外玩具 Level 2，原始三版的星球裝飾 Level 6。",
      "商店固定折扣日：每月 5、15、25 日食物／點心半價；10、20、30 日戶外玩具／裝飾半價。",
    ],
    sources: ["wiki-main", "wiki-unlocks"],
  },
  {
    id: "codes",
    category: "代碼大全",
    eyebrow: "CODE LIBRARY",
    title: "Shop Code 與 Lab Code 不一樣",
    summary: "Shop Code 解鎖商店購買權；Lab Code 解鎖角色細胞與進化提示。本站已整理成可搜尋、可複製的代碼庫。",
    points: [
      "Shop Code：Lab Mode → SHOP → SHOP CODE。輸入後仍要花 Gotchi Points 購買。",
      "Lab Code：Lab Mode → LAB LOG → MICROSCOPE → LAB CODE。可查看角色 Cell 與養成提示。",
      "官方 FAQ 表示兩種代碼都能重複使用，亦可輸入多台裝置。",
      "Jade、Tropics、Glacier 新角色或新物品的代碼可能只支援對應新版機身。",
    ],
    sources: ["official-faq", "official-code", "wiki-codes", "ign-codes", "tamapara"],
  },
];

export const versionRows = [
  { shell: "Pink Land", start: "Land", fields: "Land → Water → Sky", rare: "Chodracotchi", note: "原始版" },
  { shell: "Blue Water", start: "Water", fields: "Water → Sky → Land", rare: "Mermarintchi", note: "原始版" },
  { shell: "Purple Sky", start: "Sky", fields: "Sky → Land → Water", rare: "Yayacorntchi", note: "原始版" },
  { shell: "Jade Forest", start: "Forest", fields: "Forest → Land → Water", rare: "Tatsutchi", note: "無 Sky" },
  { shell: "Orange Tropics", start: "Tropical", fields: "Tropical → Ice → Forest", rare: "Manapatchi", note: "新版功能" },
  { shell: "White Glacier", start: "Ice", fields: "Ice → Tropical → Forest", rare: "Hobohorntchi", note: "新版功能" },
];

export const fieldBranches = [
  { field: "Land", color: "coral", cell: "葉片", routes: "Meat → Roar｜Carrot → Toddle｜Worm → Lick｜無明顯傾向 → Sprout" },
  { field: "Water", color: "sky", cell: "氣泡", routes: "Seafood → Glide｜Seaweed → Leap｜Plankton → Paddle｜無明顯傾向 → Float" },
  { field: "Sky", color: "yellow", cell: "雲朵", routes: "Chicken → Flap｜Corn → Chirp｜Honey → Bumble｜無明顯傾向 → Rocky" },
  { field: "Forest", color: "mint", cell: "竹葉", routes: "Peking Meat／Bamboo Grass／Pomegranate 決定三條主要 Young 分支" },
  { field: "Tropical", color: "orange", cell: "熱帶", routes: "Tropics／Glacier 機身專屬；使用熱帶食物細胞決定新版分支" },
  { field: "Ice", color: "ice", cell: "冰晶", routes: "Tropics／Glacier 機身專屬；使用冰原食物細胞決定新版分支" },
];

export const growthStages = [
  { stage: "EGG", zh: "蛋", time: "啟動／換代後", key: "選場地前先確認目標角色需要哪個版本。" },
  { stage: "BABY", zh: "嬰兒", time: "約 1–4 小時", key: "同一 Field 約每 15 分鐘累積 1 個場地細胞；4 個可觸發進化。" },
  { stage: "KID", zh: "兒童", time: "約 24–28 小時", key: "集中餵目標食物類型，建立食物細胞多數。" },
  { stage: "YOUNG", zh: "青年", time: "約 24 小時", key: "開始精準控制 Care Mistakes；完美線要各補滿飽足／心情 5 次。" },
  { stage: "ADULT", zh: "成年", time: "無固定上限", key: "可持續生活、Breed、連線繁殖或開始 New Egg。" },
];

export const planetLevels = [
  { level: 1, goal: "第一隻 Kid", unlock: "食物、點心、初階 Mini Games" },
  { level: 2, goal: "第一隻 Young", unlock: "戶外玩具" },
  { level: 3, goal: "第一隻 Adult", unlock: "Breed、New Egg；新版機身另開料理／旅行等" },
  { level: 4, goal: "開始下一世代", unlock: "第二場地、追加 Mini Games" },
  { level: 5, goal: "首次切換場地", unlock: "原始三版開放料理；新版開新旅行星球" },
  { level: 6, goal: "第二隻 Adult／新版再換代", unlock: "第三場地；原始三版開旅行、裝飾與販售" },
  { level: 7, goal: "持續養成", unlock: "追加旅行星球與特殊點心" },
  { level: 8, goal: "持續養成", unlock: "追加旅行星球、顏色果汁" },
  { level: 9, goal: "持續養成", unlock: "Mini Games 困難難度" },
  { level: 10, goal: "完成星球培育", unlock: "Credits；新版可花 10,000G 擴充場地" },
];

const makeCodes = (
  type: CodeEntry["type"],
  version: string,
  values: Array<[string, string]>,
): CodeEntry[] => values.map(([name, code]) => ({ name, code: code.replace(/\s/g, ""), type, version }));

export const codeEntries: CodeEntry[] = [
  ...makeCodes("Lab Code", "全版本", [
    ["Meowtchi／みゃおっち", "4RG8 9EWK"], ["Irukatchi／いるかっち", "XKGD C0FX"],
    ["Horhotchi／ほーほっち", "Y536 U3WA"], ["Mongatchi／もんがっち", "4S4G L6QN"],
    ["Furawatchi／ふらわっち", "1EWR 12VQ"], ["Mimitchi／みみっち", "L5B4 RUHL"],
    ["Pochitchi／ポチっち", "487V 6CAU"], ["Axolopatchi／あほろぱっち", "LW5J HHDB"],
    ["Mametchi／まめっち", "K04B 787H"], ["Kawazutchi／かわずっち", "8E6X EDXR"],
  ]),
  ...makeCodes("Lab Code", "Jade／Tropics／Glacier", [
    ["Tokipatchi／ときぱっち", "02UX R90S"], ["Kanokotchi／かのこっち", "4Y8E CKXP"],
    ["Shiitaketchi／しいたけっち", "E1F7 9X8P"],
  ]),
  ...makeCodes("Lab Code", "Tropics／Glacier", [
    ["Tropical Meowtchi", "4AEX 49V8"], ["Parorotchi", "WN9Q 7X85"],
    ["Poizutchi", "2WBR UA3H"], ["Icy Irukatchi", "TF8C 4XG3"],
    ["Okojotchi", "V5A0 EP28"], ["Ginjirotchi", "HCF8 K432"],
  ]),
  ...makeCodes("食物", "全版本", [
    ["Tacos 墨西哥餅", "5368 4743"], ["Black & White Burger", "5685 2210"],
    ["Black & White Pie", "9538 0547"], ["Black & White Bread", "6398 4717"],
    ["Bread 麵包", "1916 2952"], ["Cup Noodles 杯麵", "7532 4651"],
    ["Paella 西班牙燉飯", "5417 5498"], ["Pasta 義大利麵", "8592 6587"],
    ["Pizza 披薩", "7616 9252"], ["Rice Bowl 丼飯", "7021 5275"],
    ["Sandwich 三明治", "9209 3485"], ["Curry Rice 咖哩飯", "3935 7133"],
    ["Dumplings 餃子", "0240 7725"], ["Fried Chicken 炸雞", "9635 9340"],
    ["French Fries 薯條", "9758 7690"], ["Hamburg Steak 漢堡排", "3673 6895"],
    ["Hamburger 漢堡", "5095 1756"], ["Sushi 壽司", "7296 8763"],
    ["Takoyaki 章魚燒", "0258 4861"], ["Udon 烏龍麵", "5348 6788"],
    ["Ramen 拉麵", "7485 8354"], ["BBQ 燒烤", "8136 4378"],
  ]),
  ...makeCodes("點心", "全版本", [
    ["Pari Pari Bar", "1739 0274"], ["Yukinoyado 雪之宿", "7541 7953"],
    ["Bolo 小饅頭", "1792 8690"], ["Gummies 軟糖", "2967 1239"],
    ["Coffee 咖啡", "4162 4803"], ["Chocolate 巧克力", "2505 8016"],
    ["Soft Serve 霜淇淋", "3060 1026"], ["Marshmallow 棉花糖", "8043 5034"],
    ["Cake 蛋糕", "0239 5469"], ["Wafers 威化餅", "9878 3729"],
    ["Pudding 布丁", "4780 5804"], ["Cookie 餅乾", "5248 3361"],
    ["Crepe 可麗餅", "7526 1293"], ["Cotton Candy 棉花糖", "6795 3812"],
    ["Galette 法式薄餅", "3663 6746"], ["Donut 甜甜圈", "7573 6382"],
    ["Soda Candy 彈珠糖", "6521 9015"], ["Rice Cakes 團子", "2657 0348"],
    ["Yogurt 優格", "5765 3319"], ["Ice Cream 冰淇淋", "4710 0986"],
    ["Juice 果汁", "6852 7046"], ["Snack Cup 杯裝點心", "1093 7314"],
    ["Drink 飲料", "9813 9310"], ["Taitchiyaki 鯛魚燒", "4519 6041"],
    ["Sundae 聖代", "6828 4514"], ["Potato Chips 洋芋片", "6924 6521"],
    ["Candy 糖果", "2829 6085"], ["Gum 口香糖", "6950 1027"],
  ]),
  ...makeCodes("點心", "Tropics／Glacier", [["Mixed Soft Serve 雙色霜淇淋", "5463 8572"]]),
  ...makeCodes("星球裝飾", "全版本", [
    ["Shooting Star Headband", "5961 4767"], ["Tama Pouch", "9491 6269"],
    ["Tama Backpack", "7835 7605"], ["Irukatchi Hat", "4674 6507"],
    ["Horhotchi Wing", "1485 3045"], ["Meowtchi Headband", "9161 0708"],
    ["Planet Ring", "5053 6071"], ["Lovely Ribbon", "2098 6445"],
    ["Academic Cap", "0401 5149"], ["Horns Headband", "4210 7325"],
    ["Tama Chinese Hat", "3769 1894"], ["Lantern", "8301 2792"],
    ["Kuchipatchi Plush", "0502 3839"], ["Meowtchi Plush", "4328 0105"],
    ["Irukatchi Plush", "5374 1858"], ["Horhotchi Plush", "5056 3689"],
    ["Candy Cane", "6262 4154"], ["White Chocolate Mascot", "7362 9358"],
    ["Cell Phone", "5643 9089"], ["Leaf Crown", "1755 6258"],
    ["JINS Glasses", "6470 3405"], ["Mametchi Plush", "6852 7158"],
    ["Mushroom Hat", "7359 5649"], ["Babymarutchi Plush", "3751 9184"],
    ["Chef Hat", "9324 6348"], ["Plum Blossom Ornament", "4875 3308"],
    ["Rainbow Afro", "4079 6739"], ["Handy Rocket", "9425 7857"],
    ["Light Stick", "1085 4756"], ["Sombrero", "7859 4810"],
    ["Balloons", "3679 5645"], ["Mt. Fuji Hat", "0959 7972"],
  ]),
  ...makeCodes("星球裝飾", "Tropics／Glacier", [
    ["Sleepy Friend Headband", "4705 8763"], ["Colorful Wing", "6410 7201"],
  ]),
  ...makeCodes("戶外玩具", "全版本", [
    ["Tamaverse Object", "2105 2853"], ["Prince Tamahiko's UFO", "3560 6107"],
    ["Umahiko Outside Toy", "2852 0716"], ["Tamagotchi Plushes", "3467 1317"],
    ["Gashapon Machine", "7547 4286"], ["Bathtub", "1725 4563"],
    ["Magazine", "1526 5021"], ["Pen", "6385 4658"],
    ["Christmas Tree", "0567 2512"], ["Cradle", "4598 0305"],
    ["Hamburger Cushion", "4819 2569"], ["Lantern", "8301 2792"],
    ["Standing Mic", "7432 1867"], ["Swing", "1735 1549"],
    ["Shopping Cart", "4128 2659"], ["Shopping Basket", "4712 0784"],
    ["Crane Game", "0787 9620"], ["Book", "4561 9639"],
    ["Manga", "4958 3258"], ["Train", "8291 5952"],
    ["T-Shirt", "0457 9676"], ["Toy Piano", "1395 0475"],
    ["Slide", "6573 0795"], ["Bus", "0584 6935"],
    ["Jack-in-the-Box", "3807 2809"],
  ]),
];

export const dailyChecklist = [
  "確認飽足與心情，不只餵點心",
  "清理 Field 便便並累積 Biofuel",
  "身體髒污時幫寵物洗澡",
  "看到注意提示後 15 分鐘內處理",
  "生病時進 Cell View 擊退病毒",
  "規劃食物細胞，避免誤入其他進化線",
];

export const lastVerified = "2026-08-29";
