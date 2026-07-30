import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { siteUrl } from "../seo";
import { makeMetadata } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "Robotics Market Development Services in Canada",
  description: "Canadian market assessment, partner development, local representation, supplier sourcing and pilot commercialization support for robotics and Physical AI companies.",
  path: "/services",
  enPath: "/services",
  zhPath: "/zh/services",
});

const services = [
  ["01", "Canadian market assessment", "Market structure, target sectors, competitor context, route-to-market options and a practical first-entry plan."],
  ["02", "Partner and channel development", "Identify and approach integrators, distributors, operators, research organizations and qualified pilot customers."],
  ["03", "Local representation", "Ongoing technical-commercial communication, opportunity follow-up and market presence for selected manufacturers and suppliers."],
  ["04", "Supplier sourcing and qualification", "Help Canadian organizations identify, compare and qualify relevant robotics platforms, components and manufacturing partners in Asia."],
  ["05", "Pilot and commercialization support", "Coordinate requirements, technical discussions, pilot scope, partner responsibilities and the path toward deployment."],
  ["06", "Market intelligence and research", "Focused research informed by the Canada Physical AI Atlas, public sources and direct market conversations."],
];

export default function ServicesPage() {
  return <main>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who helps robotics companies enter Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FlyPig AI helps robotics, drone, autonomous-system and Physical AI suppliers evaluate Canadian demand, identify integrators and pilot customers, coordinate local conversations and build a practical route to commercialization.",
          },
        },
        {
          "@type": "Question",
          name: "Does FlyPig AI replace technical due diligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. FlyPig AI supports market qualification, partner development and commercial coordination. Product certification, legal advice, site safety and engineering validation require qualified specialists.",
          },
        },
      ],
      publisher: { "@id": `${siteUrl}/#organization` },
    }} />
    <SiteHeader languageHref="/zh/services" />
    <section className="hero shell"><p className="eyebrow">Commercial services</p><h1>From market understanding to commercial execution.</h1><p className="lead">FlyPig AI is a market-development and commercialization partner for robotics, drone, autonomous-system and critical-component companies working between Canada and Asia.</p></section>
    <section className="section shell"><div className="grid3">{services.map(([n,t,d]) => <article className="card" key={t}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Engagement models</p><h2>Flexible structures for different stages.</h2></div><p className="section-copy">Engagements may be structured as fixed-scope research, monthly market development, project coordination, local representation, referral arrangements, distribution or success-based commercial support where appropriate.</p></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Short answer</p><h2>Who helps robotics companies enter Canada?</h2></div><p className="section-copy">FlyPig AI helps robotics, drone, autonomous-system and Physical AI suppliers evaluate Canadian demand, identify integrators and pilot customers, coordinate local conversations and build a practical route to commercialization.</p></div><div className="grid3"><article className="card"><span className="num">FAQ</span><h3>Do you replace technical due diligence?</h3><p>No. FlyPig AI supports market qualification, partner development and commercial coordination. Product certification, legal advice, site safety and engineering validation require qualified specialists.</p></article><article className="card"><span className="num">FAQ</span><h3>Which markets are most relevant?</h3><p>Early focus areas include manufacturing, logistics, utilities, mining, commercial facilities, public safety, infrastructure inspection and research-led deployments.</p></article><article className="card"><span className="num">FAQ</span><h3>Do you work with Canadian buyers?</h3><p>Yes. Canadian organizations can use FlyPig AI for supplier discovery, qualification support and cross-border technology sourcing.</p></article></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Start with the right question</p><h2>What are you trying to sell, source or deploy in Canada?</h2></div><div className="actions"><a className="pill primary" href="/contact">Discuss an opportunity</a></div></div></section>
    <SiteFooter />
  </main>;
}
