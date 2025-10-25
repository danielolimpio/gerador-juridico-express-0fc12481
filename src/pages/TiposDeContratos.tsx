import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Building, Users, Gift, Car, Handshake, CreditCard, Key, Scale, GraduationCap, Briefcase, FileX, Truck, Store } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

import Breadcrumbs from "@/components/Breadcrumbs";

const TiposDeContratos = () => {
  const navigate = useNavigate();

  const contractTypes = [
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Compra e Venda",
      description: "Para transferência de bens como imóveis, veículos e móveis."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Locação Residencial",
      description: "Aluguel de casas, apartamentos e kitinetes."
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "Locação Comercial",
      description: "Aluguel de imóveis para atividade empresarial."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Prestação de Serviços",
      description: "Contratação de profissionais autônomos e consultores."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Parceria Empresarial",
      description: "Acordo entre sócios ou empresas para atuação conjunta."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Doação",
      description: "Transferência gratuita de bens entre pessoas."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Empréstimo",
      description: "Empréstimo de dinheiro entre pessoas físicas."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Comodato",
      description: "Empréstimo gratuito de bens como carros e ferramentas."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Mandato",
      description: "Autorização para alguém agir em nome de outra pessoa."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Alienação Fiduciária",
      description: "Garantia de pagamento com transferência de propriedade."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Estágio",
      description: "Contrato para estagiários não obrigatórios."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Trabalho Autônomo",
      description: "Contratação sem vínculo empregatício."
    },
    {
      icon: <FileX className="w-6 h-6" />,
      title: "Rescisão de Contrato",
      description: "Encerramento mútuo de contratos existentes."
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Locação de Veículo",
      description: "Aluguel de carros, motos e equipamentos."
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "Franquia",
      description: "Modelo básico de contrato de franquia."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Tipos de Contratos Jurídicos",
    "description": "Mais de 15 tipos de contratos jurídicos válidos para download gratuito",
    "hasPart": contractTypes.map(contract => ({
      "@type": "WebPage",
      "name": contract.title,
      "description": contract.description
    }))
  };

  return (
    <>
      <SEO 
        title="Tipos de Contratos Online - +15 Modelos Grátis para Download PDF/Word"
        description="Explore todos os tipos de contratos grátis: aluguel residencial/comercial, compra e venda, prestação de serviços MEI, trabalho autônomo. Modelos juridicamente válidos 2025."
        keywords="tipos de contratos online, modelos contratos grátis download, contrato aluguel residencial, prestação serviços mei, compra venda imovel, trabalho autonomo"
        canonical="https://modelosdecontratos.com.br/tipos-de-contratos"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <Breadcrumbs />
          
          <nav className="mb-6">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </nav>

          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              +15 Tipos de Contratos Online Grátis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modelos de contratos juridicamente válidos para download em PDF e Word. 
              Todos seguem as normas legais brasileiras atualizadas para 2025.
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contractTypes.map((contract, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {contract.icon}
                    </div>
                    <span className="text-lg">{contract.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {contract.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Não Encontrou o Contrato que Precisa?
            </h2>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco e solicite novos tipos de contratos. 
              Estamos sempre expandindo nossa biblioteca de modelos.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 mr-4"
              onClick={() => {
                window.location.href = '/';
                setTimeout(() => {
                  const contractTypesSection = document.querySelector('#contract-types-section');
                  contractTypesSection?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              <FileText className="mr-2 h-5 w-5" />
              Começar Agora
            </Button>
            <Link to="/contato">
              <Button variant="outline" size="lg">
                Entre em Contato
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default TiposDeContratos;