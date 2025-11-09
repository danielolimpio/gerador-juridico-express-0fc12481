import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, AlertCircle, Scale, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const CondicaoResolutiva = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Condição Resolutiva - Extinção Condicional do Contrato",
    "description": "Entenda o que é condição resolutiva, como funciona a extinção do contrato mediante evento futuro e incerto, legislação aplicável e exemplos práticos.",
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
        title="Condição Resolutiva - Extinção Condicional do Contrato"
        description="Guia completo sobre condição resolutiva: conceito, características, diferença com condição suspensiva, efeitos jurídicos e aplicação prática em contratos."
        keywords="condição resolutiva, extinção de contrato, evento futuro e incerto, cláusula resolutiva, direito civil"
        canonical="https://modelodecontrato.org/condicao-resolutiva"
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
              <AlertCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Condição Resolutiva
              </h1>
              <p className="text-xl text-muted-foreground">
                Cláusula que determina a extinção do contrato mediante evento futuro
              </p>
            </header>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  O que é Condição Resolutiva?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A condição resolutiva é uma cláusula contratual que subordina a extinção 
                  do negócio jurídico a um evento futuro e incerto. Diferentemente da condição 
                  suspensiva, o contrato sob condição resolutiva produz efeitos imediatamente, 
                  mas esses efeitos cessarão se o evento previsto vier a ocorrer.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Quando a condição resolutiva se verifica, o contrato é desfeito retroativamente, 
                  devolvendo as partes ao estado anterior, como se o negócio nunca tivesse existido. 
                  É uma forma de garantir que determinadas circunstâncias não comprometam a 
                  finalidade do contrato.
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
                      A condição sempre depende de um acontecimento que ainda não ocorreu e cuja 
                      realização é incerta. Se for certo que o evento ocorrerá, não se trata de 
                      condição, mas de termo.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. Eficácia Imediata</h3>
                    <p className="text-muted-foreground">
                      O contrato produz efeitos desde sua celebração. As partes exercem seus 
                      direitos e cumprem suas obrigações normalmente, até que a condição se realize.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. Efeito Retroativo</h3>
                    <p className="text-muted-foreground">
                      Quando a condição se verifica, o contrato é extinto retroativamente (ex tunc), 
                      desfazendo-se todos os efeitos produzidos, salvo disposição em contrário.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4. Expectativa de Direito</h3>
                    <p className="text-muted-foreground">
                      Durante a pendência da condição, as partes têm direitos adquiridos que podem 
                      ser extintos se a condição se implementar. Por isso, devem agir de boa-fé e 
                      não podem fraudar a condição.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Tipos de Condição Resolutiva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Condição Resolutiva Expressa</h3>
                    <p className="text-muted-foreground mb-2">
                      Está prevista expressamente no contrato. As partes estabelecem claramente 
                      o evento que, se ocorrer, extinguirá o negócio.
                    </p>
                    <p className="text-muted-foreground italic">
                      Exemplo: "Este contrato será extinto se o comprador não obtiver financiamento 
                      bancário até 30 dias após a assinatura."
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Condição Resolutiva Tácita</h3>
                    <p className="text-muted-foreground mb-2">
                      Está implícita em todos os contratos bilaterais (artigo 475 do CC). Se uma 
                      parte não cumprir sua obrigação, a outra pode pedir a resolução do contrato 
                      ou exigir o cumprimento, em ambos os casos com perdas e danos.
                    </p>
                    <p className="text-muted-foreground italic">
                      Exemplo: No contrato de compra e venda, se o vendedor não entregar o bem, 
                      há resolução tácita.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Pacto Comissório</h3>
                    <p className="text-muted-foreground mb-2">
                      Cláusula resolutiva expressa que autoriza a extinção automática do contrato 
                      pelo inadimplemento de uma obrigação, sem necessidade de pronunciamento judicial.
                    </p>
                    <p className="text-muted-foreground italic">
                      Exemplo: "O não pagamento de duas prestações consecutivas acarretará a 
                      resolução automática deste contrato."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Diferença entre Condição Resolutiva e Suspensiva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold text-foreground">Aspecto</th>
                        <th className="text-left p-3 font-semibold text-foreground">Condição Resolutiva</th>
                        <th className="text-left p-3 font-semibold text-foreground">Condição Suspensiva</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 text-muted-foreground">Eficácia</td>
                        <td className="p-3 text-muted-foreground">Imediata</td>
                        <td className="p-3 text-muted-foreground">Postergada</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-muted-foreground">Efeito da ocorrência</td>
                        <td className="p-3 text-muted-foreground">Extingue o contrato</td>
                        <td className="p-3 text-muted-foreground">Inicia os efeitos</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-muted-foreground">Retroatividade</td>
                        <td className="p-3 text-muted-foreground">Sim (desfaz efeitos)</td>
                        <td className="p-3 text-muted-foreground">Não (efeitos futuros)</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-muted-foreground">Não ocorrência</td>
                        <td className="p-3 text-muted-foreground">Consolida o contrato</td>
                        <td className="p-3 text-muted-foreground">Anula o contrato</td>
                      </tr>
                    </tbody>
                  </table>
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
                  A condição resolutiva é regulada pelo Código Civil Brasileiro:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Artigos 121 a 137:</strong> Das condições em geral</li>
                  <li><strong>Artigo 125:</strong> Subordinação à condição suspensiva ou resolutiva</li>
                  <li><strong>Artigo 128:</strong> Sobrevindo a condição resolutiva, extingue-se o direito</li>
                  <li><strong>Artigo 475:</strong> Condição resolutiva tácita nos contratos bilaterais</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-primary/5">
              <CardHeader>
                <CardTitle>Quando Utilizar a Condição Resolutiva?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Contratos dependentes de aprovação:</strong> Como financiamento 
                      bancário ou licenças governamentais
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Garantia de cumprimento:</strong> Estabelecer consequências 
                      automáticas para inadimplemento
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Proteção contra mudanças:</strong> Como alterações legislativas 
                      ou mudança de circunstâncias específicas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Contratos de longo prazo:</strong> Onde há necessidade de 
                      flexibilidade para extinção diante de eventos futuros
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <section className="bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa de Contratos com Cláusulas Resolutivas?
              </h2>
              <p className="text-muted-foreground mb-6">
                Crie contratos personalizados com cláusulas resolutivas adequadas 
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

export default CondicaoResolutiva;