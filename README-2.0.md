# himian-Tamagotchi 2.0

這是以原始 himian-Tamagotchi 專案為基礎整理的完整版本。

## 已整合
- 全站搜尋與 Ctrl/Cmd + K
- 角色圖鑑與獨立角色頁
- 進化中心與互動式進化樹
- 尋蛋、活動、攻略、代碼、資料來源
- AI 攻略助手入口與站內資料互聯
- 收藏與每日照顧 Checklist
- Mobile bottom navigation
- SEO：canonical、Open Graph、Twitter Card、JSON-LD、robots.txt、sitemap.xml
- PWA manifest、skip link、reduced motion

## 本地啟動
1. 安裝 Node.js 22+ 與 pnpm 10。
2. 在專案根目錄執行 `pnpm install`。
3. 開發：`pnpm dev`。
4. 檢查：`pnpm check`。
5. 測試：`pnpm test`。
6. 建置：`pnpm build`。

## Manus
把整個 ZIP 解壓／匯入為專案後，使用 Manus 的 Preview 檢查首頁、圖鑑、進化、尋蛋、AI 與手機版。

> 注意：本專案使用原網站既有資料；AI 回答能力仍取決於 Manus/部署環境是否提供相應的 LLM 與環境變數。
