import { Card, CardContent } from "@/components/ui/card";
import { Search, Edit, Download } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Escolha o contrato",
    description: "Selecione o tipo de contrato que você precisa entre nossos modelos juridicamente válidos."
  },
  {
    icon: Edit,
    step: "2", 
    title: "Preencha seus dados",
    description: "Complete o formulário simples com suas informações específicas em poucos cliques."
  },
  {
    icon: Download,
    step: "3",
    title: "Baixe em PDF",
    description: "Seu contrato personalizado está pronto! Baixe em PDF e utilize imediatamente."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo simples e rápido em apenas 3 passos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="relative inline-flex mb-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent border-2 border-background rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{step.step}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Connection arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-primary/30"></div>
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-primary/30 rotate-45"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-accent/50 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">
              Tempo médio: 30 segundos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;