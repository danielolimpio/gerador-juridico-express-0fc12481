import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermosDeUso = () => {
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
          <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Termos de Uso
          </h1>
          <p className="text-xl text-muted-foreground">
            Última atualização: Janeiro de 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Aceitação dos Termos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ao acessar e usar o site Modelos de Contratos (modelosdecontratos.com.br), você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Descrição do Serviço</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                O Modelos de Contratos é uma plataforma online gratuita que permite aos usuários gerar contratos jurídicos básicos através de formulários automatizados. O serviço inclui:
              </p>
              <p className="text-muted-foreground">
                • Geração de mais de 15 tipos de contratos
              </p>
              <p className="text-muted-foreground">
                • Download em formatos PDF, Word e TXT
              </p>
              <p className="text-muted-foreground">
                • Validação automática de CPF e CNPJ
              </p>
              <p className="text-muted-foreground">
                • Funcionalidades de compartilhamento
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Uso Permitido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Você pode usar nosso serviço para:
              </p>
              <p className="text-muted-foreground">
                • Gerar contratos para uso pessoal ou comercial
              </p>
              <p className="text-muted-foreground">
                • Baixar e editar os contratos gerados
              </p>
              <p className="text-muted-foreground">
                • Compartilhar o link do site com outras pessoas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Uso Proibido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                É expressamente proibido:
              </p>
              <p className="text-muted-foreground">
                • Usar o serviço para atividades ilegais ou fraudulentas
              </p>
              <p className="text-muted-foreground">
                • Copiar, modificar ou distribuir nosso código-fonte
              </p>
              <p className="text-muted-foreground">
                • Sobrecarregar nossos servidores com requisições excessivas
              </p>
              <p className="text-muted-foreground">
                • Remover ou alterar avisos de copyright
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Responsabilidades e Limitações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                <strong>Validade Jurídica:</strong> Embora nossos modelos sejam baseados na legislação brasileira, recomendamos fortemente a revisão por um advogado qualificado antes da assinatura, especialmente para contratos complexos ou de alto valor.
              </p>
              <p className="text-muted-foreground">
                <strong>Limitação de Responsabilidade:</strong> Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso dos contratos gerados. O usuário assume total responsabilidade pela adequação e uso dos documentos.
              </p>
              <p className="text-muted-foreground">
                <strong>Disponibilidade:</strong> Embora nos esforcemos para manter o serviço disponível 24/7, não garantimos disponibilidade ininterrupta.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Propriedade Intelectual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Todos os direitos autorais, marcas registradas e outros direitos de propriedade intelectual relacionados ao site e aos modelos de contratos pertencem ao Modelos de Contratos ou aos seus licenciadores. Os contratos gerados pelos usuários são de propriedade dos respectivos usuários.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Modificações dos Termos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. É responsabilidade do usuário verificar periodicamente os termos atualizados.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Rescisão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Podemos suspender ou encerrar seu acesso ao serviço a qualquer momento, com ou sem aviso prévio, por violação destes termos ou por qualquer outro motivo que consideremos apropriado.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Lei Aplicável</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes do Brasil.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Para dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>E-mail:</strong> contato@modelosdecontratos.com.br<br />
                <strong>Telefone:</strong> (12) 98251-9116
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TermosDeUso;