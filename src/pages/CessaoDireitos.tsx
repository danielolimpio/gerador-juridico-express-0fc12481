import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Users, Scale, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const CessaoDireitos = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cessão de Direitos - Transferência de Direitos Contratuais",
    "description": "Entenda o que é cessão de direitos, como funciona a transferência de direitos contratuais, requisitos legais e quando aplicar este instituto jurídico.",
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
        title="Cessão de Direitos - Transferência de Direitos Contratuais"
        description="Guia completo sobre cessão de direitos: conceito, tipos, requisitos legais, diferença com cessão de crédito e como realizar a transferência de direitos contratuais."
        keywords="cessão de direitos, transferência de direitos, cessão contratual, direito civil, cessão de posição contratual"
        canonical="https://modelodecontrato.org/cessao-direitos"
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
                Cessão de Direitos
              </h1>
              <p className="text-xl text-muted-foreground">
                Transferência de direitos contratuais de uma parte para outra
              </p>
            </header>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  O que é Cessão de Direitos?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A cessão de direitos é o ato pelo qual uma parte (cedente) transfere a outra 
                  (cessionário) os direitos decorrentes de um contrato, mantendo-se a obrigação 
                  original. É um negócio jurídico que permite a substituição de uma das partes 
                  na relação contratual, sem que haja extinção do contrato principal.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Diferentemente da cessão de crédito, que transfere apenas o direito de receber 
                  um valor, a cessão de direitos pode envolver a transferência de posição contratual 
                  mais ampla, incluindo direitos e, em alguns casos, obrigações.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Tipos de Cessão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Cessão de Crédito</h3>
                    <p className="text-muted-foreground">
                      Transferência do direito de receber um pagamento ou prestação. O cedente 
                      transfere ao cessionário apenas o direito de crédito, sem necessariamente 
                      envolver outras obrigações contratuais.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. Cessão de Posição Contratual</h3>
                    <p className="text-muted-foreground">
                      Transferência integral da posição de uma parte no contrato, incluindo direitos 
                      e obrigações. Requer, em regra, o consentimento da outra parte contratante 
                      (cedido).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. Cessão de Direitos Hereditários</h3>
                    <p className="text-muted-foreground">
                      Transferência dos direitos sobre herança ainda não partilhada. O herdeiro 
                      cede seus direitos sucessórios a terceiro, que passa a ter os mesmos direitos 
                      na herança.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Requisitos e Formalidades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Requisitos Legais</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li><strong>Capacidade das partes:</strong> Cedente e cessionário devem ser capazes</li>
                      <li><strong>Objeto lícito:</strong> O direito cedido deve ser lícito e possível</li>
                      <li><strong>Forma adequada:</strong> Observância da forma exigida em lei</li>
                      <li><strong>Consentimento:</strong> Em alguns casos, requer anuência do cedido</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Formalização</h3>
                    <p className="text-muted-foreground mb-2">
                      A cessão deve ser formalizada por escrito, especialmente quando envolve:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Direitos de valor significativo</li>
                      <li>Necessidade de registro público (imóveis, veículos)</li>
                      <li>Contratos que exigem forma especial</li>
                      <li>Situações que exigem comprovação futura</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Notificação ao Devedor</h3>
                    <p className="text-muted-foreground">
                      Na cessão de crédito, é fundamental notificar o devedor (cedido) sobre a 
                      transferência. Sem notificação, o devedor pode validamente efetuar o pagamento 
                      ao credor original.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Legislação Aplicável
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A cessão de direitos é regulada pelo Código Civil Brasileiro:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Artigos 286 a 298:</strong> Cessão de crédito</li>
                  <li><strong>Artigos 299 a 303:</strong> Assunção de dívida</li>
                  <li><strong>Artigo 1.793:</strong> Cessão de direitos hereditários</li>
                  <li><strong>Artigo 426:</strong> Pacto de melhor comprador</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-primary/5">
              <CardHeader>
                <CardTitle>Quando Utilizar a Cessão de Direitos?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Antecipação de recebíveis:</strong> Quando se deseja receber 
                      valores futuros de forma antecipada
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Transferência de contratos:</strong> Em operações de compra e 
                      venda de empresas ou negócios
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Reestruturação societária:</strong> Na reorganização de empresas 
                      e transferência de ativos
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Sucessão empresarial:</strong> Transferência de direitos em 
                      contratos comerciais duradouros
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <section className="bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa Elaborar um Contrato de Cessão?
              </h2>
              <p className="text-muted-foreground mb-6">
                Utilize nossa plataforma para criar contratos de cessão de direitos 
                personalizados e juridicamente seguros.
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

export default CessaoDireitos;