import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, UserCheck, Save } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Legal",
    description: "Todos os contratos são elaborados por advogados especializados e seguem a legislação brasileira.",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Clock,
    title: "Contratos em Minutos",
    description: "Crie e edite contratos online rapidamente. Preencha, personalize e baixe seu contrato pronto em PDF.",
    color: "text-blue-600", 
    bgColor: "bg-blue-100"
  },
  {
    icon: UserCheck,
    title: "Feito para você",
    description: "Interface intuitiva e processo simplificado. Qualquer pessoa consegue usar sem dificuldades.",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: Save,
    title: "Salvo automaticamente",
    description: "Seus dados são salvos automaticamente. Continue de onde parou a qualquer momento.",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que usar nosso Gerador de Contratos Gratuito?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crie contratos digitais válidos sem advogado. Modelos editáveis e prontos para usar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-sm border max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Contratos Gerados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">30s</div>
                <div className="text-sm text-muted-foreground">Tempo Médio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;