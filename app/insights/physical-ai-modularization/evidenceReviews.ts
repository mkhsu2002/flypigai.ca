export type SeriesEvidenceReview = {
  modifiedDate: string;
  heading: string;
  confirmed: string;
  interpretation: string;
  prediction: string;
  sources: Array<{ name: string; url: string }>;
};

export const seriesUpdatedDate = "2026-10-03";

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


const qualcommPickNik = {
  name: "Qualcomm: agreement to acquire PickNik and continue open MoveIt development",
  url: "https://www.qualcomm.com/news/releases/2026/09/qualcomm-to-acquire-picknik-to-advance-the-future-of-open-roboti",
};

const amdWorldLabs = {
  name: "AMD: agreement to acquire World Labs",
  url: "https://newsroom.amd.com/news/amd-acquire-world-labs/",
};

const worldLabsAmd = {
  name: "World Labs: joining AMD",
  url: "https://www.worldlabs.ai/blog/amd-announcement",
};

const figureF02Decommission = {
  name: "Figure: F.02 Decommission",
  url: "https://www.figure.ai/news/f-02-decommission",
};

const agilityFortSafety = {
  name: "Agility and FORT Robotics: humanoid safety partnership",
  url: "https://www.agilityrobotics.com/content/agility-and-fort-robotics-announce-strategic-partnership-to-advance-humanoid-robot-safety",
};

export const evidenceReviews: Record<string, SeriesEvidenceReview> = {
  "from-reference-phones-to-reference-robots": {
    modifiedDate: "2026-10-03",
    heading: "Reference robots are scaling, but rapid hardware generations remain a lifecycle risk",
    confirmed: "The prior evidence for productized robot bodies remains intact: InDro sells a configurable Axiom research platform, Boston Dynamics is training Atlas against real manufacturing workflows, and AGIBOT reports meaningful production and deployment scale across its robot portfolio. New counter-evidence comes from Figure. On September 30, Figure said it is decommissioning the F.02 fleet as F.03 grows because maintaining F.02 no longer makes sense; it also cited custom-built actuators, proprietary hardware and the engineering burden of disassembly while already preparing F.04. This does not show that productized bodies are failing, but it does show that a commercially deployed humanoid generation can have a short platform lifecycle and tightly proprietary subsystems.",
    interpretation: "The ODM analogy for Physical AI needs a lifecycle qualifier. Application teams increasingly can start from complete or semi-complete robot platforms rather than design every joint and controller from zero, but reference bodies may still turn over quickly enough that serviceability, backward compatibility, safety recertification and proprietary electromechanics remain major costs. A reusable body is not automatically a stable long-lived standard.",
    prediction: "FlyPig prediction FP-PAI-002 remains strengthening, but confidence moves from 0.84 to 0.83. Figure F.02 is the clearest recent counter-signal to the idea that productized bodies will quickly become durable commodity-like reference platforms. The prediction would weaken further if major vendors repeatedly strand application deployments across hardware generations or if body-specific recertification and integration costs remain dominant.",
    sources: [indroAxiom, bostonAtlasRmac, agibotChimelong, figureF02Decommission],
  },
  "who-becomes-android-for-physical-ai": {
    modifiedDate: "2026-10-03",
    heading: "The common layer is becoming a strategic control point, not just a developer convenience",
    confirmed: "Qualcomm Technologies announced an agreement to acquire PickNik, longtime steward of the ROS-based MoveIt manipulation framework. Qualcomm says MoveIt 1 and MoveIt 2 are expected to remain open-source, community-driven and supported across third-party hardware, while gaining tighter integration with Dragonwing Robotics and Arduino platforms; the transaction remains subject to closing conditions. This arrives on top of Intrinsic Core's open ROS-compatible hardware abstraction, NVIDIA's open Isaac ROS foundation and Google DeepMind's multi-embodiment model work. None of these pieces is an accepted universal application contract, and vendor-specific optimization remains substantial.",
    interpretation: "The Android analogy is becoming more about control of the compatibility surface than ownership of a literal robot OS. An open framework can remain cross-platform while still becoming strategically valuable to a compute vendor because it attracts developers, normalizes interfaces and shortens the path from models to planning, manipulation and real-time control. The likely battleground is therefore layered: ROS-class substrate, hardware abstraction, models, planning and capability contracts may stay relatively open while vendors compete to make their compute and tooling the best-supported path through that layer.",
    prediction: "FlyPig prediction FP-PAI-001 remains strengthening, with confidence rising from 0.77 to 0.79. Qualcomm's move makes middleware itself a strategic acquisition target, which is stronger evidence than another compatibility announcement. The main falsifier remains unresolved: if cross-vendor application portability fails to materialize and open frameworks become thin front doors into incompatible proprietary stacks, the industry may settle into several vendor ecosystems rather than an Android-like common layer.",
    sources: [qualcommPickNik, intrinsicCore, nvidiaIsaacRos5, geminiRobotics2, armPhysicalAi, qualcommNeura],
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
    modifiedDate: "2026-10-03",
    heading: "Open interfaces are becoming distribution while platform vendors move up-stack for control",
    confirmed: "Three current events strengthen the pattern. Qualcomm agreed to acquire PickNik while committing to keep MoveIt open and cross-hardware, with tighter integration planned for Dragonwing and Arduino. AMD entered a definitive agreement to acquire World Labs, adding spatial-intelligence and model research to a compute company; World Labs says the combination is intended to span hardware, software, foundation models and applications in an end-to-end open AI ecosystem. Agility and FORT signed an MOU to extend Digit 5 safety across a pendant, on-robot communications and off-robot interfaces. The Qualcomm and AMD transactions have not yet closed, and the Agility-FORT work is a vendor-specific partnership rather than a standard.",
    interpretation: "The emerging platform pattern is more specific than 'software becomes valuable.' Open middleware and interfaces can function as the distribution surface, while strategic capture happens through optimized compute, models, world simulation, safety infrastructure, enterprise deployment, fleet operations and operating data. Qualcomm and AMD are not retreating from hardware; they are pulling higher layers closer to hardware. That means modularization may shift value upward without necessarily shifting bargaining power away from the largest silicon and platform companies.",
    prediction: "FlyPig prediction FP-PAI-003 remains strengthening, with confidence rising from 0.77 to 0.81. The evidence increasingly shows companies competing for the layers above electromechanics and raw compute. FlyPig is still not registering a separate prediction that an open-core business model will win, because neither these pending acquisitions nor current open frameworks establish long-term recurring economics, margin capture or cross-vendor switching costs.",
    sources: [qualcommPickNik, amdWorldLabs, worldLabsAmd, agilityFortSafety, intrinsicCore, nvidiaIsaacRos5, advantechWeda],
  },
};

export function getEvidenceReview(slug: string) {
  return evidenceReviews[slug];
}
