import type { Metadata } from "next";

export const metadata: Metadata = { title: "關於 FlyPig AI", description: "FlyPig AI 是由創辦人主導的加拿大機器人市場開發與商業化服務團隊。" };

export default function ZhAboutPage() {
  return <main lang="zh-Hant">
    <header className="shell nav"><a className="brand" href="/zh"><span className="mark">FP</span><span>FlyPig AI</span></a><nav className="navlinks"><a href="/zh/services">服務</a><a href="/zh/atlas">Atlas</a><a href="/insights">Insights</a><a href="/zh/about">關於</a><a href="/about" className="lang-link">EN</a></nav><a className="pill secondary" href="/zh/contact">聯絡我們</a></header>
    <section className="hero shell"><p className="eyebrow">關於 FlyPig AI</p><h1>連結技術能力與市場執行。</h1><p className="lead">FlyPig AI 是以加拿大為基地、由創辦人主導的商業服務團隊，協助機器人與 Physical AI 業者理解市場、發展關係，並推進加拿大與亞洲之間的商業機會。</p></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">我們是什麼</p><h2>商業合作夥伴，而非官方產業機構。</h2></div><p className="section-copy">FlyPig AI 從事市場開發、在地代表、供應商搜尋與商業化服務，可能透過顧問、引介、代理、經銷或專案合作等方式，服務製造商、零組件供應商、整合商、營運業者與研究夥伴。</p></div><div className="grid3"><article className="card"><span className="num">01</span><h3>創辦人主導</h3><p>直接參與研究、合作洽談與市場開發。</p></article><article className="card"><span className="num">02</span><h3>跨市場理解</h3><p>理解加拿大市場期待，也熟悉亞洲技術與製造供應。</p></article><article className="card"><span className="num">03</span><h3>以證據推進</h3><p>透過研究、資格評估與真實對話發展機會，不以空泛宣稱建立權威。</p></article></div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">公開研究子專案</p><h2>Canada Physical AI Atlas</h2></div><div><p className="section-copy">Atlas 是由 FlyPig AI 發起的市場研究與產業圖譜計畫，整理公司、技術、產業與地區的公開資訊。它不是政府官方名錄，也不代表對收錄機構的背書。</p><div className="actions"><a className="pill primary" href="/zh/atlas">探索 Atlas</a><a className="pill secondary" href="/zh/atlas/methodology">閱讀收錄方法</a></div></div></div></section>
    <section className="section shell founder"><div><p className="eyebrow">創辦人</p><h2>M.K. Hsu</h2><p className="section-copy">M.K. Hsu 長期投入 AI 自動化、數位產品、電子商務與跨境業務開發，工作與生活經驗橫跨台灣及加拿大。</p><div className="actions"><a className="pill secondary" href="https://mkhsu.icareu.tw/" target="_blank" rel="noreferrer">創辦人介紹 ↗</a></div></div><div className="founder-card"><span className="mono">Vancouver · Canada</span><h3>FlyPig AI</h3><p>機器人市場開發與商業化。</p></div></section>
    <footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>商業服務主體 · 公開研究子專案</span></footer>
  </main>;
}