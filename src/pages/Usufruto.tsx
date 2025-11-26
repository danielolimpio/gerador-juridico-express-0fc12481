import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, AlertTriangle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";

const Usufruto = () => {
  const navigate = useNavigate();

  const relatedArticles: RelatedArticle[] = [
    {
      title: "Benfeitorias: Melhoramentos Realizados em Bens",
      description: "Entenda os tipos de benfeitorias e direitos de indenização sobre melhoramentos.",
      slug: "benfeitorias-melhoramentos",
      coverImage: "/images/blog/contrato-comodato-cover.jpg",
      category: "Direitos & Deveres"
    },
    {
      title: "Contrato de Doação: Diferenças entre Doar e Vender Bens",
      description: "Descubra as diferenças jurídicas entre doar e vender bens móveis e imóveis.",
      slug: "contrato-doacao-venda-bens-moveis",
      coverImage: "/images/blog/contrato-doacao-venda-cover.jpg",
      category: "Direitos & Deveres"
    },
    {
      title: "Contrato de Comodato: Empréstimo Gratuito de Bens",
      description: "Entenda como funciona o empréstimo gratuito de bens móveis e imóveis.",
      slug: "contrato-comodato",
      coverImage: "/images/blog/contrato-comodato-cover.jpg",
      category: "Para Empreendedores"
    }
  ];

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "Usufruto",
    "description": "Usufruto é o direito de usar e gozar de bem alheio, conservando sua substância. Conheça tipos, direitos do usufrutuário e nu-proprietário.",
    "inDefinedTermSet": "https://modelodecontrato.org/glossario-juridico"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "O que é Usufruto? Direito Real de Usar e Gozar de Bem Alheio",
    "description": "Entenda o que é usufruto, tipos, direitos e deveres do usufrutuário e nu-proprietário, extinção e aplicações práticas.",
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
        title="Usufruto: Direito Real de Usar e Gozar de Bem Alheio"
        description="Usufruto é o direito de usar e gozar de bem alheio, conservando sua substância. Conheça tipos, direitos do usufrutuário e nu-proprietário."
        keywords="usufruto, direito real, usufrutuário, nu-proprietário, usufruto vitalício, usufruto temporário, extinção usufruto"
        canonical="https://modelodecontrato.org/usufruto-direito-real"
      />
      <script type="application/ld+json">
        {JSON.stringify([definedTermSchema, structuredData])}
      </script>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <Breadcrumbs />
          
          <nav className="mb-6 mt-4">
            <Button variant="outline" onClick={() => navigate('/glossario-juridico')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Glossário
            </Button>
          </nav>

          <article>
            <header className="text-center mb-12">
              <Home className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                O que é Usufruto? Direito Real de Usar e Gozar de Bem Alheio
              </h1>
              <p className="text-xl text-muted-foreground">
                Entenda como funciona o direito de usar bem de outra pessoa conservando sua substância
              </p>
            </header>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    O <strong>usufruto</strong> é um direito real previsto nos artigos 1.390 a 1.411 do Código Civil brasileiro que confere a uma pessoa (o <strong>usufrutuário</strong>) o direito de <strong>usar e gozar</strong> de um bem que pertence a outra pessoa (o <strong>nu-proprietário</strong>), com a obrigação de <strong>conservar sua substância</strong>. É muito comum em heranças, doações e planejamento patrimonial.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Divisão da propriedade no usufruto</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    No usufruto, a propriedade se divide em duas partes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Usufruto:</strong> direito de usar o bem e extrair seus frutos (aluguéis, rendimentos, colheitas);</li>
                    <li><strong>Nua-propriedade:</strong> titularidade formal do bem, sem direito de uso enquanto durar o usufruto.</li>
                  </ul>

                  <p className="text-foreground leading-relaxed mb-6">
                    <strong>Exemplo prático:</strong> Um pai deixa em testamento um imóvel para o filho (nu-proprietário), mas garante à viúva o direito de morar nele até sua morte (usufrutuária). Ela pode morar ou alugar o imóvel, mas não pode vendê-lo.
                  </p>

                  <div className="bg-primary/10 border-l-4 border-primary p-4 my-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Conservação da substância:</h3>
                        <p className="text-foreground">
                          O usufrutuário deve manter o bem em bom estado, fazendo reparos ordinários. Não pode modificar a estrutura ou destinação do bem sem autorização do nu-proprietário.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Tipos de usufruto</h2>
                  
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Usufruto Vitalício</h3>
                  <p className="text-foreground leading-relaxed mb-6">
                    Dura até a morte do usufrutuário. É o mais comum, especialmente em sucessões familiares.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Usufruto Temporário</h3>
                  <p className="text-foreground leading-relaxed mb-6">
                    Estabelecido por prazo determinado (ex: 10 anos). Ao fim do prazo, a propriedade plena retorna ao nu-proprietário.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Usufruto Legal</h3>
                  <p className="text-foreground leading-relaxed mb-6">
                    Decorre diretamente da lei. Exemplo: pais têm usufruto legal sobre bens dos filhos menores (art. 1.689, CC).
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Usufruto Convencional</h3>
                  <p className="text-foreground leading-relaxed mb-6">
                    Criado por vontade das partes, através de contrato ou testamento.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Direitos do usufrutuário</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Usar o bem:</strong> morar, utilizar pessoalmente ou emprestar;</li>
                    <li><strong>Gozar dos frutos:</strong> alugar o imóvel e ficar com os aluguéis, colher frutos de propriedade rural;</li>
                    <li><strong>Administrar o bem:</strong> tomar decisões de conservação;</li>
                    <li><strong>Defender a posse:</strong> ingressar com ações possessórias contra invasores;</li>
                    <li><strong>Receber indenização:</strong> por benfeitorias necessárias realizadas.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Deveres do usufrutuário</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Conservar o bem:</strong> fazer reparos ordinários e manutenção;</li>
                    <li><strong>Pagar impostos:</strong> IPTU, ITR e taxas de conservação;</li>
                    <li><strong>Inventariar os bens:</strong> fazer relação detalhada ao receber o usufruto;</li>
                    <li><strong>Prestar caução:</strong> se exigida pelo nu-proprietário ou por lei;</li>
                    <li><strong>Não alterar a destinação:</strong> respeitar a natureza e finalidade do bem;</li>
                    <li><strong>Devolver o bem:</strong> ao término do usufruto, no estado em que recebeu.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Direitos do nu-proprietário</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Fiscalizar a conservação:</strong> verificar se o bem está sendo bem cuidado;</li>
                    <li><strong>Alienar a nua-propriedade:</strong> vender ou doar sua parte, mantido o usufruto;</li>
                    <li><strong>Receber o bem de volta:</strong> com a extinção do usufruto;</li>
                    <li><strong>Exigir caução:</strong> se houver risco de dano ao bem;</li>
                    <li><strong>Ser indenizado:</strong> por danos causados pelo usufrutuário.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Extinção do usufruto</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    O usufruto se extingue nas seguintes hipóteses:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Morte do usufrutuário:</strong> não se transmite aos herdeiros;</li>
                    <li><strong>Término do prazo:</strong> em caso de usufruto temporário;</li>
                    <li><strong>Renúncia:</strong> o usufrutuário pode abrir mão do direito;</li>
                    <li><strong>Consolidação:</strong> quando a mesma pessoa reúne usufruto e nua-propriedade;</li>
                    <li><strong>Destruição do bem:</strong> se o bem perecer completamente;</li>
                    <li><strong>Abuso do usufrutuário:</strong> se deteriorar gravemente o bem ou mudar sua destinação;</li>
                    <li><strong>Prescrição:</strong> se não exercer o direito por mais de 10 anos.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Usufruto x Superfície x Uso</h2>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-3 text-left">Direito Real</th>
                          <th className="border border-border p-3 text-left">Características</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3"><strong>Usufruto</strong></td>
                          <td className="border border-border p-3">Usar, gozar e extrair frutos do bem alheio</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3"><strong>Uso</strong></td>
                          <td className="border border-border p-3">Apenas usar o bem para necessidades próprias e da família</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3"><strong>Superfície</strong></td>
                          <td className="border border-border p-3">Direito de construir ou plantar em terreno alheio</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Aplicações práticas</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Planejamento sucessório:</strong> garantir moradia ao cônjuge viúvo;</li>
                    <li><strong>Proteção patrimonial:</strong> separar uso de propriedade para fins fiscais ou de proteção;</li>
                    <li><strong>Doação em vida:</strong> doar a nua-propriedade aos filhos, mantendo o usufruto;</li>
                    <li><strong>Acordo familiar:</strong> solução de conflitos sobre uso de bens herdados;</li>
                    <li><strong>Garantia de renda:</strong> manter direito aos frutos (aluguéis) de imóvel doado.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Recomendações</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Sempre formalize o usufruto por escritura pública e registre no cartório de imóveis;</li>
                    <li>Faça inventário detalhado do bem ao iniciar o usufruto;</li>
                    <li>Mantenha documentação de todas as despesas e benfeitorias;</li>
                    <li>Respeite os limites do usufruto — não venda, não dê em garantia;</li>
                    <li>Em caso de dúvidas sobre direitos e deveres, consulte advogado especializado.</li>
                  </ul>

                  <div className="bg-accent/20 rounded-lg p-6 mt-8">
                    <div className="flex items-start">
                      <FileText className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Base legal:</h3>
                        <p className="text-foreground text-sm">
                          Código Civil, arts. 1.390 a 1.411
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

export default Usufruto;