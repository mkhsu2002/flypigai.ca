import type { Metadata } from "next";
import "../atlas.css";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";

export const metadata: Metadata = { title: "Submit an Organization | Canada Physical AI Atlas", description: "Suggest a Canadian robotics, drone, automation, research or industry organization for editorial review in the Atlas." };

export default function SubmitAtlasPage() {
  return <main>
    <SiteHeader languageHref="/zh/atlas/submit" />
    <section className="atlas-hero shell"><p className="eyebrow">Community submission</p><h1>Submit an Organization</h1><p className="lead">Suggest a company, research institution, integrator, industry operator or ecosystem organization for editorial review in the Canada Physical AI Atlas.</p><div className="atlas-note">Submission does not guarantee inclusion. Each recommendation is reviewed for relevance, source quality, Canadian activity and fit with the Atlas scope.</div></section>
    <section className="section shell"><div className="grid3"><article className="card"><span className="num">01</span><h3>New listing</h3><p>Recommend a Canadian organization active in robotics, drones, autonomous systems, industrial AI or an enabling technology.</p></article><article className="card"><span className="num">02</span><h3>Information update</h3><p>Provide a correction, updated website, location, technology focus or source supporting a material change.</p></article><article className="card"><span className="num">03</span><h3>Research contribution</h3><p>Suggest a public resource, case study, regional map or research collaboration relevant to the ecosystem.</p></article></div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">What to include</p><h2>Provide enough information for an editorial review.</h2></div><p className="section-copy">Please include the organization name, official website, Canadian location or activity, relevant technology or industry role, and a brief explanation of why it belongs in the Atlas. Identify whether you represent the organization and disclose any commercial relationship with FlyPig AI.</p></div></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Submission form</p><h2>Send the organization details through the FlyPig AI contact form.</h2></div><div className="actions"><a className="pill primary" href="/contact">Open contact form</a><a className="pill secondary" href="/atlas/methodology">Review methodology</a></div></div></section>
    <SiteFooter />
  </main>;
}