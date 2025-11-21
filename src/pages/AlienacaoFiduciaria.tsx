import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck, AlertTriangle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";

const AlienacaoFiduciaria = () => {
  const navigate = useNavigate();

  const relatedArticles: RelatedArticle[] = [
    {
      title: "Contrato de Locação de Veículo: Regras para Alugar Carros",
      description: "Proteja seu patrimônio com um contrato de locação de veículo seguro e válido.",
      slug: "contrato-locacao-veiculo",
      coverImage: "/images/blog/contrato-locacao-veiculo-cover.jpg",
      category: "Passo a Passo"
    },
    {
      title: "Contrato de Comodato: Quando e Como Usar para Empréstimo Gratuito de Bens",
      description: "Aprenda a formalizar empréstimos de bens como carros e ferramentas sem cobrar.",
      slug: "contrato-comodato",
      coverImage: "/images/blog/contrato-comodato-cover.jpg",
      category: "Para Empreendedores"
    },
    {
      title: "Contrato de Mandato: Autorização Legal para Agir em Nome de Terceiros",
      description: "Saiba quando e como usar um contrato de mandato para representação legal.",
      slug: "contrato-mandato",
      coverImage: "/images/blog/contrato-mandato-cover.jpg",
      category: "Passo a Passo"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "O que é Alienação Fiduciária? Garantia Real em Financiamentos",
    "description": "Entenda o que é alienação fiduciária, como funciona a transferência de propriedade como garantia de dívida, direitos e obrigações das partes.",
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
    "datePublished": "2025-01-07",
    "dateModified": "2025-01-07"
  };

  return (
    <>
      <SEO 
        title="Alienação Fiduciária: Garantia Real em Financiamentos de Bens"
        description="Alienação fiduciária é a transferência de propriedade de bem móvel ou imóvel como garantia de dívida. Entenda como funciona, direitos do credor e devedor."
        keywords="alienação fiduciária, garantia real, financiamento veículo, financiamento imóvel, propriedade fiduciária, busca e apreensão"
        canonical="https://modelodecontrato.org/alienacao-fiduciaria-garantia"
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
            <header className="text-center mb-12">
              <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                O que é Alienação Fiduciária? Garantia Real em Financiamentos
              </h1>
              <p className="text-xl text-muted-foreground">
                Entenda como funciona a transferência de propriedade como garantia de dívida
              </p>
            </header>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    A <strong>alienação fiduciária</strong> é uma modalidade de garantia real amplamente utilizada em financiamentos de veículos e imóveis no Brasil. Consiste na <strong>transferência temporária da propriedade</strong> de um bem (móvel ou imóvel) do devedor para o credor, como forma de assegurar o pagamento da dívida. Quando a dívida é quitada, a propriedade retorna automaticamente ao devedor.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Como funciona a alienação fiduciária?</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Na alienação fiduciária, ocorre um <strong>desdobramento da posse</strong>:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Propriedade fiduciária:</strong> pertence ao credor (banco ou financeira) até a quitação total da dívida;</li>
                    <li><strong>Posse direta:</strong> permanece com o devedor, que pode usar e gozar do bem normalmente;</li>
                    <li><strong>Propriedade plena:</strong> volta ao devedor após o pagamento integral.</li>
                  </ul>

                  <p className="text-foreground leading-relaxed mb-6">
                    Isso significa que, juridicamente, o banco é o "dono" do bem até que você termine de pagar, mas você tem o direito de usá-lo como se fosse seu.
                  </p>

                  <div className="bg-primary/10 border-l-4 border-primary p-4 my-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Atenção importante:</h3>
                        <p className="text-foreground">
                          Enquanto o bem estiver alienado fiduciariamente, você <strong>não pode vendê-lo</strong> sem autorização do credor, pois não é o proprietário legal. A venda só é possível após quitação ou com anuência do banco.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Tipos de alienação fiduciária</h2>
                  
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Alienação Fiduciária de Bens Móveis</h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Regulada pelo Decreto-Lei nº 911/1969, é usada principalmente em:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Financiamento de veículos (carros, motos, caminhões);</li>
                    <li>Financiamento de máquinas e equipamentos;</li>
                    <li>Aquisição de aeronaves e embarcações.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Alienação Fiduciária de Bens Imóveis</h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Regulada pela Lei nº 9.514/1997, é utilizada em:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Financiamento imobiliário para aquisição de casa ou apartamento;</li>
                    <li>Financiamento de terrenos;</li>
                    <li>Construção de imóveis próprios.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Vantagens da alienação fiduciária</h2>
                  
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Para o credor (banco/financeira):</h3>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Segurança jurídica:</strong> o bem já está em seu nome, facilitando recuperação;</li>
                    <li><strong>Procedimento célere:</strong> busca e apreensão extrajudicial em caso de inadimplência;</li>
                    <li><strong>Menor risco de calote:</strong> bem garantido em caso de não pagamento.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Para o devedor (comprador):</h3>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Juros menores:</strong> por oferecer garantia forte, as taxas são mais baixas;</li>
                    <li><strong>Maior facilidade de aprovação:</strong> risco menor para o credor;</li>
                    <li><strong>Uso imediato do bem:</strong> mesmo antes de quitá-lo completamente.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">O que acontece em caso de inadimplência?</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Se o devedor deixar de pagar as parcelas, o credor pode:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Bens móveis:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Após 60 dias de inadimplência, o credor pode iniciar a <strong>busca e apreensão</strong> do veículo;</li>
                    <li>O bem é leiloado para quitar a dívida;</li>
                    <li>Se houver saldo devedor, o comprador ainda deve pagar; se sobrar valor, recebe a diferença.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Bens imóveis:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Consolidação da propriedade em nome do credor;</li>
                    <li>Leilão público do imóvel;</li>
                    <li>O devedor tem prazo para purgar a mora antes do leilão.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Diferença entre alienação fiduciária e hipoteca</h2>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-3 text-left">Aspecto</th>
                          <th className="border border-border p-3 text-left">Alienação Fiduciária</th>
                          <th className="border border-border p-3 text-left">Hipoteca</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3"><strong>Propriedade</strong></td>
                          <td className="border border-border p-3">Transferida ao credor</td>
                          <td className="border border-border p-3">Permanece com o devedor</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3"><strong>Execução</strong></td>
                          <td className="border border-border p-3">Rápida (extrajudicial)</td>
                          <td className="border border-border p-3">Mais lenta (judicial)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3"><strong>Custo</strong></td>
                          <td className="border border-border p-3">Menor</td>
                          <td className="border border-border p-3">Maior</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3"><strong>Uso comum</strong></td>
                          <td className="border border-border p-3">Veículos e imóveis</td>
                          <td className="border border-border p-3">Apenas imóveis</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Quitação e transferência de propriedade</h2>
                  <p className="text-foreground leading-relaxed mb-6">
                    Após o pagamento da última parcela, o credor deve:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Emitir <strong>carta de quitação</strong> ou <strong>termo de baixa da alienação</strong>;</li>
                    <li>Fornecer documentação para transferência definitiva da propriedade;</li>
                    <li>No caso de veículos: baixa da restrição no DETRAN;</li>
                    <li>No caso de imóveis: averbação da quitação no Registro de Imóveis.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Recomendações importantes</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Sempre verifique a existência de alienação fiduciária antes de comprar veículo usado;</li>
                    <li>Leia atentamente o contrato de financiamento;</li>
                    <li>Guarde todos os comprovantes de pagamento;</li>
                    <li>Em caso de dificuldade de pagamento, negocie com o credor antes da apreensão;</li>
                    <li>Após quitação, exija imediatamente a documentação de baixa da alienação.</li>
                  </ul>

                  <div className="bg-accent/20 rounded-lg p-6 mt-8">
                    <div className="flex items-start">
                      <FileText className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Base legal:</h3>
                        <p className="text-foreground text-sm">
                          Decreto-Lei nº 911/1969 (bens móveis) | Lei nº 9.514/1997 (bens imóveis) | Código Civil, arts. 1.361 a 1.368
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate('/glossario-juridico')}
              >
                Ver Glossário Completo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/faq')}
              >
                Perguntas Frequentes
              </Button>
            </div>
          </article>
        </div>

        {/* Related Articles */}
        <RelatedArticles articles={relatedArticles} />
      </div>
    </>
  );
};

export default AlienacaoFiduciaria;