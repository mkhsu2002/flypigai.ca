import type { Metadata } from "next";
import "../../atlas/atlas.css";
import { atlasCategories } from "../../atlas/data";

export const metadata: Metadata = {
  title: "加拿大 Physical AI 產業圖譜｜FlyPig AI",
  description: "加拿大機器人、無人機、自主系統、整合商、關鍵技術、研究機構與產業應用者的精選產業名錄。",
};

export default function ZhAtlasPage() {
  return <main lang="zh-Hant">
    <header className="shell nav">
      <a className="brand" href="/zh"><span className="mark">FP</span><span>FlyPig AI</span></a>
      <nav className="navlinks"><a href="/zh/atlas">產業圖譜</a><a href="/zh#capabilities">服務能力</a><a href="/insights">Insights</a><a href="/atlas">EN</a></nav>
      <a className="pill secondary" href="/zh/contact">聯絡我們</a>
    </header>
    <section className="atlas-hero shell"><p className="eyebrow">加拿大機器人產業生態系</p><h1>Canada Physical AI Atlas</h1><p className="lead">持續更新的加拿大機器人、無人機、自主系統、關鍵技術、系統整合、研究機構與產業需求地圖。</p><div className="atlas-stats"><div><strong>{atlasCategories.length}</strong><span>個生態系分類</span></div><div><strong>{atlasCategories.reduce((sum, category) => sum + category.companies.length, 0)}</strong><span>家首批收錄機構</span></div><div><strong>Canada</strong><span>加拿大市場焦點</span></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">探索產業生態系</p><h2>從關鍵技術，一路連接到真實產業部署。</h2></div><p className="section-copy">Atlas 依照不同機構在市場中的角色分類，包括技術研發、平台製造、系統整合、研究與產業採用。每個分類先收錄 6 家代表性機構，後續將持續擴充。</p></div><div className="atlas-category-grid">{atlasCategories.map((category, index) => <a className="atlas-category-card" href={`/zh/atlas/${category.slug}`} key={category.slug}><span className="num">{String(index + 1).padStart(2, "0")} · {category.layerZh}</span><h3>{category.titleZh}</h3><p>{category.summaryZh}</p><div className="atlas-company-list">{category.companies.map(company => <span key={company.name}>{company.name}</span>)}</div><strong>查看分類 →</strong></a>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">如何使用 Atlas</p><h2>同時服務供應端與加拿大需求端。</h2></div><p className="section-copy">全球供應商可以藉此理解加拿大市場的進入路徑；加拿大業者則能發現本土能力，並辨識適合導入海外技術的供應缺口。</p></div><div className="grid3"><article className="card"><span className="num">01</span><h3>尋找市場通路</h3><p>辨識與技術或應用情境相關的整合商、研究夥伴與產業營運者。</p></article><article className="card"><span className="num">02</span><h3>理解產業堆疊</h3><p>掌握零組件、平台、軟體、系統整合與產業需求之間的關係。</p></article><article className="card"><span className="num">03</span><h3>發展合作機會</h3><p>以產業地圖作為供應商資格評估、合作引介與 Pilot 開發的起點。</p></article></div></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">加入或合作</p><h2>你的公司是否也應該被收錄在 Atlas？</h2></div><div className="actions"><a className="pill primary" href="/zh/contact">聯絡我們</a></div></div></section><footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>Canada Physical AI Atlas</span></footer>
  </main>;
}
