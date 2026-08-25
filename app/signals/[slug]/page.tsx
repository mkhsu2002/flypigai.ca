import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsletterSignup from "../../../components/NewsletterSignup";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import JsonLd from "../../../components/JsonLd";
import { getIndustrySignal, getIndustrySignals } from "../../../lib/industrySignals";
import { makeMetadata, siteUrl } from "../../seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getIndustrySignals().map((signal) => ({ slug: signal.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const signal = getIndustrySignal(slug);
  if (!signal) return {};
  return makeMetadata({
    title: signal.title,
    description: signal.dek,
    path: `/signals/${signal.slug}`,
    enPath: `/signals/${signal.slug}`,
    type: "article",
  });
}

export default async function SignalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const signal = getIndustrySignal(slug);
  if (!signal) notFound();

  return <main>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: signal.title,
      description: signal.dek,
      datePublished: signal.publishedAt,
      dateModified: signal.publishedAt,
      author: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      mainEntityOfPage: `${siteUrl}/signals/${signal.slug}`,
      about: [signal.supplier, signal.category, "Taiwan Edge AI", "Physical AI"],
      citation: [signal.sourceUrl, signal.sourceProductUrl].filter(Boolean),
      inLanguage: "en-CA",
    }} />
    <SiteHeader languageHref="/zh" />

    <article className="shell article-shell">
      <header className="article-header">
        <p className="eyebrow">Taiwan Industry Signal · {signal.category}</p>
        <h1>{signal.title}</h1>
        <p className="article-deck">{signal.dek}</p>
        <div className="article-meta"><span>{signal.publishedAt}</span><span>{signal.supplier}</span><span>{signal.eventId}</span><span>Reported by FlyPig AI</span></div>
      </header>

      <div className="article-lead-card"><p className="eyebrow">The signal</p><p>{signal.summary}</p></div>

      <div className="article-body">
        <h2>Why it matters</h2>
        <ul>{signal.whyItMatters.map((item) => <li key={item}>{item}</li>)}</ul>

        {signal.reporting.map((section, index) => <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph, paragraphIndex) => <p className={index === 0 && paragraphIndex === 0 ? "dropcap" : undefined} key={paragraph}>{paragraph}</p>)}
        </section>)}

        <blockquote>{signal.flypigTake}</blockquote>
      </div>

      <aside className="source-note">
        <p className="eyebrow">Source & editorial disclosure</p>
        <h3>{signal.sourceName}</h3>
        <p>{signal.sourceNote}</p>
        <div className="source-links"><a href={signal.sourceUrl} target="_blank" rel="noreferrer">Original announcement ↗</a>{signal.sourceProductUrl ? <a href={signal.sourceProductUrl} target="_blank" rel="noreferrer">Official product page ↗</a> : null}</div>
      </aside>

      <section className="article-cta newsletter-article-cta"><div><p className="eyebrow">FlyPig Industry Signals</p><h2>Follow Taiwan’s Edge AI and Physical AI ecosystem before it reaches the mainstream.</h2></div><NewsletterSignup /></section>
    </article>
    <SiteFooter />
  </main>;
}
