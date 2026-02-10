import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CTA from "@/components/section/CTA";
import Hero from "@/components/section/Hero";
import Projects from "@/components/section/Projects";
import Services from "@/components/section/Services";
import Testimonials from "@/components/section/Testimonials";
import WhyUs from "@/components/section/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <WhyUs />
        <CTA />
      </>
      <Footer />
    </>
  );
}
