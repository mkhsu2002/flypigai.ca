import type { Metadata } from "next";
import "../atlas.css";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";

export const metadata: Metadata = { title: "Atlas Methodology | FlyPig AI", description: "How organizations are selected, categorized, sourced, disclosed and maintained in the Canada Physical AI Atlas." };

export default function MethodologyPage() {
  const principles = [
    ["Scope", "Organizations must have meaningful Canadian operations, research activity, deployment capability or market relevance in robotics, drones, autonomy or enabling technologies."],
    ["Representative selection", "Early category pages feature a limited editorial selection intended to illustrate the ecosystem. Inclusion is not a ranking, endorsement or completeness claim."],
    ["Classification", "Organizations may appear in more than one view because the Atlas can be browsed by ecosystem role, technology, industry and location."],
    ["Sources", "Profiles are developed from official company websites, public institutional information, government records and other identifiable sources. Material claims should remain traceable."],
    ["Editorial treatment", "Descriptions are written or summarized by FlyPig AI rather than copied from third-party databases. Promotional language is avoided where a neutral factual description is possible."],
    ["Updates and corrections", "The Atlas is a living resource. Categories, descriptions and organization status will be reviewed, expanded and corrected over time."],
  ];
  return <main>
    <SiteHeader languageHref="/zh/atlas/methodology" />
    <section className="atlas-hero shell"><p className="eyebrow">Editorial standards</p><h1>Atlas Methodology</h1><p className="lead">How the Canada Physical AI Atlas selects, organizes, discloses and maintains ecosystem information.</p><div className="atlas-note">The Atlas is a FlyPig AI market-research initiative. It is not an official government directory, accreditation program or investment recommendation.</div></section>
    <section className="section shell"><div className="grid3">{principles.map(([title, body], index) => <article className="card" key={title}><span className="num">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Commercial relationship disclosure</p><h2>Research and commercial services are separately disclosed.</h2></div><p className="section-copy">FlyPig AI provides market-development, sourcing, representation and commercialization services. Organizations listed in the Atlas may be current, former or prospective clients or partners. A commercial relationship does not automatically determine inclusion or editorial treatment. Sponsored or formally represented profiles should be clearly labelled.</p></div></div></section>
    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">Corrections and additions</p><h2>Help keep the Atlas accurate and useful.</h2></div><div className="actions"><a className="pill primary" href="/atlas/submit">Submit information</a></div></div></section>
    <SiteFooter />
  </main>;
}