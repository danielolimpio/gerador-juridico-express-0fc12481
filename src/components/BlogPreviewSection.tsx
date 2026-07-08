import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import LazyImage from "@/components/LazyImage";

const blogPosts = [
  {
    id: "1",
    title: "Contrato de Aluguel Residencial: tudo o que você precisa saber antes de assinar",
    excerpt: "Antes de assinar um contrato de aluguel residencial, entenda cláusulas essenciais, seus direitos como inquilino, obrigações do locador e como evitar armadilhas jurídicas.",
    category: "direitos-deveres",
    categoryLabel: "Direitos & Deveres",
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
    categoryLabel: "Para Empreendedores",
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
    categoryLabel: "Direitos & Deveres",
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
    categoryLabel: "Passo a Passo",
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
    categoryLabel: "Para Empreendedores",
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
    categoryLabel: "Para Empreendedores",
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
    categoryLabel: "Para Empreendedores",
    date: "15 de janeiro de 2026",
    readTime: "18 min",
    slug: "contrato-prestacao-servicos-autonomos",
    coverImage: "/images/blog/contrato-prestacao-servicos-cover.jpg"
  },
  {
    id: "8",
    title: "Novo MEI: Guia Completo da Aprovação no Congresso e Vigência em 2027",
    excerpt: "Novo teto de R$ 130 mil, permissão para contratar 2 funcionários e tramitação no Senado. Entenda o que muda no Novo MEI a partir de 2027.",
    category: "empreendedores",
    categoryLabel: "Para Empreendedores",
    date: "07 de julho de 2026",
    readTime: "22 min",
    slug: "novo-mei-2027-guia-completo",
    coverImage: "/images/blog/novo-mei-2027-cover.jpg"
  },
  {
    id: "9",
    title: "Escala 5x2: Guia Completo de Como Vai Funcionar Após a Aprovação",
    excerpt: "Fim da escala 6x1, jornada de 40 horas semanais e impactos no comércio, indústria, hospitais e no salário do trabalhador após a nova regra.",
    category: "direitos-deveres",
    categoryLabel: "Direitos & Deveres",
    date: "07 de julho de 2026",
    readTime: "20 min",
    slug: "escala-5x2-como-vai-funcionar",
    coverImage: "/images/blog/escala-5x2-cover.jpg"
  }
];

const BlogPreviewSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Aprenda Mais no Nosso Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guias práticos, dicas jurídicas e tudo que você precisa saber sobre contratos
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group"
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  <LazyImage
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm"
                  >
                    {post.categoryLabel}
                  </Badge>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/blog">
            <Button size="lg" className="group">
              Ver Todos os Artigos
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
