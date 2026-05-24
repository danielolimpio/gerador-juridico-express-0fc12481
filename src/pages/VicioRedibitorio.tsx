import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, AlertTriangle, Clock, ShieldCheck, Scale } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const VicioRedibitorio = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "O que é Vício Redibitório? Defeito Oculto em Compra e Venda: Como Reclamar",
    "description": "Vício redibitório é defeito oculto em bem adquirido que torna o produto impróprio ao uso. Entenda seus direitos, prazos e como reclamar.",
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
    "datePublished": "2025-10-29",
    "dateModified": "2025-10-29"
  };

  return (
    <>
      <SEO 
        title="O que é Vício Redibitório? Defeito Oculto em Compra e Vend"
        description="Vício redibitório é defeito oculto em bem adquirido que torna o produto impróprio ao uso. Entenda seus direitos, prazos para reclamar e como buscar reparação."
        keywords="vício redibitório, defeito oculto, compra e venda, código civil, CDC, direitos do consumidor, reclamação"
        canonical="https://modelodecontrato.org/vicio-redibitorio-defeito-oculto"
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
            <header className="mb-8">
              <AlertTriangle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
                O que é Vício Redibitório?
              </h1>
              <p className="text-xl text-muted-foreground text-center">
                Defeito Oculto em Compra e Venda: Como Reclamar e Seus Direitos
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    O vício redibitório é um conceito fundamental do direito civil brasileiro, previsto nos artigos 
                    441 a 446 do Código Civil. Refere-se a um defeito oculto em um bem adquirido (móvel ou imóvel) 
                    que torna o produto impróprio para o uso a que se destina ou diminui sensivelmente seu valor. 
                    Esse defeito não é aparente no momento da compra e só se revela após a aquisição.
                  </p>
                </CardContent>
              </Card>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  Exemplos Comuns
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Um carro com problema estrutural no motor não declarado</li>
                      <li>Um apartamento com infiltração crônica escondida por reforma</li>
                      <li>Um eletrodoméstico que para de funcionar dias após a compra</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      O vício redibitório não se confunde com o desgaste normal ou com vícios aparentes — estes 
                      últimos não geram direito à reparação. Para configurar o vício redibitório, o defeito deve 
                      ser anterior à venda, não visível e relevante.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  Direitos do Comprador
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      O comprador tem o direito de:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      <li>Pedir a rescisão do contrato (devolução do bem e restituição do valor pago)</li>
                      <li>Ou exigir abatimento proporcional no preço</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      Importante: o vendedor não pode alegar desconhecimento do defeito — responde objetivamente, 
                      mesmo que tenha agido de boa-fé.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  Prazos para Reclamar
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      <li><strong>30 dias</strong> para bens móveis (ex: carros, móveis, eletrônicos)</li>
                      <li><strong>1 ano</strong> para bens imóveis (casas, terrenos, apartamentos)</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      Importante: o prazo começa a contar a partir do momento em que o vício é descoberto, não da 
                      data da compra. Se você comprou um bem com vício redibitório, notifique o vendedor por 
                      escrito, reúna provas (laudos técnicos, fotos, testemunhas) e, se necessário, busque a 
                      justiça. Em relações de consumo, o CDC também oferece proteção adicional.
                    </p>
                  </CardContent>
                </Card>
              </section>
            </div>

            <div className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Precisa de um Contrato de Compra e Venda?
              </h2>
              <p className="text-muted-foreground mb-6">
                Proteja-se com contratos claros e juridicamente válidos.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate('/tipos-de-contratos')}
              >
                Gerar Contrato Agora
              </Button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default VicioRedibitorio;
