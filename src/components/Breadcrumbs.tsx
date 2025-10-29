import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  const getBreadcrumbLabel = (path: string): string => {
    const breadcrumbMap: Record<string, string> = {
      'gerador': 'Gerador de Contratos',
      'tipos-de-contratos': 'Tipos de Contratos',
      'exemplos-de-contratos': 'Exemplos de Contratos',
      'como-funciona': 'Como Funciona',
      'faq': 'Perguntas Frequentes',
      'contato': 'Contato',
      'politica-privacidade': 'Política de Privacidade',
      'termos-de-uso': 'Termos de Uso',
      'aviso-legal': 'Aviso Legal',
      'cookies': 'Cookies'
    };
    return breadcrumbMap[path] || path;
  };

  if (pathnames.length === 0) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Início', path: '/' },
    ...pathnames.map((path, index) => ({
      label: getBreadcrumbLabel(path),
      path: `/${pathnames.slice(0, index + 1).join('/')}`
    }))
  ];

  // Schema markup para breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://modelodecontrato.org${item.path}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
        {breadcrumbs.map((item, index) => (
          <div key={item.path} className="flex items-center">
            {index === 0 && <Home className="w-4 h-4 mr-1" />}
            {index < breadcrumbs.length - 1 ? (
              <Link 
                to={item.path} 
                className="hover:text-primary transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-foreground font-medium" itemProp="name">
                {item.label}
              </span>
            )}
            {index < breadcrumbs.length - 1 && (
              <ChevronRight className="w-4 h-4 mx-2" />
            )}
          </div>
        ))}
      </nav>
    </>
  );
};

export default Breadcrumbs;