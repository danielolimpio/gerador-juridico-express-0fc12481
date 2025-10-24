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
    "compra-venda": {
      vendedor_nome: "Carlos Eduardo Mendes",
      vendedor_cpf: "222.333.444-55",
      vendedor_rg: "22.333.444-5",
      vendedor_estado_civil: "casado",
      vendedor_endereco: "Rua das Palmeiras",
      vendedor_numero: "320",
      vendedor_bairro: "Jardim Paulista",
      vendedor_cidade: "São Paulo",
      vendedor_estado: "SP",
      vendedor_cep: "01415-000",
      vendedor_email: "carlos.mendes@email.com",
      vendedor_whatsapp: "(11) 99876-1234",
      comprador_nome: "Fernanda Costa Lima",
      comprador_cpf: "333.444.555-66",
      comprador_rg: "33.444.555-6",
      comprador_estado_civil: "solteira",
      comprador_endereco: "Avenida Brigadeiro Faria Lima",
      comprador_numero: "1500",
      comprador_bairro: "Pinheiros",
      comprador_cidade: "São Paulo",
      comprador_estado: "SP",
      comprador_cep: "01451-001",
      comprador_email: "fernanda.lima@email.com",
      comprador_whatsapp: "(11) 98765-9876",
      bem_descricao: "Apartamento residencial com 85m², contendo 2 quartos, 1 suíte, sala, cozinha, área de serviço e 1 vaga de garagem, localizado no 5º andar do Edifício Solar das Américas",
      valor_venda: "450.000,00",
      forma_pagamento: "À vista",
      data_entrega: "01/03/2025"
    },
    "locacao-residencial": {
      locador_nome: "Antônio Souza Pereira",
      locador_cpf: "444.555.666-77",
      locador_rg: "44.555.666-7",
      locador_endereco: "Rua Augusta",
      locador_numero: "2500",
      locador_bairro: "Consolação",
      locador_cidade: "São Paulo",
      locador_estado: "SP",
      locador_cep: "01413-100",
      locador_email: "antonio.pereira@email.com",
      locador_whatsapp: "(11) 97654-3210",
      locatario_nome: "Juliana Rodrigues Santos",
      locatario_cpf: "555.666.777-88",
      locatario_rg: "55.666.777-8",
      locatario_endereco: "Avenida Rebouças",
      locatario_numero: "1000",
      locatario_bairro: "Pinheiros",
      locatario_cidade: "São Paulo",
      locatario_estado: "SP",
      locatario_cep: "05402-100",
      locatario_email: "juliana.santos@email.com",
      locatario_whatsapp: "(11) 96543-2109",
      imovel_endereco: "Rua dos Jacarandás",
      imovel_numero: "456",
      imovel_bairro: "Vila Mariana",
      imovel_cidade: "São Paulo",
      imovel_estado: "SP",
      imovel_cep: "04101-010",
      valor_aluguel: "2.500,00",
      prazo_contrato: "30",
      reajuste: "IGP-M",
      caucao: "5.000,00",
      fiador_nome: "Roberto Rodrigues",
      fiador_cpf: "666.777.888-99",
      fiador_rg: "66.777.888-9",
      fiador_endereco: "Avenida Paulista",
      fiador_numero: "1000",
      fiador_bairro: "Bela Vista",
      fiador_cidade: "São Paulo",
      fiador_estado: "SP",
      fiador_cep: "01310-100",
      fiador_email: "roberto.rodrigues@email.com",
      fiador_whatsapp: "(11) 95432-1098"
    },
    "locacao-comercial": {
      locador_nome: "Imobiliária Prime Ltda",
      locador_documento: "12.345.678/0001-90",
      locador_rg: "",
      locador_endereco: "Avenida Nove de Julho",
      locador_numero: "3000",
      locador_bairro: "Jardins",
      locador_cidade: "São Paulo",
      locador_estado: "SP",
      locador_cep: "01407-000",
      locador_email: "contato@imobiliariaprime.com.br",
      locador_whatsapp: "(11) 3456-7890",
      locatario_nome: "Tech Solutions Informática Ltda",
      locatario_documento: "98.765.432/0001-10",
      locatario_rg: "",
      locatario_endereco: "Rua Vergueiro",
      locatario_numero: "1500",
      locatario_bairro: "Vila Mariana",
      locatario_cidade: "São Paulo",
      locatario_estado: "SP",
      locatario_cep: "04101-000",
      locatario_email: "contato@techsolutions.com.br",
      locatario_whatsapp: "(11) 2345-6789",
      imovel_endereco: "Sala comercial nº 204, 2º andar, Edifício Business Center, Avenida Faria Lima, nº 3500, Itaim Bibi, São Paulo/SP, CEP 04538-132",
      finalidade_uso: "Escritório",
      valor_aluguel: "4.500,00",
      prazo_contrato: "24",
      iptu_responsavel: "Locatário",
      condominio_responsavel: "Locatário"
    },
    "prestacao-servicos": {
      contratante_nome: "Empresa ABC Comércio Ltda",
      contratante_documento: "11.222.333/0001-44",
      contratante_rg: "",
      contratante_endereco: "Rua Haddock Lobo",
      contratante_numero: "800",
      contratante_bairro: "Cerqueira César",
      contratante_cidade: "São Paulo",
      contratante_estado: "SP",
      contratante_cep: "01414-001",
      contratante_email: "contato@empresaabc.com.br",
      contratante_whatsapp: "(11) 3344-5566",
      prestador_nome: "Paulo Henrique Costa",
      prestador_cpf: "777.888.999-00",
      prestador_rg: "77.888.999-0",
      prestador_endereco: "Rua Oscar Freire",
      prestador_numero: "1200",
      prestador_bairro: "Pinheiros",
      prestador_cidade: "São Paulo",
      prestador_estado: "SP",
      prestador_cep: "05409-010",
      prestador_email: "paulo.costa@email.com",
      prestador_whatsapp: "(11) 94321-8765",
      servicos_descricao: "Desenvolvimento de website institucional responsivo com até 10 páginas, incluindo sistema de gerenciamento de conteúdo (CMS), otimização SEO e integração com redes sociais",
      prazo_execucao: "60 dias",
      valor_servico: "12.000,00",
      forma_pagamento: "50% início + 50% final",
      confidencialidade: "Sim"
    },
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
      veiculo_tipo: "Automóvel",
      veiculo_marca: "Toyota",
      veiculo_modelo: "Corolla XEi",
      veiculo_ano_fabricacao: "2020",
      veiculo_ano_modelo: "2020",
      veiculo_placa: "ABC-1234",
      veiculo_chassi: "9BR53ZEC0L8123456",
      veiculo_renavam: "12345678901",
      veiculo_cor: "Prata",
      veiculo_combustivel: "Flex",
      veiculo_km: "45000",
      valor_venda: "85.000,00",
      forma_pagamento: "À vista",
      multas_pendentes: "Não",
      ipva_quitado: "Sim",
      observacoes: "Veículo em excelente estado de conservação, revisões em dia, manual e chave reserva"
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
      bem_tipo: "Imóvel",
      bem_descricao: "Apartamento 302, Edifício Solar dos Lagos, com área de 120m², 3 quartos, 2 banheiros, sala, cozinha, área de serviço e 2 vagas de garagem, localizado na Rua das Acácias, nº 456, Bairro Jardim Botânico, Rio de Janeiro/RJ",
      valor_estimado: "650.000,00",
      tipo_doacao: "Pura e Simples",
      encargos: "",
      condicoes: "",
      reserva_usufruto: "Não",
      clausula_reversao: "Não"
    },
    "emprestimo": {
      credor_nome: "Marcos Antônio Ribeiro",
      credor_cpf: "888.999.000-11",
      credor_endereco: "Rua Bento Gonçalves, nº 950, Bairro Centro, Porto Alegre/RS, CEP 90010-100",
      devedor_nome: "Renata Alves Pereira",
      devedor_cpf: "999.000.111-22",
      devedor_endereco: "Avenida Ipiranga, nº 1200, Bairro Centro, Porto Alegre/RS, CEP 90020-200",
      valor_emprestimo: "15.000,00",
      juros: "1",
      prazo_pagamento: "31/12/2025",
      forma_pagamento: "Parcelado mensal"
    },
    "comodato": {
      comodante_nome: "Sandra Regina Oliveira",
      comodante_cpf: "000.111.222-33",
      comodatario_nome: "Gabriel Martins Costa",
      comodatario_cpf: "111.222.333-44",
      bem_descricao: "Casa residencial com 150m² de área construída, contendo 3 quartos, 2 banheiros, sala, cozinha, área de serviço e garagem, localizada na Rua das Hortênsias, nº 234, Bairro Jardim Europa, Curitiba/PR, CEP 80610-100",
      prazo_uso: "12 meses",
      finalidade_uso: "Residência temporária durante período de estudos universitários"
    },
    "trabalho-autonomo": {
      contratante_nome: "Clínica Vida Saudável Ltda",
      contratante_documento: "22.333.444/0001-55",
      contratante_rg: "",
      contratante_endereco: "Avenida Santos Dumont",
      contratante_numero: "1800",
      contratante_bairro: "Aldeota",
      contratante_cidade: "Fortaleza",
      contratante_estado: "CE",
      contratante_cep: "60150-161",
      contratante_email: "contato@clinicavidasaudavel.com.br",
      contratante_whatsapp: "(85) 3456-7890",
      autonomo_nome: "Dra. Patricia Almeida Santos",
      autonomo_cpf: "222.333.444-55",
      autonomo_rg: "22.333.444-5",
      autonomo_profissao: "Nutricionista",
      autonomo_endereco: "Rua Desembargador Leite Albuquerque",
      autonomo_numero: "500",
      autonomo_bairro: "Aldeota",
      autonomo_cidade: "Fortaleza",
      autonomo_estado: "CE",
      autonomo_cep: "60150-150",
      autonomo_email: "dra.patricia@email.com",
      autonomo_whatsapp: "(85) 99876-5432",
      servicos_descricao: "Atendimento nutricional a pacientes da clínica, incluindo avaliação antropométrica, prescrição de planos alimentares personalizados, acompanhamento e orientação nutricional",
      prazo_execucao: "12 meses",
      local_execucao: "Nas dependências da Clínica Vida Saudável",
      valor_servico: "60.000,00",
      forma_pagamento: "Mensal",
      periodicidade_pagamento: "Todo dia 5 de cada mês",
      reajuste: "IPCA",
      materiais: "Pelo Contratante",
      confidencialidade: "Sim"
    },
    "parceria-comercial": {
      parceiro1_nome: "Digital Marketing Solutions Ltda",
      parceiro1_documento: "33.444.555/0001-66",
      parceiro1_rg: "",
      parceiro1_endereco: "Avenida Paulista",
      parceiro1_numero: "1500",
      parceiro1_bairro: "Bela Vista",
      parceiro1_cidade: "São Paulo",
      parceiro1_estado: "SP",
      parceiro1_cep: "01310-200",
      parceiro1_email: "contato@digitalmarketing.com.br",
      parceiro1_whatsapp: "(11) 3333-4444",
      parceiro2_nome: "Tech Innovation Systems Ltda",
      parceiro2_documento: "44.555.666/0001-77",
      parceiro2_rg: "",
      parceiro2_endereco: "Rua Funchal",
      parceiro2_numero: "500",
      parceiro2_bairro: "Vila Olímpia",
      parceiro2_cidade: "São Paulo",
      parceiro2_estado: "SP",
      parceiro2_cep: "04551-060",
      parceiro2_email: "contato@techinnovation.com.br",
      parceiro2_whatsapp: "(11) 4444-5555",
      objeto_parceria: "Desenvolvimento e comercialização conjunta de plataforma de automação de marketing digital com inteligência artificial",
      finalidade_parceria: "Unir expertise em marketing digital e desenvolvimento de software para criar solução inovadora no mercado brasileiro",
      contribuicao_parceiro1: "Conhecimento especializado em marketing digital, carteira de clientes, metodologias proprietárias e equipe comercial",
      contribuicao_parceiro2: "Desenvolvimento tecnológico, infraestrutura de TI, equipe de engenheiros de software e suporte técnico",
      percentual_parceiro1: "50",
      percentual_parceiro2: "50",
      tipo_gestao: "Compartilhada entre parceiros",
      prazo_parceria: "24 meses",
      exclusividade: "Sim",
      territorio: "Nacional",
      investimento_inicial: "200.000,00",
      divisao_custos: "Proporcional à participação",
      confidencialidade: "Sim",
      nao_concorrencia: "Sim"
    }
  };

  const examples = [
    {
      title: "Contrato de Compra e Venda",
      description: "Modelo para transferência de propriedade de bens imóveis ou móveis entre pessoas físicas.",
      contractId: "compra-venda",
      preview: "CONTRATO DE COMPRA E VENDA\n\nVENDEDOR: Carlos Eduardo Mendes, casado, residente em São Paulo/SP...",
    },
    {
      title: "Contrato de Locação Residencial",
      description: "Contrato para aluguel de imóvel residencial com fiador e cláusulas de reajuste.",
      contractId: "locacao-residencial",
      preview: "CONTRATO DE LOCAÇÃO RESIDENCIAL\n\nLOCADOR: Antônio Souza Pereira, residente em São Paulo/SP...",
    },
    {
      title: "Contrato de Locação Comercial",
      description: "Modelo de locação para imóvel comercial entre pessoa jurídica e empresa.",
      contractId: "locacao-comercial",
      preview: "CONTRATO DE LOCAÇÃO COMERCIAL\n\nLOCADOR: Imobiliária Prime Ltda, CNPJ nº 12.345.678/0001-90...",
    },
    {
      title: "Contrato de Prestação de Serviços",
      description: "Contrato para contratação de profissional autônomo com cláusula de confidencialidade.",
      contractId: "prestacao-servicos",
      preview: "CONTRATO DE PRESTAÇÃO DE SERVIÇOS\n\nCONTRATANTE: Empresa ABC Comércio Ltda, CNPJ nº 11.222.333/0001-44...",
    },
    {
      title: "Contrato de Compra e Venda de Veículo",
      description: "Exemplo completo de contrato para venda de automóvel usado entre pessoas físicas.",
      contractId: "compra-venda-veiculo",
      preview: "CONTRATO DE COMPRA E VENDA DE VEÍCULO\n\nVENDEDOR: João Carlos Silva, brasileiro, casado, comerciante...",
    },
    {
      title: "Contrato de Doação",
      description: "Modelo de contrato para doação de imóvel entre familiares com segurança jurídica.",
      contractId: "doacao",
      preview: "CONTRATO DE DOAÇÃO\n\nDOADOR: Roberto Ferreira Lima, brasileiro, viúvo, aposentado...",
    },
    {
      title: "Contrato de Empréstimo",
      description: "Contrato para empréstimo de dinheiro entre pessoas físicas com juros e prazo definido.",
      contractId: "emprestimo",
      preview: "CONTRATO DE EMPRÉSTIMO\n\nCREDOR: Marcos Antônio Ribeiro, CPF nº 888.999.000-11...",
    },
    {
      title: "Contrato de Comodato",
      description: "Empréstimo gratuito de imóvel para uso temporário com finalidade específica.",
      contractId: "comodato",
      preview: "CONTRATO DE COMODATO\n\nCOMODANTE: Sandra Regina Oliveira, CPF nº 000.111.222-33...",
    },
    {
      title: "Contrato de Trabalho Autônomo",
      description: "Prestação de serviços profissionais sem vínculo empregatício com todas as cláusulas necessárias.",
      contractId: "trabalho-autonomo",
      preview: "CONTRATO DE TRABALHO AUTÔNOMO\n\nCONTRATANTE: Clínica Vida Saudável Ltda, CNPJ nº 22.333.444/0001-55...",
    },
    {
      title: "Contrato de Parceria Comercial",
      description: "Acordo de cooperação empresarial entre empresas com divisão de participação e responsabilidades.",
      contractId: "parceria-comercial",
      preview: "CONTRATO DE PARCERIA COMERCIAL\n\nPARCEIRO 1: Digital Marketing Solutions Ltda, CNPJ nº 33.444.555/0001-66...",
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