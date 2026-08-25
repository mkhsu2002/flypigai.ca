import "./site-chrome.css";

type Locale = "en" | "zh";

type HeaderProps = {
  locale?: Locale;
  languageHref?: string;
};

export function SiteHeader({ locale = "en", languageHref }: HeaderProps) {
  const zh = locale === "zh";
  const home = zh ? "/zh" : "/";
  const about = zh ? "/zh/about" : "/about";
  const contact = zh ? "/zh/contact" : "/contact";
  const switchHref = languageHref ?? (zh ? "/" : "/zh");

  return <header className="shell nav">
    <a className="brand" href={home}><span className="mark">FP</span><span>FlyPig AI</span></a>
    <nav className="navlinks" aria-label={zh ? "主要導覽" : "Primary navigation"}>
      <a href="/canada">{zh ? "加拿大需求" : "For Canada"}</a>
      <a href="/taiwan">{zh ? "台灣供應商" : "For Taiwan"}</a>
      <a href="/technologies">{zh ? "技術情報" : "Technology Intelligence"}</a>
      <a href="/signals">{zh ? "新品訊號" : "Industry Signals"}</a>
      <a href="/insights">{zh ? "產業分析" : "Insights"}</a>
      <a href={about}>{zh ? "關於" : "About"}</a>
      <a href={switchHref} className="lang-link" lang={zh ? "en" : "zh-Hant"}>{zh ? "EN" : "繁中"}</a>
    </nav>
    <a className="pill secondary" href={contact}>{zh ? "開始合作" : "Start a conversation"}</a>
  </header>;
}

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const zh = locale === "zh";
  const privacy = zh ? "/zh/privacy" : "/privacy";

  return <footer className="shell footer site-footer">
    <div><strong>FlyPig AI</strong><span>{zh ? "加拿大與台灣之間的 Edge AI 與 Physical AI 技術情報橋梁" : "Canada-Taiwan Edge AI and Physical AI design intelligence"}</span></div>
    <div><strong>{zh ? "公開情報，私有機會資料" : "Public intelligence, private opportunity data"}</strong><span>{zh ? "公開內容建立產業權威，專案需求與商業資料依保密原則處理。" : "Public research builds authority; submitted project and commercial data are handled as private by default."}</span></div>
    <div className="footer-links"><a href="/canada">{zh ? "加拿大" : "Canada"}</a><a href="/taiwan">{zh ? "台灣" : "Taiwan"}</a><a href="/technologies">{zh ? "技術" : "Technologies"}</a><a href="/signals">{zh ? "新品訊號" : "Signals"}</a><a href="/insights">{zh ? "分析" : "Insights"}</a><a href={privacy}>{zh ? "隱私" : "Privacy"}</a></div>
    <div className="footer-legal"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>{zh ? "加拿大公司 · 聚焦台灣技術生態" : "A Canadian company focused on Taiwan's technology ecosystem"}</span></div>
  </footer>;
}
