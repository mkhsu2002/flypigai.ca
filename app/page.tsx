import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { makeMetadata, siteUrl } from "./seo";

export const metadata: Metadata = makeMetadata({
  title: "Edge AI & Physical AI Design Intelligence | Canada ↔ Taiwan",
  description: "FlyPig AI is a Canada-based design intelligence company connecting Canadian product requirements with Taiwan's semiconductor, Edge AI, embedded computing and Physical AI capabilities.",
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
      <p className="lead">FlyPig AI is a Canada-based design intelligence company. We map Canadian product requirements to Taiwan&apos;s semiconductor, Edge AI, embedded computing, sensing and manufacturing capabilities so teams can evaluate better technology paths before design decisions become expensive to change.</p>
      <div className="actions"><a className="pill primary" href="/atlas">Explore Canadian demand</a><a className="pill secondary" href="/Solutions">Explore Taiwan solutions</a><a className="pill secondary" href="/signals">Follow industry signals</a></div>
    </div><aside className="signal-card home-signal-card">
      <p className="eyebrow">What FlyPig is building</p>
      <div className="signal-line"><span>Input</span><strong>Product intent</strong></div>
      <div className="signal-line"><span>Intelligence</span><strong>Architecture + technology fit</strong></div>
      <div className="signal-line"><span>Ecosystems</span><strong>Canada demand × Taiwan capability</strong></div>
      <div className="signal-line"><span>Outcome</span><strong>Qualified design path</strong></div>
    </aside></div></section>

    <div className="ticker">product intent · design intelligence · architecture options · technology fit · qualified introduction · design-in learning</div>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">The intelligence layer</p><h2>Start before the RFQ.</h2></div><p className="section-copy">Most sourcing tools become useful after a buyer already knows what to buy. FlyPig focuses earlier: when the product goal is clear but the architecture, component stack, module route or partner choice is still open.</p></div>
      <div className="grid3">
        <article className="card"><span className="num">01 · Understand</span><h3>Turn product intent into engineering questions.</h3><p>Application, environment, compute, vision, sensing, power, connectivity, certification, cost, volume and launch timing become a structured requirement set.</p></article>
        <article className="card"><span className="num">02 · Compare</span><h3>Evaluate technology routes, not just part numbers.</h3><p>Compare architecture options and relevant Taiwan technologies by capability, maturity, integration burden, production fit and known constraints.</p></article>
        <article className="card"><span className="num">03 · Connect</span><h3>Move from research to a qualified conversation.</h3><p>When there is credible fit, FlyPig can support technical introductions, opportunity development and early design-in conversations without pretending an unverified supplier relationship exists.</p></article>
      </div>
    </section>

    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Initial technology scope</p><h2>The stack where Taiwan is unusually strong.</h2></div><p className="section-copy">FlyPig&apos;s first knowledge graph concentrates on the hardware and embedded layers behind autonomous systems, intelligent devices and industrial Physical AI.</p></div><div className="grid3">{domains.map((domain, index) => <article className="card" key={domain}><span className="num">{String(index + 1).padStart(2,"0")}</span><h3>{domain}</h3></article>)}</div></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Two public knowledge graphs</p><h2>Demand on one side. Capability on the other.</h2></div><p className="section-copy">FlyPig is deliberately building both sides of the market before attempting to become a marketplace. Public ecosystem intelligence creates discoverability and trust; project-level opportunity data remains private.</p></div><div className="grid3">
      <article className="card"><span className="num">Canada Atlas</span><h3>Where product demand may emerge.</h3><p>Companies, operators, industries, integrators, technologies and regional clusters relevant to robotics and Physical AI in Canada.</p><div className="actions"><a className="pill secondary" href="/atlas">Explore Canada Atlas</a></div></article>
      <article className="card"><span className="num">Taiwan Solutions</span><h3>What the supply ecosystem can actually do.</h3><p>Semiconductors, Edge AI platforms, modules, embedded systems and manufacturing capabilities interpreted from primary sources.</p><div className="actions"><a className="pill secondary" href="/Solutions">Explore Taiwan Solutions</a></div></article>
      <article className="card"><span className="num">Industry Signals</span><h3>Track capability changes as they happen.</h3><p>English-language reporting on new Taiwan products and commercialization signals, rewritten for North American engineering and business readers.</p><div className="actions"><a className="pill secondary" href="/signals">Read Signals</a></div></article>
    </div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">What FlyPig produces</p><h2>From information to a design route.</h2></div><p className="section-copy">The long-term product is not a directory. It is a decision system that can connect a real product requirement to architecture choices, technology candidates, partner paths and eventually observed design outcomes.</p></div><div className="process">
      <div className="step"><span className="num">01</span><strong>Product intent</strong><p>What are you building and why?</p></div>
      <div className="step"><span className="num">02</span><strong>Requirements</strong><p>What constraints actually matter?</p></div>
      <div className="step"><span className="num">03</span><strong>Design route</strong><p>Which architectures are viable?</p></div>
      <div className="step"><span className="num">04</span><strong>Technology fit</strong><p>Which Taiwan capabilities fit the route?</p></div>
      <div className="step"><span className="num">05</span><strong>Outcome learning</strong><p>What happens after evaluation and design-in?</p></div>
    </div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Operating model</p><h2>Services create data. Data improves intelligence.</h2></div><p className="section-copy">Early revenue may come from research, qualified matching, supplier opportunity development, representation or project work. These are execution mechanisms, not the final identity of the company. Each real engagement should strengthen FlyPig&apos;s structured understanding of applications, technologies and design outcomes.</p></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Data principle</p><h2>Public intelligence attracts the market. Private opportunity data builds the moat.</h2></div><p className="section-copy">Company profiles, technology capabilities, ecosystem maps, Signals and reference design research can become public knowledge. Submitted product plans, BOMs, volumes, timelines, pricing and confidential architecture remain private unless explicitly approved for publication.</p></div></section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Build the graph from either side</p><h2>Explore Canadian demand or Taiwan technology capability.</h2></div><div className="actions"><a className="pill primary" href="/atlas">Canada Atlas</a><a className="pill secondary" href="/Solutions">Taiwan Solutions</a><a className="pill secondary" href="/about">How FlyPig thinks</a></div></div></section>
    <SiteFooter />
  </main>;
}
