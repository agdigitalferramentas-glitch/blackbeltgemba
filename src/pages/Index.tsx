import HeroSection from "@/components/HeroSection";
import BulletsSection from "@/components/BulletsSection";
import AuthoritySection from "@/components/AuthoritySection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BulletsSection />
      <AuthoritySection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;
