export type SeriesEvidenceReview = {
  modifiedDate: string;
  heading: string;
  confirmed: string;
  interpretation: string;
  prediction: string;
  sources: Array<{ name: string; url: string }>;
};

export const seriesUpdatedDate = "2026-09-19";

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

export const evidenceReviews: Record<string, SeriesEvidenceReview> = {
  "who-becomes-android-for-physical-ai": {
    modifiedDate: "2026-09-19",
    heading: "Abstraction is spreading from runtime layers into cross-body policies",
    confirmed: "The September evidence broadens the abstraction thesis beyond shared terminology. InDro describes Cortex and Controller as a platform-agnostic compute and control stack used across different robotic form factors. Reward AI says its OM-1 policy runs across industrial arms and humanoids while a lower control layer absorbs body-specific dynamics. Universal Robots, meanwhile, launched Gen 7 around PolyScope X with open APIs, ROS 2 communication and an SDK for AI applications. These are first-party disclosures; Reward AI's cross-body performance has not been independently reproduced, and Universal Robots remains a vendor-specific ecosystem.",
    interpretation: "The likely Physical AI control point may not be one literal robot operating system. The evidence is increasingly consistent with a layered abstraction: common capability language and runtime interfaces above hardware, general policies that can span embodiments, and vendor application environments that expose stable APIs to developers. That is closer to the economic role Android played than to a single technical clone of Android. The counter-evidence is equally important: each major architecture is still controlled by a different vendor, so platformization could harden into competing vertical ecosystems instead of converging on one common layer.",
    prediction: "FlyPig prediction FP-PAI-001 remains strengthening, with confidence rising from 0.68 to 0.71. The new evidence supports the direction of abstraction, but does not establish a winning standard. The key falsifier remains live: if applications continue to require vendor-specific stacks and cross-platform portability remains shallow, the Android analogy will have been too strong.",
    sources: [armPhysicalAi, qualcommNeura, indroCortex, rewardOm1, universalRobotsGen7],
  },
  "robot-skills-as-the-next-app-ecosystem": {
    modifiedDate: "2026-09-19",
    heading: "The explicit-skill thesis is weakening, but the interface layer is not disappearing",
    confirmed: "Universal Robots' Gen 7 platform still exposes an explicit application surface: PolyScope X provides open APIs and an SDK, UR+ distributes validated third-party software and hardware, and the platform includes PolyScope X Smart Skills. At the same time, Reward AI says OM-1 can learn a new task from human demonstration data and run one policy across different robot bodies, while Figure reports that Helix 2.5 performed three long-horizon whole-body behaviors across 30 previously unseen homes without environment-specific data collection or fine-tuning. Reward AI and Figure results are company-reported rather than independently reproduced.",
    interpretation: "The counter-thesis is now structural rather than anecdotal. Skild, Reward AI and Figure each point toward general models absorbing more task behavior internally, reducing the need for every capability to be installed as a separate software skill. But production systems still need stable boundaries for permissions, safety, validation, orchestration, billing and compatibility. The more durable primitive may therefore be an external capability contract or tool interface, while a general model generates the underlying behavior dynamically.",
    prediction: "FlyPig prediction FP-PAI-004 moves from active to weakening, with confidence falling from 0.60 to 0.56. Explicit skills remain visible in AmbiOS, Qualcomm-NEURA and Universal Robots, so the thesis is not invalidated. The decisive test is whether third-party ecosystems standardize capability interfaces above general models, or whether end-to-end policies make most named skill packages unnecessary.",
    sources: [ambiSkillSuite, qualcommNeura, universalRobotsGen7, skildDeployment, skildS1, rewardOm1, figureHelix25],
  },
};

export function getEvidenceReview(slug: string) {
  return evidenceReviews[slug];
}
