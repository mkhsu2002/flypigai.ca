# FlyPig AI — 專案目的與 AI 接手指南

> 移交查核：2026-10-22（America/Vancouver）。本文件是恢復作業的入口；雲端狀態是本次實際讀回的快照，未來操作前仍須重新確認。舊 README 已保留於 [歷史封存](docs/operations/2026-10-22-readme-history.md)，其中的「電子報尚未部署」及舊優先事項不代表目前狀態。

## 1. 專案目的

FlyPig AI 是加拿大與台灣之間的 Edge AI／Physical AI 設計情報品牌，營運法人為 **ICareU Global Trading Ltd.**。網站以公開研究累積可信的公司、技術、應用與設計路徑情報，協助加拿大產品團隊評估台灣技術，也協助台灣技術公司理解加拿大應用與 design-in 機會。

目前提供研究內容與洽詢入口；長期方向是 Design Intelligence Layer／Platform。不得把未完成的平台、客戶成果、供應商授權、庫存、代理或合作關係寫成既成事實。客戶專案、BOM、報價、客戶身分與機密文件預設私密，不可直接變成公開文章。

- 正式站：[flypigai.ca](https://flypigai.ca/)，繁中入口：[／zh](https://flypigai.ca/zh)。
- 原始碼：[mkhsu2002/flypigai.ca](https://github.com/mkhsu2002/flypigai.ca)，正式分支 `main`。
- 品牌 `FlyPig AI`；地址 `11936 Woodridge Cres., Delta, BC V4E 3H5, Canada`；信箱 `info@flypigai.ca`。
- 創辦人 `M.K. Hsu`：[正式個人頁](https://mkhsu.icareu.tw/)。結構化資料、頁尾與聯絡頁須一致。
- `outreach-engine.flypigai.ca` 是另一個 repo／部署的子站，本 repo 只提供相關連結，不負責其後端或資料。

## 2. 刪除本機目錄會影響什麼

**已部署網站與雲端事件處理不依賴這份本機 checkout，可以在完成遠端保存後移除本機目錄。** 這是「靜態內容網站＋雲端互動後端」，並非完全沒有後端。

| 部分 | 執行／保存位置 | 刪除本機後 |
| --- | --- | --- |
| 原始碼、文章、圖片、migration、交接文件 | GitHub repo | 可重新 clone 恢復 |
| 公開 HTML／CSS／JS／圖片 | Cloudflare Pages `flypigai-ca` | 現有部署繼續提供服務 |
| 聯絡／訂閱／退訂 API | Cloudflare Pages Functions | 保留雲端部署即可運作 |
| 表單資料、訂閱狀態、事件及 audit | Cloudflare D1 | 不在本機；不可刪除雲端資料庫 |
| 即時派送、重試與每日 recovery | Cloudflare Queues＋mailer Workers | 不依賴本機排程 |
| 每週新增文章治理 | 本機 Codex automation `flypig-ca` | 已於本次移交暫停，恢復前須重新設定工作目錄 |
| 建置產物與視覺檢查暫存 | `.next/`、`out/`、`node_modules/`、`artifacts/` | 可重新產生，不是正式資料來源 |

本次查核前 Git 工作區乾淨，沒有未追蹤的專案檔或僅存在本地分支的未推送 commit。被忽略的檔案只有建置／依賴／review sheet 與 `tsconfig.tsbuildinfo`，沒有本地 `.env`。外層 `flypiaCA` 不是 Git repo；真正根目錄是其下的 `flypigai.ca/`。外層 `.playwright-mcp/` 與兩張 AAEON desktop/mobile PNG 是過往瀏覽器檢查產物，非網站資產或必要執行狀態。正式首頁、Logo 與 MetaRosetta 原圖均有納入 Git。

刪除範圍僅指本機 `flypiaCA/`；保留 GitHub、Cloudflare Pages／Workers／D1／Queues／DNS、Google Sheet 與 OS Keychain。登入憑證不是 clone 的一部分，換電腦需重新取得授權。維持線上服務不等於持續自動產生新文章。

## 3. 接手先讀與檔案地圖

1. [AGENTS.md](AGENTS.md)：專案品牌、路由、授權宣稱、圖片權利與繁中 HTML 規則；同時遵守執行環境的全域規則。
2. [Signals 編輯規範](docs/editorial/industry-signals-standard.md)：文章與媒體權利契約。
3. [事件寄送作業](docs/operations/event-delivery.md)：dev／production、secret 名稱、migration 與重試。
4. [搜尋發布流程](docs/operations/search-release.md)：SEO／IndexNow。
5. [2026-08-25 架構設計](docs/superpowers/specs/2026-08-25-site-stabilization-design.md) 與 [2026-08-29 定位設計](docs/superpowers/specs/2026-08-29-positioning-search-conversion-hardening-design.md)：設計背景；歷史起點與待辦不可當作現況。

| 位置 | 職責 |
| --- | --- |
| `app/`、`components/` | Next.js App Router 頁面與共用元件 |
| `content/industry-signals/*.json` | Signals 發布資料；由 `lib/industrySignals.ts` 載入 |
| `app/signals/[slug]/page.tsx` | 共用文章模板與靜態路由生成 |
| `app/atlas/data.ts`、`app/insights/guides.ts` | Atlas／Insights 內容資料 |
| `app/Solutions/`、`app/technologies/topics.ts` | 台灣技術研究與技術決策內容 |
| `app/sitemap.ts`、`app/seo.ts`、`lib/site.ts` | sitemap、metadata、實體識別 |
| `public/`、`assets/` | 已納入 Git 的公開資產與部分原圖 |
| `functions/api/`、`functions/_shared/` | Pages API、驗證、持久化與排隊 |
| `worker/src/index.ts` | Queue consumer、寄信、replay、每日 recovery |
| `migrations/`、`wrangler.toml`、`worker/wrangler.jsonc` | schema 與兩環境部署契約 |
| `automation/*.json` | 編輯／風險政策；不是獨立執行的排程 |
| `research/physical-ai/` | 證據與預測研究；先讀其 README，不得事後改寫原始預測 |
| `docs/operations/`、`docs/editorial/` | 發布證據、作業手冊與編輯研究 |

主要公開 owner 為 `/atlas`（Canada Atlas）、`/Solutions`（Taiwan Solutions，大小寫有意保留）、`/technologies`、`/signals`、`/insights`、`/services`、`/physical-ai`、`/about`、`/contact`。商務服務分加拿大產品團隊與台灣技術公司兩條入口。

`/canada` 永久轉向 `/atlas`；`/taiwan`、`/solutions` 永久轉向 `/Solutions`。不要重新加入導覽、canonical 或 sitemap。只有真實存在的翻譯頁才建立 hreflang；`/zh` 靜態頁存在不代表每篇英文文章已有繁中版。`/submit-project`、`/submit-technology` 與未來 graph／Design Routes 屬規劃方向，不可當作已交付功能。

## 4. 重新 clone 與本地驗證

不必恢復原絕對路徑，除非要沿用舊本機排程。

```sh
git clone https://github.com/mkhsu2002/flypigai.ca.git
cd flypigai.ca
git switch main
git fetch origin main
git status -sb
npm ci
npm run dev
```

使用能執行 Next.js 16 的 Node.js（至少 20.9）；本次檢查工具為 Node `v23.9.0`／npm `10.9.2`，不是要求固定此版本。依 `package-lock.json` 安裝，不要僅為恢復而升級依賴。

公開內容或程式有變更時執行：

```sh
npm run validate:content
npm test
npm run typecheck
npm run build
npm run audit:export
git diff --check
```

`npm run build` 產生 `out/`；`npm start` 是 `next start`，不適用於本專案靜態匯出產物的正式服務方式。`next dev` 也不會替你部署／驗證 Cloudflare Functions。

Cloudflare 現行 build command 是 **`npx next build`**、output `out`、root 為 repo 根目錄。保留 `next.config.ts` 的直接建置圖片補齊與 HTML postprocess safeguard，以及 npm `postbuild`；線上 `/zh` 原始 HTML 必須是 `lang="zh-Hant"`。

## 5. 部署與線上核對

Cloudflare 帳號 ID：`82af99e90d342a30d2386efaa8ef4966`；Pages 專案 `flypigai-ca`；別名 [flypigai-ca.pages.dev](https://flypigai-ca.pages.dev/)。GitHub integration 監聽 `main` 正式部署，其餘分支目前都可能建立 preview。

- 本 repo 及 GitHub API 目前皆無 GitHub Actions workflow；自動部署由 Cloudflare Git integration 執行。
- 一般公開輸出變更：完成 gates → commit／merge 到 `main` → push → 等 Cloudflare canonical production 成功 → 讀回公開 URL。
- 純 README／docs／audit 移交：使用訊息開頭帶 `[skip ci]` 的 commit，避免不必要 Pages build；目前 Cloudflare path 規則仍為全部納入，尚無 docs 排除，不可假設普通 docs push 不會部署；參考 [Cloudflare GitHub integration](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/)。
- 不要用空 commit 或人工重跑喚醒部署。若將來修改觸發規則，補上最小必要 paths／no-op gating。
- 若有 API／schema 變更，先同步 dev 與 production migration、consumer、producer、bindings、secrets，再讓前端使用新契約；不要僅發布 `out/`。
- 若確需手動部署，先查官方 Wrangler 契約並確保 Pages Functions 與正確環境一起部署；不要把 `out/` 複製到其他純靜態平台而漏掉 API。

查部署：

```sh
npx --yes wrangler@4 pages deployment list --project-name flypigai-ca --json
```

此列表也會顯示 skip／idle 的 commit，**以 Cloudflare project API 的 `canonical_deployment` 為線上版本依據**。本次讀回正式部署為 `a58437d4-68ee-411c-b370-517656f50668`，公開程式 commit `4257ea1d9fbba3cad1dcdc02b9477b678e94a4e5`。移交前 `origin/main` 是 `366d7d8`，差異只有 production-readback 文件，無公開程式版本落差；本次也只修改文件，不要求 production commit 等於最新 docs commit。

發布驗證至少包含新頁 HTTP／canonical／OG 圖／Article 或 NewsArticle JSON-LD／sitemap，以及受影響的所有語系與公開文案。推送不等於發布完成，HTTP 200 也不等於內容正確。新增文章發布完成須回覆正式公開連結。

## 6. 雲端聯絡、訂閱、退訂與寄信

實際鏈路：`Pages Function → D1 domain record + event_inbox + event_audit → Queue（只有 eventId）→ mailer Worker → Resend → D1 寄送狀態／audit`。

同源 API 為 `POST /api/contact`、`POST /api/newsletter/subscribe`、`POST /api/newsletter/unsubscribe`。JSON 回傳 `{ ok, status, message }`；accepted 代表事件已受理，不能當作收件匣已送達。退訂使用簽名 token。前端元件 `NewsletterNotice.tsx` 雖仍保留舊檔名，目前實作已是訂閱表單。

| 環境 | D1／ID | Queue／DLQ | Consumer |
| --- | --- | --- | --- |
| dev／preview | `flypigai-events-dev`／`a93a9a4d-9cea-4c3f-a387-59ca97ac3594` | `flypigai-outbound-dev`／`flypigai-outbound-dev-dlq` | `flypigai-mailer-dev` |
| production | `flypigai-events-prod`／`f571464e-86e4-47d5-9651-0afaeb84613a` | `flypigai-outbound-prod`／`flypigai-outbound-prod-dlq` | `flypigai-mailer` |

Pages 綁定 `FLYPIG_DB`、`OUTBOUND_EVENTS`，secret 只有 `UNSUBSCRIBE_SECRET`。Consumer 持有 `RESEND_API_KEY`、`CONTACT_FROM`、`CONTACT_TO`、`NEWSLETTER_FROM`、`UNSUBSCRIBE_SECRET`、`REPLAY_TOKEN`。同一環境的 producer／consumer 退訂 secret 須一致。

Provider key **只放 consumer Worker**；`.env.example` 中的舊 Resend placeholder 不代表本機、Pages 或 runner 應持有 key。secret 值不放 README、repo、命令常數或回覆；從平台 secret management／OS Keychain 安全取得。不要刪除或為恢復而輪換既有 secrets。

兩環境 migration 都包含 `0001_event_delivery.sql`、`0002_dead_letter_audit.sql`。永久去重與狀態以 D1 為準，不依賴 provider 短期 idempotency。重試前先檢查 event/audit、退訂、DLQ；不得整批重寄。`POST /replay/{event-id}` 在 consumer，受 `REPLAY_TOKEN` Bearer 保護。

主要流程即時事件驅動。recovery 僅每日一次：production `09:17 UTC`、dev `09:23 UTC`；每個環境每月約 28–31 次，不因本機關機而停止。程式每次至多檢查 100 筆逾 15 分鐘的 pending／failed，排除 dead-letter；實際空跑比例需依雲端監測，不能由設定推定。此 recovery 不會生成文章，也不代表已建置批次電子報 broadcast 系統。

需要修改或驗證寄送時，先讀全域 `newsletter-worker-standard` 與 `cloudflare-deploy` skills。詳細命令與部署順序見 [事件寄送作業](docs/operations/event-delivery.md)。

## 7. 內容、圖片與外部來源

- 本次 repo 共 **67** 筆 Signals：66 published、1 hold。`hold` 必須維持不公開；筆數是 repo 快照，不等於 Sheet 最新庫存。
- 來源 Sheet：[台灣 Edge AI 消費性電子產品創新雷達 v1](https://docs.google.com/spreadsheets/d/1s1eimCEtX5wTvB879EoP27HHtWny_y7po7Mo15YUqjA/edit)；政策指定 `新品事件庫`、`加拿大 Industry Signals 事件庫`。本次未重查 Sheet 列，請先讀 metadata，再以 event ID 做有界查重，不要依舊 EVT 範圍判定待發布。
- `automation/industry-signals-policy.json` 要求已初審、非重複、官方來源查證與發布前風險稽核；high risk hold，medium risk 明確標示不確定性。政策檔本身不會排程執行。
- Facts、推論、預測要區分；供應商來源不等於圖片授權。第三方媒體須有 license／approved press asset 證據，否則採自有資訊圖。
- 正式 Logo 來源 `public/images/brand/flypig-logo.png`，衍生 lockup／symbol 及 OG 使用同一品牌資產，不重新繪製 Logo。首頁為已納入 Git 的 `public/images/home/vancouver-waterfront.webp`。
- 生成圖片每批最多 6 張；完成落檔、命名、檢查、引用再進下一批。沿用 `npm run generate:page-og -- --start=0 --limit=6`、`npm run generate:signals -- --start=0 --limit=6`；`artifacts/` review sheets 是暫存，正式圖片在 `public/`，URL cache 版本在 `lib/socialImages.ts`。
- MetaRosetta 分析已發布於 [/Solutions/meta-rosetta-metalens](https://flypigai.ca/Solutions/meta-rosetta-metalens)，研究／圖像界線見 [編輯紀錄](docs/editorial/2026-10-02-meta-rosetta-solution-research.md)。

## 8. 排程恢復與其他尚未合併工作

已確認本機 Codex automation `flypig-ca`（「FlyPig CA 每週新增文章治理」）原為每週五 03:00，本次為配合移除本機目錄已設為 **PAUSED**。所屬 local project ID `efabfdf7-7a7a-4df6-9f57-1c691b9b168f`，舊 `cwds` 為外層 `/Users/mkhsu/Documents/FlyPigAI/flypiaCA`，prompt 再切入 `flypigai.ca`。

恢復時先 `list_projects` 找到實際 clone 的 local project，再透過 `automation_update` 更新同一 automation、`executionEnvironment: local`、project ID 與根目錄；讀回 target／cwds，並在 repo 以最小暫存檔測試可寫後才啟用。不要重建重複排程或綁成 projectless。完整檢查只在有實質公開內容差異時執行，無差異快速退出；這是恢復時需確認的行為，不代表已在本次重寫舊 prompt。

舊 README 提及的 ChatGPT 側 weekly condition-watch 不是這份本機設定的證據。本次只核實並暫停本機 `flypig-ca`；外部 ChatGPT／其他帳號排程未盤點，不可宣稱已全部停止。接手時如需恢復自動發文，先盤點已存在的外部任務並去重。

遠端仍有 `automation/industry-signals-2026-10-05` 與多個 `physical-ai-weekly-*` preview 分支，包含 2026-10-17 的 final／reviewed 分支；它們已存在 GitHub，刪除本地不會遺失，但**未因本次移交而合併到 main**。未來接手應先比較 diff、來源與 preview／風險紀錄，再決定是否採用，不能把分支名稱當作已核准發布。

外部平台如 Substack／Medium／方格子／X 的登入流程，依執行環境全域 browser-lane 規則使用 `codex-flypig-ai`、`flypig2026@gmail.com` 與 `codex_browser_flypig_ai`，不可 fallback 個人帳號。X 須讀回 `@FlyPigCA`；已核實且導向 FlyPig AI 公開內容的日常引流貼文沿用專案授權。遇登入、安全驗證或帳號不符即停止交由 MK 處理。API 足以完成時優先使用 API。

## 9. 2026-10-22 移交查核與界線

本次直接讀回 GitHub／Cloudflare API 與公開站：

- GitHub repo 為 public，default branch `main`；移交前本地與 `origin/main` 一致，必要圖片／內容皆 tracked。
- Pages Git integration、正式分支、canonical deployment、build/output、兩環境 D1／Queue bindings 與 secret 名稱已核對。
- `/`、`/zh`、`/atlas`、`/Solutions`、`/signals`、`/contact`、MetaRosetta 文章均 HTTP 200 且 canonical 正確；繁中 raw HTML 為 `zh-Hant`。sitemap HTTP 200，126 URLs；三個舊入口均到正確新 owner。
- production Worker version `58bddce8-a793-4c10-a52f-5ae74da2924f`；dev `dcb42694-4f1c-4e6e-b1fd-b83efd0b693a`。兩者 `/health` 均 HTTP 200、`{ ok: true, status: "ready" }`。
- D1 兩環境已套用兩個 migration，`event_inbox.dead_lettered_at` 存在。既有事件狀態：dev 4 筆 sent、production 5 筆 sent；audit 有 persisted／queued／processing／sent，dev 另有歷史 failure 與 manual replay。只讀聚合與最近 100 筆 audit action，沒有讀出聯絡人內容。
- 三個公開 API 對空 JSON 回傳預期 422 `invalid`。本次沒有新增有效表單事件、訂閱、寄信或 replay；現有 audit 與健康檢查**不是本次端到端郵件送達證明**，也未以 bundle hash 證明 deployed Worker 與本地原始碼逐位元一致。未來改後端仍須完整交叉驗證。
- 無 GitHub Actions workflow；已確認本機 automation 為 PAUSED、target 與 cwds 仍指向舊專案，等待將來恢復時調整。
- 本次僅文件移交，未修改前後端、schema、公開文案或雲端資源；以文件連結／路徑與 diff 檢查驗證，不觸發完整 build 或正式部署。

若以程式查站遇 Python 預設 User-Agent 的 Cloudflare `1010`／403，本次使用一般瀏覽器 User-Agent 的 curl 可正常讀回。不要把這種請求拒絕誤判成部署下線，也不要為此直接修改 WAF。
