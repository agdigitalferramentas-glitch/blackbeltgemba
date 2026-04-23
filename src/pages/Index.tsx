import HeroSection from "@/components/HeroSection";
import BulletsSection from "@/components/BulletsSection";
import AuthoritySection from "@/components/AuthoritySection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BulletsSection />
      <AuthoritySection />
      <AboutSection />
    </main>
  );
};

export default Index;
