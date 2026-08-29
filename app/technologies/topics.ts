export type TechnologyTopic = {
  slug: "edge-ai-compute" | "embedded-platforms" | "vision-sensing";
  eyebrow: string;
  title: string;
  description: string;
  answer: string;
  criteria: Array<{ title: string; body: string }>;
  questions: string[];
  relatedTechnologies: string[];
  ctaTitle: string;
  ctaHref: string;
};

export const technologyOwnerTopics: TechnologyTopic[] = [
  {
    slug: "edge-ai-compute",
    eyebrow: "Technology decision guide",
    title: "Edge AI Compute: How to Choose a Product Route",
    description: "Compare Edge AI SoCs, accelerators and compute platforms by workload, latency, power, memory, software, lifecycle and integration risk.",
    answer: "Choose Edge AI compute from the workload and deployment constraints outward. Model accuracy or TOPS alone is not enough: sustained latency, memory movement, power, thermal design, software maturity, interfaces, security and production lifecycle determine whether a platform fits a real product.",
    criteria: [
      { title: "Workload and latency", body: "Define models, precision, concurrency, frame rate and worst-case response time. Use workload-level measurements instead of comparing headline TOPS alone." },
      { title: "Memory and data movement", body: "Check model size, bandwidth, camera or sensor ingest, preprocessing and whether memory pressure changes sustained performance." },
      { title: "Power and thermal envelope", body: "Compare measured system power, throttling behaviour, cooling needs and performance inside the intended enclosure and ambient range." },
      { title: "Software path", body: "Review compilers, model conversion, supported operators, BSP quality, debugging, update policy and the effort required to maintain a production image." },
      { title: "Interfaces and system fit", body: "Validate cameras, sensors, storage, networking, real-time control and security requirements at the complete platform level." },
      { title: "Lifecycle and evidence", body: "Confirm availability, revision policy, documentation, evaluation hardware and direct supplier evidence before design-in." },
    ],
    questions: ["Which workload must run locally, and what is the actual latency ceiling?", "What happens to performance under sustained thermal and memory pressure?", "Which model operations require conversion, fallback or custom code?", "Can the software and hardware lifecycle match the product's service life?", "Which security, update and regional compliance questions remain unresolved?"],
    relatedTechnologies: ["AI Acceleration", "Core Ultra", "Edge AI", "Edge AI Platform", "Endpoint AI", "GenAI", "IGX Thor", "Qualcomm", "Qualcomm Edge AI"],
    ctaTitle: "Need to compare Taiwan Edge AI compute routes for a Canadian product?",
    ctaHref: "/services/canadian-product-teams",
  },
  {
    slug: "embedded-platforms",
    eyebrow: "Technology decision guide",
    title: "Embedded Platform Form Factors: SOM, SMARC, OSM, SBC or Mini-ITX?",
    description: "Compare embedded platform form factors by customization, interfaces, thermal range, carrier strategy, serviceability and lifecycle.",
    answer: "Select an embedded form factor by product ownership and change risk. A system-on-module can isolate compute upgrades behind a custom carrier; a standard module can improve sourcing options; an SBC can shorten development; Mini-ITX can simplify expansion and service. The right route depends on volume, interfaces, enclosure, certification and lifecycle—not board size alone.",
    criteria: [
      { title: "Customization versus speed", body: "A ready SBC can accelerate prototyping, while a module and carrier can better control I/O, enclosure and long-term product architecture." },
      { title: "Interfaces and expansion", body: "Map cameras, networking, storage, field buses, displays and expansion before choosing a connector or board standard." },
      { title: "Thermal and mechanical design", body: "Review operating range, shock, vibration, heat spreading, mounting and enclosure constraints at sustained workload." },
      { title: "Carrier and BSP ownership", body: "Clarify who designs and validates the carrier, maintains the BSP and supports revision changes across the product life." },
      { title: "Replaceability", body: "Determine whether the priority is multi-vendor module compatibility, drop-in board replacement or a controlled custom platform." },
      { title: "Production evidence", body: "Confirm lifecycle, change-notice policy, evaluation availability and which temperature or qualification claims apply to the exact SKU." },
    ],
    questions: ["Is the main goal rapid prototype, controlled product design or field replaceability?", "Which interfaces are mandatory and which can move to a carrier or expansion card?", "Who owns carrier validation and BSP maintenance?", "What environmental range and service procedure must the platform support?", "How will revisions affect certification, software images and spare inventory?"],
    relatedTechnologies: ["2.5-inch SBC", "Embedded", "Low-Power Edge", "Mini-ITX", "Modules", "OSM", "SMARC"],
    ctaTitle: "Need to qualify a Taiwan embedded platform route?",
    ctaHref: "/services/canadian-product-teams",
  },
  {
    slug: "vision-sensing",
    eyebrow: "Technology decision guide",
    title: "Vision and Sensing for Edge AI Products",
    description: "Compare camera, depth, biometric and sensor-fusion routes by environment, latency, calibration, privacy, power and failure behaviour.",
    answer: "Choose a vision or sensing route by the environment and failure cost. Start with the scene, range, lighting, motion, occlusion and privacy constraints; then compare sensing modality, calibration, edge processing, confidence handling and system integration. A strong lab metric does not guarantee reliable field perception.",
    criteria: [
      { title: "Scene and environment", body: "Document range, field of view, lighting variation, weather, reflective surfaces, motion and occlusion before comparing sensors." },
      { title: "Accuracy and failure modes", body: "Review false positives, false negatives, confidence behaviour and what the system does when the signal becomes unreliable." },
      { title: "Latency and synchronization", body: "Account for exposure, transport, preprocessing, inference, fusion and control timing across the full pipeline." },
      { title: "Calibration and maintenance", body: "Identify factory calibration, field recalibration, mechanical drift, cleaning and replacement procedures." },
      { title: "Privacy and data path", body: "Decide what must remain local, what can be stored or transmitted, and how raw data, embeddings and audit records are protected." },
      { title: "Power and integration", body: "Compare sensor power, compute load, interfaces, drivers, environmental rating and evidence from an application close to the intended product." },
    ],
    questions: ["Which environmental variation causes the highest perception risk?", "What error rate and failure response are acceptable for the task?", "Does the pipeline require local processing for latency, privacy or connectivity?", "How will sensors be calibrated, cleaned and replaced in the field?", "Which application evidence is comparable to the intended operating context?"],
    relatedTechnologies: ["3D Sensing", "Always-On AI", "Biometrics", "Depth Vision", "Multi-Camera Edge AI", "Sensing", "Sensor Fusion", "Vision AI"],
    ctaTitle: "Need to compare Taiwan vision or sensing routes for a Canadian product?",
    ctaHref: "/services/canadian-product-teams",
  },
];

export function getTechnologyOwnerTopic(slug: string) {
  return technologyOwnerTopics.find((topic) => topic.slug === slug);
}
