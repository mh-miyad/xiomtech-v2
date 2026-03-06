import type { Metadata } from "next";
import FAQClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | XiomTech",
  description:
    "Find answers to common questions about XiomTech's software products, pricing, support, and services.",
  openGraph: {
    title: "Frequently Asked Questions | XiomTech",
    description:
      "Find answers to common questions about XiomTech's software products, pricing, support, and services.",
    url: "https://xiomtech.net/faq",
    siteName: "XiomTech",
    type: "website",
    images: [{ url: "https://xiomtech.net/logo.webp", width: 512, height: 512, alt: "XiomTech FAQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | XiomTech",
    description:
      "Find answers to common questions about XiomTech's software products, pricing, and services.",
    images: ["https://xiomtech.net/logo.webp"],
    creator: "@xiomtech",
  },
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}

