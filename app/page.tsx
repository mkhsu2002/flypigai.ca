import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { makeMetadata, siteUrl } from "./seo";

export const metadata: Metadata = makeMetadata({
  title: "Edge AI & Physical AI Design Intelligence | Canada ↔ Taiwan",
  description: "FlyPig AI is a Canada-based design intelligence company mapping Canadian product needs to Taiwan's Edge AI, semiconductor and embedded-system capabilities.",
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

    <section className="hero home-hero"><div className="shell hero-grid home-hero-grid"><div className="home-hero-copy">
      <p className="eyebrow">Canada ↔ Taiwan · Edge AI · Physical AI</p>
      <h1>Design intelligence for the hardware behind Physical AI.</h1>
      <p className="lead">FlyPig AI maps Canadian product requirements to Taiwan&apos;s semiconductor, Edge AI, embedded computing, sensing and manufacturing capabilities. Public research is independent and does not imply supplier authorization.</p>
      <div className="actions"><a className="pill primary" href="/atlas">Explore Canadian demand</a><a className="pill secondary" href="/Solutions">Explore Taiwan solutions</a><a className="pill secondary" href="/signals">Follow industry signals</a></div>
    </div><aside className="signal-card home-signal-card">
      <p className="eyebrow">How FlyPig works</p>
      <div className="signal-line"><span>Input</span><strong>Product requirements</strong></div>
      <div className="signal-line"><span>Analysis</span><strong>Architecture + technology fit</strong></div>
      <div className="signal-line"><span>Contexts</span><strong>Canada demand × Taiwan capability</strong></div>
      <div className="signal-line"><span>Output</span><strong>Qualified design route</strong></div>
    </aside></div></section>

    <div className="ticker">product intent · design intelligence · architecture options · technology fit · qualified introduction · design-in learning</div>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">The intelligence layer</p><h2>Start before the RFQ.</h2></div><p className="section-copy">Most sourcing tools become useful after a buyer already knows what to buy. FlyPig focuses earlier, when the product goal is clear but the architecture, component stack, module route or implementation path is still open.</p></div>
      <div className="grid3">
        <article className="card"><span className="num">01 · Understand</span><h3>Turn product intent into engineering questions.</h3><p>Application, environment, compute, vision, sensing, power, connectivity, certification, cost, volume and launch timing become a structured requirement set.</p></article>
        <article className="card"><span className="num">02 · Compare</span><h3>Evaluate technology routes, not just part numbers.</h3><p>Compare architecture options and relevant Taiwan technologies by capability, maturity, integration burden, production fit and known constraints.</p></article>
        <article className="card"><span className="num">03 · Connect</span><h3>Move from research to a qualified conversation.</h3><p>When there is a credible fit, FlyPig may support a bounded technical introduction without implying an unverified supplier relationship.</p></article>
      </div>
    </section>

    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Technology scope</p><h2>The stack behind autonomous and intelligent hardware.</h2></div><p className="section-copy">Research focuses on the hardware and embedded layers where Canadian product requirements intersect with Taiwan&apos;s established technology and manufacturing capabilities.</p></div><div className="grid3">{domains.map((domain, index) => <article className="card" key={domain}><span className="num">{String(index + 1).padStart(2,"0")}</span><h3>{domain}</h3></article>)}</div></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Two-sided intelligence</p><h2>Demand context on one side. Technology capability on the other.</h2></div><p className="section-copy">FlyPig organizes public evidence from both markets so product teams can understand the operating need, available technology and remaining questions before choosing a route.</p></div><div className="grid3">
      <article className="card"><span className="num">Canada Atlas</span><h3>Understand demand and operating context.</h3><p>Explore Canadian companies, operators, industries, integrators, technologies and regional clusters relevant to robotics and Physical AI.</p><div className="actions"><a className="pill secondary" href="/atlas">Explore Canada Atlas</a></div></article>
      <article className="card"><span className="num">Taiwan Solutions</span><h3>Research verified technology capability.</h3><p>Review semiconductors, Edge AI platforms, modules, embedded systems and manufacturing capabilities interpreted from primary sources.</p><div className="actions"><a className="pill secondary" href="/Solutions">Explore Taiwan Solutions</a></div></article>
      <article className="card"><span className="num">Industry Signals</span><h3>Track meaningful capability changes.</h3><p>Read source-based reporting on Taiwan product launches and commercialization signals for North American engineering and business readers.</p><div className="actions"><a className="pill secondary" href="/signals">Read Signals</a></div></article>
    </div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Design route</p><h2>From product intent to an informed technical path.</h2></div><p className="section-copy">A structured workflow keeps the product requirement, design constraints, technology evidence and unresolved questions visible throughout evaluation.</p></div><div className="process">
      <div className="step"><span className="num">01</span><strong>Product intent</strong><p>What are you building and why?</p></div>
      <div className="step"><span className="num">02</span><strong>Requirements</strong><p>Which constraints actually matter?</p></div>
      <div className="step"><span className="num">03</span><strong>Design route</strong><p>Which architectures appear viable?</p></div>
      <div className="step"><span className="num">04</span><strong>Technology fit</strong><p>Which Taiwan capabilities fit the route?</p></div>
      <div className="step"><span className="num">05</span><strong>Open questions</strong><p>What still requires validation?</p></div>
    </div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Trust boundary</p><h2>Public research stays separate from private requirements.</h2></div><p className="section-copy">Company profiles, technology capabilities, ecosystem maps and reference-design research use public or approved information. Submitted product plans, BOMs, volumes, timelines, pricing and confidential architecture remain private unless the owner explicitly approves publication.</p></div></section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Continue from either side</p><h2>Explore Canadian demand or Taiwan technology capability.</h2></div><div className="actions"><a className="pill primary" href="/atlas">Canada Atlas</a><a className="pill secondary" href="/Solutions">Taiwan Solutions</a><a className="pill secondary" href="/about">About FlyPig AI</a></div></div></section>
    <SiteFooter />
  </main>;
}
