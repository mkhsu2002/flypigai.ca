import { notFound } from "next/navigation";
import AtlasCategoryPage from "../AtlasCategoryPage";
import { atlasCategories, getAtlasCategory } from "../data";

export function generateStaticParams() {
  return atlasCategories.map((category) => ({ slug: category.slug }));
}

export default async function AtlasCategoryRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getAtlasCategory(slug);
  if (!category) notFound();
  return <AtlasCategoryPage category={category} />;
}
