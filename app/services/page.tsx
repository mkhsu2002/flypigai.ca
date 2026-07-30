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

const deliverables = [
  ["Market-entry brief", "A concise view of target segments, buyer expectations, route-to-market options, visible risks and the first realistic commercial path."],
  ["Partner shortlist", "A qualified list of integrators, distributors, operators, research groups or pilot candidates with a reason for each recommended target."],
  ["Pilot opportunity profile", "A practical pilot outline covering the use case, acceptance criteria, likely constraints, buyer responsibilities and follow-up decision gates."],
  ["Supplier qualification summary", "For Canadian organizations, a structured comparison of relevant Asian robotics platforms, components or manufacturing partners."],
  ["Outreach and representation notes", "Commercial messages, conversation history, stakeholder context and next actions when FlyPig AI is supporting ongoing development."],
  ["Risk register", "Known gaps around support, certification, safety, data handling, training, spare parts, integration and local operating requirements."],
];

const process = [
  ["01", "Intake", "Clarify the product, deployment history, target buyer, technical maturity, support model and commercial objective."],
  ["02", "Market fit", "Map where the technology could create measurable Canadian value and where the first use case is likely too broad or too early."],
  ["03", "Partner path", "Separate potential buyers, integrators, distributors, research collaborators and referral channels instead of treating every contact as a sales lead."],
  ["04", "Pilot design", "Define a bounded first deployment with success criteria, constraints, responsibilities and a credible post-pilot decision path."],
  ["05", "Commercial follow-through", "Support selected conversations, representation, sourcing or partner development after the first market hypothesis is validated."],
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
    <section className="hero shell"><p className="eyebrow">Commercial services</p><h1>From market understanding to commercial execution.</h1><p className="lead">FlyPig AI is a market-development and commercialization partner for robotics, drone, autonomous-system and critical-component companies working between Canada and Asia. The work starts with qualification: what should be sold, sourced or deployed, who needs to be involved, and what evidence would make the next step credible.</p></section>
    <section className="section shell"><div className="grid3">{services.map(([n,t,d]) => <article className="card" key={t}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">What an engagement produces</p><h2>Concrete outputs, not generic market advice.</h2></div><p className="section-copy">The exact scope depends on the company, product maturity and market question. A focused engagement should leave both sides with clearer target segments, qualified contacts, deployment risks and a practical next step.</p></div><div className="grid3">{deliverables.map(([title, body]) => <article className="card" key={title}><span className="num">Deliverable</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Working process</p><h2>A disciplined path from interest to evidence.</h2></div><p className="section-copy">Robotics market development fails when outreach starts before the use case, buyer responsibility, support model and pilot economics are clear. FlyPig AI uses a staged process to reduce that risk before asking the market for attention.</p></div><div className="process">{process.map(([n,t,d]) => <div className="step" key={t}><span className="num">{n}</span><strong>{t}</strong><span>{d}</span></div>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Engagement models</p><h2>Flexible structures for different stages.</h2></div><p className="section-copy">Engagements may be structured as fixed-scope research, monthly market development, project coordination, local representation, referral arrangements, distribution or success-based commercial support where appropriate. FlyPig AI is a commercial development partner, not a certification body, legal advisor, engineering sign-off provider or official industry authority.</p></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Short answer</p><h2>Who helps robotics companies enter Canada?</h2></div><p className="section-copy">FlyPig AI helps robotics, drone, autonomous-system and Physical AI suppliers evaluate Canadian demand, identify integrators and pilot customers, coordinate local conversations and build a practical route to commercialization.</p></div><div className="grid3"><article className="card"><span className="num">FAQ</span><h3>Do you replace technical due diligence?</h3><p>No. FlyPig AI supports market qualification, partner development and commercial coordination. Product certification, legal advice, site safety and engineering validation require qualified specialists.</p></article><article className="card"><span className="num">FAQ</span><h3>Which markets are most relevant?</h3><p>Early focus areas include manufacturing, logistics, utilities, mining, commercial facilities, public safety, infrastructure inspection and research-led deployments.</p></article><article className="card"><span className="num">FAQ</span><h3>Do you work with Canadian buyers?</h3><p>Yes. Canadian organizations can use FlyPig AI for supplier discovery, qualification support and cross-border technology sourcing.</p></article></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Related guides</p><h2>Commercial context before outreach.</h2></div><p className="section-copy">These guides help suppliers and buyers prepare more concrete market-development conversations.</p></div><div className="grid3"><a className="card" href="/insights/canada-robotics-market-entry-guide"><span className="num">Guide</span><h3>Canada Robotics Market Entry Guide</h3><p>Validate demand, channels, pilots and support before launching broad sales outreach.</p></a><a className="card" href="/insights/robotics-integrators-in-canada"><span className="num">Guide</span><h3>Robotics Integrators in Canada</h3><p>Understand how integration partners reduce deployment risk and what to evaluate.</p></a><a className="card" href="/insights/asian-robotics-suppliers-enter-canada"><span className="num">Guide</span><h3>Asian Robotics Suppliers Entering Canada</h3><p>Build local proof, support and partner fit before scaling sales activity.</p></a></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Start with the right question</p><h2>What are you trying to sell, source or deploy in Canada?</h2></div><div className="actions"><a className="pill primary" href="/contact">Discuss an opportunity</a></div></div></section>
    <SiteFooter />
  </main>;
}
