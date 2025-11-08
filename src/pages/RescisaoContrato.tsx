import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, XCircle, AlertTriangle, FileX, Scale } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const RescisaoContrato = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Rescisão de Contrato: O que é, Causas e Procedimentos para Encerrar por Descumprimento",
    "description": "Rescisão é a extinção antecipada de contrato por descumprimento. Entenda causas, procedimentos, direitos e como buscar reparação.",
    "author": {
      "@type": "Organization",
      "name": "Modelo de Contrato"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Modelo de Contrato",
      "logo": {
        "@type": "ImageObject",
        "url": "https://modelodecontrato.org/logo.png"
      }
    },
    "datePublished": "2025-10-29",
    "dateModified": "2025-10-29"
  };

  return (
    <>
      <SEO 
        title="Rescisão de Contrato: O que é, Causas e Procedimentos para Encerrar por Descumprimento"
        description="Rescisão é a extinção antecipada de contrato por descumprimento de obrigações. Entenda causas, procedimentos legais, direitos e como buscar reparação."
        keywords="rescisão de contrato, descumprimento contratual, inadimplência, extinção de contrato, código civil, cláusula penal"
        canonical="https://modelodecontrato.org/rescisao-de-contrato-descumprimento"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <nav className="mb-6">
            <Button variant="outline" onClick={() => navigate('/glossario-juridico')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Glossário
            </Button>
          </nav>

          <article>
            <header className="mb-8">
              <XCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
                Rescisão de Contrato
              </h1>
              <p className="text-xl text-muted-foreground text-center">
                O que é, Causas e Procedimentos para Encerrar por Descumprimento
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    A rescisão de contrato é a extinção antecipada do vínculo obrigacional em razão do descumprimento 
                    de cláusulas essenciais por uma das partes. Ao contrário da resilição (que é consensual), a 
                    rescisão é unilateral e decorre de inadimplemento absoluto — ou seja, quando uma parte deixa 
                    de cumprir sua obrigação de forma grave e irreversível.
                  </p>
                </CardContent>
              </Card>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Causas Comuns de Rescisão
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Inadimplência financeira (não pagamento de aluguel, parcelas, etc.)</li>
                      <li>Descumprimento de prazos essenciais</li>
                      <li>Violação de cláusulas penais ou de confidencialidade</li>
                      <li>Uso indevido de bens (em contratos de comodato ou locação)</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      A parte lesada pode rescindir o contrato judicial ou extrajudicialmente, desde que comprove 
                      o descumprimento. Em muitos casos, é necessário notificar previamente a parte inadimplente 
                      para que regularize a situação em prazo razoável (geralmente 10 a 15 dias).
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  Direitos Após a Rescisão
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Após a rescisão, a parte inocente pode:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      <li>Reaver bens ou valores entregues</li>
                      <li>Cobrar perdas e danos</li>
                      <li>Executar cláusula penal, se houver</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      É essencial diferenciar rescisão por inadimplemento de resolução contratual por onerosidade 
                      excessiva (prevista no art. 478 do CC), que tem base em mudança radical das circunstâncias.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileX className="w-6 h-6 text-primary" />
                  Procedimentos Recomendados
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Para evitar abusos, a rescisão deve ser proporcional à gravidade da falta. Um atraso isolado, 
                      por exemplo, raramente justifica rescisão imediata — a menos que o contrato preveja isso 
                      expressamente.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Se você pretende rescindir um contrato, reúna provas do descumprimento, envie notificação 
                      extrajudicial e, se possível, consulte um advogado. Já se foi notificado, avalie se há margem 
                      para regularização ou negociação.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      A rescisão é uma medida extrema — mas, quando bem fundamentada, é um direito legítimo de 
                      proteção patrimonial.
                    </p>
                  </CardContent>
                </Card>
              </section>
            </div>

            <div className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa Rescindir um Contrato?
              </h2>
              <p className="text-muted-foreground mb-6">
                Formalize a rescisão com segurança jurídica e documentação adequada.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate('/tipos-de-contratos')}
              >
                Gerar Contrato Agora
              </Button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default RescisaoContrato;
