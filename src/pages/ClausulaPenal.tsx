import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gavel, AlertTriangle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const ClausulaPenal = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "O que é Cláusula Penal? Multa Contratual por Descumprimento",
    "description": "Entenda o que é cláusula penal, como funciona a multa compensatória ou moratória, limites legais e quando pode ser reduzida judicialmente.",
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
    "datePublished": "2025-01-07",
    "dateModified": "2025-01-07"
  };

  return (
    <>
      <SEO 
        title="Cláusula Penal: Multa Contratual por Descumprimento - Tipos e Limites"
        description="Cláusula penal é a previsão de multa compensatória pelo descumprimento do contrato. Conheça os tipos, limites legais e quando pode ser reduzida."
        keywords="cláusula penal, multa contratual, multa compensatória, multa moratória, descumprimento contratual, inadimplemento"
        canonical="https://modelodecontrato.org/clausula-penal-multa-contratual"
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

          <article>
            <header className="text-center mb-12">
              <Gavel className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                O que é Cláusula Penal? Multa Contratual por Descumprimento
              </h1>
              <p className="text-xl text-muted-foreground">
                Entenda como funciona a multa contratual, seus tipos, limites e quando pode ser reduzida
              </p>
            </header>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    A <strong>cláusula penal</strong> é uma previsão contratual, regulamentada pelos artigos 408 a 416 do Código Civil, que estabelece uma penalidade (geralmente em dinheiro) para o caso de inadimplemento ou mora no cumprimento das obrigações. Funciona como uma <strong>pré-fixação de perdas e danos</strong>, facilitando a reparação sem necessidade de provar o prejuízo real.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Tipos de cláusula penal</h2>
                  
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Cláusula Penal Compensatória</h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Aplicada quando há <strong>descumprimento total</strong> do contrato (inadimplemento absoluto). A multa visa compensar integralmente o prejuízo da parte inocente.
                  </p>
                  <p className="text-foreground leading-relaxed mb-6">
                    <strong>Exemplo:</strong> Contrato de prestação de serviços com multa de 50% do valor total caso o prestador não entregue o serviço contratado.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Cláusula Penal Moratória</h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Aplicada em caso de <strong>mora</strong> (atraso no cumprimento da obrigação). A multa compensa o retardamento, mas não substitui a obrigação principal.
                  </p>
                  <p className="text-foreground leading-relaxed mb-6">
                    <strong>Exemplo:</strong> Multa de 2% ao mês sobre o valor em atraso em contratos de aluguel ou financiamento.
                  </p>

                  <div className="bg-primary/10 border-l-4 border-primary p-4 my-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Diferença importante:</h3>
                        <p className="text-foreground">
                          Na <strong>compensatória</strong>, a multa substitui o cumprimento. Na <strong>moratória</strong>, a multa é adicional — o devedor ainda deve cumprir a obrigação principal.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Limites legais</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    A cláusula penal tem limites para evitar abusos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Cláusula compensatória:</strong> não pode exceder o valor da obrigação principal (art. 412, CC);</li>
                    <li><strong>Cláusula moratória:</strong> em geral, limitada a 2% do valor da prestação (art. 52, § 1º, CDC);</li>
                    <li><strong>Contratos de consumo:</strong> multas rescisórias limitadas a percentuais específicos conforme a legislação (ex: 10% em planos de saúde);</li>
                    <li><strong>Princípio da proporcionalidade:</strong> o juiz pode reduzir multas excessivas ou desproporcionais (art. 413, CC).</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Vantagens da cláusula penal</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Segurança jurídica:</strong> define antecipadamente o valor da indenização;</li>
                    <li><strong>Dispensa de prova:</strong> não é necessário comprovar o prejuízo real;</li>
                    <li><strong>Efeito intimidatório:</strong> desestimula o descumprimento contratual;</li>
                    <li><strong>Celeridade:</strong> facilita a cobrança em caso de inadimplemento.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Quando a cláusula penal pode ser reduzida?</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Conforme o artigo 413 do Código Civil, o juiz pode reduzir a multa quando:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>A obrigação foi cumprida <strong>parcialmente</strong>;</li>
                    <li>A multa é <strong>manifestamente excessiva</strong> em relação ao prejuízo;</li>
                    <li>Há <strong>desproporção</strong> com a natureza e finalidade do negócio.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Cláusula penal x Perdas e danos</h2>
                  <p className="text-foreground leading-relaxed mb-6">
                    Em regra, a cláusula penal <strong>substitui</strong> as perdas e danos (art. 416, CC). Ou seja, a parte não pode cobrar simultaneamente a multa e indenização adicional — salvo se o contrato permitir expressamente a cumulação ou se houver dolo do devedor.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Exemplos práticos</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Contrato de locação com multa de 3 aluguéis por rescisão antecipada;</li>
                    <li>Contrato de prestação de serviços com multa de 30% por desistência imotivada;</li>
                    <li>Financiamento com multa de 2% + juros de mora por atraso no pagamento;</li>
                    <li>Contrato de confidencialidade com multa de R$ 100 mil por vazamento de informações.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Recomendações</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Sempre inclua cláusula penal em contratos relevantes;</li>
                    <li>Seja proporcional: multas abusivas podem ser anuladas;</li>
                    <li>Diferencie claramente entre compensatória e moratória;</li>
                    <li>Preveja hipóteses específicas de aplicação;</li>
                    <li>Consulte advogado para definir valores adequados.</li>
                  </ul>

                  <div className="bg-accent/20 rounded-lg p-6 mt-8">
                    <div className="flex items-start">
                      <FileText className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Base legal:</h3>
                        <p className="text-foreground text-sm">
                          Código Civil, arts. 408 a 416 | Código de Defesa do Consumidor, art. 52 e 53
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate('/glossario-juridico')}
              >
                Ver Glossário Completo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/faq')}
              >
                Perguntas Frequentes
              </Button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default ClausulaPenal;