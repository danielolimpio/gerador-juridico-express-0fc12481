import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, BookOpen, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import SEO from "@/components/SEO";


const GlossarioJuridico = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

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
      definicao: "Empréstimo gratuito de coisa não fungível, que deve ser restituída após o uso.",
      link: "/comodato-emprestimo-gratuito"
    },
    {
      termo: "Vício Redibitório",
      definicao: "Defeito oculto que torna a coisa inadequada ao uso ou diminui seu valor.",
      link: "/vicio-redibitorio-defeito-oculto"
    },
    {
      termo: "Resilição",
      definicao: "Desfazimento do contrato por acordo mútuo entre as partes.",
      link: "/resilicao-contratual-mutuo-acordo"
    },
    {
      termo: "Rescisão",
      definicao: "Extinção do contrato por inadimplemento ou descumprimento de uma das partes.",
      link: "/rescisao-de-contrato-descumprimento"
    },
    {
      termo: "Onerosidade Excessiva",
      definicao: "Situação em que a prestação de uma das partes torna-se extremamente onerosa.",
      link: "/onerosidade-excessiva-teoria-imprevacao"
    },
    {
      termo: "Cláusula Penal",
      definicao: "Previsão de multa compensatória pelo descumprimento do contrato.",
      link: "/clausula-penal-multa-contratual"
    },
    {
      termo: "Novação",
      definicao: "Substituição de uma obrigação por outra, extinguindo a anterior.",
      link: "/novacao-substituicao-obrigacao"
    },
    {
      termo: "Alienação Fiduciária",
      definicao: "Transferência de propriedade de bem móvel ou imóvel como garantia de dívida.",
      link: "/alienacao-fiduciaria-garantia"
    },
    {
      termo: "Usufruto",
      definicao: "Direito de usar e gozar de bem alheio, conservando sua substância.",
      link: "/usufruto-direito-real"
    },
    {
      termo: "Arras",
      definicao: "Sinal dado no ato da celebração do contrato como garantia de sua execução.",
      link: "/arras-sinal-contratual"
    },
    {
      termo: "Força Maior",
      definicao: "Evento imprevisível e inevitável que impede o cumprimento da obrigação.",
      link: "/forca-maior-evento-imprevisivel"
    },
    {
      termo: "Caso Fortuito",
      definicao: "Evento previsível, mas inevitável, que impossibilita o cumprimento do contrato.",
      link: "/caso-fortuito-evento-inevitavel"
    },
    {
      termo: "Direito de Arrependimento",
      definicao: "Faculdade de desfazer o negócio jurídico dentro de prazo legal.",
      link: "/direito-arrependimento-prazo-legal"
    },
    {
      termo: "Benfeitorias",
      definicao: "Melhoramentos realizados no bem, podendo ser necessárias, úteis ou voluptuárias.",
      link: "/benfeitorias-melhoramentos"
    },
    {
      termo: "Evicção",
      definicao: "Perda da coisa adquirida por decisão judicial que reconhece direito anterior de terceiro.",
      link: "/eviccao-perda-bem"
    },
    {
      termo: "Sub-rogação",
      definicao: "Substituição de uma pessoa por outra na titularidade de um direito.",
      link: "/sub-rogacao-substituicao"
    },
    {
      termo: "Mora",
      definicao: "Atraso no cumprimento da obrigação quando ainda é possível e útil a prestação.",
      link: "/mora-atraso-obrigacao"
    },
    {
      termo: "Arbitragem",
      definicao: "Método alternativo de resolução de conflitos em que as partes elegem um árbitro ou tribunal arbitral para decidir a disputa, com força de sentença judicial.",
      link: "/arbitragem-resolucao-conflitos"
    },
    {
      termo: "Cláusula de Não Concorrência",
      definicao: "Acordo que impede uma das partes de atuar em atividade concorrente com a outra por um período determinado e em determinada região.",
      link: "/clausula-nao-concorrencia"
    },
    {
      termo: "Cláusula de Confidencialidade",
      definicao: "Obrigação contratual de manter sigilo sobre informações trocadas entre as partes durante ou após a vigência do contrato.",
      link: "/clausula-confidencialidade"
    },
    {
      termo: "Cessão de Crédito",
      definicao: "Transferência do direito de crédito de um credor (cedente) para um terceiro (cessionário), com ou sem consentimento do devedor.",
      link: "/cessao-credito"
    },
    {
      termo: "Cessão de Direitos",
      definicao: "Ato pelo qual uma parte transfere a outrem os direitos decorrentes de um contrato, mantendo-se a obrigação original.",
      link: "/cessao-direitos"
    },
    {
      termo: "Condição Resolutiva",
      definicao: "Cláusula que determina a extinção do contrato caso determinado fato venha a ocorrer no futuro.",
      link: "/condicao-resolutiva"
    },
    {
      termo: "Condição Suspensiva",
      definicao: "Cláusula que suspende os efeitos do contrato até que determinado fato ocorra, tornando-o eficaz somente após sua realização.",
      link: "/condicao-suspensiva"
    },
    {
      termo: "Contrato Aleatório",
      definicao: "Contrato em que o risco da prestação é assumido por uma das partes, como no caso de apostas ou seguros.",
      link: "/contrato-aleatorio"
    }
  ];

  const filteredTermos = useMemo(() => {
    if (!searchTerm.trim()) return termosJuridicos;
    
    const search = searchTerm.toLowerCase();
    return termosJuridicos.filter(item => 
      item.termo.toLowerCase().includes(search) || 
      item.definicao.toLowerCase().includes(search)
    );
  }, [searchTerm]);

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

          <section className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Buscar termos jurídicos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
            {searchTerm && (
              <p className="text-center text-muted-foreground mt-4">
                {filteredTermos.length} {filteredTermos.length === 1 ? 'termo encontrado' : 'termos encontrados'}
              </p>
            )}
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {filteredTermos.map((item, index) => (
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