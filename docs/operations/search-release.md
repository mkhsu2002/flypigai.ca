# 搜尋發布作業

## 適用時機

只在新增、實質更新或刪除 canonical 頁面後執行。不要用分鐘級排程重複提交，也不要把提交成功解讀成保證收錄或排名提升。

## 發布前檢查

1. 完成 `npm run build` 與 `npm run audit:export`。
2. 確認 sitemap 的 canonical URL 與 `lastmod` 正確。
3. 正式站部署完成後，以公開 URL 讀回 title、canonical、robots、Article schema 與主要內容。
4. 將本次實際新增、更新或刪除的 canonical URL 寫入一個不追蹤的純文字檔，每行一個 URL；可用 `#` 寫註解。

## IndexNow

IndexNow 需要 8–128 字元的驗證 key，以及位於 `flypigai.ca` 的公開 UTF-8 `.txt` 驗證檔。key 與驗證檔位置不得提交到 repo；應由本機 Keychain、部署平台 secret 或一次性安全環境注入。先確認驗證檔已在正式站可讀，再執行提交。

```sh
INDEXNOW_KEY="<securely-injected>" \
INDEXNOW_KEY_LOCATION="https://flypigai.ca/<provisioned-key-file>.txt" \
npm run search:submit -- --file /absolute/path/to/changed-urls.txt --dry-run
```

移除 `--dry-run` 才會向 IndexNow 送出一次 POST。指令不會輸出 key 或 keyLocation；HTTP 200 或 202 只代表請求已被接收。若正式站沒有驗證檔，停止提交並先完成安全佈建。

官方協定：[IndexNow Documentation](https://www.indexnow.org/documentation)

## Google Search Console

Google 不使用 IndexNow。少量重要 URL 可在 Search Console 的 URL Inspection 手動要求重新建立索引；大量 URL 以 sitemap 為主。重複要求同一 URL 不會加快抓取，提交也不保證收錄。

官方說明：[Ask Google to recrawl your URLs](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)

## 觀察

- Search Console：頁面索引、URL Inspection、搜尋查詢與 sitemap 狀態。
- Bing Webmaster Tools：IndexNow 提交／抓取狀態及 AI Performance（帳號可用時）。
- 站內：404、redirect、canonical、結構化資料與 sitemap 不一致。
- 發布紀錄：提交日期、commit、URL 清單檔與回應狀態；不得記錄 key。
