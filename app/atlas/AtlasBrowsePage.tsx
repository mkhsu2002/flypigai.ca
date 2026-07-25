import type { BrowseItem } from "./browseData";
import "./atlas.css";

type Props = {
  locale?: "en" | "zh";
  eyebrow: string;
  eyebrowZh: string;
  title: string;
  titleZh: string;
  lead: string;
  leadZh: string;
  items: BrowseItem[];
};

export default function AtlasBrowsePage({ locale = "en", eyebrow, eyebrowZh, title, titleZh, lead, leadZh, items }: Props) {
  const zh = locale === "zh";
  const atlasHref = zh ? "/zh/atlas" : "/atlas";
  const contactHref = zh ? "/zh/contact" : "/contact";

  return <main lang={zh ? "zh-Hant" : "en"}>
    <header className="shell nav">
      <a className="brand" href={zh ? "/zh" : "/"}><span className="mark">FP</span><span>FlyPig AI</span></a>
      <nav className="navlinks"><a href={atlasHref}>{zh ? "產業圖譜" : "Atlas"}</a><a href={`${atlasHref}/technologies`}>{zh ? "技術" : "Technologies"}</a><a href={`${atlasHref}/industries`}>{zh ? "產業" : "Industries"}</a><a href={`${atlasHref}/locations`}>{zh ? "地區" : "Locations"}</a><a href={zh ? title === titleZh ? "/atlas" : "/atlas" : `/zh${atlasHref}`}>{zh ? "EN" : "繁中"}</a></nav>
      <a className="pill secondary" href={contactHref}>{zh ? "聯絡我們" : "Contact us"}</a>
    </header>

    <section className="atlas-hero shell">
      <p className="eyebrow">{zh ? eyebrowZh : eyebrow}</p>
      <h1>{zh ? titleZh : title}</h1>
      <p className="lead">{zh ? leadZh : lead}</p>
      <div className="actions"><a className="pill secondary" href={atlasHref}>← {zh ? "返回 Atlas" : "Back to Atlas"}</a></div>
    </section>

    <section className="section shell">
      <div className="atlas-category-grid">{items.map((item, index) => <article className="atlas-category-card" key={item.slug}>
        <span className="num">{String(index + 1).padStart(2, "0")}</span>
        <h3>{zh ? item.titleZh : item.title}</h3>
        <p>{zh ? item.summaryZh : item.summary}</p>
        <div className="atlas-company-list">{item.examples.map(example => <span key={example}>{example}</span>)}</div>
        <strong>{zh ? "內容建置中" : "Profile hub in development"}</strong>
      </article>)}</div>
    </section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">{zh ? "市場合作" : "Market development"}</p><h2>{zh ? "正在尋找加拿大市場中的技術、夥伴或應用機會？" : "Looking for technologies, partners or applications in Canada?"}</h2></div><div className="actions"><a className="pill primary" href={contactHref}>{zh ? "聯絡我們" : "Contact us"}</a></div></div></section>
    <footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>Canada Physical AI Atlas</span></footer>
  </main>;
}
