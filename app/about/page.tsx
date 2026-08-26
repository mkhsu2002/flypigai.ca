import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { formattedAddress, siteIdentity } from "../../lib/site";
import { makeMetadata } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "About FlyPig AI | Canada-Taiwan Design Intelligence",
  description: "FlyPig AI is a Canada-based Edge AI and Physical AI design intelligence company building a structured decision layer between Canadian product demand and Taiwan technology capability.",
  path: "/about",
  enPath: "/about",
  zhPath: "/zh/about",
});

export default function AboutPage() {
  return <main>
    <SiteHeader languageHref="/zh/about" />

    <section className="hero shell">
      <p className="eyebrow">About FlyPig AI</p>
      <h1>Building the design intelligence layer between product intent and technology capability.</h1>
      <p className="lead">FlyPig AI is a Canada-based technology and intelligence company focused on Edge AI and Physical AI. We are building a structured decision layer that connects Canadian product requirements with Taiwan&apos;s semiconductor, embedded computing, sensing, robotics and manufacturing ecosystem.</p>
    </section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Company definition</p><h2>Intelligence first. Commercial execution second.</h2></div><p className="section-copy">FlyPig is not intended to become another electronics marketplace, generic sourcing agency or trade-consulting firm. The company&apos;s core asset should become its structured understanding of applications, engineering requirements, technology capabilities, ecosystem relationships and real design outcomes. Research, matching, representation and business development are ways to create and validate that intelligence.</p></div>
      <div className="grid3">
        <article className="card"><span className="num">01</span><h3>Design intelligence</h3><p>Translate a real product goal into requirements, architecture choices, technology trade-offs and credible design routes.</p></article>
        <article className="card"><span className="num">02</span><h3>Two-sided ecosystem data</h3><p>Map Canadian demand and application context alongside Taiwan&apos;s semiconductor, module, Edge AI and manufacturing capabilities.</p></article>
        <article className="card"><span className="num">03</span><h3>Outcome learning</h3><p>Over time, learn which technologies progress from research to technical discussion, evaluation, design-in and production.</p></article>
      </div>
    </section>

    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Why Canada × Taiwan</p><h2>Two complementary ecosystems with a difficult information gap between them.</h2></div><p className="section-copy">Canada has emerging demand across robotics, autonomous systems, industrial AI, drones and intelligent hardware. Taiwan has unusually dense capability across semiconductors, embedded platforms, cameras, modules, industrial computing and electronics manufacturing. The gap is not simply finding a supplier name; it is understanding which capability fits a specific product and why.</p></div></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">How FlyPig starts</p><h2>Service is the entry point, not the destination.</h2></div><p className="section-copy">In the early stage, FlyPig may earn revenue through focused research, technology qualification, supplier opportunity development, qualified introductions, representation or project-based commercial work. Those engagements matter because they expose the company to real requirements and real outcomes. The objective is to convert repeated work into reusable data, workflows, software and eventually scalable design intelligence.</p></div>
      <div className="grid3">
        <article className="card"><span className="num">Phase 1</span><h3>Build public authority</h3><p>Publish useful Canada ecosystem research, Taiwan technology intelligence and verified industry Signals so both sides can understand how FlyPig thinks.</p></article>
        <article className="card"><span className="num">Phase 2</span><h3>Develop real opportunities</h3><p>Work with a small number of qualified technologies and real Canadian product needs to validate matching, design-route and commercial workflows.</p></article>
        <article className="card"><span className="num">Phase 3</span><h3>Turn the workflow into a platform</h3><p>Use structured company, technology, application and opportunity data to automate more of the reasoning and matching layer.</p></article>
      </div>
    </section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Public research</p><h2>Research is evidence, not decoration.</h2></div><p className="section-copy">The Canada Physical AI Atlas, Taiwan Solutions intelligence and Industry Signals are public knowledge layers. They help establish entity authority and make the market easier to understand. They do not imply endorsement, authorization, distribution rights or an existing business relationship with a company unless that relationship is explicitly disclosed.</p></div><div className="actions"><a className="pill secondary" href="/atlas">Canada Atlas</a><a className="pill secondary" href="/Solutions">Taiwan Solutions</a><a className="pill secondary" href="/signals">Industry Signals</a></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Working principles</p><h2>Useful intelligence requires restraint.</h2></div><p className="section-copy">FlyPig should be trusted because it distinguishes what is known from what is inferred. That matters in a market where specifications, availability, partnerships and commercialization claims are often repeated without enough context.</p></div><div className="grid3">
      <article className="card"><span className="num">Evidence</span><h3>Primary sources first</h3><p>Prefer official product information, technical documentation and direct evidence. Preserve uncertainty when pricing, availability, compatibility or commercial status is not confirmed.</p></article>
      <article className="card"><span className="num">Independence</span><h3>Do not confuse coverage with representation</h3><p>A company appearing in FlyPig research is not automatically a partner, client, supplier or represented brand.</p></article>
      <article className="card"><span className="num">Privacy</span><h3>Opportunity data stays private</h3><p>Project requirements, BOMs, volumes, timelines, pricing and confidential technical documents are not public content unless explicit permission is given.</p></article>
    </div></section>

    <section className="section shell founder"><div><p className="eyebrow">Founder</p><h2>{siteIdentity.founder.name}</h2><p className="section-copy">M.K. Hsu works across AI automation, digital products and cross-border business development, with experience spanning Taiwan and Canada. He founded FlyPig AI around a simple thesis: better structured intelligence can reduce the friction between North American product intent and Taiwan&apos;s deep hardware capability.</p><div className="actions"><a className="pill secondary" href={siteIdentity.founder.url} target="_blank" rel="noreferrer">Founder profile ↗</a><a className="pill secondary" href="/editorial-policy">Editorial policy</a></div></div><div className="founder-card"><span className="mono">Delta · British Columbia · Canada</span><h3>{siteIdentity.brandName}</h3><p>Edge AI and Physical AI design intelligence connecting Canadian demand with Taiwan technology capability.</p></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Legal operator</p><h2>{siteIdentity.legalName}</h2></div><div><p className="section-copy">FlyPig AI is operated by {siteIdentity.legalName}.</p><p className="section-copy">{formattedAddress()}<br /><a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a></p></div></div></section>

    <SiteFooter />
  </main>;
}
