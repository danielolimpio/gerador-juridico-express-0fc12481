import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, AlertTriangle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const OnerosiadeExcessiva = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "O que é Onerosidade Excessiva? Teoria da Imprevisão e Revisão Contratual",
    "description": "Entenda o que é onerosidade excessiva, quando pode ser alegada, como funciona a teoria da imprevisão e os direitos de revisão ou resolução contratual.",
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
        title="Onerosidade Excessiva: Teoria da Imprevisão e Revisão Cont"
        description="Onerosidade excessiva é a situação em que a prestação de uma das partes torna-se extremamente onerosa. Entenda a teoria da imprevisão, revisão contratual e seus direitos."
        keywords="onerosidade excessiva, teoria da imprevisão, revisão contratual, resolução de contrato, alteração circunstâncias, rebus sic stantibus"
        canonical="https://modelodecontrato.org/onerosidade-excessiva-teoria-imprevacao"
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
              <Scale className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                O que é Onerosidade Excessiva? Teoria da Imprevisão e Revisão Contratual
              </h1>
              <p className="text-xl text-muted-foreground">
                Entenda quando mudanças imprevisíveis podem justificar a revisão ou resolução de um contrato
              </p>
            </header>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    A <strong>onerosidade excessiva</strong> é um instituto jurídico previsto nos artigos 478 a 480 do Código Civil brasileiro que protege as partes de contratos quando eventos imprevisíveis alteram drasticamente o equilíbrio econômico das obrigações. Trata-se da aplicação da chamada <strong>teoria da imprevisão</strong> ou cláusula <em>rebus sic stantibus</em> (as coisas permanecem como estão).
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">O que caracteriza a onerosidade excessiva?</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Para que seja caracterizada, devem estar presentes três requisitos cumulativos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Contrato de execução continuada ou diferida:</strong> como locação, financiamento ou fornecimento de produtos/serviços a prazo.</li>
                    <li><strong>Acontecimento extraordinário e imprevisível:</strong> eventos como crises econômicas, hiperinflação, pandemias, guerras ou mudanças drásticas no câmbio.</li>
                    <li><strong>Desproporção extrema:</strong> a prestação de uma parte torna-se excessivamente onerosa, enquanto a outra obtém vantagem desproporcional.</li>
                  </ul>

                  <div className="bg-primary/10 border-l-4 border-primary p-4 my-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Importante:</h3>
                        <p className="text-foreground">
                          A onerosidade excessiva não se aplica a simples flutuações normais de mercado ou riscos previsíveis do negócio. Deve haver uma alteração radical e imprevisível das circunstâncias.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Exemplos práticos</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Contrato de fornecimento de insumos em dólar que sofreu alta cambial de 200% devido a crise internacional;</li>
                    <li>Financiamento imobiliário com parcelas que triplicaram durante período de hiperinflação;</li>
                    <li>Contrato de prestação de serviços cujos custos aumentaram drasticamente por medidas governamentais emergenciais;</li>
                    <li>Locação comercial durante pandemia com fechamento obrigatório do comércio.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Consequências jurídicas</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    A parte prejudicada pode:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Pedir a resolução do contrato:</strong> extinguir o contrato judicialmente, retornando as partes ao estado anterior;</li>
                    <li><strong>Solicitar revisão das cláusulas:</strong> modificar os termos para restabelecer o equilíbrio econômico (art. 479, CC);</li>
                    <li><strong>Suspender temporariamente as obrigações:</strong> em casos extremos, até decisão judicial.</li>
                  </ul>

                  <p className="text-foreground leading-relaxed mb-6">
                    O juiz pode modificar equitativamente as condições do contrato ou decretá-lo resolvido, com fundamento em direito. A outra parte pode oferecer modificação equitativa para evitar a resolução.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Diferença entre onerosidade excessiva e caso fortuito</h2>
                  <p className="text-foreground leading-relaxed mb-6">
                    O <strong>caso fortuito</strong> ou <strong>força maior</strong> impossibilita totalmente o cumprimento do contrato, enquanto a <strong>onerosidade excessiva</strong> apenas torna extremamente difícil ou desproporcional o cumprimento. Na onerosidade, o devedor ainda pode cumprir, mas com sacrifício excessivo.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Ônus da prova</h2>
                  <p className="text-foreground leading-relaxed mb-6">
                    Cabe à parte que alega onerosidade excessiva comprovar:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>A ocorrência do evento extraordinário;</li>
                    <li>A imprevisibilidade desse evento;</li>
                    <li>A desproporção concreta entre as prestações;</li>
                    <li>O nexo causal entre o evento e o desequilíbrio.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Recomendações</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Documente todas as mudanças nas condições econômicas do contrato;</li>
                    <li>Busque primeiramente a negociação extrajudicial;</li>
                    <li>Consulte um advogado especializado antes de ingressar com ação;</li>
                    <li>Inclua cláusulas de revisão periódica nos contratos de longo prazo;</li>
                    <li>Considere mecanismos de indexação e reajuste automático.</li>
                  </ul>

                  <div className="bg-accent/20 rounded-lg p-6 mt-8">
                    <div className="flex items-start">
                      <FileText className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Base legal:</h3>
                        <p className="text-foreground text-sm">
                          Código Civil, arts. 478 a 480 | Código de Defesa do Consumidor, art. 6º, V
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

export default OnerosiadeExcessiva;