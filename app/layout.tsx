import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flypigai.ca"),
  title: { default: "FlyPig AI", template: "%s | FlyPig AI" },
  description: "AI systems, agentic automation and Physical AI deployment for Canadian businesses and robotics manufacturers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
