import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsletterSignup from "../../../components/NewsletterSignup";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import JsonLd from "../../../components/JsonLd";
import { getIndustrySignal, getIndustrySignals, getRelatedIndustrySignals } from "../../../lib/industrySignals";
import { makeMetadata, siteUrl } from "../../seo";
import styles from "../signalArticle.module.css";

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
  const related = getRelatedIndustrySignals(signal, 3);
  const modifiedAt = signal.modifiedAt ?? signal.publishedAt;

  return <main>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: signal.title,
      description: signal.dek,
      datePublished: signal.publishedAt,
      dateModified: modifiedAt,
      author: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      mainEntityOfPage: `${siteUrl}/signals/${signal.slug}`,
      image: `${siteUrl}${signal.heroVisual.src}`,
      about: [signal.supplier, signal.category, "Taiwan Edge AI", "Physical AI"],
      citation: [signal.sourceUrl, signal.sourceProductUrl, signal.heroVisual.sourceUrl].filter(Boolean),
      inLanguage: "en-CA",
    }} />
    <SiteHeader languageHref="/zh" />

    <article className={`shell ${styles.articleShell}`}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <a href="/signals">Industry Signals</a><span aria-hidden="true">/</span><span>{signal.supplier}</span>
      </nav>

      <header className={styles.articleHeader}>
        <p className="eyebrow">Taiwan Industry Signal · {signal.category}</p>
        <h1>{signal.title}</h1>
        <p className={styles.deck}>{signal.dek}</p>
        <div className={styles.meta}>
          <span>Published {signal.publishedAt}</span>
          {modifiedAt !== signal.publishedAt ? <span>Updated {modifiedAt}</span> : null}
          <span>{signal.supplier}</span>
          <span>Reported by FlyPig AI</span>
        </div>
      </header>

      <figure className={styles.heroFigure}>
        <img src={signal.heroVisual.src} alt={signal.heroVisual.alt} width={signal.heroVisual.width} height={signal.heroVisual.height} loading="eager" />
        <figcaption>{signal.heroVisual.credit} · Facts sourced from <a href={signal.heroVisual.sourceUrl} target="_blank" rel="noreferrer">official material ↗</a></figcaption>
      </figure>

      <section className={styles.signalSummary} aria-labelledby="signal-summary-heading">
        <p className="eyebrow" id="signal-summary-heading">The signal</p>
        <p>{signal.summary}</p>
      </section>

      <div className={styles.articleBody}>
        <section>
          <h2>Why it matters</h2>
          <ol className={styles.whyList}>{signal.whyItMatters.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
        </section>

        {signal.reporting.map((section) => <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>)}

        <aside className={styles.take}>
          <p className="eyebrow">FlyPig AI interpretation</p>
          <p>{signal.flypigTake}</p>
        </aside>
      </div>

      <aside className={styles.sourceNote}>
        <p className="eyebrow">Source & editorial disclosure</p>
        <h3>{signal.sourceName}</h3>
        <p>{signal.sourceNote}</p>
        <div className={styles.sourceLinks}>
          <a href={signal.sourceUrl} target="_blank" rel="noreferrer">Original announcement ↗</a>
          {signal.sourceProductUrl ? <a href={signal.sourceProductUrl} target="_blank" rel="noreferrer">Official product page ↗</a> : null}
        </div>
      </aside>

      {related.length ? <section className={styles.related}>
        <div className={styles.relatedHead}><div><p className="eyebrow">Related Signals</p><h2>More from the Taiwan technology desk.</h2></div><a href="/signals">View all Signals →</a></div>
        <div className={styles.relatedGrid}>{related.map((item) => <a href={`/signals/${item.slug}`} key={item.slug} className={styles.relatedCard}>
          <span>{item.publishedAt} · {item.supplier}</span>
          <h3>{item.title}</h3>
          <p>{item.dek}</p>
        </a>)}</div>
      </section> : null}

      <section className={styles.newsletterCta}>
        <div><p className="eyebrow">FlyPig Industry Signals</p><h2>Track the Taiwan technology shifts that may change your next design decision.</h2></div>
        <NewsletterSignup />
      </section>
    </article>
    <SiteFooter />
  </main>;
}
