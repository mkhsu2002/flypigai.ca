export type SeriesEvidenceReview = {
  modifiedDate: string;
  heading: string;
  confirmed: string;
  interpretation: string;
  prediction: string;
  sources: Array<{ name: string; url: string }>;
};

export const seriesUpdatedDate = "2026-09-26";

const armPhysicalAi = {
  name: "Arm Total Design for Physical AI and Robotics Capability Framework",
  url: "https://newsroom.arm.com/news/arm-total-design-and-robotics-capability-framework-for-physical-ai",
};

const qualcommNeura = {
  name: "Qualcomm and NEURA Robotics strategic collaboration",
  url: "https://www.qualcomm.com/news/releases/2026/03/neura-robotics-and-qualcomm--enter-strategic-collaboration-to-ad",
};

const ambiSkillSuite = {
  name: "Ambi Robotics AI Skill Suite powered by AmbiOS",
  url: "https://www.ambirobotics.com/media/ambi-robotics-expands-ambios-physical-ai-platform-with-ai-skill-suite/",
};

const skildDeployment = {
  name: "Skild AI: The Hidden Pillar of Robotics",
  url: "https://www.skild.ai/blogs/skild-crosses-100m-arr",
};

const skildS1 = {
  name: "Skild AI: Introducing S1",
  url: "https://www.skild.ai/blogs/s1",
};

const indroCortex = {
  name: "InDro Robotics: Cortex and Controller",
  url: "https://indrorobotics.ca/indro-cortex-controller-open-a-near-limitless-world-of-robotic-possibilities/",
};

const rewardOm1 = {
  name: "Reward AI: OM-1",
  url: "https://www.rewardai.com/blog/OM-1/",
};

const universalRobotsGen7 = {
  name: "Universal Robots: Gen 7 platform",
  url: "https://www.universal-robots.com/news-and-media/news-center/universal-robots-unveils-gen-7-new-platform-industrial-automation-physical-ai/",
};

const figureHelix25 = {
  name: "Figure: Helix 2.5 zero-shot 30-home generalization",
  url: "https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization",
};

const indroAxiom = {
  name: "InDro Robotics: Axiom humanoid-style research robot",
  url: "https://indrorobotics.ca/meet-the-new-indro-axiom-humanoid-style-research-robot/",
};

const bostonAtlasRmac = {
  name: "Boston Dynamics: Robotics Metaplant Application Center",
  url: "https://bostondynamics.com/news/boston-dynamics-opens-robotics-metaplant-application-center-to-train-humanoid-robots-for-manufacturing-tasks",
};

const agibotChimelong = {
  name: "AGIBOT: 300+ robot deployment at Chimelong Spaceship Park",
  url: "https://www.agibot.com/article/231/detail/123.html",
};

const intrinsicCore = {
  name: "Intrinsic: Introducing Intrinsic Core",
  url: "https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core",
};

const nvidiaIsaacRos5 = {
  name: "NVIDIA: Isaac ROS 5.0",
  url: "https://blogs.nvidia.com/blog/isaac-ros-5-0-agentic-open-source-robotics/",
};

const geminiRobotics2 = {
  name: "Google DeepMind: Gemini Robotics 2",
  url: "https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/",
};

const skildPhysicalSelfPlay = {
  name: "Skild AI: Physical Self-Play",
  url: "https://www.skild.ai/blogs/physical-self-play",
};

const advantechWeda = {
  name: "Advantech: WEDA-Powered Edge AI ecosystem",
  url: "https://www.advantech.com/en-sg/resources/news/advantech-expands-weda-powered-edge-ai-ecosystem-to-streamline-ai-from-development-to-deployment",
};

export const evidenceReviews: Record<string, SeriesEvidenceReview> = {
  "from-reference-phones-to-reference-robots": {
    modifiedDate: "2026-09-26",
    heading: "Reference robots are moving from analogy toward repeatable production platforms",
    confirmed: "Three independent signals now strengthen the productized-body thesis at different scales. InDro describes Axiom as a purchasable, configurable dual-arm Physical AI research platform and reported three units shipped at launch. Boston Dynamics says the first phase of its Robotics Metaplant Application Center is operational and Atlas robots are training on real manufacturing tasks; Hyundai Motor Group plans to begin with 25,000 Atlas units across Hyundai and Kia plants over the next few years and a new U.S. production facility capable of 30,000 robots annually. AGIBOT says more than 300 robots are being deployed at Chimelong Spaceship Park and that the event coincided with its 20,000th robot rolling off the production line. The Atlas figures are forward plans rather than completed deployments, AGIBOT's 20,000-unit milestone spans a multi-form-factor portfolio rather than 20,000 humanoids, and Axiom remains early-scale.",
    interpretation: "The reference-robot analogy is becoming less hypothetical. The market now contains purchasable research bodies, factory humanoids being trained against real workflows, and large multi-robot commercial deployments. That does not mean robot bodies have become commodities or that one universal form factor will win. It means application teams are increasingly able to start from productized embodied platforms rather than designing the complete electromechanical stack from zero.",
    prediction: "FlyPig prediction FP-PAI-002 remains strengthening, with confidence rising from 0.80 to 0.84. The key falsifier is still live: safety, task heterogeneity and service requirements may keep substantial body-level engineering specific to each deployment, and planned production capacity is not the same as demonstrated repeatable demand.",
    sources: [indroAxiom, bostonAtlasRmac, agibotChimelong],
  },
  "who-becomes-android-for-physical-ai": {
    modifiedDate: "2026-09-26",
    heading: "The common layer is becoming explicitly ROS-compatible, hardware-agnostic and model-aware",
    confirmed: "Intrinsic released Intrinsic Core under Apache 2.0 with ROS-compatible capabilities, a hardware-agnostic real-time control framework, digital twin, planning, simulation and preconfigured drivers; Intrinsic says robot arms, grippers and sensors can be swapped without rewriting drivers. NVIDIA released Isaac ROS 5.0 as a free open-source ROS-based foundation and says it contributed a standard data-handling interface upstream to ROS Lyrical for efficient operation across computing hardware. Google DeepMind reports that Gemini Robotics 2 can use the same model checkpoint across three embodiments, while Gemini Robotics On-Device 2 can adapt to new bi-arm robots with a few hours of data, typically fewer than 200 examples. These are vendor and first-party results; adaptation is still required in some cases and there is no accepted cross-vendor application contract.",
    interpretation: "The Android analogy is becoming more layered, not more literal. A plausible common surface is emerging from a ROS-compatible substrate, hardware abstraction, reusable control and planning services, general models that span embodiments, and stable capability contracts presented to higher-level applications. The strongest counter-evidence remains fragmentation: Intrinsic, NVIDIA, Google and other vendors still control different pieces of the stack, so the market could settle into several competing ecosystems rather than one common platform.",
    prediction: "FlyPig prediction FP-PAI-001 remains strengthening, with confidence rising from 0.71 to 0.77. The evidence increasingly supports abstraction across hardware and embodiments, but the prediction is not confirmed until meaningful application portability exists across independent vendor stacks rather than only within each vendor's supported environment.",
    sources: [armPhysicalAi, qualcommNeura, indroCortex, intrinsicCore, nvidiaIsaacRos5, geminiRobotics2],
  },
  "robot-skills-as-the-next-app-ecosystem": {
    modifiedDate: "2026-09-26",
    heading: "Capability contracts strengthen even as general policies absorb more behavior",
    confirmed: "Intrinsic Core exposes reusable control, motion-planning, grasp-planning, perception, simulation and calibration building blocks behind hardware-agnostic interfaces, which supports the idea that stable callable capabilities remain useful. At the same time, Google DeepMind reports one Gemini Robotics 2 checkpoint controlling multiple embodiments and rapid adaptation of Gemini Robotics On-Device 2 to new robot bodies. Skild reports that a policy based on S1 learned soccer through physical self-play using a single score objective, with behaviors such as dribbling, shielding, tackling and recovery emerging before transfer to a physical robot. NVIDIA's new Isaac 'skills' primarily package developer and AI-agent workflows, so FlyPig does not treat the label itself as proof of a portable runtime robot-skill marketplace. Google and Skild results are first-party and do not establish industry-wide portability.",
    interpretation: "The evidence now points more clearly toward a hybrid architecture. Production systems still need external boundaries for permissions, safety, validation, orchestration and observability, but the behavior behind those boundaries can increasingly be generated by a general policy rather than installed as a separate hand-authored skill. The durable primitive may therefore be a permissioned capability or tool contract, not a marketplace of individually packaged robot behaviors.",
    prediction: "FlyPig prediction FP-PAI-004 remains weakening, with confidence falling from 0.56 to 0.53. Intrinsic provides meaningful counterweight because reusable capability interfaces are becoming concrete, but Gemini Robotics 2 and Skild strengthen the falsifier that end-to-end or general policies can make explicit behavior packages less necessary. The next decisive evidence is whether third-party ecosystems standardize capability contracts above these models.",
    sources: [ambiSkillSuite, qualcommNeura, universalRobotsGen7, skildDeployment, skildS1, rewardOm1, figureHelix25, intrinsicCore, geminiRobotics2, skildPhysicalSelfPlay, nvidiaIsaacRos5],
  },
  "where-value-moves-in-modular-physical-ai": {
    modifiedDate: "2026-09-26",
    heading: "An open compatibility surface with proprietary value above and below it is emerging as a plausible platform pattern",
    confirmed: "Intrinsic Core is open-source under Apache 2.0 while Intrinsic also positions enterprise services, advanced AI models, Flowstate and cloud capabilities around that core. NVIDIA Isaac ROS 5.0 is free and open-source while NVIDIA continues to supply accelerated computing, Jetson hardware, models and developer tooling around the ROS layer. Separately, Advantech says WEDA spans Intel, Qualcomm, AMD, NVIDIA and NXP architectures with a common set of deployment, container and device-management tools. WEDA is an Edge AI platform rather than a robotics-only runtime and the reviewed announcement does not prove identical validation depth across every silicon family.",
    interpretation: "A plausible Physical AI business architecture is starting to resemble an open-core pattern: make the compatibility and developer surface broad enough to attract hardware and application diversity, then capture value through models, accelerated compute, enterprise deployment, fleet operations, data and vertical workflows. This is a market-structure interpretation rather than evidence that one company has already won the control point. Vendor-specific optimizations and vertically integrated hardware can still retain substantial bargaining power.",
    prediction: "FlyPig prediction FP-PAI-003 remains strengthening, with confidence rising from 0.72 to 0.77. The new evidence makes software lifecycle, runtime services and model behavior more visible sources of differentiation above modular hardware. FlyPig is not registering a separate 'open-core wins' prediction yet because the pattern is still early and long-term margin capture has not been demonstrated.",
    sources: [intrinsicCore, nvidiaIsaacRos5, advantechWeda],
  },
};

export function getEvidenceReview(slug: string) {
  return evidenceReviews[slug];
}
