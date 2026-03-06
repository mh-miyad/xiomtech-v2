import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service | XiomTech",
  description:
    "Review the Terms of Service for XiomTech. Understand your rights and responsibilities when using our services.",
  openGraph: {
    title: "Terms of Service | XiomTech",
    description:
      "Review the Terms of Service for XiomTech. Understand your rights and responsibilities when using our services.",
    url: "https://xiomtech.net/terms-of-service",
    siteName: "XiomTech",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | XiomTech",
    description: "Review the Terms of Service for XiomTech.",
    creator: "@xiomtech",
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return <TermsClient />;
}

