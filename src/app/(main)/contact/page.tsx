import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact XiomTech | Get a Free Consultation",
  description:
    "Get in touch with XiomTech for a free consultation on your software project. We build enterprise web apps, SaaS platforms, POS systems, and custom digital solutions for businesses in Bangladesh, Saudi Arabia, UAE, and beyond.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
