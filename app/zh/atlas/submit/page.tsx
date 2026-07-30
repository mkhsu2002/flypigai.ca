import type { Metadata } from "next";
import "../../../atlas/atlas.css";
import { SiteFooter, SiteHeader } from "../../../../components/SiteChrome";
import { makeMetadata } from "../../../seo";

export const metadata: Metadata = makeMetadata({
  title: "提交機構至 Canada Physical AI Atlas",
  description: "推薦適合接受 Canada Physical AI Atlas 編輯審查的加拿大機器人、無人機、自動化、研究或產業組織。",
  path: "/zh/atlas/submit",
  enPath: "/atlas/submit",
  zhPath: "/zh/atlas/submit",
  locale: "zh_TW",
});

export default function ZhSubmitAtlasPage() {
  return <main lang="zh-Hant">
    <SiteHeader locale="zh" languageHref="/atlas/submit" />
    <section className="atlas-hero shell"><p className="eyebrow">社群提交</p><h1>提交收錄機構</h1><p className="lead">推薦適合接受 Canada Physical AI Atlas 編輯審查的加拿大公司、研究機構、系統整合商、產業營運者或生態系組織。</p><div className="atlas-note">提交不代表保證收錄。我們會依加拿大實質活動、主題相關性、資料來源品質與 Atlas 範圍進行審查。</div></section>
    <section className="section shell"><div className="grid3"><article className="card"><span className="num">01</span><h3>新增收錄</h3><p>推薦投入機器人、無人機、自主系統、工業 AI 或關鍵技術的加拿大機構。</p></article><article className="card"><span className="num">02</span><h3>資訊更新</h3><p>提交網站、所在地、技術焦點或其他重大資料的更正，並附上可查證來源。</p></article><article className="card"><span className="num">03</span><h3>研究貢獻</h3><p>推薦公開資源、案例研究、區域地圖或與生態系相關的研究合作。</p></article></div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">建議提供</p><h2>讓編輯審查有足夠依據。</h2></div><p className="section-copy">請提供機構名稱、官方網站、加拿大所在地或實質活動、相關技術或產業角色，以及建議收錄原因。若您代表該機構，或與 FlyPig AI 存在商業關係，也請一併揭露。</p></div></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">提交方式</p><h2>請透過 FlyPig AI 聯絡表單提交機構資訊。</h2></div><div className="actions"><a className="pill primary" href="/zh/contact">開啟聯絡表單</a><a className="pill secondary" href="/zh/atlas/methodology">查看收錄方法</a></div></div></section>
    <SiteFooter locale="zh" />
  </main>;
}
