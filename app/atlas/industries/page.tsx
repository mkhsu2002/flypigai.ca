import type { Metadata } from "next";
import AtlasBrowsePage from "../AtlasBrowsePage";
import { industryItems } from "../browseData";

export const metadata: Metadata = { title: "Physical AI Industries in Canada | FlyPig AI", description: "Explore Canadian industries adopting robotics, drones, automation and autonomous systems." };

export default function IndustriesPage() {
  return <AtlasBrowsePage eyebrow="Browse by industry" eyebrowZh="依產業瀏覽" title="Industries & Applications" titleZh="產業與應用地圖" lead="See where robotics, drones and autonomous systems are being applied across Canada's economy and infrastructure." leadZh="掌握機器人、無人機與自主系統在加拿大經濟及基礎建設中的主要應用場景。" items={industryItems} />;
}
