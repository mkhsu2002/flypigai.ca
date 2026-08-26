export const siteIdentity = {
  brandName: "FlyPig AI",
  legalName: "ICareU Global Trading Ltd.",
  url: "https://flypigai.ca",
  email: "info@flypigai.ca",
  description:
    "Canada-based Edge AI and Physical AI design intelligence connecting Canadian product needs with researched Taiwan technology capabilities.",
  address: {
    streetAddress: "11936 Woodridge Cres.",
    addressLocality: "Delta",
    addressRegion: "BC",
    postalCode: "V4E 3H5",
    addressCountry: "CA",
  },
  founder: {
    name: "M.K. Hsu",
    url: "https://mkhsu.icareu.tw/",
  },
  routes: {
    canadaAtlas: "/atlas",
    taiwanSolutions: "/Solutions",
    technologies: "/technologies",
    signals: "/signals",
    insights: "/insights",
    editorialPolicy: "/editorial-policy",
  },
  images: {
    logo: "/images/brand/flypig-ai-mark-512.png",
    defaultSocial: "/images/og/flypig-ai-default.png",
  },
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteIdentity.url).toString();
}

export function formattedAddress() {
  const address = siteIdentity.address;
  return `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}, Canada`;
}
