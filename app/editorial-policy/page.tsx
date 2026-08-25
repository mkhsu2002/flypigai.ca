import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { siteIdentity } from "../../lib/site";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "Editorial, Sourcing & Corrections Policy",
  description: "How FlyPig AI selects sources, separates facts from interpretation, handles AI-assisted editorial work, corrects articles and verifies image rights.",
  path: "/editorial-policy",
  enPath: "/editorial-policy",
});

const standards = [
  ["Primary sources first", "Product pages, company announcements, technical documentation, regulatory records and other direct sources take priority. Secondary reporting may add context but does not replace primary evidence for product claims."],
  ["Facts and interpretation stay distinct", "Specifications and announced availability are attributed to their source. FlyPig AI interpretation explains possible design or Canada-market implications and preserves uncertainty where evidence is incomplete."],
  ["Independent relationship disclosure", "Coverage does not mean FlyPig AI is an authorized distributor, representative or partner. Any future commercial relationship relevant to a page will be disclosed where it affects reader interpretation."],
  ["AI-assisted, human responsibility", "AI-assisted tools may help organize public source material, compare terminology and prepare structured drafts. FlyPig AI remains responsible for the published page, its citations, corrections and compliance with this policy."],
  ["Rights-safe media", "A factual source is not automatically an image license. FlyPig AI uses owned editorial graphics, explicitly licensed media or approved press assets with separate repository evidence."],
  ["Corrections and updates", "Material factual corrections are recorded on the article. Meaningful updates receive an updated date; cosmetic changes do not. Readers can report an issue to the public editorial email."],
];

export default function EditorialPolicyPage() {
  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Editorial policy", path: "/editorial-policy" }])} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": `${siteUrl}/editorial-policy#policy`, name: "FlyPig AI Editorial Policy", publisher: { "@id": `${siteUrl}/#organization` }, dateModified: "2026-08-25", inLanguage: "en-CA" }} />
    <SiteHeader />
    <section className="hero shell"><p className="eyebrow">Editorial policy</p><h1>Source first. Interpret carefully. Correct visibly.</h1><p className="lead">FlyPig AI publishes independent Canada-Taiwan Edge AI and Physical AI intelligence. This policy explains the boundary between confirmed facts, editorial interpretation, commercial relationships and media rights.</p></section>
    <section className="section shell"><div className="grid3">{standards.map(([title, body], index) => <article className="card" key={title}><span className="num">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Report an issue</p><h2>Corrections are part of the public record.</h2></div><p className="section-copy">Send the page URL, disputed statement and supporting primary source to <a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a>. FlyPig AI will review the evidence and record material corrections on the affected article.</p></div></div></section>
    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Responsibility</p><h2>{siteIdentity.brandName}</h2></div><p className="section-copy">Operated by {siteIdentity.legalName}. Editorial responsibility remains with FlyPig AI; supplier announcements and cited sources remain the responsibility of their respective publishers.</p></div></section>
    <SiteFooter />
  </main>;
}
