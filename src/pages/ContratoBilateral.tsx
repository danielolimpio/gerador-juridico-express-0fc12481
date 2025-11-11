import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Users, Scale, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const ContratoBilateral = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Contrato Bilateral - Obrigações Recíprocas entre as Partes",
    "description": "Entenda o que é contrato bilateral, suas características, exemplos práticos, diferença com contrato unilateral e principais aplicações no direito contratual.",
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
        title="Contrato Bilateral - Obrigações Recíprocas entre as Partes"
        description="Guia completo sobre contrato bilateral: conceito, características, exemplos, diferença com contrato unilateral e aplicação prática no direito civil e empresarial."
        keywords="contrato bilateral, obrigações recíprocas, sinalagma, contrato sinalagmático, direito contratual"
        canonical="https://modelodecontrato.org/contrato-bilateral"
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
              <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Contrato Bilateral
              </h1>
              <p className="text-xl text-muted-foreground">
                Contratos com obrigações recíprocas para ambas as partes
              </p>
            </header>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  O que é Contrato Bilateral?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  O contrato bilateral, também chamado de contrato sinalagmático, é aquele em que 
                  ambas as partes assumem obrigações recíprocas e interdependentes. Cada parte é 
                  simultaneamente credora e devedora da outra, criando uma relação de reciprocidade 
                  e equilíbrio entre as prestações.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Essa bilateralidade caracteriza-se pela existência de prestações e contraprestações, 
                  onde o cumprimento da obrigação de uma parte está diretamente ligado ao cumprimento 
                  da obrigação da outra. É o tipo de contrato mais comum nas relações civis e 
                  empresariais.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Características do Contrato Bilateral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Reciprocidade de Obrigações</h3>
                    <p className="text-muted-foreground">
                      Ambas as partes assumem obrigações correlatas, criando direitos e deveres 
                      mútuos. A obrigação de uma parte corresponde ao direito da outra e vice-versa.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. Interdependência das Prestações</h3>
                    <p className="text-muted-foreground">
                      As obrigações estão interligadas de forma que o cumprimento de uma depende 
                      do cumprimento da outra. Essa interdependência justifica institutos como a 
                      exceção do contrato não cumprido.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. Comutatividade</h3>
                    <p className="text-muted-foreground">
                      Em geral, os contratos bilaterais são também comutativos, ou seja, as 
                      prestações são conhecidas e equivalentes desde o momento da celebração, 
                      permitindo às partes avaliar as vantagens e desvantagens do negócio.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4. Onerosidade</h3>
                    <p className="text-muted-foreground">
                      Contratos bilaterais são, por natureza, onerosos, pois cada parte sofre um 
                      sacrifício patrimonial (obrigação) em troca de uma vantagem (direito).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Exemplos de Contratos Bilaterais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Compra e Venda</h3>
                    <p className="text-muted-foreground">
                      O vendedor se obriga a entregar a coisa e o comprador se obriga a pagar 
                      o preço. Ambas as partes têm obrigações recíprocas e simultâneas.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Locação</h3>
                    <p className="text-muted-foreground">
                      O locador se obriga a ceder o uso da coisa e o locatário se obriga a 
                      pagar o aluguel e conservar o bem locado.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Prestação de Serviços</h3>
                    <p className="text-muted-foreground">
                      O prestador se obriga a executar o serviço e o contratante se obriga a 
                      pagar a remuneração acordada.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Empreitada</h3>
                    <p className="text-muted-foreground">
                      O empreiteiro se obriga a realizar a obra e o dono da obra se obriga a 
                      pagar o preço ajustado.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Mandato Remunerado</h3>
                    <p className="text-muted-foreground">
                      O mandatário se obriga a praticar atos em nome do mandante e este se 
                      obriga a pagar a remuneração pelos serviços prestados.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Diferença entre Contrato Bilateral e Unilateral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contrato Bilateral</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Ambas as partes assumem obrigações</li>
                      <li>Existe reciprocidade de prestações</li>
                      <li>É sempre oneroso</li>
                      <li>Exemplo: compra e venda, locação</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contrato Unilateral</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Apenas uma parte assume obrigações</li>
                      <li>Não há reciprocidade de prestações</li>
                      <li>Pode ser gratuito ou oneroso</li>
                      <li>Exemplo: doação, comodato, mútuo gratuito</li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Importante:</strong> A classificação em bilateral ou unilateral 
                      refere-se ao momento da formação do contrato. Mesmo em contratos 
                      unilaterais, podem surgir obrigações posteriores para a parte inicialmente 
                      não obrigada (ex.: no comodato, o comodatário pode ter que pagar por 
                      benfeitorias urgentes).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  Implicações Jurídicas do Contrato Bilateral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Exceção do Contrato Não Cumprido</h3>
                    <p className="text-muted-foreground mb-2">
                      Nos contratos bilaterais, se uma parte não cumprir sua obrigação, a outra 
                      pode recusar-se a cumprir a sua (exceptio non adimpleti contractus). Este 
                      princípio protege o equilíbrio contratual.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Resolução por Inadimplemento</h3>
                    <p className="text-muted-foreground mb-2">
                      O descumprimento por uma das partes permite à outra pedir a resolução do 
                      contrato, com base no artigo 475 do Código Civil, além de perdas e danos.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Teoria da Imprevisão</h3>
                    <p className="text-muted-foreground mb-2">
                      Em contratos bilaterais de execução continuada ou diferida, eventos 
                      imprevisíveis que tornem a prestação excessivamente onerosa podem justificar 
                      a revisão ou resolução contratual.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Vícios Redibitórios</h3>
                    <p className="text-muted-foreground mb-2">
                      Em contratos bilaterais comutativos, defeitos ocultos da coisa podem 
                      fundamentar a redibição (devolução) ou abatimento no preço.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <section className="bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa Elaborar um Contrato Bilateral?
              </h2>
              <p className="text-muted-foreground mb-6">
                Utilize nossa plataforma para criar contratos personalizados com cláusulas 
                equilibradas e juridicamente seguras.
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

export default ContratoBilateral;