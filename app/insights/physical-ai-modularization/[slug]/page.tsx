import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "../../../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../../../components/SiteChrome";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../../../seo";
import { getSeriesArticle, physicalAiSeries, seriesDate, seriesPath, seriesTitle } from "../series";

const articleImage = `${siteUrl}/images/og/flypig-ai-default.png`;

export function generateStaticParams() { return physicalAiSeries.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getSeriesArticle(slug);
  if (!article) return {};
  return makeMetadata({ title: article.title, description: article.description, path: `${seriesPath}/${article.slug}`, enPath: `${seriesPath}/${article.slug}`, type: "article", article: { publishedTime: seriesDate, modifiedTime: seriesDate, authors: ["FlyPig AI"], section: "Physical AI Goes Modular", tags: ["Physical AI", "Robotics", "Robot OS", "Edge AI", "Embodied AI"] } });
}

export default async function SeriesArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getSeriesArticle(slug);
  if (!article) notFound();
  const index = physicalAiSeries.findIndex((item) => item.slug === article.slug);
  const previous = index > 0 ? physicalAiSeries[index - 1] : null;
  const next = index < physicalAiSeries.length - 1 ? physicalAiSeries[index + 1] : null;

  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: seriesTitle, path: seriesPath }, { name: article.title, path: `${seriesPath}/${article.slug}` }])} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: seriesDate, dateModified: seriesDate, author: { "@type": "Organization", name: "FlyPig AI", url: siteUrl }, publisher: { "@id": `${siteUrl}/#organization` }, image: { "@type": "ImageObject", url: articleImage, width: 1200, height: 630 }, mainEntityOfPage: `${siteUrl}${seriesPath}/${article.slug}`, articleSection: "Physical AI Goes Modular", citation: article.sources.map((source) => source.url), inLanguage: "en-CA" }} />
    <SiteHeader />
    <article className="article-shell shell">
      <header className="article-header"><p className="eyebrow">Physical AI Goes Modular · Essay {article.number}</p><h1>{article.title}</h1><p className="article-deck">{article.description}</p><div className="article-meta"><span>By FlyPig AI Insights</span><span>Published September 5, 2026</span><span>Research series</span></div></header>
      <div className="article-lead-card"><span className="mono">Short answer</span><p>{article.answer}</p></div>
      <div className="article-body">{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p>{section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}</section>)}</div>
      <aside className="source-note"><p className="eyebrow">Evidence boundary</p><p>This essay is a FlyPig AI market-structure analysis. Analogies to smartphones, Android or reference designs are analytical frameworks, not claims that robotics has already converged on a single architecture. Product and platform capabilities should be verified against current vendor documentation.</p><h2>Primary references</h2><ul>{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name} ↗</a></li>)}</ul><div className="source-links"><a href={seriesPath}>Series hub →</a><a href="/technologies">Technology Intelligence →</a><a href="/atlas">Canada Atlas →</a></div></aside>
      <div className="article-cta"><div><p className="eyebrow">Continue the series</p><h2>{next ? next.title : "Explore the complete Physical AI modularization thesis"}</h2></div><div className="actions">{previous ? <a className="pill secondary" href={`${seriesPath}/${previous.slug}`}>← Previous</a> : <a className="pill secondary" href={seriesPath}>Series hub</a>}{next ? <a className="pill primary" href={`${seriesPath}/${next.slug}`}>Next essay →</a> : <a className="pill primary" href={seriesPath}>Return to series</a>}</div></div>
    </article>
    <SiteFooter />
  </main>;
}
