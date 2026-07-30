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
        heading: "Start with the deployment job",
        body: "Canadian buyers rarely purchase robotics because the category is new. They purchase when a defined task is expensive, unsafe, inconsistent or difficult to staff. Market entry should begin with the worksite problem, not a generic country launch plan.",
        bullets: ["Define the first task and measurable outcome.", "Identify who owns budget, safety, IT, operations and maintenance.", "Confirm whether the buyer needs a product, integrator, service model or full operating partner."],
      },
      {
        heading: "Build a credible route to market",
        body: "Most robotics suppliers need more than a reseller list. Canada often requires local proof, bilingual or region-specific communication, service expectations and trusted introductions into conservative operating environments.",
        bullets: ["Map integrators, distributors, research partners and pilot customers separately.", "Avoid promising national coverage before local support is credible.", "Use one bounded pilot to generate evidence before scaling sales activity."],
      },
      {
        heading: "Prepare for practical friction",
        body: "Common blockers include certification, wireless constraints, safety review, data handling, spare parts, operator training and unclear ROI. These issues should be scoped before commercial claims are made.",
      },
    ],
    cta: "Discuss a Canada market-entry assessment",
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
        body: "Physical AI depends on multiple layers: platforms, sensors, embedded software, perception, connectivity, workflow integration, human operations and commercial ownership. The missing value is often between the robot and the operating environment.",
        bullets: ["Platforms create capability.", "Integrators make capability usable.", "Operators prove whether capability produces measurable value."],
      },
      {
        heading: "Canada has several strong regional clusters",
        body: "British Columbia, Ontario, Quebec, Alberta and Atlantic Canada each contribute different strengths across robotics, AI research, drones, industrial automation, marine systems and resource-sector applications.",
      },
      {
        heading: "Adoption matters as much as invention",
        body: "Canada's near-term Physical AI opportunity is not limited to manufacturing robots. It includes deployment, localization, operations, field support, regulatory adaptation and integration into existing industrial systems.",
      },
    ],
    cta: "Explore the Canada Physical AI Atlas",
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
        body: "A robotics deployment fails when the site, workflow, operator behaviour or support model is underestimated. Integrators reduce that risk by translating product capability into a controlled operating system.",
      },
      {
        heading: "What to evaluate",
        body: "Manufacturers should evaluate integrators by industry access, engineering discipline, safety process, post-installation support, software capability and willingness to define measurable pilot gates.",
        bullets: ["Relevant sector references.", "Controls and software competence.", "Clear support ownership after installation.", "Ability to say no to poor-fit use cases."],
      },
      {
        heading: "Where FlyPig AI fits",
        body: "FlyPig AI is not a replacement for engineering integration. Its role is market development, partner discovery, qualification support and commercial coordination between suppliers, integrators and potential buyers.",
      },
    ],
    cta: "Map potential Canadian partners",
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
        body: "Canada's size, climate, remote assets and resource economy create strong use cases for aerial inspection, mapping, emergency response, environmental sensing and infrastructure monitoring.",
      },
      {
        heading: "Commercialization requires more than aircraft",
        body: "Successful market entry depends on payload fit, compliance, operating permissions, data workflows, training, maintenance and the buyer's ability to use collected intelligence.",
        bullets: ["Define the mission before selecting the aircraft.", "Clarify data ownership and reporting.", "Plan for local operating constraints and support."],
      },
      {
        heading: "Where opportunities concentrate",
        body: "Likely early adopters include utilities, pipelines, mining operations, public safety organizations, industrial service providers, ports, construction and environmental monitoring teams.",
      },
    ],
    cta: "Discuss a drone or autonomous-systems opportunity",
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
        body: "Canadian buyers need confidence in support, safety, workflow fit, parts, communication and long-term reliability. A translated website is useful, but it does not replace market proof.",
      },
      {
        heading: "Sequence the first 90 days",
        body: "The first phase should produce a practical market hypothesis, target account list, partner map, risk register and one or two qualified pilot conversations.",
        bullets: ["Clarify ideal customer profile.", "Prepare English technical-commercial material.", "Screen integrators and channel partners.", "Define pilot scope and support responsibilities."],
      },
      {
        heading: "Use references carefully",
        body: "International case studies help, but Canadian reference cases matter. The first local deployment should be scoped conservatively enough to produce reliable evidence.",
      },
    ],
    cta: "Plan a Canada entry assessment",
  },
];

export function getInsightGuide(slug: string) {
  return insightGuides.find((guide) => guide.slug === slug);
}
