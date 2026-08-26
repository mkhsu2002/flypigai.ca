import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsletterNotice from "../../../components/NewsletterNotice";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import JsonLd from "../../../components/JsonLd";
import { absoluteUrl } from "../../../lib/site";
import { getIndustrySignal, getIndustrySignals, getIndustrySignalWordCount } from "../../../lib/industrySignals";
import { technologyTopicHref } from "../../../lib/technologyTaxonomy";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../../seo";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getIndustrySignals().map((signal) => ({ slug: signal.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const signal = getIndustrySignal(slug);
  if (!signal) return {};
  return makeMetadata({
    title: signal.seoTitle,
    absoluteTitle: true,
    socialTitle: signal.socialTitle,
    description: signal.seoDescription,
    path: `/signals/${signal.slug}`,
    enPath: `/signals/${signal.slug}`,
    type: "article",
    image: {
      url: signal.heroVisual.socialSrc,
      width: 1200,
      height: 630,
      alt: signal.heroVisual.alt,
    },
    article: {
      publishedTime: `${signal.publishedAt}T00:00:00.000Z`,
      modifiedTime: `${signal.modifiedAt}T00:00:00.000Z`,
      authors: [absoluteUrl(signal.author.url)],
      section: signal.category,
      tags: signal.relatedTechnologies,
    },
  });
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

export default async function SignalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const signal = getIndustrySignal(slug);
  if (!signal) notFound();
  const relatedSignals = signal.relatedSignals.map(getIndustrySignal).filter((item) => item !== undefined);
  const authorUrl = absoluteUrl(signal.author.url);
  const articleUrl = `${siteUrl}/signals/${signal.slug}`;
  const citations = [signal.sourceUrl, signal.sourceProductUrl, ...(signal.additionalSources ?? []).map((source) => source.url)].filter(Boolean);

  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Industry Signals", path: "/signals" }, { name: signal.seoTitle, path: `/signals/${signal.slug}` }])} />
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "@id": `${articleUrl}#article`,
      headline: signal.title,
      description: signal.seoDescription,
      datePublished: signal.publishedAt,
      dateModified: signal.modifiedAt,
      image: [absoluteUrl(signal.heroVisual.src), absoluteUrl(signal.heroVisual.socialSrc)],
      author: { "@type": signal.author.type, "@id": `${siteUrl}/#editorial-desk`, name: signal.author.name, url: authorUrl, parentOrganization: { "@id": `${siteUrl}/#organization` } },
      publisher: { "@id": `${siteUrl}/#organization` },
      mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
      isPartOf: { "@id": `${siteUrl}/signals#collection` },
      articleSection: signal.category,
      keywords: signal.relatedTechnologies,
      wordCount: getIndustrySignalWordCount(signal),
      about: [signal.supplier, signal.category, ...signal.relatedTechnologies].map((name) => ({ "@type": "Thing", name })),
      citation: citations,
      inLanguage: "en-CA",
    }} />
    <SiteHeader languageHref="/zh" />

    <article className="shell article-shell">
      <nav className="article-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/signals">Industry Signals</a><span>/</span><span aria-current="page">{signal.supplier}</span></nav>
      <header className="article-header">
        <p className="eyebrow">Taiwan Industry Signal · {signal.category}</p>
        <h1>{signal.title}</h1>
        <p className="article-deck">{signal.dek}</p>
        <div className="article-meta"><span>Published by FlyPig AI {formatDate(signal.publishedAt)}</span>{signal.modifiedAt !== signal.publishedAt ? <span>Updated {formatDate(signal.modifiedAt)}</span> : null}<span>Source dated {formatDate(signal.sourcePublishedAt)}</span><span>{signal.supplier}</span><span>{signal.eventId}</span><a href={signal.author.url}>Reported by {signal.author.name}</a></div>
      </header>

      <figure className="article-hero-visual">
        <img src={signal.heroVisual.src} alt={signal.heroVisual.alt} width={signal.heroVisual.width} height={signal.heroVisual.height} />
        <figcaption>{signal.heroVisual.credit} · Facts sourced from <a href={signal.heroVisual.sourceUrl} target="_blank" rel="noreferrer">the official source ↗</a></figcaption>
      </figure>

      <section className="article-key-facts" aria-labelledby="key-facts-heading"><p className="eyebrow" id="key-facts-heading">Confirmed in the cited source</p><ol>{signal.keyFacts.map((fact, index) => <li key={fact}><span>{String(index + 1).padStart(2, "0")}</span><strong>{fact}</strong></li>)}</ol></section>

      <div className="article-lead-card"><p className="eyebrow">The signal</p><p>{signal.summary}</p></div>

      <div className="article-body">
        <h2>Why it matters</h2>
        <ol>{signal.whyItMatters.map((item) => <li key={item}>{item}</li>)}</ol>

        {signal.reporting.map((section, index) => <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph, paragraphIndex) => <p className={index === 0 && paragraphIndex === 0 ? "dropcap" : undefined} key={paragraph}>{paragraph}</p>)}
        </section>)}

        <blockquote><strong>FlyPig AI interpretation</strong>{signal.flypigTake}</blockquote>

        <section className="article-verification" aria-labelledby="verification-heading">
          <h2 id="verification-heading">Status, open questions and Canada relevance</h2>
          <h3>Current product status</h3><p>{signal.productStatus}</p>
          <h3>What remains open</h3><ul>{signal.openQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
          <h3>Why Canadian teams may care</h3><p>{signal.canadaRelevance}</p>
        </section>
      </div>

      <aside className="source-note">
        <p className="eyebrow">Source & editorial disclosure</p>
        <h3>{signal.sourceName}</h3>
        <p>Original source date: {formatDate(signal.sourcePublishedAt)}.</p><p>{signal.sourceNote}</p><p>FlyPig AI provides independent editorial analysis. Coverage does not imply supplier authorization, endorsement, inventory or an official commercial relationship.</p>
        <div className="source-links"><a href={signal.sourceUrl} target="_blank" rel="noreferrer">Primary official source ↗</a>{signal.sourceProductUrl ? <a href={signal.sourceProductUrl} target="_blank" rel="noreferrer">Official supporting page ↗</a> : null}{signal.additionalSources?.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.name} ↗</a>)}</div>
      </aside>

      <section className="article-related"><div className="section-head"><div><p className="eyebrow">Continue the research</p><h2>Related Signals and technology context.</h2></div><p className="section-copy">Follow adjacent developments or move to the stable technology taxonomy behind this announcement.</p></div><div className="grid3">{relatedSignals.map((related) => <a className="card related-signal-card" href={`/signals/${related.slug}`} key={related.slug}><img src={related.heroVisual.socialSrc} alt="" width="1200" height="630" loading="lazy" /><span className="num">{related.supplier} · {related.category}</span><h3>{related.seoTitle}</h3></a>)}</div><div className="technology-links"><span>Related technology:</span>{signal.relatedTechnologies.map((technology) => <a href={technologyTopicHref(technology)} key={technology}>{technology}</a>)}</div></section>

      <aside className="corrections-note"><strong>Updates and corrections</strong>{signal.corrections.length ? <ul>{signal.corrections.map((correction) => <li key={`${correction.date}-${correction.note}`}>{formatDate(correction.date)} — {correction.note}</li>)}</ul> : <p>No material corrections are recorded. See our <a href="/editorial-policy">editorial and corrections policy</a>.</p>}</aside>

      <section className="article-cta newsletter-article-cta"><div><p className="eyebrow">FlyPig Industry Signals</p><h2>Follow Taiwan’s Edge AI and Physical AI ecosystem before it reaches the mainstream.</h2></div><NewsletterNotice /></section>
    </article>
    <SiteFooter />
  </main>;
}
