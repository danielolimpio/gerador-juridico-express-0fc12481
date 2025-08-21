import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { contractTypes } from '@/lib/contractTypes';
import ContractForm from '@/components/ContractForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';

const ContractGenerator: React.FC = () => {
  const { contractId } = useParams<{ contractId: string }>();
  const navigate = useNavigate();
  
  const contractType = contractTypes.find(ct => ct.id === contractId);
  
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

  return (
    <div className="min-h-screen bg-background">
      <ContractForm 
        contractType={contractType} 
        onBack={() => navigate('/')} 
      />
    </div>
  );
};

export default ContractGenerator;