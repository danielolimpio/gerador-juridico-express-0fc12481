import React, { useState } from 'react';
import { useParams, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { contractTypes } from '@/lib/contractTypes';
import ContractForm from '@/components/ContractForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';

import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles, { RelatedArticle } from '@/components/RelatedArticles';

// Mapeamento de URLs SEO-friendly para IDs de contratos
const urlToContractMap: { [key: string]: string } = {
  '/contrato-de-compra-e-venda': 'compra-venda',
  '/contrato-de-locacao-comercial': 'locacao-comercial',
  '/modelos-de-contrato-de-aluguel': 'locacao-residencial',
  '/contrato-de-prestacao-de-servicos': 'prestacao-servicos',
  '/contrato-de-parceria-empresarial': 'parceria-comercial',
  '/contrato-de-doacao': 'doacao',
  '/contrato-de-emprestimo': 'emprestimo',
  '/contrato-de-comodato': 'comodato',
  '/contrato-de-mandato': 'mandato',
  '/contrato-de-alienacao-fiduciaria': 'alienacao-fiduciaria',
  '/contrato-de-estagio': 'estagio',
  '/contrato-de-trabalho-autonomo': 'trabalho-autonomo',
  '/contrato-de-rescisao-de-contrato': 'rescisao',
  '/contrato-de-locacao-de-veiculo': 'locacao-veiculo',
  '/contrato-de-franquia': 'franquia',
};

const ContractGenerator: React.FC = () => {
  const { contractId } = useParams<{ contractId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Detecta o tipo do contrato por URL SEO-friendly, query parameters ou URL
  const contractTypeFromUrl = urlToContractMap[location.pathname];
  const contractTypeId = contractTypeFromUrl || contractId || searchParams.get('type');
  const contractType = contractTypes.find(ct => ct.id === contractTypeId);

  const relatedArticles: RelatedArticle[] = [
    {
      title: "Contrato de Franquia: Guia Completo para Empreendedores",
      description: "Aprenda tudo sobre contratos de franquia e como expandir seu negócio com segurança.",
      slug: "contrato-franquia",
      coverImage: "/images/blog/contrato-franquia-cover.jpg",
      category: "Para Empreendedores"
    },
    {
      title: "Contrato de Mandato: Autorização Legal para Agir em Nome de Terceiros",
      description: "Saiba quando e como usar um contrato de mandato para representação legal.",
      slug: "contrato-mandato",
      coverImage: "/images/blog/contrato-mandato-cover.jpg",
      category: "Passo a Passo"
    },
    {
      title: "Contrato de Locação de Veículo: Regras para Alugar Carros",
      description: "Proteja seu patrimônio com um contrato de locação de veículo seguro e válido.",
      slug: "contrato-locacao-veiculo",
      coverImage: "/images/blog/contrato-locacao-veiculo-cover.jpg",
      category: "Passo a Passo"
    }
  ];
  
  if (!contractType) {
    return (
      <div className="container mx-auto max-w-2xl p-4 text-center">
        <Card>
          <CardContent className="p-8">
            <FileText className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold mb-2">Contrato não encontrado</h1>
            <p className="text-muted-foreground mb-6">
              O tipo de contrato solicitado não foi encontrado.
            </p>
            <Button onClick={() => navigate('/')} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Início
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const contractSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `Como Criar ${contractType.title}`,
    "description": `Guia passo a passo para criar ${contractType.title.toLowerCase()} online gratuitamente`,
    "totalTime": "PT2M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Dados pessoais das partes"
      },
      {
        "@type": "HowToSupply", 
        "name": "Informações específicas do contrato"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Gerador de Contratos Online Grátis"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Preencher dados das partes",
        "text": "Insira os dados pessoais de todas as partes envolvidas no contrato"
      },
      {
        "@type": "HowToStep",
        "position": 2, 
        "name": "Definir detalhes específicos",
        "text": "Complete as informações específicas do tipo de contrato escolhido"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Gerar e baixar",
        "text": "Clique em gerar contrato e baixe em PDF ou Word gratuitamente"
      }
    ]
  };

  // SEO long-tail expandido por tipo de contrato (centenas de palavras-chave)
  const seoByContract: Record<string, { title: string; description: string; keywords: string }> = {
    'locacao-residencial': {
      title: 'Modelo de Contrato de Aluguel Residencial Grátis PDF e Word 2026',
      description: 'Modelo de contrato de aluguel residencial simples, grátis em PDF e Word. Contrato de locação de casa, apartamento, kitnet e imóvel residencial conforme Lei do Inquilinato. Pronto para imprimir e assinar.',
      keywords: 'modelo de contrato de aluguel, contrato de aluguel, contrato de aluguel simples, contrato de aluguel pdf, contrato de aluguel word, contrato de aluguel residencial, contrato de aluguel para imprimir, contrato de aluguel grátis, contrato de aluguel de casa, contrato de aluguel de apartamento, contrato de aluguel de kitnet, contrato de aluguel de quarto, contrato de aluguel com fiador, contrato de aluguel sem fiador, contrato de aluguel com caução, contrato de aluguel por temporada, contrato de aluguel anual, contrato de aluguel 30 meses, contrato de aluguel 12 meses, contrato de locação residencial, modelo simples contrato aluguel, como fazer contrato de aluguel, criar contrato de aluguel, gerador de contrato de aluguel, gerador de contrato de aluguel grátis, fazer contrato de aluguel online, contrato aluguel pessoa física, contrato locação residencial pdf, lei do inquilinato 8245, contrato de aluguel 2026, contrato aluguel airbnb, contrato aluguel quarto compartilhado'
    },
    'locacao-comercial': {
      title: 'Modelo de Contrato de Locação Comercial Grátis PDF e Word 2026',
      description: 'Contrato de locação comercial grátis em PDF e Word conforme Lei do Inquilinato 8.245/91. Modelo para ponto comercial, sala, loja, galpão e escritório.',
      keywords: 'contrato de locação comercial, contrato locação comercial pdf, contrato locação comercial word, modelo contrato locação comercial, contrato aluguel comercial, contrato aluguel ponto comercial, contrato aluguel sala comercial, contrato aluguel loja, contrato aluguel galpão, contrato aluguel escritório, contrato aluguel quiosque, contrato aluguel salão, contrato locação não residencial, contrato locação imóvel comercial, contrato locação built to suit, contrato locação shopping, contrato locação coworking, modelo aluguel comercial simples, contrato aluguel comercial com fiador, contrato aluguel comercial sem fiador, contrato aluguel comercial caução, modelo aluguel ponto comercial, gerador contrato aluguel comercial, criar contrato locação comercial online, contrato locação 8245, lei do inquilinato locação comercial, renovatória contrato comercial, contrato aluguel comercial 2026'
    },
    'prestacao-servicos': {
      title: 'Modelo de Contrato de Prestação de Serviços Grátis PDF/Word 2026',
      description: 'Contrato de prestação de serviços grátis em PDF e Word para MEI, autônomos, empresas e profissionais liberais. Modelo simples, completo e juridicamente válido.',
      keywords: 'contrato de prestação de serviços, modelo de contrato de prestação de serviços, contrato prestação de serviço pdf, contrato prestação de serviço word, contrato prestação de serviço simples, contrato prestação de serviço mei, contrato prestador de serviço autônomo, contrato prestação serviço pessoa física, contrato prestação serviço pessoa jurídica, contrato prestação serviço pj, modelo prestação serviço advocacia, contrato prestação serviço contabilidade, contrato prestação serviço marketing, contrato prestação serviço design, contrato prestação serviço programador, contrato prestação serviço consultoria, contrato prestação serviço freelancer, contrato prestação serviço limpeza, contrato prestação serviço pedreiro, contrato prestação serviço médico, contrato prestação serviço fotógrafo, contrato prestação serviço evento, gerador contrato prestação de serviços, criar contrato prestação de serviço online, fazer contrato de prestação de serviço, contrato prestação serviço continuado, contrato prestação serviço mensal, contrato prestação serviço por hora, contrato prestação serviço projeto, modelo contrato prestação serviço 2026'
    },
    'compra-venda': {
      title: 'Modelo de Contrato de Compra e Venda Grátis PDF e Word 2026',
      description: 'Contrato de compra e venda grátis em PDF e Word. Modelo de compra e venda de imóvel, veículo, terreno, moto, casa e bens móveis. Juridicamente válido.',
      keywords: 'contrato de compra e venda, modelo de contrato de compra e venda, contrato compra e venda pdf, contrato compra e venda word, contrato compra e venda de imóvel, contrato compra e venda de veículo, contrato compra e venda de carro, contrato compra e venda de moto, contrato compra e venda de terreno, contrato compra e venda de casa, contrato compra e venda de apartamento, contrato compra e venda de lote, contrato compra e venda de bens móveis, contrato compra e venda simples, contrato compra e venda particular, contrato compra e venda entre pessoas físicas, contrato compra e venda com cláusula de arrependimento, contrato compra e venda com sinal, contrato compra e venda parcelado, contrato compra e venda à vista, gerador de contrato de compra e venda, criar contrato de compra e venda online, fazer contrato compra e venda grátis, contrato compra venda código civil, escritura particular de compra e venda, instrumento particular de compra e venda, contrato de compra e venda 2026, compromisso de compra e venda, promessa de compra e venda'
    },
    'comodato': {
      title: 'Modelo de Contrato de Comodato Grátis em PDF e Word 2026',
      description: 'Contrato de comodato grátis em PDF e Word. Modelo de empréstimo gratuito de imóvel, veículo e equipamento conforme Código Civil.',
      keywords: 'contrato de comodato, modelo de contrato de comodato, contrato comodato pdf, contrato comodato word, contrato comodato simples, contrato comodato de imóvel, contrato comodato de casa, contrato comodato de apartamento, contrato comodato de veículo, contrato comodato de carro, contrato comodato de equipamento, contrato comodato modal, contrato comodato por prazo determinado, contrato comodato por prazo indeterminado, contrato empréstimo gratuito, modelo empréstimo gratuito de imóvel, gerador contrato comodato, criar contrato comodato online, fazer contrato comodato grátis, comodato pais para filhos, contrato comodato entre familiares, comodato com cláusulas 2026'
    },
    'doacao': {
      title: 'Modelo de Contrato de Doação Grátis em PDF e Word 2026',
      description: 'Contrato de doação grátis em PDF e Word. Modelo de doação de bens móveis, imóveis, veículo, dinheiro e doação com encargo conforme Código Civil.',
      keywords: 'contrato de doação, modelo de contrato de doação, contrato de doação pdf, contrato de doação word, contrato de doação simples, contrato de doação de bens móveis, contrato de doação de imóvel, contrato de doação de veículo, contrato de doação de carro, contrato de doação de dinheiro, contrato de doação com encargo, contrato de doação pura e simples, contrato de doação entre pais e filhos, contrato de doação entre cônjuges, contrato de doação em vida, contrato de doação com reserva de usufruto, escritura de doação, instrumento particular de doação, gerador de contrato de doação, criar contrato de doação online, fazer contrato de doação grátis, modelo doação 2026, contrato doação remuneratória'
    },
    'emprestimo': {
      title: 'Modelo de Contrato de Empréstimo Grátis em PDF e Word 2026',
      description: 'Contrato de empréstimo grátis em PDF e Word. Modelo de mútuo, empréstimo entre pessoas físicas e empréstimo com juros conforme Código Civil.',
      keywords: 'contrato de empréstimo, modelo de contrato de empréstimo, contrato empréstimo pdf, contrato empréstimo word, contrato empréstimo simples, contrato mútuo, contrato empréstimo de dinheiro, contrato empréstimo entre pessoas físicas, contrato empréstimo entre amigos, contrato empréstimo com juros, contrato empréstimo sem juros, contrato empréstimo parcelado, contrato empréstimo com garantia, contrato confissão de dívida, contrato reconhecimento de dívida, gerador contrato empréstimo, criar contrato empréstimo online, fazer contrato empréstimo grátis, contrato empréstimo 2026, modelo mútuo civil, contrato empréstimo veículo, contrato empréstimo empresa'
    },
    'mandato': {
      title: 'Modelo de Contrato de Mandato e Procuração Grátis PDF/Word 2026',
      description: 'Contrato de mandato e procuração grátis em PDF e Word. Modelo de poderes específicos e gerais, mandato remunerado e gratuito conforme Código Civil.',
      keywords: 'contrato de mandato, modelo de contrato de mandato, contrato mandato pdf, contrato mandato word, procuração modelo, modelo procuração particular, procuração com poderes específicos, procuração com poderes gerais, procuração ad judicia, procuração ad negotia, contrato mandato remunerado, contrato mandato gratuito, mandato mercantil, mandato judicial, mandato extrajudicial, gerador contrato mandato, criar contrato mandato online, fazer procuração grátis, modelo procuração pdf, modelo procuração word, contrato mandato 2026, substabelecimento de mandato'
    },
    'alienacao-fiduciaria': {
      title: 'Modelo de Contrato de Alienação Fiduciária Grátis PDF/Word 2026',
      description: 'Contrato de alienação fiduciária grátis em PDF e Word. Modelo para garantia de imóvel, veículo e bens móveis conforme Lei 9.514/97.',
      keywords: 'contrato de alienação fiduciária, alienação fiduciária pdf, alienação fiduciária word, modelo alienação fiduciária, alienação fiduciária de imóvel, alienação fiduciária de veículo, alienação fiduciária de carro, alienação fiduciária em garantia, alienação fiduciária bem móvel, contrato alienação fiduciária simples, lei 9514 alienação fiduciária, decreto lei 911 alienação fiduciária, gerador alienação fiduciária, criar contrato alienação fiduciária, fazer contrato alienação fiduciária grátis, alienação fiduciária 2026, garantia fiduciária'
    },
    'parceria-comercial': {
      title: 'Modelo de Contrato de Parceria Empresarial Grátis PDF/Word 2026',
      description: 'Contrato de parceria empresarial e comercial grátis em PDF e Word. Modelo entre empresas, MEI e parceiros com divisão de lucros e confidencialidade.',
      keywords: 'contrato de parceria empresarial, contrato de parceria comercial, modelo contrato parceria empresarial, modelo contrato parceria comercial, contrato parceria empresarial pdf, contrato parceria empresarial word, contrato parceria entre empresas, contrato parceria mei, contrato parceria comercial simples, parceria empresarial sem sociedade, contrato parceria com divisão de lucros, contrato parceria estratégica, contrato joint venture, contrato parceria de negócios, modelo contrato parceria startup, contrato parceria afiliados, contrato parceria revenda, contrato parceria representação comercial, gerador contrato parceria empresarial, criar contrato parceria online, fazer contrato parceria grátis, contrato parceria 2026'
    },
    'rescisao': {
      title: 'Modelo de Rescisão Contratual e Distrato Grátis PDF/Word 2026',
      description: 'Modelo de rescisão de contrato e distrato grátis em PDF e Word. Rescisão amigável, por descumprimento, para aluguel, prestação de serviços e mais.',
      keywords: 'rescisão de contrato, modelo de rescisão de contrato, contrato de rescisão, contrato de rescisão pdf, contrato de rescisão word, distrato, modelo de distrato, distrato pdf, rescisão amigável, rescisão por descumprimento, rescisão contrato aluguel, rescisão contrato locação, rescisão contrato prestação serviços, rescisão contrato trabalho, termo de rescisão, termo de distrato, gerador rescisão de contrato, criar distrato online, fazer rescisão contrato grátis, rescisão antecipada de contrato, multa rescisória contrato, modelo distrato 2026, resilição contratual'
    },
    'locacao-veiculo': {
      title: 'Modelo de Contrato de Locação de Veículo Grátis PDF/Word 2026',
      description: 'Contrato de locação de veículo grátis em PDF e Word. Modelo para aluguel de carro, moto, caminhão, van e utilitários entre pessoas físicas e empresas.',
      keywords: 'contrato de locação de veículo, contrato aluguel de veículo, contrato locação veículo pdf, contrato locação veículo word, modelo contrato locação veículo, contrato aluguel de carro, contrato aluguel de moto, contrato aluguel de caminhão, contrato aluguel de van, contrato aluguel de utilitário, contrato locação automóvel, contrato locação carro por aplicativo, contrato locação carro uber, contrato locação carro 99, contrato locação veículo entre pessoas físicas, contrato locação veículo empresa, gerador contrato locação veículo, criar contrato aluguel carro online, fazer contrato aluguel veículo grátis, modelo contrato aluguel carro 2026, contrato locação frota, contrato locação carro com motorista, contrato locação carro sem motorista'
    },
    'franquia': {
      title: 'Modelo de Contrato de Franquia Grátis em PDF e Word 2026',
      description: 'Contrato de franquia grátis em PDF e Word conforme Lei 13.966/2019. Modelo profissional com cláusulas de royalties, território, COF e taxa de franquia.',
      keywords: 'contrato de franquia, modelo de contrato de franquia, contrato franquia pdf, contrato franquia word, contrato franqueador franqueado, lei de franquia 13966, cof circular de oferta de franquia, contrato franquia royalties, contrato franquia taxa de franquia, contrato franquia território exclusivo, contrato franquia simples, contrato franquia empresarial, contrato franquia alimentação, contrato franquia varejo, contrato franquia serviços, master franquia, sub franquia, gerador contrato franquia, criar contrato franquia online, fazer contrato franquia grátis, contrato franquia 2026, modelo franchising, contrato franquia internacional'
    },
    'estagio': {
      title: 'Modelo de Contrato de Estágio (TCE) Grátis PDF e Word 2026',
      description: 'Contrato de estágio (TCE) grátis em PDF e Word conforme Lei 11.788/2008. Modelo de termo de compromisso de estágio obrigatório e não obrigatório.',
      keywords: 'contrato de estágio, modelo de contrato de estágio, contrato estágio pdf, contrato estágio word, termo de compromisso de estágio, tce estágio, modelo tce, contrato estágio obrigatório, contrato estágio não obrigatório, contrato estagiário, contrato estágio remunerado, contrato estágio não remunerado, contrato estágio ensino superior, contrato estágio ensino médio, contrato estágio técnico, lei 11788 estágio, gerador contrato estágio, criar tce online, fazer contrato estágio grátis, plano de atividades estágio, modelo tce 2026, contrato estágio escola, contrato estágio universidade, contrato estágio empresa'
    },
    'trabalho-autonomo': {
      title: 'Modelo de Contrato de Trabalho Autônomo Grátis PDF/Word 2026',
      description: 'Contrato de trabalho autônomo grátis em PDF e Word, sem vínculo empregatício. Modelo para profissionais liberais, MEI, PJ e prestadores autônomos.',
      keywords: 'contrato de trabalho autônomo, modelo contrato trabalho autônomo, contrato autônomo pdf, contrato autônomo word, contrato profissional autônomo, contrato sem vínculo empregatício, contrato pj autônomo, contrato trabalho mei, contrato prestador autônomo, contrato profissional liberal, contrato pessoa física autônomo, contrato autônomo simples, contrato autônomo recibo, contrato autônomo rpa, gerador contrato autônomo, criar contrato autônomo online, fazer contrato autônomo grátis, modelo autônomo 2026, contrato autônomo eventual, contrato autônomo continuado'
    },
  };

  const customSeo = seoByContract[contractType.id];
  const seoTitle = customSeo?.title ?? `${contractType.title} Online Grátis - Modelo para Download PDF/Word`;
  const seoDescription = customSeo?.description ?? `Crie seu ${contractType.title.toLowerCase()} online grátis em 30 segundos. Modelo juridicamente válido para download em PDF e Word. ${contractType.description}`;
  const seoKeywords = customSeo?.keywords ?? `${contractType.title.toLowerCase()}, modelo ${contractType.title.toLowerCase()}, gerar ${contractType.title.toLowerCase()}, criar ${contractType.title.toLowerCase()} online`;

  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={`https://modelodecontrato.org${Object.keys(urlToContractMap).find(key => urlToContractMap[key] === contractType.id) || '/gerador?type=' + contractType.id}`}
        structuredData={contractSchema}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <Breadcrumbs />
        </div>
        <ContractForm 
          contractType={contractType} 
          onBack={() => navigate(-1)} 
        />
        
        {/* Related Articles */}
        <RelatedArticles articles={relatedArticles} />
      </div>
    </>
  );
};

export default ContractGenerator;