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
      <BulletsSection />
      <TestimonialsSection />
      <AuthoritySection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;
