import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { makeMetadata, siteUrl } from "./seo";

export const metadata: Metadata = makeMetadata({
  title: "Canada-Taiwan Edge AI & Physical AI Intelligence",
  description: "FlyPig AI maps Canadian product requirements to Taiwan's Edge AI, semiconductor, embedded computing and Physical AI solutions through independent research.",
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

    <section className="hero home-hero"><div className="shell hero-grid home-hero-grid"><div className="home-hero-copy"><p className="eyebrow">Canada ↔ Taiwan · Edge AI · Physical AI</p><h1>From Canadian product needs to Taiwan technology.</h1><p className="lead">FlyPig AI helps Canadian product teams explore vendor-neutral technology routes across Taiwan&apos;s semiconductor, Edge AI, embedded computing and Physical AI ecosystem. Public research is independent and does not imply supplier authorization.</p><div className="actions"><a className="pill primary" href="/atlas">Explore the Canada Atlas</a><a className="pill secondary" href="/Solutions">Explore Taiwan Solutions</a><a className="pill secondary" href="/technologies">Technology intelligence</a></div></div><aside className="signal-card home-signal-card"><p className="eyebrow">FlyPig role</p><div className="signal-line"><span>Market context</span><strong>Canada</strong></div><div className="signal-line"><span>Technology ecosystem</span><strong>Taiwan</strong></div><div className="signal-line"><span>Focus</span><strong>Edge AI + Physical AI</strong></div><div className="signal-line"><span>Position</span><strong>Independent intelligence + qualified matching</strong></div></aside></div></section>

    <div className="ticker">product intent · technology intelligence · design routes · qualified matching · technical introduction · market intelligence</div>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Two-sided intelligence</p><h2>One evidence layer for two markets.</h2></div><p className="section-copy">Canadian product teams need a map of operators, applications and technology constraints. Taiwan technology teams need clearer application context. FlyPig AI connects those questions through public research and bounded, qualified introductions.</p></div><div className="grid3"><article className="card"><span className="num">Canada Atlas</span><h3>Start with the ecosystem and operating need.</h3><p>Explore Canadian companies, operators, applications, industries and regional capability before choosing a technology route.</p><div className="actions"><a className="pill secondary" href="/atlas">Explore Canada Atlas</a></div></article><article className="card"><span className="num">Taiwan Solutions</span><h3>Start with verified technology capability.</h3><p>Research solution layers, official product signals and design considerations without assuming a direct supplier relationship.</p><div className="actions"><a className="pill secondary" href="/Solutions">Explore Taiwan Solutions</a></div></article><article className="card"><span className="num">Public intelligence</span><h3>Build trust before an introduction.</h3><p>FlyPig publishes structured, source-based intelligence. Project-specific information remains private by default.</p><div className="actions"><a className="pill secondary" href="/technologies">Explore intelligence</a></div></article></div></section>

    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Technology scope</p><h2>Focused on the stack behind autonomous and intelligent hardware.</h2></div><p className="section-copy">Our initial research concentrates on the hardware and embedded layers where Canadian product requirements intersect with Taiwan's strengths.</p></div><div className="grid3">{domains.slice(0,9).map((domain, index) => <article className="card" key={domain}><span className="num">{String(index + 1).padStart(2,"0")}</span><h3>{domain}</h3></article>)}</div></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">How FlyPig works</p><h2>From product intent to a qualified design path.</h2></div><p className="section-copy">FlyPig combines structured research, AI-assisted analysis and human review to turn a product requirement into a clearer set of technical and commercial options.</p></div><div className="grid3"><article className="card"><span className="num">01</span><h3>Understand the requirement</h3><p>Application, development stage, target cost, target volume, launch timing, current architecture and constraints.</p></article><article className="card"><span className="num">02</span><h3>Map the technology</h3><p>Translate requirements into compute, AI, vision, sensing, connectivity, power, module and production considerations.</p></article><article className="card"><span className="num">03</span><h3>Qualify the path</h3><p>Compare relevant Taiwan technology candidates before a formal RFQ, evaluation or design-in discussion.</p></article></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Trust boundary</p><h2>Public research stays separate from private requirements.</h2></div><p className="section-copy">Company profiles, technology capabilities, ecosystem maps and reference-design research use public or approved information. Submitted requirements, volumes, timelines, BOMs and confidential technical material remain private unless the owner explicitly approves publication.</p></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Research foundation</p><h2>Canada Physical AI Atlas</h2></div><div><p className="section-copy">The Canada Physical AI Atlas is a public research initiative mapping Canadian companies, technologies, industries and regional clusters. It provides structured ecosystem context for technology and application research.</p><div className="actions"><a className="pill secondary" href="/atlas">Explore the Atlas</a><a className="pill secondary" href="/insights">Read Intelligence</a></div></div></div></section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Continue from either side</p><h2>Explore Canadian demand or a Taiwan solution route.</h2></div><div className="actions"><a className="pill primary" href="/atlas">Canada Atlas</a><a className="pill secondary" href="/Solutions">Taiwan Solutions</a></div></div></section>
    <SiteFooter />
  </main>;
}
