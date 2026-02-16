import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service | XiomTech",
  description:
    "Review the Terms of Service for XiomTech. Understand your rights and responsibilities when using our services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return <TermsClient />;
}
