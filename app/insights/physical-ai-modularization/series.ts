export type SeriesArticle = {
  slug: string;
  number: string;
  title: string;
  description: string;
  answer: string;
  sections: Array<{ heading: string; body: string; bullets?: string[] }>;
  sources: Array<{ name: string; url: string }>;
};

export const seriesTitle = "Physical AI Goes Modular";
export const seriesPath = "/insights/physical-ai-modularization";
export const seriesDate = "2026-09-05";

const ros = { name: "ROS — About ROS 2", url: "https://docs.ros.org/en/jazzy/The-ROS2-Project.html" };
const nvidiaIsaac = { name: "NVIDIA — Isaac robotics platform", url: "https://developer.nvidia.com/isaac" };
const nvidiaGroot = { name: "NVIDIA — Isaac GR00T", url: "https://developer.nvidia.com/isaac/gr00t" };
const jetson = { name: "NVIDIA — Jetson", url: "https://developer.nvidia.com/embedded-computing" };
const qualcomm = { name: "Qualcomm — Robotics platforms", url: "https://www.qualcomm.com/products/internet-of-things/industrial/robotics" };
const raspberryPi = { name: "Raspberry Pi — Compute Module", url: "https://www.raspberrypi.com/products/compute-module-5/" };
const xgo = { name: "Luwu Dynamics — XGO", url: "https://shop.xgorobot.com/" };
const unitree = { name: "Unitree Robotics", url: "https://www.unitree.com/" };

export const physicalAiSeries: SeriesArticle[] = [
  {
    slug: "from-reference-phones-to-reference-robots",
    number: "01",
    title: "From Reference Phones to Reference Robots",
    description: "Why robotics may follow smartphones from vertically integrated products toward reusable compute, control and hardware reference platforms.",
    answer: "The useful analogy is not that robots will become identical to smartphones. It is that more of the robot stack can become reusable, allowing companies to differentiate above standardized compute, control, sensing and mechanical building blocks.",
    sources: [xgo, unitree, raspberryPi],
    sections: [
      { heading: "The smartphone lesson is modularization", body: "Smartphone scale accelerated when brands no longer had to invent every layer themselves. Chipsets, operating systems, radio modules, reference designs and contract manufacturing reduced the amount of proprietary engineering required to ship a credible device. Robotics is beginning to expose a similar possibility as compute modules, motor controllers, cameras, batteries, actuators and complete robot platforms become easier to source and integrate." },
      { heading: "A reference robot is more than a parts kit", body: "A useful reference platform must hide difficult low-level work behind stable interfaces. Motion control, calibration, power management, sensor timing and mechanical integration need to be sufficiently solved that an application team can focus on perception, planning and the job to be done.", bullets: ["Standard compute and I/O reduce board-level reinvention.", "Stable motion APIs turn mechanics into callable capabilities.", "Documented interfaces make software portable across product generations.", "Manufacturing repeatability matters as much as prototype performance."] },
      { heading: "XGO shows the small-scale version", body: "Desktop robots such as XGO illustrate the direction clearly: a developer can work at the Python and AI layer without first designing a quadruped drivetrain. That does not make XGO a universal reference design, but it demonstrates what happens when embodied hardware is packaged as a programmable platform." },
      { heading: "The limit of the phone analogy", body: "Robots operate in a far less standardized physical world. Payload, reach, terrain, safety, duty cycle and manipulation requirements vary dramatically. Hardware commoditization will therefore happen by robot class and task envelope rather than through one universal body." },
    ],
  },
  {
    slug: "who-becomes-android-for-physical-ai",
    number: "02",
    title: "Who Becomes the Android of Physical AI?",
    description: "The missing software layer between robot hardware, foundation models and deployable physical skills.",
    answer: "There is not yet one Android-like Physical AI operating system. ROS 2 supplies important middleware, while platforms such as NVIDIA Isaac add simulation, perception and robot-learning infrastructure. The eventual abstraction may sit above both.",
    sources: [ros, nvidiaIsaac, nvidiaGroot],
    sections: [
      { heading: "ROS is foundational, but it is not Android", body: "ROS 2 provides a widely used framework for distributed robot software, communication, packages and tooling. Its importance is closer to a robotics middleware and Linux-like ecosystem than to a consumer-ready operating environment that makes heterogeneous robots behave consistently out of the box." },
      { heading: "A Physical AI OS needs a higher abstraction", body: "An Android-like layer would need to expose common robot capabilities while managing hardware differences beneath them.", bullets: ["Perception and sensor access", "Localization and navigation", "Manipulation and motion skills", "Model execution and planning", "Memory and task state", "Safety policies and permissions", "Fleet, updates and observability"] },
      { heading: "NVIDIA is assembling several pieces", body: "NVIDIA's Isaac ecosystem spans simulation, accelerated robotics libraries and robot-learning infrastructure, while GR00T targets general-purpose humanoid reasoning and skills. Combined with Jetson, NVIDIA can influence both the compute substrate and the software above it. That is strategically powerful, but it does not mean the industry has already converged on a single robot OS." },
      { heading: "The winning layer may be an interface, not a monolith", body: "Physical AI may standardize around capability contracts rather than one operating system. If different bodies can reliably advertise skills such as navigate, inspect, grasp and dock, agents can plan against those interfaces while vendors continue competing underneath." },
    ],
  },
  {
    slug: "the-qualcomm-moment-for-robotics",
    number: "03",
    title: "The Qualcomm Moment for Robotics",
    description: "How standardized edge compute and reference platforms could shrink the engineering burden of building intelligent machines.",
    answer: "Robotics needs repeatable compute platforms that combine AI acceleration, camera and sensor I/O, connectivity, lifecycle support and software tooling. Jetson, Qualcomm robotics platforms and lower-cost modules such as Raspberry Pi occupy different points on that emerging spectrum.",
    sources: [jetson, qualcomm, raspberryPi],
    sections: [
      { heading: "Compute becomes a platform decision", body: "Once perception and local AI become standard robot requirements, the compute module is no longer just a CPU choice. It determines model support, camera pipelines, power, thermal design, connectivity, software portability and product lifecycle." },
      { heading: "Different platforms serve different envelopes", body: "Jetson emphasizes accelerated AI and robotics development, Qualcomm brings mobile-derived efficiency and connectivity into robotics platforms, and Raspberry Pi offers an accessible general-purpose ecosystem for lighter workloads and prototyping. A modular market does not require one winner; it requires stable platform classes." },
      { heading: "Reference design changes who can build", body: "When compute, BSPs, inference runtimes and peripheral interfaces arrive as a supported platform, smaller teams can spend less time assembling infrastructure. This is the robotics equivalent of moving from custom electronics toward a known application processor and reference board." },
      { heading: "Lifecycle becomes part of the moat", body: "Industrial robots live longer than consumer phones. Long-term software support, module availability, security updates, thermal qualification and replaceability may matter more than peak benchmark performance. The platform that wins design-ins must survive production reality." },
    ],
  },
  {
    slug: "china-reference-robot-supply-chain",
    number: "04",
    title: "XGO, Unitree and the Rise of the Reference Robot Supply Chain",
    description: "What China's increasingly productized robot platforms reveal about the path from custom machines to reusable embodied hardware.",
    answer: "Chinese robot makers are demonstrating that increasingly capable quadruped, humanoid and desktop platforms can be sold as programmable products rather than bespoke research systems. The next step is not necessarily one generic robot, but a supply chain of reusable bodies and subsystems.",
    sources: [xgo, unitree],
    sections: [
      { heading: "Productization is the signal", body: "The important development is not any single robot specification. It is that developers can increasingly purchase complete mobile or legged platforms with documented control interfaces instead of starting from motors, reducers, batteries and mechanical design." },
      { heading: "Desktop and full-scale platforms test different markets", body: "XGO lowers the entry barrier for education, prototyping and embodied-AI experimentation. Unitree operates at larger quadruped and humanoid scales. Together they illustrate how multiple standardized body classes can emerge rather than one universal robot form factor." },
      { heading: "China has structural manufacturing advantages", body: "Dense electronics, motor, battery, machining and contract-manufacturing ecosystems can shorten iteration cycles and reduce hardware cost. But global deployment still depends on documentation, safety, cybersecurity, certification, serviceability and local support. Cheap hardware alone does not create a trusted platform." },
      { heading: "The strategic question moves upward", body: "As bodies become easier to procure, differentiation moves toward software, task reliability, integration and ownership of the customer workflow. Hardware remains difficult, but fewer application companies will need to own every hardware problem themselves." },
    ],
  },
  {
    slug: "robot-skills-as-the-next-app-ecosystem",
    number: "05",
    title: "Robot Skills as the Next App Ecosystem",
    description: "Why reusable physical capabilities may become the application layer that lets AI agents operate many kinds of robots.",
    answer: "The most important abstraction may be the robot skill: a bounded, testable capability such as inspect, grasp, dock or deliver. Agents can compose skills into workflows while the skill layer absorbs robot-specific implementation details.",
    sources: [ros, nvidiaIsaac, nvidiaGroot],
    sections: [
      { heading: "An app is not the right mental model", body: "A phone app usually owns a screen and user session. A robot capability is different: it acts in a shared physical environment and must respect state, permissions, safety and hardware limits. The more useful unit may therefore be a skill with explicit inputs, outputs and operating constraints." },
      { heading: "Skills turn embodiment into tools", body: "A higher-level agent could reason about a task without directly commanding joints.", bullets: ["navigate(location)", "inspect(asset)", "pick(object)", "place(object, location)", "dock(charger)", "report(exception)"] },
      { heading: "Trust requires more than an API", body: "Physical skills need declared capability boundaries, confidence, failure states and safety conditions. A skill marketplace without validation could be dangerous. Certification, simulation evidence, hardware compatibility and runtime permissioning may become core platform functions." },
      { heading: "This is where software value can compound", body: "A reliable skill can potentially be reused across customers, workflows and compatible robot bodies. That creates a path from one-off systems integration toward repeatable software IP, especially when skills are combined with domain-specific operating knowledge." },
    ],
  },
  {
    slug: "where-value-moves-in-modular-physical-ai",
    number: "06",
    title: "Where Value Moves When Physical AI Becomes Modular",
    description: "A value-chain view of models, robot OS, compute, bodies, skills, agents and vertical applications as the stack standardizes.",
    answer: "Modularization usually compresses margins in interchangeable layers and increases leverage at control points: compute platforms, software interfaces, reusable skills, proprietary operating data and vertical applications tied to measurable outcomes.",
    sources: [ros, nvidiaIsaac, nvidiaGroot, jetson, qualcomm, xgo, unitree],
    sections: [
      { heading: "The stack is separating", body: "Physical AI can be viewed as a layered system: foundation models, runtime and middleware, edge compute, robot bodies, reusable skills, agents and vertical applications. Companies may integrate several layers, but the analytical value of the model is to ask where differentiation survives as adjacent layers standardize." },
      { heading: "Commodity does not mean unimportant", body: "A standardized body or compute module can still be technically difficult and commercially large. Commoditization means buyers can compare alternatives and switch more easily. That changes bargaining power and pushes vendors to build ecosystem, support or software advantages." },
      { heading: "Vertical context is difficult to commoditize", body: "A mine inspection workflow, warehouse exception process and healthcare assistance task have different safety, integration and operating requirements. The company that understands the job, connects the robot to existing systems and owns the feedback loop may capture more durable value than a reseller of generic hardware." },
      { heading: "The opportunity is an intelligence and application layer", body: "For a company such as FlyPig AI, the strategically interesting position is not to manufacture another general robot. It is to understand the architecture, qualify technology routes, connect reusable robot capabilities to real operating requirements and gradually turn repeated integration knowledge into software and structured intelligence. This is a hypothesis to validate through deployments, not a claim that the layer is already won." },
    ],
  },
];

export function getSeriesArticle(slug: string) {
  return physicalAiSeries.find((article) => article.slug === slug);
}
