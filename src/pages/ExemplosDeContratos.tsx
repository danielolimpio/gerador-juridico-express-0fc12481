import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Download, Eye, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import AdBanner from "@/components/AdBanner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { generateContractText } from "@/lib/contractTemplates";
import { ScrollArea } from "@/components/ui/scroll-area";

const ExemplosDeContratos = () => {
  const navigate = useNavigate();
  const [selectedContract, setSelectedContract] = useState<string | null>(null);
  const [contractText, setContractText] = useState<string>("");

  // Dados fictícios para cada tipo de contrato
  const contractExamples = {
    "compra-venda-veiculo": {
      vendedor_nome: "João Carlos Silva",
      vendedor_nacionalidade: "brasileiro",
      vendedor_estado_civil: "casado",
      vendedor_profissao: "comerciante",
      vendedor_cpf: "123.456.789-00",
      vendedor_rg: "12.345.678-9",
      vendedor_endereco: "Rua das Flores",
      vendedor_numero: "150",
      vendedor_bairro: "Centro",
      vendedor_cidade: "São Paulo",
      vendedor_estado: "SP",
      vendedor_cep: "01234-567",
      vendedor_email: "joao.silva@email.com",
      vendedor_whatsapp: "(11) 98765-4321",
      comprador_nome: "Maria Oliveira Santos",
      comprador_nacionalidade: "brasileira",
      comprador_estado_civil: "solteira",
      comprador_profissao: "professora",
      comprador_cpf: "987.654.321-00",
      comprador_rg: "98.765.432-1",
      comprador_endereco: "Avenida Paulista",
      comprador_numero: "2000",
      comprador_bairro: "Bela Vista",
      comprador_cidade: "São Paulo",
      comprador_estado: "SP",
      comprador_cep: "01310-200",
      comprador_email: "maria.santos@email.com",
      comprador_whatsapp: "(11) 91234-5678",
      veiculo_marca: "Toyota",
      veiculo_modelo: "Corolla XEi",
      veiculo_ano: "2020",
      veiculo_placa: "ABC-1234",
      veiculo_chassi: "9BR53ZEC0L8123456",
      veiculo_renavam: "12345678901",
      veiculo_cor: "Prata",
      veiculo_km: "45.000",
      valor_venda: "85.000,00",
      valor_extenso: "oitenta e cinco mil reais",
      forma_pagamento: "50% à vista e o restante em 10 parcelas mensais de R$ 4.250,00",
      data_entrega: "15/02/2025",
      multas_pendentes: "Não há multas pendentes",
      ipva_situacao: "Quitado até o ano de 2024",
      observacoes: "Veículo em excelente estado de conservação, revisões em dia"
    },
    "doacao": {
      doador_nome: "Roberto Ferreira Lima",
      doador_nacionalidade: "brasileiro",
      doador_estado_civil: "viúvo",
      doador_profissao: "aposentado",
      doador_cpf: "111.222.333-44",
      doador_rg: "11.222.333-4",
      doador_endereco: "Rua dos Lírios",
      doador_numero: "789",
      doador_bairro: "Jardim América",
      doador_cidade: "Rio de Janeiro",
      doador_estado: "RJ",
      doador_cep: "22000-000",
      doador_email: "roberto.lima@email.com",
      doador_whatsapp: "(21) 99876-5432",
      donatario_nome: "Ana Paula Ferreira",
      donatario_nacionalidade: "brasileira",
      donatario_estado_civil: "casada",
      donatario_profissao: "médica",
      donatario_cpf: "555.666.777-88",
      donatario_rg: "55.666.777-8",
      donatario_endereco: "Avenida Atlântica",
      donatario_numero: "1500",
      donatario_bairro: "Copacabana",
      donatario_cidade: "Rio de Janeiro",
      donatario_estado: "RJ",
      donatario_cep: "22010-000",
      donatario_email: "ana.ferreira@email.com",
      donatario_whatsapp: "(21) 98765-4321",
      bem_tipo: "Imóvel - Apartamento",
      bem_descricao: "Apartamento 302, Edifício Solar dos Lagos, com área de 120m², 3 quartos, 2 banheiros, sala, cozinha, área de serviço e 2 vagas de garagem",
      bem_localizacao: "Rua das Acácias, nº 456, Bairro Jardim Botânico, Rio de Janeiro/RJ",
      matricula_registro: "123.456 do 1º Registro de Imóveis do Rio de Janeiro",
      valor_estimado: "650.000,00",
      valor_extenso: "seiscentos e cinquenta mil reais",
      tipo_doacao: "pura e simples",
      encargos: "Não há encargos",
      condicoes: "Não há condições",
      reserva_usufruto: "não",
      clausula_reversao: "não"
    }
  };

  const examples = [
    {
      title: "Contrato de Compra e Venda de Veículo",
      description: "Exemplo completo de contrato para venda de automóvel usado entre pessoas físicas.",
      contractId: "compra-venda-veiculo",
      preview: "CONTRATO DE COMPRA E VENDA DE VEÍCULO\n\nVENDEDOR: João Carlos Silva, brasileiro, casado, comerciante...",
    },
    {
      title: "Contrato de Doação",
      description: "Modelo de contrato para doação de imóvel entre familiares.",
      contractId: "doacao",
      preview: "CONTRATO DE DOAÇÃO\n\nDOADOR: Roberto Ferreira Lima, brasileiro, viúvo, aposentado...",
    }
  ];

  const handleViewContract = (contractId: string) => {
    const exampleData = contractExamples[contractId as keyof typeof contractExamples];
    if (exampleData) {
      const text = generateContractText(contractId, exampleData);
      setContractText(text);
      setSelectedContract(contractId);
    }
  };

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
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewContract(example.contractId)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Visualizar
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

          {/* Dialog de Visualização */}
          <Dialog open={!!selectedContract} onOpenChange={() => setSelectedContract(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh]">
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span>
                    {examples.find(e => e.contractId === selectedContract)?.title}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedContract(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[70vh] w-full">
                <div className="bg-muted p-6 rounded-lg">
                  <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
                    {contractText}
                  </pre>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default ExemplosDeContratos;