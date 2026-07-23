const capabilities = [
  ["01", "Canadian market development", "We help robotics, drone and autonomy technology companies identify relevant sectors, accounts, partners and early commercial opportunities in Canada."],
  ["02", "Industry partnerships", "We connect manufacturers with Canadian integrators, distributors, operators, research organizations and qualified pilot customers."],
  ["03", "Technical-commercial translation", "We translate products, specifications, use cases and partnership models across language, business culture and operating context."],
  ["04", "Commercialization support", "We help move opportunities from first contact to technical evaluation, pilot discussion, channel development and longer-term market participation."],
];

const focusAreas = [
  "Robotics controllers and edge-computing modules",
  "Navigation, GNSS, LiDAR and machine-vision systems",
  "Motors, actuators, batteries and power systems",
  "Drone payloads, communications and autonomy components",
  "Quadruped, humanoid, UGV and UAV platforms",
  "OEM, ODM and technology-transfer opportunities",
];

export default function HomePage() {
  return <main>
    <header className="shell nav">
      <a className="brand" href="/"><span className="mark">FP</span><span>FlyPig AI</span></a>
      <nav className="navlinks"><a href="#capabilities">Capabilities</a><a href="#focus">Technology focus</a><a href="/insights">Insights</a><a href="#about">About</a><a href="/zh" className="lang-link">繁中</a></nav>
      <a className="pill secondary" href="/contact">Contact us</a>
    </header>

    <section className="hero home-hero">
      <div className="shell hero-grid home-hero-grid">
        <div className="home-hero-copy">
          <p className="eyebrow">Robotics · Drones · Autonomy · Canada</p>
          <h1>Advanced robotics technologies. Real market opportunity in Canada.</h1>
          <p className="lead">FlyPig AI supports market development, industry partnerships and commercialization for robotics, drone and critical-component companies entering Canada.</p>
          <div className="actions">
            <a className="pill primary" href="/contact">Explore the Canadian market</a>
            <a className="pill secondary" href="#capabilities">View capabilities</a>
            <a className="pill secondary" href="/insights">Read market insights</a>
          </div>
        </div>
        <aside className="signal-card home-signal-card">
          <p className="eyebrow">Market development focus</p>
          <div className="signal-line"><span>Market</span><strong>Canada</strong></div>
          <div className="signal-line"><span>Technology</span><strong>Robotics + autonomous systems</strong></div>
          <div className="signal-line"><span>Approach</span><strong>Technical + commercial</strong></div>
          <div className="signal-line"><span>Path</span><strong>Research → Partner → Pilot → Scale</strong></div>
        </aside>
      </div>
    </section>

    <div className="ticker">robotics components · drone systems · edge AI · autonomy · sensors · market development · industry partnerships · pilot opportunities</div>

    <section id="capabilities" className="section shell">
      <div className="section-head"><div><p className="eyebrow">What we do</p><h2>Market access requires more than a distributor list.</h2></div><p className="section-copy">Successful entry into Canada depends on market context, technical credibility, the right local relationships and sustained follow-through. FlyPig AI helps technology companies understand where they fit, who matters and what a realistic first commercial step should look like.</p></div>
      <div className="grid3">{capabilities.slice(0,3).map(([n,t,d])=><article className="card" key={t}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      <div className="grid3" style={{marginTop:18}}>
        <article className="card"><span className="num">04</span><h3>{capabilities[3][1]}</h3><p>{capabilities[3][2]}</p></article>
        <article className="card"><span className="num">Cross-market fluency</span><h3>Technology, business and culture.</h3><p>We combine Asian industry relationships and manufacturing know-how with Canadian market research, business development and local operating context.</p></article>
        <article className="card"><span className="num">Engagement model</span><h3>Focused, practical and evidence-based.</h3><p>Engagements can begin with market validation and partner discovery, then expand into opportunity development, pilot coordination or ongoing representation.</p></article>
      </div>
    </section>

    <section id="focus" className="section dark"><div className="shell">
      <div className="section-head"><div><p className="eyebrow">Technology focus</p><h2>Critical technologies behind Physical AI.</h2></div><p className="section-copy">Our interest extends beyond complete robots. We focus on the enabling technologies, subsystems and components that make autonomous machines commercially useful, integrable and supportable.</p></div>
      <div className="grid3">{focusAreas.map((item,i)=><article className="card" key={item}><span className="num">0{i+1}</span><h3>{item}</h3></article>)}</div>
    </div></section>

    <section className="section shell">
      <div className="section-head"><div><p className="eyebrow">For Canadian industry</p><h2>Qualified access to emerging robotics supply.</h2></div><p className="section-copy">Canadian integrators and operators often know what capability they need, but not which overseas supplier is credible, export-ready or technically suitable. FlyPig AI helps clarify requirements, identify relevant technologies and facilitate productive supplier conversations.</p></div>
      <div className="grid3">
        <article className="card"><span className="num">01</span><h3>Technology discovery</h3><p>Identify relevant component suppliers, platform companies and manufacturing capabilities across Asian robotics and drone ecosystems.</p></article>
        <article className="card"><span className="num">02</span><h3>Supplier qualification</h3><p>Clarify specifications, integration constraints, customization capability, readiness and commercial fit before deeper engagement.</p></article>
        <article className="card"><span className="num">03</span><h3>Partnership development</h3><p>Support introductions, technical discussions, pilot scoping and the early stages of a durable commercial relationship.</p></article>
      </div>
    </section>

    <section id="about" className="section shell founder">
      <div><p className="eyebrow">Founder-led</p><h2>Built on cross-border operating experience.</h2><p className="section-copy">FlyPig AI is led by M.K. Hsu, an entrepreneur working across Canada and Taiwan in AI automation, digital products, e-commerce and cross-border business development. This background supports a practical understanding of both Asian technology supply and Canadian market expectations.</p><div className="actions"><a className="pill secondary" href="https://mkhsu.icareu.tw/" target="_blank" rel="noreferrer">Founder profile ↗</a></div></div>
      <div className="founder-card"><span className="mono">Robotics Market Development · Canada</span><h3>M.K. Hsu</h3><p>Connecting technology capability with real market opportunity.</p></div>
    </section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Canadian market development</p><h2>Looking for the right first opportunity in Canada?</h2></div><div className="actions"><a className="pill primary" href="/contact">Contact us</a></div></div></section>
    <footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>Robotics · Drones · Autonomous systems · Market development</span></footer>
  </main>;
}
