import type { Metadata } from "next";
import ContactForm from "../../../components/ContactForm";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { formattedAddress, siteIdentity } from "../../../lib/site";
import { makeMetadata } from "../../seo";

export const metadata: Metadata = makeMetadata({ title: "聯絡 FlyPig AI", description: "分享加拿大產品需求、台灣 Edge AI 技術來源、Atlas 更正或研究詢問。", path: "/zh/contact", enPath: "/contact", zhPath: "/zh/contact", locale: "zh_TW" });

export default function ZhContactPage() {
  return <main lang="zh-Hant"><SiteHeader locale="zh" languageHref="/contact" />
    <section className="contact-hero shell"><p className="eyebrow">聯絡 FlyPig AI</p><h1>告訴我們，需要釐清哪一個技術或應用決策。</h1><p className="lead">可提出加拿大產品的台灣技術資格評估、台灣產品的加拿大 Design-In 準備度問題、Atlas 更正或聚焦的編輯詢問。公開報導不代表既有供應商合作關係。</p></section>
    <section className="contact-layout shell"><aside className="contact-aside"><p className="eyebrow">適合對象</p><h2>產品需求、技術能力與資料更正。</h2><div className="contact-note"><strong>台灣科技業者</strong><span>分享公開產品來源、應用證據，以及希望驗證的加拿大 Design-In 問題。</span></div><div className="contact-note"><strong>加拿大產品團隊</strong><span>說明產品目標、操作限制，以及尚未確定的 Edge AI、嵌入式、視覺或感測路徑。</span></div><div className="contact-note"><strong>Atlas 資料提交</strong><span>更正與收錄建議會接受編輯審查，提交不保證收錄。</span></div><div className="contact-note"><strong>營運主體：{siteIdentity.legalName}</strong><span>{formattedAddress()}<br /><a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a></span></div><p className="small-copy">初次聯絡請勿提交機密技術、BOM、價格、客戶或未公開商業資料。</p></aside><ContactForm locale="zh" /></section>
    <SiteFooter locale="zh" />
  </main>;
}
