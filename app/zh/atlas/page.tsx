import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import "../../atlas/atlas.css";
import { atlasCategories } from "../../atlas/data";
import { makeMetadata } from "../../seo";

export const metadata: Metadata = makeMetadata({
  title: "加拿大 Physical AI 產業圖譜",
  description: "加拿大機器人、無人機、自主系統、整合商、關鍵技術、研究機構與產業應用者的精選產業名錄。",
  path: "/zh/atlas",
  enPath: "/atlas",
  zhPath: "/zh/atlas",
  locale: "zh_TW",
});

const browseDimensions = [
  ["依生態系角色", "依照機構在 Physical AI 價值鏈中的角色，探索製造商、整合商、研究機構與產業應用者。", "/zh/atlas#ecosystem"],
  ["依技術", "探索機器視覺、導航、機器人軟體、自主平台與關鍵零組件。", "/zh/atlas/technologies"],
  ["依產業", "探索製造、物流、公用事業、礦業、醫療、農業及其他應用市場。", "/zh/atlas/industries"],
  ["依地區", "探索卑詩省、安大略省、魁北克省、亞伯達省與其他區域聚落。", "/zh/atlas/locations"],
  ["收錄方法", "了解機構如何被選擇、分類、查證與更新。", "/zh/atlas/methodology"],
  ["提交收錄", "推薦機構、提出資料更正，或提交值得納入的生態系資源。", "/zh/atlas/submit"],
];

export default function ZhAtlasPage() {
  return <main lang="zh-Hant">
    <SiteHeader locale="zh" languageHref="/atlas" />

    <section className="atlas-hero shell">
      <p className="eyebrow">FlyPig AI 發起的公開研究子專案</p>
      <h1>Canada Physical AI Atlas</h1>
      <p className="lead">持續更新的加拿大機器人、無人機、自主系統、關鍵技術、系統整合、研究機構與產業需求地圖。</p>
      <div className="atlas-note">本 Atlas 是由 FlyPig AI 建立的市場研究與產業圖譜計畫，不是政府官方名錄，也不代表對收錄機構的背書。</div>
      <div className="atlas-stats"><div><strong>{atlasCategories.length}</strong><span>個生態系分類</span></div><div><strong>{atlasCategories.reduce((sum, category) => sum + category.companies.length, 0)}</strong><span>家首批收錄機構</span></div><div><strong>4</strong><span>種探索方式</span></div></div>
    </section>

    <section className="section shell">
      <div className="section-head"><div><p className="eyebrow">探索 Atlas</p><h2>從不同角度理解加拿大生態系。</h2></div><p className="section-copy">同一個市場可以從價值鏈、技術、應用產業與區域聚落切入。這些彼此關聯的入口，構成 Atlas 的核心資訊架構。</p></div>
      <div className="atlas-category-grid">{browseDimensions.map(([title, summary, href], index) => <a className="atlas-category-card" href={href} key={title}><span className="num">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{summary}</p><strong>開始探索 →</strong></a>)}</div>
    </section>

    <section id="ecosystem" className="section dark"><div className="shell">
      <div className="section-head"><div><p className="eyebrow">依生態系角色瀏覽</p><h2>從關鍵技術，一路連接到真實產業部署。</h2></div><p className="section-copy">Atlas 依照不同機構在市場中的角色分類，包括技術研發、平台製造、系統整合、研究與產業採用。每個分類先收錄 6 家代表性機構，後續將持續擴充。</p></div>
      <div className="atlas-category-grid">{atlasCategories.map((category, index) => <a className="atlas-category-card" href={`/zh/atlas/${category.slug}`} key={category.slug}><span className="num">{String(index + 1).padStart(2, "0")} · {category.layerZh}</span><h3>{category.titleZh}</h3><p>{category.summaryZh}</p><div className="atlas-company-list">{category.companies.map(company => <span key={company.name}>{company.name}</span>)}</div><strong>查看分類 →</strong></a>)}</div>
    </div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">如何使用 Atlas</p><h2>同時服務供應端與加拿大需求端。</h2></div><p className="section-copy">全球供應商可以藉此理解加拿大市場的進入路徑；加拿大業者則能發現本土能力，並辨識適合導入海外技術的供應缺口。</p></div><div className="grid3"><article className="card"><span className="num">01</span><h3>尋找市場通路</h3><p>辨識與技術或應用情境相關的整合商、研究夥伴與產業營運者。</p></article><article className="card"><span className="num">02</span><h3>理解產業堆疊</h3><p>掌握零組件、平台、軟體、系統整合與產業需求之間的關係。</p></article><article className="card"><span className="num">03</span><h3>發展合作機會</h3><p>以產業地圖作為供應商資格評估、合作引介與 Pilot 開發的起點。</p></article></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">簡短答案</p><h2>Canada Physical AI Atlas 是什麼？</h2></div><p className="section-copy">Canada Physical AI Atlas 是 FlyPig AI 建立的公開研究地圖，整理加拿大機器人、無人機、自主系統、關鍵技術、研究機構與產業應用組織。它是編輯型市場研究，不是官方名錄、背書清單或投資建議。</p></div></section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">加入或合作</p><h2>你的公司是否也應該被收錄在 Atlas？</h2></div><div className="actions"><a className="pill primary" href="/zh/atlas/submit">提交收錄</a><a className="pill secondary" href="/zh/contact">聯絡 FlyPig AI</a></div></div></section>
    <SiteFooter locale="zh" />
  </main>;
}
