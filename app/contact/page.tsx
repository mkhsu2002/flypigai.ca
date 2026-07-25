import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact FlyPig AI",
  description: "Tell FlyPig AI about your robotics, drone, component sourcing or Canadian market-development needs.",
};

export default function ContactPage() {
  return <main>
    <SiteHeader languageHref="/zh/contact" />
    <section className="contact-hero shell">
      <p className="eyebrow">Contact FlyPig AI</p>
      <h1>Tell us what you are trying to sell, source or deploy.</h1>
      <p className="lead">This questionnaire helps us determine whether FlyPig AI is a suitable commercial partner for your Canadian market-development, technology-sourcing or deployment opportunity.</p>
    </section>
    <section className="contact-layout shell">
      <aside className="contact-aside">
        <p className="eyebrow">Who this is for</p>
        <h2>Two sides of the same market.</h2>
        <div className="contact-note"><strong>Global suppliers</strong><span>Market validation, partner development, local representation, pilot development and Canadian commercialization.</span></div>
        <div className="contact-note"><strong>Canadian organizations</strong><span>Technology discovery, supplier qualification, technical clarification and cross-border partnership support.</span></div>
        <div className="contact-note"><strong>Atlas submissions</strong><span>Corrections and listing suggestions are reviewed editorially and do not guarantee inclusion.</span></div>
        <p className="small-copy">We normally respond within two business days. Please do not include confidential technical information at this stage.</p>
      </aside>
      <ContactForm locale="en" />
    </section>
    <SiteFooter />
  </main>;
}