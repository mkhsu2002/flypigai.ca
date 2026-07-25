import AtlasBrowsePage from "../../../atlas/AtlasBrowsePage";
import { technologyItems } from "../../../atlas/browseData";

export default function ZhTechnologiesPage() {
  return <AtlasBrowsePage locale="zh" eyebrow="Browse by technology" eyebrowZh="依技術瀏覽" title="Physical AI Technologies" titleZh="Physical AI 技術地圖" lead="Explore the technologies that enable robots, drones and autonomous systems to perceive, decide, move and operate." leadZh="探索讓機器人、無人機與自主系統得以感知、決策、移動及執行任務的關鍵技術。" items={technologyItems} />;
}
