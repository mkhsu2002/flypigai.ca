import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services | FlyPig AI", description: "Canadian market development, partner development, supplier sourcing and commercialization support for robotics and Physical AI companies." };

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
    <header className="shell nav"><a className="brand" href="/"><span className="mark">FP</span><span>FlyPig AI</span></a><nav className="navlinks"><a href="/services">Services</a><a href="/atlas">Atlas</a><a href="/insights">Insights</a><a href="/about">About</a><a href="/zh/services" className="lang-link">繁中</a></nav><a className="pill secondary" href="/contact">Contact us</a></header>
    <section className="hero shell"><p className="eyebrow">Commercial services</p><h1>From market understanding to commercial execution.</h1><p className="lead">FlyPig AI is a market-development and commercialization partner for robotics, drone, autonomous-system and critical-component companies working between Canada and Asia.</p></section>
    <section className="section shell"><div className="grid3">{services.map(([n,t,d]) => <article className="card" key={t}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Engagement models</p><h2>Flexible structures for different stages.</h2></div><p className="section-copy">Engagements may be structured as fixed-scope research, monthly market development, project coordination, local representation, referral arrangements, distribution or success-based commercial support where appropriate.</p></div></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Start with the right question</p><h2>What are you trying to sell, source or deploy in Canada?</h2></div><div className="actions"><a className="pill primary" href="/contact">Discuss an opportunity</a></div></div></section>
    <footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>Market development · Representation · Commercialization</span></footer>
  </main>;
}