import "../../../atlas/atlas.css";
import { SiteFooter, SiteHeader } from "../../../../components/SiteChrome";

export default function ZhMethodologyPage() {
  const principles = [
    ["收錄範圍", "機構需在加拿大具備實質營運、研究、部署能力，或與機器人、無人機、自主系統及關鍵技術市場具有明確關聯。"],
    ["代表性選擇", "初期分類頁以有限的編輯選輯呈現生態系輪廓，不代表排名、背書或完整名單。"],
    ["分類方式", "同一機構可能同時出現在生態系角色、技術、產業與地區等不同瀏覽入口。"],
    ["資料來源", "資料以官方網站、公開機構資訊、政府紀錄及其他可辨識來源為基礎，重要敘述應可追溯。"],
    ["編輯原則", "描述由 FlyPig AI 自行撰寫或摘要，不直接複製第三方商業資料庫；能以中性事實表述時，避免使用宣傳式語言。"],
    ["更新與更正", "Atlas 是持續更新的資源，分類、描述與機構狀態將定期檢視、擴充與修正。"]
  ];
  return <main lang="zh-Hant">
    <SiteHeader locale="zh" languageHref="/atlas/methodology" />
    <section className="atlas-hero shell"><p className="eyebrow">編輯與收錄標準</p><h1>Atlas 收錄方法</h1><p className="lead">說明 Canada Physical AI Atlas 如何選擇、分類、揭露與維護加拿大生態系資料。</p><div className="atlas-note">Atlas 是 FlyPig AI 發起的市場研究計畫，不是政府官方名錄、認證制度或投資建議。</div></section>
    <section className="section shell"><div className="grid3">{principles.map(([title, body], index) => <article className="card" key={title}><span className="num">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">商業關係揭露</p><h2>公開研究與商業服務分別揭露。</h2></div><p className="section-copy">FlyPig AI 提供市場開發、供應商搜尋、在地代表及商業化服務。Atlas 收錄的機構可能是現有、過往或潛在客戶與合作對象；商業關係不應自動決定是否收錄或其編輯呈現。贊助內容或正式代理關係應清楚標示。</p></div></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">更正與新增</p><h2>協助 Atlas 維持準確與實用。</h2></div><div className="actions"><a className="pill primary" href="/zh/atlas/submit">提交資訊</a></div></div></section>
    <SiteFooter locale="zh" />
  </main>;
}