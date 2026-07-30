import "./site-chrome.css";

type Locale = "en" | "zh";

type HeaderProps = {
  locale?: Locale;
  languageHref?: string;
};

export function SiteHeader({ locale = "en", languageHref }: HeaderProps) {
  const zh = locale === "zh";
  const home = zh ? "/zh" : "/";
  const services = zh ? "/zh/services" : "/services";
  const atlas = zh ? "/zh/atlas" : "/atlas";
  const about = zh ? "/zh/about" : "/about";
  const contact = zh ? "/zh/contact" : "/contact";
  const switchHref = languageHref ?? (zh ? "/" : "/zh");

  return <header className="shell nav">
    <a className="brand" href={home}><span className="mark">FP</span><span>FlyPig AI</span></a>
    <nav className="navlinks" aria-label={zh ? "主要導覽" : "Primary navigation"}>
      <a href={services}>{zh ? "服務" : "Services"}</a>
      <a href={atlas}>Atlas</a>
      <a href="/insights">Insights</a>
      <a href={about}>{zh ? "關於" : "About"}</a>
      <a href={switchHref} className="lang-link" lang={zh ? "en" : "zh-Hant"}>{zh ? "EN" : "繁中"}</a>
    </nav>
    <a className="pill secondary" href={contact}>{zh ? "聯絡我們" : "Contact us"}</a>
  </header>;
}

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const zh = locale === "zh";
  const atlas = zh ? "/zh/atlas" : "/atlas";
  const methodology = zh ? "/zh/atlas/methodology" : "/atlas/methodology";
  const submit = zh ? "/zh/atlas/submit" : "/atlas/submit";
  const privacy = zh ? "/zh/privacy" : "/privacy";

  return <footer className="shell footer site-footer">
    <div><strong>FlyPig AI</strong><span>{zh ? "加拿大機器人市場開發與商業化" : "Robotics market development and commercialization in Canada"}</span></div>
    <div><strong>Canada Physical AI Atlas</strong><span>{zh ? "FlyPig AI 發起的市場研究與產業圖譜計畫" : "A market-research and ecosystem-mapping initiative by FlyPig AI"}</span></div>
    <div className="footer-links"><a href={atlas}>Atlas</a><a href={methodology}>{zh ? "收錄方法" : "Methodology"}</a><a href={submit}>{zh ? "提交收錄" : "Submit"}</a><a href={privacy}>{zh ? "隱私" : "Privacy"}</a></div>
    <div className="footer-legal"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>{zh ? "商業服務與公開研究計畫分別揭露" : "Commercial services and public research are separately disclosed"}</span></div>
  </footer>;
}
