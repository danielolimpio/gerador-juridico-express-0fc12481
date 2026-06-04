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
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://modelodecontrato.org/glossario-juridico?q={search_term_string}"
        },
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
        title="Modelos de Contratos Grátis em PDF e Word - Gerador Online 2026"
        description="Modelos de contratos prontos e gratuitos: contrato de aluguel, locação residencial, prestação de serviços, compra e venda. Baixe em PDF ou Word, sem cadastro e juridicamente válidos."
        keywords="modelos de contratos, modelo de contrato de aluguel, contrato de aluguel simples, contrato de aluguel pdf, contrato de aluguel residencial, contrato de locação, modelo de contrato de prestação de serviço, gerador de contratos, contrato gratuito, contrato online, como fazer um contrato de aluguel, contrato simples de aluguel, modelo de contrato de aluguel residencial, contrato para editar grátis, baixar modelo de contrato pdf word"
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
