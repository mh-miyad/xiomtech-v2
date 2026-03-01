import HeroSection from "@/components/section/HeroSection";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const EcosystemSection = dynamic(() => import("@/components/section/EcosystemSection"));
const ProjectShowcase = dynamic(() => import("@/components/section/ProjectShowcase"));
const ServiceSection = dynamic(() => import("@/components/section/ServiceSection"));
const ExpertiseSection = dynamic(() => import("@/components/section/ExpertiseSection"));
const TestimonialSection = dynamic(() => import("@/components/section/TestimonialSection"));
const TechStackSection = dynamic(() => import("@/components/section/TechStackSection"));
const BlogSectionServer = dynamic(() => import("@/components/section/BlogSectionServer"));
const FAQSection = dynamic(() => import("@/components/section/FAQSection"));
const ContactCTA = dynamic(() => import("@/components/section/ContactCTA"));

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EcosystemSection />
      <ProjectShowcase />
      <ServiceSection />
      <ExpertiseSection />
      <TestimonialSection />
      <TechStackSection />
      <BlogSectionServer />
      <FAQSection />
      <ContactCTA />
    </main>
  );
}
