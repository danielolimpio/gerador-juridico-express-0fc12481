import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Download, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import AdBanner from "@/components/AdBanner";

const ExemplosDeContratos = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: "Contrato de Compra e Venda de Veículo",
      description: "Exemplo completo de contrato para venda de automóvel usado entre pessoas físicas.",
      preview: "CONTRATO DE COMPRA E VENDA DE VEÍCULO\n\nVENDEDOR: João Silva, brasileiro, casado, comerciante, portador do CPF nº 123.456.789-00...",
      downloadUrl: "#"
    },
    {
      title: "Contrato de Locação Residencial",
      description: "Modelo de contrato para aluguel de apartamento com prazo de 30 meses.",
      preview: "CONTRATO DE LOCAÇÃO PARA FINS RESIDENCIAIS\n\nLOCADOR: Maria Santos, brasileira, solteira, professora...",
      downloadUrl: "#"
    },
    {
      title: "Contrato de Prestação de Serviços",
      description: "Exemplo de contrato para serviços de consultoria em marketing digital.",
      preview: "CONTRATO DE PRESTAÇÃO DE SERVIÇOS\n\nCONTRATANTE: Empresa ABC Ltda, CNPJ 12.345.678/0001-90...",
      downloadUrl: "#"
    },
    {
      title: "Contrato de Doação",
      description: "Modelo de contrato para doação de imóvel entre familiares.",
      preview: "CONTRATO DE DOAÇÃO\n\nDOADOR: José Oliveira, brasileiro, viúvo, aposentado, portador do CPF...",
      downloadUrl: "#"
    },
    {
      title: "Contrato de Empréstimo",
      description: "Exemplo de contrato de empréstimo entre pessoas físicas com juros.",
      preview: "CONTRATO DE EMPRÉSTIMO\n\nCREDOR: Ana Costa, brasileira, casada, empresária, portador do CPF...",
      downloadUrl: "#"
    },
    {
      title: "Contrato de Comodato",
      description: "Modelo para empréstimo gratuito de equipamentos entre empresas.",
      preview: "CONTRATO DE COMODATO\n\nCOMODANTE: Tech Solutions Ltda, CNPJ 98.765.432/0001-10...",
      downloadUrl: "#"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Exemplos de Contratos Jurídicos",
    "description": "Exemplos práticos de contratos jurídicos para download gratuito",
    "hasPart": examples.map(example => ({
      "@type": "WebPage",
      "name": example.title,
      "description": example.description
    }))
  };

  return (
    <>
      <SEO 
        title="Exemplos de Contratos Jurídicos - Modelos Práticos para Download"
        description="Veja exemplos reais de contratos jurídicos: compra e venda, locação, prestação de serviços e mais. Modelos práticos prontos para download gratuito."
        keywords="exemplos contratos, modelos contratos download, contratos prontos, exemplos jurídicos, contratos práticos"
        canonical="https://modelosdecontratos.com.br/exemplos-de-contratos"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <AdBanner />
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <nav className="mb-6">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </nav>

          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Exemplos de Contratos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Veja exemplos práticos dos contratos que você pode gerar em nossa plataforma. 
              Todos os modelos seguem a legislação brasileira atual.
            </p>
          </header>

          <AdBanner />

          <section className="grid gap-8">
            {examples.map((example, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-primary" />
                      <span>{example.title}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        Visualizar
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Baixar PDF
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {example.description}
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-mono">
                      {example.preview}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          <AdBanner />

          <section className="bg-primary/10 rounded-lg p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Crie Seu Próprio Contrato
            </h2>
            <p className="text-muted-foreground mb-6">
              Use nosso gerador para criar contratos personalizados com seus dados. 
              É rápido, fácil e totalmente gratuito.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90" 
              onClick={() => {
                window.location.href = '/';
                setTimeout(() => {
                  const contractTypesSection = document.querySelector('#contract-types-section');
                  contractTypesSection?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              <FileText className="mr-2 h-5 w-5" />
              Gerar Meu Contrato
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default ExemplosDeContratos;