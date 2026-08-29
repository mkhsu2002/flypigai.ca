import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { getInsightGuide, insightGuides } from "../guides";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../../seo";

const articleImage = `${siteUrl}/images/og/flypig-ai-default.png`;

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}

export function generateStaticParams() {
  return insightGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getInsightGuide(slug);
  if (!guide) return {};
  return makeMetadata({
    title: guide.title,
    description: guide.description,
    path: `/insights/${guide.slug}`,
    enPath: `/insights/${guide.slug}`,
    type: "article",
    article: {
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      authors: ["FlyPig AI"],
      section: "Physical AI in Canada",
      tags: ["Physical AI", "Robotics", "Canada", "Technology intelligence"],
    },
  });
}

export default async function InsightGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getInsightGuide(slug);
  if (!guide) notFound();

  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: guide.title, path: `/insights/${guide.slug}` }])} />
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      author: { "@type": "Organization", name: "FlyPig AI", url: siteUrl },
      publisher: { "@id": `${siteUrl}/#organization` },
      image: { "@type": "ImageObject", url: articleImage, width: 1200, height: 630 },
      mainEntityOfPage: `${siteUrl}/insights/${guide.slug}`,
      articleSection: "Physical AI in Canada",
      citation: guide.sources.map((source) => source.url),
      inLanguage: "en-CA",
    }} />
    <SiteHeader />
    <article className="article-shell shell">
      <header className="article-header">
        <p className="eyebrow">{guide.eyebrow}</p>
        <h1>{guide.title}</h1>
        <p className="article-deck">{guide.description}</p>
        <div className="article-meta"><span>By FlyPig AI Insights</span><span>Published <time dateTime={guide.datePublished}>{formatDate(guide.datePublished)}</time></span><span>Updated <time dateTime={guide.dateModified}>{formatDate(guide.dateModified)}</time></span><span>Guide</span></div>
      </header>

      <div className="article-lead-card"><span className="mono">Short answer</span><p>{guide.answer}</p></div>

      <div className="article-body">
        {guide.sections.map((section) => <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
          {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
        </section>)}
      </div>

      <aside className="source-note">
        <p className="eyebrow">Editorial note</p>
        <p>This guide is an independent design-intelligence framework by FlyPig AI. It is not legal, engineering, certification, procurement or investment advice. Deployment decisions require customer-specific technical, commercial, regulatory and safety assessment.</p>
        <h2>Sources and further verification</h2>
        <ul>{guide.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name} ↗</a></li>)}</ul>
        <div className="source-links"><a href="/atlas">Explore the Atlas →</a><a href="/atlas/methodology">Read the methodology →</a><a href="/contact">Discuss a market question →</a></div>
      </aside>

      <div className="article-cta"><div><p className="eyebrow">Next step</p><h2>{guide.cta}</h2></div><a className="pill primary" href={guide.ctaHref}>Review the engagement</a></div>
    </article>
    <SiteFooter />
  </main>;
}
