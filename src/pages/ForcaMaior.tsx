import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const ForcaMaior = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "O que é Força Maior? Evento Imprevisível e Inevitável no Direito Contratual",
    "description": "Entenda o conceito de força maior no direito civil brasileiro, suas características, diferenças com caso fortuito e como afeta o cumprimento de contratos.",
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
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15"
  };

  return (
    <>
      <SEO 
        title="O que é Força Maior? Evento Imprevisível e Inevitável no Direito Contratual"
        description="Entenda o conceito de força maior no direito civil brasileiro: características, diferenças entre caso fortuito, exemplos práticos e efeitos sobre contratos. Guia completo atualizado."
        keywords="força maior, evento imprevisível, força maior contrato, força maior código civil, diferença força maior caso fortuito, excludente responsabilidade civil"
        canonical="https://modelodecontrato.org/forca-maior-evento-imprevisivel"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <Breadcrumbs />
          
          <nav className="mb-6">
            <Button variant="outline" onClick={() => navigate("/glossario-juridico")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Glossário
            </Button>
          </nav>

          <article>
            <header className="text-center mb-12">
              <AlertTriangle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                O que é Força Maior? Evento Imprevisível e Inevitável no Direito Contratual
              </h1>
              <p className="text-xl text-muted-foreground">
                Entenda como eventos extraordinários podem exonerar responsabilidades contratuais
              </p>
            </header>

            <Card className="mb-8">
              <CardContent className="prose prose-slate max-w-none pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Conceito de Força Maior</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A força maior é um instituto jurídico previsto no artigo 393 do Código Civil brasileiro que configura uma excludente de responsabilidade civil. Trata-se de um <strong>evento imprevisível, inevitável e externo</strong> que impossibilita o cumprimento de uma obrigação contratual, sem que haja culpa do devedor.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Diferentemente do inadimplemento comum, na força maior não há negligência, imprudência ou dolo. O descumprimento ocorre por circunstâncias extraordinárias que estão completamente fora do controle das partes envolvidas no contrato.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Características da Força Maior</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para que um evento seja considerado força maior, deve reunir três requisitos essenciais:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Imprevisibilidade:</strong> O evento não poderia ser razoavelmente previsto pelas partes no momento da celebração do contrato</li>
                  <li><strong>Inevitabilidade:</strong> Mesmo que fosse previsto, seria impossível evitar suas consequências com os meios disponíveis</li>
                  <li><strong>Exterioridade:</strong> O fato deve ser externo à vontade e ao controle do devedor</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Exemplos Práticos de Força Maior</h2>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Terremotos, tsunamis e outros desastres naturais de grande magnitude</li>
                  <li>Guerras, invasões militares e conflitos armados</li>
                  <li>Epidemias e pandemias (como a COVID-19, em determinadas circunstâncias)</li>
                  <li>Atos de autoridade pública que impeçam o cumprimento (requisições, proibições legais)</li>
                  <li>Raios que causem incêndios e destruição de bens</li>
                  <li>Enchentes catastróficas em regiões não sujeitas a esse fenômeno</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Diferença entre Força Maior e Caso Fortuito</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Embora o Código Civil trate os dois institutos de forma semelhante quanto aos efeitos, a doutrina jurídica estabelece diferenças conceituais:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Força maior:</strong> Decorre de evento da natureza ou de ato humano externo (guerra, greve geral, ato governamental)</li>
                  <li><strong>Caso fortuito:</strong> Relacionado a eventos internos ou mecânicos (pane em máquina, falha técnica imprevisível)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Na prática, ambos produzem o mesmo efeito jurídico: a <strong>exclusão da responsabilidade civil</strong> do devedor pelo inadimplemento contratual.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Efeitos Jurídicos da Força Maior</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Quando configurada a força maior, os principais efeitos são:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Exoneração de responsabilidade:</strong> O devedor não responde por perdas e danos decorrentes do inadimplemento</li>
                  <li><strong>Suspensão das obrigações:</strong> Se temporário, o cumprimento pode ser postergado até a cessação do impedimento</li>
                  <li><strong>Resolução do contrato:</strong> Se definitivo, o contrato pode ser extinto sem ônus para as partes</li>
                  <li><strong>Impossibilidade de aplicação de multa contratual:</strong> Cláusulas penais não se aplicam em situações de força maior</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Cláusula de Força Maior em Contratos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  É recomendável que contratos comerciais e civis incluam cláusula específica sobre força maior, detalhando:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Quais eventos são considerados força maior para aquele contrato específico</li>
                  <li>Procedimentos de notificação entre as partes</li>
                  <li>Prazo para regularização após cessação do evento</li>
                  <li>Consequências sobre prazos, valores e obrigações</li>
                  <li>Possibilidade de renegociação ou resolução contratual</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Ônus da Prova</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cabe ao devedor que alega força maior <strong>provar</strong> que o evento ocorreu e que este foi realmente:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Imprevisível no momento da contratação</li>
                  <li>Inevitável, mesmo com todos os esforços razoáveis</li>
                  <li>A causa direta e exclusiva do inadimplemento</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A simples alegação não basta. É necessário produzir provas documentais, técnicas e testemunhais que demonstrem a ocorrência e as consequências do evento extraordinário.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Limitações da Força Maior</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Importante destacar que a força maior <strong>não se aplica</strong> em algumas situações:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Quando o devedor estava em mora (atraso) antes da ocorrência do evento</li>
                  <li>Se o contrato expressamente responsabilizar o devedor mesmo em caso de força maior</li>
                  <li>Quando o evento era previsível e o devedor assumiu o risco</li>
                  <li>Em obrigações de dar coisa certa, se já havia mora antes do evento</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Pandemia de COVID-19 e Força Maior</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A pandemia de COVID-19 gerou debates sobre sua caracterização como força maior. A jurisprudência tem entendido que:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>A pandemia em si pode constituir força maior, mas deve ser analisada caso a caso</li>
                  <li>É necessário demonstrar o <strong>nexo causal direto</strong> entre a pandemia e o inadimplemento</li>
                  <li>Simples dificuldades econômicas não configuram automaticamente força maior</li>
                  <li>Setores diretamente afetados (turismo, eventos, transporte aéreo) têm maior facilidade em comprovar</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Como Proceder em Caso de Força Maior</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se você se deparar com situação de força maior que impeça o cumprimento de contrato:
                </p>
                <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Notifique imediatamente</strong> a outra parte sobre o evento e suas consequências</li>
                  <li><strong>Documente tudo:</strong> laudos técnicos, notícias, decretos governamentais, fotos, vídeos</li>
                  <li><strong>Tente mitigar os danos:</strong> demonstre esforços para cumprir a obrigação de forma alternativa</li>
                  <li><strong>Busque renegociação:</strong> proponha novos prazos, condições ou soluções alternativas</li>
                  <li><strong>Consulte advogado:</strong> avalie a viabilidade jurídica da alegação e prepare defesa adequada</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Consulte o Glossário Completo</h3>
                    <p className="text-muted-foreground mb-4">
                      Explore outros termos jurídicos relacionados a contratos e obrigações civis.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => navigate("/glossario-juridico")}
                    >
                      Ver Glossário Jurídico
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>
        </div>
      </div>
    </>
  );
};

export default ForcaMaior;