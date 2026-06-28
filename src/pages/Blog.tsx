import { useState } from "react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, Briefcase, Scale, BookOpen, AlertTriangle } from "lucide-react";

// Definição de categorias
export const blogCategories = [
  {
    id: "tipos-de-contrato",
    name: "Tipos de Contrato",
    description: "Entenda para que serve cada modelo e quando usá-lo.",
    icon: FileText,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    id: "direitos-deveres",
    name: "Direitos & Deveres",
    description: "Saiba seus direitos e obrigações em contratos do dia a dia.",
    icon: Scale,
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    id: "empreendedores",
    name: "Para Empreendedores",
    description: "Dicas jurídicas práticas para MEIs, autônomos e pequenos negócios.",
    icon: Briefcase,
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    id: "passo-a-passo",
    name: "Passo a Passo",
    description: "Guias simples para criar, editar ou encerrer contratos sem erro.",
    icon: BookOpen,
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    id: "erros-riscos",
    name: "Erros & Riscos",
    description: "Evite armadilhas jurídicas comuns ao fazer ou assinar contratos.",
    icon: AlertTriangle,
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
];

// Interface para artigos do blog
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  coverImage?: string;
}

// Array de artigos
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Contrato de Aluguel Residencial: tudo o que você precisa saber antes de assinar",
    excerpt: "Antes de assinar um contrato de aluguel residencial, entenda cláusulas essenciais, seus direitos como inquilino, obrigações do locador e como evitar armadilhas jurídicas.",
    category: "direitos-deveres",
    date: "21 de novembro de 2025",
    readTime: "12 min",
    slug: "contrato-aluguel-residencial",
    coverImage: "/images/blog/contrato-aluguel-residencial-cover.jpg"
  },
  {
    id: "2",
    title: "Contrato de Comodato: Quando e Como Usar para Empréstimo Gratuito de Bens",
    excerpt: "Saiba quando usar o contrato de comodato para emprestar bens como carros ou ferramentas sem cobrar. Proteja-se legalmente com modelo gratuito.",
    category: "empreendedores",
    date: "21 de novembro de 2025",
    readTime: "15 min",
    slug: "contrato-comodato",
    coverImage: "/images/blog/contrato-comodato-cover.jpg"
  },
  {
    id: "3",
    title: "Entenda a Diferença entre Contrato de Doação e Venda de Bens Móveis",
    excerpt: "Confira as diferenças legais entre doação e venda de bens móveis. Evite problemas futuros com modelos juridicamente válidos e gratuitos.",
    category: "direitos-deveres",
    date: "21 de novembro de 2025",
    readTime: "18 min",
    slug: "contrato-doacao-venda-bens-moveis",
    coverImage: "/images/blog/contrato-doacao-venda-cover.jpg"
  },
  {
    id: "4",
    title: "Contrato de Mandato: Autorização Legal para Agir em Nome de Terceiros",
    excerpt: "Aprenda como funciona o contrato de mandato e quando usá-lo para representar alguém. Modelo gratuito, rápido e válido em todo o Brasil.",
    category: "passo-a-passo",
    date: "21 de novembro de 2025",
    readTime: "20 min",
    slug: "contrato-mandato",
    coverImage: "/images/blog/contrato-mandato-cover.jpg"
  },
  {
    id: "5",
    title: "Contrato de Franquia: Guia Completo para Empreendedores que Querem Expandir",
    excerpt: "Descubra os pontos essenciais de um contrato de franquia. Proteja seu negócio com modelo juridicamente válido e pronto para download.",
    category: "empreendedores",
    date: "21 de novembro de 2025",
    readTime: "25 min",
    slug: "contrato-franquia",
    coverImage: "/images/blog/contrato-franquia-cover.jpg"
  },
  {
    id: "6",
    title: "Contrato de Locação de Veículo: Regras para Alugar Carros, Motos e Equipamentos",
    excerpt: "Proteja-se ao alugar veículos. Evite cobranças abusivas com modelo gratuito de contrato válido e atualizado para 2025.",
    category: "empreendedores",
    date: "21 de novembro de 2025",
    readTime: "25 min",
    slug: "contrato-locacao-veiculo",
    coverImage: "/images/blog/contrato-locacao-veiculo-cover.jpg"
  },
  {
    id: "7",
    title: "Contrato de Prestação de Serviços para Autônomos e MEIs: Guia Completo 2026",
    excerpt: "Como fazer um contrato de prestação de serviços válido para autônomos, freelancers e MEIs em 2026. Cláusulas essenciais, modelo grátis, rescisão e proteção jurídica.",
    category: "empreendedores",
    date: "15 de janeiro de 2026",
    readTime: "18 min",
    slug: "contrato-prestacao-servicos-autonomos",
    coverImage: "/images/blog/contrato-prestacao-servicos-cover.jpg"
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtrar posts por categoria
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  // Encontrar categoria selecionada
  const activeCategoryData = blogCategories.find(cat => cat.id === selectedCategory);

  return (
    <>
      <SEO
        title="Blog - Guias e Dicas sobre Contratos"
        description="Aprenda tudo sobre contratos: tipos, direitos, deveres, dicas para empreendedores e como evitar erros comuns. Conteúdo prático e atualizado."
        keywords="blog contratos, guia jurídico, direitos contratuais, dicas empreendedores, evitar erros contratos"
        canonical="https://modelodecontrato.org/blog"
      />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background border-b">
          <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
            <Breadcrumbs />
            
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Blog Jurídico
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Guias práticos, dicas essenciais e orientações para criar, entender e gerenciar seus contratos com segurança e eficiência.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content Area - 2 Column Grid */}
            <div className="lg:col-span-8">
              {/* Categoria ativa */}
              {activeCategoryData && (
                <div className="mb-8">
                  <Card className={activeCategoryData.color}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-background/50">
                          <activeCategoryData.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">
                            {activeCategoryData.name}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {activeCategoryData.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              )}

              {/* Lista de artigos em 2 colunas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.length === 0 ? (
                  <div className="col-span-2">
                    <Card>
                      <CardContent className="py-16 text-center">
                        <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                        <h3 className="text-xl font-semibold mb-2">
                          Em breve, novos artigos
                        </h3>
                        <p className="text-muted-foreground">
                          Estamos preparando conteúdo exclusivo para você. Volte em breve!
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  filteredPosts.map((post) => {
                    const category = blogCategories.find(cat => cat.id === post.category);
                    const CategoryIcon = category?.icon || FileText;

                    return (
                      <a 
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="group block"
                      >
                        <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden hover:border-primary/50">
                          {post.coverImage && (
                            <div className="relative w-full h-48 overflow-hidden">
                              <img 
                                src={post.coverImage} 
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <CardHeader>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="secondary" className={category?.color}>
                                <CategoryIcon className="w-3 h-3 mr-1" />
                                {category?.name}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </CardTitle>
                            <CardDescription className="text-sm mt-2 line-clamp-3">
                              {post.excerpt}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>{post.readTime}</span>
                              <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    );
                  })
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Categorias */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Categorias</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === null
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/50 hover:bg-secondary text-foreground"
                      }`}
                    >
                      <div className="font-medium">Todas as categorias</div>
                      <div className="text-sm opacity-80">
                        {blogPosts.length} {blogPosts.length === 1 ? "artigo" : "artigos"}
                      </div>
                    </button>

                    <Separator />

                    {blogCategories.map((category) => {
                      const CategoryIcon = category.icon;
                      const categoryCount = blogPosts.filter(
                        post => post.category === category.id
                      ).length;

                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                            selectedCategory === category.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary/50 hover:bg-secondary text-foreground"
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <CategoryIcon className="w-5 h-5" />
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <div className="text-sm opacity-80 line-clamp-2">
                            {category.description}
                          </div>
                          <div className="text-xs opacity-70 mt-2">
                            {categoryCount} {categoryCount === 1 ? "artigo" : "artigos"}
                          </div>
                        </button>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Precisa de um contrato?</CardTitle>
                    <CardDescription>
                      Crie contratos profissionais em minutos com nossa ferramenta gratuita.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="/tipos-de-contratos"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Gerar Contrato Grátis
                    </a>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
