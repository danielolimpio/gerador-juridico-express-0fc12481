import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";


const GlossarioJuridico = () => {
  const navigate = useNavigate();

  const termosJuridicos = [
    {
      termo: "Contrato de Adesão",
      definicao: "Contrato com cláusulas preestabelecidas por uma das partes, cabendo à outra apenas aceitar ou rejeitar.",
      link: "/contrato-de-adesao"
    },
    {
      termo: "Fiador",
      definicao: "Pessoa que se responsabiliza pelo cumprimento das obrigações do devedor principal em caso de inadimplemento.",
      link: "/fiador-responsabilidade-legal"
    },
    {
      termo: "Caução",
      definicao: "Garantia real ou pessoal oferecida para assegurar o cumprimento de uma obrigação.",
      link: "/caucao-garantia-contratual"
    },
    {
      termo: "Comodato",
      definicao: "Empréstimo gratuito de coisa não fungível, que deve ser restituída após o uso."
    },
    {
      termo: "Vício Redibitório",
      definicao: "Defeito oculto que torna a coisa inadequada ao uso ou diminui seu valor."
    },
    {
      termo: "Resilição",
      definicao: "Desfazimento do contrato por acordo mútuo entre as partes."
    },
    {
      termo: "Rescisão",
      definicao: "Extinção do contrato por inadimplemento ou descumprimento de uma das partes."
    },
    {
      termo: "Onerosidade Excessiva",
      definicao: "Situação em que a prestação de uma das partes torna-se extremamente onerosa."
    },
    {
      termo: "Cláusula Penal",
      definicao: "Previsão de multa compensatória pelo descumprimento do contrato."
    },
    {
      termo: "Novação",
      definicao: "Substituição de uma obrigação por outra, extinguindo a anterior."
    },
    {
      termo: "Alienação Fiduciária",
      definicao: "Transferência de propriedade de bem móvel ou imóvel como garantia de dívida."
    },
    {
      termo: "Usufruto",
      definicao: "Direito de usar e gozar de bem alheio, conservando sua substância."
    },
    {
      termo: "Arras",
      definicao: "Sinal dado no ato da celebração do contrato como garantia de sua execução."
    },
    {
      termo: "Força Maior",
      definicao: "Evento imprevisível e inevitável que impede o cumprimento da obrigação."
    },
    {
      termo: "Caso Fortuito",
      definicao: "Evento previsível, mas inevitável, que impossibilita o cumprimento do contrato."
    },
    {
      termo: "Direito de Arrependimento",
      definicao: "Faculdade de desfazer o negócio jurídico dentro de prazo legal."
    },
    {
      termo: "Benfeitorias",
      definicao: "Melhoramentos realizados no bem, podendo ser necessárias, úteis ou voluptuárias."
    },
    {
      termo: "Evicção",
      definicao: "Perda da coisa adquirida por decisão judicial que reconhece direito anterior de terceiro."
    },
    {
      termo: "Sub-rogação",
      definicao: "Substituição de uma pessoa por outra na titularidade de um direito."
    },
    {
      termo: "Mora",
      definicao: "Atraso no cumprimento da obrigação quando ainda é possível e útil a prestação."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Glossário Jurídico de Contratos",
    "description": "Principais termos jurídicos relacionados a contratos e direito civil",
    "hasDefinedTerm": termosJuridicos.map(item => ({
      "@type": "DefinedTerm",
      "name": item.termo,
      "description": item.definicao,
      "inDefinedTermSet": "Glossário Jurídico de Contratos"
    }))
  };

  return (
    <>
      <SEO 
        title="Glossário Jurídico de Contratos - Termos e Definições Legais"
        description="Glossário completo com principais termos jurídicos relacionados a contratos: fiador, caução, comodato, rescisão, novação e muito mais. Definições claras e objetivas."
        keywords="glossário jurídico, termos jurídicos contratos, definições legais, vocabulário direito civil, termos contratuais"
        canonical="https://modelodecontrato.org/glossario-juridico"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <nav className="mb-6">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </nav>

          <header className="text-center mb-12">
            <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Glossário Jurídico de Contratos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Principais termos jurídicos relacionados a contratos e direito civil, 
              com definições claras e objetivas para facilitar sua compreensão.
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {termosJuridicos.map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => item.link ? navigate(item.link) : null}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {item.termo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    {item.definicao}
                  </p>
                  {item.link && (
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Ler mais →
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Dúvidas sobre Termos Jurídicos?
            </h2>
            <p className="text-muted-foreground mb-6">
              Consulte nossa seção de perguntas frequentes ou entre em contato para esclarecimentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate('/faq')}
              >
                Ver FAQ
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/contato')}
              >
                Falar com Especialista
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default GlossarioJuridico;