import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "Canada-Taiwan Edge AI Technology Qualification",
  description: "Two bounded FlyPig AI engagements: technology-route qualification for Canadian product teams and Canada application readiness for Taiwan technology companies.",
  path: "/services",
  enPath: "/services",
  zhPath: "/zh/services",
});

const paths = [
  {
    eyebrow: "For Canadian product teams",
    title: "Edge AI Technology Route & Qualification",
    body: "Turn product intent and operating constraints into architecture options, researched Taiwan technology candidates and a visible fit-and-risk decision.",
    outputs: ["Requirement brief", "Architecture options", "Candidate fit and risk matrix", "Open validation questions"],
    href: "/services/canadian-product-teams",
    cta: "See the qualification engagement",
  },
  {
    eyebrow: "For Taiwan technology companies",
    title: "Canada Application & Design-In Readiness",
    body: "Translate product capability into Canadian application context, identify evidence gaps and prepare a credible technical conversation before broad outreach.",
    outputs: ["Canada application-fit brief", "Target organization categories", "Design-in friction review", "Qualified opportunity path"],
    href: "/services/taiwan-technology-companies",
    cta: "See the readiness engagement",
  },
];

const principles = [
  ["Evidence before outreach", "Public and approved sources are used to test a fit hypothesis before asking either market for attention."],
  ["Questions stay visible", "Unknown software, lifecycle, compliance, supply, integration or support details remain explicit rather than becoming assumptions."],
  ["The next step is bounded", "An introduction may follow when the fit is credible, but it does not imply authorization, agency, distribution or engineering approval."],
];

export default function ServicesPage() {
  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "How We Help", path: "/services" }])} />
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Canada-Taiwan Edge AI technology qualification",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: ["Canada", "Taiwan"],
      serviceType: ["Edge AI Technology Route & Qualification", "Canada Application & Design-In Readiness"],
      description: metadata.description,
      url: `${siteUrl}/services`,
    }} />
    <SiteHeader languageHref="/zh/services" />
    <section className="hero shell"><p className="eyebrow">How We Help · Canada ↔ Taiwan</p><h1>Two focused paths from technical uncertainty to a qualified next step.</h1><p className="lead">FlyPig AI is a Canada–Taiwan Edge AI and Physical AI design-intelligence company. We help Canadian product teams qualify Taiwan technology routes and help Taiwan technology companies prepare for Canadian applications and design-in conversations.</p><div className="actions"><a className="pill primary" href="/contact">Discuss a scoped question</a><a className="pill secondary" href="/editorial-policy">How commercial work stays separate</a></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Choose your path</p><h2>Start with the organization that owns the decision.</h2></div><p className="section-copy">Each engagement has a different input and output. Both begin with a concrete product or application question—not a generic request for leads.</p></div><div className="grid2">{paths.map((path) => <article className="card" key={path.title}><span className="num">{path.eyebrow}</span><h3>{path.title}</h3><p>{path.body}</p><ul>{path.outputs.map((output) => <li key={output}>{output}</li>)}</ul><div className="actions"><a className="pill secondary" href={path.href}>{path.cta}</a></div></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Working standard</p><h2>Research, qualification and a decision-ready brief.</h2></div><p className="section-copy">The work is scoped around the evidence required for one decision. It does not replace engineering validation, legal advice, certification or site-safety review.</p></div><div className="grid3">{principles.map(([title, body], index) => <article className="card" key={title}><span className="num">0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Engagement boundary</p><h2>Commercial relationships are named only when they exist.</h2></div><p className="section-copy">Public research, a qualification brief or a technical introduction does not make FlyPig AI an authorized representative, referral agent, distributor, deployment contractor or supplier. Any such relationship would require separate written evidence and an explicit scope.</p></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Start with one decision</p><h2>Share the product requirement or Canadian application question that needs to become clearer.</h2></div><div className="actions"><a className="pill primary" href="/contact">Start a scoped conversation</a></div></div></section>
    <SiteFooter />
  </main>;
}
