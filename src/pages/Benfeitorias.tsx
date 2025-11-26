import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Hammer, CheckCircle2, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";

const Benfeitorias = () => {
  const navigate = useNavigate();

  const relatedArticles: RelatedArticle[] = [
    {
      title: "Contrato de Aluguel Residencial: Tudo que Você Precisa Saber",
      description: "Direitos e deveres do locador e locatário em contratos de aluguel residencial.",
      slug: "contrato-aluguel-residencial",
      coverImage: "/images/blog/contrato-aluguel-residencial-cover.jpg",
      category: "Direitos & Deveres"
    },
    {
      title: "Contrato de Comodato: Quando e Como Usar para Empréstimo Gratuito",
      description: "Entenda como funciona o empréstimo gratuito de bens móveis e imóveis.",
      slug: "contrato-comodato",
      coverImage: "/images/blog/contrato-comodato-cover.jpg",
      category: "Para Empreendedores"
    },
    {
      title: "Usufruto: Direito Real de Usar e Gozar de Bem Alheio",
      description: "Entenda como funciona o usufruto e seus direitos sobre bens de terceiros.",
      slug: "usufruto-direito-real",
      coverImage: "/images/blog/contrato-doacao-venda-cover.jpg",
      category: "Direitos & Deveres"
    }
  ];

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "Benfeitorias",
    "description": "Entenda o que são benfeitorias necessárias, úteis e voluptuárias e seus direitos de indenização e retenção sobre melhoramentos realizados em bens.",
    "inDefinedTermSet": "https://modelodecontrato.org/glossario-juridico"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Benfeitorias - Melhoramentos em Bens | Tipos e Direitos",
    "description": "Entenda o que são benfeitorias necessárias, úteis e voluptuárias e seus direitos de indenização e retenção",
    "keywords": "benfeitorias, melhoramentos, benfeitorias necessárias, benfeitorias úteis, benfeitorias voluptuárias"
  };

  return (
    <>
      <SEO 
        title="Benfeitorias - Melhoramentos em Bens | Tipos e Direitos"
        description="Entenda o que são benfeitorias necessárias, úteis e voluptuárias. Conheça seus direitos de indenização e retenção sobre melhoramentos realizados em bens."
        keywords="benfeitorias, melhoramentos, benfeitorias necessárias, benfeitorias úteis, benfeitorias voluptuárias, direito de retenção, indenização benfeitorias"
        canonical="https://modelodecontrato.org/benfeitorias-melhoramentos"
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

          <header className="text-center mb-12">
            <Hammer className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Benfeitorias
            </h1>
            <p className="text-xl text-muted-foreground">
              Melhoramentos realizados no bem
            </p>
          </header>

          <article className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">O que são Benfeitorias?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Benfeitorias são obras ou despesas feitas em um bem para conservá-lo, melhorá-lo ou embelezá-lo. 
                O Código Civil brasileiro classifica as benfeitorias em três tipos, cada uma com regime jurídico específico 
                quanto ao direito de indenização e retenção.
              </p>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CheckCircle2 className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Benfeitorias Necessárias</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Obras indispensáveis para conservar o bem e evitar sua deterioração.
                  </p>
                  <p className="text-sm font-semibold text-foreground">Exemplos:</p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Reparos no telhado</li>
                    <li>Conserto de encanamentos</li>
                    <li>Tratamento contra cupins</li>
                    <li>Impermeabilização</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Benfeitorias Úteis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Obras que aumentam ou facilitam o uso do bem, sem serem indispensáveis.
                  </p>
                  <p className="text-sm font-semibold text-foreground">Exemplos:</p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Instalação de ar-condicionado</li>
                    <li>Construção de armários</li>
                    <li>Cerca no terreno</li>
                    <li>Sistema de alarme</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Sparkles className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Benfeitorias Voluptuárias</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Obras de mero deleite ou recreio, que não aumentam o uso habitual do bem.
                  </p>
                  <p className="text-sm font-semibold text-foreground">Exemplos:</p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Piscina ornamental</li>
                    <li>Jardim decorativo</li>
                    <li>Sauna</li>
                    <li>Acabamentos luxuosos</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Direitos sobre Benfeitorias</h2>
              
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Direito de Indenização</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">Possuidor de Boa-fé:</p>
                    <ul className="text-muted-foreground list-disc list-inside ml-4">
                      <li>Tem direito à indenização pelas benfeitorias necessárias e úteis</li>
                      <li>Pode levantar as voluptuárias se não houver dano ao bem</li>
                      <li>Pode exercer direito de retenção até ser indenizado</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Possuidor de Má-fé:</p>
                    <ul className="text-muted-foreground list-disc list-inside ml-4">
                      <li>Tem direito apenas às benfeitorias necessárias</li>
                      <li>Não pode exigir indenização pelas úteis e voluptuárias</li>
                      <li>Não pode exercer direito de retenção</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Direito de Retenção</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    O possuidor de boa-fé que realizou benfeitorias necessárias ou úteis pode reter o bem em seu poder 
                    até que seja indenizado. Este direito visa garantir o pagamento justo pelas melhorias realizadas.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Legislação Aplicável</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Art. 96 do Código Civil:</strong> Definição de benfeitorias</li>
                    <li><strong>Arts. 1.219 e 1.220 do CC:</strong> Direitos do possuidor de boa-fé</li>
                    <li><strong>Art. 1.221 do CC:</strong> Direitos do possuidor de má-fé</li>
                    <li><strong>Art. 578 do CC:</strong> Benfeitorias na locação</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </article>

          <section className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Precisa Formalizar Benfeitorias?
            </h2>
            <p className="text-muted-foreground mb-6">
              Documente adequadamente as melhorias realizadas em contratos de locação ou comodato.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate('/tipos-de-contratos')}
            >
              Criar Contrato Agora
            </Button>
          </section>
        </div>

        {/* Related Articles */}
        <RelatedArticles articles={relatedArticles} />
      </div>
    </>
  );
};

export default Benfeitorias;
