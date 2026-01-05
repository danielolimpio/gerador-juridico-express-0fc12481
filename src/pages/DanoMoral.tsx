import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Scale, AlertCircle, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const DanoMoral = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dano Moral - Indenização por Lesão Extrapatrimonial",
    "description": "Entenda o que é dano moral, como funciona a indenização, critérios de quantificação, casos práticos e direitos da vítima de lesão à honra e dignidade.",
    "datePublished": "2025-11-11",
    "dateModified": "2025-11-11",
    "author": {
      "@type": "Organization",
      "name": "Modelo de Contrato"
    }
  };

  return (
    <>
      <SEO 
        title="Dano Moral - Indenização por Lesão Extrapatrimonial"
        description="Guia completo sobre dano moral: conceito, requisitos, quantificação da indenização, diferença com dano material, casos práticos e direitos da vítima."
        keywords="dano moral, indenização, lesão à honra, dano extrapatrimonial, direitos da personalidade, reparação"
        canonical="https://modelodecontrato.org/dano-moral"
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

          <article className="prose prose-lg max-w-none">
            <header className="text-center mb-12">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Dano Moral
              </h1>
              <p className="text-xl text-muted-foreground">
                Lesão aos direitos da personalidade e reparação extrapatrimonial
              </p>
            </header>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  O que é Dano Moral?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Dano moral é a lesão a direitos de natureza extrapatrimonial, que atinge a 
                  esfera íntima, moral ou psíquica de uma pessoa. Viola direitos da personalidade 
                  como honra, imagem, dignidade, privacidade, nome, reputação, integridade 
                  psíquica, entre outros, causando sofrimento, dor, angústia ou humilhação.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Diferentemente do dano material, o dano moral não exige comprovação de prejuízo 
                  econômico. A lesão é presumida (in re ipsa) quando há violação a direitos da 
                  personalidade, sendo a indenização uma forma de compensação pelo sofrimento 
                  causado e punição ao ofensor.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Requisitos para Configuração do Dano Moral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Conduta Antijurídica</h3>
                    <p className="text-muted-foreground">
                      Ato ilícito praticado por ação ou omissão, violando direito ou causando 
                      dano a outrem. Pode ser dolosa (intencional) ou culposa (por negligência, 
                      imprudência ou imperícia).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. Dano Efetivo</h3>
                    <p className="text-muted-foreground">
                      Lesão concreta a direito da personalidade, causando sofrimento psíquico, 
                      angústia, constrangimento, humilhação ou abalo à honra, imagem ou dignidade. 
                      Em casos graves, o dano é presumido.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. Nexo de Causalidade</h3>
                    <p className="text-muted-foreground">
                      Ligação direta entre a conduta do agente e o dano sofrido pela vítima. É 
                      necessário demonstrar que o dano decorreu da conduta antijurídica praticada 
                      pelo ofensor.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4. Culpa ou Dolo (em regra)</h3>
                    <p className="text-muted-foreground">
                      Na responsabilidade subjetiva, é necessário demonstrar culpa ou dolo do 
                      agente. Em casos de responsabilidade objetiva (relações de consumo, 
                      acidentes de trabalho), a culpa é dispensada.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Tipos de Dano Moral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Dano Moral Direto</h3>
                    <p className="text-muted-foreground">
                      Atinge diretamente a vítima em seus direitos da personalidade. Exemplos: 
                      ofensa à honra, violação de privacidade, uso indevido de imagem, 
                      discriminação, assédio moral.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Dano Moral Indireto ou Reflexo</h3>
                    <p className="text-muted-foreground">
                      Decorre de lesão a bem material que gera reflexos na esfera moral. Exemplo: 
                      furto de computador com fotos e documentos pessoais insubstituíveis, causando 
                      grande sofrimento psíquico.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Dano Moral Coletivo</h3>
                    <p className="text-muted-foreground">
                      Lesão a direitos de uma coletividade ou grupo de pessoas. Exemplo: 
                      propaganda enganosa que atinge consumidores, poluição ambiental, 
                      discriminação de grupo social.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Dano Estético</h3>
                    <p className="text-muted-foreground">
                      Alteração permanente na aparência física da pessoa. Embora relacionado à 
                      integridade física, é considerado espécie de dano moral por afetar a 
                      autoestima e vida social da vítima.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Dano Moral por Morte de Familiar</h3>
                    <p className="text-muted-foreground">
                      Sofrimento causado pela perda de ente querido. Familiares têm direito à 
                      indenização pelo abalo emocional e pela ruptura do núcleo familiar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  Quantificação da Indenização por Dano Moral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    O valor da indenização por dano moral é arbitrado pelo juiz, considerando 
                    diversos critérios para garantir justiça e proporcionalidade:
                  </p>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Critérios de Quantificação</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li><strong>Gravidade do dano:</strong> Intensidade do sofrimento e extensão da lesão</li>
                      <li><strong>Repercussão da ofensa:</strong> Alcance público e duração dos efeitos</li>
                      <li><strong>Condição econômica das partes:</strong> Capacidade financeira do ofensor e da vítima</li>
                      <li><strong>Grau de culpa ou dolo:</strong> Intenção e circunstâncias da conduta</li>
                      <li><strong>Caráter pedagógico:</strong> Valor suficiente para desestimular novas práticas</li>
                      <li><strong>Razoabilidade e proporcionalidade:</strong> Equilíbrio entre compensação e punição</li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Importante:</strong> Não há tabela fixa para dano moral. Cada caso 
                      é analisado individualmente. O valor deve ser suficiente para compensar a 
                      vítima, punir o ofensor e prevenir novas violações, sem gerar enriquecimento 
                      indevido.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Diferença entre Dano Moral e Dano Material
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Dano Moral</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Lesão extrapatrimonial</li>
                      <li>Atinge direitos da personalidade</li>
                      <li>Causa sofrimento psíquico</li>
                      <li>Não exige prova de prejuízo econômico</li>
                      <li>Indenização compensatória/punitiva</li>
                      <li>Valor arbitrado pelo juiz</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Dano Material</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Lesão patrimonial</li>
                      <li>Atinge bens e patrimônio</li>
                      <li>Causa prejuízo econômico</li>
                      <li>Exige comprovação do prejuízo</li>
                      <li>Indenização restitutória</li>
                      <li>Valor calculado objetivamente</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg mt-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Cumulação:</strong> Dano moral e dano material são independentes e 
                    cumuláveis. A vítima pode pleitear indenização por ambos se houver lesão 
                    patrimonial e extrapatrimonial no mesmo evento danoso.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Casos Comuns de Dano Moral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Relações de consumo:</strong> Inclusão indevida em cadastros de 
                      inadimplentes, cobranças abusivas, falhas na prestação de serviços essenciais
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Relações de trabalho:</strong> Assédio moral, discriminação, 
                      condições degradantes, acidente de trabalho com sequelas
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Internet e redes sociais:</strong> Ofensas públicas, divulgação de 
                      informações privadas, fake news, cyberbullying
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Acidentes de trânsito:</strong> Lesões corporais, traumas 
                      psicológicos, morte de familiar
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Erro médico:</strong> Procedimentos inadequados causando sequelas 
                      físicas ou psicológicas permanentes
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <section className="bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa de Orientação sobre Dano Moral?
              </h2>
              <p className="text-muted-foreground mb-6">
                Consulte nossa plataforma para entender melhor seus direitos e como proceder 
                em casos de lesão aos direitos da personalidade.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate('/faq')}
              >
                Ver Perguntas Frequentes
              </Button>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default DanoMoral;