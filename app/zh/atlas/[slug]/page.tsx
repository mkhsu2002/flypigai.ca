import { notFound } from "next/navigation";
import "../../../atlas/atlas.css";
import AtlasCategoryPage from "../../../atlas/AtlasCategoryPage";
import { atlasCategories, getAtlasCategory } from "../../../atlas/data";

export function generateStaticParams() {
  return atlasCategories.map((category) => ({ slug: category.slug }));
}

export default async function ZhAtlasCategoryRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getAtlasCategory(slug);
  if (!category) notFound();
  return <AtlasCategoryPage category={category} locale="zh" />;
}
