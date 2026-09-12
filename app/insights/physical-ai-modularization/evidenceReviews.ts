export type SeriesEvidenceReview = {
  modifiedDate: string;
  heading: string;
  confirmed: string;
  interpretation: string;
  prediction: string;
  sources: Array<{ name: string; url: string }>;
};

export const seriesUpdatedDate = "2026-09-12";

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

export const evidenceReviews: Record<string, SeriesEvidenceReview> = {
  "who-becomes-android-for-physical-ai": {
    modifiedDate: "2026-09-12",
    heading: "Common capability language is emerging, but it is not yet an Android",
    confirmed: "On September 8, Arm introduced a Robotics Capability Framework as a starting point for a common language that links real-world use cases with robot behavior and system requirements. Separately, Qualcomm and NEURA have announced plans for a standardized runtime and deployment interface across robotic platforms and a build-once, deploy-across-multiple-form-factors developer model.",
    interpretation: "These are convergent architecture signals. They suggest that major platform companies increasingly see fragmentation itself as a problem worth solving. But the evidence does not yet show an accepted cross-vendor runtime, application ABI or capability contract. Arm's framework is currently a shared language and classification effort, while the Qualcomm-NEURA interface remains a collaboration plan.",
    prediction: "FlyPig prediction FP-PAI-001 moves from active to strengthening, with confidence rising modestly from 0.65 to 0.68. The thesis is gaining evidence, but it is not confirmed and the key falsifier remains meaningful: applications could still stay body-specific despite common terminology and vendor-led platform initiatives.",
    sources: [armPhysicalAi, qualcommNeura],
  },
  "robot-skills-as-the-next-app-ecosystem": {
    modifiedDate: "2026-09-12",
    heading: "The strongest counter-thesis is now end-to-end in-context learning",
    confirmed: "Ambi Robotics has made a production-derived AI Skill Suite available for licensing through AmbiOS and says the software isolates hardware complexity across third-party robot configurations. At the same time, Skild's S1 foundation model can take a single video demonstration as context and execute unseen, long-horizon tasks without task-specific weight updates. On September 9, Skild also reported more than 60 paying customers across multiple physical applications; those commercial figures are company-reported rather than independently audited.",
    interpretation: "The emerging application layer may not resolve into one software primitive. Explicit skills remain attractive for permissions, testing, safety boundaries and commercial packaging, while foundation models may generate or compose behavior internally without exposing every capability as a separately installed skill. A plausible architecture is therefore a stable external capability contract wrapped around increasingly general internal models.",
    prediction: "FlyPig prediction FP-PAI-004 remains active at 0.60 confidence. AmbiOS and the Qualcomm-NEURA build-once model support reusable skills, while Skild S1 directly activates the prediction's end-to-end-model falsifier. Keeping confidence unchanged is more defensible than treating either architecture as the winner today.",
    sources: [ambiSkillSuite, qualcommNeura, skildDeployment, skildS1],
  },
};

export function getEvidenceReview(slug: string) {
  return evidenceReviews[slug];
}
