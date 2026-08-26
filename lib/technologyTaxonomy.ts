export const technologyTopics = [
  { id: "edge-ai-compute", title: "Edge AI compute", description: "AI SoCs, accelerators, CPUs, NPUs and compute platforms for local inference.", compare: "Performance, power, memory, software support and production lifecycle." },
  { id: "embedded-platforms", title: "Embedded platforms", description: "SOM, SMARC, OSM, SBC, Mini-ITX and rugged compute platforms.", compare: "Form factor, interfaces, thermal range, carrier strategy and replaceability." },
  { id: "vision-sensing", title: "Vision and sensing", description: "Camera pipelines, 3D depth, biometrics, sensor fusion and always-on perception.", compare: "Accuracy, latency, calibration, privacy, lighting and environmental limits." },
  { id: "connectivity", title: "Connectivity", description: "Cellular, Wi-Fi, Bluetooth, GNSS and industrial communications.", compare: "Regional certification, coverage, power, antenna design and lifecycle support." },
  { id: "memory-security", title: "Memory and device security", description: "AI memory, secure flash, firmware trust and storage-extension architectures.", compare: "Bandwidth, packaging, host compatibility, secure update and availability." },
  { id: "power-audio", title: "Power and audio", description: "Power-management ICs, digital amplifiers, DSP and supporting mixed-signal devices.", compare: "Efficiency, thermal margin, qualification, board area and evaluation support." },
  { id: "edge-software", title: "Edge software operations", description: "Fleet management, model deployment, containers, BSPs and certified operating systems.", compare: "API openness, hardware portability, lifecycle management and licensing." },
  { id: "robotics-systems", title: "Robotics systems", description: "Controllers, perception, ODM integration and Physical AI system building blocks.", compare: "Maturity, interfaces, customization scope, serviceability and deployment evidence." },
] as const;

const topicByTechnology: Record<string, (typeof technologyTopics)[number]["id"]> = {
  "2.5-inch SBC": "embedded-platforms", "3D Sensing": "vision-sensing", "5G IoT": "connectivity",
  "AI Acceleration": "edge-ai-compute", "AI Memory": "memory-security", "Always-On AI": "vision-sensing",
  Biometrics: "vision-sensing", "Core Ultra": "edge-ai-compute", DSP: "power-audio", "Depth Vision": "vision-sensing",
  "Digital Audio": "power-audio", "Edge AI": "edge-ai-compute", "Edge AI Platform": "edge-ai-compute",
  "Edge AI Software": "edge-software", Embedded: "embedded-platforms", "Endpoint AI": "edge-ai-compute",
  "Fleet Management": "edge-software", GenAI: "edge-ai-compute", "IGX Thor": "edge-ai-compute",
  "JetPack 7.2": "edge-software", "Low-Power Edge": "embedded-platforms", "Mini-ITX": "embedded-platforms",
  Modules: "embedded-platforms", "Multi-Camera Edge AI": "vision-sensing", ODM: "robotics-systems",
  OSM: "embedded-platforms", "Physical AI": "robotics-systems", "Power Management": "power-audio",
  Qualcomm: "edge-ai-compute", "Qualcomm Edge AI": "edge-ai-compute", Robotics: "robotics-systems",
  SMARC: "embedded-platforms", "Secure Flash": "memory-security", Sensing: "vision-sensing",
  "Sensor Fusion": "vision-sensing", "Smart Audio": "power-audio", "Storage Extension": "memory-security",
  Ubuntu: "edge-software", "Vision AI": "vision-sensing",
};

export function technologyTopicHref(technology: string): string {
  return `/technologies#${topicByTechnology[technology] ?? "edge-ai-compute"}`;
}
