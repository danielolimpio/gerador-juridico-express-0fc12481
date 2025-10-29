import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Package, AlertCircle, CheckCircle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

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
        title="O que é Comodato? Empréstimo Gratuito de Bens: Direitos e Deveres"
        description="Comodato é o empréstimo gratuito de bem não fungível previsto no Código Civil. Entenda direitos e deveres do comodante e comodatário, prazos e obrigações legais."
        keywords="comodato, empréstimo gratuito, comodante, comodatário, código civil, contrato de comodato, bem não fungível"
        canonical="https://modelodecontrato.org/comodato-emprestimo-gratuito"
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
              <Package className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
                O que é Comodato?
              </h1>
              <p className="text-xl text-muted-foreground text-center">
                Empréstimo Gratuito de Bens: Direitos e Deveres do Comodante e Comodatário
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    O comodato é um contrato civil previsto nos artigos 579 a 585 do Código Civil brasileiro e 
                    consiste no empréstimo gratuito de um bem não fungível — ou seja, um bem que não pode ser 
                    substituído por outro idêntico, como um carro, um imóvel, um equipamento ou uma obra de arte. 
                    A pessoa que empresta é chamada de comodante, e quem recebe o bem, de comodatário.
                  </p>
                </CardContent>
              </Card>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Características do Comodato
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Diferentemente do mútuo (empréstimo de dinheiro ou bens fungíveis), o comodato não transfere 
                      a propriedade, apenas o uso temporário. Ao final do prazo acordado — ou quando o comodante 
                      precisar do bem —, o comodatário deve devolver exatamente o mesmo bem, em estado de conservação 
                      compatível com o uso normal.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Obrigações do Comodatário
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Apesar de ser gratuito, o comodato gera obrigações importantes. O comodatário deve:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Usar o bem apenas para a finalidade acordada</li>
                      <li>Cuidar dele como se fosse seu próprio (diligência de bom pai de família)</li>
                      <li>Responder por perdas ou danos causados por uso indevido ou negligência</li>
                      <li>Não emprestar a terceiros sem autorização</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Direitos e Responsabilidades
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Já o comodante deve entregar o bem em boas condições de uso e não pode exigê-lo de volta 
                      antes do prazo sem justa causa — salvo se surgir necessidade urgente e imprevista.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      O comodato é muito usado em contextos familiares, empresariais (como empréstimo de máquinas 
                      entre empresas) e culturais (exposição de obras de arte). Por ser informal em muitos casos, 
                      recomenda-se sempre formalizar por escrito, especialmente quando envolve bens de valor.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Importante: o comodato não gera direito a indenização por uso, mas o comodante pode ser 
                      responsabilizado se o bem tiver vícios ocultos que causem danos ao comodatário.
                    </p>
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
                onClick={() => navigate('/')}
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
