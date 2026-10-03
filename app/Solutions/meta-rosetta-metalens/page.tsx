import type { Metadata } from "next";
import JsonLd from "../../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { absoluteUrl } from "../../../lib/site";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../../seo";

const path = "/Solutions/meta-rosetta-metalens";
const title = "MetaRosetta metalens technology: three optical routes to evaluate";
const description = "An independent look at MetaRosetta's visible, near-infrared and thermal metasurface work, with practical qualification questions for Canadian product teams.";
const image = "/images/solutions/meta-rosetta-metalens-codex-cover.webp";
const publishedAt = "2026-10-02";

const sources = [
  { name: "MetaRosetta — company and application overview", url: "https://www.meta-rosetta.com/article-ABOUT-US.html" },
  { name: "MetaRosetta — visible-light colour-splitter concept", url: "https://www.meta-rosetta.com/product-2.html" },
  { name: "MetaRosetta — near-infrared receiving optics", url: "https://www.meta-rosetta.com/product-1.html" },
  { name: "MetaRosetta — long-wave infrared optics", url: "https://www.meta-rosetta.com/product-9.html" },
  { name: "MetaRosetta — custom design and IP model", url: "https://www.meta-rosetta.com/product-7.html" },
  { name: "Nature Reviews Electrical Engineering — metalens engineering trade-offs", url: "https://www.nature.com/articles/s44287-026-00276-9" },
];

export const metadata: Metadata = makeMetadata({
  title,
  description,
  path,
  enPath: path,
  type: "article",
  image: { url: image, width: 1200, height: 630, alt: "Original illustration of a flat optical surface directing light to compact sensors" },
  article: {
    publishedTime: `${publishedAt}T00:00:00.000Z`,
    modifiedTime: `${publishedAt}T00:00:00.000Z`,
    authors: [siteUrl],
    section: "Taiwan Solutions",
    tags: ["MetaRosetta", "metalens", "metasurface", "machine vision", "thermal imaging"],
  },
});

export default function MetaRosettaMetalensPage() {
  const articleUrl = `${siteUrl}${path}`;

  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Taiwan Solutions", path: "/Solutions" }, { name: "MetaRosetta metalens", path }])} />
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${articleUrl}#article`,
      headline: title,
      description,
      datePublished: publishedAt,
      dateModified: publishedAt,
      author: { "@id": `${siteUrl}/#organization`, "@type": "Organization", name: "FlyPig AI" },
      publisher: { "@id": `${siteUrl}/#organization` },
      image: { "@type": "ImageObject", url: absoluteUrl(image), width: 1200, height: 630 },
      mainEntityOfPage: articleUrl,
      isPartOf: { "@id": `${siteUrl}/Solutions#collection` },
      articleSection: "Taiwan Solutions",
      citation: sources.map((source) => source.url),
      inLanguage: "en-CA",
    }} />
    <SiteHeader />

    <article className="article-shell shell">
      <nav className="article-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/Solutions">Taiwan Solutions</a><span>/</span><span aria-current="page">MetaRosetta metalens</span></nav>
      <header className="article-header">
        <p className="eyebrow">Taiwan Solutions · Vision &amp; sensing</p>
        <h1>{title}</h1>
        <p className="article-deck">A thinner optical element can change a sensor module. The useful question is which complete imaging task it improves, and what evidence a product team needs before design-in.</p>
        <div className="article-meta"><span>By FlyPig AI Team</span><span>Published <time dateTime={publishedAt}>October 2, 2026</time></span><span>Sources checked October 2, 2026</span><span>Independent research</span></div>
      </header>

      <figure className="article-hero-visual">
        <img src={image} width="1200" height="630" alt="Editorial illustration of light passing through a patterned flat optical surface toward three sensors" />
        <figcaption>Original editorial illustration generated for FlyPig AI. It is a concept image, not a MetaRosetta product photograph or a measured optical diagram.</figcaption>
      </figure>

      <div className="article-lead-card"><p className="eyebrow">The short answer</p><p>MetaRosetta presents three different optical paths: a visible-light metasurface colour splitter, near-infrared receiving optics, and long-wave infrared thermal optics. Treat them as separate design questions, because their sensors, materials, performance measures and integration constraints differ.</p></div>

      <div className="article-body">
        <section>
          <h2>What the company actually publishes</h2>
          <p>Based in Taiwan, <a href="https://www.meta-rosetta.com/article-ABOUT-US.html" target="_blank" rel="noreferrer">MetaRosetta describes</a> metalens design and product integration using semiconductor processes. Its <a href="https://www.meta-rosetta.com/product-7.html" target="_blank" rel="noreferrer">customization page</a> emphasizes computational optical design and delivery of design IP and process parameters for customers working with their own manufacturing partners. That is a different proposition from buying a fully qualified camera module.</p>
          <p>A metalens uses subwavelength structures to shape incoming light. The potential attraction is a thinner optical path or a function that would otherwise need several optical elements. The engineering test remains system performance: image quality, usable field of view, efficiency, manufacturability and cost in the target product. A <a href="https://www.nature.com/articles/s44287-026-00276-9" target="_blank" rel="noreferrer">2026 technical review</a> identifies trade-offs among these measures across metalens designs.</p>
        </section>

        <section>
          <h2>Three routes, three different starting points</h2>
          <div className="solution-route-grid">
            <div><h3>Visible light</h3><p>MetaRosetta describes a metasurface colour splitter for compact CMOS image sensors, directing light toward selected pixels. This is a pixel-level light-management concept; it should not be treated as evidence that a whole camera lens stack can be replaced.</p><a href="https://www.meta-rosetta.com/product-2.html" target="_blank" rel="noreferrer">Official visible-light page ↗</a></div>
            <div><h3>Near infrared</h3><p>The company positions a metalens as receiving optics for facial recognition and eye tracking in the 850–1550 nm range. The design question is whether the target wavelength, detector, illumination, working distance and field of view work together in a smaller module.</p><a href="https://www.meta-rosetta.com/product-1.html" target="_blank" rel="noreferrer">Official NIR page ↗</a></div>
            <div><h3>Long-wave infrared</h3><p>For 8–12 µm thermal imaging, MetaRosetta discusses industrial, vehicle and aerial applications. That makes size and weight worth investigating, while real performance still depends on the detector, housing, temperature range and optical test results.</p><a href="https://www.meta-rosetta.com/product-9.html" target="_blank" rel="noreferrer">Official LWIR page ↗</a></div>
          </div>
        </section>

        <section>
          <h2>Where a Canadian product team could start</h2>
          <p>Choose one narrow sensing task first: for example, a fixed-wavelength NIR receiver with a strict module-height limit, or a thermal camera whose optics dominate size and payload. Compare a conventional reference module and a proposed metasurface design under the same conditions. A thinner element only creates product value if the complete assembly meets the image, environmental and commercial requirements.</p>
          <p>For an initial evaluation, request the following before a design commitment:</p>
          <ol>
            <li><strong>Optical data:</strong> target wavelength or bandwidth, aperture, field of view, transmission or focusing efficiency definition, distortion, stray light and measured images at the intended operating points.</li>
            <li><strong>System data:</strong> compatible detector and illumination, module stack height, alignment tolerance, packaging, thermal behaviour and environmental test conditions.</li>
            <li><strong>Production data:</strong> sample availability, process flow, wafer-level yield evidence, repeatability, IP deliverables, manufacturing ownership, lead time and lifecycle plan.</li>
          </ol>
          <p>The company&apos;s public pages describe intended applications and design capabilities. They do not, by themselves, establish a specific module&apos;s certification, production yield, Canadian availability or commercial terms. Those points need direct supplier evidence for the exact design.</p>
        </section>

        <blockquote><strong>FlyPig AI interpretation</strong>MetaRosetta is most useful to investigate when optics constrain the product architecture. Begin with a measured baseline and one target use case; assess the claimed thickness benefit against the whole sensor system, not the lens element alone.</blockquote>
      </div>

      <aside className="source-note">
        <p className="eyebrow">Sources and editorial disclosure</p>
        <h2>Primary material and technical context</h2>
        <p>Company descriptions above are attributed to MetaRosetta. The selection framework is independent FlyPig AI analysis. We have not independently tested a MetaRosetta sample. Inclusion does not imply authorization, endorsement, inventory or an official commercial relationship.</p>
        <ul>{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name} ↗</a></li>)}</ul>
        <p>Source pages checked October 2, 2026. Product specifications and availability should be reconfirmed before procurement.</p>
      </aside>

      <section className="article-related"><div className="section-head"><div><p className="eyebrow">Continue the research</p><h2>Build the sensing route around the application.</h2></div><p className="section-copy">Compare the optical path with the full vision system and the product requirements it must satisfy.</p></div><div className="grid2"><a className="card" href="/technologies/vision-sensing"><span className="num">Technology intelligence</span><h3>Vision and sensing design decisions</h3><p>Compare sensor, optics, processing and integration criteria.</p></a><a className="card" href="/services/canadian-product-teams"><span className="num">How we help</span><h3>Technology route and qualification</h3><p>Turn a product requirement into a bounded research and validation brief.</p></a></div></section>

      <section className="article-cta"><div><p className="eyebrow">Product decision</p><h2>Have a sensing constraint to qualify?</h2></div><a className="pill primary" href="/services/canadian-product-teams">Review the engagement</a></section>
    </article>
    <SiteFooter />
  </main>;
}
