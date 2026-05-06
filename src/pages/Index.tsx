import HeroSection from "@/components/HeroSection";
import BulletsSection from "@/components/BulletsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AuthoritySection from "@/components/AuthoritySection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="section-divider" />
      <BulletsSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <div className="section-divider" />
      <AuthoritySection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <Footer />
    </main>
  );
};

export default Index;
