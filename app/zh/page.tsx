import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlyPig AI｜加拿大機器人與無人機市場開發",
  description: "協助全球機器人、無人機與關鍵零組件廠商進入加拿大市場，並協助加拿大業者尋找合適的亞洲技術與供應鏈。",
};

const capabilities = [
  ["01", "加拿大市場開發", "協助機器人、無人機、自主系統與關鍵零組件廠商辨識加拿大相關產業、目標客戶、合作夥伴與早期商業機會。"],
  ["02", "產業合作夥伴開發", "串接加拿大系統整合商、經銷通路、營運業者、研究機構與具備實際需求的 Pilot 客戶。"],
  ["03", "技術與商務雙向溝通", "跨越語言、商業文化與應用情境，釐清產品規格、使用案例、合作模式與市場期待。"],
  ["04", "商業化推進", "協助機會從初次接觸，推進至技術評估、Pilot 討論、通路發展與長期市場參與。"],
];

const focusAreas = [
  "機器人控制器與邊緣運算模組",
  "導航、GNSS、LiDAR 與機器視覺",
  "馬達、致動器、電池與電源系統",
  "無人機酬載、通訊與自主飛行零組件",
  "四足、人形、UGV 與 UAV 平台",
  "OEM、ODM 與技術授權合作",
];

export default function ZhHomePage() {
  return <main lang="zh-Hant">
    <header className="shell nav">
      <a className="brand" href="/zh"><span className="mark">FP</span><span>FlyPig AI</span></a>
      <nav className="navlinks"><a href="#capabilities">服務能力</a><a href="#focus">技術領域</a><a href="/insights">Insights</a><a href="#about">關於我們</a><a href="/">EN</a></nav>
      <a className="pill secondary" href="/zh/contact">聯絡我們</a>
    </header>

    <section className="hero home-hero">
      <div className="shell hero-grid home-hero-grid">
        <div className="home-hero-copy">
          <p className="eyebrow">機器人 · 無人機 · 自主系統 · 加拿大</p>
          <h1>先進機器人技術，對接加拿大真實市場機會。</h1>
          <p className="lead">FlyPig AI 協助全球機器人、無人機與關鍵零組件廠商拓展加拿大市場，也協助加拿大業者尋找合適的亞洲技術與供應鏈。</p>
          <div className="actions">
            <a className="pill primary" href="/zh/contact">洽談加拿大市場</a>
            <a className="pill secondary" href="#capabilities">了解服務能力</a>
            <a className="pill secondary" href="/insights">閱讀產業洞察</a>
          </div>
        </div>
        <aside className="signal-card home-signal-card">
          <p className="eyebrow">市場開發重點</p>
          <div className="signal-line"><span>市場</span><strong>加拿大</strong></div>
          <div className="signal-line"><span>技術</span><strong>機器人與自主系統</strong></div>
          <div className="signal-line"><span>方法</span><strong>技術＋商務</strong></div>
          <div className="signal-line"><span>路徑</span><strong>研究 → 合作 → Pilot → 規模化</strong></div>
        </aside>
      </div>
    </section>

    <div className="ticker">機器人零組件 · 無人機系統 · 邊緣 AI · 自主控制 · 感測器 · 市場開發 · 產業合作 · Pilot 機會</div>

    <section id="capabilities" className="section shell">
      <div className="section-head"><div><p className="eyebrow">我們能做什麼</p><h2>進入市場，不只是找到一份經銷商名單。</h2></div><p className="section-copy">成功進入加拿大，需要市場脈絡、技術可信度、正確的在地關係，以及持續推進能力。FlyPig AI 協助技術廠商理解自身定位、找到關鍵對象，並設計合理的第一步商業行動。</p></div>
      <div className="grid3">{capabilities.slice(0,3).map(([n,t,d])=><article className="card" key={t}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      <div className="grid3" style={{marginTop:18}}>
        <article className="card"><span className="num">04</span><h3>{capabilities[3][1]}</h3><p>{capabilities[3][2]}</p></article>
        <article className="card"><span className="num">跨市場理解</span><h3>技術、商務與文化。</h3><p>結合亞洲產業人脈與製造 Know-how，以及加拿大市場研究、業務開發與在地營運理解。</p></article>
        <article className="card"><span className="num">合作模式</span><h3>聚焦、務實、以證據推進。</h3><p>可從市場驗證與合作夥伴搜尋開始，再逐步延伸至商機開發、Pilot 協調或持續性市場代表。</p></article>
      </div>
    </section>

    <section id="focus" className="section dark"><div className="shell">
      <div className="section-head"><div><p className="eyebrow">技術焦點</p><h2>驅動 Physical AI 的關鍵技術。</h2></div><p className="section-copy">我們關注的不只完整機器人，也涵蓋讓自主機器能夠被整合、部署與長期維運的核心零組件、模組與子系統。</p></div>
      <div className="grid3">{focusAreas.map((item,i)=><article className="card" key={item}><span className="num">0{i+1}</span><h3>{item}</h3></article>)}</div>
    </div></section>

    <section className="section shell">
      <div className="section-head"><div><p className="eyebrow">服務加拿大業者</p><h2>更有效率地接觸新興機器人供應鏈。</h2></div><p className="section-copy">加拿大系統整合商與終端業者往往知道需要什麼能力，卻不容易判斷海外供應商是否可信、能否出口、是否適合整合。FlyPig AI 協助釐清需求、辨識合適技術並促成有效率的供應商對話。</p></div>
      <div className="grid3">
        <article className="card"><span className="num">01</span><h3>技術搜尋</h3><p>從亞洲機器人與無人機產業鏈中，找出合適的零組件廠商、平台公司與製造能力。</p></article>
        <article className="card"><span className="num">02</span><h3>供應商資格評估</h3><p>在深入合作前，先釐清規格、整合限制、客製能力、交付成熟度與商業適配度。</p></article>
        <article className="card"><span className="num">03</span><h3>合作關係開發</h3><p>協助雙方展開技術討論、Pilot 規劃，以及建立長期合作的早期基礎。</p></article>
      </div>
    </section>

    <section id="about" className="section shell founder">
      <div><p className="eyebrow">創辦人主導</p><h2>建立在跨境實務經驗之上。</h2><p className="section-copy">FlyPig AI 由 M.K. Hsu 創立，長期往返加拿大與台灣，投入 AI 自動化、數位產品、電子商務及跨境業務開發。這些經驗形成對亞洲技術供應與加拿大市場期待的雙向理解。</p><div className="actions"><a className="pill secondary" href="https://mkhsu.icareu.tw/" target="_blank" rel="noreferrer">創辦人介紹 ↗</a></div></div>
      <div className="founder-card"><span className="mono">加拿大機器人市場開發</span><h3>M.K. Hsu</h3><p>讓技術能力找到真實市場機會。</p></div>
    </section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">加拿大市場開發</p><h2>正在尋找進入加拿大市場的正確第一步？</h2></div><div className="actions"><a className="pill primary" href="/zh/contact">聯絡我們</a></div></div></section>
    <footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>機器人 · 無人機 · 自主系統 · 市場開發</span></footer>
  </main>;
}
