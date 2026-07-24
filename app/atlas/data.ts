export type AtlasCompany = {
  name: string;
  location: string;
  focus: string;
  description: string;
  url: string;
  tags: string[];
};

export type AtlasCategory = {
  slug: string;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  layer: string;
  layerZh: string;
  companies: AtlasCompany[];
};

export const atlasCategories: AtlasCategory[] = [
  {
    slug: "robotics-manufacturers",
    title: "Robotics Manufacturers",
    titleZh: "機器人製造商",
    layer: "Platforms",
    layerZh: "整機與平台",
    summary: "Canadian companies building mobile robots, robotic arms, humanoids, service robots and subsea systems.",
    summaryZh: "製造移動機器人、機械手臂、人形機器人、服務型機器人與水下系統的加拿大代表企業。",
    companies: [
      { name: "Clearpath Robotics", location: "Kitchener, Ontario", focus: "Research mobile robots", description: "Developer of unmanned ground vehicles and mobile robotics platforms used by research and development teams worldwide.", url: "https://clearpathrobotics.com/", tags: ["UGV", "ROS", "Research"] },
      { name: "Sanctuary AI", location: "Vancouver, British Columbia", focus: "Physical AI and dexterous robotics", description: "Develops production-oriented Physical AI, robotic hands and automation systems for complex industrial tasks.", url: "https://sanctuary.ai/", tags: ["Physical AI", "Humanoid", "Dexterity"] },
      { name: "Kinova", location: "Boisbriand, Quebec", focus: "Robotic arms", description: "Designs and manufactures lightweight robotic arms for assistive, medical, research and industrial applications.", url: "https://www.kinovarobotics.com/", tags: ["Robot Arms", "Medical", "Research"] },
      { name: "Avidbots", location: "Kitchener, Ontario", focus: "Autonomous cleaning robots", description: "Builds autonomous commercial floor-cleaning robots and fleet software for large facilities.", url: "https://avidbots.com/", tags: ["AMR", "Service Robotics", "Facilities"] },
      { name: "Mecademic", location: "Montreal, Quebec", focus: "Compact industrial robots", description: "Manufactures ultra-compact, high-precision industrial robot arms for laboratory and factory automation.", url: "https://www.mecademic.com/", tags: ["Industrial Robots", "Precision", "Automation"] },
      { name: "Kraken Robotics", location: "St. John's, Newfoundland and Labrador", focus: "Subsea robotics and sensing", description: "Develops subsea robotic systems, synthetic aperture sonar and marine battery technologies.", url: "https://www.krakenrobotics.com/", tags: ["Marine", "AUV", "Sonar"] }
    ]
  },
  {
    slug: "drones-autonomous-aircraft",
    title: "Drones & Autonomous Aircraft",
    titleZh: "無人機與自主飛行",
    layer: "Platforms",
    layerZh: "飛行平台",
    summary: "Canadian UAV manufacturers, operators and solution providers serving inspection, logistics, defence and public safety.",
    summaryZh: "服務巡檢、物流、國防與公共安全的加拿大無人機製造商、營運商與解決方案業者。",
    companies: [
      { name: "InDro Robotics", location: "Sidney, British Columbia", focus: "Drones and autonomous robots", description: "Develops, integrates and operates UAV and ground robotic systems for complex missions and research.", url: "https://indrorobotics.ca/", tags: ["UAV", "UGV", "Integration"] },
      { name: "Draganfly", location: "Saskatoon, Saskatchewan", focus: "UAV systems and services", description: "Long-established Canadian drone company providing aircraft, sensors, software and mission services.", url: "https://draganfly.com/", tags: ["UAV", "Public Safety", "Sensors"] },
      { name: "Volatus Aerospace", location: "Toronto, Ontario", focus: "Drone operations and intelligence", description: "Provides remotely piloted aircraft services, training, equipment and aerial intelligence across multiple industries.", url: "https://volatusaerospace.com/", tags: ["RPAS", "Services", "Training"] },
      { name: "SkyX", location: "Toronto, Ontario", focus: "Long-range infrastructure inspection", description: "Develops autonomous aerial systems and analytics for pipeline and other long-distance infrastructure inspection.", url: "https://skyx.com/", tags: ["Inspection", "Energy", "Autonomy"] },
      { name: "AERIUM Analytics", location: "Calgary, Alberta", focus: "Industrial drone solutions", description: "Deploys drone-based wildlife, infrastructure and environmental solutions in heavily regulated industries.", url: "https://www.aeriumanalytics.com/", tags: ["Airports", "Energy", "Environment"] },
      { name: "Pegasus Imagery", location: "Sturgeon County, Alberta", focus: "BVLOS aerial intelligence", description: "Develops remotely piloted aircraft and data services for emergency response, public safety and industrial operations.", url: "https://pegasusimagery.ca/", tags: ["BVLOS", "Public Safety", "Mapping"] }
    ]
  },
  {
    slug: "automation-integrators",
    title: "Automation & Robotics Integrators",
    titleZh: "自動化與機器人整合商",
    layer: "Integration",
    layerZh: "系統整合",
    summary: "Engineering companies that turn robotics, controls and software into deployable production systems.",
    summaryZh: "將機器人、控制系統與軟體整合為可落地生產系統的加拿大工程服務企業。",
    companies: [
      { name: "ATS Corporation", location: "Cambridge, Ontario", focus: "Industrial automation", description: "Global automation company founded in Canada, delivering engineered manufacturing and assembly systems.", url: "https://www.atsautomation.com/", tags: ["Manufacturing", "Life Sciences", "Automation"] },
      { name: "CONVERGIX Automation Solutions", location: "London, Ontario", focus: "Automation integration", description: "Integrates robotics, controls, data and production technologies across industrial sectors.", url: "https://convergixautomation.com/", tags: ["Robotics", "Controls", "Integration"] },
      { name: "Brock Solutions", location: "Kitchener, Ontario", focus: "Industrial systems integration", description: "Provides controls, manufacturing execution, airport and transportation automation solutions.", url: "https://www.brocksolutions.com/", tags: ["MES", "Airports", "Controls"] },
      { name: "Eclipse Automation", location: "Cambridge, Ontario", focus: "Custom automation systems", description: "Designs and builds complex automated production equipment for life sciences, energy and transportation markets.", url: "https://www.eclipseautomation.com/", tags: ["Custom Machines", "Manufacturing", "Engineering"] },
      { name: "Promation", location: "Oakville, Ontario", focus: "Robotic manufacturing systems", description: "Builds automation, robotic assembly and testing systems for automotive, nuclear and other industries.", url: "https://www.promation.com/", tags: ["Robotics", "Nuclear", "Automotive"] },
      { name: "Apex Motion Control", location: "Surrey, British Columbia", focus: "Food and packaging robotics", description: "Develops compact robotic automation systems for food production, packaging and material handling.", url: "https://apexmotion.com/", tags: ["Food", "Packaging", "Robotics"] }
    ]
  },
  {
    slug: "components-vision-navigation",
    title: "Components, Vision & Navigation",
    titleZh: "關鍵零組件、視覺與導航",
    layer: "Enabling technology",
    layerZh: "核心技術層",
    summary: "Canadian-developed sensing, imaging, positioning, embedded software and robotic subsystems.",
    summaryZh: "加拿大研發的感測、成像、定位、嵌入式軟體與機器人子系統。",
    companies: [
      { name: "LMI Technologies", location: "Burnaby, British Columbia", focus: "3D machine vision", description: "Develops smart 3D sensors and inspection technologies for factory automation and quality control.", url: "https://lmi3d.com/", tags: ["3D Vision", "Inspection", "Sensors"] },
      { name: "Teledyne DALSA", location: "Waterloo, Ontario", focus: "Machine vision and imaging", description: "Designs industrial cameras, image sensors and vision technologies for demanding applications.", url: "https://www.teledynedalsa.com/", tags: ["Imaging", "Cameras", "Semiconductors"] },
      { name: "Pleora Technologies", location: "Ottawa, Ontario", focus: "Sensor connectivity", description: "Provides video interfaces and sensor networking technologies for machine vision and autonomous systems.", url: "https://www.pleora.com/", tags: ["Vision", "Connectivity", "Edge Processing"] },
      { name: "NovAtel", location: "Calgary, Alberta", focus: "GNSS and positioning", description: "Develops high-precision positioning, navigation and autonomy technologies within Hexagon's ecosystem.", url: "https://novatel.com/", tags: ["GNSS", "Navigation", "Autonomy"] },
      { name: "MDA Space", location: "Brampton, Ontario", focus: "Space robotics", description: "Builds space robotics, satellite systems and geointelligence technologies, including Canadarm heritage systems.", url: "https://mda.space/", tags: ["Space Robotics", "Sensors", "Satellites"] },
      { name: "BlackBerry QNX", location: "Ottawa, Ontario", focus: "Safety-critical embedded software", description: "Provides real-time operating systems and middleware used in automotive, robotics and other safety-critical products.", url: "https://blackberry.qnx.com/", tags: ["RTOS", "Embedded", "Safety"] }
    ]
  },
  {
    slug: "research-innovation",
    title: "Research & Innovation Ecosystem",
    titleZh: "研究與創新生態系",
    layer: "Research",
    layerZh: "研究與人才",
    summary: "Major Canadian research institutions and AI hubs supporting robotics, autonomy and commercialization.",
    summaryZh: "支援機器人、自主系統、AI 研究與商業化的加拿大重要研究機構與人才中心。",
    companies: [
      { name: "National Research Council Canada", location: "Canada-wide", focus: "Applied research and commercialization", description: "Canada's federal research organization supporting advanced manufacturing, aerospace, AI and robotics innovation.", url: "https://nrc.canada.ca/", tags: ["Research", "Funding", "Commercialization"] },
      { name: "Vector Institute", location: "Toronto, Ontario", focus: "Artificial intelligence", description: "AI research institute connecting academic talent with industry and public-sector adoption.", url: "https://vectorinstitute.ai/", tags: ["AI", "Research", "Industry"] },
      { name: "Mila", location: "Montreal, Quebec", focus: "Machine learning research", description: "Quebec AI institute known for foundational machine learning research, talent development and responsible AI.", url: "https://mila.quebec/", tags: ["Machine Learning", "Research", "Talent"] },
      { name: "Amii", location: "Edmonton, Alberta", focus: "Applied AI", description: "Alberta-based AI institute advancing research, industry adoption and commercialization.", url: "https://www.amii.ca/", tags: ["AI", "Commercialization", "Talent"] },
      { name: "Waterloo RoboHub", location: "Waterloo, Ontario", focus: "Robotics research", description: "University of Waterloo facility supporting multidisciplinary robotics research across aerial, ground and humanoid systems.", url: "https://uwaterloo.ca/robohub/", tags: ["Robotics", "University", "Testing"] },
      { name: "Robotics Institute at the University of Toronto", location: "Toronto, Ontario", focus: "Robotics and autonomy", description: "Multidisciplinary institute connecting robotics research across engineering, computer science and medicine.", url: "https://robotics.utoronto.ca/", tags: ["Robotics", "Autonomy", "University"] }
    ]
  },
  {
    slug: "industrial-adopters",
    title: "Industrial Adopters & Operators",
    titleZh: "產業應用與營運業者",
    layer: "Demand",
    layerZh: "需求與應用端",
    summary: "Large Canadian operators in sectors where robotics, drones and autonomous inspection can create measurable value.",
    summaryZh: "在機器人、無人機與自主巡檢具有明確應用價值的加拿大大型營運業者。",
    companies: [
      { name: "BC Hydro", location: "British Columbia", focus: "Electric utility", description: "Provincial electricity utility with extensive generation, transmission and field infrastructure suitable for remote inspection technologies.", url: "https://www.bchydro.com/", tags: ["Utilities", "Inspection", "Infrastructure"] },
      { name: "Hydro One", location: "Ontario", focus: "Electric transmission and distribution", description: "Major electricity transmission and distribution operator with a large geographically dispersed asset base.", url: "https://www.hydroone.com/", tags: ["Utilities", "Grid", "Field Operations"] },
      { name: "FortisBC", location: "British Columbia", focus: "Energy utility", description: "Electricity and natural gas utility operating pipelines, generation and distribution infrastructure.", url: "https://www.fortisbc.com/", tags: ["Utilities", "Pipelines", "Inspection"] },
      { name: "Canadian National Railway", location: "Montreal, Quebec", focus: "Freight rail", description: "National freight railway operating tracks, yards and intermodal facilities across Canada and the United States.", url: "https://www.cn.ca/", tags: ["Rail", "Logistics", "Infrastructure"] },
      { name: "Suncor", location: "Calgary, Alberta", focus: "Energy and mining operations", description: "Integrated energy company operating large-scale industrial sites where autonomy and remote inspection have significant potential.", url: "https://www.suncor.com/", tags: ["Energy", "Mining", "Autonomy"] },
      { name: "Teck Resources", location: "Vancouver, British Columbia", focus: "Mining", description: "Canadian mining company operating complex sites where robotics, sensing and autonomous equipment can improve safety and productivity.", url: "https://www.teck.com/", tags: ["Mining", "Safety", "Automation"] }
    ]
  }
];

export function getAtlasCategory(slug: string) {
  return atlasCategories.find((category) => category.slug === slug);
}
