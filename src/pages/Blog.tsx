import { useState } from "react";
import SEO from "@/components/SEO";
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
            {/* Main Content Area */}
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

              {/* Lista de artigos */}
              <div className="space-y-6">
                {filteredPosts.length === 0 ? (
                  <Card>
                    <CardContent className="py-16 text-center">
                      <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                      <h3 className="text-xl font-semibold mb-2">
                        Em breve, novos artigos
                      </h3>
                      <p className="text-muted-foreground">
                        Estamos preparando conteúdo exclusivo para você. Volte em breve!
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  filteredPosts.map((post) => {
                    const category = blogCategories.find(cat => cat.id === post.category);
                    const CategoryIcon = category?.icon || FileText;

                    return (
                      <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                        {post.coverImage && (
                          <div className="relative w-full h-48 overflow-hidden">
                            <img 
                              src={post.coverImage} 
                              alt={post.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary" className={category?.color}>
                              <CategoryIcon className="w-3 h-3 mr-1" />
                              {category?.name}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {post.date} · {post.readTime}
                            </span>
                          </div>
                          <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-base mt-2">
                            {post.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <a
                            href={`/blog/${post.slug}`}
                            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
                          >
                            Ler artigo completo
                            <span aria-hidden="true">→</span>
                          </a>
                        </CardContent>
                      </Card>
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
