import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRightLeft, Users, FileText, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const CessaoCredito = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cessão de Crédito: Transferência de Direitos Creditórios",
    "description": "Entenda a cessão de crédito: transferência de direitos creditórios, cedente, cessionário, devedor e procedimentos legais.",
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
        title="Cessão de Crédito: Transferência de Direitos Creditórios"
        description="Entenda a cessão de crédito: transferência de direitos creditórios do cedente para o cessionário, com ou sem consentimento do devedor. Procedimentos e legislação."
        keywords="cessão de crédito, transferência de crédito, cedente, cessionário, devedor, direitos creditórios, cessão de contrato"
        canonical="https://modelodecontrato.org/cessao-credito"
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

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <ArrowRightLeft className="h-10 w-10 text-primary" />
                <div>
                  <h1 className="text-4xl font-bold text-foreground">
                    Cessão de Crédito
                  </h1>
                  <p className="text-sm text-muted-foreground mt-1">
                    Publicado em 08 de novembro de 2025
                  </p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transferência do direito de crédito de um credor (cedente) para um terceiro (cessionário), com ou sem consentimento do devedor.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <ArrowRightLeft className="h-6 w-6 text-primary" />
                  O que é Cessão de Crédito?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A cessão de crédito é o negócio jurídico pelo qual o <strong>credor (cedente)</strong> transfere a um terceiro <strong>(cessionário)</strong> os direitos decorrentes de uma obrigação, sem necessidade de autorização do <strong>devedor (cedido)</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Regulamentada pelos artigos 286 a 298 do Código Civil, a cessão permite que o credor original transfira seus direitos creditórios, seja por meio de venda, doação ou outra forma de negociação. O devedor permanece vinculado à obrigação original, mas passa a dever ao novo credor (cessionário).
                </p>
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">📋 Importante:</strong> A cessão transfere apenas o direito de crédito, não a obrigação. O devedor não precisa autorizar, mas deve ser notificado para que a cessão seja eficaz perante ele.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Partes Envolvidas na Cessão
                </h2>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">👤 Cedente</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p className="text-sm mb-2"><strong>Credor original</strong> que transfere o direito de crédito.</p>
                      <p className="text-xs">Exemplo: Empresa que vende suas duplicatas a receber.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">🤝 Cessionário</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p className="text-sm mb-2"><strong>Novo credor</strong> que adquire o direito de receber o crédito.</p>
                      <p className="text-xs">Exemplo: Factoring ou banco que compra os recebíveis.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">💼 Devedor Cedido</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p className="text-sm mb-2"><strong>Devedor</strong> da obrigação, que passa a dever ao cessionário.</p>
                      <p className="text-xs">Exemplo: Cliente que deve pagar a fatura.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Como Funciona a Cessão de Crédito?
                </h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Procedimento</h3>
                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <ol className="space-y-3 text-muted-foreground">
                      <li>
                        <strong className="text-foreground">1. Contrato de Cessão</strong>
                        <p className="text-sm mt-1">Cedente e cessionário formalizam a transferência do crédito por escrito.</p>
                      </li>
                      <li>
                        <strong className="text-foreground">2. Notificação ao Devedor</strong>
                        <p className="text-sm mt-1">O devedor deve ser notificado da cessão para que ela produza efeitos em relação a ele.</p>
                      </li>
                      <li>
                        <strong className="text-foreground">3. Pagamento ao Novo Credor</strong>
                        <p className="text-sm mt-1">Após a notificação, o devedor deve pagar diretamente ao cessionário.</p>
                      </li>
                      <li>
                        <strong className="text-foreground">4. Quitação da Obrigação</strong>
                        <p className="text-sm mt-1">O cessionário recebe o pagamento e quita a obrigação do devedor.</p>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Requisitos de Validade</h3>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ <strong>Crédito existente e determinado:</strong> Deve haver um direito de crédito real</li>
                      <li>✓ <strong>Crédito cedível:</strong> Não pode haver vedação legal ou contratual</li>
                      <li>✓ <strong>Forma escrita:</strong> Recomendável para fins probatórios</li>
                      <li>✓ <strong>Notificação ao devedor:</strong> Essencial para eficácia perante o devedor</li>
                      <li>✓ <strong>Capacidade das partes:</strong> Cedente e cessionário capazes</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Tipos de Cessão de Crédito</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Cessão Onerosa</CardTitle>
                      <CardDescription>Transferência mediante pagamento de um valor</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      O cessionário paga ao cedente pela transferência do crédito, geralmente com deságio (valor menor que o crédito). Exemplo: venda de duplicatas a factoring.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Cessão Gratuita</CardTitle>
                      <CardDescription>Transferência sem contrapartida financeira</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      O crédito é transferido gratuitamente, sem pagamento. Exemplo: doação de crédito entre familiares ou para fins beneficentes.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Cessão Pro Solvendo</CardTitle>
                      <CardDescription>Cedente não garante o pagamento pelo devedor</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Cedente transfere o crédito mas não garante que o devedor pagará. Se o devedor não pagar, o cessionário não pode cobrar do cedente.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Cessão Pro Soluto</CardTitle>
                      <CardDescription>Cedente garante a existência e solvência do crédito</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Cedente garante que o devedor pagará. Se o devedor não pagar, o cedente deve devolver o valor ao cessionário. Mais rara.
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  Aplicações Práticas
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">🏦 Factoring e Antecipação</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p className="text-sm mb-2">Empresas cedem seus recebíveis (duplicatas, cheques, notas promissórias) para obter liquidez imediata.</p>
                      <p className="text-xs italic">Uso comum no fluxo de caixa empresarial.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">🏢 Reestruturação de Dívidas</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p className="text-sm mb-2">Bancos e instituições cedem créditos inadimplentes para empresas de cobrança ou recovery.</p>
                      <p className="text-xs italic">Gestão de carteiras de crédito.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">💳 Securitização</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p className="text-sm mb-2">Transformação de recebíveis em títulos negociáveis no mercado financeiro.</p>
                      <p className="text-xs italic">Instrumento de captação de recursos.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">🤝 Sucessão Empresarial</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p className="text-sm mb-2">Transferência de créditos em processos de fusão, cisão ou venda de empresas.</p>
                      <p className="text-xs italic">Reorganização societária.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Direitos e Responsabilidades</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Direitos do Cessionário</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Receber o crédito do devedor</li>
                        <li>✓ Exercer todas as garantias e acessórios do crédito</li>
                        <li>✓ Cobrar judicialmente o devedor</li>
                        <li>✓ Opor contra o devedor as mesmas defesas do cedente</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Responsabilidades do Cedente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Garantir a existência do crédito cedido</li>
                        <li>✓ Notificar o devedor da cessão</li>
                        <li>✓ Entregar documentos comprobatórios do crédito</li>
                        <li>✓ Responder por vícios na cessão pro soluto</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Situação do Devedor</h2>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-3">O devedor pode opor ao cessionário:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ <strong>Exceções pessoais contra o cedente:</strong> Defesas que tinha contra o credor original</li>
                      <li>✓ <strong>Vícios do negócio original:</strong> Nulidade, anulabilidade, ilicitude</li>
                      <li>✓ <strong>Pagamento anterior:</strong> Se pagou ao cedente antes da notificação</li>
                      <li>✓ <strong>Compensação:</strong> Créditos que tinha contra o cedente</li>
                      <li>✓ <strong>Cláusula de não cessão:</strong> Se houver vedação contratual à cessão</li>
                    </ul>
                    <p className="text-sm mt-4 italic">
                      ⚠️ O devedor não pode recusar o pagamento ao cessionário após ser notificado validamente da cessão.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Legislação Aplicável</h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <strong className="text-foreground">Código Civil - Arts. 286 a 298</strong>
                        <p className="text-sm mt-1">Capítulo sobre cessão de crédito e outros negócios sobre direitos.</p>
                      </li>
                      <li>
                        <strong className="text-foreground">Art. 286</strong>
                        <p className="text-sm mt-1">"O credor pode ceder o seu crédito, se a isso não se opuser a natureza da obrigação, a lei, ou a convenção com o devedor."</p>
                      </li>
                      <li>
                        <strong className="text-foreground">Art. 290</strong>
                        <p className="text-sm mt-1">"A cessão do crédito não tem eficácia em relação ao devedor, senão quando a este notificada."</p>
                      </li>
                      <li>
                        <strong className="text-foreground">Art. 295</strong>
                        <p className="text-sm mt-1">"Na cessão por título oneroso, o cedente, ainda que não se responsabilize, fica responsável ao cessionário pela existência do crédito."</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <Card className="border-amber-500/20 bg-amber-500/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      Cuidados Importantes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <ul className="space-y-2">
                      <li>⚠️ <strong>Notificação obrigatória:</strong> Sem notificar o devedor, a cessão não é eficaz perante ele</li>
                      <li>⚠️ <strong>Verificar vedações:</strong> Alguns contratos proíbem a cessão de crédito</li>
                      <li>⚠️ <strong>Forma escrita:</strong> Sempre formalize por escrito para evitar disputas</li>
                      <li>⚠️ <strong>Due diligence:</strong> Cessionário deve verificar a existência e validade do crédito</li>
                      <li>⚠️ <strong>Garantias:</strong> Defina claramente se há garantia do cedente sobre o pagamento</li>
                      <li>⚠️ <strong>Impostos:</strong> Cessão onerosa pode gerar tributação (IOF, IR, ISS)</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>
          </article>

          <section className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
            <ArrowRightLeft className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Precisa Formalizar uma Cessão de Crédito?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Crie contratos de cessão de crédito personalizados com todas as cláusulas necessárias para proteger seus direitos.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate('/gerador')}
            >
              Criar Contrato Agora
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default CessaoCredito;
