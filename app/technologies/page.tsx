import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { breadcrumbJsonLd, makeMetadata } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "Technology Intelligence | Taiwan Edge AI & Physical AI",
  description: "Independent intelligence on Taiwan semiconductors, Edge AI, embedded computing, machine vision, sensing, robotics and Physical AI technologies for Canadian product teams.",
  path: "/technologies",
  enPath: "/technologies",
});

const topics = [
  ["Edge AI processors", "AI SoCs, accelerators and compute platforms for local inference."],
  ["Embedded computing", "SOM, SBC, IPC and rugged compute platforms."],
  ["Machine vision", "Camera modules, image processing, low-light and industrial vision."],
  ["Sensors", "Presence, motion, environmental and autonomous-system sensing."],
  ["Connectivity", "Wi-Fi, BLE, cellular, GNSS and industrial communications."],
  ["Robotics hardware", "Controllers, motion, perception and system-level building blocks."],
];

export default function TechnologiesPage() {
  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Technology Intelligence", path: "/technologies" }])} />
    <SiteHeader />
    <section className="hero"><div className="shell"><p className="eyebrow">Technology Intelligence</p><h1>Understand Taiwan technology before you choose a supplier.</h1><p className="lead">FlyPig is building structured, source-based intelligence around Taiwan's Edge AI and Physical AI stack. The aim is to explain what technologies are good at, where they fit and what trade-offs matter in real Canadian product contexts.</p></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Initial coverage</p><h2>Research organized around design decisions.</h2></div><p className="section-copy">The first phase prioritizes technologies that influence architecture in robotics, drones, industrial AI, machine vision and intelligent devices.</p></div><div className="grid3">{topics.map(([title,desc],index)=><article className="card" key={title}><span className="num">{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">How we publish</p><h2>Capability first, promotion second.</h2></div><p className="section-copy">Technology pages are intended to become useful decision references rather than copied product brochures.</p></div><div className="grid3"><article className="card"><h3>What it does</h3><p>Clear capability summary, key specifications, platform maturity and development environment.</p></article><article className="card"><h3>Where it fits</h3><p>Concrete applications, system constraints and design contexts where the technology is relevant.</p></article><article className="card"><h3>What to compare</h3><p>Power, performance, interfaces, software, production readiness, certification and alternative routes.</p></article></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Current public research</p><h2>Start with ecosystem context.</h2></div><p className="section-copy">FlyPig's existing Canada Physical AI Atlas and Intelligence articles provide the first public nodes in the broader Canada-Taiwan design intelligence graph.</p></div><div className="actions"><a className="pill secondary" href="/atlas">Canada Physical AI Atlas</a><a className="pill secondary" href="/insights">Read Intelligence</a></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Contribute technology data</p><h2>Represent a Taiwan technology company?</h2></div><div className="actions"><a className="pill primary" href="/taiwan">See how to participate</a></div></div></section>
    <SiteFooter />
  </main>;
}
