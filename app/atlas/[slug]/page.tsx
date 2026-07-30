import { notFound } from "next/navigation";
import type { Metadata } from "next";
import "../atlas.css";
import AtlasCategoryPage from "../AtlasCategoryPage";
import { atlasCategories, getAtlasCategory } from "../data";
import { makeMetadata } from "../../seo";

export function generateStaticParams() {
  return atlasCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getAtlasCategory(slug);
  if (!category) return {};
  return makeMetadata({
    title: `${category.title} in Canada`,
    description: `${category.summary} Explore representative organizations, market roles and official sources in the Canada Physical AI Atlas.`,
    path: `/atlas/${category.slug}`,
    enPath: `/atlas/${category.slug}`,
    zhPath: `/zh/atlas/${category.slug}`,
  });
}

export default async function AtlasCategoryRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getAtlasCategory(slug);
  if (!category) notFound();
  return <AtlasCategoryPage category={category} />;
}
