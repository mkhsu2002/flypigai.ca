import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { getInsightGuide, insightGuides } from "../guides";
import { makeMetadata, siteUrl } from "../../seo";

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
  });
}

export default async function InsightGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getInsightGuide(slug);
  if (!guide) notFound();

  return <main>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      author: { "@type": "Organization", name: "FlyPig AI", url: siteUrl },
      publisher: { "@id": `${siteUrl}/#organization` },
      mainEntityOfPage: `${siteUrl}/insights/${guide.slug}`,
      articleSection: "Physical AI in Canada",
      inLanguage: "en-CA",
    }} />
    <SiteHeader />
    <article className="article-shell shell">
      <header className="article-header">
        <p className="eyebrow">{guide.eyebrow}</p>
        <h1>{guide.title}</h1>
        <p className="article-deck">{guide.description}</p>
        <div className="article-meta"><span>FlyPig AI Insights</span><span>July 2026</span><span>Guide</span></div>
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
        <p>This guide is a market-development framework by FlyPig AI. It is not legal, engineering, certification, procurement or investment advice. Deployment decisions require customer-specific technical, commercial, regulatory and safety assessment.</p>
        <div className="source-links"><a href="/atlas">Explore the Atlas →</a><a href="/atlas/methodology">Read the methodology →</a><a href="/contact">Discuss a market question →</a></div>
      </aside>

      <div className="article-cta"><div><p className="eyebrow">Next step</p><h2>{guide.cta}</h2></div><a className="pill primary" href={guide.ctaHref}>Review the engagement</a></div>
    </article>
    <SiteFooter />
  </main>;
}
