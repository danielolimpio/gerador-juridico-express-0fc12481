import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HandCoins, AlertTriangle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Arras = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "O que são Arras? Sinal e Garantia de Execução Contratual",
    "description": "Entenda o que são arras ou sinal, tipos (confirmatórias e penitenciais), função e consequências do arrependimento contratual.",
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
        title="Arras: Sinal e Garantia de Execução Contratual - Tipos e F"
        description="Arras são sinal dado no ato da celebração do contrato como garantia de sua execução. Conheça os tipos, função e consequências do arrependimento."
        keywords="arras, sinal contratual, arras confirmatórias, arras penitenciais, arrependimento contratual, garantia contratual, princípio arrependimento"
        canonical="https://modelodecontrato.org/arras-sinal-contratual"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <Breadcrumbs />
          
          <nav className="mb-6">
            <Button variant="outline" onClick={() => navigate('/glossario-juridico')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Glossário
            </Button>
          </nav>

          <article>
            <header className="text-center mb-12">
              <HandCoins className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                O que são Arras? Sinal e Garantia de Execução Contratual
              </h1>
              <p className="text-xl text-muted-foreground">
                Entenda como funciona o sinal dado na celebração do contrato e suas implicações jurídicas
              </p>
            </header>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    As <strong>arras</strong>, também conhecidas como <strong>sinal</strong> ou <strong>princípio de pagamento</strong>, são um valor entregue por uma das partes à outra no momento da celebração do contrato, como garantia de que o negócio será cumprido. Estão previstas nos artigos 417 a 420 do Código Civil brasileiro e são muito comuns em contratos de compra e venda de imóveis, veículos e outros bens.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Funções das arras</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Confirmar a seriedade do negócio:</strong> demonstra compromisso real das partes;</li>
                    <li><strong>Garantir a execução:</strong> desestimula o descumprimento contratual;</li>
                    <li><strong>Prever indenização:</strong> estabelece valor mínimo de compensação em caso de arrependimento;</li>
                    <li><strong>Princípio de pagamento:</strong> pode ser abatido do preço total na conclusão do negócio.</li>
                  </ul>

                  <div className="bg-primary/10 border-l-4 border-primary p-4 my-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Diferença importante:</h3>
                        <p className="text-foreground">
                          Arras não são entrada ou parcela inicial — são <strong>garantia de execução</strong>. A entrada é parte do pagamento; as arras podem ser devolvidas ou perdidas dependendo do tipo e das circunstâncias.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Tipos de arras</h2>
                  
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Arras Confirmatórias</h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    São o tipo <strong>padrão</strong> no direito brasileiro (art. 417, CC). Têm por finalidade confirmar a seriedade do contrato e garantir sua execução. Características:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Presunção legal:</strong> salvo estipulação em contrário, toda arra é confirmatória;</li>
                    <li><strong>Não permitem arrependimento:</strong> o contrato deve ser cumprido;</li>
                    <li><strong>Indenização por inadimplemento:</strong> se uma parte descumprir, a outra pode exigir execução + perdas e danos ou rescindir o contrato e reter/receber em dobro as arras;</li>
                    <li><strong>Abatimento do preço:</strong> se o negócio se concluir, o valor é descontado do total.</li>
                  </ul>

                  <p className="text-foreground leading-relaxed mb-6">
                    <strong>Exemplo:</strong> João dá R$ 10 mil de arras confirmatórias para comprar um carro de R$ 50 mil. Se o vendedor desistir, deve devolver R$ 20 mil (dobro). Se João desistir, perde os R$ 10 mil. Se o negócio se concretizar, João paga apenas R$ 40 mil restantes.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Arras Penitenciais</h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Permitem o <strong>direito de arrependimento</strong> (art. 420, CC). São menos comuns e devem ser expressamente pactuadas. Características:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Cláusula expressa obrigatória:</strong> deve constar claramente no contrato;</li>
                    <li><strong>Direito de arrependimento:</strong> qualquer parte pode desistir pagando/perdendo as arras;</li>
                    <li><strong>Limite da indenização:</strong> quem se arrepende só perde/devolve as arras, sem outras indenizações;</li>
                    <li><strong>Prazo para arrependimento:</strong> geralmente estipulado no contrato.</li>
                  </ul>

                  <p className="text-foreground leading-relaxed mb-6">
                    <strong>Exemplo:</strong> Maria dá R$ 5 mil de arras penitenciais para comprar um apartamento. Se desistir dentro do prazo, perde apenas os R$ 5 mil. Se o vendedor desistir, devolve em dobro (R$ 10 mil).
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Consequências do descumprimento</h2>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-3 text-left">Situação</th>
                          <th className="border border-border p-3 text-left">Arras Confirmatórias</th>
                          <th className="border border-border p-3 text-left">Arras Penitenciais</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3"><strong>Quem deu as arras desiste</strong></td>
                          <td className="border border-border p-3">Perde as arras + pode ser processado por perdas e danos</td>
                          <td className="border border-border p-3">Perde apenas as arras</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3"><strong>Quem recebeu as arras desiste</strong></td>
                          <td className="border border-border p-3">Devolve em dobro + pode ser processado por perdas e danos</td>
                          <td className="border border-border p-3">Devolve apenas em dobro</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3"><strong>Negócio se concretiza</strong></td>
                          <td className="border border-border p-3" colSpan={2}>Valor é abatido do preço total</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Arras x Cláusula penal</h2>
                  <p className="text-foreground leading-relaxed mb-6">
                    Embora ambas funcionem como garantia, há diferenças importantes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Arras:</strong> entregues <strong>no momento da celebração</strong> do contrato;</li>
                    <li><strong>Cláusula penal:</strong> prevista no contrato, mas só é <strong>cobrada se houver descumprimento</strong>;</li>
                    <li><strong>Arras:</strong> sempre envolvem entrega de valor ou bem;</li>
                    <li><strong>Cláusula penal:</strong> é apenas previsão abstrata de multa.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Quando as arras são obrigatórias?</h2>
                  <p className="text-foreground leading-relaxed mb-6">
                    As arras <strong>não são obrigatórias</strong> — são facultativas. Entretanto, são muito recomendadas em:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Compra e venda de imóveis de alto valor;</li>
                    <li>Negócios com longo prazo entre sinal e conclusão;</li>
                    <li>Situações em que há risco de desistência;</li>
                    <li>Contratos preliminares (promessa de compra e venda).</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Forma de pagamento das arras</h2>
                  <p className="text-foreground leading-relaxed mb-6">
                    As arras podem ser dadas em:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li><strong>Dinheiro:</strong> forma mais comum (depósito, transferência, cheque);</li>
                    <li><strong>Bens móveis:</strong> joia, carro, equipamento;</li>
                    <li><strong>Título de crédito:</strong> cheque pré-datado, nota promissória;</li>
                    <li><strong>Qualquer bem de valor econômico:</strong> desde que aceito pelas partes.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Devolução ou retenção das arras</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    As arras devem ser devolvidas quando:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>O negócio se concretiza (são abatidas do preço);</li>
                    <li>Ambas as partes desistem de comum acordo;</li>
                    <li>O contrato é anulado por vício de consentimento ou ilegalidade;</li>
                    <li>Há impossibilidade de cumprimento por caso fortuito ou força maior.</li>
                  </ul>

                  <p className="text-foreground leading-relaxed mb-6">
                    As arras podem ser retidas quando:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Quem deu as arras desiste sem justa causa;</li>
                    <li>Há inadimplemento culposo da parte que entregou o sinal.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Exemplo prático completo</h2>
                  <div className="bg-muted/50 rounded-lg p-6 mb-6">
                    <p className="text-foreground mb-4">
                      <strong>Situação:</strong> Pedro quer comprar um apartamento de Ana por R$ 300 mil. Eles assinam uma promessa de compra e venda, e Pedro entrega R$ 30 mil de arras confirmatórias.
                    </p>
                    <p className="text-foreground mb-4">
                      <strong>Cenário 1 - Negócio se concretiza:</strong> Pedro paga os R$ 270 mil restantes e recebe a escritura. Os R$ 30 mil de arras são abatidos do total.
                    </p>
                    <p className="text-foreground mb-4">
                      <strong>Cenário 2 - Pedro desiste:</strong> Perde os R$ 30 mil. Ana pode ainda processá-lo por perdas e danos adicionais, se houver.
                    </p>
                    <p className="text-foreground mb-4">
                      <strong>Cenário 3 - Ana desiste:</strong> Deve devolver R$ 60 mil (dobro das arras) a Pedro. Pedro também pode processá-la por lucros cessantes.
                    </p>
                    <p className="text-foreground">
                      <strong>Cenário 4 - Arras penitenciais:</strong> Se fossem penitenciais, Pedro poderia desistir perdendo apenas os R$ 30 mil, sem outras consequências.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Recomendações práticas</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                    <li>Sempre formalize as arras por escrito, com recibo detalhado;</li>
                    <li>Especifique claramente se são confirmatórias ou penitenciais;</li>
                    <li>Defina prazo para conclusão do negócio;</li>
                    <li>Indique forma de abatimento das arras do preço final;</li>
                    <li>Preveja o que acontece em caso de desistência de cada parte;</li>
                    <li>Consulte advogado antes de assinar promessa de compra e venda com arras elevadas.</li>
                  </ul>

                  <div className="bg-accent/20 rounded-lg p-6 mt-8">
                    <div className="flex items-start">
                      <FileText className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Base legal:</h3>
                        <p className="text-foreground text-sm">
                          Código Civil, arts. 417 a 420
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

export default Arras;