import ContactCTA from "@/components/section/ContactCTA";
import ExpertiseSection from "@/components/section/ExpertiseSection";
import FAQSection from "@/components/section/FAQSection";
import HeroSection from "@/components/section/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExpertiseSection />
      <FAQSection />
      <ContactCTA />
    </main>
  );
}
