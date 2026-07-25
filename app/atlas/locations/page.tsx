import type { Metadata } from "next";
import AtlasBrowsePage from "../AtlasBrowsePage";
import { locationItems } from "../browseData";

export const metadata: Metadata = { title: "Canadian Physical AI Clusters | FlyPig AI", description: "Explore Canada's regional robotics, drone, automation and AI clusters by province and region." };

export default function LocationsPage() {
  return <AtlasBrowsePage eyebrow="Browse by location" eyebrowZh="依地區瀏覽" title="Canadian Robotics Clusters" titleZh="加拿大機器人產業聚落" lead="Explore how robotics, AI, drones and industrial automation capabilities are distributed across Canada's regions." leadZh="探索機器人、AI、無人機與工業自動化能力在加拿大不同地區的分布。" items={locationItems} />;
}
