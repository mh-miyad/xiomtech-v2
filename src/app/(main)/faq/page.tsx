import type { Metadata } from "next";
import FAQClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | XiomTech",
  description:
    "Find answers to common questions about XiomTech's software products, pricing, support, and services.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
