import React, { useState } from 'react';
import { useParams, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { contractTypes } from '@/lib/contractTypes';
import ContractForm from '@/components/ContractForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';

import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

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

  return (
    <>
      <SEO 
        title={`${contractType.title} Online Grátis - Modelo para Download PDF/Word`}
        description={`Crie seu ${contractType.title.toLowerCase()} online grátis em 30 segundos. Modelo juridicamente válido para download em PDF e Word. ${contractType.description}`}
        keywords={`${contractType.title.toLowerCase()}, modelo ${contractType.title.toLowerCase()}, gerar ${contractType.title.toLowerCase()}, criar ${contractType.title.toLowerCase()} online`}
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
      </div>
    </>
  );
};

export default ContractGenerator;