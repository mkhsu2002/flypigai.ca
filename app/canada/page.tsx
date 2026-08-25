import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "For Canadian Companies | Build with Taiwan Technology",
  description: "Explore Taiwan Edge AI, semiconductor, embedded computing, machine vision and Physical AI technology routes for Canadian hardware projects.",
  path: "/canada",
  enPath: "/canada",
});

const needs = ["Edge AI compute", "Machine vision", "Sensors", "Connectivity", "Power", "Embedded platforms", "Robotics components", "ODM / manufacturing"];

export default function CanadaPage() {
  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "For Canada", path: "/canada" }])} />
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Canada to Taiwan Technology Intelligence",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "Canada",
      serviceType: "Edge AI and Physical AI technology intelligence",
      description: metadata.description,
    }} />
    <SiteHeader />
    <section className="hero"><div className="shell"><p className="eyebrow">For Canadian product teams</p><h1>Build with Taiwan's technology ecosystem.</h1><p className="lead">Start with the product requirement, not a supplier list. FlyPig helps Canadian hardware teams organize technical needs, compare vendor-neutral technology routes and identify relevant Taiwan partners before formal sourcing or RFQ.</p><div className="actions"><a className="pill primary" href="/contact">Tell us what you're building</a><a className="pill secondary" href="/technologies">Explore technologies</a></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Good-fit projects</p><h2>Where FlyPig can add the most value.</h2></div><p className="section-copy">We are initially focused on projects that already have a real product roadmap or prototype and need clearer decisions around Edge AI, sensing, embedded hardware or a Taiwan technology path.</p></div><div className="grid3"><article className="card"><h3>Robotics & AMR</h3><p>Compute, vision, sensing, connectivity and production architecture for autonomous machines.</p></article><article className="card"><h3>Drones & autonomous systems</h3><p>Edge compute, payload electronics, cameras, sensors, communications and trusted hardware alternatives.</p></article><article className="card"><h3>Industrial & smart devices</h3><p>Adding local AI, machine vision, always-on sensing or embedded intelligence to existing hardware products.</p></article></div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Technology needs</p><h2>We map requirements across the stack.</h2></div></div><div className="grid3">{needs.map((item, index)=><article className="card" key={item}><span className="num">{String(index+1).padStart(2,"0")}</span><h3>{item}</h3></article>)}</div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Project intake</p><h2>What we need to understand first.</h2></div><p className="section-copy">Useful inputs include product category, development stage, prototype status, target launch, annual volume, target cost, current architecture, key technical problems, supply-chain constraints and any PRD, BOM or specification you are comfortable sharing.</p></div><div className="grid3"><article className="card"><span className="num">Private by default</span><h3>Confidential project information is not public content.</h3><p>Project requirements, BOMs, volumes, launch plans and technical documents remain private unless you explicitly approve disclosure.</p></article><article className="card"><span className="num">Vendor-neutral</span><h3>Compare routes before choosing a supplier.</h3><p>The objective is to clarify architecture and trade-offs first, then qualify relevant partners.</p></article><article className="card"><span className="num">Pre-RFQ</span><h3>Best before sourcing becomes locked in.</h3><p>FlyPig is designed to help when you know the product outcome but have not yet finalized the technology stack or supplier route.</p></article></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Canadian project</p><h2>Tell us what you are building.</h2></div><div className="actions"><a className="pill primary" href="/contact">Start a project conversation</a></div></div></section>
    <SiteFooter />
  </main>;
}
