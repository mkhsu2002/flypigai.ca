import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { siteIdentity } from "../../../lib/site";
import { makeMetadata } from "../../seo";

export const metadata: Metadata = makeMetadata({ title: "隱私權說明", description: "FlyPig AI 如何處理聯絡、訂閱、Atlas 更正與研究詢問資料。", path: "/zh/privacy", enPath: "/privacy", zhPath: "/zh/privacy", locale: "zh_TW" });

export default function ZhPrivacyPage() {
  return <main lang="zh-Hant"><SiteHeader locale="zh" languageHref="/privacy" />
    <section className="hero shell"><p className="eyebrow">隱私權說明</p><h1>如何處理你提交的資料。</h1><p className="lead">FlyPig AI 由 {siteIdentity.legalName} 營運。本頁說明聯絡表單、電子報、Atlas 更正與研究或機會詢問資料的處理原則。</p></section>
    <section className="section shell"><div className="grid3"><article className="card"><span className="num">01</span><h3>蒐集內容</h3><p>可能包含姓名、機構、電子郵件、網站、技術領域、詢問類型及你主動提交的訊息。</p></article><article className="card"><span className="num">02</span><h3>使用目的</h3><p>用於回覆詢問、管理訂閱同意、審查資料更正，以及判斷是否適合進一步討論。</p></article><article className="card"><span className="num">03</span><h3>資料最小化</h3><p>初次表單請勿提交 BOM、價格、客戶身分、未公開設計、法律或其他機密資料。</p></article></div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">保存、更正與刪除</p><h2>只保留完成目的所需的資料。</h2></div><p className="section-copy">資料會依回覆、編輯審查、同意紀錄或正當關係管理需要保存。如需查詢、更正或刪除，請寄信至 <a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a>。</p></div></div></section>
    <SiteFooter locale="zh" />
  </main>;
}
