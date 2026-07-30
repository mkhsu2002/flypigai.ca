import type { Metadata } from "next";
import AtlasBrowsePage from "../../../atlas/AtlasBrowsePage";
import { locationItems } from "../../../atlas/browseData";
import { makeMetadata } from "../../../seo";

export const metadata: Metadata = makeMetadata({
  title: "加拿大機器人與 Physical AI 區域聚落",
  description: "依省份與地區探索加拿大機器人、無人機、自動化與 AI 產業聚落。",
  path: "/zh/atlas/locations",
  enPath: "/atlas/locations",
  zhPath: "/zh/atlas/locations",
  locale: "zh_TW",
});

export default function ZhLocationsPage() {
  return <AtlasBrowsePage locale="zh" eyebrow="Browse by location" eyebrowZh="依地區瀏覽" title="Canadian Robotics Clusters" titleZh="加拿大機器人產業聚落" lead="Explore how robotics, AI, drones and industrial automation capabilities are distributed across Canada's regions." leadZh="探索機器人、AI、無人機與工業自動化能力在加拿大不同地區的分布。" items={locationItems} />;
}
