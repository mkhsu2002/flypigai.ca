import type { Metadata } from "next";
import JsonLd from "../../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../../seo";
import { physicalAiSeries, seriesDate, seriesPath, seriesTitle } from "./series";

export const metadata: Metadata = makeMetadata({
  title: `${seriesTitle}: The Coming Android Moment of Robotics`,
  description: "A six-part FlyPig AI research series on modular robot hardware, Physical AI operating systems, edge compute, robot skills and where value moves as robotics standardizes.",
  path: seriesPath,
  enPath: seriesPath,
});

export default function PhysicalAiModularizationHub() {
  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: seriesTitle, path: seriesPath }])} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: seriesTitle, description: "Research on the modularization of Physical AI and robotics.", url: `${siteUrl}${seriesPath}`, dateModified: seriesDate, hasPart: physicalAiSeries.map((article) => ({ "@type": "Article", name: article.title, url: `${siteUrl}${seriesPath}/${article.slug}` })) }} />
    <SiteHeader />
    <section className="hero insights-hero"><div className="shell hero-grid"><div>
      <p className="eyebrow">FlyPig AI Research Series · Physical AI</p>
      <h1>Physical AI Goes Modular.</h1>
      <p className="lead">Will robotics have an Android moment? This series examines what happens when robot bodies, edge compute, middleware and AI capabilities become reusable building blocks—and where defensible value moves next.</p>
      <div className="actions"><a className="pill primary" href={`${seriesPath}/${physicalAiSeries[0].slug}`}>Start the series</a><a className="pill secondary" href="/technologies">Explore Technology Intelligence</a></div>
    </div><aside className="signal-card"><p className="eyebrow">Working thesis</p><div className="signal-line"><span>01</span><strong>Hardware becomes more modular</strong></div><div className="signal-line"><span>02</span><strong>Common software abstractions emerge</strong></div><div className="signal-line"><span>03</span><strong>Robot skills become reusable</strong></div><div className="signal-line"><span>04</span><strong>Value moves toward applications</strong></div></aside></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">The question</p><h2>From reference phones to reference robots.</h2></div><p className="section-copy">The smartphone analogy is useful only if we test where it breaks. Robots face heterogeneous bodies, safety constraints and physical environments. The series therefore treats modularization as a hypothesis, not an inevitability.</p></div></section>

    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Six-part series</p><h2>The stack, from body to application.</h2></div><p className="section-copy">Each essay isolates one layer of the emerging Physical AI value chain and asks what becomes standardized, what remains difficult and where new businesses can form.</p></div><div className="grid3">{physicalAiSeries.map((article) => <a className="card" href={`${seriesPath}/${article.slug}`} key={article.slug}><span className="num">{article.number}</span><h3>{article.title}</h3><p>{article.description}</p><strong>Read essay →</strong></a>)}</div></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Value-chain lens</p><h2>Model → Runtime → Compute → Body → Skills → Agent → Application</h2></div><p className="section-copy">FlyPig AI is interested in the interfaces between these layers: how product requirements become architecture decisions, how reusable capabilities reduce integration burden, and how Taiwan's hardware ecosystem can connect to Canadian deployment contexts.</p></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Research context</p><h2>Connect the series to real Physical AI architectures and deployment requirements.</h2></div><div className="actions"><a className="pill primary" href="/technologies">Technology Intelligence</a><a className="pill secondary" href="/atlas">Canada Atlas</a></div></div></section>
    <SiteFooter />
  </main>;
}
