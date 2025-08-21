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

const contractTypesDisplay = [
  {
    id: 'compra-venda',
    icon: Home,
    title: "Compra e Venda",
    description: "Imóveis, veículos, bens móveis",
    popular: true
  },
  {
    id: 'locacao-residencial',
    icon: Building,
    title: "Locação Residencial",
    description: "Casas e apartamentos",
    popular: true
  },
  {
    id: 'prestacao-servicos',
    icon: Briefcase,
    title: "Prestação de Serviços",
    description: "Autônomos e empresas",
    popular: true
  },
  {
    id: 'doacao',
    icon: Heart,
    title: "Doação",
    description: "Bens móveis e imóveis"
  },
  {
    id: 'comodato',
    icon: Car,
    title: "Comodato",
    description: "Empréstimo de bens"
  },
  {
    id: 'locacao-comercial',
    icon: Users,
    title: "Locação Comercial",
    description: "Imóveis comerciais"
  },
  {
    id: 'emprestimo',
    icon: FileText,
    title: "Empréstimo",
    description: "Entre pessoas físicas"
  }
];

const ContractTypesSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tipos de Contratos Disponíveis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha entre nossos modelos juridicamente válidos e personalize com seus dados
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
                      onClick={() => window.location.href = `/contrato/${contract.id}`}
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
          <Button variant="google" size="lg">
            Ver Todos os Modelos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContractTypesSection;