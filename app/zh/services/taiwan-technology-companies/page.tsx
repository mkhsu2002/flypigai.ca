import type { Metadata } from "next";
import JsonLd from "../../../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../../../components/SiteChrome";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../../../seo";

export const metadata: Metadata = makeMetadata({ title: "台灣科技業者的加拿大應用與 Design-In 準備度", description: "協助台灣 Edge AI、嵌入式平台、機器視覺與感測業者檢視加拿大應用適配、Design-In 摩擦與證據缺口。", path: "/zh/services/taiwan-technology-companies", enPath: "/services/taiwan-technology-companies", zhPath: "/zh/services/taiwan-technology-companies", locale: "zh_TW" });

const evidence = ["可被查證的產品能力與效能主張", "Reference design、評估流程與軟體支援", "生命週期、供貨、整合與支援模式", "加拿大技術團隊可檢視的應用證據"];
const outputs = [
  ["加拿大應用適配簡報", "聚焦說明產品能力可能解決的加拿大產品或營運問題，以及適配度較弱的情境。"],
  ["目標組織類型", "辨識相關產品公司、整合商、營運業者或研究組織的類型，而不是交付泛用名單。"],
  ["Design-In 摩擦檢視", "列出可能拖慢評估的技術、軟體、生命週期、法規、支援與證據缺口。"],
  ["準備度行動", "依優先順序整理技術對話前應補齊的資料、答案與驗證工作。"],
  ["合格機會路徑", "當證據與應用適配可信時，再定義有邊界的相關對話或引介路徑。"],
];

export default function ZhTaiwanTechnologyCompaniesPage() {
  return <main lang="zh-Hant">
    <JsonLd data={breadcrumbJsonLd([{ name: "首頁", path: "/zh" }, { name: "合作方式", path: "/zh/services" }, { name: "台灣科技業者", path: "/zh/services/taiwan-technology-companies" }])} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "加拿大應用與 Design-In 準備度", serviceType: "應用與 Design-In 準備度", provider: { "@id": `${siteUrl}/#organization` }, areaServed: ["Taiwan", "Canada"], audience: { "@type": "Audience", audienceType: "台灣科技業者" }, url: `${siteUrl}/zh/services/taiwan-technology-companies`, description: metadata.description }} />
    <SiteHeader locale="zh" languageHref="/services/taiwan-technology-companies" />
    <section className="hero shell"><p className="eyebrow">適合台灣科技業者</p><h1>在全面拓展市場前，先準備好加拿大應用與 Design-In 對話。</h1><p className="lead">FlyPig AI 檢視台灣 Edge AI、嵌入式平台、機器視覺或感測技術與加拿大產品需求的適配情境，並在廣泛接觸市場前，明確列出證據缺口與整合摩擦。</p><div className="actions"><a className="pill primary" href="/zh/contact">討論加拿大準備度</a><a className="pill secondary" href="/atlas" lang="en">探索加拿大需求情境</a></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">適合的起始證據</p><h2>讓產品能力可以被技術團隊檢視。</h2></div><p className="section-copy">可信的加拿大對話不能只靠產品分類或行銷主張。檢視會從可公開或經核准的證據開始。</p></div><div className="grid2">{evidence.map((item, index) => <article className="card" key={item}><span className="num">0{index + 1}</span><h3>{item}</h3></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">準備度產出</p><h2>完成後會得到什麼。</h2></div><p className="section-copy">產出是一份可協助決策的應用簡報，不代表既有合作，也不保證加拿大市場需求。</p></div><div className="grid3">{outputs.map(([title, body]) => <article className="card" key={title}><span className="num">產出</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">關係邊界</p><h2>準備度評估不等於在地代理。</h2></div><p className="section-copy">這項合作不會使 FlyPig AI 成為授權銷售代表、經銷商、轉介代理或工程核准單位。任何後續商業關係都必須另有書面依據與明確範圍。</p></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">驗證應用假設</p><h2>提供產品來源、技術證據，以及希望評估的加拿大使用情境。</h2></div><div className="actions"><a className="pill primary" href="/zh/contact">開始準備度洽詢</a></div></div></section>
    <SiteFooter locale="zh" />
  </main>;
}
