# FlyPig AI 事件式寄送作業

## 環境

| 環境 | D1 | Queue | DLQ | Consumer |
| --- | --- | --- | --- | --- |
| Preview/dev | `flypigai-events-dev` | `flypigai-outbound-dev` | `flypigai-outbound-dev-dlq` | `flypigai-mailer-dev` |
| Production | `flypigai-events-prod` | `flypigai-outbound-prod` | `flypigai-outbound-prod-dlq` | `flypigai-mailer` |

Pages producer bindings 固定為 `FLYPIG_DB` 與 `OUTBOUND_EVENTS`。Provider key 僅能存在 consumer Worker；Pages、repo、本機自動化與前端不得持有 `RESEND_API_KEY`。

## 所需 secrets

- Pages preview 與 production：`UNSUBSCRIBE_SECRET`
- Consumer dev 與 production：`RESEND_API_KEY`、`CONTACT_FROM`、`CONTACT_TO`、`NEWSLETTER_FROM`、`UNSUBSCRIBE_SECRET`、`REPLAY_TOKEN`

`UNSUBSCRIBE_SECRET` 必須在同一環境的 Pages producer 與 consumer 使用相同值。secret 值只能由 Keychain 或平台 secret management 注入，不得寫入 repo、指令常數或操作紀錄。

## Migration

```sh
npx wrangler d1 migrations apply FLYPIG_DB --remote --config wrangler.toml
npx wrangler d1 migrations apply FLYPIG_DB --remote --env production --config wrangler.toml
```

套用後必須逐一執行 `d1 migrations list`，確認兩個環境都有 `0001_event_delivery.sql`。

## 部署順序

1. 套用 dev migration。
2. 安全注入 dev consumer 與 Pages preview secrets。
3. 部署 `flypigai-mailer-dev`，再部署 branch preview。
4. 驗證 contact、subscribe、duplicate、unsubscribe、provider failure／retry 與 protected replay。
5. 查詢 dev D1 的 domain record、`event_inbox` 與 `event_audit`。
6. 以相同 migration 與程式碼部署 production，安全注入 production secrets。
7. 先部署 consumer，再部署 Pages production，最後執行公開網域 live readback。

任何 migration、binding、secret 名稱、consumer 版本或 live behavior 不一致時，停止啟用前端。電子報介面維持 launch notice；聯絡表單也不得切到未驗證的新契約。

## Recovery 與 replay

Consumer 每日只掃描超過 15 分鐘仍為 `pending` 或 `failed` 的事件。個別 replay 使用 consumer 的受保護 `POST /replay/{event-id}`，Bearer token 由 `REPLAY_TOKEN` 提供。不得批量重送全部失敗事件；先查閱該 event 的 audit 與退訂狀態。
