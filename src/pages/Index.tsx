import HeroSection from "@/components/HeroSection";
import ContractTypesSection from "@/components/ContractTypesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import SEO from "@/components/SEO";
import AdBanner from "@/components/AdBanner";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Gerador de Contratos Online Grátis",
    "url": "https://modelosdecontratos.com.br",
    "description": "Gerador gratuito de contratos online. Crie modelos de contratos de aluguel, compra e venda, prestação de serviços. Baixe em PDF e Word sem cadastro.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    },
    "featureList": [
      "Contrato de aluguel residencial",
      "Contrato de compra e venda de imóvel", 
      "Contrato de prestação de serviços",
      "Contrato de trabalho autônomo",
      "Download em PDF e Word",
      "Modelos editáveis grátis"
    ]
  };

  return (
    <>
      <SEO 
        title="Gerador de Contratos Online Grátis - Modelos de Contratos para Baixar em PDF"
        description="Crie contratos online grátis: aluguel residencial, compra e venda de imóvel, prestação de serviços MEI, trabalho autônomo. Modelos editáveis em PDF e Word. Sem cadastro!"
        keywords="gerador de contratos, modelos de contratos grátis, contrato de aluguel, contrato online grátis, criar contrato, baixar modelo de contrato, contrato de prestação de serviços, contrato de compra e venda, gerar contrato de aluguel"
        canonical="https://modelosdecontratos.com.br/"
        structuredData={structuredData}
      />
      <main className="min-h-screen">
        <HeroSection />
        <AdBanner />
        <ContractTypesSection />
        <AdBanner />
        <HowItWorksSection />
        <FeaturesSection />
        <AdBanner />
        <Footer />
        <FloatingButton />
      </main>
    </>
  );
};

export default Index;
