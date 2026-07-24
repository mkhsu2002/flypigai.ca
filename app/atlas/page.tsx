import type { Metadata } from "next";
import "./atlas.css";
import { atlasCategories } from "./data";

export const metadata: Metadata = {
  title: "Canada Physical AI Atlas | FlyPig AI",
  description: "A curated map of Canada's robotics, drones, autonomous systems, integrators, enabling technologies, research institutions and industrial adopters.",
};

export default function AtlasPage() {
  return <main>
    <header className="shell nav">
      <a className="brand" href="/"><span className="mark">FP</span><span>FlyPig AI</span></a>
      <nav className="navlinks"><a href="/atlas">Atlas</a><a href="/#capabilities">Capabilities</a><a href="/insights">Insights</a><a href="/zh/atlas">繁中</a></nav>
      <a className="pill secondary" href="/contact">Contact us</a>
    </header>
    <section className="atlas-hero shell"><p className="eyebrow">Canada robotics ecosystem</p><h1>Canada Physical AI Atlas</h1><p className="lead">A living map of Canada's robotics, drones, autonomous systems, enabling technologies, integration partners, research institutions and industrial demand.</p><div className="atlas-stats"><div><strong>{atlasCategories.length}</strong><span>ecosystem categories</span></div><div><strong>{atlasCategories.reduce((sum, category) => sum + category.companies.length, 0)}</strong><span>organizations profiled</span></div><div><strong>Canada</strong><span>national market focus</span></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Explore the ecosystem</p><h2>From enabling technology to real-world deployment.</h2></div><p className="section-copy">The Atlas organizes the market by the role each organization plays: technology creation, platform manufacturing, systems integration, research and industrial adoption. Each category begins with six representative organizations and will expand over time.</p></div><div className="atlas-category-grid">{atlasCategories.map((category, index) => <a className="atlas-category-card" href={`/atlas/${category.slug}`} key={category.slug}><span className="num">{String(index + 1).padStart(2, "0")} · {category.layer}</span><h3>{category.title}</h3><p>{category.summary}</p><div className="atlas-company-list">{category.companies.map(company => <span key={company.name}>{company.name}</span>)}</div><strong>Explore category →</strong></a>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">How to use the Atlas</p><h2>A market map for both sides of the ecosystem.</h2></div><p className="section-copy">Global suppliers can use it to understand Canada's route to market. Canadian organizations can use it to discover domestic capability and identify gaps where international technologies may fit.</p></div><div className="grid3"><article className="card"><span className="num">01</span><h3>Find market channels</h3><p>Identify integrators, research partners and operators relevant to a technology or application.</p></article><article className="card"><span className="num">02</span><h3>Understand the stack</h3><p>See how components, platforms, software, integration and industrial demand connect.</p></article><article className="card"><span className="num">03</span><h3>Develop opportunities</h3><p>Use the map as a starting point for supplier qualification, introductions and pilot development.</p></article></div></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Contribute or connect</p><h2>Should your organization be included in the Atlas?</h2></div><div className="actions"><a className="pill primary" href="/contact">Contact us</a></div></div></section><footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>Canada Physical AI Atlas</span></footer>
  </main>;
}
