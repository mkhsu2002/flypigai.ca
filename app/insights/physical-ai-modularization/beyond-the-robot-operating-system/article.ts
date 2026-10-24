export const forecast = {
  path: "/insights/physical-ai-modularization/beyond-the-robot-operating-system",
  zhPath: "/zh/insights/physical-ai-modularization/beyond-the-robot-operating-system",
  title: "Physical AI’s Next Decade: The Real Android May Not Be an Operating System",
  seoTitle: "Physical AI’s Next Decade: Beyond the Robot OS",
  description: "FlyPig AI’s forecast for a layered robotics ecosystem: shared capabilities, learning lifecycles and the evidence needed to test the Android analogy.",
  date: "2026-10-24",
  horizon: "2026–2036",
  image: "/images/insights/physical-ai-next-decade.png",
  socialImage: "/images/og/pages/insights-physical-ai-next-decade.png",
  imageAlt: "FlyPig AI forecast showing seven potential robotics layers beside a data-to-relearning lifecycle, with cross-robot portability still unproven.",
};

export const forecastSources = [
  { id: "intrinsic", name: "Intrinsic — Introducing Intrinsic Core", date: "September 22, 2026", url: "https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core", evidenceId: "PAI-EV-2026-0021" },
  { id: "picknik", name: "Qualcomm — Agreement to acquire PickNik", date: "September 23, 2026", url: "https://www.qualcomm.com/news/releases/2026/09/qualcomm-to-acquire-picknik-to-advance-the-future-of-open-roboti", evidenceId: "PAI-EV-2026-0026" },
  { id: "aws", name: "AWS — Introducing AWS Physical AI Toolchain", date: "October 7, 2026", url: "https://aws.amazon.com/blogs/physical-ai/introducing-aws-physical-ai-toolchain/", evidenceId: "PAI-EV-2026-0030" },
  { id: "odyssey", name: "Odyssey — Meet Odyssey-3", date: "October 8, 2026", url: "https://odyssey.systems/meet-odyssey-3", evidenceId: "PAI-EV-2026-0031" },
  { id: "isaac", name: "NVIDIA — Isaac OS, Isaac Lab 3.0 and reference robotics frameworks", date: "October 21, 2026", url: "https://nvidianews.nvidia.com/news/nvidia-advances-isaac-platform-for-general-purpose-robotics-with-new-reference-humanoid-frameworks-simulation-pipelines-and-data", evidenceId: "PAI-EV-2026-0036" },
  { id: "agile", name: "Agile Robots — Agile ONE SN research platform announcement", date: "October 21, 2026", url: "https://www.agile-robots.com/en/news/detail/agile-robots-launches-agile-one-sn/", evidenceId: "PAI-EV-2026-0037" },
  { id: "coreweave", name: "CoreWeave — Physical AI Launchables", date: "October 21, 2026", url: "https://investors.coreweave.com/news/news-details/2026/CoreWeave-Unveils-CoreWeave-Physical-AI-Launchables-Taking-the-Setup-Work-Out-of-Robotics-and-AV-Development/default.aspx", evidenceId: "PAI-EV-2026-0039" },
  { id: "agility", name: "Agility Robotics — NVIDIA compute selection for Digit 5", date: "October 22, 2026", url: "https://www.agilityrobotics.com/content/agility-robotics-expands-nvidia-collaboration-as-it-prepares-digit-5-for-commercial-scale", evidenceId: "PAI-EV-2026-0038" },
];

export const forecastLayers = [
  { name: "Robot hardware", role: "Configurable bodies, actuators, mechanisms and serviceable physical subsystems." },
  { name: "Compute and control", role: "Edge inference, real-time control, sensor integration and power management." },
  { name: "Robotics middleware", role: "Communication, hardware abstraction, motion planning and integration tools." },
  { name: "Foundation intelligence", role: "Vision-language-action models, world models and embodiment-specific policies." },
  { name: "Lifecycle platforms", role: "Data, simulation, training, evaluation, deployment and feedback." },
  { name: "Capability and safety interfaces", role: "Callable capabilities, permissions, operating limits, monitoring and failure handling." },
  { name: "Agents and applications", role: "Enterprise workflows, task orchestration and vertical services." },
];

export const forecastTests = [
  {
    title: "Can the same application work on different robots?",
    measure: "Ask for the same declared task on robots from different manufacturers, with retraining hours, adapter code, engineering time and safety revalidation disclosed. Compare task success, interventions and failure recovery under equivalent conditions.",
    falsifier: "If every transfer remains a bespoke integration project, a common middleware vocabulary has not yet become an Android-like application platform.",
  },
  {
    title: "Does open source produce an independent developer ecosystem?",
    measure: "Look for maintained third-party applications, supported hardware matrices, stable interface versions, independent contributors and a workable route to deployment outside the originating vendor’s stack.",
    falsifier: "If ostensibly open tools depend on one vendor’s compute, services or distribution channel, openness may coexist with tightly controlled ecosystems.",
  },
  {
    title: "Do world models reduce the cost of learning real tasks?",
    measure: "Measure real demonstrations required, simulation and training spend, adaptation time and success on previously unseen physical tasks. Hold hardware, task difficulty and evaluation protocol constant.",
    falsifier: "Better generated video or in-simulation performance alone does not establish lower deployment cost or reliable control in the real world.",
  },
  {
    title: "Do lifecycle platforms earn repeatable revenue?",
    measure: "Seek paying customer retention, recurring revenue, gross margins, support cost and actual switching costs. Separate cloud compute consumption from software platform income.",
    falsifier: "Launches and collaboration announcements cannot establish that software platforms capture more value than hardware manufacturers or integrators.",
  },
  {
    title: "Do reference robots remain useful across generations?",
    measure: "Track delivered hardware, accessible documentation, spare parts, supported interfaces, upgrade paths and the cost of carrying an application to the next body generation.",
    falsifier: "Rapid platform turnover, proprietary control systems and repeated safety qualification could prevent an ODM-like reference-robot market from becoming durable.",
  },
  {
    title: "Who owns the last mile of operating knowledge?",
    measure: "Examine contracts for workflow integration, data access, model improvement, uptime, liability and maintenance. Track who retains the customer relationship and can improve outcomes after installation.",
    falsifier: "If robot makers or vertical operators retain the data and economics, a general-purpose platform may remain an infrastructure supplier rather than the central value owner.",
  },
];
