import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "For Taiwan Companies | Bring Edge AI & Physical AI Technology to Canada",
  description: "FlyPig AI helps Taiwan semiconductor, Edge AI, embedded computing and Physical AI companies understand Canadian applications and develop qualified opportunities.",
  path: "/taiwan",
  enPath: "/taiwan",
});

const partnerTypes = ["IC & AI accelerator", "SOM / SBC / IPC", "Camera & machine vision", "Sensors", "Connectivity", "Robotics components", "Power & motor control", "ODM / EMS"];

export default function TaiwanPage() {
  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "For Taiwan", path: "/taiwan" }])} />
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Taiwan Technology Market Intelligence for Canada",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: ["Taiwan", "Canada"],
      serviceType: "Application mapping and qualified opportunity development",
      description: metadata.description,
    }} />
    <SiteHeader />
    <section className="hero"><div className="shell"><p className="eyebrow">For Taiwan technology companies</p><h1>Bring your technology to Canadian applications.</h1><p className="lead">FlyPig helps Taiwan technology companies translate product capabilities into relevant Canadian use cases, target accounts and qualified technical conversations. The goal is not generic promotion, but better application fit and earlier design-in visibility.</p><div className="actions"><a className="pill primary" href="/contact">Submit your technology</a><a className="pill secondary" href="/atlas">Explore the Canada Physical AI Atlas</a></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Who we want to learn from</p><h2>Technology companies across the Edge AI and Physical AI stack.</h2></div><p className="section-copy">Phase 1 is research-led and selective. We are building structured capability intelligence before opening a broad supplier directory.</p></div><div className="grid3">{partnerTypes.map((item,index)=><article className="card" key={item}><span className="num">{String(index+1).padStart(2,"0")}</span><h3>{item}</h3></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">What FlyPig maps</p><h2>From product specifications to application fit.</h2></div><p className="section-copy">A useful technology profile goes beyond a brochure. We want to understand what the product does, where it fits, how mature it is and what type of Canadian project should consider it.</p></div><div className="grid3"><article className="card"><h3>Capability</h3><p>Performance, power, interfaces, software, SDK, environmental range, certification and production status.</p></article><article className="card"><h3>Application fit</h3><p>Robotics, drones, machine vision, industrial AI, smart devices and other concrete use cases.</p></article><article className="card"><h3>Commercial readiness</h3><p>Dev kits, samples, MOQ, target volumes, North American channel status and preferred collaboration model.</p></article></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Why participate early</p><h2>Help shape the first Taiwan technology graph.</h2></div><p className="section-copy">Early participating companies can help FlyPig understand real product capabilities and application boundaries. Public profiles will only be created from information approved for publication; non-public commercial and technical data stays private.</p></div><div className="grid3"><article className="card"><span className="num">Visibility</span><h3>Structured public intelligence</h3><p>When appropriate, approved company and technology information can become searchable, citation-friendly public pages.</p></article><article className="card"><span className="num">Discovery</span><h3>Application-led exposure</h3><p>Instead of listing products generically, FlyPig connects capabilities to specific Canadian product and industry contexts.</p></article><article className="card"><span className="num">Opportunity</span><h3>Qualified technical introductions</h3><p>As Canadian project intake grows, matching can move from research to relevant design-in and R&D conversations.</p></article></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Taiwan technology</p><h2>Tell us what your technology is best at.</h2></div><div className="actions"><a className="pill primary" href="/contact">Start a supplier conversation</a></div></div></section>
    <SiteFooter />
  </main>;
}
