import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, User, Scale, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const ContratoUnilateral = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Contrato Unilateral - Obrigação de Apenas Uma Parte",
    "description": "Entenda o que é contrato unilateral, suas características, exemplos práticos, diferença com contrato bilateral e principais aplicações no direito civil.",
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
        title="Contrato Unilateral - Obrigação de Apenas Uma Parte"
        description="Guia completo sobre contrato unilateral: conceito, características, exemplos como doação e comodato, diferença com contrato bilateral e aplicação prática."
        keywords="contrato unilateral, doação, comodato, mútuo gratuito, obrigação unilateral, direito contratual"
        canonical="https://modelodecontrato.org/contrato-unilateral"
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

          <article className="prose prose-lg max-w-none">
            <header className="text-center mb-12">
              <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Contrato Unilateral
              </h1>
              <p className="text-xl text-muted-foreground">
                Contratos em que apenas uma parte assume obrigações
              </p>
            </header>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  O que é Contrato Unilateral?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  O contrato unilateral é aquele em que apenas uma das partes assume obrigações 
                  no momento da celebração do contrato, enquanto a outra parte apenas adquire 
                  direitos. Não existe reciprocidade de prestações, diferentemente do que ocorre 
                  nos contratos bilaterais.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  É importante destacar que a classificação como contrato unilateral considera 
                  o momento da formação do contrato. Mesmo que posteriormente surjam obrigações 
                  para a outra parte, o contrato mantém sua natureza unilateral. Esses contratos 
                  são geralmente gratuitos, beneficiando apenas uma das partes.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Características do Contrato Unilateral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Obrigação de Uma Só Parte</h3>
                    <p className="text-muted-foreground">
                      No momento da formação do contrato, apenas uma parte se obriga a realizar 
                      determinada prestação. A outra parte é mera beneficiária, sem assumir 
                      qualquer contraprestação.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. Ausência de Reciprocidade</h3>
                    <p className="text-muted-foreground">
                      Não há interdependência de prestações. A obrigação da parte não corresponde 
                      a uma obrigação correlata da outra, diferentemente dos contratos bilaterais 
                      onde há sinalagma (reciprocidade).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. Gratuidade</h3>
                    <p className="text-muted-foreground">
                      A maioria dos contratos unilaterais é gratuita, pois beneficia apenas uma 
                      parte sem qualquer vantagem patrimonial para quem se obriga. O devedor 
                      assume a obrigação sem receber nada em troca.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4. Obrigações Posteriores</h3>
                    <p className="text-muted-foreground">
                      Embora o contrato seja unilateral na origem, podem surgir obrigações 
                      acessórias para a parte beneficiária, como conservar o bem recebido em 
                      comodato ou restituir o objeto emprestado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Exemplos de Contratos Unilaterais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Doação Pura</h3>
                    <p className="text-muted-foreground">
                      O doador transfere gratuitamente um bem ao donatário, sem exigir qualquer 
                      contraprestação. Apenas o doador assume a obrigação de transferir a 
                      propriedade.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Comodato</h3>
                    <p className="text-muted-foreground">
                      Empréstimo gratuito de coisa não fungível. O comodante se obriga a entregar 
                      o bem para uso temporário, sem receber qualquer pagamento. O comodatário 
                      apenas tem o dever de restituir o bem.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Mútuo Gratuito</h3>
                    <p className="text-muted-foreground">
                      Empréstimo de coisa fungível (dinheiro, grãos) sem cobrança de juros. O 
                      mutuante empresta e o mutuário se obriga apenas a devolver coisa do mesmo 
                      gênero, qualidade e quantidade.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Depósito Gratuito</h3>
                    <p className="text-muted-foreground">
                      O depositário recebe um bem para guardar gratuitamente, obrigando-se a 
                      conservá-lo e restituí-lo quando solicitado, sem receber remuneração pelo 
                      serviço.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Fiança Gratuita</h3>
                    <p className="text-muted-foreground">
                      O fiador garante o cumprimento da obrigação de terceiro sem receber qualquer 
                      remuneração. Assume a obrigação de pagar se o devedor principal não o fizer.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Diferença entre Contrato Unilateral e Bilateral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Contrato Unilateral</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Apenas uma parte se obriga</li>
                      <li>Não há reciprocidade</li>
                      <li>Geralmente gratuito</li>
                      <li>Beneficia apenas uma parte</li>
                      <li>Exemplo: doação, comodato</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Contrato Bilateral</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Ambas as partes se obrigam</li>
                      <li>Existe reciprocidade</li>
                      <li>Sempre oneroso</li>
                      <li>Beneficia ambas as partes</li>
                      <li>Exemplo: compra e venda, locação</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg mt-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Atenção:</strong> Não confunda contrato unilateral com ato jurídico 
                    unilateral. O contrato unilateral exige acordo de vontades (é bilateral 
                    quanto à formação), mas gera obrigações para apenas uma parte. Já o ato 
                    jurídico unilateral decorre da vontade de uma só pessoa (ex.: testamento).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  Implicações Jurídicas do Contrato Unilateral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Inexistência de Exceção do Contrato Não Cumprido</h3>
                    <p className="text-muted-foreground mb-2">
                      Como não há reciprocidade de obrigações, não se aplica a exceção do contrato 
                      não cumprido (exceptio non adimpleti contractus). A parte obrigada não pode 
                      recusar o cumprimento alegando inadimplemento da outra.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Interpretação Restritiva</h3>
                    <p className="text-muted-foreground mb-2">
                      Contratos unilaterais gratuitos devem ser interpretados restritivamente, 
                      pois ninguém é obrigado a ser liberal além do que manifestou claramente 
                      sua intenção.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Responsabilidade Atenuada</h3>
                    <p className="text-muted-foreground mb-2">
                      Em alguns contratos unilaterais gratuitos, a responsabilidade do devedor 
                      pode ser atenuada. Por exemplo, no comodato, o comodatário responde apenas 
                      pelos danos que culposamente causar ao bem.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Revogação</h3>
                    <p className="text-muted-foreground mb-2">
                      Alguns contratos unilaterais podem ser revogados pelo devedor, como ocorre 
                      com a doação em casos de ingratidão do donatário ou superveniência de filhos 
                      ao doador.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <section className="bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa Elaborar um Contrato Unilateral?
              </h2>
              <p className="text-muted-foreground mb-6">
                Utilize nossa plataforma para criar contratos de doação, comodato e outros 
                contratos unilaterais com segurança jurídica.
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

export default ContratoUnilateral;