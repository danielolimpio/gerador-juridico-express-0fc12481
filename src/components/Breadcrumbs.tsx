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
      // Páginas principais
      'gerador': 'Gerador de Contratos',
      'tipos-de-contratos': 'Tipos de Contratos',
      'exemplos-de-contratos': 'Exemplos de Contratos',
      'como-funciona': 'Como Funciona',
      'faq': 'Perguntas Frequentes',
      'contato': 'Contato',
      'sobre': 'Sobre',
      'blog': 'Blog',
      'glossario-juridico': 'Glossário Jurídico',
      'sitemap': 'Mapa do Site',
      
      // Páginas legais
      'politica-privacidade': 'Política de Privacidade',
      'termos-de-uso': 'Termos de Uso',
      'aviso-legal': 'Aviso Legal',
      'cookies': 'Cookies',
      
      // Tipos de contratos
      'contrato-de-compra-e-venda': 'Contrato de Compra e Venda',
      'contrato-de-locacao-comercial': 'Contrato de Locação Comercial',
      'modelos-de-contrato-de-aluguel': 'Modelos de Contrato de Aluguel',
      'contrato-de-prestacao-de-servicos': 'Contrato de Prestação de Serviços',
      'contrato-de-parceria-empresarial': 'Contrato de Parceria Empresarial',
      'contrato-de-doacao': 'Contrato de Doação',
      'contrato-de-emprestimo': 'Contrato de Empréstimo',
      'contrato-de-comodato': 'Contrato de Comodato',
      'contrato-de-mandato': 'Contrato de Mandato',
      'contrato-de-alienacao-fiduciaria': 'Contrato de Alienação Fiduciária',
      'contrato-de-estagio': 'Contrato de Estágio',
      'contrato-de-trabalho-autonomo': 'Contrato de Trabalho Autônomo',
      'contrato-de-rescisao-de-contrato': 'Contrato de Rescisão',
      'contrato-de-locacao-de-veiculo': 'Contrato de Locação de Veículo',
      'contrato-de-franquia': 'Contrato de Franquia',
      
      // Glossário jurídico - Termos
      'contrato-de-adesao': 'Contrato de Adesão',
      'fiador-responsabilidade-legal': 'Fiador',
      'caucao-garantia-contratual': 'Caução',
      'comodato-emprestimo-gratuito': 'Comodato',
      'vicio-redibitorio-defeito-oculto': 'Vício Redibitório',
      'resilicao-contratual-mutuo-acordo': 'Resilição',
      'rescisao-de-contrato-descumprimento': 'Rescisão',
      'clausula-penal-multa-contratual': 'Cláusula Penal',
      'onerosidade-excessiva-teoria-imprevacao': 'Onerosidade Excessiva',
      'novacao-substituicao-obrigacao': 'Novação',
      'alienacao-fiduciaria-garantia': 'Alienação Fiduciária',
      'usufruto-direito-real': 'Usufruto',
      'arras-sinal-contratual': 'Arras',
      'forca-maior-evento-imprevisivel': 'Força Maior',
      'caso-fortuito-evento-inevitavel': 'Caso Fortuito',
      'direito-arrependimento-prazo-legal': 'Direito de Arrependimento',
      'benfeitorias-melhoramentos': 'Benfeitorias',
      'eviccao-perda-bem': 'Evicção',
      'sub-rogacao-substituicao': 'Sub-rogação',
      'mora-atraso-obrigacao': 'Mora',
      'arbitragem-resolucao-conflitos': 'Arbitragem',
      'clausula-nao-concorrencia': 'Cláusula de Não Concorrência',
      'clausula-confidencialidade': 'Cláusula de Confidencialidade',
      'cessao-credito': 'Cessão de Crédito',
      'cessao-direitos': 'Cessão de Direitos',
      'condicao-resolutiva': 'Condição Resolutiva',
      'condicao-suspensiva': 'Condição Suspensiva',
      'contrato-aleatorio': 'Contrato Aleatório',
      'contrato-bilateral': 'Contrato Bilateral',
      'contrato-unilateral': 'Contrato Unilateral',
      'dano-moral': 'Dano Moral',
      'dano-material': 'Dano Material',
      
      // Blog
      'contrato-aluguel-residencial': 'Contrato de Aluguel Residencial',
      'contrato-comodato': 'Contrato de Comodato',
      'contrato-doacao-venda-bens-moveis': 'Contrato de Doação e Venda',
      'contrato-mandato': 'Contrato de Mandato',
      'contrato-franquia': 'Contrato de Franquia',
      'contrato-locacao-veiculo': 'Contrato de Locação de Veículo'
    };
    return breadcrumbMap[path] || path.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
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