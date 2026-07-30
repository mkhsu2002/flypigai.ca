import { notFound } from "next/navigation";
import type { Metadata } from "next";
import "../../../atlas/atlas.css";
import AtlasCategoryPage from "../../../atlas/AtlasCategoryPage";
import { atlasCategories, getAtlasCategory } from "../../../atlas/data";
import { makeMetadata } from "../../../seo";

export function generateStaticParams() {
  return atlasCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getAtlasCategory(slug);
  if (!category) return {};
  return makeMetadata({
    title: `${category.titleZh}｜Canada Physical AI Atlas`,
    description: `${category.summaryZh} 探索 Canada Physical AI Atlas 收錄的代表性機構、市場角色與官方來源。`,
    path: `/zh/atlas/${category.slug}`,
    enPath: `/atlas/${category.slug}`,
    zhPath: `/zh/atlas/${category.slug}`,
    locale: "zh_TW",
  });
}

export default async function ZhAtlasCategoryRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getAtlasCategory(slug);
  if (!category) notFound();
  return <AtlasCategoryPage category={category} locale="zh" />;
}
