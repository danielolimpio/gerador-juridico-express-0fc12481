import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShieldCheck, FileText, Scale, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const CaucaoGarantia = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "O que é Caução? Tipos, Função e Como Funciona como Garantia Contratual",
    "description": "Guia completo sobre caução: tipos de garantia, diferença entre caução e fiança, depósito caução em contratos de aluguel e proteção jurídica.",
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
        title="O que é Caução? Tipos, Função e Como Funciona como Garantia Contratual"
        description="Guia completo sobre caução: tipos de garantia, diferença entre caução e fiança, depósito caução em contratos de aluguel e proteção jurídica."
        keywords="caução, garantia contratual, depósito caução, penhor, hipoteca, seguro garantia, código civil"
        canonical="https://modelodecontrato.org/caucao-garantia-contratual"
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
              <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
                O que é Caução?
              </h1>
              <p className="text-xl text-muted-foreground text-center">
                Tipos, Função e Como Funciona como Garantia Contratual
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    A caução é uma forma de garantia contratual utilizada para assegurar o cumprimento de uma obrigação, 
                    seja ela de natureza civil, comercial ou trabalhista. Pode ser oferecida como garantia real (com bens) 
                    ou garantia pessoal (com compromisso de terceiro), e é amplamente empregada em contratos de locação, 
                    licitações, processos judiciais e até em relações de trabalho.
                  </p>
                </CardContent>
              </Card>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Tipos de Caução
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      No direito brasileiro, a caução está prevista nos artigos 818 a 839 do Código Civil. Ela pode assumir 
                      várias formas: depósito em dinheiro, penhor de bens móveis, hipoteca de imóveis, fiança ou até 
                      seguro-garantia. O objetivo é proteger o credor contra eventuais prejuízos decorrentes do descumprimento 
                      do contrato.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Depósito Caução em Contratos de Aluguel
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Um exemplo clássico é o depósito caução em contratos de aluguel, onde o locatário entrega ao locador 
                      um valor equivalente a até três meses de aluguel, que será devolvido ao final do contrato — desde que 
                      não haja danos ou débitos pendentes. Esse valor não pode ser usado pelo locador durante a vigência do 
                      contrato, salvo em casos específicos previstos em lei.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  Diferença entre Caução e Fiança
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      É importante diferenciar caução de fiança: enquanto a fiança envolve uma terceira pessoa (o fiador), 
                      a caução é uma garantia direta com bens ou valores. Além disso, a caução não gera responsabilidade 
                      ilimitada, pois está vinculada ao valor ou bem oferecido.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Para quem oferece caução, é essencial documentar tudo por escrito, exigir recibo e garantir que o 
                      bem ou valor seja mantido em condições seguras. Já para quem recebe, a caução deve ser proporcional 
                      ao risco e nunca usada como fonte de lucro.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <Card className="bg-primary/5">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed font-semibold">
                      A caução é uma ferramenta poderosa de segurança jurídica — mas só funciona com transparência, 
                      boa-fé e clareza contratual.
                    </p>
                  </CardContent>
                </Card>
              </section>
            </div>

            <div className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa de um Contrato com Caução?
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

export default CaucaoGarantia;