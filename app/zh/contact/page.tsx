import type { Metadata } from "next";
import ContactForm from "../../../components/ContactForm";

export const metadata: Metadata = {
  title: "聯絡 FlyPig AI",
  description: "告訴我們您的機器人、無人機、關鍵零組件採購或加拿大市場開發需求。",
};

export default function ZhContactPage() {
  return <main lang="zh-Hant">
    <header className="shell nav">
      <a className="brand" href="/zh"><span className="mark">FP</span><span>FlyPig AI</span></a>
      <nav className="navlinks"><a href="/zh">首頁</a><a href="/insights">Insights</a><a href="/contact" className="lang-link">EN</a></nav>
      <a className="pill secondary" href="/contact">EN</a>
    </header>

    <section className="contact-hero shell">
      <p className="eyebrow">聯絡 FlyPig AI</p>
      <h1>告訴我們，您正在開發、尋找，或準備推向市場的是什麼。</h1>
      <p className="lead">這份問卷能協助我們快速判斷，您是希望進入加拿大市場的全球技術供應商，或正在尋找合適機器人與無人機技術的加拿大本土業者。</p>
    </section>

    <section className="contact-layout shell">
      <aside className="contact-aside">
        <p className="eyebrow">適合對象</p>
        <h2>同一個市場機會的兩端。</h2>
        <div className="contact-note"><strong>全球技術與零組件廠商</strong><span>加拿大市場驗證、合作夥伴開發、Pilot 規劃，以及持續性的在地業務發展。</span></div>
        <div className="contact-note"><strong>加拿大本土業者</strong><span>技術搜尋、供應商資格評估、規格釐清，以及跨境合作協調。</span></div>
        <p className="small-copy">我們通常會在兩個工作日內回覆。此階段請勿提交機密技術資料。</p>
      </aside>
      <ContactForm locale="zh" />
    </section>

    <footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>機器人 · 無人機 · 自主系統 · 市場開發</span></footer>
  </main>;
}
