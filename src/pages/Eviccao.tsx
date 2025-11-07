import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, AlertTriangle, Scale } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const Eviccao = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Evicção - Perda do Bem Adquirido",
    "description": "Entenda o que é evicção, garantia contra evicção e direitos do evicto na perda do bem por decisão judicial",
    "keywords": "evicção, garantia contra evicção, perda do bem, decisão judicial, direito do evicto"
  };

  return (
    <>
      <SEO 
        title="Evicção - Perda do Bem Adquirido | Garantia e Direitos"
        description="Entenda o que é evicção, a garantia contra evicção e os direitos do evicto quando há perda do bem adquirido por decisão judicial que reconhece direito anterior de terceiro."
        keywords="evicção, garantia contra evicção, perda do bem, decisão judicial, direito do evicto, alienante, evicto, código civil"
        canonical="https://modelodecontrato.org/eviccao-perda-bem"
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
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Evicção
            </h1>
            <p className="text-xl text-muted-foreground">
              Perda da coisa adquirida por decisão judicial
            </p>
          </header>

          <article className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">O que é Evicção?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Evicção é a perda total ou parcial da posse ou propriedade de uma coisa em virtude de sentença judicial 
                que reconhece a terceiro direito anterior sobre ela. Ocorre quando o adquirente (evicto) perde o bem 
                adquirido porque outra pessoa tinha direito anterior sobre ele.
              </p>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    <strong>Exemplo prático:</strong> João compra um carro de Maria, mas posteriormente descobre que o 
                    veículo havia sido roubado e o verdadeiro proprietário entra com ação judicial para recuperá-lo. 
                    João perde o carro (sofre evicção) e tem direito a ser indenizado por Maria.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Partes na Evicção</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Evicto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Adquirente que perde o bem por decisão judicial. Tem direito à garantia contra evicção.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Alienante</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Vendedor ou transmitente do bem. Responsável pela garantia contra evicção e indenização.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Evictor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Terceiro que reivindica e obtém judicialmente o reconhecimento de seu direito anterior sobre o bem.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Garantia Contra Evicção</h2>
              <Card className="mb-4">
                <CardHeader>
                  <AlertTriangle className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Obrigação Legal do Alienante</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    A garantia contra evicção é inerente aos contratos onerosos (compra e venda, permuta, doação onerosa). 
                    Mesmo que não esteja expressa no contrato, o alienante responde pela evicção, salvo cláusula que a exclua.
                  </p>
                  <div>
                    <p className="font-semibold text-foreground mb-2">O alienante deve indenizar o evicto:</p>
                    <ul className="text-muted-foreground list-disc list-inside ml-4 space-y-1">
                      <li>Valor integral da coisa evicta</li>
                      <li>Frutos que tiver sido obrigado a restituir</li>
                      <li>Despesas com o contrato e custas judiciais</li>
                      <li>Custos com melhorias realizadas no bem</li>
                      <li>Perdas e danos</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exclusão da Garantia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    As partes podem acordar a exclusão da garantia contra evicção no contrato. Neste caso, o adquirente 
                    assume o risco de perder o bem sem direito à indenização.
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Importante: Mesmo com cláusula de exclusão, o alienante responde se sabia do risco de evicção e 
                    não informou o adquirente (má-fé).
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Denunciação da Lide</h2>
              <Card>
                <CardHeader>
                  <Scale className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Procedimento Processual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Quando o adquirente é demandado judicialmente por terceiro que reivindica o bem, deve chamar o 
                    alienante ao processo (denunciação da lide). Isso garante seu direito de regresso contra o alienante.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Atenção:</strong> Se o adquirente não fizer a denunciação da lide, pode perder o direito 
                    de regressar contra o alienante pela garantia da evicção.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Legislação Aplicável</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Arts. 447 a 457 do Código Civil:</strong> Evicção</li>
                    <li><strong>Art. 447 do CC:</strong> Garantia contra evicção em contratos onerosos</li>
                    <li><strong>Art. 448 do CC:</strong> Exclusão da garantia</li>
                    <li><strong>Art. 450 do CC:</strong> Indenização pela evicção</li>
                    <li><strong>Art. 125 do CPC:</strong> Denunciação da lide</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </article>

          <section className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Proteja-se contra Evicção
            </h2>
            <p className="text-muted-foreground mb-6">
              Formalize contratos com cláusulas claras sobre garantia contra evicção.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate('/gerador')}
            >
              Criar Contrato Seguro
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Eviccao;
