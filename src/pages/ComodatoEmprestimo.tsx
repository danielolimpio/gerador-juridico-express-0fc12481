import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Package, AlertCircle, CheckCircle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const ComodatoEmprestimo = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "O que é Comodato? Empréstimo Gratuito de Bens: Direitos e Deveres",
    "description": "Comodato é o empréstimo gratuito de bem não fungível previsto no Código Civil. Entenda direitos e deveres do comodante e comodatário.",
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
        title="O que é Comodato? Empréstimo Gratuito de Bens: Direitos e"
        description="Comodato é o empréstimo gratuito de bem não fungível previsto no Código Civil. Entenda direitos e deveres do comodante e comodatário, prazos e obrigações legais."
        keywords="comodato, empréstimo gratuito, comodante, comodatário, código civil, contrato de comodato, bem não fungível"
        canonical="https://modelodecontrato.org/comodato-emprestimo-gratuito"
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
            <header className="mb-8">
              <Package className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
                O que é Comodato? Entenda o Empréstimo Gratuito de Bens
              </h1>
              <p className="text-xl text-muted-foreground text-center">
                Guia Completo sobre Direitos, Deveres e Responsabilidades do Comodante e Comodatário
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O comodato é um contrato civil previsto nos artigos 579 a 585 do Código Civil brasileiro (Lei nº 10.406/2002) e 
                    consiste no empréstimo gratuito de um bem não fungível — ou seja, um bem que não pode ser 
                    substituído por outro idêntico, como um carro, um imóvel, um equipamento, uma obra de arte ou 
                    qualquer outro bem individualizado.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Trata-se de um contrato real, que se aperfeiçoa com a entrega efetiva da coisa, e essencialmente 
                    gratuito — ou seja, não há contraprestação financeira pelo uso do bem. A pessoa que empresta o bem 
                    é chamada de <strong>comodante</strong>, e quem recebe o bem para uso temporário é denominada 
                    <strong> comodatário</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Este instituto jurídico é amplamente utilizado em relações familiares, empresariais e culturais, 
                    representando uma forma de colaboração baseada na confiança mútua entre as partes. Por ser gratuito, 
                    o comodato beneficia especialmente o comodatário, mas impõe a este importantes deveres de conservação 
                    e devolução do bem emprestado.
                  </p>
                </CardContent>
              </Card>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Características Essenciais do Comodato
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      O comodato apresenta características específicas que o diferenciam de outros contratos de 
                      empréstimo. É fundamental compreender cada uma delas para aplicar corretamente este instituto:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-4">
                      <li><strong>Gratuidade:</strong> Não há pagamento pelo uso do bem. Se houver contraprestação 
                      financeira, o contrato passa a ser de locação.</li>
                      <li><strong>Bem não fungível:</strong> O objeto deve ser individualizado e insubstituível. 
                      Não se aplica a dinheiro ou produtos genéricos.</li>
                      <li><strong>Temporariedade:</strong> O empréstimo tem prazo determinado ou é vinculado a 
                      finalidade específica, após o que deve ser devolvido.</li>
                      <li><strong>Restituição do mesmo bem:</strong> Diferentemente do mútuo (empréstimo de bens 
                      fungíveis como dinheiro), no comodato deve-se devolver exatamente o mesmo bem emprestado.</li>
                      <li><strong>Transferência apenas da posse:</strong> A propriedade permanece com o comodante; 
                      o comodatário recebe apenas o direito de usar o bem.</li>
                      <li><strong>Contrato real:</strong> Aperfeiçoa-se com a entrega efetiva do bem, não apenas 
                      com o acordo de vontades.</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      Ao final do prazo acordado — ou quando o comodante precisar do bem por necessidade imprevista 
                      e urgente —, o comodatário deve devolver o bem no estado em que se encontra, considerando o 
                      desgaste natural pelo uso regular e adequado.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Obrigações e Responsabilidades do Comodatário
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Apesar de o comodato ser gratuito e benéfico para o comodatário, este assume importantes 
                      obrigações e responsabilidades previstas na lei e no contrato. O não cumprimento pode gerar 
                      consequências jurídicas graves:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">1. Conservação e Guarda do Bem</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Deve cuidar do bem com a diligência de um "bom pai de família" (artigo 582 do CC), 
                          respondendo por perdas e danos em caso de negligência, imperícia ou imprudência.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">2. Uso Conforme o Acordado</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Usar o bem exclusivamente para a finalidade determinada no contrato. O uso diverso 
                          pode caracterizar abuso de confiança e autorizar o comodante a retomar o bem imediatamente.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">3. Proibição de Subcomodato sem Autorização</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Não pode emprestar o bem a terceiros sem expressa autorização do comodante. A violação 
                          desta regra pode gerar rescisão do contrato e indenização por perdas e danos.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">4. Devolução no Prazo</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Restituir o bem ao final do prazo acordado ou quando solicitado pelo comodante em caso 
                          de necessidade imprevista e urgente. A mora na devolução pode gerar multa e indenização.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">5. Responsabilidade por Perecimento</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Responde pela perda ou deterioração do bem se esta decorrer de culpa sua, ainda que por 
                          caso fortuito, se este ocorreu por emprego do bem em uso diverso ou por ceder a coisa a 
                          terceiro sem autorização (artigo 583 do CC).
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">6. Despesas Ordinárias</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Arcar com as despesas ordinárias de manutenção e conservação do bem durante o período 
                          de uso, salvo disposição contratual em contrário.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Direitos e Obrigações do Comodante
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      O comodante também possui direitos e deveres específicos que devem ser observados:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Direitos do Comodante:</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                          <li>Reaver o bem ao término do prazo estipulado ou cumprida a finalidade</li>
                          <li>Retomar o bem antes do prazo em caso de necessidade imprevista e urgente (artigo 581 do CC)</li>
                          <li>Exigir indenização por danos causados por uso inadequado ou negligência</li>
                          <li>Rescindir o contrato se o comodatário der uso diverso do acordado</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Obrigações do Comodante:</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                          <li>Entregar o bem em condições adequadas de uso</li>
                          <li>Respeitar o prazo acordado, não podendo exigir devolução antecipada sem justa causa</li>
                          <li>Responder por vícios ocultos do bem que causem danos ao comodatário</li>
                          <li>Arcar com despesas extraordinárias (reparos estruturais necessários à conservação do bem)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Aplicações Práticas do Comodato
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      O comodato é amplamente utilizado em diversas situações do cotidiano, tanto em relações 
                      pessoais quanto empresariais:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Contexto Familiar:</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Pais que emprestam imóvel para filho morar temporariamente; empréstimo de veículo entre 
                          familiares; cessão de equipamentos domésticos.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Contexto Empresarial:</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Empréstimo de máquinas e equipamentos entre empresas; cessão temporária de espaços 
                          comerciais; fornecimento de equipamentos promocionais (geladeiras, freezers) por 
                          fornecedores a estabelecimentos comerciais.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Contexto Cultural:</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Empréstimo de obras de arte para exposições temporárias; cessão de acervos bibliográficos; 
                          empréstimo de instrumentos musicais.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-muted-foreground leading-relaxed">
                        <strong>Recomendação importante:</strong> Por ser informal em muitos casos, recomenda-se 
                        sempre formalizar o comodato por escrito, especialmente quando envolve bens de alto valor, 
                        estabelecendo claramente prazo, finalidade, responsabilidades e condições de devolução. 
                        Isso evita conflitos futuros e facilita a comprovação em eventual litígio.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Diferenças entre Comodato e Outros Contratos
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Comodato vs. Locação:</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Enquanto o comodato é gratuito, a locação envolve pagamento de aluguel. Na locação há 
                          onerosidade; no comodato, liberalidade.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Comodato vs. Mútuo:</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          O mútuo refere-se ao empréstimo de bens fungíveis (dinheiro, grãos, combustível), 
                          transferindo a propriedade e permitindo restituição de coisa equivalente. O comodato 
                          trata de bens não fungíveis, sem transferência de propriedade, exigindo devolução do 
                          mesmo bem.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Comodato vs. Doação:</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Na doação há transferência definitiva da propriedade sem obrigação de devolução. 
                          No comodato, a propriedade permanece com o comodante e há dever de restituição.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>

            <div className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa de um Contrato de Comodato?
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

export default ComodatoEmprestimo;
