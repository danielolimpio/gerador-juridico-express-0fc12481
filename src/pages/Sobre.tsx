import SEO from "@/components/SEO";
import AuthorProfile from "@/components/AuthorProfile";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Globe2, Sparkles } from "lucide-react";

const Sobre = () => {
  return (
    <>
      <SEO
        title="Sobre - Daniel Olimpio | Desenvolvedor Web"
        description="Conheça Daniel Olimpio, desenvolvedor web com mais de 20 anos de experiência em desenvolvimento full-stack, UI/UX design e soluções digitais de alto impacto."
        keywords="desenvolvedor web, full stack, UI/UX design, desenvolvimento digital, Daniel Olimpio"
        canonical="https://modelodecontrato.org/sobre"
      />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background border-b">
          <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Sobre o Projeto
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Criando soluções digitais que transformam ideias em realidade, com tecnologia de ponta e design centrado no usuário.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
          <div className="space-y-12">
            {/* Author Profile */}
            <div>
              <AuthorProfile variant="full" showSocialLinks={true} />
            </div>

            {/* Mission & Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Tecnologia de Ponta</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Desenvolvemos com as tecnologias mais modernas do mercado, garantindo performance, escalabilidade e segurança.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Design Centrado no Usuário</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Cada interface é pensada para proporcionar a melhor experiência possível, unindo estética e funcionalidade.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Globe2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Alcance Global</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Soluções digitais que funcionam em qualquer lugar do mundo, com suporte multilíngue e otimização internacional.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Qualidade Jurídica</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Conteúdo revisado por equipe jurídica especializada, garantindo precisão e conformidade legal em todos os artigos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact CTA */}
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
              <CardContent className="py-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Vamos Trabalhar Juntos?</h2>
                <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                  Transforme sua ideia em realidade com soluções digitais profissionais e de alto impacto.
                </p>
                <a
                  href="/contato"
                  className="inline-flex items-center justify-center px-8 py-3 bg-background text-foreground font-semibold rounded-lg hover:bg-background/90 transition-colors"
                >
                  Entre em Contato
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default Sobre;
