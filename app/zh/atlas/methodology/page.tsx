import "../../../atlas/atlas.css";

export default function ZhMethodologyPage() {
  const principles = [
    ["收錄範圍", "機構需在加拿大具備實質營運、研究、部署能力，或與機器人、無人機、自主系統及關鍵技術市場具有明確關聯。"],
    ["代表性選擇", "初期分類頁以少量編輯選輯呈現生態系輪廓，不代表排名、背書或完整名單。"],
    ["分類方式", "同一機構未來可能同時出現在生態系角色、技術、產業與地區等不同瀏覽入口。"],
    ["資料來源", "公司資料將以官方網站、公開機構資訊、政府紀錄及可辨識來源為基礎整理。"],
    ["更新機制", "Atlas 是持續更新的資源，分類、描述與機構狀態將隨時間擴充與檢視。"],
    ["更正與建議", "機構可透過提交頁面要求更正、提供更新資訊或推薦新增收錄。"]
  ];
  return <main lang="zh-Hant">
    <header className="shell nav"><a className="brand" href="/zh"><span className="mark">FP</span><span>FlyPig AI</span></a><nav className="navlinks"><a href="/zh/atlas">產業圖譜</a><a href="/zh/atlas/technologies">技術</a><a href="/zh/atlas/industries">產業</a><a href="/atlas/methodology">EN</a></nav><a className="pill secondary" href="/zh/atlas/submit">提交收錄</a></header>
    <section className="atlas-hero shell"><p className="eyebrow">編輯與收錄標準</p><h1>Atlas 收錄方法</h1><p className="lead">說明 Canada Physical AI Atlas 如何選擇、分類與維護加拿大生態系資料。</p></section>
    <section className="section shell"><div className="grid3">{principles.map(([title, body], index) => <article className="card" key={title}><span className="num">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">更正與新增</p><h2>協助 Atlas 維持準確與實用。</h2></div><div className="actions"><a className="pill primary" href="/zh/atlas/submit">提交資訊</a></div></div></section>
    <footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>Canada Physical AI Atlas</span></footer>
  </main>;
}
