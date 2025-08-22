import HeroSection from "@/components/HeroSection";
import ContractTypesSection from "@/components/ContractTypesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Modelos de Contratos",
    "url": "https://modelosdecontratos.com.br",
    "description": "Gerador online de contratos jurídicos válidos. Crie modelos de contratos personalizados em PDF e Word gratuitamente.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any"
  };

  return (
    <>
      <SEO 
        title="Modelos de Contratos Online - Gere Contratos Jurídicos Válidos em Minutos"
        description="Crie contratos jurídicos válidos online: compra e venda, locação, prestação de serviços, comodato e mais. Modelos profissionais, download em PDF/Word. 100% grátis!"
        keywords="modelos de contratos, contratos online, gerador de contratos, contrato compra e venda, contrato locação, contrato prestação serviços, modelos jurídicos"
        canonical="https://modelosdecontratos.com.br/"
        structuredData={structuredData}
      />
      <main className="min-h-screen">
        <HeroSection />
        <ContractTypesSection />
        <HowItWorksSection />
        <FeaturesSection />
        <Footer />
        <FloatingButton />
      </main>
    </>
  );
};

export default Index;
