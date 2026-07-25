import AtlasBrowsePage from "../../../atlas/AtlasBrowsePage";
import { locationItems } from "../../../atlas/browseData";

export default function ZhLocationsPage() {
  return <AtlasBrowsePage locale="zh" eyebrow="Browse by location" eyebrowZh="依地區瀏覽" title="Canadian Robotics Clusters" titleZh="加拿大機器人產業聚落" lead="Explore how robotics, AI, drones and industrial automation capabilities are distributed across Canada's regions." leadZh="探索機器人、AI、無人機與工業自動化能力在加拿大不同地區的分布。" items={locationItems} />;
}
