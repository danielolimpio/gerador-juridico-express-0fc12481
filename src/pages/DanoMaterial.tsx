import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, DollarSign, Scale, AlertCircle, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";

const DanoMaterial = () => {
  const navigate = useNavigate();

  const relatedArticles: RelatedArticle[] = [
    {
      title: "Contrato de Aluguel Residencial: tudo o que você precisa saber antes de assinar",
      description: "Entenda cláusulas essenciais, seus direitos como inquilino e obrigações do locador.",
      slug: "contrato-aluguel-residencial",
      coverImage: "/images/blog/contrato-aluguel-residencial-cover.jpg",
      category: "Direitos & Deveres"
    },
    {
      title: "Contrato de Locação de Veículo: Regras para Alugar Carros",
      description: "Proteja seu patrimônio com um contrato de locação de veículo seguro e válido.",
      slug: "contrato-locacao-veiculo",
      coverImage: "/images/blog/contrato-locacao-veiculo-cover.jpg",
      category: "Passo a Passo"
    },
    {
      title: "Entenda a Diferença entre Contrato de Doação e Venda de Bens Móveis",
      description: "Confira as diferenças legais entre doação e venda de bens móveis.",
      slug: "contrato-doacao-venda-bens-moveis",
      coverImage: "/images/blog/contrato-doacao-venda-cover.jpg",
      category: "Direitos & Deveres"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dano Material - Indenização por Prejuízo Patrimonial",
    "description": "Entenda o que é dano material, como calcular a indenização, diferença entre dano emergente e lucro cessante, e como comprovar prejuízos patrimoniais.",
    "datePublished": "2025-11-11",
    "dateModified": "2025-11-11",
    "author": {
      "@type": "Organization",
      "name": "Modelo de Contrato"
    }
  };

  return (
    <>
      <SEO 
        title="Dano Material - Indenização por Prejuízo Patrimonial"
        description="Guia completo sobre dano material: conceito, tipos, cálculo da indenização, diferença com dano moral, dano emergente, lucro cessante e comprovação."
        keywords="dano material, indenização, prejuízo patrimonial, dano emergente, lucro cessante, reparação civil"
        canonical="https://modelodecontrato.org/dano-material"
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
              <DollarSign className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Dano Material
              </h1>
              <p className="text-xl text-muted-foreground">
                Prejuízo patrimonial e reparação de perdas econômicas
              </p>
            </header>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  O que é Dano Material?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Dano material é o prejuízo patrimonial sofrido por uma pessoa em decorrência 
                  do descumprimento contratual, ato ilícito ou qualquer conduta que cause efetiva 
                  diminuição no patrimônio da vítima. Trata-se de lesão de natureza econômica, 
                  mensurável financeiramente e passível de indenização.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Diferentemente do dano moral, que afeta direitos da personalidade, o dano 
                  material atinge diretamente o patrimônio da vítima, seja por perda efetiva de 
                  bens (dano emergente) ou por deixar de auferir ganhos esperados (lucro cessante). 
                  A indenização visa recompor o patrimônio ao estado anterior ao dano.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Tipos de Dano Material
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Dano Emergente</h3>
                    <p className="text-muted-foreground mb-2">
                      É a perda efetiva e imediata que o patrimônio sofre. Refere-se ao que 
                      efetivamente se perdeu, o prejuízo concreto e atual causado ao patrimônio 
                      da vítima.
                    </p>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Exemplos:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mt-2">
                        <li>Custo de reparo de veículo danificado em acidente</li>
                        <li>Despesas médicas e hospitalares em caso de lesão corporal</li>
                        <li>Valor de mercadoria destruída ou deteriorada</li>
                        <li>Gastos com aluguel de outro imóvel devido a dano no próprio</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. Lucro Cessante</h3>
                    <p className="text-muted-foreground mb-2">
                      É o que a vítima razoavelmente deixou de lucrar. Refere-se aos ganhos que 
                      eram esperados e deixaram de ser obtidos em razão do ato danoso. Deve ser 
                      baseado em expectativa razoável e provável.
                    </p>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Exemplos:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mt-2">
                        <li>Faturamento que taxista deixou de ter enquanto carro estava parado</li>
                        <li>Lucros que comerciante deixou de obter por fechamento forçado</li>
                        <li>Rendimentos perdidos por profissional liberal incapacitado</li>
                        <li>Ganhos não auferidos por atraso na entrega de imóvel</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. Perda de uma Chance</h3>
                    <p className="text-muted-foreground mb-2">
                      Modalidade especial de dano material que ocorre quando a conduta do agente 
                      priva a vítima da oportunidade de obter uma vantagem ou evitar um prejuízo. 
                      A chance perdida deve ser real e séria, não mera possibilidade.
                    </p>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Exemplos:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mt-2">
                        <li>Perda do prazo recursal por erro de advogado</li>
                        <li>Impedimento de participar de concurso público</li>
                        <li>Não apresentação de proposta comercial por falha de terceiro</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Requisitos para Configuração do Dano Material
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Conduta Ilícita</h3>
                    <p className="text-muted-foreground">
                      Ato ilícito praticado por ação ou omissão voluntária, negligência ou 
                      imprudência, violando direito ou causando dano a outrem. Em alguns casos, 
                      basta a conduta (responsabilidade objetiva).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. Dano Efetivo e Certo</h3>
                    <p className="text-muted-foreground">
                      Prejuízo patrimonial real, concreto e mensurável. Não se indeniza dano 
                      hipotético ou eventual. O dano deve ser atual (já ocorrido) ou futuro 
                      (certo e previsível).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. Nexo de Causalidade</h3>
                    <p className="text-muted-foreground">
                      Relação direta de causa e efeito entre a conduta do agente e o dano sofrido. 
                      O prejuízo deve decorrer diretamente da conduta ilícita, sem interrupção 
                      do nexo causal.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4. Prova do Prejuízo</h3>
                    <p className="text-muted-foreground">
                      Diferentemente do dano moral, o dano material deve ser comprovado pela 
                      vítima. É necessário demonstrar, com documentos e provas, a extensão do 
                      prejuízo patrimonial sofrido.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Como Comprovar o Dano Material
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    A comprovação do dano material exige documentação adequada e, em alguns 
                    casos, prova pericial. Principais meios de prova:
                  </p>

                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">Dano Emergente</h3>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Notas fiscais e recibos de despesas</li>
                        <li>Orçamentos de reparo ou substituição</li>
                        <li>Laudos periciais de avaliação</li>
                        <li>Extratos bancários demonstrando gastos</li>
                        <li>Contratos e comprovantes de pagamento</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">Lucro Cessante</h3>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Declarações de imposto de renda</li>
                        <li>Livros contábeis e balanços</li>
                        <li>Contratos demonstrando expectativa de ganho</li>
                        <li>Comprovantes de rendimentos anteriores</li>
                        <li>Perícia contábil calculando o lucro frustrado</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Atenção:</strong> A falta de documentação adequada pode inviabilizar 
                        a indenização por dano material. É essencial guardar todos os comprovantes 
                        e, se possível, fazer um levantamento fotográfico dos danos.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  Cálculo da Indenização por Dano Material
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    O valor da indenização corresponde à extensão do dano, seguindo o princípio 
                    da reparação integral previsto no artigo 944 do Código Civil. A indenização 
                    deve ser suficiente para restabelecer o patrimônio ao estado anterior.
                  </p>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Fórmula Básica</h3>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="font-mono text-sm text-muted-foreground">
                        Indenização = Dano Emergente + Lucro Cessante
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Exemplo Prático</h3>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        Acidente de trânsito com veículo de taxista:
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                        <li><strong>Dano emergente:</strong> R$ 8.000 (reparo do veículo)</li>
                        <li><strong>Lucro cessante:</strong> R$ 200/dia × 30 dias = R$ 6.000</li>
                        <li><strong>Total:</strong> R$ 14.000</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4">
                    <p className="text-sm text-amber-900 dark:text-amber-200">
                      <strong>Importante:</strong> A indenização pode incluir correção monetária 
                      e juros desde a data do evento danoso ou da citação, conforme o caso. 
                      Honorários advocatícios e custas processuais também podem ser devidos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Diferença entre Dano Material e Dano Moral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Dano Material</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Lesão patrimonial</li>
                      <li>Atinge bens e patrimônio</li>
                      <li>Mensurável economicamente</li>
                      <li>Exige comprovação documental</li>
                      <li>Indenização restitutória</li>
                      <li>Valor calculado objetivamente</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Dano Moral</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Lesão extrapatrimonial</li>
                      <li>Atinge direitos da personalidade</li>
                      <li>Não tem valor econômico direto</li>
                      <li>Pode ser presumido em casos graves</li>
                      <li>Indenização compensatória/punitiva</li>
                      <li>Valor arbitrado pelo juiz</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg mt-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Cumulação:</strong> Dano material e dano moral são independentes e 
                    cumuláveis. Um mesmo evento pode gerar ambos os tipos de dano, cabendo 
                    indenização por cada um deles (Súmula 37 do STJ).
                  </p>
                </div>
              </CardContent>
            </Card>

            <section className="bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa de Orientação sobre Dano Material?
              </h2>
              <p className="text-muted-foreground mb-6">
                Consulte nossa plataforma para entender melhor como comprovar prejuízos e 
                calcular a indenização devida em seu caso.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate('/faq')}
              >
                Ver Perguntas Frequentes
              </Button>
            </section>
          </article>
        </div>

        {/* Related Articles */}
        <RelatedArticles articles={relatedArticles} />
      </div>
    </>
  );
};

export default DanoMaterial;