import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { formattedAddress, siteIdentity } from "../../../lib/site";
import { makeMetadata } from "../../seo";

export const metadata: Metadata = makeMetadata({ title: "關於 FlyPig AI", description: "FlyPig AI 是由 ICareU Global Trading Ltd. 營運的加拿大與台灣 Edge AI／Physical AI 獨立技術情報計畫。", path: "/zh/about", enPath: "/about", zhPath: "/zh/about", locale: "zh_TW" });

export default function ZhAboutPage() {
  return <main lang="zh-Hant"><SiteHeader locale="zh" languageHref="/about" />
    <section className="hero shell"><p className="eyebrow">關於 FlyPig AI</p><h1>連結產品需求與技術能力的獨立情報層。</h1><p className="lead">FlyPig AI 聚焦加拿大產品與產業情境，以及台灣半導體、Edge AI、嵌入式運算、感測、機器人與製造能力。公開收錄不等同授權、背書或正式合作關係。</p></section>
    <section className="section shell"><div className="grid3"><article className="card"><span className="num">01</span><h3>來源優先</h3><p>以官方產品資料、技術文件與其他第一手來源作為事實基礎。</p></article><article className="card"><span className="num">02</span><h3>雙市場脈絡</h3><p>把加拿大應用與營運需求，連結到台灣技術能力及設計選項。</p></article><article className="card"><span className="num">03</span><h3>清楚揭露</h3><p>區分來源事實、FlyPig AI 判讀與可能的商業關係。</p></article></div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">公開研究</p><h2>Canada Physical AI Atlas</h2></div><p className="section-copy">Atlas 整理加拿大公司、業者、技術、產業與地區資訊。它不是政府官方名錄、排名或認證，也不代表對收錄機構的背書。</p></div><div className="actions"><a className="pill primary" href="/zh/atlas">探索 Atlas</a><a className="pill secondary" href="/zh/atlas/methodology">研究方法</a></div></div></section>
    <section className="section shell founder"><div><p className="eyebrow">創辦人</p><h2>{siteIdentity.founder.name}</h2><p className="section-copy">M.K. Hsu 的工作經驗橫跨台灣與加拿大，投入 AI 自動化、數位產品及跨境業務開發。</p><div className="actions"><a className="pill secondary" href={siteIdentity.founder.url} target="_blank" rel="noreferrer">創辦人介紹 ↗</a><a className="pill secondary" href="/editorial-policy" lang="en">編輯政策</a></div></div><div className="founder-card"><span className="mono">Delta · British Columbia · Canada</span><h3>{siteIdentity.brandName}</h3><p>加拿大與台灣 Edge AI／Physical AI 獨立情報。</p></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">營運主體</p><h2>{siteIdentity.legalName}</h2></div><p className="section-copy">{formattedAddress()}<br /><a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a></p></div></section>
    <SiteFooter locale="zh" />
  </main>;
}
