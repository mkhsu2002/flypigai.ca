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

const ros = { name: "ROS 2 documentation", url: "https://docs.ros.org/en/jazzy/The-ROS2-Project.html" };
const nvidiaIsaac = { name: "NVIDIA Isaac robotics platform", url: "https://developer.nvidia.com/isaac" };
const nvidiaGroot = { name: "NVIDIA Isaac GR00T", url: "https://developer.nvidia.com/isaac/gr00t" };
const nvidiaReferenceRobot = { name: "NVIDIA Isaac GR00T Reference Humanoid Robot", url: "https://nvidianews.nvidia.com/news/nvidia-open-humanoid-robot-reference-design" };
const jetson = { name: "NVIDIA Jetson", url: "https://developer.nvidia.com/embedded-computing" };
const qualcomm = { name: "Qualcomm robotics platforms", url: "https://www.qualcomm.com/products/internet-of-things/industrial/robotics" };
const raspberryPi = { name: "Raspberry Pi Compute Module 5", url: "https://www.raspberrypi.com/products/compute-module-5/" };
const xgo = { name: "Luwu Dynamics XGO", url: "https://shop.xgorobot.com/" };
const unitree = { name: "Unitree Robotics", url: "https://www.unitree.com/" };
const android = { name: "Android Open Source Project", url: "https://source.android.com/" };
const androidFaq = { name: "AOSP FAQ on open platform and compatibility", url: "https://source.android.com/docs/setup/about/faqs" };
const mediatekReference = { name: "MediaTek smartphone reference design example", url: "https://corp.mediatek.com/news-events/press-releases/mediatek-and-omnivision-release-reference-designs-for-smartphones-with-viv-video-in-video-feature-support" };
const mediatekTurnkey = { name: "MediaTek turnkey reference design example", url: "https://www.mediatek.com/press-room/mediatek-collaborates-with-google-to-bring-ar-and-lens-visual-search-experiences-to-mid-range-smartphones" };

export const physicalAiSeries: SeriesArticle[] = [
  {
    slug: "from-reference-phones-to-reference-robots",
    number: "01",
    title: "From Reference Phones to Reference Robots",
    description: "Why Physical AI may repeat one of mobile computing's most important transitions: from expensive custom hardware to reusable platforms that let many companies build on top.",
    answer: "FlyPig AI's core thesis is not that robots will become identical to smartphones. It is that Physical AI is approaching a decade in which reusable hardware, compute and software layers sharply lower the cost of building machines. History suggests that when hardware becomes widely reproducible, the most durable value often migrates toward platforms, software, applications and the workflows built on top.",
    sources: [android, androidFaq, mediatekReference, mediatekTurnkey, xgo, unitree, nvidiaReferenceRobot],
    sections: [
      {
        heading: "Every new computing era begins with a question: who needs this?",
        body: "When mobile phones first appeared, it was easy to treat them as an expensive convenience for a narrow group of users. Similar skepticism now surrounds humanoids, quadrupeds and other Physical AI systems: why does a home, warehouse, hospital or factory need one? FlyPig AI believes that is the wrong time horizon. The more useful question is what happens when hardware cost, reliability, software abstraction and developer access improve together for ten years. That is the pattern that turned mobile computing from a device category into an application economy."
      },
      {
        heading: "The smartphone lesson is not the phone. It is the platform shift.",
        body: "Android created an openly available operating-system base that device makers could customize, while chipset and reference-design vendors reduced the amount of engineering required to produce a competent handset. MediaTek's public reference-design history shows how hardware, software support and pre-integrated capabilities can shorten time to market for OEMs. The result was not one standardized phone. It was an explosion of differentiated products built on increasingly standardized foundations."
      },
      {
        heading: "Physical AI is beginning to expose the same pattern",
        body: "Robot builders can increasingly start from complete bodies, compute modules, motion controllers, perception stacks and open robotics software rather than from raw motors and custom boards. XGO demonstrates the small-scale developer version. Unitree demonstrates larger programmable quadruped and humanoid platforms. NVIDIA's 2026 Isaac GR00T Reference Humanoid Robot makes the analogy much harder to dismiss: NVIDIA explicitly combined a Unitree body, dexterous hands, Jetson Thor compute and an open GR00T software stack as a reference design for humanoid research."
      },
      {
        heading: "Hardware can be valuable without being the final value pool",
        body: "FlyPig AI does not argue that hardware companies cannot make money. Some will. The stronger historical warning is that capital-intensive hardware categories often face brutal competition once manufacturing knowledge spreads and specifications converge. Digital cameras, LCD panels and many consumer-electronics categories show how quickly technically difficult hardware can become a scale game. In that environment, the highest-leverage businesses frequently emerge above the component layer: operating systems, developer ecosystems, applications, services and proprietary user or operating data."
      },
      {
        heading: "The phone analogy has a hard limit",
        body: "Robots act in a physical world that is far less standardized than a phone screen. Payload, reach, terrain, safety, manipulation, battery life and duty cycle differ by use case. Physical AI is therefore unlikely to converge on one universal body. Modularization will happen by robot class and capability envelope. That makes the software abstraction above the body even more strategically important."
      },
    ],
  },
  {
    slug: "who-becomes-android-for-physical-ai",
    number: "02",
    title: "Who Becomes the Android of Physical AI?",
    description: "The defining strategic question of the series: what software layer will make heterogeneous robots programmable as a shared application platform?",
    answer: "There is no single Android of Physical AI today. ROS 2 provides foundational middleware. NVIDIA Isaac and GR00T connect simulation, robot learning, accelerated runtime and edge deployment. The eventual Android-like layer may be neither one operating system nor one model, but a compatibility contract that lets many robot bodies expose trusted capabilities to agents and applications.",
    sources: [android, androidFaq, ros, nvidiaIsaac, nvidiaGroot, nvidiaReferenceRobot],
    sections: [
      {
        heading: "Why Android mattered",
        body: "Android did more than provide software. It created a common platform around which OEMs, semiconductor vendors, developers and users could coordinate. A device maker could differentiate hardware without inventing an application ecosystem from zero, while developers could target a broader installed base. That combination of openness, compatibility and distribution is the benchmark for any serious Physical AI Android analogy."
      },
      {
        heading: "ROS is foundational, but it is not yet Android",
        body: "ROS 2 solves important distributed-robotics problems: communication, packages, tooling and interfaces between robot software components. It is closer to a powerful middleware and Linux-like foundation than to a consumer-ready platform that makes heterogeneous robots behave consistently out of the box. A deployed robot still requires substantial integration around safety, state, perception, task execution, fleet management and hardware-specific behavior."
      },
      {
        heading: "NVIDIA is assembling more of the stack",
        body: "Isaac spans simulation, accelerated robotics libraries and deployment infrastructure, while GR00T adds open data pipelines, a robot foundation model, middleware, runtime libraries and Jetson Thor for onboard inference and control. NVIDIA's reference humanoid design goes further by integrating a specific body, hands, compute and software stack. This is strong evidence that the market is moving toward reusable full-stack reference platforms, but it is not evidence that one winner has already emerged."
      },
      {
        heading: "The real OS may be a capability contract",
        body: "A Physical AI platform becomes strategically important when an application does not need to know how a particular robot achieves a task. Instead of commanding joints, it should be able to request capabilities such as navigate, inspect, grasp, place, dock or hand over. The platform would then manage hardware differences, permissions, safety conditions, failure states and observability underneath."
      },
      {
        heading: "FlyPig's central question",
        body: "FlyPig AI focuses on Physical AI, but not on the physical layer alone. Our core strategic question is who creates the shared software and application environment that turns millions of increasingly affordable machines into a programmable economy. The next robotics giant may not be the company with the most impressive body. It may be the company that defines how bodies, skills, agents and applications interoperate."
      },
    ],
  },
  {
    slug: "the-qualcomm-moment-for-robotics",
    number: "03",
    title: "The Qualcomm Moment for Robotics",
    description: "How standardized edge compute and supported reference platforms could reduce the cost of building intelligent machines.",
    answer: "Physical AI needs repeatable compute platforms that combine AI acceleration, camera and sensor I/O, connectivity, lifecycle support and software tooling. Jetson, Qualcomm robotics platforms and Raspberry Pi occupy different points on that emerging spectrum. The strategic effect is larger than performance: reference compute changes who is able to build.",
    sources: [jetson, qualcomm, raspberryPi, nvidiaReferenceRobot],
    sections: [
      {
        heading: "Compute becomes a platform decision",
        body: "Once perception, local inference and multimodal models become standard robot requirements, the compute module determines more than CPU performance. It shapes camera pipelines, accelerator support, power, thermal design, connectivity, tooling, security and the software that developers can reuse."
      },
      {
        heading: "The important transition is from component to reference platform",
        body: "The smartphone industry scaled when silicon vendors stopped selling only chips and increasingly supplied software, board support, reference designs and integration guidance. Robotics is moving in the same direction. Jetson emphasizes accelerated AI and robotics software, Qualcomm brings mobile-derived efficiency and connectivity, while Raspberry Pi lowers the barrier for lighter workloads and prototypes."
      },
      {
        heading: "Reference platforms shrink the team required to build",
        body: "A startup that can inherit drivers, inference runtimes, camera support and tested interfaces can spend more time on the application and less on foundational infrastructure. This does not eliminate systems engineering. It changes the minimum viable organization needed to bring a credible robot product to market."
      },
      {
        heading: "Industrial lifecycle still separates prototypes from products",
        body: "Robots often stay in service far longer than consumer phones. Long-term module availability, security updates, thermal qualification, replaceability and support can matter more than peak AI benchmark performance. A platform becomes a true design-in standard only when it survives production reality."
      },
      {
        heading: "The strategic implication",
        body: "As edge compute becomes easier to source, compute itself becomes less of a reason for every robotics company to reinvent the stack. That pushes competitive energy upward toward robot skills, domain integration, operating data and application economics."
      },
    ],
  },
  {
    slug: "china-reference-robot-supply-chain",
    number: "04",
    title: "XGO, Unitree and the Rise of the Reference Robot Supply Chain",
    description: "What increasingly productized Chinese robot platforms reveal about the path from custom machines to reusable embodied hardware.",
    answer: "XGO and Unitree show two ends of the same structural change: developers can increasingly buy programmable robot bodies instead of beginning with drivetrain, actuation and mechanical design. NVIDIA's Unitree-based reference humanoid makes the next step explicit: a body can become one layer inside a broader Physical AI reference stack.",
    sources: [xgo, unitree, nvidiaReferenceRobot],
    sections: [
      {
        heading: "Productization is the signal",
        body: "The important development is not any single robot specification. It is that developers can increasingly purchase complete mobile, legged and humanoid platforms with control interfaces and supported compute paths rather than starting with motors, reducers, batteries and mechanical design."
      },
      {
        heading: "Desktop and full-scale platforms test different markets",
        body: "XGO lowers the entry barrier for education, prototyping and embodied-AI experimentation. Unitree operates at larger quadruped and humanoid scales. They should not be treated as equivalent products, but together they show how multiple standardized body classes can emerge."
      },
      {
        heading: "The reference-design threshold has now been crossed",
        body: "In May 2026 NVIDIA announced an open humanoid reference design built around a Unitree H2 Plus body, Sharpa hands, Jetson Thor and Isaac GR00T. That does not prove humanoid hardware has become a commodity. It does prove that a major platform company now sees value in separating the body, compute and software into a reusable reference architecture."
      },
      {
        heading: "Manufacturing scale is not the same as platform trust",
        body: "Low-cost or fast-moving hardware alone does not create a global platform. Documentation, cybersecurity, safety, certification, serviceability, spare parts and local support remain deployment constraints. A reference robot becomes strategically important only when application companies can depend on it over time."
      },
      {
        heading: "Once bodies are easier to procure, the strategic question moves upward",
        body: "The more application teams can treat the robot body as a purchasable platform, the less defensible it becomes to compete only by assembling another body. Differentiation shifts toward software, task reliability, integration, operating knowledge and ownership of the customer workflow."
      },
    ],
  },
  {
    slug: "robot-skills-as-the-next-app-ecosystem",
    number: "05",
    title: "Robot Skills as the Next App Ecosystem",
    description: "Why reusable physical capabilities may become the layer that lets AI agents operate many kinds of robots without controlling every joint directly.",
    answer: "The closest Physical AI equivalent to an app may be a trusted robot skill: a bounded capability such as inspect, grasp, dock or deliver with explicit inputs, outputs, operating constraints and failure states. Agents can compose those skills into workflows while the skill layer absorbs robot-specific implementation details.",
    sources: [ros, nvidiaIsaac, nvidiaGroot, nvidiaReferenceRobot],
    sections: [
      {
        heading: "An app is only a useful analogy up to a point",
        body: "A phone app usually owns a screen and a user session. A robot capability acts in a shared physical environment, may move mass, interact with people and must obey hardware and safety constraints. The more useful software unit is therefore not a screen-based app but a skill with a defined contract."
      },
      {
        heading: "Skills turn embodiment into callable tools",
        body: "A higher-level agent should not need to command joints or servo loops. It should reason in terms of capabilities exposed by the platform.",
        bullets: ["navigate(location)", "inspect(asset)", "pick(object)", "place(object, location)", "dock(charger)", "handover(object, person)", "report(exception)"]
      },
      {
        heading: "A real skill requires trust metadata",
        body: "Physical skills need declared hardware compatibility, confidence, failure modes, required sensing, operating envelope and safety conditions. A marketplace that distributes code without validating these boundaries would be far more dangerous than a conventional app store. Simulation evidence, runtime permissions and certification may become part of the platform itself."
      },
      {
        heading: "This is where software reuse begins to compound",
        body: "A reliable inspection or manipulation skill can potentially be reused across customers and compatible robot bodies. Reuse turns one-off integration work into software IP. The more that domain knowledge, telemetry and recovery logic are captured in the skill layer, the more difficult that layer becomes to commoditize."
      },
      {
        heading: "The application economy begins when skills become portable",
        body: "The decisive moment for Physical AI may not be when humanoids look impressive. It may be when a developer can build a useful physical workflow once and deploy it across multiple compatible machines. That is the point at which robotics starts behaving less like custom automation and more like a software platform economy."
      },
    ],
  },
  {
    slug: "where-value-moves-in-modular-physical-ai",
    number: "06",
    title: "Where Value Moves When Physical AI Becomes Modular",
    description: "A FlyPig AI value-chain thesis on models, robot OS, compute, bodies, skills, agents and vertical applications as the Physical AI stack standardizes.",
    answer: "FlyPig AI expects Physical AI to enter a major build-out decade, but we do not assume the largest long-term profits will sit in robot hardware. As hardware layers become more reproducible, capital intensity and competition can compress differentiation. The more durable control points may form around operating platforms, reusable skills, application software, proprietary operating data and vertical workflows.",
    sources: [android, androidFaq, ros, nvidiaIsaac, nvidiaGroot, nvidiaReferenceRobot, jetson, qualcomm, xgo, unitree],
    sections: [
      {
        heading: "The next decade may look like a hardware boom",
        body: "Physical AI is likely to attract enormous capital into bodies, actuators, sensors, factories and compute. That is necessary infrastructure. But infrastructure build-out and durable economic power are not the same thing. The companies financing the first wave of machines may create the installed base on which later software and application companies build higher-margin businesses."
      },
      {
        heading: "Hardware profits are possible, but hardware-only moats are fragile",
        body: "FlyPig AI's thesis is deliberately narrower than saying hardware never makes money. Exceptional hardware companies can create strong margins through scale, brand, proprietary technology or ecosystem control. The risk appears when a category matures, supply expands and buyers can compare increasingly interchangeable alternatives. At that point capital intensity remains high while differentiation can fall."
      },
      {
        heading: "The stack is separating",
        body: "Physical AI can be viewed as a layered system: foundation models, runtime and middleware, edge compute, robot bodies, reusable skills, agents and vertical applications. A company may integrate several layers, but the analytical question is where switching costs, data advantages, developer adoption and customer workflow ownership accumulate as adjacent layers standardize."
      },
      {
        heading: "Vertical context is difficult to commoditize",
        body: "A mine inspection workflow, warehouse exception process and healthcare assistance task have different safety, integration and operating requirements. The company that understands the job, connects the robot to existing systems, captures exceptions and improves the workflow over time can build an advantage that is not easily reproduced by a generic hardware vendor."
      },
      {
        heading: "FlyPig is Physical AI, but not merely physical",
        body: "FlyPig AI is interested in robot hardware because hardware determines what is physically possible. But our longer-term focus is the intelligence layer above it: architecture selection, reusable capabilities, agent orchestration, deployment knowledge and software that turns machines into repeatable operating outcomes. We do not want to predict only which robot body wins. We want to understand who becomes the Android of Physical AI, who defines the skill layer, and which applications become the first category-defining businesses."
      },
      {
        heading: "The investment question is therefore different",
        body: "Instead of asking only which humanoid, quadruped or mobile robot will ship the most units, the more durable question may be which platform becomes the common development surface for all of them. If that layer emerges, the hardware boom will have created something more consequential than machines: a new installed base for software."
      },
    ],
  },
];

export function getSeriesArticle(slug: string) {
  return physicalAiSeries.find((article) => article.slug === slug);
}
