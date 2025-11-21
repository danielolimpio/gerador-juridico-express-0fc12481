import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MessageCircle, FileText, Shield, Zap, Building2, HelpCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const FAQ = () => {
  const navigate = useNavigate();

  const faqCategories = [
    {
      title: "Sobre o Gerador de Contratos",
      icon: Sparkles,
      description: "Entenda como funciona nossa plataforma gratuita",
      faqs: [
        {
          question: "O gerador de contratos é realmente gratuito?",
          answer: "Sim, 100% gratuito! Você pode criar quantos contratos precisar sem pagar nada. Não há cobrança oculta, limite de uso, cadastro obrigatório ou período de teste. Todos os modelos, validações automáticas e formatos de download (PDF, Word, TXT) estão disponíveis gratuitamente para sempre."
        },
        {
          question: "Como funciona o gerador de contratos passo a passo?",
          answer: "É super simples e rápido: 1) Escolha o tipo de contrato que precisa na página inicial ou em 'Tipos de Contratos', 2) Preencha o formulário com as informações das partes envolvidas (nosso sistema valida CPF/CNPJ automaticamente), 3) Revise as cláusulas e customize se necessário, 4) Clique em gerar e baixe imediatamente em PDF, Word ou TXT. Todo processo leva menos de 5 minutos!"
        },
        {
          question: "Preciso fazer cadastro ou criar conta?",
          answer: "Não! Nosso gerador funciona sem cadastro, sem login e sem fornecer e-mail. Respeitamos sua privacidade e queremos que você gere contratos da forma mais rápida e simples possível. Basta acessar, preencher e baixar."
        },
        {
          question: "Vocês armazenam meus dados pessoais ou do contrato?",
          answer: "Não armazenamos absolutamente nada! Todos os dados que você preenche são processados localmente no seu navegador através de tecnologia JavaScript client-side. Assim que você fecha a página ou baixa o contrato, todas as informações são apagadas automaticamente. Garantimos 100% de privacidade e conformidade com a LGPD."
        },
        {
          question: "Quantos contratos posso gerar por dia?",
          answer: "Ilimitados! Não há qualquer restrição de quantidade. Você pode gerar 1, 10, 50 ou 100 contratos por dia sem nenhum problema. Use à vontade para suas necessidades pessoais, profissionais ou empresariais."
        }
      ]
    },
    {
      title: "Tipos de Contratos Disponíveis",
      icon: FileText,
      description: "Conheça todos os modelos que você pode gerar",
      faqs: [
        {
          question: "Quais tipos de contratos posso gerar gratuitamente?",
          answer: "Oferecemos mais de 15 modelos completos: Contrato de Aluguel Residencial, Locação Comercial, Compra e Venda de Imóvel, Compra e Venda de Veículo, Prestação de Serviços MEI, Prestação de Serviços Profissional Autônomo, Trabalho Autônomo, Parceria Empresarial, Doação de Bens, Empréstimo Pessoal, Comodato (Empréstimo Gratuito), Mandato, Alienação Fiduciária, Estágio, Rescisão de Contrato e Locação de Veículo. Novos modelos são adicionados regularmente com base nas solicitações dos usuários."
        },
        {
          question: "Tem modelo de contrato de aluguel residencial completo?",
          answer: "Sim! Nosso modelo de locação residencial é um dos mais completos e inclui: identificação completa do locador e locatário, descrição do imóvel, valor e reajuste do aluguel, prazo de locação, cláusulas sobre responsabilidades, garantias, multas por atraso, rescisão antecipada e muito mais. Totalmente baseado na Lei do Inquilinato (Lei 8.245/91)."
        },
        {
          question: "Posso gerar contrato de prestação de serviços para MEI?",
          answer: "Perfeitamente! Temos modelo específico otimizado para Microempreendedores Individuais que inclui: dados do MEI (CNPJ, razão social), descrição detalhada dos serviços prestados, forma e prazo de pagamento, prazo de execução, cláusulas de confidencialidade, rescisão e responsabilidades. Ideal para formalizar parcerias comerciais."
        },
        {
          question: "Tem contrato de compra e venda de imóvel?",
          answer: "Sim, temos modelo completo de compra e venda que inclui: qualificação do vendedor e comprador, descrição detalhada do imóvel (endereço, matrícula, área), valor total e forma de pagamento (à vista ou parcelado), data de entrega das chaves, cláusulas sobre documentação e quitação. Importante: contratos de imóveis devem ser registrados em cartório para validade plena."
        },
        {
          question: "Existe modelo para contrato de trabalho freelancer?",
          answer: "Sim! Nosso modelo de Prestação de Serviços Profissional Autônomo é perfeito para freelancers e inclui: descrição do projeto, prazo de entrega, valores e forma de pagamento, direitos sobre propriedade intelectual, cláusulas de confidencialidade e rescisão. Protege tanto o contratante quanto o profissional."
        },
        {
          question: "Não encontrei o tipo de contrato que preciso. E agora?",
          answer: "Entre em contato conosco pelo e-mail contato@modelodecontrato.org descrevendo qual tipo de contrato você precisa. Priorizamos os modelos mais solicitados pelos usuários e estamos sempre expandindo nossa biblioteca. Também temos uma seção de Glossário Jurídico que pode ajudar a entender termos e cláusulas para customizar modelos existentes."
        }
      ]
    },
    {
      title: "Validade Jurídica e Segurança",
      icon: Shield,
      description: "Tire dúvidas sobre legalidade e documentação",
      faqs: [
        {
          question: "Os contratos gerados têm validade jurídica?",
          answer: "Sim, todos os nossos modelos seguem rigorosamente a legislação brasileira vigente (Código Civil de 2002, Lei do Inquilinato 8.245/91, CLT, legislação específica de cada tipo contratual). Nossos modelos são baseados em jurisprudência dos tribunais superiores e atualizados constantemente. Para validade plena, basta que o contrato seja assinado pelas partes e, quando exigido por lei (como imóveis), registrado em cartório."
        },
        {
          question: "Contrato precisa de testemunhas para ser válido?",
          answer: "Depende do tipo: Contratos simples entre pessoas físicas (como prestação de serviços ou empréstimo) não exigem testemunhas por lei, mas sua presença aumenta a segurança jurídica. Contratos de aluguel residencial não exigem testemunhas obrigatoriamente, mas é altamente recomendado (mínimo 2 testemunhas). Contratos de valores elevados, locação comercial, compra e venda de bens de alto valor devem sempre ter testemunhas para prevenir questionamentos futuros. Nossos modelos incluem campo para 2 testemunhas."
        },
        {
          question: "Quando o contrato precisa ser registrado em cartório?",
          answer: "São obrigatórios de registro em Cartório de Registro de Imóveis: compra e venda de imóveis, doação de imóveis, cessão de direitos sobre imóveis. Contratos de aluguel, prestação de serviços, empréstimo, comodato e trabalho autônomo NÃO precisam de registro em cartório para ter validade jurídica. O registro em cartório dá publicidade ao ato e segurança extra, mas não é obrigatório para a maioria dos contratos."
        },
        {
          question: "Preciso de advogado para usar os contratos?",
          answer: "Para contratos simples e diretos, não é obrigatório ter advogado. Nossos modelos são elaborados para serem autoexplicativos e seguros. Porém, RECOMENDAMOS consulta jurídica em casos de: valores muito altos (acima de R$ 50 mil), relações comerciais complexas, dúvidas sobre cláusulas específicas, conflitos de interesse entre as partes, situações atípicas não previstas no modelo padrão. A consulta preventiva evita problemas futuros."
        },
        {
          question: "Como garantir que o contrato é juridicamente correto?",
          answer: "Nossos contratos já são juridicamente corretos por padrão. Para garantir ainda mais: 1) Preencha todos os campos obrigatórios com dados reais e corretos, 2) Leia atentamente todas as cláusulas antes de assinar, 3) Certifique-se de que ambas as partes compreenderam os termos, 4) Inclua testemunhas quando recomendado, 5) Guarde cópias assinadas por ambas as partes, 6) Se for contrato de imóvel, leve ao cartório para registro. Em casos complexos, consulte um advogado para revisão personalizada."
        },
        {
          question: "Os modelos são atualizados quando a lei muda?",
          answer: "Sim! Temos uma equipe que monitora constantemente mudanças na legislação brasileira (novas leis, decisões do STF e STJ, normas regulamentadoras). Quando há alterações relevantes, atualizamos imediatamente os modelos afetados. Você sempre terá acesso à versão mais recente e alinhada com a legislação vigente, sem precisar se preocupar com desatualização."
        }
      ]
    },
    {
      title: "Como Usar a Plataforma",
      icon: Zap,
      description: "Aprenda a gerar e personalizar seus contratos",
      faqs: [
        {
          question: "Em quais formatos posso baixar o contrato?",
          answer: "Oferecemos 3 formatos profissionais: 1) PDF - formato universal, ideal para impressão e assinatura, não editável, mantém formatação perfeita. 2) Word/DOCX - totalmente editável no Microsoft Word, Google Docs ou LibreOffice, permite customização completa das cláusulas. 3) TXT - texto simples sem formatação, útil para copiar e colar em outros sistemas. Todos os formatos são gratuitos, sem marca d'água e sem limite de downloads."
        },
        {
          question: "Como funciona a validação automática de CPF e CNPJ?",
          answer: "Nosso sistema valida automaticamente CPF e CNPJ em tempo real enquanto você digita. A validação verifica: 1) Formato correto (pontos, traços, dígitos), 2) Quantidade de dígitos (11 para CPF, 14 para CNPJ), 3) Cálculo dos dígitos verificadores (algoritmo oficial da Receita Federal). Se o documento for inválido, você verá uma mensagem de erro imediata e não conseguirá prosseguir. Isso evita erros de digitação e garante que o contrato contenha documentos válidos."
        },
        {
          question: "Posso editar o modelo de contrato depois de baixar?",
          answer: "Sim, absolutamente! Se você baixar em formato Word (.docx), pode editar livremente: adicionar cláusulas personalizadas, remover seções que não se aplicam, ajustar valores e prazos, modificar redação. ATENÇÃO: Evite alterar cláusulas essenciais de validade jurídica (identificação das partes, objeto do contrato, obrigações principais). Se tiver dúvidas sobre edição segura, consulte um advogado para revisar suas alterações."
        },
        {
          question: "Posso imprimir e assinar o contrato normalmente?",
          answer: "Sim! Após baixar em PDF, você pode: 1) Imprimir em qualquer impressora (recomendamos 2 vias), 2) Coletar assinatura de todas as partes envolvidas, 3) Coletar assinatura de 2 testemunhas (se aplicável), 4) Rubricar todas as páginas para segurança extra. O contrato impresso e assinado tem validade jurídica completa. Guarde uma via original com cada parte. Se necessário, reconheça firmas em cartório para maior segurança."
        },
        {
          question: "Posso gerar contrato pelo celular?",
          answer: "Sim! Nosso gerador é 100% responsivo e funciona perfeitamente em smartphones e tablets. A interface se adapta automaticamente à tela menor, mantendo todas as funcionalidades: preenchimento de formulários, validação de documentos e download em PDF/Word/TXT. Você pode gerar, visualizar e compartilhar contratos direto do celular."
        },
        {
          question: "Como salvar um contrato para continuar depois?",
          answer: "Como não armazenamos dados, recomendamos: 1) Salve o contrato baixado no seu computador/nuvem (Google Drive, Dropbox), 2) Se precisar fazer alterações, baixe em Word e edite posteriormente, 3) Anote os dados preenchidos para gerar uma nova versão se necessário. Por questões de privacidade (LGPD), não mantemos histórico ou salvamento de rascunhos - todo processamento é local."
        }
      ]
    },
    {
      title: "Para Empreendedores e Empresas",
      icon: Building2,
      description: "Soluções contratuais para seu negócio",
      faqs: [
        {
          question: "Posso usar os contratos para minha empresa ou MEI?",
          answer: "Sim! Todos os contratos podem ser usados para fins comerciais e empresariais sem nenhuma restrição. Temos modelos específicos otimizados para: MEI (Microempreendedor Individual), Empresas LTDA, Profissionais Autônomos, Prestadores de Serviços, Parcerias Empresariais. Basta selecionar o modelo adequado e preencher com os dados da sua empresa (CNPJ, razão social, endereço comercial)."
        },
        {
          question: "Como fazer contrato de prestação de serviços entre empresas (B2B)?",
          answer: "Use nosso modelo 'Prestação de Serviços MEI' ou 'Prestação de Serviços Profissional'. No formulário, preencha: 1) Dados da empresa contratante (CNPJ, razão social, representante legal), 2) Dados da empresa contratada (seus dados empresariais), 3) Descrição detalhada do serviço, 4) Prazos de execução e entrega, 5) Valores e forma de pagamento (boleto, PIX, transferência), 6) Cláusulas específicas (confidencialidade, propriedade intelectual). Baixe em Word para customizar cláusulas complexas."
        },
        {
          question: "Posso incluir cláusula de confidencialidade (NDA)?",
          answer: "Sim! Nossos modelos de Prestação de Serviços e Parceria Empresarial já incluem cláusula padrão de confidencialidade que protege informações sensíveis compartilhadas durante a execução do contrato. Se precisar de um NDA mais robusto, baixe o contrato em Word e adicione cláusulas personalizadas sobre: prazo de confidencialidade, penalidades específicas por quebra, definição de informações confidenciais, exceções permitidas."
        },
        {
          question: "Como criar um contrato de parceria entre empresas?",
          answer: "Use nosso modelo 'Parceria Empresarial' que permite definir: dados das empresas parceiras, objetivo da parceria, divisão de responsabilidades e investimentos, participação nos lucros/prejuízos, prazo da parceria, cláusulas de rescisão e resolução de conflitos. Ideal para joint ventures, co-marketing, parcerias comerciais e projetos conjuntos. Recomendamos revisão por advogado em parcerias de alto valor."
        },
        {
          question: "Posso usar para contratar freelancers para minha empresa?",
          answer: "Perfeitamente! Use o modelo 'Prestação de Serviços Profissional Autônomo'. Ele permite: definir escopo do projeto, estabelecer prazo de entrega, acordar valores e forma de pagamento, incluir cláusulas sobre direitos autorais/propriedade intelectual, definir responsabilidades de cada parte. Protege tanto sua empresa quanto o profissional contratado, evitando caracterização de vínculo empregatício."
        }
      ]
    },
    {
      title: "Dúvidas Técnicas e Suporte",
      icon: HelpCircle,
      description: "Resolva problemas técnicos e tire dúvidas gerais",
      faqs: [
        {
          question: "O gerador funciona em quais navegadores?",
          answer: "Nosso gerador funciona perfeitamente nos navegadores modernos: Google Chrome (recomendado), Mozilla Firefox, Microsoft Edge, Safari (Mac/iOS), Opera, Brave. Recomendamos manter seu navegador atualizado para melhor experiência. Também funciona 100% em dispositivos móveis (Android e iOS)."
        },
        {
          question: "Por que o download não está funcionando?",
          answer: "Se o download não iniciar, verifique: 1) Bloqueador de pop-ups pode estar impedindo (permita pop-ups para nosso site), 2) Seu navegador está atualizado (atualize para última versão), 3) Há espaço suficiente no dispositivo, 4) Tente outro formato (se PDF não baixar, tente Word), 5) Limpe cache do navegador. Se o problema persistir, entre em contato com nosso suporte."
        },
        {
          question: "Como reportar um erro ou sugerir melhoria?",
          answer: "Adoramos feedback dos usuários! Entre em contato através do e-mail contato@modelodecontrato.org informando: tipo de erro encontrado ou sugestão de melhoria, tipo de contrato que estava gerando, navegador e dispositivo usado (se for erro técnico). Respondemos todas as mensagens e priorizamos correções e implementações com base no volume de solicitações."
        },
        {
          question: "Posso compartilhar o link do site com outras pessoas?",
          answer: "Sim, por favor! Compartilhe à vontade com amigos, colegas, clientes, familiares e nas redes sociais. Nosso objetivo é democratizar o acesso a contratos jurídicos de qualidade no Brasil. Quanto mais pessoas usarem, mais modelos novos conseguiremos criar. Também pode divulgar em grupos, fóruns e comunidades empresariais."
        },
        {
          question: "Vocês oferecem suporte jurídico personalizado?",
          answer: "Nosso site fornece modelos contratuais padronizados e informações gerais. NÃO oferecemos consultoria jurídica personalizada, análise de casos específicos ou representação legal. Para situações complexas, valores elevados ou dúvidas jurídicas específicas, recomendamos fortemente a contratação de um advogado. Nosso objetivo é facilitar o acesso a modelos de qualidade, mas não substituir orientação profissional quando necessária."
        }
      ]
    }
  ];

  const allFaqs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEO 
        title="FAQ - Perguntas Frequentes sobre Gerador de Contratos Online"
        description="Tire dúvidas sobre contratos jurídicos online: validade legal, tipos disponíveis, formatos PDF/Word, gerador gratuito. +20 perguntas e respostas completas."
        keywords="faq contratos online, dúvidas gerador contratos, contratos válidos juridicamente, perguntas modelo contrato aluguel, como criar contrato mei"
        canonical="https://modelodecontrato.org/faq"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <Breadcrumbs />
          
          <nav className="mb-6">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tudo o que você precisa saber sobre nosso gerador gratuito de contratos jurídicos online
            </p>
          </header>

          <div className="space-y-8 mb-12">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`category-${categoryIndex}-item-${faqIndex}`}
                      >
                        <AccordionTrigger className="text-left text-base font-medium hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="bg-primary/10 rounded-lg p-8 text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Não Encontrou sua Dúvida?
            </h2>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco e teremos prazer em ajudar você.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => navigate('/contato')}>
              Entrar em Contato
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default FAQ;