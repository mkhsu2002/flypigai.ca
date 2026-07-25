import type { Metadata } from "next";
import "../atlas.css";

export const metadata: Metadata = { title: "Atlas Methodology | FlyPig AI", description: "How organizations are selected, categorized and maintained in the Canada Physical AI Atlas." };

export default function MethodologyPage() {
  const principles = [
    ["Scope", "Organizations must have meaningful Canadian operations, research activity, deployment capability or market relevance in robotics, drones, autonomy or enabling technologies."],
    ["Representative selection", "Early category pages feature a small editorial selection intended to illustrate the ecosystem. Inclusion is not a ranking, endorsement or completeness claim."],
    ["Classification", "Organizations may appear in more than one future view because the Atlas can be browsed by ecosystem role, technology, industry and location."],
    ["Sources", "Profiles are developed from official company websites, public institutional information, government records and other identifiable sources."],
    ["Updates", "The Atlas is designed as a living resource. Categories, descriptions and organization status will be reviewed and expanded over time."],
    ["Corrections", "Organizations may request corrections, provide updated information or suggest an additional listing through the submission page."]
  ];
  return <main>
    <header className="shell nav"><a className="brand" href="/"><span className="mark">FP</span><span>FlyPig AI</span></a><nav className="navlinks"><a href="/atlas">Atlas</a><a href="/atlas/technologies">Technologies</a><a href="/atlas/industries">Industries</a><a href="/zh/atlas/methodology">繁中</a></nav><a className="pill secondary" href="/atlas/submit">Submit a listing</a></header>
    <section className="atlas-hero shell"><p className="eyebrow">Editorial standards</p><h1>Atlas Methodology</h1><p className="lead">How the Canada Physical AI Atlas selects, organizes and maintains information about the ecosystem.</p></section>
    <section className="section shell"><div className="grid3">{principles.map(([title, body], index) => <article className="card" key={title}><span className="num">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Corrections and additions</p><h2>Help keep the Atlas accurate and useful.</h2></div><div className="actions"><a className="pill primary" href="/atlas/submit">Submit information</a></div></div></section>
    <footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>Canada Physical AI Atlas</span></footer>
  </main>;
}
