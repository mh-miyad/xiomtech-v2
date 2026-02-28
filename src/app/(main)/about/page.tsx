import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About XiomTech | Leading Software Company from Bangladesh",
  description:
    "Learn about XiomTech — a global software development company from Bangladesh building enterprise-grade SaaS platforms, POS systems, and custom digital products for businesses across Saudi Arabia, UAE, Qatar, and beyond.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
