import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing | XiomTech - Transparent & Affordable",
  description:
    "View pricing for XiomPOS, XiomHR, XiomAccounts and other XiomTech products. Transparent monthly and annual plans for businesses of all sizes.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
