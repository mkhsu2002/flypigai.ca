import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { makeMetadata } from "../seo";
import { insightGuides } from "./guides";

export const metadata: Metadata = makeMetadata({
  title: "Physical AI Insights",
  description: "Analysis of Canada's Physical AI ecosystem, robotics deployment, market structure and commercialization.",
  path: "/insights",
  enPath: "/insights",
});

export default function InsightsPage() {
  return <main>
    <SiteHeader languageHref="/zh" />
    <section className="hero insights-hero"><div className="shell hero-grid"><div>
      <p className="eyebrow">FlyPig AI Insights · Canada</p>
      <h1>Research for understanding markets—not manufacturing authority.</h1>
      <p className="lead">Evidence-led analysis of Canada's Physical AI ecosystem, deployment models, market gaps and commercialization pathways. Insights support FlyPig AI's commercial work and the Canada Physical AI Atlas.</p>
      <div className="actions"><a className="pill primary" href="/insights/canada-needs-physical-ai-integrators">Read the opening essay</a><a className="pill secondary" href="/atlas">Explore the Atlas</a></div>
    </div><aside className="signal-card"><p className="eyebrow">Editorial lens</p><div className="signal-line"><span>01</span><strong>Deployment over spectacle</strong></div><div className="signal-line"><span>02</span><strong>Evidence over hype</strong></div><div className="signal-line"><span>03</span><strong>Market structure over slogans</strong></div><div className="signal-line"><span>04</span><strong>Commercial relevance in Canada</strong></div></aside></div></section>
    <section className="section shell" id="series"><div className="section-head"><div><p className="eyebrow">Opening thesis</p><h2>Canada doesn't only need more robot products.</h2></div><p className="section-copy">The more urgent gap is the layer that can assess real work, select suitable technologies, connect them to local systems, manage risk and keep deployments operating after the demonstration ends.</p></div><a className="feature-article" href="/insights/canada-needs-physical-ai-integrators"><div><span className="num">Essay 01</span><h3>Canada Doesn't Need Another Robot Company. It Needs Physical AI Integrators.</h3><p>Why the next opportunity is not simply building or importing robots—but turning machines, edge intelligence and human workflows into reliable operations.</p></div><span className="article-arrow">↗</span></a></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Physical AI in Canada</p><h2>Market-entry and ecosystem guides.</h2></div><p className="section-copy">A structured exploration of Canada's autonomous-systems value chain, from market entry and integration to drones, regional ecosystem mapping and cross-border commercialization.</p></div><div className="grid3">{insightGuides.map((guide, index) => <a className="card" href={`/insights/${guide.slug}`} key={guide.slug}><span className="num">{String(index + 2).padStart(2, "0")}</span><h3>{guide.title}</h3><p>{guide.description}</p><strong>Read guide →</strong></a>)}</div></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Contribute a market signal</p><h2>Share a deployment, company, technology or market question worth examining.</h2></div><div className="actions"><a className="pill primary" href="/contact">Contact FlyPig AI</a></div></div></section>
    <SiteFooter />
  </main>;
}
