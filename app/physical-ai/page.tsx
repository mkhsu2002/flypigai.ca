import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physical AI Deployment for Canadian Industry",
  description: "FlyPig AI connects robotics manufacturers with Canadian businesses through market validation, pilot deployment, AI workflow integration and localized operational support.",
};

const services = [
  ["01", "Readiness assessment", "We identify high-value, automatable tasks, map constraints and build a realistic ROI case before hardware is selected."],
  ["02", "Pilot deployment", "We define measurable success criteria, coordinate hardware, local integration and human-in-the-loop operations."],
  ["03", "Operational support", "We turn a successful pilot into a repeatable operating system with monitoring, training, reporting and continuous improvement."],
];

const markets = [
  ["Warehousing & logistics", "Movement, inspection, inventory visibility and exception handling."],
  ["Commercial facilities", "Routine inspection, thermal sensing, safety checks and remote presence."],
  ["Retail & innovation", "Customer-facing demonstrations, education labs and controlled real-world trials."],
];

export default function PhysicalAIPage() {
  return <main>
    <header className="shell nav">
      <a className="brand" href="/"><span className="mark">FP</span><span>FlyPig AI</span></a>
      <nav className="navlinks"><a href="#services">Services</a><a href="#markets">Use cases</a><a href="#partners">Partners</a><a href="#about">About</a></nav>
      <a className="pill secondary" href="mailto:hello@flypigai.ca">Start a conversation</a>
    </header>

    <section className="hero">
      <div className="shell hero-grid">
        <div>
          <p className="eyebrow">Canada · Asia · Physical AI</p>
          <h1>AI moves into the real world.</h1>
          <p className="lead">We help Canadian businesses validate and deploy robotics—and help robotics manufacturers build a credible path into Canada.</p>
          <div className="actions"><a className="pill primary" href="mailto:hello@flypigai.ca?subject=Physical AI Assessment">For Canadian businesses</a><a className="pill secondary" href="mailto:hello@flypigai.ca?subject=Canada Market Partnership">For robotics manufacturers</a></div>
        </div>
        <aside className="signal-card">
          <p className="eyebrow">Deployment signal</p>
          <div className="signal-line"><span>Market</span><strong>Canada</strong></div>
          <div className="signal-line"><span>Operating model</span><strong>Human + autonomy</strong></div>
          <div className="signal-line"><span>Method</span><strong>Assess → Pilot → Operate</strong></div>
          <div className="signal-line"><span>Current focus</span><strong>Design partners</strong></div>
        </aside>
      </div>
    </section>

    <div className="ticker">Physical AI readiness · robotics market entry · pilot development · AI workflow integration · localized deployment support</div>

    <section id="services" className="section shell">
      <div className="section-head"><div><p className="eyebrow">What we do</p><h2>Start with the work—not the robot.</h2></div><p className="section-copy">Most robotics projects fail before deployment: the task is poorly defined, the environment is underestimated, or the integration burden is ignored. We begin with operational evidence and design the smallest pilot that can prove business value.</p></div>
      <div className="grid3">{services.map(([n,t,d])=><article className="card" key={t}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section id="markets" className="section dark">
      <div className="shell"><div className="section-head"><div><p className="eyebrow">Initial use cases</p><h2>Structured environments. Measurable outcomes.</h2></div><p className="section-copy">We are deliberately focused. Early deployments should be bounded, observable and safe enough to produce reliable operating data—not just an impressive demonstration.</p></div><div className="grid3">{markets.map(([t,d],i)=><article className="card" key={t}><span className="num">0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div>
    </section>

    <section className="section shell">
      <div className="section-head"><div><p className="eyebrow">Deployment method</p><h2>Five steps from interest to operation.</h2></div><p className="section-copy">A disciplined sequence protects both the customer and the manufacturer. Every stage has explicit evidence, responsibilities and a decision gate.</p></div>
      <div className="process">{[["01","Assess","Map tasks, economics and risk."],["02","Select","Choose the right form factor and vendor."],["03","Pilot","Prove performance in a bounded scope."],["04","Integrate","Connect systems, people and controls."],["05","Operate","Monitor, support and improve."]].map(([n,t,d])=><div className="step" key={t}><span className="num">{n}</span><strong>{t}</strong><span>{d}</span></div>)}</div>
    </section>

    <section id="partners" className="section shell">
      <div className="section-head"><div><p className="eyebrow">For manufacturers</p><h2>A practical bridge into Canada.</h2></div><p className="section-copy">We support market validation, local use-case discovery, pilot recruitment, bilingual business development, deployment coordination and the creation of credible Canadian reference cases.</p></div>
      <div className="grid3"><article className="card"><span className="num">Phase 01</span><h3>Market validation</h3><p>Test positioning, identify target accounts and surface local compliance or service barriers.</p></article><article className="card"><span className="num">Phase 02</span><h3>Pilot partnership</h3><p>Match qualified design partners with the right product and coordinate a measurable trial.</p></article><article className="card"><span className="num">Phase 03</span><h3>Local deployment</h3><p>Develop the integration, support and operating model required for repeatable Canadian growth.</p></article></div>
    </section>

    <section id="about" className="section shell founder">
      <div><p className="eyebrow">Founder-led</p><h2>Canada-based. Asia-connected. Business-first.</h2><p className="section-copy">FlyPig AI is led by M.K. Hsu, an entrepreneur working across Canada and Taiwan in AI automation, e-commerce, digital products and cross-border market development. The founder profile remains on the independent personal site, preserving a clear distinction between personal thought leadership and FlyPig AI’s commercial work.</p><div className="actions"><a className="pill secondary" href="https://mkhsu.icareu.tw/" target="_blank" rel="noreferrer">Founder profile ↗</a></div></div>
      <div className="founder-card"><span className="mono">Founder & Physical AI Deployment Strategist</span><h3>M.K. Hsu</h3><p>From digital agents to physical operations.</p></div>
    </section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Build the first credible pilot</p><h2>Bring us a task—not a robot wish list.</h2></div><div className="actions"><a className="pill primary" href="mailto:hello@flypigai.ca">Discuss a deployment</a></div></div></section>
    <footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>AI systems · Agentic automation · Physical AI deployment</span></footer>
  </main>
}
