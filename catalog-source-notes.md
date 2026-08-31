# Tamagotchi Paradise 角色圖鑑來源紀錄

查核日期：2026-08-29

Tamagotchi Wiki 的原始 wikitext 可由 MediaWiki API 取得，包含角色名稱、Artwork 檔名、Field Sprite、Tama Sprite、需求下降速度與 Obtaining 條件。此 API 應作為英文角色名稱與條件的主要結構來源；日文完全攻略 Wiki 則用於核對日文名與新版 Tropical／Ice 資料。[1] [2]

已確認共同成長時間為 Baby 約 1–4 小時、Kid 約 24–28 小時、Young 約 24 小時，Adult 可持續到死亡、Breeding 或選擇新蛋。Baby 每在同一 Field 約 15 分鐘取得一個 Field Cell，四個同類細胞可觸發 Kid 進化。[1]

原始 Land／Water／Sky 版本的 Young 物種分支已由 wikitext 確認：Land 為 Roar、Toddle、Lick、Sprout；Water 為 Glide、Leap、Paddle、Float；Sky 為 Flap、Chirp、Bumble、Rocky。Flap Young 與 Chirp Young 在英文裝置內存在名稱互換錯誤，圖鑑需額外註記。[1]

每個 Young 物種通常對應四個 Adult care tier：0 次 Care Mistake 且完成 Young 階段各補滿 Hunger／Happy 5 次以上、0–1 次、2–5 次、6 次以上。每個原始場地有 16 個常規 Adult，加上一個機身限定 Secret Adult；三場地合計 51 個基本成年角色。[1]

原始三版 Secret Adult 的共同概念是 Young 階段與兩個不同版本連線，且需在對應機身預設場地；部分無明顯飲食傾向的 Young 不能進化成 Secret Adult。這類條件曾有玩家實測差異，網站需保留「社群整理」標籤。[1]

平行研究初步回報顯示：Water 與 Sky 各 21 筆（4 Young、16 Adult、1 Secret）；Jade Forest 專屬 Forest 範圍約 23 筆（含 Baby／Kid）；Tropical、Ice、Forest 與任何場地角色會在新版本重複出現，合併時不得把版本變體誤算為不同角色。

完整 wikitext 解析後共有 201 個「版本／場地列」，按角色名稱與 Artwork 型態合併為 **133 個可見成長型態**：1 Baby、6 Kid、24 Young（包含 Forest／Tropical／Ice 地區造型）與 102 Adult。133 張 Artwork 已全部透過 MediaWiki imageinfo API 成功取得，Mametchi 與 Tropical Lick Young 抽查均為高解析透明背景角色圖，可直接用於圖鑑卡片與角色導向背景裝飾。[1]

## References

[1]: https://tamagotchi.fandom.com/api.php?action=parse&page=Tamagotchi_Paradise%2FCharacter_list&prop=wikitext&format=json "Tamagotchi Wiki Character List MediaWiki API"
[2]: https://tamapara-wiki.com/ "たまごっちパラダイス完全攻略wiki"
