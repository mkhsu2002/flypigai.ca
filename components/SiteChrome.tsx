import "./site-chrome.css";
import { formattedAddress, siteIdentity } from "../lib/site";

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
  const navigation = [
    { href: siteIdentity.routes.canadaAtlas, label: zh ? "加拿大 Atlas" : "Canada Atlas", englishOnly: zh },
    { href: siteIdentity.routes.taiwanSolutions, label: zh ? "台灣 Solutions" : "Taiwan Solutions", englishOnly: zh },
    { href: siteIdentity.routes.technologies, label: zh ? "技術情報" : "Technology Intelligence", englishOnly: zh },
    { href: siteIdentity.routes.signals, label: zh ? "產業訊號" : "Industry Signals", englishOnly: zh },
    { href: siteIdentity.routes.insights, label: zh ? "產業分析" : "Insights", englishOnly: zh },
    { href: about, label: zh ? "關於" : "About", englishOnly: false },
  ];

  return <header className="shell nav">
    <a className="brand" href={home}><span className="mark">FP</span><span>FlyPig AI</span></a>
    <nav className="navlinks" aria-label={zh ? "主要導覽" : "Primary navigation"}>
      {navigation.map((item) => <a href={item.href} lang={item.englishOnly ? "en" : undefined} key={item.href}>{item.label}</a>)}
      <a href={switchHref} className="lang-link" lang={zh ? "en" : "zh-Hant"}>{zh ? "EN" : "繁中"}</a>
    </nav>
    <a className="pill secondary desktop-cta" href={contact}>{zh ? "開始對話" : "Start a conversation"}</a>
    <details className="mobile-menu">
      <summary>{zh ? "選單" : "Menu"}</summary>
      <nav aria-label={zh ? "行動版主要導覽" : "Mobile primary navigation"}>
        {navigation.map((item) => <a href={item.href} lang={item.englishOnly ? "en" : undefined} key={item.href}>{item.label}</a>)}
        <a href={switchHref} className="lang-link" lang={zh ? "en" : "zh-Hant"}>{zh ? "EN" : "繁中"}</a>
        <a className="mobile-menu-cta" href={contact}>{zh ? "開始對話" : "Start a conversation"}</a>
      </nav>
    </details>
  </header>;
}

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const zh = locale === "zh";
  const privacy = zh ? "/zh/privacy" : "/privacy";

  return <footer className="shell footer site-footer">
    <div><strong>FlyPig AI</strong><span>{zh ? "加拿大與台灣之間的 Edge AI 與 Physical AI 獨立技術情報" : "Independent Canada-Taiwan Edge AI and Physical AI intelligence"}</span></div>
    <div><strong>{zh ? `營運主體：${siteIdentity.legalName}` : `Operated by: ${siteIdentity.legalName}`}</strong><span>{formattedAddress()}</span><a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a></div>
    <div className="footer-links"><a href="/atlas">{zh ? "加拿大 Atlas" : "Canada Atlas"}</a><a href="/Solutions">{zh ? "台灣 Solutions" : "Taiwan Solutions"}</a><a href="/technologies">{zh ? "技術" : "Technologies"}</a><a href="/signals">{zh ? "訊號" : "Signals"}</a><a href="/insights">{zh ? "分析" : "Insights"}</a><a href="/editorial-policy">{zh ? "編輯政策" : "Editorial policy"}</a><a href={privacy}>{zh ? "隱私" : "Privacy"}</a></div>
    <div className="footer-legal"><span>© 2026 FlyPig AI · Delta, British Columbia</span><span>{zh ? "公開研究不代表供應商授權、背書或正式合作關係。" : "Public research does not imply supplier authorization, endorsement or an official relationship."}</span></div>
  </footer>;
}
