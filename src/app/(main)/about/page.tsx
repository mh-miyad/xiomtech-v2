import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About XiomTech | Leading Software Company from Bangladesh",
  description:
    "Learn about XiomTech — a global software development company from Bangladesh building enterprise-grade SaaS platforms, POS systems, and custom digital products for businesses across Saudi Arabia, UAE, Qatar, and beyond.",
  openGraph: {
    title: "About XiomTech | Leading Software Company from Bangladesh",
    description:
      "Learn about XiomTech — a global software development company from Bangladesh building enterprise-grade SaaS platforms, POS systems, and custom digital products.",
    url: "https://xiomtech.net/about",
    siteName: "XiomTech",
    type: "website",
    images: [{ url: "https://xiomtech.net/logo.webp", width: 512, height: 512, alt: "XiomTech Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About XiomTech | Leading Software Company from Bangladesh",
    description:
      "Learn about XiomTech — building enterprise-grade SaaS platforms, POS systems, and custom digital products.",
    images: ["https://xiomtech.net/logo.webp"],
    creator: "@xiomtech",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

