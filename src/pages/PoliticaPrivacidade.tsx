import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PoliticaPrivacidade = () => {
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
          <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Política de Privacidade
          </h1>
          <p className="text-xl text-muted-foreground">
            Última atualização: Janeiro de 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Informações que Coletamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                <strong>Dados de Uso:</strong> Coletamos informações sobre como você usa nosso site, incluindo páginas visitadas, tempo de permanência e recursos utilizados.
              </p>
              <p className="text-muted-foreground">
                <strong>Dados de Formulários:</strong> As informações inseridas nos formulários de contratos são processadas localmente em seu navegador e não são armazenadas em nossos servidores.
              </p>
              <p className="text-muted-foreground">
                <strong>Cookies:</strong> Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Como Usamos suas Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                • Fornecer e manter nosso serviço de geração de contratos
              </p>
              <p className="text-muted-foreground">
                • Melhorar e personalizar sua experiência no site
              </p>
              <p className="text-muted-foreground">
                • Analisar como nosso serviço é usado para melhorias
              </p>
              <p className="text-muted-foreground">
                • Comunicar sobre atualizações do serviço
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Proteção de Dados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                <strong>Processamento Local:</strong> Todos os dados dos contratos são processados localmente em seu navegador, garantindo que informações sensíveis não sejam transmitidas para nossos servidores.
              </p>
              <p className="text-muted-foreground">
                <strong>Segurança:</strong> Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração ou destruição.
              </p>
              <p className="text-muted-foreground">
                <strong>Criptografia:</strong> Utilizamos conexões seguras (HTTPS) para proteger a transmissão de dados.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Compartilhamento de Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
              </p>
              <p className="text-muted-foreground">
                • Quando exigido por lei ou ordem judicial
              </p>
              <p className="text-muted-foreground">
                • Para proteger nossos direitos legais
              </p>
              <p className="text-muted-foreground">
                • Com provedores de serviços que nos ajudam a operar o site (Google Analytics, etc.)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Seus Direitos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem o direito de:
              </p>
              <p className="text-muted-foreground">
                • Solicitar informações sobre seus dados pessoais
              </p>
              <p className="text-muted-foreground">
                • Corrigir dados incompletos ou inexatos
              </p>
              <p className="text-muted-foreground">
                • Solicitar a exclusão de dados pessoais
              </p>
              <p className="text-muted-foreground">
                • Revogar o consentimento a qualquer momento
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Utilizamos cookies para:
              </p>
              <p className="text-muted-foreground">
                • Melhorar a funcionalidade do site
              </p>
              <p className="text-muted-foreground">
                • Analisar o tráfego e uso do site
              </p>
              <p className="text-muted-foreground">
                • Personalizar conteúdo e anúncios
              </p>
              <p className="text-muted-foreground">
                Você pode controlar os cookies através das configurações do seu navegador.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Alterações nesta Política</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas publicando a nova política nesta página com uma nova data de "última atualização".
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
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

export default PoliticaPrivacidade;