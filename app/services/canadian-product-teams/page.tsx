import type { Metadata } from "next";
import JsonLd from "../../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../../seo";

export const metadata: Metadata = makeMetadata({
  title: "Edge AI Technology Qualification for Canadian Product Teams",
  description: "Clarify requirements, compare Edge AI architecture routes and qualify researched Taiwan technology candidates before supplier outreach or design-in.",
  path: "/services/canadian-product-teams",
  enPath: "/services/canadian-product-teams",
});

const inputs = ["Application and operating environment", "Compute, latency, power and thermal limits", "Vision, sensing and connectivity requirements", "Software, lifecycle, certification, cost, volume and timing constraints"];
const deliverables = [
  ["Requirement brief", "A shared statement of product intent, hard constraints, priorities and evidence still needed."],
  ["Architecture options", "A comparison of viable compute, platform, vision and sensing routes—not a single premature part recommendation."],
  ["Candidate fit matrix", "Researched Taiwan technologies compared by capability, maturity, integration burden, lifecycle and known risk."],
  ["Qualification questions", "A concise list of technical and commercial questions to resolve with candidate suppliers or specialists."],
  ["Bounded introduction", "When a credible match exists, an optional technical introduction with the question and relationship boundary stated clearly."],
];

export default function CanadianProductTeamsPage() {
  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "How We Help", path: "/services" }, { name: "Canadian Product Teams", path: "/services/canadian-product-teams" }])} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "Edge AI Technology Route & Qualification", serviceType: "Technology qualification", provider: { "@id": `${siteUrl}/#organization` }, areaServed: "Canada", audience: { "@type": "Audience", audienceType: "Canadian product, engineering and procurement teams" }, url: `${siteUrl}/services/canadian-product-teams`, description: metadata.description }} />
    <SiteHeader languageHref="/zh/services" />
    <section className="hero shell"><p className="eyebrow">For Canadian product teams</p><h1>Qualify an Edge AI technology route before locking the architecture.</h1><p className="lead">FlyPig AI turns a Canadian product requirement into architecture options, researched Taiwan technology candidates, visible risks and the questions required for a defensible next decision.</p><div className="actions"><a className="pill primary" href="/contact">Discuss a product requirement</a><a className="pill secondary" href="/technologies">Explore technology intelligence</a></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Useful starting input</p><h2>Bring the constraints that shape the design.</h2></div><p className="section-copy">A finished specification is not required. The engagement starts by separating known requirements from assumptions and unresolved engineering questions.</p></div><div className="grid2">{inputs.map((input, index) => <article className="card" key={input}><span className="num">0{index + 1}</span><h3>{input}</h3></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Decision outputs</p><h2>What the engagement produces.</h2></div><p className="section-copy">The exact scope follows one product decision. Deliverables identify what appears viable, why, and what still requires direct verification.</p></div><div className="grid3">{deliverables.map(([title, body]) => <article className="card" key={title}><span className="num">Deliverable</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">When this fits</p><h2>Use qualification while meaningful architecture choices remain open.</h2></div><p className="section-copy">This path is useful when a team is comparing edge compute, embedded platforms, vision or sensing options; reviewing a Taiwan solution; or preparing a more precise supplier conversation. FlyPig AI does not issue engineering sign-off, certification, legal advice or a substitute for prototype validation.</p></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Define the next decision</p><h2>Share the product intent, operating context and constraints already known.</h2></div><div className="actions"><a className="pill primary" href="/contact">Start a qualification inquiry</a></div></div></section>
    <SiteFooter />
  </main>;
}
