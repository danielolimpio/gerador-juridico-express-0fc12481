import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, BookOpen, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";


const GlossarioJuridico = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const termosJuridicos = [
    {
      termo: "O que é Contrato de Adesão?",
      definicao: "Contrato com cláusulas preestabelecidas por uma das partes, cabendo à outra apenas aceitar ou rejeitar. Comum em serviços essenciais e contratos de consumo.",
      link: "/contrato-de-adesao"
    },
    {
      termo: "O que é Fiador?",
      definicao: "Pessoa que se responsabiliza pelo cumprimento das obrigações do devedor principal em caso de inadimplemento. Garante o pagamento de dívidas contratuais.",
      link: "/fiador-responsabilidade-legal"
    },
    {
      termo: "O que é Caução?",
      definicao: "Garantia real ou pessoal oferecida para assegurar o cumprimento de uma obrigação. Pode ser em dinheiro, bens móveis ou imóveis.",
      link: "/caucao-garantia-contratual"
    },
    {
      termo: "O que é Comodato?",
      definicao: "Empréstimo gratuito de coisa não fungível, que deve ser restituída após o uso. Muito utilizado para imóveis, equipamentos e veículos.",
      link: "/comodato-emprestimo-gratuito"
    },
    {
      termo: "O que é Vício Redibitório?",
      definicao: "Defeito oculto que torna a coisa inadequada ao uso ou diminui seu valor. Permite a devolução do produto ou redução do preço pago.",
      link: "/vicio-redibitorio-defeito-oculto"
    },
    {
      termo: "O que é Resilição?",
      definicao: "Desfazimento do contrato por acordo mútuo entre as partes. Também chamada de distrato, ocorre de forma consensual.",
      link: "/resilicao-contratual-mutuo-acordo"
    },
    {
      termo: "O que é Rescisão?",
      definicao: "Extinção do contrato por inadimplemento ou descumprimento de uma das partes. Gera direito a indenização para a parte prejudicada.",
      link: "/rescisao-de-contrato-descumprimento"
    },
    {
      termo: "O que é Onerosidade Excessiva?",
      definicao: "Situação em que a prestação de uma das partes torna-se extremamente onerosa por eventos imprevisíveis. Permite revisão ou extinção do contrato.",
      link: "/onerosidade-excessiva-teoria-imprevacao"
    },
    {
      termo: "O que é Cláusula Penal?",
      definicao: "Previsão de multa compensatória pelo descumprimento do contrato. Estabelece antecipadamente o valor da indenização por inadimplemento.",
      link: "/clausula-penal-multa-contratual"
    },
    {
      termo: "O que é Novação?",
      definicao: "Substituição de uma obrigação por outra, extinguindo a anterior. Pode modificar objeto, devedor ou natureza da dívida original.",
      link: "/novacao-substituicao-obrigacao"
    },
    {
      termo: "O que é Alienação Fiduciária?",
      definicao: "Transferência de propriedade de bem móvel ou imóvel como garantia de dívida. O devedor recupera a propriedade após quitação total.",
      link: "/alienacao-fiduciaria-garantia"
    },
    {
      termo: "O que é Usufruto?",
      definicao: "Direito de usar e gozar de bem alheio, conservando sua substância. Permite utilização e colheita de frutos sem ser proprietário.",
      link: "/usufruto-direito-real"
    },
    {
      termo: "O que são Arras?",
      definicao: "Sinal dado no ato da celebração do contrato como garantia de sua execução. Confirma a intenção de cumprimento e pode ser confirmatório ou penitencial.",
      link: "/arras-sinal-contratual"
    },
    {
      termo: "O que é Força Maior?",
      definicao: "Evento imprevisível e inevitável que impede o cumprimento da obrigação. Exemplos: guerras, fenômenos naturais extremos e atos governamentais.",
      link: "/forca-maior-evento-imprevisivel"
    },
    {
      termo: "O que é Caso Fortuito?",
      definicao: "Evento previsível, mas inevitável, que impossibilita o cumprimento do contrato. Difere da força maior por sua possível previsibilidade.",
      link: "/caso-fortuito-evento-inevitavel"
    },
    {
      termo: "O que é Direito de Arrependimento?",
      definicao: "Faculdade de desfazer o negócio jurídico dentro de prazo legal. No CDC, consumidor tem 7 dias para desistir de compras fora do estabelecimento.",
      link: "/direito-arrependimento-prazo-legal"
    },
    {
      termo: "O que são Benfeitorias?",
      definicao: "Melhoramentos realizados no bem, podendo ser necessárias (conservação), úteis (valorização) ou voluptuárias (embelezamento e recreio).",
      link: "/benfeitorias-melhoramentos"
    },
    {
      termo: "O que é Evicção?",
      definicao: "Perda da coisa adquirida por decisão judicial que reconhece direito anterior de terceiro. O vendedor deve garantir a propriedade ao comprador.",
      link: "/eviccao-perda-bem"
    },
    {
      termo: "O que é Sub-rogação?",
      definicao: "Substituição de uma pessoa por outra na titularidade de um direito. Permite que terceiro que paga dívida alheia assuma os direitos do credor.",
      link: "/sub-rogacao-substituicao"
    },
    {
      termo: "O que é Mora?",
      definicao: "Atraso no cumprimento da obrigação quando ainda é possível e útil a prestação. Gera obrigação de pagar juros e correção monetária.",
      link: "/mora-atraso-obrigacao"
    },
    {
      termo: "O que é Arbitragem?",
      definicao: "Método alternativo de resolução de conflitos em que as partes elegem árbitro ou tribunal arbitral. Decisão tem força de sentença judicial.",
      link: "/arbitragem-resolucao-conflitos"
    },
    {
      termo: "O que é Cláusula de Não Concorrência?",
      definicao: "Acordo que impede uma das partes de atuar em atividade concorrente por período e região determinados. Comum em contratos de trabalho e societários.",
      link: "/clausula-nao-concorrencia"
    },
    {
      termo: "O que é Cláusula de Confidencialidade?",
      definicao: "Obrigação contratual de manter sigilo sobre informações trocadas entre as partes. Protege segredos comerciais e dados sensíveis.",
      link: "/clausula-confidencialidade"
    },
    {
      termo: "O que é Cessão de Crédito?",
      definicao: "Transferência do direito de crédito de um credor (cedente) para terceiro (cessionário). Pode ocorrer com ou sem consentimento do devedor.",
      link: "/cessao-credito"
    },
    {
      termo: "O que é Cessão de Direitos?",
      definicao: "Ato pelo qual uma parte transfere a outrem os direitos decorrentes de um contrato. A obrigação original permanece inalterada.",
      link: "/cessao-direitos"
    },
    {
      termo: "O que é Condição Resolutiva?",
      definicao: "Cláusula que determina a extinção do contrato caso determinado fato venha a ocorrer no futuro. Desfaz os efeitos já produzidos.",
      link: "/condicao-resolutiva"
    },
    {
      termo: "O que é Condição Suspensiva?",
      definicao: "Cláusula que suspende os efeitos do contrato até que determinado fato ocorra. O contrato só se torna eficaz após realização da condição.",
      link: "/condicao-suspensiva"
    },
    {
      termo: "O que é Contrato Aleatório?",
      definicao: "Contrato em que o risco da prestação é assumido por uma das partes. Exemplos incluem apostas, seguros e contratos de safra futura.",
      link: "/contrato-aleatorio"
    },
    {
      termo: "O que é Contrato Bilateral?",
      definicao: "Contrato em que ambas as partes assumem obrigações recíprocas. Exemplo clássico é a compra e venda, onde há troca de bem por dinheiro.",
      link: "/contrato-bilateral"
    },
    {
      termo: "O que é Contrato Unilateral?",
      definicao: "Contrato em que apenas uma das partes assume obrigações. Exemplos incluem doação pura, comodato e mútuo gratuito.",
      link: "/contrato-unilateral"
    },
    {
      termo: "O que é Dano Moral?",
      definicao: "Lesão à honra, imagem, dignidade ou privacidade de uma pessoa. Gera direito à indenização mesmo sem prejuízo patrimonial comprovado.",
      link: "/dano-moral"
    },
    {
      termo: "O que é Dano Material?",
      definicao: "Prejuízo patrimonial sofrido por uma das partes em decorrência do descumprimento contratual ou ato ilícito. Inclui danos emergentes e lucros cessantes.",
      link: "/dano-material"
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
          <Breadcrumbs />
          
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