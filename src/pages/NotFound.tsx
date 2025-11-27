import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { title: "Gerador de Contratos", path: "/gerador", icon: FileText },
    { title: "Tipos de Contratos", path: "/tipos-de-contratos", icon: Search },
    { title: "Como Funciona", path: "/como-funciona", icon: AlertCircle },
  ];

  return (
    <>
      <SEO 
        title="Página Não Encontrada - 404"
        description="A página que você está procurando não existe. Retorne à página inicial ou explore nossos modelos de contratos."
        canonical={`https://modelodecontrato.org${location.pathname}`}
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* 404 Icon */}
          <div className="relative">
            <h1 className="text-[120px] md:text-[180px] font-bold text-primary/10 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertCircle className="w-20 h-20 md:w-28 md:h-28 text-primary" />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Página Não Encontrada
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Desculpe, a página que você está procurando não existe ou foi movida.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/gerador">
                <FileText className="w-4 h-4 mr-2" />
                Gerar Contrato
              </Link>
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="pt-8 border-t border-border">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Páginas Populares
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {popularPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-primary/50 transition-all duration-200"
                >
                  <page.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground">{page.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
