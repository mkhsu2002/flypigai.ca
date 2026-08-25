import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { makeMetadata, siteUrl } from "./seo";

export const metadata: Metadata = makeMetadata({
  title: "Canada-Taiwan Edge AI & Physical AI Intelligence",
  description: "FlyPig AI connects Canadian product opportunities with Taiwan's Edge AI, semiconductor, embedded computing and Physical AI ecosystem through independent technology intelligence and qualified matching.",
  path: "/",
  enPath: "/",
  zhPath: "/zh",
});

const domains = [
  "Semiconductors",
  "Edge AI",
  "Embedded Computing",
  "Machine Vision",
  "Sensors",
  "Connectivity",
  "Robotics",
  "Drones",
  "Industrial AI",
  "ODM & Manufacturing",
];

export default function HomePage() {
  return <main>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "FlyPig AI",
      url: siteUrl,
      description: metadata.description,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-CA",
    }} />
    <SiteHeader languageHref="/zh" />

    <section className="hero home-hero"><div className="shell hero-grid home-hero-grid"><div className="home-hero-copy"><p className="eyebrow">Canada ↔ Taiwan · Edge AI · Physical AI</p><h1>From Canadian product needs to Taiwan technology.</h1><p className="lead">FlyPig AI helps Canadian product teams explore vendor-neutral technology routes across Taiwan's semiconductor, Edge AI, embedded computing and Physical AI ecosystem. We also help Taiwan technology companies understand where their capabilities fit in Canada.</p><div className="actions"><a className="pill primary" href="/canada">Tell us what you're building</a><a className="pill secondary" href="/taiwan">Bring technology to Canada</a><a className="pill secondary" href="/technologies">Explore technology intelligence</a></div></div><aside className="signal-card home-signal-card"><p className="eyebrow">FlyPig role</p><div className="signal-line"><span>Market</span><strong>Canada</strong></div><div className="signal-line"><span>Technology ecosystem</span><strong>Taiwan</strong></div><div className="signal-line"><span>Focus</span><strong>Edge AI + Physical AI</strong></div><div className="signal-line"><span>Position</span><strong>Pre-RFQ intelligence + qualified matching</strong></div></aside></div></section>

    <div className="ticker">product intent · technology intelligence · design routes · qualified matching · technical introduction · market intelligence</div>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Two-sided gateway</p><h2>One intelligence layer for two markets.</h2></div><p className="section-copy">Canadian companies often know the product outcome they need before they know which semiconductor, module or manufacturing path fits. Taiwan suppliers often have strong technology before they know which Canadian applications are commercially relevant. FlyPig works at that intersection.</p></div><div className="grid3"><article className="card"><span className="num">For Canada</span><h3>Start with the product need.</h3><p>Share what you are building, your stage, target volume and technical constraints. We organize the requirement and identify relevant technology routes and potential Taiwan partners.</p><div className="actions"><a className="pill secondary" href="/canada">Explore the Canada path</a></div></article><article className="card"><span className="num">For Taiwan</span><h3>Start with the capability.</h3><p>Share your product family, specifications, applications and commercialization goals. We map the technology to Canadian use cases and qualified opportunities.</p><div className="actions"><a className="pill secondary" href="/taiwan">Explore the Taiwan path</a></div></article><article className="card"><span className="num">Public intelligence</span><h3>Build trust before the introduction.</h3><p>FlyPig publishes structured, source-based intelligence on technologies, applications and ecosystem relationships. Project-specific information remains private by default.</p><div className="actions"><a className="pill secondary" href="/technologies">Explore intelligence</a></div></article></div></section>

    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Technology scope</p><h2>Focused on the stack behind autonomous and intelligent hardware.</h2></div><p className="section-copy">Our initial research concentrates on the hardware and embedded layers where Canadian product requirements intersect with Taiwan's strengths.</p></div><div className="grid3">{domains.slice(0,9).map((domain, index) => <article className="card" key={domain}><span className="num">{String(index + 1).padStart(2,"0")}</span><h3>{domain}</h3></article>)}</div></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">How FlyPig works</p><h2>From product intent to a qualified design path.</h2></div><p className="section-copy">The first phase is intentionally lightweight. FlyPig combines structured research, AI-assisted analysis and human review to turn a product requirement into a clearer set of technical and commercial options.</p></div><div className="grid3"><article className="card"><span className="num">01</span><h3>Understand the project</h3><p>Application, development stage, target cost, target volume, launch timing, current architecture and constraints.</p></article><article className="card"><span className="num">02</span><h3>Map the technology</h3><p>Translate requirements into compute, AI, vision, sensing, connectivity, power, module and production considerations.</p></article><article className="card"><span className="num">03</span><h3>Qualify the path</h3><p>Compare relevant Taiwan technologies and potential partners before a formal RFQ or design-in discussion.</p></article></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Strategic principle</p><h2>Public intelligence attracts the market. Private opportunity data builds the moat.</h2></div><p className="section-copy">Company profiles, technology capabilities, ecosystem maps and reference design research can become public knowledge. Submitted project requirements, volumes, timelines, BOMs and confidential technical information are treated as private unless explicitly approved for publication.</p></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Research foundation</p><h2>Canada Physical AI Atlas</h2></div><div><p className="section-copy">Our existing Canada Physical AI Atlas remains a public research initiative mapping Canadian companies, technologies, industries and regional clusters. It supports the Canada-side market graph that FlyPig is building.</p><div className="actions"><a className="pill secondary" href="/atlas">Explore the Atlas</a><a className="pill secondary" href="/insights">Read Intelligence</a></div></div></div></section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Start from either side</p><h2>What are you building, or what technology do you want Canada to discover?</h2></div><div className="actions"><a className="pill primary" href="/canada">Canadian project</a><a className="pill secondary" href="/taiwan">Taiwan technology</a></div></div></section>
    <SiteFooter />
  </main>;
}
