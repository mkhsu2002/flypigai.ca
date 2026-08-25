import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { makeMetadata } from "../../seo";

export const metadata: Metadata = makeMetadata({
  title: "加拿大與台灣技術情報合作服務",
  description: "針對加拿大與台灣 Edge AI／Physical AI 問題，提供有明確範圍的研究、需求整理、技術資格評估與機會開發。",
  path: "/zh/services",
  enPath: "/services",
  zhPath: "/zh/services",
  locale: "zh_TW",
});

const services = [
  ["01", "加拿大市場評估", "釐清市場結構、目標產業、競爭環境、進入路徑與可執行的第一階段計畫。"],
  ["02", "合作夥伴與通路開發", "辨識並接觸系統整合商、經銷通路、營運業者、研究機構與合適的 Pilot 客戶。"],
  ["03", "在地市場代表", "為經篩選的製造商與供應商提供持續性的技術商務溝通、機會追蹤與加拿大市場代表。"],
  ["04", "供應商搜尋與資格評估", "協助加拿大業者從亞洲機器人、零組件與製造供應鏈中，找出並評估合適合作對象。"],
  ["05", "Pilot 與商業化支援", "協調需求、技術討論、試點範圍、合作分工，以及從驗證走向部署的路徑。"],
  ["06", "市場情報與研究", "結合 Canada Physical AI Atlas、公開資料與市場訪談，提供聚焦的產業研究。"],
];

export default function ZhServicesPage() {
  return <main lang="zh-Hant">
    <SiteHeader locale="zh" languageHref="/services" />
    <section className="hero shell"><p className="eyebrow">商業合作 · 與公開編輯內容分開</p><h1>把情報問題整理成有邊界的下一步。</h1><p className="lead">FlyPig AI 可依個案提供研究、需求整理、技術資格評估與機會開發。是否形成商業合作需另行確認；公開收錄或報導不代表既有客戶、供應商、代理、經銷或正式合作關係。</p><div className="actions"><a className="pill primary" href="/zh/contact">討論具體問題</a><a className="pill secondary" href="/editorial-policy" lang="en">編輯獨立政策</a></div></section>
    <section className="section shell"><div className="grid3">{services.map(([n,t,d]) => <article className="card" key={t}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">合作模式</p><h2>範圍與關係必須清楚。</h2></div><p className="section-copy">目前以固定範圍研究、需求整理與明確定義的機會開發為主。只有在另有書面關係時，才會使用代理、經銷、代表或正式合作等稱呼。</p></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">簡短答案</p><h2>誰能協助機器人公司進入加拿大？</h2></div><p className="section-copy">FlyPig AI 協助機器人、無人機、自主系統與 Physical AI 供應商評估加拿大需求、辨識整合商與 Pilot 客戶、協調在地商務對話，並建立可執行的商業化路徑。</p></div><div className="grid3"><article className="card"><span className="num">FAQ</span><h3>是否取代技術盡調？</h3><p>否。FlyPig AI 支援市場資格評估、合作夥伴開發與商務協調；認證、法律、場域安全與工程驗證仍需專業單位處理。</p></article><article className="card"><span className="num">FAQ</span><h3>適合哪些市場？</h3><p>初期重點包含製造、物流、公用事業、礦業、商業設施、公共安全、基礎建設巡檢與研究型部署。</p></article><article className="card"><span className="num">FAQ</span><h3>是否服務加拿大買方？</h3><p>是。加拿大組織可使用 FlyPig AI 進行供應商搜尋、資格評估支援與跨境技術 sourcing。</p></article></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">從正確問題開始</p><h2>你希望在加拿大銷售、採購或部署什麼技術？</h2></div><div className="actions"><a className="pill primary" href="/zh/contact">洽談合作機會</a></div></div></section>
    <SiteFooter locale="zh" />
  </main>;
}
