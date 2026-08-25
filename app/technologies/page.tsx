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
    <section className="hero"><div className="shell"><p className="eyebrow">Technology Intelligence · Evergreen taxonomy</p><h1>Understand the technology before choosing a route.</h1><p className="lead">This hub owns the stable taxonomy behind FlyPig AI&apos;s research: what technologies do, where they fit and which trade-offs matter in Canadian product contexts. Current announcements belong in Industry Signals; researched Taiwan solution paths belong in Taiwan Solutions.</p><div className="actions"><a className="pill primary" href="/Solutions">Taiwan Solutions</a><a className="pill secondary" href="/signals">Current Industry Signals</a></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Initial coverage</p><h2>Research organized around design decisions.</h2></div><p className="section-copy">The first phase prioritizes technologies that influence architecture in robotics, drones, industrial AI, machine vision and intelligent devices.</p></div><div className="grid3">{topics.map(([title,desc],index)=><article className="card" key={title}><span className="num">{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">How we publish</p><h2>Capability first, promotion second.</h2></div><p className="section-copy">Technology pages are intended to become useful decision references rather than copied product brochures.</p></div><div className="grid3"><article className="card"><h3>What it does</h3><p>Clear capability summary, key specifications, platform maturity and development environment.</p></article><article className="card"><h3>Where it fits</h3><p>Concrete applications, system constraints and design contexts where the technology is relevant.</p></article><article className="card"><h3>What to compare</h3><p>Power, performance, interfaces, software, production readiness, certification and alternative routes.</p></article></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Current public research</p><h2>Connect technology to ecosystem context.</h2></div><p className="section-copy">The Canada Atlas maps operators and capability; Taiwan Solutions organizes supply-side routes; Industry Signals records current evidence; Insights provides long-lived analysis.</p></div><div className="actions"><a className="pill secondary" href="/atlas">Canada Atlas</a><a className="pill secondary" href="/Solutions">Taiwan Solutions</a><a className="pill secondary" href="/signals">Industry Signals</a><a className="pill secondary" href="/insights">Insights</a></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Contribute a public source</p><h2>Have a Taiwan technology we should research?</h2></div><div className="actions"><a className="pill primary" href="/Solutions">Read the Solutions scope</a><a className="pill secondary" href="/contact">Share a source</a></div></div></section>
    <SiteFooter />
  </main>;
}
