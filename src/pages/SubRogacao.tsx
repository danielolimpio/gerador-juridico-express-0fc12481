import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, Users, ArrowRightLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const SubRogacao = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sub-rogação - Substituição na Titularidade de Direito",
    "description": "Entenda o que é sub-rogação pessoal e real, tipos de sub-rogação e efeitos jurídicos da substituição de credores",
    "keywords": "sub-rogação, sub-rogação pessoal, sub-rogação real, substituição de credor, cessão de crédito"
  };

  return (
    <>
      <SEO 
        title="Sub-rogação - Substituição na Titularidade de Direito"
        description="Entenda o que é sub-rogação pessoal e real, tipos de sub-rogação legal e convencional, e os efeitos jurídicos da substituição de uma pessoa por outra na titularidade de um direito."
        keywords="sub-rogação, sub-rogação pessoal, sub-rogação real, substituição de credor, cessão de crédito, direito das obrigações, código civil"
        canonical="https://modelodecontrato.org/sub-rogacao-substituicao"
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

          <header className="text-center mb-12">
            <RefreshCw className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Sub-rogação
            </h1>
            <p className="text-xl text-muted-foreground">
              Substituição de uma pessoa por outra na titularidade de um direito
            </p>
          </header>

          <article className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">O que é Sub-rogação?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sub-rogação é o instituto jurídico pelo qual uma pessoa substitui outra na titularidade de um direito ou 
                uma coisa substitui outra. Ocorre quando há transferência de direitos e obrigações, mantendo as mesmas 
                garantias e acessórios da obrigação original.
              </p>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    <strong>Exemplo prático:</strong> João deve R$ 10.000 a Maria com garantia hipotecária. Pedro paga 
                    a dívida de João a Maria. Pedro fica sub-rogado nos direitos de Maria, podendo cobrar de João os 
                    R$ 10.000 com a mesma garantia hipotecária.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Tipos de Sub-rogação</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <Users className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Sub-rogação Pessoal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Substituição de uma pessoa por outra na posição de credor. Quem paga dívida alheia passa a ter 
                      os mesmos direitos do credor original.
                    </p>
                    <p className="text-sm font-semibold text-foreground mb-2">Características:</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Mantém garantias e acessórios</li>
                      <li>Transfere preferências e privilégios</li>
                      <li>Pode ser legal ou convencional</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <ArrowRightLeft className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Sub-rogação Real</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Substituição de uma coisa por outra, que passa a ter o mesmo regime jurídico da coisa substituída.
                    </p>
                    <p className="text-sm font-semibold text-foreground mb-2">Exemplos:</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Indenização de seguro no lugar do bem</li>
                      <li>Novo bem no lugar do vendido</li>
                      <li>Dinheiro no lugar de bem penhorado</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Sub-rogação Legal</h2>
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Hipóteses Previstas no Código Civil</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    A sub-rogação legal ocorre automaticamente por determinação da lei, independente da vontade das partes:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">I.</span>
                      <span>Credor que paga dívida a outro credor preferencial</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">II.</span>
                      <span>Adquirente de imóvel hipotecado que paga ao credor hipotecário</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">III.</span>
                      <span>Terceiro interessado que paga dívida pela qual era ou podia ser obrigado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">IV.</span>
                      <span>Herdeiro que paga dívida da herança com recursos próprios</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Sub-rogação Convencional</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Por Acordo Entre as Partes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Por Iniciativa do Credor:</p>
                    <p className="text-muted-foreground text-sm">
                      O credor recebe pagamento de terceiro e expressamente transfere-lhe todos os seus direitos sobre 
                      o crédito. Deve ser feita de forma expressa e simultânea ao pagamento.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Por Iniciativa do Devedor:</p>
                    <p className="text-muted-foreground text-sm">
                      O devedor contrai novo empréstimo para pagar dívida anterior e subroga o novo credor nos direitos 
                      do antigo. Comum em refinanciamentos bancários.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Efeitos da Sub-rogação</h2>
              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <p className="text-muted-foreground">
                      <strong>Transferência total:</strong> O sub-rogado adquire todos os direitos, ações, privilégios 
                      e garantias do credor primitivo
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <p className="text-muted-foreground">
                      <strong>Manutenção de garantias:</strong> Hipotecas, penhores e fianças permanecem vinculados ao crédito
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <p className="text-muted-foreground">
                      <strong>Limitação ao valor pago:</strong> O sub-rogado só pode cobrar até o valor que efetivamente pagou
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <p className="text-muted-foreground">
                      <strong>Defesas do devedor:</strong> O devedor pode opor ao sub-rogado as mesmas exceções que tinha 
                      contra o credor original
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Diferença entre Sub-rogação e Cessão de Crédito</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Sub-rogação</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ocorre com pagamento da dívida</li>
                      <li>• Pode ser legal ou convencional</li>
                      <li>• Limitada ao valor pago</li>
                      <li>• Transfere garantias automaticamente</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Cessão de Crédito</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Transferência sem pagamento necessário</li>
                      <li>• Sempre convencional (contratual)</li>
                      <li>• Pode ser por valor diferente do crédito</li>
                      <li>• Requer expressa transferência de garantias</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Legislação Aplicável</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Arts. 346 a 351 do Código Civil:</strong> Sub-rogação</li>
                    <li><strong>Art. 346 do CC:</strong> Sub-rogação legal</li>
                    <li><strong>Art. 347 do CC:</strong> Sub-rogação convencional</li>
                    <li><strong>Art. 349 do CC:</strong> Efeitos da sub-rogação</li>
                    <li><strong>Art. 350 do CC:</strong> Sub-rogação parcial</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </article>

          <section className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Formalize Operações de Sub-rogação
            </h2>
            <p className="text-muted-foreground mb-6">
              Crie contratos com cláusulas claras sobre sub-rogação de direitos e obrigações.
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

export default SubRogacao;
