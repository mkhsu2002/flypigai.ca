import type { Metadata } from "next";
import JsonLd from "../../../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../../../components/SiteChrome";
import { socialImageUrl } from "../../../../lib/socialImages";
import { breadcrumbJsonLd, makeMetadata, siteUrl } from "../../../seo";
import { seriesPath, seriesTitle } from "../series";
import { forecast, forecastLayers, forecastSources, forecastTests } from "./article";
import "./forecast.css";

export const metadata: Metadata = makeMetadata({
  title: forecast.seoTitle,
  socialTitle: forecast.title,
  description: forecast.description,
  path: forecast.path,
  enPath: forecast.path,
  type: "article",
  image: { url: forecast.socialImage, width: 1200, height: 630, alt: forecast.imageAlt },
  article: {
    publishedTime: forecast.date,
    modifiedTime: forecast.date,
    authors: ["FlyPig AI"],
    section: seriesTitle,
    tags: ["Physical AI", "Robotics", "Technology Forecast", "Robot OS", "World Models", "Capability Interfaces"],
  },
});

function Reference({ id }: { id: string }) {
  const source = forecastSources.find((item) => item.id === id)!;
  return <a href={`#source-${id}`} aria-label={`Reference: ${source.name}`}>[{forecastSources.indexOf(source) + 1}]</a>;
}

export default function PhysicalAiNextDecadePage() {
  const articleUrl = `${siteUrl}${forecast.path}`;
  return <main>
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: seriesTitle, path: seriesPath }, { name: "Physical AI’s Next Decade", path: forecast.path }])} />
    <JsonLd data={{
      "@context": "https://schema.org", "@type": "Article", "@id": `${articleUrl}#article`,
      headline: forecast.title, description: forecast.description,
      datePublished: forecast.date, dateModified: forecast.date,
      author: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "FlyPig AI" },
      publisher: { "@id": `${siteUrl}/#organization` },
      image: { "@type": "ImageObject", url: socialImageUrl(forecast.socialImage), width: 1200, height: 630, caption: "Original FlyPig AI forecast framework; not an established industry standard." },
      mainEntityOfPage: articleUrl, isPartOf: { "@type": "CreativeWorkSeries", name: seriesTitle, url: `${siteUrl}${seriesPath}` },
      articleSection: seriesTitle, inLanguage: "en-CA", genre: "Technology forecast",
      citation: forecastSources.map((source) => source.url),
    }} />
    <SiteHeader />
    <article className="article-shell shell">
      <nav className="article-breadcrumb" aria-label="Breadcrumb"><a href="/insights">Insights</a><span>/</span><a href={seriesPath}>{seriesTitle}</a><span>/</span><span aria-current="page">Next decade</span></nav>
      <header className="article-header">
        <p className="eyebrow">FlyPig AI Technology Forecast · October 2026</p>
        <h1>{forecast.title}</h1>
        <p className="article-deck">The next robotics platform may emerge around the full cycle of data, simulation, learning, validation and operations. A common operating system could be one layer in that ecosystem; it would not, by itself, make the ecosystem work.</p>
        <div className="article-meta"><span>By FlyPig AI Insights</span><span>Published <time dateTime={forecast.date}>October 24, 2026</time></span><span>Forecast horizon: {forecast.horizon}</span><span>Independent research</span></div>
      </header>

      <figure className="article-hero-visual">
        <img src={forecast.image} width="1600" height="1000" alt={forecast.imageAlt} fetchPriority="high" />
        <figcaption>Original editorial framework by FlyPig AI. The layers and lifecycle are a forecast model, not a vendor architecture, certified safety system or established industry standard. <a href="#forecast-framework">Read the accessible layer descriptions below.</a></figcaption>
      </figure>

      <div className="article-lead-card"><span className="mono">FlyPig prediction · not an established outcome</span><p>Over the next five to ten years, Physical AI may develop several shared layers that make different robots easier to build applications for. The strongest platform could connect capabilities with a continuous learning and operating lifecycle. One company, one model or one robot OS need not unify the market.</p></div>

      <div className="article-body">
        <section>
          <h2>The platform question behind the robot demonstration</h2>
          <p>Watching a humanoid walk or a robot dog climb stairs, it is natural to ask what the machine is for. The more consequential question may be what would let thousands of developers, manufacturers and businesses build useful work on top of it.</p>
          <p>That is the question behind FlyPig AI’s <a href={seriesPath}>Physical AI Goes Modular</a> series: who becomes the Android of Physical AI? Our October forecast develops a specific possibility. The durable platform may be the ecosystem that connects data, simulation, learning, validation, deployment, operations and relearning across a machine’s life.</p>
          <p>This is a market-structure hypothesis. Current announcements make it worth testing; they do not establish a winner. The evidence also leaves room for competing, partly compatible ecosystems and valuable hardware businesses.</p>
        </section>

        <section>
          <h2>What the smartphone analogy explains—and where it stops</h2>
          <p>Smartphones scaled through a combination of reusable software, chipset reference designs, development tools, application distribution and manufacturing capacity. Android gave different device makers a common software base and gave developers a broader target than one handset at a time.</p>
          <p>The useful analogy for robotics is the reduction of repeated engineering work. It is not a prediction that all robot bodies become interchangeable, or that hardware manufacturers stop making money. Distinctive components, manufacturing capability and tightly integrated systems can retain substantial value.</p>
          <p>Robots also face a harder compatibility problem. Software that runs on two phones does not move different masses through shared physical space. A policy that works on one arm may fail on another because reach, payload, sensors, actuation, contact dynamics or safety limits differ. Physical AI platforms must bridge those differences without hiding the conditions under which a capability is safe to use.</p>
        </section>

        <section>
          <h2>Evidence: reusable robotics software is becoming a strategic asset</h2>
          <p><strong>Company disclosures.</strong> On September 22, Intrinsic introduced Intrinsic Core, an Apache 2.0, ROS-compatible collection of robotics capabilities spanning real-time control, motion and grasp planning, perception, calibration and simulation. The relevant promise is composability: developers can reuse capabilities behind hardware abstractions rather than rebuild every integration from scratch. Supported hardware and production qualification still matter. <Reference id="intrinsic" /></p>
          <p>The following day, Qualcomm announced an agreement to acquire PickNik, the longtime steward of MoveIt. Qualcomm said MoveIt would remain open-source and supported across third-party hardware. An acquisition agreement is not a completed transaction, and that stated commitment is not proof of universal interoperability. <Reference id="picknik" /></p>
          <p><strong>FlyPig interpretation.</strong> Middleware, motion planning and developer tooling are becoming potential platform control points. An open-source licence can make adoption easier, but compatibility also requires maintained interfaces, supported devices, predictable behaviour and an independent developer ecosystem. Source availability alone does not provide those guarantees.</p>
        </section>

        <section>
          <h2>Evidence: the contest extends beyond the runtime</h2>
          <p><strong>Company disclosures.</strong> AWS introduced its Physical AI Toolchain on October 7, linking data intake, simulation, training and edge deployment through reference architectures and deployment automation. It combines AWS services with NVIDIA technologies including Isaac Sim, GR00T, Cosmos and OSMO. AWS describes portable formats and robot-agnostic workflows; the published approach nevertheless remains closely tied to AWS infrastructure and NVIDIA’s stack. <Reference id="aws" /></p>
          <p>The newer October evidence makes the distinction between runtime and lifecycle more concrete. On October 21, NVIDIA announced the Holoscan-based, open-source Isaac OS runtime and general availability of Isaac Lab 3.0. The same day, CoreWeave introduced Physical AI Launchables for repeatable engineering workflows involving tools such as Isaac Sim, CARLA and MuJoCo. These are related platform investments, not independent demonstrations of a vendor-neutral robot application standard. <Reference id="isaac" /> <Reference id="coreweave" /></p>
          <p><strong>FlyPig interpretation.</strong> A robot OS addresses part of execution. A lifecycle platform addresses how teams collect data, train policies, test changes, deploy them and learn from subsequent operation. Strategic control may accumulate at both boundaries. The ability to run a workload does not establish that its models, data, application logic or safety evidence move cheaply to another provider.</p>
        </section>

        <section>
          <h2>Evidence: world models complicate the idea of a robot app store</h2>
          <p><strong>Company disclosure.</strong> Odyssey introduced Odyssey-3 on October 8, presenting a world model with demonstrations involving robots, humanoids and vehicles. Its domain adaptations still require data and an action decoder or policy. First-party demonstrations do not establish reliable control across arbitrary robot bodies. <Reference id="odyssey" /></p>
          <p>World models could help a system anticipate how a scene changes, generate training situations or support planning. A plausible predicted scene is not a validated motor command. Closing the gap requires a suitable control policy, embodiment adaptation and evaluation under the intended physical conditions.</p>
          <p><strong>FlyPig interpretation.</strong> Our earlier idea of <a href={`${seriesPath}/robot-skills-as-the-next-app-ecosystem`}>robot skills as an application primitive</a> needs to remain open to revision. An application may still request “inspect this asset” or “place this item,” while a general model and body-specific controller generate the behaviour underneath. The durable unit could be a permissioned capability contract rather than a separately installed package for every movement.</p>
          <p>A useful contract would declare inputs, outputs, prerequisites, operating limits and failure states. It would not exempt a new body or site from safety validation. An app-store-like distribution market is one possible outcome, not a consequence already demonstrated by stronger foundation models.</p>
        </section>

        <section id="forecast-framework">
          <h2>FlyPig prediction: a layered ecosystem, with several possible control points</h2>
          <p>Our five-to-ten-year base case is a growing set of reusable layers, with different degrees of portability in different robot classes. The framework below organises the roles that might emerge. It is not a standard, a required software dependency order or a claim that every supplier occupies only one layer.</p>
          <div className="forecast-table-scroll" role="region" aria-label="Proposed Physical AI layers" tabIndex={0}>
            <table className="forecast-table"><caption>FlyPig AI’s proposed platform layers · forecast for 2026–2036</caption><thead><tr><th scope="col">Layer</th><th scope="col">Potential industry role</th></tr></thead><tbody>{forecastLayers.map((layer) => <tr key={layer.name}><th scope="row">{layer.name}</th><td>{layer.role}</td></tr>)}</tbody></table>
          </div>
          <p>The Android-like moment would arrive when an application or agent could use declared capabilities across suitable robot bodies at materially lower integration cost. That requires an observable change in engineering effort, reliability and deployment economics—not simply agreement on the word “open.”</p>
          <p>The competing scenario is a set of vertically integrated ecosystems, perhaps organised around NVIDIA, Qualcomm, Google, AWS or other suppliers. They might share formats and middleware while retaining proprietary compute paths, training services, policies and distribution. In that world, there may be several useful platforms and no single Android.</p>
        </section>

        <section>
          <h2>The counter-case: hardware and integration can keep the bargaining power</h2>
          <p>Actuators, precision reducers, efficient chips, sensing, batteries, control systems and safety mechanisms affect whether a robot can do useful work for an acceptable total cost. Models cannot remove limits imposed by energy, materials, mechanics or maintenance.</p>
          <p><strong>Company disclosures.</strong> Agile Robots announced its Agile ONE SN research reference platform on October 21, targeting availability in early 2027. A preconfigured development stack supports the reference-robot thesis; planned availability is not delivered volume or proven cross-generation reuse. On October 22, Agility said NVIDIA IGX Thor would be the exclusive onboard-compute platform for the general-availability version of Digit 5. That selection is also evidence that important hardware and platform dependencies may remain concentrated. <Reference id="agile" /> <Reference id="agility" /></p>
          <p><strong>FlyPig interpretation.</strong> Standardisation could squeeze businesses that compete only on increasingly comparable specifications while preserving value in critical physical technology, reliable integration and customer workflows. The control points may stack rather than move cleanly from hardware to software.</p>
          <p>We do not yet have enough comparable economic evidence to conclude that any platform has secured the long-term profit pool. Developer activity, demonstrations and product announcements do not substitute for retained customers, recurring income, gross margins and the cost of supporting real deployments.</p>
        </section>

        <section>
          <h2>What this means for Canada–Taiwan technology decisions</h2>
          <p>For a Canadian product team, the practical starting point is one operating task and a measurable baseline. Ask which parts of the proposed stack can be changed without rewriting the application, retraining the whole policy or repeating the entire safety case. Require evidence of intervention rates, recovery behaviour, maintenance needs and support ownership in the intended environment.</p>
          <p>For a Taiwan technology company, the opportunity may lie in making a critical subsystem easier to qualify and integrate: supported interfaces, reproducible reference configurations, lifecycle availability and clear operating limits. A better sensor, compute module or controller can remain valuable when it reduces the total engineering and operating burden.</p>
          <p>These are qualification questions, not claims that FlyPig AI already provides a robotics platform or represents the suppliers discussed here. <a href="/atlas">Canada Atlas</a> and <a href="/Solutions">Taiwan Solutions</a> offer starting points for public-source research into that fit.</p>
        </section>

        <section className="article-verification" id="forecast-tests">
          <h2>Six observations that could validate—or overturn—the forecast</h2>
          <p>The test of this thesis is what becomes reusable, at what cost, and who can build a durable business around it. We will watch the following evidence rather than count robot launches.</p>
          <ol className="forecast-tests">{forecastTests.map((item) => <li key={item.title}><h3>{item.title}</h3><p>{item.measure}</p><p><strong>What would challenge the thesis:</strong> {item.falsifier}</p></li>)}</ol>
          <p>This outlook develops the existing series’ platform, reference-body and value-capture hypotheses. It does not reset their original dates or erase the weakening evidence for individually packaged robot skills. The benchmark is meaningful compatibility and recurring economics, not a retrospectively chosen winning vendor.</p>
        </section>

        <section>
          <h2>Follow what makes intelligence useful</h2>
          <p>A robot’s body sets its physical possibilities. Models shape what it can recognise, predict and learn. Applications and services connect those capabilities to reliable, sustained and measurable work.</p>
          <p>FlyPig AI therefore has little reason to declare an Android winner today. The better research questions are who establishes common interfaces, who lowers development and operating costs, who can use real-world feedback, and who retains the customer relationship as architectures change.</p>
          <p>A useful forecast keeps the evidence that might prove it wrong. The next decade should give us repeated opportunities to test this one.</p>
        </section>
      </div>

      <aside className="source-note" aria-labelledby="forecast-sources">
        <p className="eyebrow">Sources and research disclosure</p>
        <h2 id="forecast-sources">Primary references</h2>
        <ol>{forecastSources.map((source) => <li id={`source-${source.id}`} key={source.id}><a href={source.url} target="_blank" rel="noreferrer">{source.name} ↗</a> · {source.date}</li>)}</ol>
        <p>This is independent technology-trend analysis and forecasting by FlyPig AI, operated by ICareU Global Trading Ltd. Company announcements, demonstrations and roadmaps are first-party evidence, not independent validation of portability, safety, deployment scale or financial performance. Named companies are not implied partners, endorsers or suppliers represented by FlyPig AI. Future outcomes remain uncertain.</p>
        <p>The original framework graphic is owned by FlyPig AI. No manufacturer artwork, third-party logo or product photograph is reproduced.</p>
        <div className="source-links"><a href={seriesPath}>Physical AI Goes Modular →</a><a href={`${seriesPath}/who-becomes-android-for-physical-ai`}>The original Android question →</a><a href={`${seriesPath}/where-value-moves-in-modular-physical-ai`}>Where value moves →</a></div>
      </aside>
      <div className="article-cta"><div><p className="eyebrow">Continue the research</p><h2>Examine the layers behind the machine.</h2></div><div className="actions"><a className="pill primary" href={seriesPath}>Read the research series</a><a className="pill secondary" href="/technologies">Technology Intelligence</a></div></div>
    </article>
    <SiteFooter />
  </main>;
}
