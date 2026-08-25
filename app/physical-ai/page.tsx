import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { makeMetadata, siteUrl } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "Physical AI Deployment for Canadian Industry",
  description: "FlyPig AI connects robotics manufacturers with Canadian businesses through market validation, pilot deployment, AI workflow integration and localized operational support.",
  path: "/physical-ai",
  enPath: "/physical-ai",
});

const services = [
  ["01", "Readiness assessment", "We identify high-value, automatable tasks, map constraints and build a realistic ROI case before hardware is selected."],
  ["02", "Pilot deployment", "We define measurable success criteria, coordinate hardware, local integration and human-in-the-loop operations."],
  ["03", "Operational support", "We turn a successful pilot into a repeatable operating system with monitoring, training, reporting and continuous improvement."],
];

const markets = [
  ["Warehousing & logistics", "Movement, inspection, inventory visibility, cycle counting and exception handling in structured facilities."],
  ["Utilities & infrastructure", "Inspection, sensing, safety checks and remote presence for assets where distance or risk makes manual work expensive."],
  ["Industrial facilities", "Routine monitoring, thermal sensing, condition checks and task support in bounded operating environments."],
];

const readiness = [
  ["Task clarity", "The first task can be described in operational terms, not only as a desire to deploy a robot."],
  ["Measurable outcome", "The buyer can name the metric that matters: time saved, risk reduced, coverage increased, cost avoided or data quality improved."],
  ["Environment control", "The site conditions, connectivity, lighting, flooring, weather exposure and human traffic are known well enough to scope constraints."],
  ["Ownership", "Operations, safety, IT, procurement and maintenance responsibilities have identifiable owners."],
  ["Support path", "There is a credible plan for training, parts, escalation, remote support and post-pilot operation."],
  ["Decision gate", "The pilot has acceptance criteria and a defined next decision, not just a demonstration date."],
];

const pilotCriteria = [
  ["Scope", "A bounded task, site, time window and operator group."],
  ["Safety", "Known hazards, human interaction points, fallback procedures and escalation responsibilities."],
  ["Data", "What will be measured, who receives the output and how the result informs a business decision."],
  ["Integration", "How the system connects to existing workflows, reporting, maintenance or human-in-the-loop operations."],
  ["Support", "Who responds when the system fails, confidence drops or operators need help."],
  ["Decision", "What happens after the pilot: continue, modify, expand, pause or reject."],
];

export default function PhysicalAIPage() {
  return <main>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Physical AI deployment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Physical AI deployment turns robotics, sensors, edge intelligence and human workflows into safe, measurable operations in real facilities and field environments.",
          },
        },
        {
          "@type": "Question",
          name: "What does FlyPig AI do in Physical AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FlyPig AI publishes readiness and ecosystem intelligence that helps teams frame tasks, pilot evidence, operating constraints and the specialist roles required for Physical AI deployment.",
          },
        },
      ],
      publisher: { "@id": `${siteUrl}/#organization` },
    }} />
    <SiteHeader />

    <section className="hero">
      <div className="shell hero-grid">
        <div>
          <p className="eyebrow">Canada · Asia · Physical AI</p>
          <h1>AI moves into the real world.</h1>
          <p className="lead">This educational guide explains the operating layer behind Physical AI deployment: tasks, sites, safety, support, integration and measurable business value. It is a readiness framework, not an engineering certification or claim of an existing deployment relationship.</p>
          <div className="actions"><a className="pill primary" href="/contact">Discuss a deployment</a><a className="pill secondary" href="/insights/canada-physical-ai-ecosystem-overview">Read the ecosystem overview</a></div>
        </div>
        <aside className="signal-card">
          <p className="eyebrow">Deployment signal</p>
          <div className="signal-line"><span>Market</span><strong>Canada</strong></div>
          <div className="signal-line"><span>Operating model</span><strong>Human + autonomy</strong></div>
          <div className="signal-line"><span>Method</span><strong>Assess → Pilot → Operate</strong></div>
          <div className="signal-line"><span>Current focus</span><strong>Deployment readiness</strong></div>
        </aside>
      </div>
    </section>

    <div className="ticker">Physical AI readiness · robotics market entry · pilot development · AI workflow integration · localized deployment support</div>

    <section id="readiness-path" className="section shell">
      <div className="section-head"><div><p className="eyebrow">Readiness path</p><h2>Start with the work—not the robot.</h2></div><p className="section-copy">A useful readiness review begins with operational evidence and the smallest pilot that could prove value. Technical validation, safety and sign-off remain with qualified specialists and the operating organization.</p></div>
      <div className="grid3">{services.map(([n,t,d])=><article className="card" key={t}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className="section shell">
      <div className="section-head"><div><p className="eyebrow">Short answer</p><h2>What is Physical AI deployment?</h2></div><p className="section-copy">Physical AI deployment turns robotics, sensors, edge intelligence, safety rules and human workflows into a measurable operating system. In Canada, the near-term opportunity is often assessment, integration and support—not buying a robot first.</p></div>
    </section>

    <section className="section shell">
      <div className="section-head"><div><p className="eyebrow">Readiness checklist</p><h2>Six questions before choosing hardware.</h2></div><p className="section-copy">A promising robotics idea becomes a serious Physical AI opportunity when the work, environment, owner and success measure are concrete enough to scope. These checks help decide whether to move toward a pilot or return to market qualification.</p></div>
      <div className="grid3">{readiness.map(([title, body]) => <article className="card" key={title}><span className="num">Check</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section id="markets" className="section dark">
      <div className="shell"><div className="section-head"><div><p className="eyebrow">Initial use cases</p><h2>Structured environments. Measurable outcomes.</h2></div><p className="section-copy">We are deliberately focused. Early deployments should be bounded, observable and safe enough to produce reliable operating data—not just an impressive demonstration.</p></div><div className="grid3">{markets.map(([t,d],i)=><article className="card" key={t}><span className="num">0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div>
    </section>

    <section className="section shell">
      <div className="section-head"><div><p className="eyebrow">Deployment method</p><h2>Five steps from interest to operation.</h2></div><p className="section-copy">A disciplined sequence protects both the customer and the manufacturer. Every stage has explicit evidence, responsibilities and a decision gate.</p></div>
      <div className="process">{[["01","Assess","Map tasks, economics and risk."],["02","Select","Choose the right form factor and vendor."],["03","Pilot","Prove performance in a bounded scope."],["04","Integrate","Connect systems, people and controls."],["05","Operate","Monitor, support and improve."]].map(([n,t,d])=><div className="step" key={t}><span className="num">{n}</span><strong>{t}</strong><span>{d}</span></div>)}</div>
    </section>

    <section className="section dark"><div className="shell">
      <div className="section-head"><div><p className="eyebrow">Pilot acceptance criteria</p><h2>A useful pilot proves more than motion.</h2></div><p className="section-copy">A robot moving through a space is not the same as a deployable operating system. A serious pilot should define what is being tested, how risk is handled, what data is captured and who owns the next decision.</p></div>
      <div className="grid3">{pilotCriteria.map(([title, body]) => <article className="card" key={title}><span className="num">Pilot</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </div></section>

    <section className="section shell">
      <div className="section-head"><div><p className="eyebrow">FlyPig AI Insights</p><h2>Follow the operating layer—not only the machines.</h2></div><div><p className="section-copy">Our opening research series examines Canada's emerging Physical AI value chain, platform-agnostic robotics, infrastructure adoption and the gap between impressive hardware and reliable deployment.</p><div className="actions"><a className="pill secondary" href="/insights">Explore Physical AI insights</a></div></div></div>
    </section>

    <section id="route-to-market" className="section shell">
      <div className="section-head"><div><p className="eyebrow">For product teams</p><h2>Frame a credible Canadian deployment route.</h2></div><p className="section-copy">The sequence below describes research questions, not an existing partner network or a promise of deployment.</p></div>
      <div className="grid3"><article className="card"><span className="num">Phase 01</span><h3>Market validation</h3><p>Test positioning, identify operator categories and surface local compliance or service barriers.</p></article><article className="card"><span className="num">Phase 02</span><h3>Pilot qualification</h3><p>Define the use case, responsible parties, evidence threshold and selection criteria for a possible trial.</p></article><article className="card"><span className="num">Phase 03</span><h3>Deployment planning</h3><p>Identify the integration, support and operating responsibilities required before repeatable adoption.</p></article></div>
    </section>

    <section id="about" className="section shell founder">
      <div><p className="eyebrow">Founder-led</p><h2>Canada-based. Asia-connected. Business-first.</h2><p className="section-copy">FlyPig AI is led by M.K. Hsu, an entrepreneur working across Canada and Taiwan in AI automation, e-commerce, digital products and cross-border market development. The founder profile remains on the independent personal site, preserving a clear distinction between personal thought leadership and FlyPig AI’s commercial work.</p><div className="actions"><a className="pill secondary" href="https://mkhsu.icareu.tw/" target="_blank" rel="noreferrer">Founder profile ↗</a></div></div>
      <div className="founder-card"><span className="mono">Founder · FlyPig AI</span><h3>M.K. Hsu</h3><p>Independent Canada-Taiwan technology and ecosystem intelligence.</p></div>
    </section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Boundaries</p><h2>Deployment support does not replace specialist review.</h2></div><p className="section-copy">FlyPig AI can help frame readiness, market fit, partner paths and pilot scope. It does not provide legal advice, engineering certification, site safety approval, procurement approval or regulatory sign-off. Those responsibilities must be handled by qualified specialists and the customer’s internal owners.</p></div></section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Build the first credible pilot</p><h2>Bring us a task—not a robot wish list.</h2></div><div className="actions"><a className="pill primary" href="/contact">Discuss a deployment</a></div></div></section>
    <SiteFooter />
  </main>
}
