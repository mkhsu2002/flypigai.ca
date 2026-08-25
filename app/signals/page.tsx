import type { Metadata } from "next";
import NewsletterSignup from "../../components/NewsletterSignup";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { getIndustrySignals } from "../../lib/industrySignals";
import { makeMetadata } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "Taiwan Edge AI Industry Signals",
  description: "Independent English-language coverage of new Taiwan Edge AI, semiconductor, embedded-computing and Physical AI product developments.",
  path: "/signals",
  enPath: "/signals",
});

export default function SignalsPage() {
  const signals = getIndustrySignals();
  const featured = signals[0];

  return <main>
    <SiteHeader languageHref="/zh" />
    <section className="hero insights-hero"><div className="shell hero-grid"><div>
      <p className="eyebrow">Taiwan Industry Signals · FlyPig AI</p>
      <h1>What changed in Taiwan’s Edge AI ecosystem?</h1>
      <p className="lead">A continuously maintained English-language desk covering new chips, modules, embedded platforms, robotics technologies and commercialization signals from Taiwan. We translate product announcements into the design and market implications that North American teams need to understand.</p>
      <div className="actions"><a className="pill primary" href={featured ? `/signals/${featured.slug}` : "#latest"}>Read latest signal</a><a className="pill secondary" href="/technologies">Technology Intelligence</a></div>
    </div><aside className="signal-card"><p className="eyebrow">Editorial standard</p><div className="signal-line"><span>Source</span><strong>Official first</strong></div><div className="signal-line"><span>Language</span><strong>English reporting</strong></div><div className="signal-line"><span>Lens</span><strong>Design + commercial relevance</strong></div><div className="signal-line"><span>Disclosure</span><strong>Source linked on every article</strong></div></aside></div></section>

    <section className="section shell" id="latest"><div className="section-head"><div><p className="eyebrow">Latest</p><h2>New product and ecosystem developments.</h2></div><p className="section-copy">These reports originate from FlyPig AI’s Taiwan technology monitoring workflow. We do not reproduce vendor press releases; each item is rewritten and analyzed from an independent industry-intelligence perspective.</p></div>
      <div className="grid3">{signals.map((signal) => <a className="card" href={`/signals/${signal.slug}`} key={signal.eventId}><span className="num">{signal.publishedAt} · {signal.supplier}</span><h3>{signal.title}</h3><p>{signal.dek}</p><strong>Read signal →</strong></a>)}</div>
    </section>

    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Why this desk exists</p><h2>Product news becomes useful only when it changes a design decision.</h2></div><p className="section-copy">FlyPig tracks Taiwan technology events not as a newswire, but as inputs to a larger design-intelligence graph: capabilities, applications, design routes, availability and potential Canada-facing opportunities.</p></div></div></section>

    <section className="cta shell"><div className="cta-box newsletter-cta"><div><p className="eyebrow">FlyPig Industry Signals</p><h2>Get the highest-signal Taiwan technology updates.</h2></div><NewsletterSignup /></div></section>
    <SiteFooter />
  </main>;
}
