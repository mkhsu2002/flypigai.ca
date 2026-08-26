import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { formattedAddress, siteIdentity } from "../../lib/site";
import { makeMetadata, siteUrl } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "About FlyPig AI | Canada-Taiwan Design Intelligence",
  description: "About FlyPig AI, a Canada-based Edge AI and Physical AI design intelligence company connecting product requirements with Taiwan technology capabilities.",
  path: "/about",
  enPath: "/about",
  zhPath: "/zh/about",
});

export default function AboutPage() {
  return <main>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", "@id": `${siteUrl}/about#page`, name: "About FlyPig AI", url: `${siteUrl}/about`, mainEntity: { "@id": `${siteIdentity.founder.url}#person` }, isPartOf: { "@id": `${siteUrl}/#website` } }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Person", "@id": `${siteIdentity.founder.url}#person`, name: siteIdentity.founder.name, url: siteIdentity.founder.url, worksFor: { "@id": `${siteUrl}/#organization` }, knowsAbout: ["AI automation", "Digital products", "Canada-Taiwan business development"] }} />
    <SiteHeader languageHref="/zh/about" />

    <section className="hero shell about-hero">
      <p className="eyebrow">About FlyPig AI</p>
      <h1>Design intelligence between product intent and technology capability.</h1>
      <p className="lead">FlyPig AI is a Canada-based technology and intelligence company focused on Edge AI and Physical AI. We organize Canadian product requirements and Taiwan technology evidence into clearer design routes.</p>
    </section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Company definition</p><h2>Independent intelligence before a technology decision.</h2></div><p className="section-copy">FlyPig AI publishes source-based research, structures product requirements and evaluates technology paths. When there is a credible fit, it may facilitate a bounded introduction. Public coverage does not mean that FlyPig AI is an authorized distributor, supplier representative or official partner of a company discussed.</p></div>
      <div className="grid3">
        <article className="card"><span className="num">01</span><h3>Requirements</h3><p>Translate a product goal into the technical, commercial and deployment constraints that shape a viable architecture.</p></article>
        <article className="card"><span className="num">02</span><h3>Technology paths</h3><p>Compare capabilities, maturity, integration burden and open questions using primary-source evidence.</p></article>
        <article className="card"><span className="num">03</span><h3>Qualified conversations</h3><p>Support a focused technical introduction only when the public evidence and stated requirements show a credible fit.</p></article>
      </div>
    </section>

    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Why Canada × Taiwan</p><h2>Two complementary ecosystems with a difficult information gap between them.</h2></div><p className="section-copy">Canada has product and operating contexts across robotics, autonomous systems, industrial AI, drones and intelligent hardware. Taiwan has deep capability across semiconductors, embedded platforms, cameras, modules, industrial computing and electronics manufacturing. The useful question is not only who supplies a component, but which capability fits a specific product and why.</p></div></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Public research</p><h2>Research is evidence, not endorsement.</h2></div><p className="section-copy">The Canada Physical AI Atlas, Taiwan Solutions, Industry Signals and Insights organize public information from distinct parts of the ecosystem. They do not imply authorization, distribution rights, endorsement or an existing business relationship unless one is explicitly disclosed.</p></div><div className="actions"><a className="pill secondary" href="/atlas">Canada Atlas</a><a className="pill secondary" href="/Solutions">Taiwan Solutions</a><a className="pill secondary" href="/signals">Industry Signals</a></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Working principles</p><h2>Useful intelligence requires restraint.</h2></div><p className="section-copy">Specifications, availability and commercialization claims need context. FlyPig AI distinguishes confirmed facts, interpretation and unresolved questions so readers can see the evidence boundary.</p></div><div className="grid3">
      <article className="card"><span className="num">Evidence</span><h3>Primary sources first</h3><p>Prefer official product information, technical documentation and direct evidence. Preserve uncertainty when pricing, availability, compatibility or commercial status is not confirmed.</p></article>
      <article className="card"><span className="num">Independence</span><h3>Coverage is not representation</h3><p>A company appearing in FlyPig AI research is not automatically a client, supplier, represented brand or official collaborator.</p></article>
      <article className="card"><span className="num">Privacy</span><h3>Private requirements stay private</h3><p>Product requirements, BOMs, volumes, timelines, pricing and confidential technical documents are not public unless explicit permission is given.</p></article>
    </div></section>

    <section className="section shell founder"><div><p className="eyebrow">Founder</p><h2>{siteIdentity.founder.name}</h2><p className="section-copy">M.K. Hsu works across AI automation, digital products and cross-border business development, with experience spanning Taiwan and Canada. He founded FlyPig AI to make the path between North American product intent and Taiwan hardware capability easier to understand.</p><div className="actions"><a className="pill secondary" href={siteIdentity.founder.url} target="_blank" rel="noreferrer">Founder profile ↗</a><a className="pill secondary" href="/editorial-policy">Editorial policy</a></div></div><div className="founder-card"><span className="mono">Delta · British Columbia · Canada</span><h3>{siteIdentity.brandName}</h3><p>Edge AI and Physical AI design intelligence connecting Canadian demand with Taiwan technology capability.</p></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Legal operator</p><h2>{siteIdentity.legalName}</h2></div><div><p className="section-copy">FlyPig AI is operated by {siteIdentity.legalName}.</p><p className="section-copy">{formattedAddress()}<br /><a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a></p></div></div></section>

    <SiteFooter />
  </main>;
}
