export type InsightGuide = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  answer: string;
  sections: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
  cta: string;
  ctaHref: string;
};

export const insightGuides: InsightGuide[] = [
  {
    slug: "canada-robotics-market-entry-guide",
    eyebrow: "Market entry guide",
    title: "Canada Robotics Market Entry Guide",
    description: "A practical guide for robotics, drone and Physical AI companies evaluating Canadian market entry, channels, pilots and commercialization.",
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    answer: "Robotics companies entering Canada should validate the use case before selecting channels: identify regulated industries, local integration requirements, support expectations, pilot economics and the partners who can turn a demonstration into repeatable operation.",
    sections: [
      {
        heading: "Start with the deployment job, not the country launch",
        body: "Canada is not one uniform robotics market. A warehouse operator, a mine, a utility, a research lab and a public-safety organization evaluate automation through different constraints. The first question is not whether Canada is interested in robotics. The first question is which operational job is painful enough, measurable enough and bounded enough to justify a first deployment.",
        bullets: ["Define the first task and measurable outcome before selecting channels.", "Identify who owns budget, safety, IT, operations and maintenance.", "Clarify whether the buyer needs a product, an integrator, a managed service or a full operating partner.", "Avoid launching broad sales outreach before the first credible use case is specific."],
      },
      {
        heading: "Separate buyers, integrators, distributors and validators",
        body: "Many market-entry plans fail because every contact is treated as a potential buyer. In robotics, different stakeholders play different roles. A distributor may help with reach but not integration. A university lab may validate capability but not become a commercial channel. An industrial operator may have the problem but need an integrator to carry implementation risk.",
        bullets: ["Map buyers, integrators, distributors, research partners and pilot candidates separately.", "Define what each contact is supposed to prove.", "Do not ask a channel partner to solve missing product-market fit.", "Use the first conversations to test assumptions, not only to pitch."],
      },
      {
        heading: "Prepare for practical Canadian friction",
        body: "Common blockers include certification, wireless constraints, site safety review, data handling, spare parts, operator training, climate conditions, region-specific support and unclear ROI ownership. These issues do not mean the market is unattractive. They mean the first entry plan should be narrower and more operationally honest.",
        bullets: ["Document what support must be available in Canada.", "Prepare English technical-commercial materials that answer deployment questions, not only product features.", "Clarify data, privacy and safety assumptions before a pilot is proposed.", "Identify which risks need legal, engineering or certification specialists."],
      },
      {
        heading: "Use a 30/60/90 day market-entry sequence",
        body: "A practical first phase should produce evidence, not just meetings. In the first 30 days, clarify the product, use case, target industries and obvious disqualifiers. By 60 days, build a partner and account map, test messages and identify whether the market hypothesis survives real conversations. By 90 days, the company should know whether to pursue a pilot, adjust positioning, find a local partner or pause the Canada effort.",
        bullets: ["30 days: readiness intake, target segment hypothesis and risk scan.", "60 days: partner map, buyer profiles, outreach message testing and opportunity qualification.", "90 days: pilot path, local support requirements, commercial next step or decision to stop."],
      },
      {
        heading: "What FlyPig AI can help produce",
        body: "A Canada Application & Design-In Readiness engagement can produce an application-fit brief, target organization categories, a design-in friction review, evidence gaps and a qualified opportunity path. The goal is not to make Canada look easy or promise demand. It is to make the next technical-commercial decision concrete enough to evaluate.",
      },
    ],
    cta: "Review Canada application and design-in readiness",
    ctaHref: "/services/taiwan-technology-companies",
  },
  {
    slug: "canada-physical-ai-ecosystem-overview",
    eyebrow: "Ecosystem overview",
    title: "Canada Physical AI Ecosystem Overview",
    description: "How Canada's Physical AI ecosystem connects robotics companies, AI institutes, integrators, infrastructure operators and industrial adopters.",
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    answer: "Canada's Physical AI ecosystem is strongest when research, robotics platforms, enabling technologies, integrators and industrial operators are connected around measurable deployment problems rather than isolated technology demonstrations.",
    sections: [
      {
        heading: "The ecosystem is a stack",
        body: "Physical AI depends on multiple layers: platforms, sensors, embedded software, perception, connectivity, workflow integration, human operations and commercial ownership. The missing value is often between the robot and the operating environment. A platform may be technically impressive, but the market only forms when someone can connect it to a real task, support it in context and prove an outcome.",
        bullets: ["Platforms create capability.", "Enabling technologies make capability reliable.", "Integrators make capability usable.", "Operators prove whether capability produces measurable value.", "Commercial partners translate evidence into repeatable adoption."],
      },
      {
        heading: "Canada has several strong regional clusters",
        body: "British Columbia, Ontario, Quebec, Alberta and Atlantic Canada each contribute different strengths across robotics, AI research, drones, industrial automation, marine systems and resource-sector applications. A practical ecosystem map should not treat these regions as interchangeable. Their industrial demand, research base, field conditions and partner networks create different entry paths.",
        bullets: ["British Columbia has relevant activity around Physical AI, drones, robotics software and resource-adjacent applications.", "Ontario has a dense industrial automation and AI research base.", "Quebec connects AI research, aerospace, manufacturing and precision automation.", "Alberta links industrial drones, energy, resources and applied AI.", "Atlantic Canada has marine, subsea, ocean technology and remote-operations relevance."],
      },
      {
        heading: "Adoption matters as much as invention",
        body: "Canada's near-term Physical AI opportunity is not limited to manufacturing robots. It includes deployment, localization, operations, field support, regulatory adaptation and integration into existing industrial systems. For many suppliers, the best Canadian entry point may be an integrator, utility, industrial operator or pilot partner rather than a traditional distributor.",
      },
      {
        heading: "How suppliers should use the ecosystem",
        body: "A supplier should use the ecosystem to decide which layer it needs first. A mature product may need channel access and deployment partners. An early platform may need research validation or a narrow pilot. A component supplier may need platform manufacturers or integrators. Treating all ecosystem contacts as sales prospects weakens the strategy.",
        bullets: ["Use research organizations to understand technical validation and talent signals.", "Use integrators to understand implementation requirements.", "Use industrial operators to test demand and business value.", "Use enabling-technology companies to identify complementors and gaps."],
      },
      {
        heading: "What the Atlas contributes",
        body: "The Canada Physical AI Atlas is designed to organize these layers into a usable market map. It does not replace due diligence, but it helps make the first questions sharper: where is capability located, who might integrate it, where is demand likely to form and what evidence would make a market-entry decision credible?",
      },
    ],
    cta: "Explore the Canada Physical AI Atlas",
    ctaHref: "/atlas",
  },
  {
    slug: "robotics-integrators-in-canada",
    eyebrow: "Integrator strategy",
    title: "Robotics Integrators in Canada",
    description: "Why robotics integrators matter in Canada and how manufacturers should evaluate integration, service and deployment partners.",
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    answer: "Robotics integrators in Canada matter because buyers need systems that work inside real facilities, not just hardware demonstrations. Good partners understand controls, safety, workflow integration, maintenance and acceptance criteria.",
    sections: [
      {
        heading: "Integration is commercial risk control",
        body: "A robotics deployment fails when the site, workflow, operator behaviour or support model is underestimated. Integrators reduce that risk by translating product capability into a controlled operating system. For manufacturers entering Canada, the right integrator can be the difference between an impressive demonstration and a reference case that a conservative buyer will trust.",
      },
      {
        heading: "Integrator, distributor and reseller are not the same role",
        body: "A distributor helps move products through a channel. A reseller may create commercial access. An integrator carries more responsibility for whether the system works in context: controls, layout, safety, operator workflow, data capture, maintenance and escalation. A market-entry plan should not blur these roles.",
        bullets: ["Use distributors for commercial reach only when support and implementation are covered.", "Use integrators when site adaptation and operating reliability matter.", "Use research partners when technical validation is needed but commercial deployment is not yet ready.", "Use pilot customers when the problem, budget owner and success criteria are clear."],
      },
      {
        heading: "What manufacturers should evaluate",
        body: "Manufacturers should evaluate integrators by industry access, engineering discipline, safety process, post-installation support, software capability and willingness to define measurable pilot gates. The best partner is not always the largest company. It is the partner with enough domain fit, enough technical honesty and enough follow-through to protect the first Canadian reference.",
        bullets: ["Relevant sector references and site familiarity.", "Controls, networking and software competence.", "Clear support ownership after installation.", "Ability to define acceptance criteria with the customer.", "Ability to say no to poor-fit use cases before they become expensive failures."],
      },
      {
        heading: "Red flags in partner selection",
        body: "A weak partner selection process often shows up early. Red flags include vague national coverage, no clear support model, pressure to sell before scoping the site, no safety or training process, and unwillingness to discuss integration limits. These issues should be surfaced before introductions become commitments.",
        bullets: ["No clear answer for who supports the customer after installation.", "No documented pilot acceptance criteria.", "Little experience with the target industry environment.", "Commercial enthusiasm without technical scoping discipline."],
      },
      {
        heading: "Where FlyPig AI fits",
        body: "FlyPig AI is not a replacement for engineering integration. Its design-intelligence role is to clarify the application, identify which specialist category is required, examine public capability evidence and surface mismatches between a product claim and local deployment responsibility before an introduction is considered.",
      },
    ],
    cta: "Review Canada application and design-in readiness",
    ctaHref: "/services/taiwan-technology-companies",
  },
  {
    slug: "drone-autonomous-systems-market-canada",
    eyebrow: "Market map",
    title: "Drone and Autonomous Systems Market in Canada",
    description: "A market-development view of Canada's drone, UAV, autonomous inspection and uncrewed systems opportunities.",
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    answer: "Canada's drone and autonomous systems market is shaped by infrastructure inspection, public safety, energy, mining, logistics, environmental monitoring and remote operations where distance, safety and data collection create measurable value.",
    sections: [
      {
        heading: "Demand follows geography and infrastructure",
        body: "Canada's size, climate, remote assets and resource economy create strong use cases for aerial inspection, mapping, emergency response, environmental sensing and infrastructure monitoring. Drones and autonomous systems are most compelling where distance, risk, frequency or data quality makes conventional inspection expensive or inconsistent.",
        bullets: ["Long corridors such as pipelines, transmission lines, rail and transportation infrastructure.", "Remote or hazardous industrial sites where reducing human exposure matters.", "Public safety and emergency response scenarios where time and visibility are critical.", "Environmental monitoring where repeated data collection creates value."],
      },
      {
        heading: "Commercialization requires more than aircraft",
        body: "Successful market entry depends on payload fit, compliance, operating permissions, data workflows, training, maintenance and the buyer's ability to use collected intelligence. A UAV platform without a mission workflow can become a demonstration tool rather than a recurring operational system.",
        bullets: ["Define the mission before selecting the aircraft.", "Clarify data ownership, reporting format and decision use.", "Plan for local operating constraints and support.", "Identify whether the buyer wants equipment, a service provider or a complete intelligence workflow."],
      },
      {
        heading: "Where opportunities concentrate",
        body: "Likely early adopters include utilities, pipelines, mining operations, public safety organizations, industrial service providers, ports, construction and environmental monitoring teams. These buyers tend to care less about aircraft novelty and more about coverage, safety, repeatability, reporting and integration with existing operating processes.",
      },
      {
        heading: "What suppliers should validate first",
        body: "Suppliers should validate the mission, operating constraint and data workflow before scaling outreach. For example, an inspection drone opportunity is not only about flight time or payload capacity. It is also about whether the buyer can use the resulting data, whether permissions and site procedures are manageable, and whether local support can keep the operation reliable.",
        bullets: ["Mission: what problem is being solved and how often?", "Constraint: what airspace, weather, site safety or communications limitations apply?", "Workflow: what data is delivered and who acts on it?", "Support: who operates, maintains and troubleshoots the system locally?"],
      },
      {
        heading: "Where FlyPig AI fits",
        body: "FlyPig AI can help a drone or autonomous-systems company frame a Canadian application hypothesis, identify the evidence and specialist roles it requires, and surface product, workflow and support gaps before a technical conversation is considered.",
      },
    ],
    cta: "Assess Canada application readiness",
    ctaHref: "/services/taiwan-technology-companies",
  },
  {
    slug: "asian-robotics-suppliers-enter-canada",
    eyebrow: "Cross-border commercialization",
    title: "How Asian Robotics Suppliers Can Enter Canada",
    description: "A practical route-to-market framework for Asian robotics, drone, component and Physical AI suppliers entering Canada.",
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    answer: "Asian robotics suppliers entering Canada should localize proof, support and partnerships before scaling sales: validate fit, clarify compliance and service expectations, identify qualified partners and build one credible Canadian reference case.",
    sections: [
      {
        heading: "Avoid treating Canada as a brochure translation problem",
        body: "Canadian buyers need confidence in support, safety, workflow fit, parts, communication and long-term reliability. A translated website is useful, but it does not replace market proof. The question is not only whether the product works. The question is whether a Canadian buyer can trust the company, the support path and the first deployment plan.",
        bullets: ["Translate technical-commercial materials into clear English, not only marketing copy.", "Explain deployment conditions, limitations, maintenance needs and support responsibilities.", "Prepare evidence from prior deployments, even if the first Canadian reference is not available yet.", "Avoid claims that require certification, safety approval or legal review unless those have actually been completed."],
      },
      {
        heading: "Sequence the first 90 days",
        body: "The first phase should produce a practical market hypothesis, target account list, partner map, risk register and one or two qualified pilot conversations. It should not try to build a full national channel immediately. A narrow first wedge creates stronger proof than unfocused outreach.",
        bullets: ["Clarify ideal customer profile and first use case.", "Prepare English technical-commercial material.", "Screen integrators and channel partners separately.", "Define pilot scope, support responsibilities and success criteria.", "Decide what would make Canada worth continued investment."],
      },
      {
        heading: "Prepare for support and trust questions",
        body: "Canadian partners will ask practical questions early: who answers technical questions, who provides parts, who trains operators, who carries warranty obligations, what happens if the robot fails on site and who owns the customer relationship. These questions should be answered before a supplier asks a partner to represent the product.",
        bullets: ["Define spare-parts and maintenance expectations.", "Clarify remote support hours and escalation paths.", "Identify whether a local integrator must be trained.", "Prepare documentation that a Canadian partner can use without inventing answers."],
      },
      {
        heading: "Use references carefully",
        body: "International case studies help, but Canadian reference cases matter. The first local deployment should be scoped conservatively enough to produce reliable evidence. A small pilot with clear acceptance criteria is often more valuable than a broad announcement with vague operational value.",
      },
      {
        heading: "What not to do",
        body: "Do not start by asking for a national distributor, exclusive agent or large buyer introduction before product-market fit is clear. Do not hide deployment limitations. Do not assume that a successful Asian or European use case transfers directly to Canadian operating environments. A good entry strategy protects the supplier from wasting reputation as much as it creates sales opportunities.",
        bullets: ["Do not promise local support that does not exist.", "Do not over-position the product as general-purpose if it is strong in specific tasks.", "Do not skip safety, data or regulatory questions.", "Do not treat the first interested contact as proof of market demand."],
      },
    ],
    cta: "Review Canada application and design-in readiness",
    ctaHref: "/services/taiwan-technology-companies",
  },
];

export function getInsightGuide(slug: string) {
  return insightGuides.find((guide) => guide.slug === slug);
}
