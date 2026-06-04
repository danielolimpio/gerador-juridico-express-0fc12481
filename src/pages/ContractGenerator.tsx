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

  // SEO long-tail por tipo de contrato (palavras-chave de alto volume no Brasil)
  const seoByContract: Record<string, { title: string; description: string; keywords: string }> = {
    'locacao-residencial': {
      title: 'Modelo de Contrato de Aluguel Residencial Grátis em PDF e Word',
      description: 'Crie um contrato de aluguel residencial simples, grátis e juridicamente válido. Modelo de contrato de locação residencial em PDF e Word, pronto para imprimir e assinar.',
      keywords: 'modelo de contrato de aluguel, contrato de aluguel simples, contrato de aluguel residencial, contrato de aluguel pdf, contrato de locação residencial, modelo de contrato de aluguel residencial, contrato simples de aluguel, contrato de aluguel de casa, como fazer contrato de aluguel, contrato de aluguel para imprimir, Lei do Inquilinato'
    },
    'locacao-comercial': {
      title: 'Modelo de Contrato de Locação Comercial Grátis em PDF e Word',
      description: 'Modelo de contrato de locação comercial pronto para preencher. Baixe em PDF e Word, juridicamente válido conforme a Lei do Inquilinato 8.245/91.',
      keywords: 'contrato de locação comercial, modelo de contrato comercial, contrato de aluguel comercial, locação ponto comercial, contrato de locação não residencial, modelo de contrato de aluguel comercial pdf'
    },
    'prestacao-servicos': {
      title: 'Modelo de Contrato de Prestação de Serviços Grátis em PDF/Word',
      description: 'Modelo de contrato de prestação de serviços grátis em PDF e Word. Ideal para MEI, autônomos e empresas. Crie em 30 segundos, sem cadastro.',
      keywords: 'contrato de prestação de serviços, modelo de contrato de prestação de serviço, contrato de prestador de serviço, contrato prestação de serviços mei, modelo prestação de serviços pdf, contrato de serviço autônomo, contrato de prestação de serviços simples'
    },
    'compra-venda': {
      title: 'Modelo de Contrato de Compra e Venda Grátis em PDF e Word',
      description: 'Modelo de contrato de compra e venda de imóvel, veículo e bens móveis. Baixe grátis em PDF e Word, juridicamente válido conforme o Código Civil.',
      keywords: 'contrato de compra e venda, modelo de contrato de compra e venda, contrato compra e venda de imóvel, contrato compra e venda de veículo, contrato de compra e venda pdf, contrato compra e venda simples'
    },
    'comodato': {
      title: 'Modelo de Contrato de Comodato Grátis em PDF e Word',
      description: 'Modelo de contrato de comodato para empréstimo gratuito de bens. Baixe grátis em PDF e Word, válido conforme o Código Civil.',
      keywords: 'contrato de comodato, modelo de contrato de comodato, comodato de imóvel, comodato de veículo, contrato de empréstimo gratuito, contrato de comodato pdf'
    },
    'doacao': {
      title: 'Modelo de Contrato de Doação Grátis em PDF e Word',
      description: 'Contrato de doação de bens móveis e imóveis grátis em PDF e Word. Modelo juridicamente válido conforme o Código Civil brasileiro.',
      keywords: 'contrato de doação, modelo de contrato de doação, doação de bens, contrato de doação pdf, contrato de doação simples'
    },
    'locacao-veiculo': {
      title: 'Modelo de Contrato de Locação de Veículo Grátis em PDF e Word',
      description: 'Contrato de locação de veículo grátis em PDF e Word. Modelo para aluguel de carros, motos e caminhões, juridicamente válido.',
      keywords: 'contrato de locação de veículo, contrato aluguel de carro, modelo contrato locação veículo, contrato de aluguel de carro pdf, locação de automóvel'
    },
    'franquia': {
      title: 'Modelo de Contrato de Franquia Grátis em PDF e Word',
      description: 'Modelo de contrato de franquia conforme a Lei nº 13.966/2019. Baixe grátis em PDF e Word, com cláusulas profissionais para franqueador e franqueado.',
      keywords: 'contrato de franquia, modelo de contrato de franquia, COF circular de oferta de franquia, contrato franqueador franqueado, Lei de Franquia'
    },
    'estagio': {
      title: 'Modelo de Contrato de Estágio Grátis em PDF e Word',
      description: 'Modelo de contrato de estágio (TCE) conforme a Lei 11.788/2008. Baixe grátis em PDF e Word, pronto para preencher.',
      keywords: 'contrato de estágio, modelo de contrato de estágio, termo de compromisso de estágio, TCE estagiário, contrato estágio pdf'
    },
    'trabalho-autonomo': {
      title: 'Modelo de Contrato de Trabalho Autônomo Grátis em PDF e Word',
      description: 'Modelo de contrato de trabalho autônomo sem vínculo empregatício. Baixe grátis em PDF e Word, ideal para profissionais liberais e MEI.',
      keywords: 'contrato de trabalho autônomo, contrato autônomo pdf, modelo contrato profissional autônomo, contrato sem vínculo empregatício, contrato pj autônomo'
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