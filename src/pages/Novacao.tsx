import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, AlertTriangle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const Novacao = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "O que é Novação? Substituição de Obrigação e Extinção de Dívida",
    "description": "Entenda o que é novação, como funciona a substituição de uma obrigação por outra, os tipos de novação e os efeitos jurídicos.",
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
        title="Novação: Substituição de Obrigação e Extinção de Dívida Anterior"
        description="Novação é a substituição de uma obrigação por outra, extinguindo a anterior. Conheça os tipos, requisitos e efeitos jurídicos da novação."
        keywords="novação, substituição obrigação, extinção dívida, novação objetiva, novação subjetiva, renegociação dívida"
        canonical="https://modelodecontrato.org/novacao-substituicao-obrigacao"
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
              <RefreshCw className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                O que é Novação? Substituição de Obrigação e Extinção de Dívida
              </h1>
              <p className="text-xl text-muted-foreground">
                Entenda como funciona a substituição de uma obrigação por outra e a extinção da dívida anterior
              </p>
            </header>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    A <strong>novação</strong> é um instituto jurídico previsto nos artigos 360 a 367 do Código Civil brasileiro que consiste na <strong>substituição de uma obrigação por outra</strong>, extinguindo completamente a obrigação anterior e criando uma nova com características diferentes. É uma forma de quitação indireta, muito utilizada em renegociações de dívidas.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Requisitos essenciais da novação</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    Para que ocorra novação válida, devem estar presentes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Obrigação anterior válida:</strong> deve existir uma dívida legítima a ser substituída;</li>
                    <li><strong>Criação de obrigação nova:</strong> com elementos essencialmente diferentes da anterior;</li>
                    <li><strong>Intenção de novar (animus novandi):</strong> vontade expressa das partes de extinguir a dívida antiga;</li>
                    <li><strong>Capacidade das partes:</strong> para contratar e dispor de direitos.</li>
                  </ul>

                  <div className="bg-primary/10 border-l-4 border-primary p-4 my-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Atenção:</h3>
                        <p className="text-foreground">
                          A novação <strong>não se presume</strong>. É necessário que fique claro no acordo que a intenção é <strong>extinguir a obrigação anterior</strong>, não apenas modificá-la ou prorrogá-la.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Tipos de novação</h2>
                  
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Novação Objetiva (Real)</h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Mudança no <strong>objeto da obrigação</strong> ou em sua modalidade de pagamento.
                  </p>
                  <p className="text-foreground leading-relaxed mb-6">
                    <strong>Exemplo:</strong> Substituir dívida de R$ 100 mil em dinheiro por entrega de um imóvel avaliado no mesmo valor.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Novação Subjetiva Ativa</h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Substituição do <strong>credor</strong> com consentimento do devedor.
                  </p>
                  <p className="text-foreground leading-relaxed mb-6">
                    <strong>Exemplo:</strong> João devia R$ 50 mil a Maria. Com concordância de todos, Pedro assume o lugar de Maria como novo credor, extinguindo a dívida anterior.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Novação Subjetiva Passiva</h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Substituição do <strong>devedor</strong>, com liberação do devedor original (art. 362, CC).
                  </p>
                  <p className="text-foreground leading-relaxed mb-6">
                    <strong>Exemplo:</strong> Carlos devia R$ 30 mil ao banco. Seu irmão Luís assume a dívida, e o banco libera Carlos da obrigação original.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Efeitos jurídicos da novação</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Extinção da obrigação primitiva:</strong> incluindo garantias, juros, multas e acessórios;</li>
                    <li><strong>Criação de nova obrigação:</strong> independente da anterior;</li>
                    <li><strong>Extinção das garantias:</strong> fianças, penhores e hipotecas não se transferem automaticamente (art. 364, CC) — precisam ser renovados expressamente;</li>
                    <li><strong>Impossibilidade de cobrança da dívida antiga:</strong> exceto se a nova for nula ou anulável.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Novação x Modificação contratual</h2>
                  <p className="text-foreground leading-relaxed mb-6">
                    É importante não confundir novação com simples <strong>modificação ou renegociação</strong>:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Novação:</strong> extingue completamente a obrigação antiga e cria uma nova;</li>
                    <li><strong>Modificação:</strong> altera cláusulas do mesmo contrato, sem extingui-lo (ex: prorrogação de prazo, redução de juros).</li>
                  </ul>
                  <p className="text-foreground leading-relaxed mb-6">
                    Na prática, a maioria das "renegociações de dívidas" são apenas modificações, não novações — a menos que haja intenção expressa de novar.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Exemplos práticos</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Transformar dívida de cheque em promissória;</li>
                    <li>Substituir pagamento em dinheiro por dação em pagamento (entrega de bem);</li>
                    <li>Transferir dívida de um devedor para outro com quitação do primeiro;</li>
                    <li>Converter dívida em ações ou participação societária.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Cuidados ao fazer novação</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Formalize por escrito:</strong> deixe claro que há intenção de novar;</li>
                    <li><strong>Renove garantias:</strong> fianças e garantias reais não se transferem automaticamente;</li>
                    <li><strong>Avalie a solvência do novo devedor:</strong> em caso de novação subjetiva passiva;</li>
                    <li><strong>Verifique a validade da obrigação anterior:</strong> se for nula, a novação também será;</li>
                    <li><strong>Consulte advogado:</strong> especialmente em valores relevantes.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Quando a novação é vantajosa?</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Devedor tem dificuldade de pagar em dinheiro, mas possui bens;</li>
                    <li>Há interesse em substituir garantias ou partes do contrato;</li>
                    <li>Busca-se "limpar" a dívida de juros e encargos acumulados;</li>
                    <li>Necessidade de reestruturação completa da obrigação.</li>
                  </ul>

                  <div className="bg-accent/20 rounded-lg p-6 mt-8">
                    <div className="flex items-start">
                      <FileText className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Base legal:</h3>
                        <p className="text-foreground text-sm">
                          Código Civil, arts. 360 a 367
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
      </div>
    </>
  );
};

export default Novacao;