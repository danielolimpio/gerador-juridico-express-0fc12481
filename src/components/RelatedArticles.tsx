import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import { Card, CardContent } from "./ui/card";
import { ArrowRight } from "lucide-react";

export interface RelatedArticle {
  title: string;
  description: string;
  slug: string;
  coverImage: string;
  category: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="w-full bg-muted/30 border-t border-border mt-16 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h3 className="text-2xl font-bold text-foreground mb-8">
          Leia Também
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.slice(0, 3).map((article, index) => (
            <Link
              key={index}
              to={`/blog/${article.slug}`}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <LazyImage
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={300}
                    height={169}
                  />
                </div>
                <CardContent className="p-4">
                  <div className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                    {article.category}
                  </div>
                  <h4 className="font-bold text-sm text-foreground mb-1.5 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                    {article.description}
                  </p>
                  <div className="flex items-center text-primary text-xs font-medium">
                    Ler artigo
                    <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
