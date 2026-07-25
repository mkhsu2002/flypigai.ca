export type BrowseItem = {
  slug: string;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  examples: string[];
};

export const technologyItems: BrowseItem[] = [
  { slug: "machine-vision", title: "Machine Vision", titleZh: "機器視覺", summary: "Cameras, 3D imaging, inspection and perception systems for autonomous machines.", summaryZh: "支援自主機器的相機、3D 成像、檢測與感知系統。", examples: ["LMI Technologies", "Teledyne DALSA", "Pleora Technologies"] },
  { slug: "lidar-sensing", title: "LiDAR & Sensing", titleZh: "LiDAR 與感測", summary: "Environmental sensing technologies used for mapping, navigation and inspection.", summaryZh: "用於建圖、導航與巡檢的環境感測技術。", examples: ["Hexagon", "Teledyne", "MDA Space"] },
  { slug: "gnss-navigation", title: "GNSS & Navigation", titleZh: "GNSS 與導航", summary: "Positioning, localization and navigation technologies for robots, vehicles and drones.", summaryZh: "供機器人、車輛與無人機使用的定位、在地化與導航技術。", examples: ["NovAtel", "Clearpath Robotics", "InDro Robotics"] },
  { slug: "edge-ai-control", title: "Edge AI & Control", titleZh: "邊緣 AI 與控制", summary: "Embedded computing, real-time control and autonomy software operating close to the machine.", summaryZh: "部署於機器端的嵌入式運算、即時控制與自主軟體。", examples: ["BlackBerry QNX", "MDA Space", "Brock Solutions"] },
  { slug: "robot-arms-actuators", title: "Robot Arms & Actuators", titleZh: "機械手臂與致動器", summary: "Manipulation platforms, joints, motion systems and precision automation hardware.", summaryZh: "操作平台、關節、運動系統與精密自動化硬體。", examples: ["Kinova", "Mecademic", "Sanctuary AI"] },
  { slug: "amr-ugv", title: "AMR & UGV", titleZh: "AMR 與地面機器人", summary: "Autonomous mobile robots and unmanned ground vehicles for research and operations.", summaryZh: "用於研究與實際營運的自主移動機器人及無人地面載具。", examples: ["Clearpath Robotics", "Avidbots", "InDro Robotics"] },
  { slug: "uav-payloads", title: "UAV Platforms & Payloads", titleZh: "無人機平台與酬載", summary: "Aircraft, sensors, communications and mission payloads for drone operations.", summaryZh: "支援無人機任務的飛行器、感測器、通訊與任務酬載。", examples: ["Draganfly", "Volatus Aerospace", "Pegasus Imagery"] },
  { slug: "physical-ai-humanoids", title: "Physical AI & Humanoids", titleZh: "Physical AI 與人形機器人", summary: "General-purpose robotic intelligence, dexterous manipulation and human-scale automation.", summaryZh: "通用機器智慧、靈巧操作與人類尺度的自動化系統。", examples: ["Sanctuary AI", "University of Toronto Robotics Institute", "Vector Institute"] },
  { slug: "marine-subsea", title: "Marine & Subsea Robotics", titleZh: "海事與水下機器人", summary: "Autonomous systems, sonar and sensing for oceans, ports and offshore infrastructure.", summaryZh: "服務海洋、港口與離岸設施的自主系統、聲納與感測技術。", examples: ["Kraken Robotics", "MDA Space", "NRC Canada"] },
  { slug: "power-batteries", title: "Power & Batteries", titleZh: "電源與電池", summary: "Energy storage, power electronics and charging systems for mobile autonomous machines.", summaryZh: "支援移動自主機器的儲能、電力電子與充電系統。", examples: ["Kraken Robotics", "NRC Canada", "University research labs"] },
  { slug: "robotics-software", title: "Robotics Software", titleZh: "機器人軟體", summary: "Fleet management, autonomy, simulation, middleware and industrial software layers.", summaryZh: "涵蓋車隊管理、自主控制、模擬、中介軟體與工業軟體層。", examples: ["BlackBerry QNX", "Clearpath Robotics", "ATS Corporation"] },
  { slug: "safety-cybersecurity", title: "Safety & Cybersecurity", titleZh: "安全與資安", summary: "Functional safety, secure communications and resilient software for connected machines.", summaryZh: "連網機器所需的功能安全、安全通訊與韌性軟體。", examples: ["BlackBerry QNX", "CSA Group", "NRC Canada"] }
];

export const industryItems: BrowseItem[] = [
  { slug: "manufacturing", title: "Manufacturing", titleZh: "製造業", summary: "Assembly, inspection, material handling and flexible automation.", summaryZh: "組裝、檢測、物料搬運與彈性自動化。", examples: ["ATS Corporation", "Eclipse Automation", "CONVERGIX"] },
  { slug: "warehousing-logistics", title: "Warehousing & Logistics", titleZh: "倉儲與物流", summary: "Mobile robotics, fleet orchestration, picking and distribution automation.", summaryZh: "移動機器人、車隊協調、揀貨與配送自動化。", examples: ["Avidbots", "Clearpath Robotics", "Canadian National Railway"] },
  { slug: "utilities", title: "Utilities & Infrastructure", titleZh: "公用事業與基礎建設", summary: "Inspection, maintenance and monitoring for power, pipelines and public infrastructure.", summaryZh: "電力、管線與公共設施的巡檢、維護與監測。", examples: ["BC Hydro", "Hydro One", "FortisBC"] },
  { slug: "mining", title: "Mining & Resources", titleZh: "礦業與資源", summary: "Autonomy, remote inspection and sensing for hazardous resource environments.", summaryZh: "危險資源環境中的自主化、遠端巡檢與感測。", examples: ["Teck Resources", "Suncor", "Kraken Robotics"] },
  { slug: "agriculture-forestry", title: "Agriculture & Forestry", titleZh: "農業與林業", summary: "Field robotics, crop intelligence, remote sensing and forestry inspection.", summaryZh: "田間機器人、作物情報、遙測與林業巡檢。", examples: ["NRC Canada", "University research labs", "Canadian drone operators"] },
  { slug: "healthcare", title: "Healthcare & Assistive Robotics", titleZh: "醫療與輔助機器人", summary: "Clinical automation, rehabilitation, assistive robotics and laboratory systems.", summaryZh: "臨床自動化、復健、輔助機器人與實驗室系統。", examples: ["Kinova", "University of Toronto Robotics Institute", "Mecademic"] },
  { slug: "public-safety", title: "Public Safety & Defence", titleZh: "公共安全與國防", summary: "Uncrewed systems, emergency response, surveillance and hazardous-duty robotics.", summaryZh: "無人系統、緊急應變、監控與危險任務機器人。", examples: ["Draganfly", "Pegasus Imagery", "InDro Robotics"] },
  { slug: "construction", title: "Construction & Built Environment", titleZh: "建築與建成環境", summary: "Site intelligence, inspection, mapping and robotic construction workflows.", summaryZh: "工地情報、巡檢、建圖與機器化施工流程。", examples: ["Volatus Aerospace", "SkyX", "LMI Technologies"] },
  { slug: "transportation", title: "Transportation & Rail", titleZh: "運輸與鐵路", summary: "Inspection, control, autonomy and maintenance across rail and transportation systems.", summaryZh: "鐵路與運輸系統的巡檢、控制、自主化與維護。", examples: ["Canadian National Railway", "Brock Solutions", "NovAtel"] },
  { slug: "ports-marine", title: "Ports & Marine", titleZh: "港口與海事", summary: "Subsea inspection, port automation, vessel intelligence and marine sensing.", summaryZh: "水下巡檢、港口自動化、船舶情報與海洋感測。", examples: ["Kraken Robotics", "MDA Space", "NRC Canada"] },
  { slug: "retail-facilities", title: "Retail & Facilities", titleZh: "零售與設施管理", summary: "Cleaning, monitoring, service robotics and facility automation.", summaryZh: "清潔、監測、服務型機器人與設施自動化。", examples: ["Avidbots", "Apex Motion Control", "Canadian facility operators"] },
  { slug: "energy-oil-gas", title: "Energy, Oil & Gas", titleZh: "能源、石油與天然氣", summary: "Long-range inspection, remote operations and predictive maintenance.", summaryZh: "長距離巡檢、遠端營運與預測性維護。", examples: ["SkyX", "AERIUM Analytics", "Suncor"] }
];

export const locationItems: BrowseItem[] = [
  { slug: "british-columbia", title: "British Columbia", titleZh: "卑詩省", summary: "A strong cluster in Physical AI, drones, robotics software and clean technology.", summaryZh: "Physical AI、無人機、機器人軟體與潔淨科技的重要聚落。", examples: ["Sanctuary AI", "InDro Robotics", "Apex Motion Control"] },
  { slug: "ontario", title: "Ontario", titleZh: "安大略省", summary: "Canada's largest concentration of industrial automation, robotics and AI research.", summaryZh: "加拿大最密集的工業自動化、機器人與 AI 研究聚落。", examples: ["Clearpath Robotics", "ATS Corporation", "Vector Institute"] },
  { slug: "quebec", title: "Quebec", titleZh: "魁北克省", summary: "Robotics, AI research, aerospace and precision automation centered around Montreal.", summaryZh: "以蒙特婁為核心的機器人、AI 研究、航太與精密自動化聚落。", examples: ["Kinova", "Mecademic", "Mila"] },
  { slug: "alberta", title: "Alberta", titleZh: "亞伯達省", summary: "Industrial drones, energy applications, AI research and resource-sector demand.", summaryZh: "工業無人機、能源應用、AI 研究與資源產業需求的重要區域。", examples: ["AERIUM Analytics", "Pegasus Imagery", "Amii"] },
  { slug: "atlantic-canada", title: "Atlantic Canada", titleZh: "加拿大大西洋省份", summary: "Marine robotics, ocean technology, defence and remote operations.", summaryZh: "海事機器人、海洋科技、國防與遠端作業的重要區域。", examples: ["Kraken Robotics", "NRC Ocean programs", "Marine research institutions"] },
  { slug: "prairies", title: "Prairies", titleZh: "草原省份", summary: "Agriculture, public safety, drone operations and industrial automation.", summaryZh: "農業、公共安全、無人機營運與工業自動化的重要區域。", examples: ["Draganfly", "Agricultural research centres", "Industrial operators"] }
];
