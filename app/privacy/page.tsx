import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { siteIdentity } from "../../lib/site";
import { makeMetadata } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "Privacy Notice",
  description: "How FlyPig AI handles contact form submissions, Atlas corrections and business inquiry information.",
  path: "/privacy",
  enPath: "/privacy",
});

export default function PrivacyPage() {
  return <main>
    <SiteHeader />
    <section className="hero shell">
      <p className="eyebrow">Privacy Notice</p>
      <h1>How FlyPig AI handles inquiry information.</h1>
      <p className="lead">This notice explains how FlyPig AI, operated by {siteIdentity.legalName}, handles information submitted through contact forms, newsletter forms, Atlas corrections and research or opportunity inquiries.</p>
    </section>
    <section className="section shell">
      <div className="grid3">
        <article className="card"><span className="num">01</span><h3>Information submitted</h3><p>We may receive names, organizations, email addresses, websites, technology areas, market goals and message details that you choose to submit.</p></article>
        <article className="card"><span className="num">02</span><h3>Use of information</h3><p>Submitted information is used to evaluate inquiries, respond to requests, review Atlas corrections and assess whether FlyPig AI can support a commercial opportunity.</p></article>
        <article className="card"><span className="num">03</span><h3>Confidentiality</h3><p>Please do not submit confidential technical, legal or commercial information through the initial form. Sensitive details should be shared only after an appropriate agreement is in place.</p></article>
      </div>
    </section>
    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Retention and correction</p><h2>Keep early inquiries practical and minimal.</h2></div><p className="section-copy">FlyPig AI keeps inquiry information only as long as needed for response, editorial review, consent records or legitimate relationship management. To request access, correction or deletion, email <a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a>.</p></div></div></section>
    <SiteFooter />
  </main>;
}
