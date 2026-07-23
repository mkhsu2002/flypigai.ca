import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact FlyPig AI",
  description: "Tell FlyPig AI about your robotics, drone, component sourcing or Canadian market development needs.",
};

export default function ContactPage() {
  return <main>
    <header className="shell nav">
      <a className="brand" href="/"><span className="mark">FP</span><span>FlyPig AI</span></a>
      <nav className="navlinks"><a href="/">Home</a><a href="/insights">Insights</a><a href="/zh/contact" className="lang-link">繁中</a></nav>
      <a className="pill secondary" href="/zh/contact">繁中</a>
    </header>

    <section className="contact-hero shell">
      <p className="eyebrow">Contact FlyPig AI</p>
      <h1>Tell us what you are trying to build, source or bring to market.</h1>
      <p className="lead">This questionnaire helps us understand whether you are a global technology supplier exploring Canada or a Canadian organization seeking qualified robotics and drone technologies.</p>
    </section>

    <section className="contact-layout shell">
      <aside className="contact-aside">
        <p className="eyebrow">Who this is for</p>
        <h2>Two sides of the same opportunity.</h2>
        <div className="contact-note"><strong>Global suppliers</strong><span>Market validation, partner discovery, pilot development and ongoing Canadian business development.</span></div>
        <div className="contact-note"><strong>Canadian organizations</strong><span>Technology discovery, supplier qualification, technical clarification and cross-border partnership support.</span></div>
        <p className="small-copy">We normally respond within two business days. Please do not include confidential technical information at this stage.</p>
      </aside>
      <ContactForm locale="en" />
    </section>

    <footer className="shell footer"><span>© 2026 FlyPig AI · Vancouver, Canada</span><span>Robotics · Drones · Autonomous systems · Market development</span></footer>
  </main>;
}
