import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const DireitoArrependimento = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Direito de Arrependimento: Como Desfazer Compra em 7 Dias - CDC",
    "description": "Guia completo sobre o direito de arrependimento no Código de Defesa do Consumidor: prazo de 7 dias, como exercer, devolução de valores e regras para compras online.",
    "author": {
      "@type": "Organization",
      "name": "Modelo de Contrato"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Modelo de Contrato",
      "logo": {
        "@type": "ImageObject",
        "url": "https://modelodecontrato.org/logo.png"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15"
  };

  return (
    <>
      <SEO 
        title="Direito de Arrependimento: Como Desfazer Compra em 7 Dias - CDC"
        description="Entenda o direito de arrependimento previsto no CDC: prazo de 7 dias, como exercer, devolução integral de valores, compras online e em domicílio. Guia completo atualizado."
        keywords="direito de arrependimento, 7 dias compra online, CDC arrependimento, cancelar compra internet, devolução produto online, artigo 49 CDC"
        canonical="https://modelodecontrato.org/direito-arrependimento-prazo-legal"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <Breadcrumbs />
          
          <nav className="mb-6">
            <Button variant="outline" onClick={() => navigate("/glossario-juridico")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Glossário
            </Button>
          </nav>

          <article>
            <header className="text-center mb-12">
              <RotateCcw className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Direito de Arrependimento: Como Desfazer Compra em 7 Dias
              </h1>
              <p className="text-xl text-muted-foreground">
                Entenda seus direitos ao comprar fora do estabelecimento comercial
              </p>
            </header>

            <Card className="mb-8">
              <CardContent className="prose prose-slate max-w-none pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">O que é o Direito de Arrependimento?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O direito de arrependimento é uma garantia prevista no artigo 49 do Código de Defesa do Consumidor (CDC) que permite ao consumidor <strong>desistir da compra no prazo de 7 dias</strong>, sem precisar justificar o motivo, quando a aquisição ocorre <strong>fora do estabelecimento comercial</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Essa proteção existe porque em compras pela internet, telefone, catálogo ou em domicílio, o consumidor não tem contato físico prévio com o produto, o que pode gerar expectativas não correspondidas. O direito de arrependimento garante uma "segunda chance" para avaliar se a compra realmente atende às suas necessidades.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Quando se Aplica o Direito de Arrependimento?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O direito de arrependimento se aplica nas seguintes situações:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Compras pela internet (e-commerce):</strong> lojas virtuais, marketplaces, redes sociais</li>
                  <li><strong>Telemarketing:</strong> vendas realizadas por telefone</li>
                  <li><strong>Vendas por catálogo:</strong> revistas, folhetos, mala direta</li>
                  <li><strong>Vendas em domicílio:</strong> representantes comerciais que visitam a residência do consumidor</li>
                  <li><strong>Vendas por correspondência:</strong> compras por e-mail, WhatsApp, mensagens</li>
                  <li><strong>Feiras e eventos temporários:</strong> compras em stands provisórios</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Importante:</strong> Compras realizadas presencialmente em lojas físicas <strong>NÃO</strong> estão cobertas pelo direito de arrependimento, salvo se a loja oferecer essa garantia voluntariamente.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Prazo de 7 Dias: Como Contar?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O prazo de 7 dias começa a contar a partir:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Da assinatura do contrato:</strong> em serviços contratados remotamente</li>
                  <li><strong>Do recebimento do produto:</strong> em compras de bens físicos</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os 7 dias são <strong>corridos</strong> (não úteis), incluindo sábados, domingos e feriados. Se o último dia cair em dia não útil, o prazo se estende até o primeiro dia útil seguinte.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Exemplo:</strong> Se você recebeu o produto na segunda-feira, dia 1º, tem até a segunda-feira seguinte, dia 8, para manifestar o arrependimento.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Como Exercer o Direito de Arrependimento?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para desistir da compra, o consumidor deve:
                </p>
                <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Comunicar a loja:</strong> envie e-mail, mensagem ou utilize o canal de atendimento informado no site</li>
                  <li><strong>Mencionar o direito de arrependimento:</strong> deixe claro que está exercendo o direito previsto no art. 49 do CDC</li>
                  <li><strong>Informar dados do pedido:</strong> número do pedido, data da compra, produto adquirido</li>
                  <li><strong>Não é necessário justificar:</strong> você pode desistir sem explicar o motivo</li>
                </ol>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Dica:</strong> Guarde comprovante da comunicação (print de e-mail, protocolo de atendimento) para eventual necessidade de prova.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Devolução do Produto e Valores Pagos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ao exercer o direito de arrependimento:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Devolução integral dos valores:</strong> o consumidor deve receber de volta <strong>tudo</strong> o que pagou, incluindo frete</li>
                  <li><strong>Forma de devolução:</strong> preferencialmente da mesma forma que foi pago (mesma conta, mesmo cartão)</li>
                  <li><strong>Prazo para devolução do dinheiro:</strong> geralmente até 7 dias após a manifestação do arrependimento (ou conforme política da loja, se mais favorável)</li>
                  <li><strong>Custo do frete de devolução:</strong> jurisprudência é dividida, mas a tendência é de que seja responsabilidade do fornecedor</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Estado do Produto para Devolução</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O produto deve ser devolvido nas seguintes condições:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Embalagem original:</strong> sempre que possível, com caixa, manuais e acessórios</li>
                  <li><strong>Sem uso excessivo:</strong> é permitido testar o produto, mas não usar de forma completa</li>
                  <li><strong>Lacres intactos:</strong> em produtos que possuem lacres de segurança, a abertura pode ser questionada</li>
                  <li><strong>Nota fiscal:</strong> incluir a nota fiscal ou documento equivalente</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Atenção:</strong> É razoável que o consumidor abra a embalagem e teste o produto para verificar se atende suas expectativas. O simples teste não descaracteriza o direito de arrependimento.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Produtos que NÃO Podem Ser Devolvidos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Embora o CDC seja amplo, algumas categorias podem ter restrições:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Produtos personalizados:</strong> feitos sob medida para o cliente</li>
                  <li><strong>Produtos perecíveis:</strong> alimentos, medicamentos com prazo de validade curto</li>
                  <li><strong>Conteúdos digitais:</strong> quando já consumidos (filmes assistidos, jogos baixados) - mas há debate jurídico sobre isso</li>
                  <li><strong>Produtos de higiene pessoal:</strong> se o lacre foi violado por razões sanitárias</li>
                  <li><strong>Jornais e revistas:</strong> publicações periódicas</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Essas exceções devem estar <strong>claramente informadas</strong> antes da compra. Caso contrário, o direito de arrependimento prevalece.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Direito de Arrependimento em Serviços</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O direito de arrependimento também se aplica a serviços contratados fora do estabelecimento:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Assinaturas de academias, clubes, cursos online</li>
                  <li>Serviços de streaming, plataformas digitais</li>
                  <li>Contratos de telefonia, internet, TV por assinatura</li>
                  <li>Seguros contratados remotamente</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Exceção:</strong> Se o serviço já foi totalmente prestado e consumido no prazo de 7 dias com consentimento do consumidor, pode haver cobrança proporcional.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Política de Troca vs. Direito de Arrependimento</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  É importante diferenciar:
                </p>
                
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <h3 className="font-bold text-foreground mb-2">Direito de Arrependimento (Art. 49 CDC):</h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Previsto em lei, obrigatório</li>
                    <li>7 dias corridos</li>
                    <li>Apenas para compras fora do estabelecimento</li>
                    <li>Não precisa justificar</li>
                    <li>Devolução integral dos valores</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <h3 className="font-bold text-foreground mb-2">Política de Troca (Voluntária):</h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Oferecida voluntariamente pela loja</li>
                    <li>Prazo definido pela loja (geralmente 30 dias)</li>
                    <li>Pode incluir compras presenciais</li>
                    <li>Pode ter condições específicas (etiqueta, embalagem)</li>
                    <li>Pode oferecer vale-troca em vez de dinheiro</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">O que Fazer se a Loja Recusar a Devolução?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se a loja se recusar a aceitar o arrependimento dentro do prazo legal:
                </p>
                <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Reitere por escrito:</strong> envie novo e-mail citando o art. 49 do CDC</li>
                  <li><strong>Registre reclamação no Procon:</strong> órgão de defesa do consumidor da sua cidade</li>
                  <li><strong>Plataforma Consumidor.gov.br:</strong> canal oficial para reclamações contra empresas</li>
                  <li><strong>Reclame Aqui:</strong> exposição pública pode pressionar a empresa</li>
                  <li><strong>Juizado Especial Cível:</strong> se o valor for até 40 salários mínimos, não precisa de advogado</li>
                  <li><strong>Busque assessoria jurídica:</strong> consulte advogado especializado em direito do consumidor</li>
                </ol>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Direito de Arrependimento em Compras Internacionais</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Em compras de sites estrangeiros:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Se a empresa vende no Brasil, deve respeitar o CDC</li>
                  <li>Se não tem representação no Brasil, aplicação da lei pode ser difícil</li>
                  <li>Verifique política de devolução do site antes de comprar</li>
                  <li>Considere custos de frete internacional para devolução</li>
                  <li>Utilize plataformas confiáveis e com garantias de proteção ao comprador</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Boas Práticas para Lojas Virtuais</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Empresas que vendem online devem:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Informar claramente sobre o direito de arrependimento</li>
                  <li>Facilitar o processo de devolução com orientações simples</li>
                  <li>Disponibilizar etiqueta de devolução gratuita</li>
                  <li>Processar reembolsos rapidamente</li>
                  <li>Manter canal de atendimento acessível</li>
                  <li>Registrar e protocolar todas as solicitações</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Dicas para o Consumidor</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para exercer seu direito com segurança:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Leia a política de trocas e devoluções antes de comprar</li>
                  <li>Guarde todos os comprovantes e comunicações</li>
                  <li>Filme a abertura da embalagem em caso de produto de alto valor</li>
                  <li>Comunique o arrependimento por escrito com comprovante</li>
                  <li>Respeite o prazo de 7 dias para manifestação</li>
                  <li>Devolva o produto com cuidado e documentação completa</li>
                  <li>Acompanhe o código de rastreamento da devolução</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Considerações Finais</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O direito de arrependimento é uma conquista importante do consumidor brasileiro e deve ser respeitado por todas as empresas que vendem fora do estabelecimento físico. Trata-se de um direito <strong>irrenunciável</strong>, ou seja, não pode ser retirado nem mesmo por acordo entre as partes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Conhecer e exercer esse direito contribui para relações de consumo mais equilibradas e protege o consumidor de compras impulsivas ou produtos que não atendem às expectativas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Continue Aprendendo sobre Direitos do Consumidor</h3>
                    <p className="text-muted-foreground mb-4">
                      Explore outros termos jurídicos essenciais relacionados a contratos e proteção do consumidor.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => navigate("/glossario-juridico")}
                    >
                      Ver Glossário Jurídico
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>
        </div>
      </div>
    </>
  );
};

export default DireitoArrependimento;