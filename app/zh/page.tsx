import type { Metadata } from "next";

export const metadata: Metadata = { title: "FlyPig AI｜加拿大機器人市場開發與商業化", description: "為機器人與 Physical AI 業者提供加拿大市場開發、在地代表、供應商搜尋與商業化支援。" };

const services = [
  ["01", "市場開發", "理解加拿大市場、辨識目標產業，並發展具資格的商業機會。"],
  ["02", "合作夥伴與通路", "串接整合商、經銷商、營運業者、研究機構與 Pilot 客戶。"],
  ["03", "在地市場代表", "持續進行技術商務溝通，追蹤並推進經篩選的合作機會。"],
  ["04", "供應商搜尋與評估", "協助加拿大業者辨識並評估合適的亞洲機器人技術與供應商。"],
];

export default function ZhHomePage() {
  return <main lang="zh-Hant">
    <header className="shell nav"><a className="brand" href="/zh"><span className="mark">FP</span><span>FlyPig AI</span></a><nav className="navlinks"><a href="/zh/services">服務</a><a href="/zh/atlas">Atlas</a><a href="/insights">Insights</a><a href="/zh/about">關於</a><a href="/" className="lang-link">EN</a></nav><a className="pill secondary" href="/zh/contact">聯絡我們</a></header>

    <section className="hero home-hero"><div className="shell hero-grid home-hero-grid"><div className="home-hero-copy"><p className="eyebrow">機器人 · Physical AI · 加拿大</p><h1>為先進機器人技術發展真實市場機會。</h1><p className="lead">FlyPig AI 是服務加拿大與亞洲市場的機器人、無人機、自主系統及關鍵零組件市場開發與商業化合作夥伴。</p><div className="actions"><a className="pill primary" href="/zh/contact">洽談市場機會</a><a className="pill secondary" href="/zh/services">查看服務</a><a className="pill secondary" href="/zh/atlas">探索 Atlas</a></div></div><aside className="signal-card home-signal-card"><p className="eyebrow">商業角色</p><div className="signal-line"><span>市場</span><strong>加拿大</strong></div><div className="signal-line"><span>角色</span><strong>市場開發＋在地代表</strong></div><div className="signal-line"><span>領域</span><strong>機器人＋Physical AI</strong></div><div className="signal-line"><span>路徑</span><strong>研究 → 合作 → Pilot → 規模化</strong></div></aside></div></section>

    <div className="ticker">市場開發 · 在地代表 · 合作夥伴開發 · 供應商搜尋 · Pilot 協調 · 商業化</div>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">商業服務</p><h2>從理解市場，到推動執行。</h2></div><p className="section-copy">我們服務製造商、零組件供應商、整合商與營運業者。合作可能涵蓋研究、夥伴開發、在地代表、供應商搜尋、引介、經銷或專案型商業化支援。</p></div><div className="grid3">{services.slice(0,3).map(([n,t,d]) => <article className="card" key={t}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div><div className="grid3" style={{marginTop:18}}><article className="card"><span className="num">04</span><h3>{services[3][1]}</h3><p>{services[3][2]}</p></article><article className="card"><span className="num">合作模式</span><h3>依階段彈性設計。</h3><p>可採固定範圍專案、月度市場開發、代理、引介、經銷，或在合適情況下採成果導向合作。</p></article><article className="card"><span className="num">第一步</span><h3>先確認是否適合。</h3><p>釐清產品、市場適配、出口準備、售後支援與合理的加拿大進入路徑。</p></article></div><div className="actions"><a className="pill secondary" href="/zh/services">查看完整服務</a></div></section>

    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">FlyPig AI 公開研究子專案</p><h2>Canada Physical AI Atlas</h2></div><div><p className="section-copy">以公開資訊整理加拿大公司、技術、產業與地區生態系的市場研究與產業圖譜計畫。Atlas 用來協助理解市場，不是政府官方名錄，也不代表對收錄機構的背書。</p><div className="actions"><a className="pill primary" href="/zh/atlas">探索 Atlas</a><a className="pill secondary" href="/zh/atlas/methodology">了解收錄方法</a></div></div></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">雙向服務</p><h2>進入加拿大，也協助加拿大尋找技術。</h2></div><p className="section-copy">全球供應商可發展加拿大通路與客戶；加拿大業者則可尋找並評估合適的亞洲技術與製造夥伴。</p></div><div className="grid3"><article className="card"><span className="num">全球供應商</span><h3>進入加拿大</h3><p>市場評估、合作夥伴、在地代表、Pilot 與商業化。</p></article><article className="card"><span className="num">加拿大業者</span><h3>尋找技術</h3><p>供應商搜尋、技術資格評估、引介與試點協調。</p></article><article className="card"><span className="num">公開研究</span><h3>理解生態系</h3><p>透過 Atlas 與 Insights 探索公司、技術、應用與地區。</p></article></div></section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">加拿大市場開發</p><h2>你希望銷售、採購或部署什麼技術？</h2></div><div className="actions"><a className="pill primary" href="/zh/contact">聯絡 FlyPig AI</a></div></div></section>
    <footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>商業服務 · Canada Physical AI Atlas · Insights</span></footer>
  </main>;
}