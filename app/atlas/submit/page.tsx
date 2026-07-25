import type { Metadata } from "next";
import "../atlas.css";

export const metadata: Metadata = { title: "Submit an Organization | Canada Physical AI Atlas", description: "Suggest a Canadian robotics, drone, automation, research or industry organization for the Atlas." };

export default function SubmitAtlasPage() {
  return <main>
    <header className="shell nav"><a className="brand" href="/"><span className="mark">FP</span><span>FlyPig AI</span></a><nav className="navlinks"><a href="/atlas">Atlas</a><a href="/atlas/methodology">Methodology</a><a href="/zh/atlas/submit">繁中</a></nav><a className="pill secondary" href="/contact">Contact us</a></header>
    <section className="atlas-hero shell"><p className="eyebrow">Community submission</p><h1>Submit an Organization</h1><p className="lead">Suggest a company, research institution, integrator, industry operator or ecosystem organization for inclusion in the Canada Physical AI Atlas.</p></section>
    <section className="section shell"><div className="grid3"><article className="card"><span className="num">01</span><h3>New listing</h3><p>Recommend a Canadian organization that is active in robotics, drones, autonomous systems, industrial AI or an enabling technology.</p></article><article className="card"><span className="num">02</span><h3>Information update</h3><p>Provide a correction, new company description, updated website, location or technology focus.</p></article><article className="card"><span className="num">03</span><h3>Partnership inquiry</h3><p>Discuss a featured research contribution, market report, industry map or Canadian market-development project.</p></article></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Submission form</p><h2>Send the organization name, website and reason it should be included.</h2></div><div className="actions"><a className="pill primary" href="/contact">Open contact form</a></div></div></section>
    <footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>Canada Physical AI Atlas</span></footer>
  </main>;
}
