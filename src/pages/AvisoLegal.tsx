import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Scale, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AvisoLegal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>

        <div className="text-center mb-12">
          <Scale className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Aviso Legal
          </h1>
          <p className="text-xl text-muted-foreground">
            Informações importantes sobre o uso dos contratos gerados
          </p>
        </div>

        <div className="mb-8">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <AlertTriangle className="w-6 h-6" />
                Importante: Leia Antes de Usar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700">
                Os contratos gerados por esta plataforma são modelos básicos baseados na legislação brasileira. 
                É <strong>altamente recomendável</strong> que você consulte um advogado antes de assinar qualquer contrato, 
                especialmente em situações complexas ou que envolvam valores significativos.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Natureza dos Modelos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Os modelos de contratos disponibilizados são documentos genéricos elaborados com base na legislação brasileira vigente. 
                Eles servem como ponto de partida para a criação de contratos específicos, mas podem não contemplar todas as 
                particularidades de cada situação.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Não Constituem Aconselhamento Jurídico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                <strong>IMPORTANTE:</strong> O uso desta plataforma e dos contratos gerados não constitui prestação de serviços 
                jurídicos nem estabelece relação advogado-cliente. Não oferecemos aconselhamento jurídico personalizado.
              </p>
              <p className="text-muted-foreground">
                Para orientação jurídica específica, consulte sempre um advogado devidamente inscrito na OAB (Ordem dos Advogados do Brasil).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Responsabilidade do Usuário</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ao usar os contratos gerados, você assume total responsabilidade por:
              </p>
              <p className="text-muted-foreground">
                • Verificar a adequação do contrato à sua situação específica
              </p>
              <p className="text-muted-foreground">
                • Confirmar se todas as cláusulas atendem às suas necessidades
              </p>
              <p className="text-muted-foreground">
                • Verificar a correção de todos os dados inseridos
              </p>
              <p className="text-muted-foreground">
                • Cumprir todas as obrigações legais relacionadas ao contrato
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Limitações dos Modelos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Os modelos podem não ser adequados para:
              </p>
              <p className="text-muted-foreground">
                • Situações juridicamente complexas
              </p>
              <p className="text-muted-foreground">
                • Contratos de alto valor ou risco
              </p>
              <p className="text-muted-foreground">
                • Transações internacionais
              </p>
              <p className="text-muted-foreground">
                • Situações que envolvem legislação específica setorial
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Registro e Reconhecimento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                <strong>Atenção:</strong> Alguns contratos requerem procedimentos adicionais:
              </p>
              <p className="text-muted-foreground">
                • <strong>Contratos de imóveis:</strong> Devem ser registrados no cartório competente
              </p>
              <p className="text-muted-foreground">
                • <strong>Reconhecimento de firma:</strong> Pode ser necessário dependendo do tipo de contrato
              </p>
              <p className="text-muted-foreground">
                • <strong>Testemunhas:</strong> Recomendadas para contratos de empréstimo e outros
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Atualizações Legislativas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A legislação brasileira está em constante evolução. Embora nos esforcemos para manter nossos modelos 
                atualizados, é possível que mudanças recentes na lei não estejam imediatamente refletidas nos contratos. 
                Sempre verifique a legislação atual ou consulte um advogado.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Isenção de Responsabilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                O Modelos de Contratos não se responsabiliza por quaisquer danos, prejuízos ou consequências decorrentes 
                do uso dos contratos gerados. O usuário utiliza os modelos por sua própria conta e risco.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Quando Procurar um Advogado</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Recomendamos fortemente a consulta a um advogado nos seguintes casos:
              </p>
              <p className="text-muted-foreground">
                • Contratos envolvendo valores altos (acima de R$ 10.000)
              </p>
              <p className="text-muted-foreground">
                • Transações comerciais complexas
              </p>
              <p className="text-muted-foreground">
                • Contratos de sociedade ou parcerias empresariais
              </p>
              <p className="text-muted-foreground">
                • Situações que envolvem garantias ou bens de alto valor
              </p>
              <p className="text-muted-foreground">
                • Quando há dúvidas sobre direitos e obrigações
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
          <p className="text-muted-foreground">
            <strong>Lembre-se:</strong> Um investimento em orientação jurídica adequada pode evitar problemas futuros 
            muito mais custosos. Use nossos modelos como ponto de partida, mas sempre priorize a segurança jurídica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvisoLegal;