import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Ban, MapPin, Clock, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const ClausulaNaoConcorrencia = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cláusula de Não Concorrência: Proteção Contratual",
    "description": "Entenda a cláusula de não concorrência em contratos: validade, limites, período determinado e região. Proteção contra concorrência desleal.",
    "datePublished": "2025-11-08",
    "dateModified": "2025-11-08",
    "author": {
      "@type": "Organization",
      "name": "Modelo de Contrato"
    }
  };

  return (
    <>
      <SEO 
        title="Cláusula de Não Concorrência: Proteção Contratual"
        description="Entenda a cláusula de não concorrência em contratos: validade jurídica, limites temporais e geográficos, período determinado e região. Proteção contra concorrência desleal."
        keywords="cláusula de não concorrência, pacto de não concorrência, contrato de trabalho, proteção contratual, concorrência desleal"
        canonical="https://modelodecontrato.org/clausula-nao-concorrencia"
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
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Ban className="h-10 w-10 text-primary" />
                <div>
                  <h1 className="text-4xl font-bold text-foreground">
                    Cláusula de Não Concorrência
                  </h1>
                  <p className="text-sm text-muted-foreground mt-1">
                    Publicado em 08 de novembro de 2025
                  </p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Acordo contratual que impede uma das partes de atuar em atividade concorrente com a outra por um período determinado e em determinada região.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Ban className="h-6 w-6 text-primary" />
                  O que é Cláusula de Não Concorrência?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A cláusula de não concorrência, também chamada de <strong>pacto de não concorrência</strong>, é uma disposição contratual que restringe a liberdade de uma das partes de exercer atividade concorrente ou similar àquela desenvolvida pela outra parte.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Esta cláusula visa proteger interesses legítimos do empregador ou contratante, como segredos comerciais, know-how, carteira de clientes e investimentos em treinamento, evitando que sejam utilizados em benefício de concorrentes.
                </p>
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">⚖️ Importante:</strong> Para ser válida, a cláusula deve respeitar limites razoáveis de tempo, região e atividade, além de prever compensação financeira adequada ao restringido.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  Requisitos de Validade
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para que a cláusula de não concorrência seja considerada válida juridicamente, deve atender aos seguintes requisitos:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        Limite Temporal
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p className="mb-2">Período razoável e proporcional, geralmente:</p>
                      <ul className="text-sm space-y-1">
                        <li>• 6 meses a 2 anos (emprego)</li>
                        <li>• 2 a 5 anos (alta administração)</li>
                        <li>• 3 a 10 anos (sociedades e franquias)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Limite Geográfico
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p className="mb-2">Área territorial específica:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Município ou região específica</li>
                        <li>• Estado ou grupo de estados</li>
                        <li>• Todo o território nacional</li>
                        <li>• Internacional (casos específicos)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Elementos Essenciais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ <strong>Compensação financeira:</strong> Contraprestação pecuniária adequada</li>
                      <li>✓ <strong>Atividade específica:</strong> Descrição clara das atividades restritas</li>
                      <li>✓ <strong>Interesse legítimo:</strong> Proteção de segredos ou investimentos</li>
                      <li>✓ <strong>Razoabilidade:</strong> Equilíbrio entre proteção e liberdade profissional</li>
                      <li>✓ <strong>Forma escrita:</strong> Cláusula expressa no contrato</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  Aplicações Práticas
                </h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">1. Contratos de Trabalho</h3>
                <Card className="mb-4">
                  <CardContent className="pt-6 text-muted-foreground">
                    <p className="mb-3">Aplicável principalmente a:</p>
                    <ul className="space-y-2">
                      <li>• Altos executivos e diretores</li>
                      <li>• Profissionais com acesso a informações estratégicas</li>
                      <li>• Vendedores com carteira de clientes consolidada</li>
                      <li>• Empregados que receberam treinamento especializado</li>
                    </ul>
                    <p className="mt-3 text-sm italic">
                      Observação: CLT não prevê expressamente, mas jurisprudência aceita quando há compensação financeira.
                    </p>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2. Contratos Societários</h3>
                <Card className="mb-4">
                  <CardContent className="pt-6 text-muted-foreground">
                    <p className="mb-3">Utilizada em:</p>
                    <ul className="space-y-2">
                      <li>• Acordo de sócios e cotistas</li>
                      <li>• Retirada de sócio da sociedade</li>
                      <li>• Venda de participação societária</li>
                      <li>• Dissolução parcial de sociedade</li>
                    </ul>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3. Contratos Comerciais</h3>
                <Card>
                  <CardContent className="pt-6 text-muted-foreground">
                    <p className="mb-3">Comum em:</p>
                    <ul className="space-y-2">
                      <li>• Franquias (pós-término do contrato)</li>
                      <li>• Representação comercial</li>
                      <li>• Distribuição exclusiva</li>
                      <li>• Transferência de fundo de comércio</li>
                      <li>• Contratos de know-how e tecnologia</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Consequências do Descumprimento</h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      O descumprimento da cláusula de não concorrência pode acarretar:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">⚖️ Sanções Contratuais</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Pagamento de multa contratual</li>
                          <li>• Devolução de valores recebidos</li>
                          <li>• Rescisão de outros vínculos</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">💼 Medidas Judiciais</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Ação de obrigação de não fazer</li>
                          <li>• Indenização por perdas e danos</li>
                          <li>• Medidas cautelares e liminares</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Legislação Aplicável</h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <strong className="text-foreground">Código Civil - Art. 422</strong>
                        <p className="text-sm mt-1">Princípio da boa-fé objetiva e função social do contrato.</p>
                      </li>
                      <li>
                        <strong className="text-foreground">Código Civil - Art. 1.147</strong>
                        <p className="text-sm mt-1">Proibição de concorrência no trespasse de estabelecimento comercial.</p>
                      </li>
                      <li>
                        <strong className="text-foreground">Lei nº 8.955/1994 (Lei de Franquias)</strong>
                        <p className="text-sm mt-1">Permite cláusula de não concorrência após término do contrato de franquia.</p>
                      </li>
                      <li>
                        <strong className="text-foreground">Constituição Federal - Art. 5º, XIII</strong>
                        <p className="text-sm mt-1">Liberdade de exercício profissional (limite à cláusula).</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <Card className="border-amber-500/20 bg-amber-500/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      Cuidados Importantes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <ul className="space-y-2">
                      <li>⚠️ Cláusulas abusivas (prazo ou área excessivos) podem ser declaradas nulas</li>
                      <li>⚠️ Ausência de compensação financeira pode invalidar a cláusula trabalhista</li>
                      <li>⚠️ Restrição excessiva à liberdade profissional é inconstitucional</li>
                      <li>⚠️ Deve haver interesse legítimo a proteger (segredos, clientes, investimento)</li>
                      <li>⚠️ Jurisprudência avalia caso a caso a razoabilidade das restrições</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>
          </article>

          <section className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
            <Ban className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Precisa de Cláusula de Não Concorrência?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Crie contratos personalizados com cláusulas de não concorrência adequadas ao seu caso específico.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate('/gerador')}
            >
              Criar Contrato Agora
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default ClausulaNaoConcorrencia;
