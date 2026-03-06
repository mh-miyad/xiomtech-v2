import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | XiomTech",
  description:
    "Read XiomTech's Privacy Policy. We are committed to protecting your data and privacy.",
  openGraph: {
    title: "Privacy Policy | XiomTech",
    description:
      "Read XiomTech's Privacy Policy. We are committed to protecting your data and privacy.",
    url: "https://xiomtech.net/privacy-policy",
    siteName: "XiomTech",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | XiomTech",
    description: "Read XiomTech's Privacy Policy.",
    creator: "@xiomtech",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}

