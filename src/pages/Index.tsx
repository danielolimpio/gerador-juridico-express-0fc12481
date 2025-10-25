import HeroSection from "@/components/HeroSection";
import ContractTypesSection from "@/components/ContractTypesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import FloatingButton from "@/components/FloatingButton";
import SEO from "@/components/SEO";


const Index = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Modelos de Contratos",
      "url": "https://modelosdecontratos.com.br",
      "logo": "https://modelosdecontratos.com.br/logo.png",
      "description": "Plataforma líder em geração de contratos jurídicos online no Brasil",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR",
        "addressLocality": "Brasil"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      },
      "sameAs": [
        "https://www.facebook.com/modelosdecontratos",
        "https://www.linkedin.com/company/modelosdecontratos"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Modelos de Contratos",
      "url": "https://modelosdecontratos.com.br",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://modelosdecontratos.com.br/buscar?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org", 
      "@type": "Service",
      "name": "Geração de Contratos Jurídicos Online",
      "description": "Serviço gratuito de geração de contratos jurídicos válidos online",
      "provider": {
        "@type": "Organization",
        "name": "Modelos de Contratos"
      },
      "areaServed": "BR",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tipos de Contratos Disponíveis",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Contrato de Aluguel Residencial"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Contrato de Compra e Venda"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Contrato de Prestação de Serviços MEI"
            }
          }
        ]
      }
    }
  ];

  return (
    <>
      <SEO 
        title="Gerador de Contratos Online Grátis - Crie em 30 Segundos | 2025"
        description="✅ Gerador de contratos grátis: aluguel, compra e venda, prestação de serviços MEI. Modelos juridicamente válidos em PDF/Word. Sem cadastro! Crie agora em 30 segundos."
        keywords="gerador de contratos grátis, criar contrato online, modelo contrato aluguel, contrato prestação serviços mei, gerar contrato digital, baixar modelo contrato pdf word, contrato online gratuito"
        canonical="https://modelosdecontratos.com.br/"
        structuredData={structuredData}
      />
      <main className="min-h-screen">
        <HeroSection />
        <ContractTypesSection />
        <HowItWorksSection />
        <FeaturesSection />
        <FloatingButton />
      </main>
    </>
  );
};

export default Index;
