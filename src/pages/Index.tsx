
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProblemsSection from "@/components/ProblemsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection />
      <FeaturesSection />
      <ProblemsSection />
      <AdvantagesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
