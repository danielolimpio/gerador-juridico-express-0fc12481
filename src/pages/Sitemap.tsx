import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, BookOpen, HelpCircle, Scale, ChevronRight } from "lucide-react";

const Sitemap = () => {
  const contractPages = [
    { name: "Contrato de Compra e Venda", path: "/contrato-de-compra-e-venda" },
    { name: "Contrato de Locação Comercial", path: "/contrato-de-locacao-comercial" },
    { name: "Modelos de Contrato de Aluguel", path: "/modelos-de-contrato-de-aluguel" },
    { name: "Contrato de Prestação de Serviços", path: "/contrato-de-prestacao-de-servicos" },
    { name: "Contrato de Parceria Empresarial", path: "/contrato-de-parceria-empresarial" },
    { name: "Contrato de Doação", path: "/contrato-de-doacao" },
    { name: "Contrato de Empréstimo", path: "/contrato-de-emprestimo" },
    { name: "Contrato de Comodato", path: "/contrato-de-comodato" },
    { name: "Contrato de Mandato", path: "/contrato-de-mandato" },
    { name: "Contrato de Alienação Fiduciária", path: "/contrato-de-alienacao-fiduciaria" },
    { name: "Contrato de Estágio", path: "/contrato-de-estagio" },
    { name: "Contrato de Trabalho Autônomo", path: "/contrato-de-trabalho-autonomo" },
    { name: "Contrato de Rescisão", path: "/contrato-de-rescisao-de-contrato" },
    { name: "Contrato de Locação de Veículo", path: "/contrato-de-locacao-de-veiculo" },
    { name: "Contrato de Franquia", path: "/contrato-de-franquia" }
  ];

  const blogPosts = [
    { name: "Contrato de Aluguel Residencial", path: "/blog/contrato-aluguel-residencial" },
    { name: "Contrato de Comodato", path: "/blog/contrato-comodato" },
    { name: "Contrato de Doação e Venda", path: "/blog/contrato-doacao-venda-bens-moveis" },
    { name: "Contrato de Mandato", path: "/blog/contrato-mandato" },
    { name: "Contrato de Franquia", path: "/blog/contrato-franquia" },
    { name: "Contrato de Locação de Veículo", path: "/blog/contrato-locacao-veiculo" }
  ];

  const glossaryTerms = [
    { name: "Contrato de Adesão", path: "/contrato-de-adesao" },
    { name: "Fiador - Responsabilidade Legal", path: "/fiador-responsabilidade-legal" },
    { name: "Caução - Garantia Contratual", path: "/caucao-garantia-contratual" },
    { name: "Comodato - Empréstimo Gratuito", path: "/comodato-emprestimo-gratuito" },
    { name: "Vício Redibitório", path: "/vicio-redibitorio-defeito-oculto" },
    { name: "Resilição Contratual", path: "/resilicao-contratual-mutuo-acordo" },
    { name: "Rescisão de Contrato", path: "/rescisao-de-contrato-descumprimento" },
    { name: "Onerosidade Excessiva", path: "/onerosidade-excessiva-teoria-imprevacao" },
    { name: "Cláusula Penal", path: "/clausula-penal-multa-contratual" },
    { name: "Novação", path: "/novacao-substituicao-obrigacao" },
    { name: "Alienação Fiduciária", path: "/alienacao-fiduciaria-garantia" },
    { name: "Usufruto", path: "/usufruto-direito-real" },
    { name: "Arras", path: "/arras-sinal-contratual" },
    { name: "Força Maior", path: "/forca-maior-evento-imprevisivel" },
    { name: "Caso Fortuito", path: "/caso-fortuito-evento-inevitavel" },
    { name: "Direito de Arrependimento", path: "/direito-arrependimento-prazo-legal" },
    { name: "Benfeitorias", path: "/benfeitorias-melhoramentos" },
    { name: "Evicção", path: "/eviccao-perda-bem" },
    { name: "Sub-rogação", path: "/sub-rogacao-substituicao" },
    { name: "Mora", path: "/mora-atraso-obrigacao" },
    { name: "Arbitragem", path: "/arbitragem-resolucao-conflitos" },
    { name: "Cláusula de Não Concorrência", path: "/clausula-nao-concorrencia" },
    { name: "Cláusula de Confidencialidade", path: "/clausula-confidencialidade" },
    { name: "Cessão de Crédito", path: "/cessao-credito" },
    { name: "Cessão de Direitos", path: "/cessao-direitos" },
    { name: "Condição Resolutiva", path: "/condicao-resolutiva" },
    { name: "Condição Suspensiva", path: "/condicao-suspensiva" },
    { name: "Contrato Aleatório", path: "/contrato-aleatorio" },
    { name: "Contrato Bilateral", path: "/contrato-bilateral" },
    { name: "Contrato Unilateral", path: "/contrato-unilateral" },
    { name: "Dano Moral", path: "/dano-moral" },
    { name: "Dano Material", path: "/dano-material" }
  ];

  const informationPages = [
    { name: "Início", path: "/" },
    { name: "Como Funciona", path: "/como-funciona" },
    { name: "Tipos de Contratos", path: "/tipos-de-contratos" },
    { name: "Exemplos de Contratos", path: "/exemplos-de-contratos" },
    { name: "Blog", path: "/blog" },
    { name: "Glossário Jurídico", path: "/glossario-juridico" },
    { name: "Sobre", path: "/sobre" },
    { name: "FAQ - Perguntas Frequentes", path: "/faq" },
    { name: "Contato", path: "/contato" },
    { name: "Política de Privacidade", path: "/politica-privacidade" },
    { name: "Termos de Uso", path: "/termos-de-uso" },
    { name: "Aviso Legal", path: "/aviso-legal" },
    { name: "Cookies", path: "/cookies" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Mapa do Site - Modelo de Contrato",
    "description": "Navegue por todas as páginas do Modelo de Contrato: geradores de contratos, artigos do blog, glossário jurídico e informações úteis.",
    "url": "https://modelodecontrato.org/sitemap"
  };

  return (
    <>
      <SEO
        title="Mapa do Site - Todos os Contratos e Conteúdos"
        description="Navegue por todas as páginas do Modelo de Contrato: geradores de contratos, artigos do blog, glossário jurídico e informações úteis."
        keywords="mapa do site, sitemap, índice de conteúdo, todos os contratos, glossário jurídico"
        canonical="https://modelodecontrato.org/sitemap"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mapa do Site
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Navegue por todas as páginas e conteúdos disponíveis no Modelo de Contrato
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Geradores de Contrato */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Geradores de Contrato
                </CardTitle>
                <CardDescription>
                  Crie contratos personalizados e juridicamente válidos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {contractPages.map((page) => (
                    <li key={page.path}>
                      <Link
                        to={page.path}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Blog */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Artigos do Blog
                </CardTitle>
                <CardDescription>
                  Guias completos sobre contratos e direito contratual
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {blogPosts.map((post) => (
                    <li key={post.path}>
                      <Link
                        to={post.path}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        {post.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Glossário Jurídico */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  Glossário Jurídico
                </CardTitle>
                <CardDescription>
                  Termos e conceitos do direito contratual explicados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 max-h-96 overflow-y-auto">
                  {glossaryTerms.map((term) => (
                    <li key={term.path}>
                      <Link
                        to={term.path}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        {term.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Páginas Informativas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  Páginas Informativas
                </CardTitle>
                <CardDescription>
                  Informações sobre o site e ajuda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {informationPages.map((page) => (
                    <li key={page.path}>
                      <Link
                        to={page.path}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sitemap;