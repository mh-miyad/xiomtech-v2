import ContactCTA from "@/components/section/ContactCTA";
import EcosystemSection from "@/components/section/EcosystemSection";
import ExpertiseSection from "@/components/section/ExpertiseSection";
import FAQSection from "@/components/section/FAQSection";
import HeroSection from "@/components/section/HeroSection";
import ProjectShowcase from "@/components/section/ProjectShowcase";
import ServiceSection from "@/components/section/ServiceSection";
import TechStackSection from "@/components/section/TechStackSection";
import TestimonialSection from "@/components/section/TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExpertiseSection />
      <ServiceSection />
      <ProjectShowcase />
      <EcosystemSection />
      <TestimonialSection />
      <TechStackSection />
      <FAQSection />
      <ContactCTA />
    </main>
  );
}
