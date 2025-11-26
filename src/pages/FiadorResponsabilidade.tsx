import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, UserCheck, AlertTriangle, Shield, Scale } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";

const FiadorResponsabilidade = () => {
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
      description: "Entenda como funciona o empréstimo gratuito de bens móveis e imóveis com segurança jurídica completa.",
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

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "Fiador",
    "description": "Entenda o papel do fiador em contratos: responsabilidades, direitos garantidos pelo Código Civil, riscos patrimoniais e alternativas como seguro fiança.",
    "inDefinedTermSet": "https://modelodecontrato.org/glossario-juridico"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Quem é o Fiador? Responsabilidades, Direitos e Riscos Jurídicos",
    "description": "Entenda o papel do fiador em contratos: responsabilidades, direitos garantidos pelo Código Civil, riscos patrimoniais e alternativas como seguro fiança.",
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
        title="Quem é o Fiador? Responsabilidades, Direitos e Riscos Jurídicos"
        description="Entenda o papel do fiador em contratos: responsabilidades, direitos garantidos pelo Código Civil, riscos patrimoniais e alternativas como seguro fiança."
        keywords="fiador, fiança, responsabilidade fiador, fiança solidária, código civil, locação, seguro fiança"
        canonical="https://modelodecontrato.org/fiador-responsabilidade-legal"
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
            <header className="mb-8">
              <UserCheck className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
                Quem é o Fiador?
              </h1>
              <p className="text-xl text-muted-foreground text-center">
                Responsabilidades, Direitos e Riscos Jurídicos
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    O fiador é uma figura jurídica essencial em diversos tipos de contratos, especialmente em locações 
                    imobiliárias, financiamentos e empréstimos bancários. Trata-se de uma pessoa física ou jurídica que 
                    se compromete a pagar a dívida caso o devedor principal (o locatário, mutuário ou tomador do empréstimo) 
                    não cumpra suas obrigações.
                  </p>
                </CardContent>
              </Card>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  Tipos de Responsabilidade
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A responsabilidade do fiador é subsidiária, ou seja, só é acionada após a constatação do inadimplemento 
                      do devedor principal e a tentativa frustrada de cobrança. No entanto, em muitos contratos modernos — 
                      especialmente de aluguel —, a fiança é solidária, permitindo que o credor cobre diretamente o fiador 
                      sem precisar esgotar as tentativas contra o devedor.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Riscos e Responsabilidades
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      É fundamental entender que ser fiador é um ato de grande risco. O fiador responde com todo o seu 
                      patrimônio, podendo ter bens penhorados, contas bloqueadas e nome incluído em cadastros de inadimplentes. 
                      Além disso, a fiança não se extingue automaticamente com o término do contrato — só termina com o 
                      pagamento integral da dívida ou com cláusula expressa de renúncia.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Direitos do Fiador
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      O Código Civil (art. 826) garante ao fiador o direito de exigir que sejam primeiro executados os bens 
                      do devedor principal, salvo se renunciado expressamente. Também é possível incluir cláusulas limitativas 
                      no contrato, como "fiança apenas para aluguel" ou "sem responsabilidade por multas".
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Antes de aceitar ser fiador, avalie a solvência da pessoa, exija transparência sobre o contrato e, 
                      se possível, opte por seguro fiança locatícia como alternativa mais segura. Lembre-se: fiança não é 
                      favor — é compromisso jurídico sério.
                    </p>
                  </CardContent>
                </Card>
              </section>
            </div>

            <div className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa de um Contrato com Fiador?
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

        {/* Related Articles */}
        <RelatedArticles articles={relatedArticles} />
      </div>
    </>
  );
};

export default FiadorResponsabilidade;