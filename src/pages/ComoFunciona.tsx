import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, FileText, Download, Share2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";


const ComoFunciona = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "1. Escolha o Tipo de Contrato",
      description: "Selecione entre mais de 15 tipos de contratos disponíveis, desde compra e venda até locação e prestação de serviços."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "2. Preencha os Dados",
      description: "Complete o formulário com as informações necessárias. Nosso sistema valida automaticamente CPF, CNPJ e outros dados importantes."
    },
    {
      icon: <Download className="w-8 h-8 text-primary" />,
      title: "3. Baixe seu Contrato",
      description: "Gere seu contrato em PDF, Word ou TXT. Todos os documentos são criados seguindo as normas legais brasileiras."
    },
    {
      icon: <Share2 className="w-8 h-8 text-primary" />,
      title: "4. Compartilhe se Necessário",
      description: "Compartilhe o link do gerador com outras pessoas ou nas redes sociais para que outros também possam criar seus contratos."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Criar Contratos Jurídicos Online",
    "description": "Aprenda a criar contratos jurídicos válidos online em 4 passos simples",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description
    }))
  };

  return (
    <>
      <SEO 
        title="Como Funciona - Aprenda a Criar Contratos Jurídicos Online"
        description="Aprenda como criar contratos jurídicos válidos online em 4 passos simples. Tutorial completo para gerar seus documentos legais rapidamente."
        keywords="como criar contrato, tutorial contratos online, passo a passo contratos jurídicos, guia contratos legais"
        canonical="https://modelodecontrato.org/como-funciona"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <div className="mb-6">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </div>

          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Como Funciona
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Criar um contrato jurídico nunca foi tão simples. Siga estes 4 passos e tenha seu documento pronto em minutos.
            </p>
          </header>

          <section className="grid gap-8 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    {step.icon}
                    <span>{step.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Pronto para Começar?
            </h2>
            <p className="text-muted-foreground mb-6">
              Crie seu primeiro contrato agora mesmo. É rápido, fácil e gratuito.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <FileText className="mr-2 h-5 w-5" />
                Gerar Meu Contrato
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default ComoFunciona;