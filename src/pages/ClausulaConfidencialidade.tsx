import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Lock, FileKey, Shield, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const ClausulaConfidencialidade = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cláusula de Confidencialidade: Proteção de Informações",
    "description": "Entenda a cláusula de confidencialidade: obrigação de sigilo, proteção de informações confidenciais, NDA e acordo de confidencialidade.",
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
        title="Cláusula de Confidencialidade: Proteção de Informações"
        description="Entenda a cláusula de confidencialidade: obrigação de sigilo contratual, proteção de informações confidenciais, NDA e acordo de confidencialidade (NDA)."
        keywords="cláusula de confidencialidade, NDA, acordo de confidencialidade, sigilo contratual, informações confidenciais, proteção de dados"
        canonical="https://modelodecontrato.org/clausula-confidencialidade"
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
                <Lock className="h-10 w-10 text-primary" />
                <div>
                  <h1 className="text-4xl font-bold text-foreground">
                    Cláusula de Confidencialidade
                  </h1>
                  <p className="text-sm text-muted-foreground mt-1">
                    Publicado em 08 de novembro de 2025
                  </p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Obrigação contratual de manter sigilo sobre informações trocadas entre as partes durante ou após a vigência do contrato.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Lock className="h-6 w-6 text-primary" />
                  O que é Cláusula de Confidencialidade?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A cláusula de confidencialidade, também conhecida como <strong>acordo de confidencialidade</strong> ou <strong>NDA (Non-Disclosure Agreement)</strong>, é uma disposição contratual que estabelece a obrigação de uma ou ambas as partes de manterem sigilo sobre informações sensíveis compartilhadas durante a relação contratual.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Essas informações confidenciais podem incluir segredos comerciais, processos, tecnologias, estratégias de negócio, dados financeiros, listas de clientes, metodologias e quaisquer outras informações consideradas estratégicas ou sensíveis.
                </p>
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">🔒 Importante:</strong> A quebra de confidencialidade pode gerar responsabilidade civil, criminal e trabalhista, além de danos à imagem e perdas financeiras significativas.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileKey className="h-6 w-6 text-primary" />
                  Tipos de Informações Protegidas
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">📊 Informações Comerciais</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <ul className="text-sm space-y-1">
                        <li>• Planos de negócio e estratégias</li>
                        <li>• Listas de clientes e fornecedores</li>
                        <li>• Preços, margens e condições comerciais</li>
                        <li>• Estudos de mercado e pesquisas</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">🔬 Informações Técnicas</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <ul className="text-sm space-y-1">
                        <li>• Fórmulas e processos industriais</li>
                        <li>• Código-fonte e softwares</li>
                        <li>• Desenhos técnicos e projetos</li>
                        <li>• Metodologias e know-how</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">💰 Informações Financeiras</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <ul className="text-sm space-y-1">
                        <li>• Demonstrações financeiras</li>
                        <li>• Fluxo de caixa e projeções</li>
                        <li>• Estrutura de custos</li>
                        <li>• Contratos e obrigações</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">👥 Dados Pessoais</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <ul className="text-sm space-y-1">
                        <li>• Dados de funcionários</li>
                        <li>• Informações de clientes (LGPD)</li>
                        <li>• Dados sensíveis e biométricos</li>
                        <li>• Históricos e cadastros</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Elementos Essenciais da Cláusula
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">1. Definição das Informações Confidenciais</h4>
                        <p className="text-sm">Descrição clara e precisa do que é considerado confidencial, evitando ambiguidades.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">2. Obrigações das Partes</h4>
                        <p className="text-sm">Deveres de sigilo, não divulgação, não uso para outros fins e proteção das informações.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">3. Exceções ao Sigilo</h4>
                        <p className="text-sm">Informações públicas, já conhecidas, obtidas de terceiros legitimamente ou por determinação legal.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">4. Prazo de Vigência</h4>
                        <p className="text-sm">Período durante e após o término do contrato em que o sigilo deve ser mantido (geralmente 2 a 5 anos).</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">5. Penalidades</h4>
                        <p className="text-sm">Multas contratuais, indenizações e outras consequências em caso de violação.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">6. Devolução de Informações</h4>
                        <p className="text-sm">Obrigação de devolver ou destruir documentos e materiais ao final do contrato.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  Aplicações Práticas
                </h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Quando Utilizar?</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">💼 Relações Empresariais</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <ul className="text-sm space-y-1">
                        <li>• Negociações de fusões e aquisições</li>
                        <li>• Parcerias e joint ventures</li>
                        <li>• Contratos de fornecimento</li>
                        <li>• Licenciamento de tecnologia</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">👨‍💼 Relações Trabalhistas</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <ul className="text-sm space-y-1">
                        <li>• Contratos de trabalho (CLT)</li>
                        <li>• Prestação de serviços</li>
                        <li>• Estágios e trainee</li>
                        <li>• Consultoria e assessoria</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">🚀 Startups e Inovação</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <ul className="text-sm space-y-1">
                        <li>• Apresentação para investidores</li>
                        <li>• Desenvolvimento de produtos</li>
                        <li>• Aceleradoras e incubadoras</li>
                        <li>• Rodadas de investimento</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">🔧 Projetos e Desenvolvimento</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <ul className="text-sm space-y-1">
                        <li>• Desenvolvimento de software</li>
                        <li>• Pesquisa e desenvolvimento (P&D)</li>
                        <li>• Projetos de engenharia</li>
                        <li>• Criação de conteúdo</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Tipos de Acordo de Confidencialidade</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>NDA Unilateral</CardTitle>
                      <CardDescription>Apenas uma parte divulga informações confidenciais</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Utilizado quando somente um lado compartilha informações sensíveis. Exemplo: empresa divulga informações para prestador de serviço.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>NDA Bilateral (Mútuo)</CardTitle>
                      <CardDescription>Ambas as partes divulgam informações confidenciais</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Usado em negociações onde ambas as partes compartilham informações estratégicas. Exemplo: fusões, joint ventures, parcerias.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>NDA Multilateral</CardTitle>
                      <CardDescription>Três ou mais partes envolvidas</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Aplicável em projetos complexos com múltiplos participantes. Exemplo: consórcios, grandes projetos de infraestrutura.
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Consequências da Violação</h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                      A violação da cláusula de confidencialidade pode acarretar diversas consequências jurídicas:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">⚖️ Responsabilidade Civil</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Pagamento de multa contratual</li>
                          <li>• Indenização por danos materiais</li>
                          <li>• Indenização por danos morais</li>
                          <li>• Lucros cessantes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">⚠️ Responsabilidade Criminal</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Crime de violação de segredo (Art. 153, CP)</li>
                          <li>• Concorrência desleal (Lei 9.279/96)</li>
                          <li>• Violação de segredo comercial</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">💼 Consequências Trabalhistas</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Justa causa (para empregados)</li>
                          <li>• Perda de benefícios</li>
                          <li>• Impossibilidade de recolocação</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">🛡️ Medidas Judiciais</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Ações cautelares de busca e apreensão</li>
                          <li>• Medidas inibitórias</li>
                          <li>• Bloqueio de ativos</li>
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
                        <p className="text-sm mt-1">Princípio da boa-fé objetiva nas relações contratuais.</p>
                      </li>
                      <li>
                        <strong className="text-foreground">Lei nº 9.279/1996 (Lei de Propriedade Industrial)</strong>
                        <p className="text-sm mt-1">Proteção de segredos industriais e concorrência desleal.</p>
                      </li>
                      <li>
                        <strong className="text-foreground">Lei nº 13.709/2018 (LGPD)</strong>
                        <p className="text-sm mt-1">Proteção de dados pessoais e obrigações de confidencialidade.</p>
                      </li>
                      <li>
                        <strong className="text-foreground">Código Penal - Art. 153</strong>
                        <p className="text-sm mt-1">Crime de divulgação de segredo.</p>
                      </li>
                      <li>
                        <strong className="text-foreground">CLT - Art. 482, alínea "g"</strong>
                        <p className="text-sm mt-1">Violação de segredo da empresa como motivo de justa causa.</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <Card className="border-amber-500/20 bg-amber-500/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      Boas Práticas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <ul className="space-y-2">
                      <li>✓ Defina claramente o que é confidencial e o que é de domínio público</li>
                      <li>✓ Estabeleça prazos razoáveis de sigilo (normalmente 2 a 5 anos)</li>
                      <li>✓ Preveja exceções legítimas à confidencialidade</li>
                      <li>✓ Inclua multas proporcionais ao dano potencial</li>
                      <li>✓ Determine procedimentos de devolução ou destruição de informações</li>
                      <li>✓ Registre formalmente o recebimento e ciência das partes</li>
                      <li>✓ Atualize periodicamente conforme mudanças na legislação (especialmente LGPD)</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>
          </article>

          <section className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
            <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Precisa de Acordo de Confidencialidade?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Proteja suas informações estratégicas com contratos personalizados contendo cláusulas robustas de confidencialidade.
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

export default ClausulaConfidencialidade;
