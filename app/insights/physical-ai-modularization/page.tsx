import type { Metadata } from "next";
import JsonLd from "../../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { pageOgImageUrl } from "../../../lib/socialImages";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../../seo";
import { seriesUpdatedDate } from "./evidenceReviews";
import { physicalAiSeries, seriesDate, seriesPath, seriesTitle } from "./series";
import { forecast } from "./beyond-the-robot-operating-system/article";

const articleImage = pageOgImageUrl("insights-physical-ai-modularization");
const seriesCitations = Array.from(new Set(physicalAiSeries.flatMap((article) => article.sources.map((source) => source.url))));

export const metadata: Metadata = makeMetadata({
  title: `${seriesTitle}: Who Becomes the Android of Physical AI?`,
  description: "FlyPig AI's six-part research series on the coming modularization of robotics, why hardware may become the infrastructure layer, and who could become the Android of Physical AI.",
  path: seriesPath,
  enPath: seriesPath,
  type: "article",
  article: {
    publishedTime: seriesDate,
    modifiedTime: seriesUpdatedDate,
    authors: ["FlyPig AI"],
    section: "Physical AI Goes Modular",
    tags: ["Physical AI", "Robotics", "Robot OS", "Edge AI", "Embodied AI"],
  },
});

export default function PhysicalAiModularizationHub() {
  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: seriesTitle, path: seriesPath }])} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: seriesTitle, description: "FlyPig AI research on modular Physical AI, robot platforms, operating layers and the emerging application economy.", url: `${siteUrl}${seriesPath}`, dateModified: seriesUpdatedDate, hasPart: [...physicalAiSeries.map((article) => ({ "@type": "Article", name: article.title, url: `${siteUrl}${seriesPath}/${article.slug}` })), { "@type": "Article", name: forecast.title, url: `${siteUrl}${forecast.path}` }] }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: `${seriesTitle}: Who Becomes the Android of Physical AI?`, description: "FlyPig AI's six-part research series on modular robotics, robot platforms, operating layers and the emerging Physical AI application economy.", datePublished: seriesDate, dateModified: seriesUpdatedDate, author: { "@type": "Organization", name: "FlyPig AI", url: siteUrl }, publisher: { "@id": `${siteUrl}/#organization` }, image: { "@type": "ImageObject", url: articleImage, width: 1200, height: 630 }, mainEntityOfPage: `${siteUrl}${seriesPath}`, articleSection: "Physical AI Goes Modular", citation: seriesCitations, inLanguage: "en-CA" }} />
    <SiteHeader />
    <section className="hero insights-hero"><div className="shell hero-grid"><div>
      <p className="eyebrow">FlyPig AI Research Series · Physical AI</p>
      <h1>Who becomes the Android of Physical AI?</h1>
      <p className="lead">When mobile phones first appeared, many people asked why anyone needed one. Physical AI may be entering a similar take-off decade. FlyPig AI believes the most consequential winner may not be the company that builds the most impressive robot body, but the platform that turns many kinds of machines into a programmable application economy.</p>
      <div className="article-meta"><span>Published <time dateTime={seriesDate}>September 5, 2026</time></span><span>Updated <time dateTime={seriesUpdatedDate}>October 24, 2026</time></span><span>Research series</span></div>
      <div className="actions"><a className="pill primary" href={`${seriesPath}/${physicalAiSeries[0].slug}`}>Start the series</a><a className="pill secondary" href={`${seriesPath}/${physicalAiSeries[1].slug}`}>The Android question</a></div>
    </div><aside className="signal-card"><p className="eyebrow">FlyPig thesis</p><div className="signal-line"><span>01</span><strong>Physical AI enters a build-out decade</strong></div><div className="signal-line"><span>02</span><strong>Hardware becomes more modular</strong></div><div className="signal-line"><span>03</span><strong>Software abstractions become the control point</strong></div><div className="signal-line"><span>04</span><strong>Applications capture the new installed base</strong></div></aside></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">The core thesis</p><h2>The hardware boom may only be the beginning.</h2></div><p className="section-copy">Physical AI will require enormous investment in robots, sensors, actuators, compute and factories. Some hardware companies will build excellent businesses. But history repeatedly shows that once difficult hardware becomes reproducible, competition intensifies and strategic value can migrate upward toward platforms, software, applications and proprietary operating data. FlyPig AI is therefore interested in Physical AI, but never in the physical layer alone.</p></div></section>

    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Six-part series</p><h2>From the robot body to the application economy.</h2></div><p className="section-copy">The series follows one question through the stack: what becomes standardized, what remains difficult, where value migrates, and what layer could coordinate an ecosystem of robot makers, skills, agents and applications.</p></div><div className="grid3">{physicalAiSeries.map((article) => <a className="card" href={`${seriesPath}/${article.slug}`} key={article.slug}><span className="num">{article.number}</span><h3>{article.title}</h3><p>{article.description}</p><strong>Read essay →</strong></a>)}</div></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Series outlook · October 2026</p><h2>Beyond the robot operating system.</h2></div><p className="section-copy">A new technology forecast brings the series together around shared capabilities, continuous learning and the economics of operating robots. It retains competing scenarios and six observations that could overturn the thesis.</p></div><a className="feature-article" href={forecast.path}><div><span className="num">2026–2036 outlook</span><h3>{forecast.title}</h3><p>{forecast.description}</p></div><span className="article-arrow">↗</span></a><div className="actions"><a className="pill secondary" href={forecast.zhPath} hrefLang="zh-Hant" lang="zh-Hant">閱讀繁體中文版 →</a></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">The emerging stack</p><h2>Model → Runtime → Compute → Body → Skills → Agent → Application</h2></div><p className="section-copy">The central FlyPig question is not simply which humanoid or quadruped will win. It is which layer becomes the common development surface across many bodies. Android transformed phones by creating a shared platform for OEMs and developers. Physical AI may eventually need an equivalent compatibility and application layer of its own.</p></div></section>

    <section className="section dark"><div className="shell"><div className="section-head"><div><p className="eyebrow">Why this matters now</p><h2>The reference-robot era is no longer hypothetical.</h2></div><p className="section-copy">NVIDIA's 2026 Isaac GR00T Reference Humanoid Robot combines a Unitree body, dexterous hands, Jetson Thor compute and an open GR00T software stack. That does not prove the industry has already found its Android. It does show that major robotics platforms are beginning to package the physical body, compute and software as separable, reusable layers.</p></div><div className="actions"><a className="pill secondary" href={`${seriesPath}/${physicalAiSeries[3].slug}`}>Read the reference robot analysis</a></div></div></section>

    <section className="section shell"><div className="section-head"><div><p className="eyebrow">Evidence review · October 24, 2026</p><h2>Platform control now spans runtime, learning workflows and safety evidence.</h2></div><p className="section-copy">NVIDIA introduced the open-source Isaac OS runtime, while CoreWeave packaged repeatable robotics simulation and training workflows. Agile ONE SN adds a research reference body and TÜV SÜD with Accenture proposed a facility-level Physical AI safety-evidence workflow. In counterpoint, Agility selected NVIDIA as exclusive onboard-compute provider for Digit 5. These first-party developments suggest multiple stack control points, not a universal cross-vendor robot operating system, proven certification throughput, or demonstrated software profit capture. The essays below distinguish confirmed disclosures, FlyPig interpretation and falsifiable predictions.</p></div><div className="actions"><a className="pill secondary" href={`${seriesPath}/${physicalAiSeries[1].slug}`}>Read the runtime evidence review</a><a className="pill secondary" href={`${seriesPath}/${physicalAiSeries[5].slug}`}>Read the lifecycle and value thesis</a></div></section>

    <section className="cta shell"><div className="cta-box"><div><p className="eyebrow">FlyPig AI research direction</p><h2>Follow the layer above the machine.</h2><p>FlyPig AI studies how robot platforms, edge compute, Taiwan's technology ecosystem and Canadian deployment requirements connect. The longer-term objective is to understand where reusable intelligence, skills and applications can become more valuable than another piece of hardware.</p></div><div className="actions"><a className="pill primary" href="/technologies">Technology Intelligence</a><a className="pill secondary" href="/atlas">Canada Atlas</a></div></div></section>
    <SiteFooter />
  </main>;
}
