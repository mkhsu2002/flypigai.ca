import { forecast, forecastSources } from "./article";

export const forecastZh = {
  ...forecast,
  path: forecast.zhPath,
  title: "Physical AI 的下一個十年：真正的 Android，可能不是一套作業系統",
  seoTitle: "Physical AI 的下一個十年：超越機器人作業系統",
  description: "FlyPig AI 對機器人分層生態的科技預測：從共通能力、持續學習生命週期，到檢驗 Android 類比所需的相容性、營運與商業證據。",
  image: "/images/insights/physical-ai-next-decade-zh.png",
  socialImage: "/images/og/pages/insights-physical-ai-next-decade-zh.png",
  imageAlt: "FlyPig AI 預測架構：七個可能形成的機器人平台層，搭配從資料到再學習的持續生命週期；跨機器人可攜性仍待驗證。",
};

const sourceNames = [
  "Intrinsic：Intrinsic Core 開源發布",
  "Qualcomm：同意收購 PickNik",
  "AWS：Physical AI Toolchain 發布",
  "Odyssey：Odyssey-3 世界模型",
  "NVIDIA：Isaac OS、Isaac Lab 3.0 與機器人參考框架",
  "Agile Robots：Agile ONE SN 研究平台發布",
  "CoreWeave：Physical AI Launchables",
  "Agility Robotics：Digit 5 採用 NVIDIA 運算平台",
];

export const forecastSourcesZh = forecastSources.map((source, index) => ({
  ...source,
  name: sourceNames[index],
  date: new Intl.DateTimeFormat("zh-TW", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${source.date} UTC`)),
}));

export const forecastLayersZh = [
  { name: "機器人硬體", role: "可配置的機體、致動器、機構，以及可維修的實體子系統。" },
  { name: "運算與控制", role: "邊緣推論、即時控制、感測器整合與電源管理。" },
  { name: "機器人中介軟體", role: "通訊、硬體抽象化、動作規劃與整合工具。" },
  { name: "基礎智慧", role: "視覺－語言－動作模型、世界模型，以及針對不同機體的控制策略。" },
  { name: "生命週期平台", role: "資料、模擬、訓練、評估、部署與回饋。" },
  { name: "能力與安全介面", role: "可呼叫能力、權限、運作限制、監控與失敗處理。" },
  { name: "代理與應用", role: "企業工作流程、任務協調與垂直產業服務。" },
];

export const forecastTestsZh = [
  {
    title: "同一套應用能否在不同機器人上運作？",
    measure: "要求不同製造商的機器人執行同一項明確定義的任務，並揭露重新訓練時數、轉接程式碼、工程時間與安全重新驗證工作。在相同條件下，比較任務成功率、人工介入與失敗復原表現。",
    falsifier: "如果每次移轉仍然是一項客製整合工程，共同的中介軟體用語就還沒有成為類似 Android 的應用平台。",
  },
  {
    title: "開源能否形成獨立的開發者生態？",
    measure: "觀察是否有持續維護的第三方應用、支援硬體清單、穩定的介面版本、獨立貢獻者，以及能在原始供應商技術堆疊之外實際部署的路徑。",
    falsifier: "如果表面開放的工具仍依賴單一供應商的運算、服務或分發管道，開放性仍可能與高度受控的生態並存。",
  },
  {
    title: "世界模型能否降低學習真實任務的成本？",
    measure: "衡量所需的真實示範資料量、模擬與訓練支出、適配時間，以及在未見過的實體任務上的成功率。比較時必須固定硬體、任務難度與評估方法。",
    falsifier: "生成影片或模擬內表現變得更好，本身並不能證明部署成本下降，也不能證明真實世界控制已經可靠。",
  },
  {
    title: "生命週期平台能否產生可重複的收入？",
    measure: "追蹤付費客戶留存、經常性收入、毛利、支援成本與實際轉換成本。雲端運算用量收入必須與軟體平台收入分開檢視。",
    falsifier: "產品發布與合作公告，不能證明軟體平台取得的價值已超過硬體製造商或整合商。",
  },
  {
    title: "參考機器人能否跨世代持續發揮價值？",
    measure: "追蹤實際交付的硬體、可取得的文件、備品、支援介面、升級路徑，以及把應用移轉到下一代機體的成本。",
    falsifier: "平台快速汰換、專有控制系統與反覆的安全資格驗證，可能阻礙類似 ODM 的參考機器人市場形成長期基礎。",
  },
  {
    title: "誰掌握最後一哩的營運知識？",
    measure: "檢視合約如何規範工作流程整合、資料存取、模型改善、可用率、責任與維護。追蹤誰保有客戶關係，以及誰能在安裝後持續改善成果。",
    falsifier: "如果機器人製造商或垂直產業營運業者掌握資料與經濟收益，通用平台可能仍只是基礎設施供應商，而不是主要價值掌握者。",
  },
];
