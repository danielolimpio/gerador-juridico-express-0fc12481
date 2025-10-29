import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Cookie } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cookies = () => {
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
          <Cookie className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Política de Cookies
          </h1>
          <p className="text-xl text-muted-foreground">
            Como utilizamos cookies em nosso site
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>O que são Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cookies são pequenos arquivos de texto que são armazenados em seu computador ou dispositivo móvel quando você visita um site. 
                Eles são amplamente utilizados para fazer os sites funcionarem, ou funcionar de forma mais eficiente, bem como para fornecer 
                informações aos proprietários do site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Como Utilizamos Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Utilizamos cookies para os seguintes propósitos:
              </p>
              <p className="text-muted-foreground">
                • <strong>Funcionalidade:</strong> Para lembrar suas preferências e configurações
              </p>
              <p className="text-muted-foreground">
                • <strong>Análise:</strong> Para entender como você usa nosso site e melhorar nossos serviços
              </p>
              <p className="text-muted-foreground">
                • <strong>Segurança:</strong> Para proteger contra fraudes e ataques maliciosos
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tipos de Cookies que Utilizamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">1. Cookies Essenciais</h4>
                <p className="text-muted-foreground">
                  Estes cookies são necessários para o funcionamento básico do site. Eles permitem que você navegue pelo site e use suas funcionalidades essenciais.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">2. Cookies de Análise</h4>
                <p className="text-muted-foreground">
                  Utilizamos Google Analytics para coletar informações sobre como os visitantes usam nosso site. 
                  Essas informações nos ajudam a melhorar o site e a experiência do usuário.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">3. Cookies de Funcionalidade</h4>
                <p className="text-muted-foreground">
                  Estes cookies lembram das escolhas que você faz (como tema escuro/claro) e fornecem recursos aprimorados e personalizados.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies de Terceiros</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Nosso site pode conter cookies de terceiros:
              </p>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Google Analytics</h4>
                <p className="text-muted-foreground">
                  Utilizamos o Google Analytics para analisar o uso do nosso site. O Google Analytics gera informações estatísticas 
                  e outras informações sobre o uso do site por meio de cookies armazenados nos computadores dos usuários.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gerenciamento de Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão no seu computador 
                e pode configurar a maioria dos navegadores para impedir que sejam colocados.
              </p>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Configurações do Navegador:</h4>
                <p className="text-muted-foreground">
                • <strong>Chrome:</strong> Configurações {'>'}  Privacidade e segurança {'>'} Cookies e outros dados do site
              </p>
              <p className="text-muted-foreground">
                • <strong>Firefox:</strong> Opções {'>'} Privacidade e Segurança {'>'} Cookies e dados de sites
              </p>
              <p className="text-muted-foreground">
                • <strong>Safari:</strong> Preferências {'>'} Privacidade {'>'} Cookies e dados de websites
              </p>
              <p className="text-muted-foreground">
                • <strong>Edge:</strong> Configurações {'>'} Cookies e permissões do site
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consequências de Desabilitar Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Se você desabilitar os cookies, algumas funcionalidades do nosso site podem não funcionar corretamente. 
                Por exemplo, você pode precisar inserir suas preferências toda vez que visitar o site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies e Dados Pessoais</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                <strong>Importante:</strong> Os dados inseridos nos formulários de contratos são processados localmente em seu navegador 
                e não são armazenados em cookies ou enviados para nossos servidores. Sua privacidade e a confidencialidade de seus 
                dados contratuais são protegidas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Atualizações desta Política</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Podemos atualizar nossa Política de Cookies ocasionalmente. Recomendamos que você revise esta página periodicamente 
                para se manter informado sobre como usamos cookies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Se você tiver dúvidas sobre nossa utilização de cookies, entre em contato conosco:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>E-mail:</strong> contato@modelodecontrato.org<br />
                <strong>Telefone:</strong> (12) 98251-9116
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cookies;