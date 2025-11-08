import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Handshake, FileCheck, CheckCircle, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const ResilicaoContratual = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Resilição Contratual: O que é e Como Funciona o Término por Mútuo Acordo",
    "description": "Resilição é o término antecipado de contrato por acordo mútuo. Entenda como funciona, requisitos e diferenças com rescisão.",
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
        title="Resilição Contratual: O que é e Como Funciona o Término por Mútuo Acordo"
        description="Resilição é o término antecipado de contrato por acordo mútuo entre as partes. Entenda como funciona, requisitos legais e diferenças com rescisão."
        keywords="resilição contratual, término de contrato, mútuo acordo, distrato, código civil, fim de contrato"
        canonical="https://modelodecontrato.org/resilicao-contratual-mutuo-acordo"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <nav className="mb-6">
            <Button variant="outline" onClick={() => navigate('/glossario-juridico')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Glossário
            </Button>
          </nav>

          <article>
            <header className="mb-8">
              <Handshake className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
                Resilição Contratual
              </h1>
              <p className="text-xl text-muted-foreground text-center">
                O que é e Como Funciona o Término por Mútuo Acordo
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    A resilição contratual é o término antecipado de um contrato por acordo mútuo entre as partes, 
                    sem que haja descumprimento ou inadimplemento. É uma forma amigável, consensual e juridicamente 
                    segura de encerrar obrigações antes do prazo originalmente estipulado.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Diferente da rescisão (que ocorre por descumprimento), a resilição pressupõe boa-fé, diálogo 
                    e cooperação. Ela é comum em contratos de prestação de serviços, locação, parcerias comerciais 
                    e até casamentos (no caso de divórcio consensual).
                  </p>
                </CardContent>
              </Card>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Requisitos para Validade
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Para que a resilição seja válida, é essencial:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Manifestação clara de vontade de ambas as partes</li>
                      <li>Formalização por escrito (preferencialmente com firma reconhecida, em casos relevantes)</li>
                      <li>Definição de eventuais acertos finais (devolução de valores, restituição de bens, quitação de pendências)</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileCheck className="w-6 h-6 text-primary" />
                  Termo de Resilição
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Embora o Código Civil não exija forma específica para a resilição, documentar o acordo é 
                      crucial para evitar futuras disputas. Um termo de resilição contratual deve conter:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Dados das partes</li>
                      <li>Referência ao contrato original</li>
                      <li>Data de encerramento</li>
                      <li>Declaração de quitação total</li>
                      <li>Assinaturas</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Efeitos da Resilição
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A resilição extingue todas as obrigações futuras, mas não afeta direitos já adquiridos até 
                      a data do acordo. Por exemplo, em um aluguel resilido em março, o inquilino ainda deve pagar 
                      o aluguel proporcional até essa data.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Do ponto de vista fiscal e contábil, a resilição também deve ser registrada corretamente, 
                      especialmente em contratos empresariais. Se você deseja encerrar um contrato de forma pacífica, 
                      proponha a resilição por escrito, negocie os termos com transparência e evite deixar pendências.
                    </p>
                  </CardContent>
                </Card>
              </section>
            </div>

            <div className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa de um Termo de Resilição?
              </h2>
              <p className="text-muted-foreground mb-6">
                Formalize o término amigável do seu contrato com segurança jurídica.
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

export default ResilicaoContratual;
