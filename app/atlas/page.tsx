import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import "./atlas.css";
import { atlasCategories } from "./data";
import { makeMetadata, siteUrl } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "Canada Physical AI Atlas",
  description: "A curated map of Canada's robotics, drones, autonomous systems, integrators, enabling technologies, research institutions and industrial adopters.",
  path: "/atlas",
  enPath: "/atlas",
  zhPath: "/zh/atlas",
});

const browseDimensions = [
  ["By ecosystem role", "Companies and institutions organized by their position in the Physical AI value chain.", "/atlas#ecosystem"],
  ["By technology", "Machine vision, navigation, robotics software, autonomous platforms and enabling systems.", "/atlas/technologies"],
  ["By industry", "Manufacturing, logistics, utilities, mining, healthcare, agriculture and other application markets.", "/atlas/industries"],
  ["By location", "Regional robotics and AI clusters across British Columbia, Ontario, Quebec, Alberta and beyond.", "/atlas/locations"],
  ["Methodology", "How organizations are selected, classified, sourced and maintained.", "/atlas/methodology"],
  ["Submit a listing", "Recommend an organization, correction or ecosystem resource for future inclusion.", "/atlas/submit"],
];

export default function AtlasPage() {
  return <main>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Canada Physical AI Atlas",
      url: `${siteUrl}/atlas`,
      description: metadata.description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: ["Physical AI", "Robotics in Canada", "Drones", "Autonomous systems", "Industrial automation"],
    }} />
    <SiteHeader languageHref="/zh/atlas" />

    <section className="atlas-hero shell">
      <p className="eyebrow">A FlyPig AI research initiative</p>
      <h1>Canada Physical AI Atlas</h1>
      <p className="lead">A living map of Canada's robotics, drones, autonomous systems, enabling technologies, integration partners, research institutions and industrial demand.</p>
      <div className="atlas-note">This is an independent market-research and ecosystem-mapping initiative developed by FlyPig AI. It is not an official government directory.</div>
      <div className="atlas-stats"><div><strong>{atlasCategories.length}</strong><span>ecosystem categories</span></div><div><strong>{atlasCategories.reduce((sum, category) => sum + category.companies.length, 0)}</strong><span>organizations profiled</span></div><div><strong>4</strong><span>ways to explore</span></div></div>
    </section>

    <section className="section shell">
      <div className="section-head"><div><p className="eyebrow">Explore the Atlas</p><h2>Multiple paths into the Canadian ecosystem.</h2></div><p className="section-copy">The same market can be understood through its value chain, technologies, application industries and regional clusters. These cross-linked views form the core navigation structure of the Atlas.</p></div>
      <div className="atlas-category-grid">{browseDimensions.map(([title, summary, href], index) => <a className="atlas-category-card" href={href} key={title}><span className="num">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{summary}</p><strong>Explore →</strong></a>)}</div>
    </section>

    <section id="ecosystem" className="section dark"><div className="shell">
      <div className="section-head"><div><p className="eyebrow">Browse by ecosystem role</p><h2>From enabling technology to real-world deployment.</h2></div><p className="section-copy">Organizations are grouped by the role they play: technology creation, platform manufacturing, systems integration, research and industrial adoption. Each category begins with six representative organizations and will expand over time.</p></div>
      <div className="atlas-category-grid">{atlasCategories.map((category, index) => <a className="atlas-category-card" href={`/atlas/${category.slug}`} key={category.slug}><span className="num">{String(index + 1).padStart(2, "0")} · {category.layer}</span><h3>{category.title}</h3><p>{category.summary}</p><div className="atlas-company-list">{category.companies.map(company => <span key={company.name}>{company.name}</span>)}</div><strong>Explore category →</strong></a>)}</div>
    </div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">How to use the Atlas</p><h2>A market map for both sides of the ecosystem.</h2></div><p className="section-copy">Global suppliers can use it to understand Canada's route to market. Canadian organizations can use it to discover domestic capability and identify gaps where international technologies may fit.</p></div><div className="grid3"><article className="card"><span className="num">01</span><h3>Find market channels</h3><p>Identify integrators, research partners and operators relevant to a technology or application.</p></article><article className="card"><span className="num">02</span><h3>Understand the stack</h3><p>See how components, platforms, software, integration and industrial demand connect.</p></article><article className="card"><span className="num">03</span><h3>Develop opportunities</h3><p>Use the map as a starting point for supplier qualification, introductions and pilot development.</p></article></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Short answer</p><h2>What is the Canada Physical AI Atlas?</h2></div><p className="section-copy">The Canada Physical AI Atlas is FlyPig AI's public research map of Canadian robotics, drone, autonomous-system, enabling-technology, research and industrial-adoption organizations. It is editorial research, not an official directory, endorsement list or investment recommendation.</p></div></section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Contribute or connect</p><h2>Should your organization be included in the Atlas?</h2></div><div className="actions"><a className="pill primary" href="/atlas/submit">Submit a listing</a><a className="pill secondary" href="/contact">Contact FlyPig AI</a></div></div></section>
    <SiteFooter />
  </main>;
}
