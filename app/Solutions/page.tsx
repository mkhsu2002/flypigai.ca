import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "Taiwan Edge AI Solutions & Technology Intelligence",
  description: "Independent intelligence on Taiwan semiconductor, embedded computing, sensing, connectivity and Physical AI solution paths for Canadian product teams.",
  path: "/Solutions",
  enPath: "/Solutions",
});

const solutionLayers = [
  ["Compute", "AI accelerators, processors, modules, SBCs and industrial systems."],
  ["Vision & sensing", "Cameras, depth sensing, machine vision and multimodal sensor paths."],
  ["Connectivity", "5G, Wi-Fi, industrial networking and remote-device connectivity."],
  ["Memory & storage", "Memory architecture, secure storage and data-movement constraints."],
  ["Robotics systems", "Control, power, motion and deployment-ready embedded platforms."],
  ["Design & production", "ODM, manufacturing and lifecycle considerations after technical fit."],
];

export default function SolutionsPage() {
  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Taiwan Solutions", path: "/Solutions" }])} />
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${siteUrl}/Solutions#collection`,
      name: "Taiwan Edge AI Solutions",
      description: metadata.description,
      url: `${siteUrl}/Solutions`,
      isPartOf: { "@id": `${siteUrl}/#website` },
      publisher: { "@id": `${siteUrl}/#organization` },
      about: ["Taiwan Edge AI", "Semiconductors", "Embedded computing", "Physical AI"],
      inLanguage: "en-CA",
    }} />
    <SiteHeader />

    <section className="hero"><div className="shell"><p className="eyebrow">Taiwan Solutions · Independent intelligence</p><h1>Explore Taiwan technology routes for intelligent products.</h1><p className="lead">FlyPig AI researches public, verifiable capabilities across Taiwan&apos;s semiconductor, Edge AI, embedded computing, sensing and manufacturing ecosystem. These solution paths help Canadian teams compare technical options without implying supplier authorization, endorsement or inventory.</p><div className="actions"><a className="pill primary" href="/technologies">Explore technology intelligence</a><a className="pill secondary" href="/signals">Read current industry signals</a></div></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Solution map</p><h2>Research the complete path, not only the chip.</h2></div><p className="section-copy">A credible route connects compute, software, interfaces, sensing, connectivity, lifecycle and production constraints. FlyPig AI organizes those layers around the application decision a product team needs to make.</p></div><div className="grid3">{solutionLayers.map(([title, description], index) => <article className="card" key={title}><span className="num">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>

    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">How to read this intelligence</p><h2>Evidence first, commercial relationship second.</h2></div><p className="section-copy">Published coverage is based on official product material, primary sources and independent FlyPig AI analysis. Inclusion does not mean that FlyPig AI is an authorized distributor, representative or partner of the company discussed.</p></div><div className="grid3"><article className="card"><span className="num">Facts</span><h3>Confirm what exists.</h3><p>Specifications, availability, software support and product status are linked to primary sources.</p></article><article className="card"><span className="num">Fit</span><h3>Explain where it matters.</h3><p>Coverage connects a capability to Canadian product, operator and deployment requirements.</p></article><article className="card"><span className="num">Limits</span><h3>Preserve uncertainty.</h3><p>Commercial terms, certification, lifecycle and design-in readiness still require direct validation.</p></article></div></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Continue the research</p><h2>Move from solution category to current evidence.</h2></div><p className="section-copy">Use Technology Intelligence for stable taxonomy and design questions, Industry Signals for current developments, and the Canada Atlas for the operators and ecosystem contexts where a technology may fit.</p></div><div className="actions"><a className="pill secondary" href="/technologies">Technology Intelligence</a><a className="pill secondary" href="/signals">Industry Signals</a><a className="pill secondary" href="/atlas">Canada Atlas</a></div></section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Contribute a technology signal</p><h2>Have a Taiwan technology we should research?</h2></div><div className="actions"><a className="pill primary" href="/contact">Share a public source</a></div></div></section>
    <SiteFooter />
  </main>;
}
