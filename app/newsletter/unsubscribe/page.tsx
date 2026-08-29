import type { Metadata } from "next";
import { Suspense } from "react";
import NewsletterUnsubscribe from "../../../components/NewsletterUnsubscribe";
import { SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { makeMetadata } from "../../seo";

export const metadata: Metadata = { ...makeMetadata({ title: "Unsubscribe from FlyPig AI Industry Signals", description: "Confirm removal from FlyPig AI Industry Signals email delivery.", path: "/newsletter/unsubscribe", enPath: "/newsletter/unsubscribe" }), robots: { index: false, follow: false } };

export default function NewsletterUnsubscribePage() {
  return <main><SiteHeader /><section className="hero shell"><p className="eyebrow">Email preferences</p><h1>Unsubscribe from Industry Signals.</h1><p className="lead">Use the signed link from your FlyPig AI email to update your subscription.</p></section><section className="section shell"><Suspense fallback={<p>Loading email preferences…</p>}><NewsletterUnsubscribe /></Suspense></section><SiteFooter /></main>;
}
