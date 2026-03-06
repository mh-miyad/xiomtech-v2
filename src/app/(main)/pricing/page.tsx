import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing | XiomTech - Transparent & Affordable",
  description:
    "View pricing for XiomPOS, XiomHR, XiomAccounts and other XiomTech products. Transparent monthly and annual plans for businesses of all sizes.",
  openGraph: {
    title: "Pricing | XiomTech - Transparent & Affordable",
    description:
      "View pricing for XiomPOS, XiomHR, XiomAccounts and other XiomTech products. Transparent monthly and annual plans.",
    url: "https://xiomtech.net/pricing",
    siteName: "XiomTech",
    type: "website",
    images: [{ url: "https://xiomtech.net/logo.webp", width: 512, height: 512, alt: "XiomTech Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | XiomTech - Transparent & Affordable",
    description:
      "View pricing for XiomPOS, XiomHR, XiomAccounts and other XiomTech products.",
    images: ["https://xiomtech.net/logo.webp"],
    creator: "@xiomtech",
  },
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}

