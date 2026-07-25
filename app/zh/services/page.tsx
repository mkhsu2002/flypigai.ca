import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";

export const metadata: Metadata = { title: "服務項目｜FlyPig AI", description: "為機器人與 Physical AI 業者提供加拿大市場開發、合作夥伴開發、供應商搜尋與商業化支援。" };

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
    <section className="hero shell"><p className="eyebrow">商業服務</p><h1>從理解市場，到推動商業落地。</h1><p className="lead">FlyPig AI 是服務加拿大與亞洲市場的機器人、無人機、自主系統與關鍵零組件市場開發及商業化合作夥伴。</p></section>
    <section className="section shell"><div className="grid3">{services.map(([n,t,d]) => <article className="card" key={t}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">合作模式</p><h2>依不同市場階段彈性設計。</h2></div><p className="section-copy">合作可採固定範圍研究、月度市場開發、專案協調、在地代表、引介合作、經銷代理，或在合適情況下採成果導向的商業模式。</p></div></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">從正確問題開始</p><h2>你希望在加拿大銷售、採購或部署什麼技術？</h2></div><div className="actions"><a className="pill primary" href="/zh/contact">洽談合作機會</a></div></div></section>
    <SiteFooter locale="zh" />
  </main>;
}
