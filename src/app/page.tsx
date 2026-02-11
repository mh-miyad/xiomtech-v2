import ContactCTA from "@/components/section/ContactCTA";
import EcosystemSection from "@/components/section/EcosystemSection";
import ExpertiseSection from "@/components/section/ExpertiseSection";
import FAQSection from "@/components/section/FAQSection";
import HeroSection from "@/components/section/HeroSection";
import TechStackSection from "@/components/section/TechStackSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EcosystemSection />
      <ExpertiseSection />
      <TechStackSection />
      <FAQSection />
      <ContactCTA />
    </main>
  );
}
