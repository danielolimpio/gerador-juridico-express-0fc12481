import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Dices, Scale, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const ContratoAleatorio = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Contrato Aleatório - Contratos com Risco e Álea",
    "description": "Entenda o que é contrato aleatório, suas características, tipos, diferença com contrato comutativo e exemplos práticos como seguros e apostas.",
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
        title="Contrato Aleatório - Contratos com Risco e Álea"
        description="Guia completo sobre contrato aleatório: conceito, características, tipos (seguro, aposta, jogo, renda vitalícia), diferença com contrato comutativo e legislação."
        keywords="contrato aleatório, álea, risco contratual, contrato de seguro, aposta, jogo, direito civil"
        canonical="https://modelodecontrato.org/contrato-aleatorio"
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
              <Dices className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Contrato Aleatório
              </h1>
              <p className="text-xl text-muted-foreground">
                Contratos em que o risco da prestação é assumido por uma das partes
              </p>
            </header>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  O que é Contrato Aleatório?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Contrato aleatório é aquele em que a prestação de uma ou ambas as partes 
                  depende de evento futuro e incerto (álea), fazendo com que o resultado 
                  econômico do negócio seja imprevisível no momento da contratação. O elemento 
                  essencial é o risco, que é aceito conscientemente pelas partes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  No contrato aleatório, não é possível determinar antecipadamente se haverá 
                  vantagem ou prejuízo para as partes. A álea (risco) é da essência do contrato, 
                  e as partes aceitam a possibilidade de ganhar muito, pouco ou nada, dependendo 
                  do evento incerto.
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
                    <h3 className="font-semibold text-foreground mb-2">1. Presença da Álea</h3>
                    <p className="text-muted-foreground">
                      A álea (do latim "alea" = dado, sorte) é o elemento incerto que caracteriza 
                      estes contratos. É o risco assumido pelas partes quanto ao resultado 
                      econômico do negócio.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. Equivalência Incerta</h3>
                    <p className="text-muted-foreground">
                      Ao contrário dos contratos comutativos, nos aleatórios não há equivalência 
                      das prestações. Uma parte pode obter grande vantagem enquanto a outra sofre 
                      prejuízo, sem que isso configure desequilíbrio contratual.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. Risco Assumido</h3>
                    <p className="text-muted-foreground">
                      O risco é elemento essencial e voluntariamente aceito. As partes conhecem 
                      e aceitam a possibilidade de perda ou ganho excessivo ao celebrarem o contrato.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4. Irrevogabilidade da Álea</h3>
                    <p className="text-muted-foreground">
                      Uma vez assumido o risco, as partes não podem alegar onerosidade excessiva 
                      ou desequilíbrio contratual, pois a álea faz parte da natureza do contrato.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Tipos de Contrato Aleatório
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Contrato de Seguro</h3>
                    <p className="text-muted-foreground mb-2">
                      Uma parte (segurado) paga um prêmio à outra (seguradora) que se obriga a 
                      indenizar caso ocorra o evento previsto (sinistro). A seguradora assume o 
                      risco de ter que pagar valor muito superior ao prêmio recebido.
                    </p>
                    <p className="text-muted-foreground italic">
                      Exemplo: Seguro de automóvel - o segurado paga R$ 2.000 de prêmio, mas pode 
                      receber R$ 50.000 se o carro for roubado.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. Jogo e Aposta</h3>
                    <p className="text-muted-foreground mb-2">
                      Contratos em que o ganho ou perda depende exclusivamente da sorte ou azar. 
                      No Brasil, jogos autorizados geram obrigação natural (não há ação judicial 
                      para cobrança), enquanto apostas ilegais são nulas.
                    </p>
                    <p className="text-muted-foreground italic">
                      Exemplo: Loterias oficiais, apostas em competições esportivas legalizadas.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. Renda Vitalícia (Constituída por Aleatório)</h3>
                    <p className="text-muted-foreground mb-2">
                      Uma parte transfere bens a outra que se obriga a pagar prestações periódicas 
                      pelo resto da vida do beneficiário. O risco está na duração da vida.
                    </p>
                    <p className="text-muted-foreground italic">
                      Exemplo: Pessoa transfere imóvel em troca de recebimento mensal vitalício - 
                      se viver muito, recebe muito mais que o valor do imóvel.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4. Compra e Venda de Coisas Futuras (Emptio Spei)</h3>
                    <p className="text-muted-foreground mb-2">
                      Compra da esperança, não do resultado. O comprador adquire o risco da 
                      colheita, safra ou pesca, independente do resultado.
                    </p>
                    <p className="text-muted-foreground italic">
                      Exemplo: Compra de toda a produção de peixes de um barco pesqueiro antes 
                      da saída para o mar - pode pegar muito, pouco ou nada.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5. Contratos Diferenciais (Derivativos)</h3>
                    <p className="text-muted-foreground mb-2">
                      Operações financeiras cujo resultado depende da variação de preços de ativos 
                      subjacentes, como ações, commodities, moedas, etc.
                    </p>
                    <p className="text-muted-foreground italic">
                      Exemplo: Contratos futuros, opções, swaps no mercado financeiro.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dices className="w-5 h-5 text-primary" />
                  Diferença entre Contrato Aleatório e Comutativo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold text-foreground">Aspecto</th>
                        <th className="text-left p-3 font-semibold text-foreground">Contrato Aleatório</th>
                        <th className="text-left p-3 font-semibold text-foreground">Contrato Comutativo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 text-muted-foreground">Risco</td>
                        <td className="p-3 text-muted-foreground">Risco é essencial</td>
                        <td className="p-3 text-muted-foreground">Risco é acidental</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-muted-foreground">Prestações</td>
                        <td className="p-3 text-muted-foreground">Incertas e desproporcionais</td>
                        <td className="p-3 text-muted-foreground">Certas e equivalentes</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-muted-foreground">Previsibilidade</td>
                        <td className="p-3 text-muted-foreground">Resultado imprevisível</td>
                        <td className="p-3 text-muted-foreground">Resultado previsível</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-muted-foreground">Onerosidade Excessiva</td>
                        <td className="p-3 text-muted-foreground">Não se aplica</td>
                        <td className="p-3 text-muted-foreground">Pode ser aplicada</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-muted-foreground">Exemplos</td>
                        <td className="p-3 text-muted-foreground">Seguro, aposta, jogo</td>
                        <td className="p-3 text-muted-foreground">Compra e venda, locação</td>
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
                  Os contratos aleatórios são regulados pelo Código Civil Brasileiro:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Artigos 458 a 461:</strong> Contratos aleatórios em geral</li>
                  <li><strong>Artigo 459:</strong> Venda de coisas futuras</li>
                  <li><strong>Artigo 460:</strong> Venda de coisas existentes mas expostas a risco</li>
                  <li><strong>Artigo 757 e seguintes:</strong> Contrato de seguro</li>
                  <li><strong>Artigos 814 a 817:</strong> Jogo e aposta</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-primary/5">
              <CardHeader>
                <CardTitle>Quando Utilizar Contratos Aleatórios?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Transferência de risco:</strong> Quando se deseja transferir 
                      determinado risco para outra parte (seguros)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Operações futuras incertas:</strong> Compra de safras, pescas, 
                      colheitas ainda não realizadas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Proteção financeira:</strong> Hedge e proteção contra variações 
                      de preços no mercado financeiro
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Previdência privada:</strong> Garantir renda futura em troca de 
                      patrimônio presente
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <section className="bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa de Contratos Personalizados?
              </h2>
              <p className="text-muted-foreground mb-6">
                Crie contratos sob medida para suas necessidades, incluindo cláusulas 
                específicas e juridicamente seguras.
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

export default ContratoAleatorio;