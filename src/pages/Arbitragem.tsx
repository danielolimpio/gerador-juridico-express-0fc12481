import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Scale, Users, FileCheck, Gavel } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const Arbitragem = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Arbitragem: Método Alternativo de Resolução de Conflitos",
    "description": "Entenda como funciona a arbitragem, método privado de resolução de disputas com força de sentença judicial. Procedimento, vantagens e aplicações.",
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
        title="Arbitragem: Método Alternativo de Resolução de Conflitos"
        description="Entenda como funciona a arbitragem, método privado de resolução de disputas com força de sentença judicial. Procedimento, vantagens e aplicações práticas."
        keywords="arbitragem, resolução de conflitos, tribunal arbitral, árbitro, lei de arbitragem, justiça privada"
        canonical="https://modelodecontrato.org/arbitragem-resolucao-conflitos"
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
                <Scale className="h-10 w-10 text-primary" />
                <div>
                  <h1 className="text-4xl font-bold text-foreground">
                    Arbitragem
                  </h1>
                  <p className="text-sm text-muted-foreground mt-1">
                    Publicado em 08 de novembro de 2025
                  </p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Método alternativo de resolução de conflitos em que as partes elegem um árbitro ou tribunal arbitral para decidir a disputa, com força de sentença judicial.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Gavel className="h-6 w-6 text-primary" />
                  O que é Arbitragem?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A arbitragem é um meio extrajudicial de resolução de conflitos regulamentado pela Lei nº 9.307/1996 (Lei de Arbitragem). Trata-se de uma forma privada de justiça em que as partes, de comum acordo, escolhem um ou mais árbitros especializados para decidir suas disputas relacionadas a direitos patrimoniais disponíveis.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A decisão proferida pelo árbitro ou tribunal arbitral é denominada <strong>sentença arbitral</strong> e possui a mesma força executiva de uma sentença judicial, podendo ser executada diretamente no Poder Judiciário caso não seja cumprida voluntariamente.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Como Funciona a Arbitragem?
                </h2>
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle>Requisitos para Arbitragem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ <strong>Capacidade das partes:</strong> Pessoas capazes de contratar</li>
                      <li>✓ <strong>Direitos disponíveis:</strong> Apenas questões patrimoniais disponíveis</li>
                      <li>✓ <strong>Convenção de arbitragem:</strong> Cláusula compromissória ou compromisso arbitral</li>
                      <li>✓ <strong>Escolha dos árbitros:</strong> Profissionais imparciais e especializados</li>
                    </ul>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Procedimento Arbitral</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">1. Cláusula Compromissória</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      Inserida no contrato antes do conflito, estipula que eventuais disputas serão resolvidas por arbitragem.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">2. Compromisso Arbitral</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      Acordo posterior ao conflito, firmado quando as partes decidem submeter a questão à arbitragem.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">3. Nomeação dos Árbitros</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      As partes escolhem um ou mais árbitros especialistas no assunto em disputa.
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">4. Sentença Arbitral</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      Decisão final com força de sentença judicial, não sujeita a recurso ou homologação.
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileCheck className="h-6 w-6 text-primary" />
                  Vantagens da Arbitragem
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">⚡ Celeridade</h4>
                        <p className="text-sm text-muted-foreground">Procedimento mais rápido que o judicial, com prazos definidos pelas partes.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">🔒 Confidencialidade</h4>
                        <p className="text-sm text-muted-foreground">Disputas resolvidas de forma sigilosa, protegendo a imagem das partes.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">🎓 Especialização</h4>
                        <p className="text-sm text-muted-foreground">Árbitros especializados na matéria em discussão.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">⚖️ Definitividade</h4>
                        <p className="text-sm text-muted-foreground">Sentença não sujeita a recursos, garantindo solução final.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">🌍 Flexibilidade</h4>
                        <p className="text-sm text-muted-foreground">As partes definem regras procedimentais e local da arbitragem.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">💼 Economia</h4>
                        <p className="text-sm text-muted-foreground">Pode ser mais econômica em disputas complexas de alto valor.</p>
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
                        <strong className="text-foreground">Lei nº 9.307/1996 (Lei de Arbitragem)</strong>
                        <p className="text-sm mt-1">Regulamenta integralmente a arbitragem no Brasil.</p>
                      </li>
                      <li>
                        <strong className="text-foreground">Art. 1º</strong>
                        <p className="text-sm mt-1">As pessoas capazes de contratar poderão valer-se da arbitragem para dirimir litígios relativos a direitos patrimoniais disponíveis.</p>
                      </li>
                      <li>
                        <strong className="text-foreground">Art. 31</strong>
                        <p className="text-sm mt-1">A sentença arbitral produz, entre as partes e seus sucessores, os mesmos efeitos da sentença proferida pelos órgãos do Poder Judiciário.</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-primary" />
                      Quando Usar Arbitragem?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p className="mb-3">A arbitragem é especialmente recomendada em:</p>
                    <ul className="space-y-2">
                      <li>• Contratos comerciais de médio e grande valor</li>
                      <li>• Disputas internacionais entre empresas</li>
                      <li>• Conflitos societários e parcerias empresariais</li>
                      <li>• Questões contratuais complexas que exigem conhecimento técnico especializado</li>
                      <li>• Casos onde confidencialidade e celeridade são prioritárias</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>
          </article>

          <section className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
            <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Precisa Incluir Cláusula de Arbitragem?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Utilize nosso gerador gratuito para criar contratos com cláusula compromissória de arbitragem personalizada para seu negócio.
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

export default Arbitragem;
