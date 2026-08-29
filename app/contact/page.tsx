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
      <p className="lead">Use this form to qualify a Taiwan technology route for a Canadian product, assess Canada design-in readiness for a Taiwan capability, submit an Atlas correction or ask a focused editorial question. Public coverage does not imply an existing supplier relationship.</p>
    </section>
    <section className="contact-layout shell">
      <aside className="contact-aside">
        <p className="eyebrow">Who this is for</p>
        <h2>Two sides of the same market.</h2>
        <div className="contact-note"><strong>Taiwan technology companies</strong><span>Share public product sources, application evidence and the Canadian design-in question you want to test.</span></div>
        <div className="contact-note"><strong>Canadian product teams</strong><span>Share product intent, operating constraints and the Edge AI, embedded, vision or sensing route that remains open.</span></div>
        <div className="contact-note"><strong>Atlas submissions</strong><span>Corrections and listing suggestions are reviewed editorially and do not guarantee inclusion.</span></div>
        <div className="contact-note"><strong>Operated by {siteIdentity.legalName}</strong><span>{formattedAddress()}<br /><a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a></span></div>
        <p className="small-copy">Please do not include confidential technical, pricing, BOM or customer information at this stage.</p>
      </aside>
      <ContactForm locale="en" />
    </section>
    <SiteFooter />
  </main>;
}
