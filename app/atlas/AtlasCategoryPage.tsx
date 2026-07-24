import type { AtlasCategory } from "./data";

type Props = { category: AtlasCategory; locale?: "en" | "zh" };

export default function AtlasCategoryPage({ category, locale = "en" }: Props) {
  const zh = locale === "zh";
  const atlasHref = zh ? "/zh/atlas" : "/atlas";
  const contactHref = zh ? "/zh/contact" : "/contact";

  return <main lang={zh ? "zh-Hant" : "en"}>
    <header className="shell nav">
      <a className="brand" href={zh ? "/zh" : "/"}><span className="mark">FP</span><span>FlyPig AI</span></a>
      <nav className="navlinks"><a href={atlasHref}>{zh ? "產業圖譜" : "Atlas"}</a><a href={zh ? "/zh#capabilities" : "/#capabilities"}>{zh ? "服務能力" : "Capabilities"}</a><a href="/insights">Insights</a><a href={zh ? `/atlas/${category.slug}` : `/zh/atlas/${category.slug}`}>{zh ? "EN" : "繁中"}</a></nav>
      <a className="pill secondary" href={contactHref}>{zh ? "聯絡我們" : "Contact us"}</a>
    </header>

    <section className="atlas-hero shell">
      <a className="atlas-back" href={atlasHref}>← {zh ? "返回 Canada Physical AI Atlas" : "Back to Canada Physical AI Atlas"}</a>
      <p className="eyebrow">{zh ? category.layerZh : category.layer}</p>
      <h1>{zh ? category.titleZh : category.title}</h1>
      <p className="lead">{zh ? category.summaryZh : category.summary}</p>
      <div className="atlas-note">{zh ? "首批收錄 6 家代表性業者。本頁為編輯選輯，並非排名或完整名單。" : "Initial editorial selection of six representative organizations. This is not a ranking or exhaustive directory."}</div>
    </section>

    <section className="section shell atlas-company-grid">
      {category.companies.map((company, index) => <article className="atlas-company" key={company.name}>
        <div className="atlas-company-top"><span className="num">{String(index + 1).padStart(2, "0")}</span><span className="atlas-location">{company.location}</span></div>
        <h2>{company.name}</h2>
        <strong className="atlas-focus">{company.focus}</strong>
        <p>{company.description}</p>
        <div className="atlas-tags">{company.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="atlas-link" href={company.url} target="_blank" rel="noreferrer">{zh ? "前往官方網站 ↗" : "Official website ↗"}</a>
      </article>)}
    </section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">{zh ? "加拿大 Physical AI 市場" : "Canada Physical AI market"}</p><h2>{zh ? "正在尋找合作夥伴、供應商或應用機會？" : "Looking for partners, suppliers or deployment opportunities?"}</h2></div><div className="actions"><a className="pill primary" href={contactHref}>{zh ? "聯絡我們" : "Contact us"}</a></div></div></section>
    <footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>Canada Physical AI Atlas</span></footer>
  </main>;
}
