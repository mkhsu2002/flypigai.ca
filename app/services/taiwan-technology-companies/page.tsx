import type { Metadata } from "next";
import JsonLd from "../../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../../seo";

export const metadata: Metadata = makeMetadata({
  title: "Canada Design-In Readiness for Taiwan Technology Companies",
  description: "Assess Canadian application fit, design-in friction and evidence gaps before a Taiwan Edge AI, embedded, vision or sensing company begins broad outreach.",
  path: "/services/taiwan-technology-companies",
  enPath: "/services/taiwan-technology-companies",
  zhPath: "/zh/services/taiwan-technology-companies",
});

const evidence = ["Product capability and defensible performance claims", "Reference designs, evaluation path and software support", "Lifecycle, availability, integration and support model", "Application evidence that can be reviewed by a Canadian technical team"];
const outputs = [
  ["Canada application-fit brief", "A focused view of where the capability may solve a Canadian product or operating problem—and where fit is weak."],
  ["Target organization categories", "Relevant types of product companies, integrators, operators or research organizations, without presenting a generic lead list."],
  ["Design-in friction review", "The technical, software, lifecycle, compliance, support and evidence gaps likely to slow evaluation."],
  ["Readiness actions", "A prioritized list of materials, answers and validation steps to complete before a technical conversation."],
  ["Qualified opportunity path", "When evidence and application fit are credible, a bounded path toward a relevant conversation or introduction."],
];

export default function TaiwanTechnologyCompaniesPage() {
  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "How We Help", path: "/services" }, { name: "Taiwan Technology Companies", path: "/services/taiwan-technology-companies" }])} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "Canada Application & Design-In Readiness", serviceType: "Application and design-in readiness", provider: { "@id": `${siteUrl}/#organization` }, areaServed: ["Taiwan", "Canada"], audience: { "@type": "Audience", audienceType: "Taiwan technology companies" }, url: `${siteUrl}/services/taiwan-technology-companies`, description: metadata.description }} />
    <SiteHeader languageHref="/zh/services/taiwan-technology-companies" />
    <section className="hero shell"><p className="eyebrow">For Taiwan technology companies</p><h1>Prepare for a Canadian application and design-in conversation.</h1><p className="lead">FlyPig AI evaluates where a Taiwan Edge AI, embedded, vision or sensing capability may fit Canadian product needs, then makes the evidence gaps and integration friction visible before broad outreach.</p><div className="actions"><a className="pill primary" href="/contact">Discuss Canada readiness</a><a className="pill secondary" href="/atlas">Explore Canadian demand context</a></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Useful starting evidence</p><h2>Make the capability reviewable.</h2></div><p className="section-copy">A credible Canadian conversation needs more than a product category or marketing claim. The review begins with public or approved evidence that a technical team can inspect.</p></div><div className="grid2">{evidence.map((item, index) => <article className="card" key={item}><span className="num">0{index + 1}</span><h3>{item}</h3></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Readiness outputs</p><h2>What the engagement produces.</h2></div><p className="section-copy">The output is a decision-ready application brief, not an implied partnership or a promise of Canadian demand.</p></div><div className="grid3">{outputs.map(([title, body]) => <article className="card" key={title}><span className="num">Deliverable</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Relationship boundary</p><h2>Readiness is not representation.</h2></div><p className="section-copy">This engagement does not make FlyPig AI an authorized sales representative, distributor, referral agent or engineering approver. Any later commercial relationship would require separate written evidence and an explicit scope.</p></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Test the application hypothesis</p><h2>Share the product source, technical evidence and Canadian use case you want to evaluate.</h2></div><div className="actions"><a className="pill primary" href="/contact">Start a readiness inquiry</a></div></div></section>
    <SiteFooter />
  </main>;
}
