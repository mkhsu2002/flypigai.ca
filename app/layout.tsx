import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flypigai.ca"),
  title: { default: "FlyPig AI | Robotics Market Development in Canada", template: "%s | FlyPig AI" },
  description: "FlyPig AI supports Canadian market development, industry partnerships and commercialization for robotics, drone and autonomous-system technology companies.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
