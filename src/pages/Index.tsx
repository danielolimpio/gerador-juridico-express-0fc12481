import HeroSection from "@/components/HeroSection";
import ContractTypesSection from "@/components/ContractTypesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContractTypesSection />
      <HowItWorksSection />
      <FeaturesSection />
      <Footer />
      <FloatingButton />
    </main>
  );
};

export default Index;
