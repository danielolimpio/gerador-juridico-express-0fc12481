import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, Scale } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const ContratoDeAdesao = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "O que é Contrato de Adesão? Definição, Características e Direitos do Consumidor",
    "description": "Guia completo sobre contrato de adesão: conceito, características, cláusulas abusivas, direitos do consumidor e proteção legal segundo o CDC.",
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
        title="O que é Contrato de Adesão? Definição, Características e Direitos do Consumidor"
        description="Guia completo sobre contrato de adesão: conceito, características, cláusulas abusivas, direitos do consumidor e proteção legal segundo o CDC."
        keywords="contrato de adesão, cláusulas abusivas, CDC, direitos do consumidor, código de defesa do consumidor, contrato preestabelecido"
        canonical="https://modelodecontrato.org/contrato-de-adesao"
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
              <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
                O que é Contrato de Adesão?
              </h1>
              <p className="text-xl text-muted-foreground text-center">
                Definição, Características e Direitos do Consumidor
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    O contrato de adesão é um tipo de acordo jurídico muito comum no cotidiano dos consumidores brasileiros. 
                    Trata-se de um contrato cujas cláusulas são preestabelecidas unilateralmente por uma das partes — geralmente 
                    empresas ou prestadoras de serviço —, cabendo à outra parte apenas aceitar ou rejeitar os termos, sem 
                    possibilidade de negociação. Esse modelo é amplamente utilizado em contratos de planos de saúde, telefonia, 
                    internet, seguros, financiamentos e até em termos de uso de aplicativos.
                  </p>
                </CardContent>
              </Card>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Características Principais
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A principal característica do contrato de adesão é a ausência de paridade nas negociações, o que gera 
                      uma relação de vulnerabilidade para o aderente. Por isso, o Código de Defesa do Consumidor (CDC), em 
                      seu artigo 54, estabelece regras protetivas: cláusulas abusivas são nulas de pleno direito, e qualquer 
                      dúvida na interpretação deve ser resolvida sempre em favor do consumidor.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Direitos do Consumidor
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      É importante destacar que, apesar da rigidez das cláusulas, o consumidor não perde seus direitos fundamentais. 
                      Caso identifique cláusulas abusivas — como multas desproporcionais, renúncia a direitos ou limitação indevida 
                      de responsabilidade —, pode buscar o cancelamento, revisão judicial ou até indenização por danos morais.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Além disso, o Superior Tribunal de Justiça (STJ) já firmou entendimento de que contratos de adesão devem 
                      ser redigidos com clareza e transparência, evitando letras miúdas ou termos técnicos excessivos. A falta 
                      de informação clara pode configurar vício de consentimento.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  Recomendações Importantes
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Se você está prestes a assinar um contrato de adesão, leia atentamente todos os termos, tire dúvidas 
                      com um advogado e guarde cópia do documento. Conhecer seus direitos é essencial para evitar prejuízos 
                      futuros.
                    </p>
                  </CardContent>
                </Card>
              </section>
            </div>

            <div className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa de um Contrato?
              </h2>
              <p className="text-muted-foreground mb-6">
                Crie contratos personalizados e juridicamente válidos em minutos.
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

export default ContratoDeAdesao;