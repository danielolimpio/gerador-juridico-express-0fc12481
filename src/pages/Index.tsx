import HeroSection from "@/components/HeroSection";
import ContractTypesSection from "@/components/ContractTypesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import FloatingButton from "@/components/FloatingButton";
import SEO from "@/components/SEO";


const Index = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Modelo de Contrato",
      "url": "https://modelodecontrato.org",
      "logo": "https://modelodecontrato.org/logo.png",
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
        "https://www.facebook.com/modelodecontrato",
        "https://www.linkedin.com/company/modelodecontrato"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Modelo de Contrato",
      "url": "https://modelodecontrato.org",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://modelodecontrato.org/buscar?q={search_term_string}",
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
        "name": "Modelo de Contrato"
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
        title="Gerador de Contratos Online Grátis - Crie em 30 Segundos"
        description="Gerador de contratos grátis: aluguel, compra e venda, prestação de serviços MEI. Modelos juridicamente válidos em PDF/Word. Sem cadastro, crie em 30 segundos."
        keywords="gerador de contratos grátis, criar contrato online, modelo contrato aluguel, contrato prestação serviços mei, gerar contrato digital, baixar modelo contrato pdf word, contrato online gratuito"
        canonical="https://modelodecontrato.org/"
        structuredData={structuredData}
      />
      <main className="min-h-screen">
        <HeroSection />
        <ContractTypesSection />
        <HowItWorksSection />
        <FeaturesSection />
        <BlogPreviewSection />
        <FloatingButton />
      </main>
    </>
  );
};

export default Index;
