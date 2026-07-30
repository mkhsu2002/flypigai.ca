import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { makeMetadata } from "../../seo";

export const metadata: Metadata = makeMetadata({
  title: "隱私權說明",
  description: "FlyPig AI 如何處理聯絡表單、Atlas 更正與商業詢問資料。",
  path: "/zh/privacy",
  enPath: "/privacy",
  zhPath: "/zh/privacy",
  locale: "zh_TW",
});

export default function ZhPrivacyPage() {
  return <main lang="zh-Hant">
    <SiteHeader locale="zh" languageHref="/privacy" />
    <section className="hero shell">
      <p className="eyebrow">隱私權說明</p>
      <h1>FlyPig AI 如何處理詢問資料。</h1>
      <p className="lead">本頁說明 FlyPig AI 如何處理透過聯絡表單、Atlas 更正與商業開發詢問所提交的資訊。</p>
    </section>
    <section className="section shell">
      <div className="grid3">
        <article className="card"><span className="num">01</span><h3>提交資訊</h3><p>我們可能收到您主動提交的姓名、機構、電子郵件、網站、技術領域、市場目標與訊息內容。</p></article>
        <article className="card"><span className="num">02</span><h3>使用目的</h3><p>提交資訊會用於評估詢問、回覆需求、審查 Atlas 更正，以及判斷 FlyPig AI 是否能支援相關商業機會。</p></article>
        <article className="card"><span className="num">03</span><h3>機密資訊</h3><p>初次表單請勿提交機密技術、法律或商業資料。敏感細節應在適當協議到位後再分享。</p></article>
      </div>
    </section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">保存與更正</p><h2>早期詢問應保持必要且最小化。</h2></div><p className="section-copy">FlyPig AI 僅在商業追蹤、編輯審查或關係管理所需期間保存詢問資訊。如需更正或刪除已提交資訊，請透過聯絡頁與 FlyPig AI 聯繫。</p></div></div></section>
    <SiteFooter locale="zh" />
  </main>;
}
