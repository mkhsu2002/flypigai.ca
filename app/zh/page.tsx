import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { siteIdentity } from "../../lib/site";
import { makeMetadata } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "加拿大與台灣 Edge AI／Physical AI 技術情報",
  description: "FlyPig AI 提供獨立、以來源為基礎的加拿大產業生態與台灣 Edge AI、半導體、嵌入式運算及 Physical AI 技術情報。",
  path: "/zh",
  enPath: "/",
  zhPath: "/zh",
  locale: "zh_TW",
});

const domains = ["半導體與 AI 加速", "嵌入式運算", "機器視覺", "感測技術", "連線能力", "機器人與自主系統"];

export default function ZhHomePage() {
  return <main lang="zh-Hant">
    <SiteHeader locale="zh" languageHref="/" />
    <section className="hero home-hero"><div className="shell hero-grid home-hero-grid"><div className="home-hero-copy"><p className="eyebrow">加拿大 ↔ 台灣 · Edge AI · Physical AI</p><h1>從加拿大產品需求，看懂台灣技術路徑。</h1><p className="lead">FlyPig AI 以公開、可驗證的來源，整理加拿大產業情境與台灣半導體、Edge AI、嵌入式運算、感測及 Physical AI 技術。公開研究不代表供應商授權、背書或既有合作關係。</p><div className="actions"><a className="pill primary" href="/zh/atlas">探索加拿大 Atlas</a><a className="pill secondary" href="/Solutions" lang="en">Taiwan Solutions</a><a className="pill secondary" href="/signals" lang="en">Industry Signals</a></div></div><aside className="signal-card home-signal-card"><p className="eyebrow">FlyPig AI 的角色</p><div className="signal-line"><span>市場情境</span><strong>加拿大</strong></div><div className="signal-line"><span>技術生態</span><strong>台灣</strong></div><div className="signal-line"><span>研究重點</span><strong>Edge AI＋Physical AI</strong></div><div className="signal-line"><span>定位</span><strong>獨立情報＋合格媒合</strong></div></aside></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">雙向情報架構</p><h2>需求端與供應端，各有清楚的入口。</h2></div><p className="section-copy">Canada Atlas 由加拿大業者、應用、產業與地區出發；Taiwan Solutions 由台灣技術能力與解決方案路徑出發。Technology Intelligence 提供長期技術分類，Industry Signals 則追蹤最新產品與產業動態。</p></div><div className="grid3"><article className="card"><span className="num">Canada Atlas</span><h3>加拿大業者與應用情境</h3><p>查找加拿大公司、營運業者、整合能力、產業需求與區域生態。</p><div className="actions"><a className="pill secondary" href="/zh/atlas">探索 Atlas</a></div></article><article className="card"><span className="num">Taiwan Solutions</span><h3>台灣技術與供應端情報</h3><p>從晶片、模組、感測、連線到製造，研究可驗證的技術能力與設計路徑。</p><div className="actions"><a className="pill secondary" href="/Solutions" lang="en">Explore Solutions</a></div></article><article className="card"><span className="num">Industry Signals</span><h3>最新產品與生態訊號</h3><p>以英文獨立改寫官方來源，區分已確認事實、設計影響與 FlyPig AI 判讀。</p><div className="actions"><a className="pill secondary" href="/signals" lang="en">Read Signals</a></div></article></div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">研究範圍</p><h2>聚焦智慧硬體背後的關鍵技術層。</h2></div><p className="section-copy">我們優先整理會影響產品架構、開發風險、供應鏈與部署可行性的技術，不製作大量低價值的 SEO 填充內容。</p></div><div className="grid3">{domains.map((domain, index) => <article className="card" key={domain}><span className="num">{String(index + 1).padStart(2, "0")}</span><h3>{domain}</h3></article>)}</div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">信任邊界</p><h2>公開情報與私有機會資料分開處理。</h2></div><p className="section-copy">公司公開資訊、技術規格、產業脈絡與來源引用可成為公開研究；專案需求、BOM、價格、數量、客戶身分、時程及機密文件預設視為私有資料，未經明確同意不會公開。</p></div><div className="actions"><a className="pill secondary" href="/editorial-policy" lang="en">編輯與更正政策</a><a className="pill secondary" href="/zh/privacy">隱私權說明</a></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">聯絡 FlyPig AI</p><h2>分享加拿大產品需求、台灣技術來源或 Atlas 更正。</h2></div><div className="actions"><a className="pill primary" href="/zh/contact">開始對話</a></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">營運主體</p><h2>{siteIdentity.legalName}</h2></div><p className="section-copy">FlyPig AI 由加拿大公司 {siteIdentity.legalName} 營運，創辦人為 <a href={siteIdentity.founder.url} target="_blank" rel="noreferrer">{siteIdentity.founder.name}</a>。</p></div></section>
    <SiteFooter locale="zh" />
  </main>;
}
