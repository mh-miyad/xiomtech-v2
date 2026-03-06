import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact XiomTech | Get a Free Consultation",
  description:
    "Get in touch with XiomTech for a free consultation on your software project. We build enterprise web apps, SaaS platforms, POS systems, and custom digital solutions for businesses in Bangladesh, Saudi Arabia, UAE, and beyond.",
  openGraph: {
    title: "Contact XiomTech | Get a Free Consultation",
    description:
      "Get in touch with XiomTech for a free consultation on your software project. Enterprise web apps, SaaS platforms, POS systems.",
    url: "https://xiomtech.net/contact",
    siteName: "XiomTech",
    type: "website",
    images: [{ url: "https://xiomtech.net/logo.webp", width: 512, height: 512, alt: "Contact XiomTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact XiomTech | Get a Free Consultation",
    description:
      "Get in touch with XiomTech for a free consultation on your software project.",
    images: ["https://xiomtech.net/logo.webp"],
    creator: "@xiomtech",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

