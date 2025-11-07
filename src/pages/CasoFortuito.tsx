import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const CasoFortuito = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "O que é Caso Fortuito? Evento Inevitável no Direito Contratual Brasileiro",
    "description": "Entenda o conceito de caso fortuito, suas diferenças com força maior, características e como afeta a responsabilidade civil em contratos.",
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
        title="O que é Caso Fortuito? Evento Inevitável no Direito Contratual Brasileiro"
        description="Guia completo sobre caso fortuito: conceito, características, diferenças com força maior, exemplos práticos e efeitos na responsabilidade civil. Código Civil atualizado."
        keywords="caso fortuito, evento inevitável, caso fortuito código civil, diferença caso fortuito força maior, excludente responsabilidade, caso fortuito contrato"
        canonical="https://modelodecontrato.org/caso-fortuito-evento-inevitavel"
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
              <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                O que é Caso Fortuito? Evento Inevitável no Direito Contratual Brasileiro
              </h1>
              <p className="text-xl text-muted-foreground">
                Entenda quando eventos inevitáveis excluem a responsabilidade contratual
              </p>
            </header>

            <Card className="mb-8">
              <CardContent className="prose prose-slate max-w-none pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Conceito de Caso Fortuito</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O caso fortuito é um instituto do direito civil brasileiro, previsto no artigo 393 do Código Civil, que funciona como excludente de responsabilidade civil. Trata-se de um <strong>evento que, embora possa ser previsto em tese, é inevitável</strong> e impossibilita o cumprimento de uma obrigação contratual, sem culpa do devedor.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Diferentemente da força maior (que está ligada a eventos externos extraordinários), o caso fortuito está mais relacionado a <strong>eventos internos, técnicos ou mecânicos</strong> que fogem ao controle humano, mas que em algumas situações poderiam ser previstos — embora não evitados.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Características do Caso Fortuito</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para caracterizar o caso fortuito, devem estar presentes os seguintes elementos:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Inevitabilidade:</strong> O evento não pode ser evitado por meios razoáveis, mesmo com diligência e cuidado</li>
                  <li><strong>Ausência de culpa:</strong> O devedor não agiu com negligência, imprudência ou dolo</li>
                  <li><strong>Nexo causal:</strong> Deve haver relação direta entre o evento e a impossibilidade de cumprir a obrigação</li>
                  <li><strong>Imprevisibilidade relativa:</strong> Embora possa ser teoricamente previsto, não se esperava que ocorresse naquele momento específico</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Exemplos Práticos de Caso Fortuito</h2>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Pane mecânica imprevisível:</strong> Motor de caminhão que falha repentinamente em transporte de mercadorias, sem sinais anteriores</li>
                  <li><strong>Incêndio acidental:</strong> Fogo iniciado por curto-circuito em instalação elétrica regular e vistoriada</li>
                  <li><strong>Rompimento de tubulação:</strong> Estouro de cano que causa alagamento, mesmo com manutenção preventiva</li>
                  <li><strong>Falha técnica em equipamento novo:</strong> Defeito de fabricação não detectável em sistema informatizado</li>
                  <li><strong>Morte súbita:</strong> Falecimento inesperado de prestador de serviço essencial e insubstituível</li>
                  <li><strong>Queda de energia:</strong> Apagão generalizado que impede atividade comercial ou industrial</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Diferença entre Caso Fortuito e Força Maior</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Embora o Código Civil trate ambos de forma equivalente (art. 393), a doutrina jurídica diferencia:
                </p>
                
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <h3 className="font-bold text-foreground mb-2">Caso Fortuito:</h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Eventos internos ou ligados à atividade desenvolvida</li>
                    <li>Natureza mecânica, técnica ou humana</li>
                    <li>Pode ser parcialmente previsível, mas inevitável</li>
                    <li>Exemplos: pane em máquina, falha técnica, acidente de trabalho</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <h3 className="font-bold text-foreground mb-2">Força Maior:</h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Eventos externos e extraordinários</li>
                    <li>Natureza ambiental, política ou social</li>
                    <li>Geralmente imprevisível e inevitável</li>
                    <li>Exemplos: terremoto, guerra, ato governamental, pandemia</li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Na prática:</strong> Ambos produzem o mesmo efeito jurídico — exclusão de responsabilidade civil — mas a distinção ajuda na análise da natureza do evento e do ônus probatório.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Efeitos Jurídicos do Caso Fortuito</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Quando configurado o caso fortuito, os principais efeitos são:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Exclusão de responsabilidade:</strong> O devedor não responde por perdas e danos</li>
                  <li><strong>Suspensão da obrigação:</strong> Se temporário, as obrigações são suspensas até a superação do problema</li>
                  <li><strong>Extinção do contrato:</strong> Se definitivo e irreversível, o contrato pode ser resolvido sem penalidades</li>
                  <li><strong>Não incidência de juros e multas:</strong> Encargos moratórios não são aplicáveis no período do impedimento</li>
                  <li><strong>Divisão de riscos:</strong> Cada parte suporta seus próprios prejuízos, sem direito a indenização</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Caso Fortuito Interno vs. Externo</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A doutrina e jurisprudência modernas distinguem ainda:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Caso fortuito interno:</strong> Relacionado à atividade do fornecedor (ex: falha no processo produtivo). <em>Não exclui responsabilidade em relações de consumo</em></li>
                  <li><strong>Caso fortuito externo:</strong> Completamente alheio à atividade e imprevisível (ex: vandalismo, sabotagem externa). <em>Pode excluir responsabilidade mesmo em relações de consumo</em></li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Essa distinção é especialmente relevante nas relações regidas pelo Código de Defesa do Consumidor (CDC).
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Caso Fortuito e Relações de Consumo</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  No âmbito do CDC, a aplicação do caso fortuito como excludente de responsabilidade é <strong>mais restrita</strong>:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Fornecedores respondem objetivamente por vícios e defeitos de produtos/serviços</li>
                  <li>Caso fortuito interno (ligado ao risco da atividade) NÃO exclui responsabilidade</li>
                  <li>Apenas caso fortuito externo pode afastar a obrigação de indenizar</li>
                  <li>Jurisprudência é rigorosa na análise do nexo causal</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Ônus da Prova</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cabe ao devedor que alega caso fortuito <strong>comprovar</strong>:
                </p>
                <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>A ocorrência do evento extraordinário</li>
                  <li>A inevitabilidade do evento, mesmo com diligência ordinária</li>
                  <li>O nexo de causalidade direto entre o evento e o inadimplemento</li>
                  <li>Que o evento não decorreu de culpa sua ou de seus prepostos</li>
                </ol>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Provas comuns incluem: laudos técnicos, boletins de ocorrência, relatórios de manutenção, testemunhos, registros fotográficos e documentação de terceiros.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Limitações da Excludente</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O caso fortuito <strong>NÃO se aplica</strong> quando:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>O devedor já estava em mora (atraso culposo) quando o evento ocorreu</li>
                  <li>O contrato estabelece que o devedor responde mesmo em caso fortuito</li>
                  <li>A natureza da obrigação não comporta a excludente (ex: seguros, garantias)</li>
                  <li>O evento era previsível e o devedor assumiu o risco da atividade</li>
                  <li>Houve culpa concorrente do devedor</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Cláusula Contratual sobre Caso Fortuito</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  É recomendável incluir nos contratos cláusula específica sobre caso fortuito, prevendo:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Definição clara de quais eventos são considerados caso fortuito</li>
                  <li>Procedimento de comunicação imediata entre as partes</li>
                  <li>Prazo para regularização após cessação do impedimento</li>
                  <li>Consequências sobre prazos, valores e entregas</li>
                  <li>Possibilidade de renegociação ou resolução do contrato</li>
                  <li>Distribuição de custos durante o período de suspensão</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Como Agir em Caso de Ocorrência</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se você se deparar com situação que configure caso fortuito:
                </p>
                <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Notifique imediatamente</strong> a outra parte por escrito (e-mail, carta registrada)</li>
                  <li><strong>Documente o evento:</strong> fotos, vídeos, boletim de ocorrência, laudo técnico</li>
                  <li><strong>Demonstre diligência:</strong> prove que tomou todas as medidas preventivas razoáveis</li>
                  <li><strong>Busque soluções alternativas:</strong> tente minimizar prejuízos e cumprir parcialmente</li>
                  <li><strong>Preserve provas:</strong> guarde equipamentos danificados, documentos e registros</li>
                  <li><strong>Consulte assessoria jurídica:</strong> avalie a viabilidade da excludente antes de alegar formalmente</li>
                </ol>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Caso Fortuito não é Desculpa para Negligência</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  É importante destacar que <strong>mera dificuldade, crise econômica ou falta de planejamento NÃO configuram caso fortuito</strong>. O instituto não pode ser usado como "desculpa" para inadimplência culposa.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Eventos alegados devem ser verdadeiramente extraordinários, inevitáveis e demonstráveis através de provas robustas. Tribunais são rigorosos na análise e rejeitam alegações genéricas ou infundadas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Explore Mais Conceitos Jurídicos</h3>
                    <p className="text-muted-foreground mb-4">
                      Conheça outros termos essenciais do direito civil e contratual no nosso glossário completo.
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

export default CasoFortuito;