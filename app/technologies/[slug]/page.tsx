import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { getIndustrySignals } from "../../../lib/industrySignals";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../../seo";
import { getTechnologyOwnerTopic, technologyOwnerTopics } from "../topics";

export function generateStaticParams() {
  return technologyOwnerTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTechnologyOwnerTopic(slug);
  if (!topic) return {};
  return makeMetadata({ title: topic.title, description: topic.description, path: `/technologies/${topic.slug}`, enPath: `/technologies/${topic.slug}` });
}

export default async function TechnologyOwnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTechnologyOwnerTopic(slug);
  if (!topic) notFound();
  const relatedSignals = getIndustrySignals().filter((signal) => signal.relatedTechnologies.some((technology) => topic.relatedTechnologies.includes(technology))).slice(0, 4);
  const path = `/technologies/${topic.slug}`;

  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Technology Intelligence", path: "/technologies" }, { name: topic.title, path }])} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: topic.title, description: topic.description, url: `${siteUrl}${path}`, isPartOf: { "@id": `${siteUrl}/#website` }, about: topic.relatedTechnologies, audience: { "@type": "Audience", audienceType: "Product, engineering and procurement teams" }, publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en-CA" }} />
    <SiteHeader />
    <section className="hero shell"><p className="eyebrow">{topic.eyebrow}</p><h1>{topic.title}</h1><p className="lead">{topic.answer}</p><div className="actions"><a className="pill primary" href={topic.ctaHref}>Review technology qualification</a><a className="pill secondary" href="/technologies">All technology topics</a></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Selection criteria</p><h2>Compare the complete product route.</h2></div><p className="section-copy">These criteria turn product claims into questions that can be verified with measurements, documentation and direct supplier evidence.</p></div><div className="grid3">{topic.criteria.map((criterion, index) => <article className="card" key={criterion.title}><span className="num">{String(index + 1).padStart(2, "0")}</span><h3>{criterion.title}</h3><p>{criterion.body}</p></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Qualification questions</p><h2>Questions to answer before design-in.</h2></div><p className="section-copy">Keep unresolved constraints visible until the exact SKU, software stack and operating context have been reviewed.</p></div><div className="grid2">{topic.questions.map((question, index) => <article className="card" key={question}><span className="num">Q{index + 1}</span><h3>{question}</h3></article>)}</div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Related Industry Signals</p><h2>Current Taiwan capability evidence.</h2></div><p className="section-copy">Signals summarize attributed primary-source announcements. Verify availability, exact specifications, lifecycle and commercial terms directly before procurement or design-in.</p></div>{relatedSignals.length ? <div className="grid2">{relatedSignals.map((signal) => <a className="card" href={`/signals/${signal.slug}`} key={signal.slug}><span className="num">{signal.supplier}</span><h3>{signal.title}</h3><p>{signal.summary}</p><strong>Read Signal →</strong></a>)}</div> : <p>No matching Signals have been published yet.</p>}</section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Product decision</p><h2>{topic.ctaTitle}</h2></div><div className="actions"><a className="pill primary" href={topic.ctaHref}>Review the engagement</a></div></div></section>
    <SiteFooter />
  </main>;
}
