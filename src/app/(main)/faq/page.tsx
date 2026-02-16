import FAQClient from "@/app/faq/FaqClient";
import type { Metadata } from "next";

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
