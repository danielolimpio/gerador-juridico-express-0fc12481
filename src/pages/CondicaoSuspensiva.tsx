import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Clock, Scale, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const CondicaoSuspensiva = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Condição Suspensiva - Suspensão de Efeitos Contratuais",
    "description": "Entenda o que é condição suspensiva, como funciona a suspensão dos efeitos do contrato até evento futuro, legislação aplicável e exemplos práticos.",
    "datePublished": "2025-11-08",
    "dateModified": "2025-11-08",
    "author": {
      "@type": "Organization",
      "name": "Modelo de Contrato"
    }
  };

  return (
    <>
      <SEO 
        title="Condição Suspensiva - Suspensão de Efeitos Contratuais"
        description="Guia completo sobre condição suspensiva: conceito, características, diferença com condição resolutiva, efeitos jurídicos e aplicação prática em contratos."
        keywords="condição suspensiva, suspensão de efeitos, evento futuro e incerto, eficácia suspensa, direito civil"
        canonical="https://modelodecontrato.org/condicao-suspensiva"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <nav className="mb-6">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </nav>

          <article className="prose prose-lg max-w-none">
            <header className="text-center mb-12">
              <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Condição Suspensiva
              </h1>
              <p className="text-xl text-muted-foreground">
                Cláusula que suspende os efeitos do contrato até que evento futuro ocorra
              </p>
            </header>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  O que é Condição Suspensiva?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A condição suspensiva é uma cláusula contratual que subordina o início 
                  dos efeitos do negócio jurídico a um evento futuro e incerto. Enquanto 
                  a condição não se realiza, o contrato existe, mas não produz efeitos. 
                  As obrigações das partes ficam suspensas até que o evento previsto ocorra.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Quando a condição suspensiva se verifica, o contrato torna-se plenamente 
                  eficaz e as partes passam a exercer os direitos e cumprir as obrigações 
                  previstas. Se a condição não se realizar, o contrato é considerado como 
                  se nunca tivesse existido.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Características Principais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Evento Futuro e Incerto</h3>
                    <p className="text-muted-foreground">
                      A condição deve depender de um acontecimento que ainda não ocorreu e 
                      cuja realização é incerta. A incerteza é elemento essencial da condição.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. Suspensão de Eficácia</h3>
                    <p className="text-muted-foreground">
                      O contrato é válido desde a celebração, mas seus efeitos ficam suspensos. 
                      As partes não podem exigir o cumprimento das obrigações enquanto a condição 
                      não se implementar.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. Expectativa de Direito</h3>
                    <p className="text-muted-foreground">
                      Durante a pendência, as partes têm apenas expectativa de direito, não 
                      direito adquirido. Essa expectativa pode ser transmitida, mas está sempre 
                      sujeita à realização da condição.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4. Efeitos Ex Nunc</h3>
                    <p className="text-muted-foreground">
                      Quando a condição se verifica, os efeitos do contrato começam a partir 
                      daquele momento (ex nunc), não retroagem à data da celebração do contrato, 
                      salvo disposição em contrário.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Tipos de Condição Suspensiva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Condição Casual</h3>
                    <p className="text-muted-foreground mb-2">
                      Depende exclusivamente de evento da natureza ou de terceiro, sem qualquer 
                      influência das partes contratantes.
                    </p>
                    <p className="text-muted-foreground italic">
                      Exemplo: "A compra se concretizará se chover na região nos próximos 30 dias."
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Condição Potestativa</h3>
                    <p className="text-muted-foreground mb-2">
                      Depende da vontade de uma das partes. Pode ser simplesmente potestativa 
                      (válida, pois exige ato junto com evento) ou puramente potestativa 
                      (inválida, pois depende só da vontade).
                    </p>
                    <p className="text-muted-foreground italic">
                      Exemplo válido: "O contrato será válido se eu conseguir obter a licença 
                      ambiental."
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Condição Mista</h3>
                    <p className="text-muted-foreground mb-2">
                      Depende simultaneamente da vontade de uma das partes e de um fato de 
                      terceiro ou evento externo.
                    </p>
                    <p className="text-muted-foreground italic">
                      Exemplo: "O contrato terá efeito se o comprador obtiver aprovação de 
                      financiamento bancário."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Pendência, Implemento e Não Implemento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Condição Pendente</h3>
                    <p className="text-muted-foreground">
                      É o período entre a celebração do contrato e a verificação da condição. 
                      Durante esse período, as partes devem agir com boa-fé, não podendo 
                      praticar atos que impeçam ou fraudem a condição.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Implemento da Condição</h3>
                    <p className="text-muted-foreground">
                      Ocorre quando o evento previsto se realiza. Neste momento, o contrato 
                      passa a ter plena eficácia. Se a parte impediu maliciosamente a condição, 
                      esta se considera verificada (artigo 129 do CC).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Não Implemento</h3>
                    <p className="text-muted-foreground">
                      Se fica certo que a condição não se verificará, o contrato se torna 
                      ineficaz. As partes são liberadas de suas obrigações e o negócio é 
                      considerado como se nunca tivesse existido.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  Legislação Aplicável
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A condição suspensiva é regulada pelo Código Civil Brasileiro:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Artigos 121 a 137:</strong> Das condições em geral</li>
                  <li><strong>Artigo 125:</strong> Subordinação à condição suspensiva ou resolutiva</li>
                  <li><strong>Artigo 126:</strong> Direitos adquiridos sob condição suspensiva</li>
                  <li><strong>Artigo 129:</strong> Consideração de condição verificada se impedida maliciosamente</li>
                  <li><strong>Artigo 122:</strong> Invalidade de condições ilícitas ou impossíveis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-primary/5">
              <CardHeader>
                <CardTitle>Quando Utilizar a Condição Suspensiva?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Aprovações necessárias:</strong> Quando o contrato depende de 
                      aprovação de financiamento, licenças ou autorizações
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Due diligence:</strong> Em operações empresariais que dependem 
                      de verificação de documentos e situação fiscal
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Contratos imobiliários:</strong> Compra e venda dependente de 
                      regularização de documentos ou aprovação de projeto
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Operações societárias:</strong> Fusões, aquisições ou parcerias 
                      sujeitas a aprovação de órgãos reguladores
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <section className="bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa de Contratos com Condições Suspensivas?
              </h2>
              <p className="text-muted-foreground mb-6">
                Crie contratos personalizados com cláusulas suspensivas adequadas 
                às suas necessidades e juridicamente seguras.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate('/tipos-de-contratos')}
              >
                Ver Tipos de Contratos
              </Button>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default CondicaoSuspensiva;