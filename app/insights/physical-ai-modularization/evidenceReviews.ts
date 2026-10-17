export type SeriesEvidenceReview = {
  modifiedDate: string;
  heading: string;
  confirmed: string;
  interpretation: string;
  prediction: string;
  sources: Array<{ name: string; url: string }>;
};

export const seriesUpdatedDate = "2026-10-17";

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


const awsPhysicalAi = {
  name: "AWS: Physical AI Toolchain on AWS, 7 October 2026",
  url: "https://www.aboutamazon.com/news/aws/aws-physical-ai-toolchain-build-intelligent-machines",
};

const odyssey3 = {
  name: "Odyssey: Odyssey-3 world model, 8 October 2026",
  url: "https://odyssey.systems/meet-odyssey-3",
};

const helmContracts = {
  name: "Helm.ai: company-reported $70 million commercial contracts, 8 October 2026",
  url: "https://helm.ai/post/helm-ai-signs-70-million-in-commercial-contracts",
};

const gfFdxFusion = {
  name: "GlobalFoundries: FDX Fusion FD-SOI roadmap, 9 October 2026",
  url: "https://gf.com/news-and-events/news/gf-unveils-roadmap-to-deliver-worlds-most-advanced-platform-for-physical-ai/",
};

const twelveLabsPegasus16 = {
  name: "TwelveLabs: Pegasus 1.6, 6 October 2026",
  url: "https://www.twelvelabs.io/blog/what%E2%80%99s-new-pegasus-1.6",
};

const hesaiKosmo = {
  name: "Hesai: Kosmo 3D World Data Engine launch, 14 October 2026",
  url: "https://www.hesaitech.com/9974-2/",
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
    modifiedDate: "2026-10-17",
    heading: "A common robot layer may be a lifecycle interface, not a single operating system",
    confirmed: "AWS announced the Physical AI Toolchain on October 7, providing open-source architecture guidance, code and deployment automation spanning data, NVIDIA-based simulation and model training, and edge deployment. Odyssey introduced Odyssey-3 on October 8 and reported that one learned world-model backbone can support robotic arms, humanoids and driving through separately trained action decoders or policies. Earlier evidence remains material: Qualcomm has agreed to acquire the MoveIt steward PickNik, and Intrinsic Core and Isaac ROS expose reusable robotics middleware. These are distinct, vendor-led developments: AWS does not prove cross-cloud portability, Odyssey still needs body-specific adaptation, and a shared runtime or third-party application contract has not been independently demonstrated.",
    interpretation: "The leading abstraction contest now stretches across two different levels. At execution time, middleware, sensing, planning, safety and capability interfaces determine which machines applications can command. Above that, data ingest, world reconstruction, simulation, training, validation and redeployment determine which infrastructure becomes the default developer path. These levels can be complementary but they are not interchangeable. An open reference implementation hosted around a vendor's infrastructure may attract developers without giving users the cross-platform portability implied by the Android analogy.",
    prediction: "FP-PAI-001 stays strengthening at confidence 0.79, unchanged from October 3. The developer-lifecycle pattern is visible, but not yet strong evidence for the prediction's central claim: heterogeneous robots running portable higher-level apps. The falsifier remains active if leading vendors keep integration locked to hardware-specific controls or proprietary cloud and policy tools beyond ROS-class interfaces. Watch for an independently verified cross-vendor application deployment using the same capability contract and externally operated lifecycle tools.",
    sources: [awsPhysicalAi, odyssey3, qualcommPickNik, intrinsicCore, nvidiaIsaacRos5, geminiRobotics2],
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
    modifiedDate: "2026-10-17",
    heading: "Physical AI platform capture is expanding to the world-data and learning lifecycle",
    confirmed: "The October evidence spans four distinct stages of a deployment loop. TwelveLabs released Pegasus 1.6 on October 6 with first-person video understanding, stronger entity recognition, and structured tags and timestamps usable in robotics data preparation. AWS released a Physical AI Toolchain on October 7 with open-source code and deployment automation around a cloud and NVIDIA-based simulation-to-edge flow. Odyssey released its Odyssey-3 world model on October 8 and reported adaptations using body-specific decoders for manipulators, humanoids and cars. On October 14, Hesai formally launched the Kosmo One spatial camera and Kosmo World 3D reconstruction cloud after earlier previews, and named embodied-AI partnerships with Galbot and Dexmal. Helm.ai reported $70 million in signed contracts spanning automotive, suppliers and industrial automation, which must not be read as robotics ARR or audited profit. Counter-evidence is substantial: on October 9 GlobalFoundries unveiled a power-efficient FD-SOI Physical AI manufacturing roadmap targeting 2028, while Hesai itself reported more than 10,000 cumulative actuator-module deliveries by June 2026. Product demonstrations, efficiency claims and roadmap milestones remain first-party.",
    interpretation: "A more precise platform pattern is emerging than the simple claim that value rises above hardware. Diverse suppliers are investing in real-world data capture and labeling, learned world models, simulation, training orchestration and cloud-to-edge operations. Those layers could become repeatable developer and enterprise control points. Yet the same vendors often own chips, sensing, actuation or dedicated cloud infrastructure; modular software adoption may therefore reinforce vertically integrated hardware players rather than transfer margins to independent application vendors. Spatial scenes captured at scale are not automatically validated robot action trajectories, and a training pipeline does not by itself create a common robot runtime.",
    prediction: "FP-PAI-003 remains strengthening, with confidence rising cautiously from 0.81 to 0.82. The structural evidence for an emerging data-to-deployment layer improved; evidence on where durable margin and bargaining power accrue did not improve nearly as much. The hypothesis would weaken if robotics companies cannot move data, evaluations or policy deployments between competing stacks, or if specialized sensing and silicon capture most of the economics. FlyPig has not created a new stand-alone prediction or seventh essay: testable future signals are third-party cross-stack redeployments, measured recurring software receipts and independent sim-to-real performance.",
    sources: [twelveLabsPegasus16, awsPhysicalAi, odyssey3, hesaiKosmo, helmContracts, gfFdxFusion, qualcommPickNik, amdWorldLabs, agilityFortSafety],
  },
};

export function getEvidenceReview(slug: string) {
  return evidenceReviews[slug];
}
