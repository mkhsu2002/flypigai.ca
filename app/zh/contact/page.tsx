import type { Metadata } from "next";
import ContactForm from "../../../components/ContactForm";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";

export const metadata: Metadata = {
  title: "聯絡 FlyPig AI",
  description: "告訴我們您的機器人、無人機、關鍵零組件採購或加拿大市場開發需求。",
};

export default function ZhContactPage() {
  return <main lang="zh-Hant">
    <SiteHeader locale="zh" languageHref="/contact" />
    <section className="contact-hero shell">
      <p className="eyebrow">聯絡 FlyPig AI</p>
      <h1>告訴我們，您希望銷售、採購或部署什麼技術。</h1>
      <p className="lead">這份問卷能協助我們判斷 FlyPig AI 是否適合承接您的加拿大市場開發、技術搜尋或部署合作。</p>
    </section>
    <section className="contact-layout shell">
      <aside className="contact-aside">
        <p className="eyebrow">適合對象</p>
        <h2>同一個市場的供應與需求兩端。</h2>
        <div className="contact-note"><strong>全球技術與零組件廠商</strong><span>加拿大市場驗證、合作夥伴開發、在地代表、Pilot 規劃與商業化。</span></div>
        <div className="contact-note"><strong>加拿大本土業者</strong><span>技術搜尋、供應商資格評估、規格釐清與跨境合作協調。</span></div>
        <div className="contact-note"><strong>Atlas 資料提交</strong><span>更正與收錄建議會接受編輯審查，提交不代表保證收錄。</span></div>
        <p className="small-copy">我們通常會在兩個工作日內回覆。此階段請勿提交機密技術資料。</p>
      </aside>
      <ContactForm locale="zh" />
    </section>
    <SiteFooter locale="zh" />
  </main>;
}