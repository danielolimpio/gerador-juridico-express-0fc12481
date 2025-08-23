import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Crie seu contrato em{" "}
              <span className="text-primary">30 segundos</span> – sem advogado
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Modelos juridicamente válidos, personalizados com seus dados. 
              Basta preencher e baixar em PDF.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="google" 
                size="xl" 
                className="group"
                onClick={() => {
                  const contractTypesSection = document.querySelector('#contract-types-section');
                  contractTypesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="font-medium"
                onClick={() => window.location.href = '/tipos-de-contratos'}
              >
                Ver Modelos
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  100% Legal
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Sem Cadastro
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Gratuito
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div 
                className="bg-accent/50 rounded-2xl p-8 max-w-md w-full relative overflow-hidden"
                style={{
                  backgroundImage: 'url(/lovable-uploads/a0132ded-74c6-4e2d-a778-817e8d75b215.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-accent/70 backdrop-blur-sm rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="bg-card rounded-lg p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Contrato de Compra e Venda</p>
                        <p className="text-xs text-muted-foreground">Preenchendo...</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-muted rounded p-2">
                        <p className="text-xs text-muted-foreground mb-1">Nome do Vendedor</p>
                        <p className="text-sm font-medium">João Silva</p>
                      </div>
                      <div className="bg-muted rounded p-2">
                        <p className="text-xs text-muted-foreground mb-1">Valor</p>
                        <p className="text-sm font-medium">R$ 150.000,00</p>
                      </div>
                      <div className="bg-primary/10 rounded p-2 border border-primary/20">
                        <p className="text-xs text-primary mb-1">Status</p>
                        <p className="text-sm font-medium text-primary">Pronto para download</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;