import AtlasBrowsePage from "../../../atlas/AtlasBrowsePage";
import { industryItems } from "../../../atlas/browseData";

export default function ZhIndustriesPage() {
  return <AtlasBrowsePage locale="zh" eyebrow="Browse by industry" eyebrowZh="依產業瀏覽" title="Industries & Applications" titleZh="產業與應用地圖" lead="See where robotics, drones and autonomous systems are being applied across Canada's economy and infrastructure." leadZh="掌握機器人、無人機與自主系統在加拿大經濟及基礎建設中的主要應用場景。" items={industryItems} />;
}
