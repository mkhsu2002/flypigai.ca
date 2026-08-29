import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { technologyTopics } from "../../lib/technologyTaxonomy";
import { breadcrumbJsonLd, makeMetadata } from "../seo";

const completeTopicIds = new Set(["edge-ai-compute", "embedded-platforms", "vision-sensing"]);

export const metadata: Metadata = makeMetadata({
  title: "Technology Intelligence | Taiwan Edge AI & Physical AI",
  description: "Independent intelligence on Taiwan semiconductors, Edge AI, embedded computing, vision, sensing and robotics for Canadian product teams.",
  path: "/technologies",
  enPath: "/technologies",
});

export default function TechnologiesPage() {
  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Technology Intelligence", path: "/technologies" }])} />
    <SiteHeader />
    <section className="hero"><div className="shell"><p className="eyebrow">Technology Intelligence · Design contexts</p><h1>Understand the technology before choosing a route.</h1><p className="lead">This hub organizes FlyPig AI&apos;s research around what technologies do, where they fit and which trade-offs matter in Canadian product contexts. Current announcements belong in Industry Signals; researched Taiwan solution paths belong in Taiwan Solutions.</p><div className="actions"><a className="pill primary" href="/Solutions">Taiwan Solutions</a><a className="pill secondary" href="/signals">Current Industry Signals</a></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Technology taxonomy</p><h2>Research organized around design decisions.</h2></div><p className="section-copy">Each topic groups current Industry Signals around a distinct architecture question, helping readers compare technologies without losing their application context.</p></div><div className="grid3">{technologyTopics.map((topic,index)=><article className="card technology-topic" id={topic.id} key={topic.id}><span className="num">{String(index+1).padStart(2,"0")}</span><h3>{topic.title}</h3><p>{topic.description}</p><p><strong>Compare:</strong> {topic.compare}</p><a href={completeTopicIds.has(topic.id) ? `/technologies/${topic.id}` : `/signals#latest`}>{completeTopicIds.has(topic.id) ? "Read the decision guide →" : "See current Signals →"}</a></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">How we publish</p><h2>Capability first, promotion second.</h2></div><p className="section-copy">Technology pages are intended to become useful decision references rather than copied product brochures.</p></div><div className="grid3"><article className="card"><h3>What it does</h3><p>Clear capability summary, key specifications, platform maturity and development environment.</p></article><article className="card"><h3>Where it fits</h3><p>Concrete applications, system constraints and design contexts where the technology is relevant.</p></article><article className="card"><h3>What to compare</h3><p>Power, performance, interfaces, software, production readiness, certification and alternative routes.</p></article></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Current public research</p><h2>Connect technology to ecosystem context.</h2></div><p className="section-copy">The Canada Atlas maps operators and capability; Taiwan Solutions organizes supply-side routes; Industry Signals records current evidence; Insights provides long-lived analysis.</p></div><div className="actions"><a className="pill secondary" href="/atlas">Canada Atlas</a><a className="pill secondary" href="/Solutions">Taiwan Solutions</a><a className="pill secondary" href="/signals">Industry Signals</a><a className="pill secondary" href="/insights">Insights</a></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Contribute a public source</p><h2>Have a Taiwan technology we should research?</h2></div><div className="actions"><a className="pill primary" href="/Solutions">Read the Solutions scope</a><a className="pill secondary" href="/contact">Share a source</a></div></div></section>
    <SiteFooter />
  </main>;
}
