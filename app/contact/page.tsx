import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { formattedAddress, siteIdentity } from "../../lib/site";
import { makeMetadata } from "../seo";

export const metadata: Metadata = makeMetadata({
  title: "Contact FlyPig AI",
  description: "Contact FlyPig AI about a Canadian product requirement, Taiwan Edge AI technology signal, Atlas correction or independent research inquiry.",
  path: "/contact",
  enPath: "/contact",
  zhPath: "/zh/contact",
});

export default function ContactPage() {
  return <main>
    <SiteHeader languageHref="/zh/contact" />
    <section className="contact-hero shell">
      <p className="eyebrow">Contact FlyPig AI</p>
      <h1>Tell us what you are building or researching.</h1>
      <p className="lead">Use this form for a Canadian product requirement, a Taiwan technology signal, an Atlas correction or a focused opportunity inquiry. Public coverage does not imply an existing supplier relationship.</p>
    </section>
    <section className="contact-layout shell">
      <aside className="contact-aside">
        <p className="eyebrow">Who this is for</p>
        <h2>Two sides of the same market.</h2>
        <div className="contact-note"><strong>Taiwan technology companies</strong><span>Share public product sources, capabilities, application evidence and Canada-relevant solution context.</span></div>
        <div className="contact-note"><strong>Canadian organizations</strong><span>Share a product need, deployment constraint or technology question that requires a clearer Taiwan solution route.</span></div>
        <div className="contact-note"><strong>Atlas submissions</strong><span>Corrections and listing suggestions are reviewed editorially and do not guarantee inclusion.</span></div>
        <div className="contact-note"><strong>Operated by {siteIdentity.legalName}</strong><span>{formattedAddress()}<br /><a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a></span></div>
        <p className="small-copy">Please do not include confidential technical, pricing, BOM or customer information at this stage.</p>
      </aside>
      <ContactForm locale="en" />
    </section>
    <SiteFooter />
  </main>;
}
