import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp } from "lucide-react";
import { Helmet } from 'react-helmet-async';

const CalculadoraReajuste = () => {
  const [valorAtual, setValorAtual] = useState<string>('');
  const [indice, setIndice] = useState<string>('');
  const [percentual, setPercentual] = useState<number>(0);
  const [valorReajustado, setValorReajustado] = useState<number>(0);

  // Valores simulados de índices (em uma implementação real, viriam de API)
  const indices = {
    'igpm': 4.52, // IGP-M último acumulado
    'ipca': 3.75, // IPCA último acumulado
    'incc': 4.12  // INCC último acumulado
  };

  const calcularReajuste = () => {
    if (!valorAtual || !indice) return;
    
    const valor = parseFloat(valorAtual.replace(',', '.'));
    const percentualIndice = indices[indice as keyof typeof indices];
    
    if (valor && percentualIndice) {
      const novoValor = valor * (1 + percentualIndice / 100);
      setValorReajustado(novoValor);
      setPercentual(percentualIndice);
    }
  };

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  const calculadoraSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculadora de Reajuste de Aluguel",
    "description": "Calcule o reajuste do seu aluguel baseado em IGP-M, IPCA ou INCC com nossa calculadora gratuita",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    }
  };

  return (
    <>
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(calculadoraSchema)
          }}
        />
      </Helmet>
      
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-xl">Calculadora de Reajuste</CardTitle>
          <p className="text-sm text-muted-foreground">
            Calcule o reajuste do seu aluguel por IGP-M, IPCA ou INCC
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="valor">Valor Atual do Aluguel</Label>
            <Input
              id="valor"
              type="text"
              placeholder="Ex: 1500,00"
              value={valorAtual}
              onChange={(e) => setValorAtual(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="indice">Índice de Reajuste</Label>
            <Select value={indice} onValueChange={setIndice}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o índice" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="igpm">IGP-M ({indices.igpm}%)</SelectItem>
                <SelectItem value="ipca">IPCA ({indices.ipca}%)</SelectItem>
                <SelectItem value="incc">INCC ({indices.incc}%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={calcularReajuste}
            className="w-full"
            disabled={!valorAtual || !indice}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Calcular Reajuste
          </Button>

          {valorReajustado > 0 && (
            <div className="bg-primary/10 rounded-lg p-4">
              <h3 className="font-semibold text-primary mb-2">Resultado:</h3>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Valor atual:</span> {formatarMoeda(parseFloat(valorAtual.replace(',', '.')))}</p>
                <p><span className="font-medium">Índice aplicado:</span> {percentual}%</p>
                <p><span className="font-medium">Valor reajustado:</span> <span className="text-primary font-bold">{formatarMoeda(valorReajustado)}</span></p>
                <p><span className="font-medium">Diferença:</span> {formatarMoeda(valorReajustado - parseFloat(valorAtual.replace(',', '.')))}</p>
              </div>
            </div>
          )}

          <div className="text-xs text-muted-foreground text-center">
            * Valores de referência. Consulte índices oficiais para cálculo exato.
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CalculadoraReajuste;