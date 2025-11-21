import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Home, 
  Briefcase, 
  Heart, 
  Car, 
  Building, 
  Users, 
  Gavel 
} from "lucide-react";
import { contractTypes } from "@/lib/contractTypes";

// Mapeamento de IDs para URLs SEO-friendly
const contractIdToUrlMap: { [key: string]: string } = {
  'compra-venda': '/contrato-de-compra-e-venda',
  'locacao-comercial': '/contrato-de-locacao-comercial',
  'locacao-residencial': '/modelos-de-contrato-de-aluguel',
  'prestacao-servicos': '/contrato-de-prestacao-de-servicos',
  'parceria-comercial': '/contrato-de-parceria-empresarial',
  'doacao': '/contrato-de-doacao',
  'emprestimo': '/contrato-de-emprestimo',
  'comodato': '/contrato-de-comodato',
  'mandato': '/contrato-de-mandato',
  'alienacao-fiduciaria': '/contrato-de-alienacao-fiduciaria',
  'estagio': '/contrato-de-estagio',
  'trabalho-autonomo': '/contrato-de-trabalho-autonomo',
  'rescisao': '/contrato-de-rescisao-de-contrato',
  'locacao-veiculo': '/contrato-de-locacao-de-veiculo',
  'franquia': '/contrato-de-franquia',
};

const contractTypesDisplay = [
  {
    id: 'compra-venda',
    icon: Home,
    title: "Contrato de Compra e Venda",
    description: "Imóveis, veículos, terrenos e bens móveis",
    popular: true
  },
  {
    id: 'locacao-residencial',
    icon: Building,
    title: "Contrato de Aluguel Residencial",
    description: "Casas, apartamentos e locação simples",
    popular: true
  },
  {
    id: 'prestacao-servicos',
    icon: Briefcase,
    title: "Contrato de Prestação de Serviços",
    description: "MEI, profissionais autônomos e empresas",
    popular: true
  },
  {
    id: 'locacao-comercial',
    icon: Users,
    title: "Contrato de Locação Comercial",
    description: "Ambientes de pontos comerciais e escritórios"
  },
  {
    id: 'trabalho-autonomo',
    icon: Gavel,
    title: "Contrato de Trabalho Autônomo",
    description: "Freelancers e prestadores independentes"
  },
  {
    id: 'parceria-comercial',
    icon: Users,
    title: "Contrato de Parceria Comercial",
    description: "Sociedades e joint ventures estratégicas"
  },
  {
    id: 'comodato',
    icon: Car,
    title: "Contrato de Comodato",
    description: "Contrato de Comodato empresarial"
  },
  {
    id: 'emprestimo',
    icon: FileText,
    title: "Contrato de Empréstimo Estratégico",
    description: "Entre pessoas físicas e jurídicas com fins comerciais"
  }
];

const ContractTypesSection = () => {
  return (
    <section id="contract-types-section" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Modelos de Contratos Grátis para Baixar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gerador de contratos online com modelos prontos e editáveis. Baixe em PDF ou Word gratuitamente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contractTypesDisplay.map((contract, index) => {
            const Icon = contract.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="relative">
                    {contract.popular && (
                      <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                        Popular
                      </div>
                    )}
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{contract.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{contract.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                      onClick={() => window.location.href = contractIdToUrlMap[contract.id] || `/gerador?type=${contract.id}`}
                    >
                      Gerar Contrato
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="google" 
            size="lg"
            onClick={() => window.location.href = '/tipos-de-contratos'}
          >
            Ver Todos os Modelos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContractTypesSection;