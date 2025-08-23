import React, { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { contractTypes } from '@/lib/contractTypes';
import ContractForm from '@/components/ContractForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';
import AdBanner from '@/components/AdBanner';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const ContractGenerator: React.FC = () => {
  const { contractId } = useParams<{ contractId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Pega o tipo do contrato pelos query parameters ou pela URL
  const contractTypeId = contractId || searchParams.get('type');
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
        structuredData={contractSchema}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <Breadcrumbs />
        </div>
        <AdBanner />
        <ContractForm 
          contractType={contractType} 
          onBack={() => navigate('/')} 
        />
        <AdBanner />
      </div>
    </>
  );
};

export default ContractGenerator;