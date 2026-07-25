import type { BrowseItem } from "./browseData";
import "./atlas.css";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

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
  const slug = title.toLowerCase().includes("technolog") ? "technologies" : title.toLowerCase().includes("industr") ? "industries" : "locations";
  const languageHref = zh ? `/atlas/${slug}` : `/zh/atlas/${slug}`;

  return <main lang={zh ? "zh-Hant" : "en"}>
    <SiteHeader locale={locale} languageHref={languageHref} />

    <section className="atlas-hero shell">
      <p className="eyebrow">{zh ? eyebrowZh : eyebrow}</p>
      <h1>{zh ? titleZh : title}</h1>
      <p className="lead">{zh ? leadZh : lead}</p>
      <div className="atlas-note">{zh ? "本頁是 Atlas 的主題瀏覽入口。內容將依公開來源、編輯審查與更正機制持續擴充。" : "This is a thematic browse layer of the Atlas. Coverage will expand through public sources, editorial review and corrections."}</div>
      <div className="actions"><a className="pill secondary" href={atlasHref}>← {zh ? "返回 Atlas" : "Back to Atlas"}</a></div>
    </section>

    <section className="section shell">
      <div className="atlas-category-grid">{items.map((item, index) => <article className="atlas-category-card" key={item.slug}>
        <span className="num">{String(index + 1).padStart(2, "0")}</span>
        <h3>{zh ? item.titleZh : item.title}</h3>
        <p>{zh ? item.summaryZh : item.summary}</p>
        <div className="atlas-company-list">{item.examples.map(example => <span key={example}>{example}</span>)}</div>
        <strong>{zh ? "主題節點建置中" : "Topic node in development"}</strong>
      </article>)}</div>
    </section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">{zh ? "市場合作" : "Market development"}</p><h2>{zh ? "正在尋找加拿大市場中的技術、夥伴或應用機會？" : "Looking for technologies, partners or applications in Canada?"}</h2></div><div className="actions"><a className="pill primary" href={contactHref}>{zh ? "聯絡 FlyPig AI" : "Contact FlyPig AI"}</a></div></div></section>
    <SiteFooter locale={locale} />
  </main>;
}