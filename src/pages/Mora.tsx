import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, AlertCircle, UserX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Mora = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mora - Atraso no Cumprimento da Obrigação",
    "description": "Entenda o que é mora do devedor e do credor, requisitos, efeitos jurídicos e diferença entre mora e inadimplemento absoluto",
    "keywords": "mora, mora do devedor, mora do credor, atraso obrigação, inadimplemento, juros de mora"
  };

  return (
    <>
      <SEO 
        title="Mora - Atraso no Cumprimento da Obrigação | Conceito e Efeitos"
        description="Entenda o que é mora do devedor e do credor, requisitos da mora, efeitos jurídicos e diferença entre mora e inadimplemento absoluto. Conheça seus direitos em caso de atraso."
        keywords="mora, mora do devedor, mora do credor, atraso obrigação, inadimplemento, juros de mora, purga da mora, interpelação"
        canonical="https://modelodecontrato.org/mora-atraso-obrigacao"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <Breadcrumbs />
          
          <nav className="mb-6">
            <Button variant="outline" onClick={() => navigate('/glossario-juridico')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Glossário
            </Button>
          </nav>

          <header className="text-center mb-12">
            <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Mora
            </h1>
            <p className="text-xl text-muted-foreground">
              Atraso no cumprimento da obrigação quando ainda é possível e útil
            </p>
          </header>

          <article className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">O que é Mora?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mora é o retardamento culposo no cumprimento de uma obrigação, quando a prestação ainda é possível e 
                tem utilidade para o credor. Diferencia-se do inadimplemento absoluto, onde a prestação tornou-se 
                impossível ou inútil devido ao atraso.
              </p>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-2">
                    <strong>Exemplo de mora:</strong> Entrega de mercadoria com 15 dias de atraso, mas o comprador 
                    ainda tem interesse em recebê-la.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Exemplo de inadimplemento:</strong> Entrega de vestido de noiva após a data do casamento 
                    (prestação inútil).
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Requisitos da Mora</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Requisitos Objetivos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Exigibilidade:</strong> Obrigação vencida e exigível</li>
                      <li>• <strong>Liquidez:</strong> Valor certo ou determinável</li>
                      <li>• <strong>Possibilidade:</strong> Prestação ainda possível</li>
                      <li>• <strong>Utilidade:</strong> Prestação ainda útil ao credor</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Requisitos Subjetivos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Culpa:</strong> Atraso imputável ao devedor</li>
                      <li>• <strong>Voluntariedade:</strong> Ato ou omissão voluntária</li>
                      <li>• <strong>Ausência de força maior:</strong> Sem motivo justificável</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Tipos de Mora</h2>
              
              <Card className="mb-4">
                <CardHeader>
                  <UserX className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Mora do Devedor (Mora Solvendi)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Ocorre quando o devedor atrasa o cumprimento da obrigação. Pode ser:
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">• Mora ex re:</p>
                    <p className="text-sm text-muted-foreground ml-4">
                      Automática, quando há data determinada para o pagamento. "Dies interpellat pro homine" 
                      (o dia interpela pelo homem).
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">• Mora ex persona:</p>
                    <p className="text-sm text-muted-foreground ml-4">
                      Depende de interpelação judicial ou extrajudicial quando não há prazo determinado.
                    </p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded mt-3">
                    <p className="font-semibold text-foreground mb-2">Consequências:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Obrigação de pagar juros moratórios</li>
                      <li>• Responde por perdas e danos</li>
                      <li>• Assume riscos pela coisa (perpetuatio obligationis)</li>
                      <li>• Deve atualização monetária do valor</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <AlertCircle className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Mora do Credor (Mora Accipiendi)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Ocorre quando o credor recusa injustificadamente receber a prestação oferecida pelo devedor ou 
                    não pratica atos necessários para que o devedor possa cumprir a obrigação.
                  </p>
                  <Card className="bg-muted/30">
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Exemplos:</strong>
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Recusa em receber mercadoria na data combinada</li>
                        <li>• Não fornece dados bancários para pagamento</li>
                        <li>• Ausenta-se no dia marcado para receber a prestação</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <div className="bg-muted/50 p-3 rounded mt-3">
                    <p className="font-semibold text-foreground mb-2">Consequências:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Devedor não responde por acréscimos ou deterioração</li>
                      <li>• Credor arca com despesas da mora</li>
                      <li>• Suspende a mora do devedor (se existir)</li>
                      <li>• Devedor pode consignar em pagamento</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Purga da Mora</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Eliminação dos Efeitos da Mora</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Purga da mora é o ato pelo qual o devedor em mora oferece a prestação devida acrescida dos 
                    encargos moratórios, eliminando os efeitos do atraso.
                  </p>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Para purgar a mora, o devedor deve oferecer:</p>
                    <ul className="text-muted-foreground list-disc list-inside ml-4 space-y-1">
                      <li>Prestação principal (valor ou bem devido)</li>
                      <li>Juros de mora</li>
                      <li>Atualização monetária</li>
                      <li>Custas processuais (se houver ação judicial)</li>
                      <li>Honorários advocatícios (se houver ação)</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    Importante: A purga da mora evita a resolução do contrato e exonera o devedor de consequências 
                    mais graves do inadimplemento.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Mora vs. Inadimplemento Absoluto</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Mora</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Prestação ainda possível</li>
                      <li>• Prestação ainda útil ao credor</li>
                      <li>• Contrato pode ser mantido</li>
                      <li>• Pagamento purga os efeitos</li>
                      <li>• Gera juros e correção</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Inadimplemento Absoluto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Prestação impossível ou inútil</li>
                      <li>• Interesse do credor pereceu</li>
                      <li>• Resolução do contrato</li>
                      <li>• Pagamento não tem mais sentido</li>
                      <li>• Gera perdas e danos integrais</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Legislação Aplicável</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Arts. 394 a 401 do Código Civil:</strong> Mora</li>
                    <li><strong>Art. 394 do CC:</strong> Mora do devedor</li>
                    <li><strong>Art. 395 do CC:</strong> Interpelação judicial ou extrajudicial</li>
                    <li><strong>Art. 396 do CC:</strong> Impossibilidade da prestação durante mora</li>
                    <li><strong>Art. 400 do CC:</strong> Mora do credor</li>
                    <li><strong>Art. 401 do CC:</strong> Purga da mora</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </article>

          <section className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Previna Problemas com Mora
            </h2>
            <p className="text-muted-foreground mb-6">
              Estabeleça prazos claros e cláusulas sobre mora em seus contratos.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate('/tipos-de-contratos')}
            >
              Criar Contrato com Cláusulas de Mora
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Mora;
