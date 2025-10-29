import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

import Breadcrumbs from "@/components/Breadcrumbs";

const FAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "Os contratos gerados são válidos juridicamente?",
      answer: "Sim, todos os nossos modelos seguem a legislação brasileira atual (Código Civil, Lei do Inquilinato, CLT) e são elaborados por profissionais do direito. Recomendamos revisão por advogado em casos complexos."
    },
    {
      question: "Preciso pagar para usar o gerador de contratos?",
      answer: "Não, nosso gerador de contratos é 100% gratuito. Crie quantos contratos precisar sem custo, sem cadastro e sem limitações."
    },
    {
      question: "Quais tipos de contratos posso gerar gratuitamente?",
      answer: "Oferecemos mais de 15 tipos: contrato de aluguel residencial, compra e venda de imóvel, prestação de serviços MEI, trabalho autônomo, locação comercial, doação, empréstimo, comodato e muitos outros."
    },
    {
      question: "Como funciona a validação automática de CPF e CNPJ?",
      answer: "Nosso sistema valida automaticamente CPF e CNPJ em tempo real, verificando formato correto e dígitos verificadores, garantindo dados válidos no seu contrato."
    },
    {
      question: "Em quais formatos posso baixar o modelo de contrato?",
      answer: "Baixe seu contrato em 3 formatos: PDF (ideal para impressão e assinatura), Word/DOCX (editável) e TXT (texto simples). Todos gratuitos e sem marca d'água."
    },
    {
      question: "Contrato de aluguel precisa de testemunhas?",
      answer: "Para contratos de aluguel residencial simples, testemunhas não são obrigatórias, mas recomendadas. Para locação comercial e valores altos, testemunhas são importantes para validade jurídica."
    },
    {
      question: "Quando o contrato precisa ser registrado em cartório?",
      answer: "Contratos de compra/venda e doação de imóveis devem ser registrados em cartório. Contratos de aluguel e prestação de serviços entre pessoas físicas não precisam de registro."
    },
    {
      question: "Posso editar o modelo de contrato depois de baixar?",
      answer: "Sim! Baixando em Word (.docx) você pode editar livremente. Cuidado para não alterar cláusulas essenciais que garantem a validade jurídica do documento."
    },
    {
      question: "Vocês armazenam meus dados pessoais?",
      answer: "Não armazenamos nenhum dado pessoal. Todas as informações são processadas localmente no seu navegador e excluídas após gerar o contrato, garantindo total privacidade."
    },
    {
      question: "Como garantir a qualidade jurídica dos contratos?",
      answer: "Nossos modelos são baseados na legislação brasileira vigente, jurisprudência dos tribunais e são atualizados constantemente. Incluímos avisos quando consulta jurídica é recomendada."
    },
    {
      question: "Posso usar os contratos para atividade comercial MEI?",
      answer: "Sim! Todos os contratos podem ser usados para fins pessoais e comerciais. Temos modelos específicos para MEI, prestação de serviços autônomo e atividades empresariais."
    },
    {
      question: "Que fazer se não encontrar o tipo de contrato que preciso?",
      answer: "Entre em contato pelo e-mail contato@modelodecontrato.org solicitando novos tipos. Priorizamos modelos mais solicitados pelos usuários."
    },
    {
      question: "Contratos gerados valem para todo o Brasil?",
      answer: "Sim, nossos modelos seguem a legislação federal brasileira e são válidos em todos os estados. Algumas especificidades estaduais podem exigir adaptações menores."
    },
    {
      question: "Como fazer um contrato de aluguel simples?",
      answer: "Use nosso gerador: selecione 'Locação Residencial', preencha dados do locador e locatário, endereço do imóvel, valor e prazo. Em 30 segundos seu contrato estará pronto para baixar."
    },
    {
      question: "Posso gerar contrato de prestação de serviços para MEI?",
      answer: "Sim! Temos modelo específico para MEI que inclui cláusulas adequadas para microempreendedores individuais, forma de pagamento, prazo e descrição detalhada dos serviços."
    },
    {
      question: "Como criar contrato de compra e venda de imóvel?",
      answer: "Selecione 'Compra e Venda', informe dados do vendedor e comprador, descrição completa do imóvel, valor, forma de pagamento e data de entrega. Lembre-se de registrar em cartório."
    },
    {
      question: "Preciso de advogado para usar os contratos?",
      answer: "Para contratos simples não é obrigatório, mas recomendamos consulta jurídica em casos complexos, valores altos ou quando há dúvidas sobre cláusulas específicas."
    },
    {
      question: "Os modelos são atualizados com mudanças na lei?",
      answer: "Sim, monitoramos constantemente mudanças na legislação brasileira (Lei do Inquilinato, Código Civil, normas do MEI) e atualizamos os modelos regularmente."
    },
    {
      question: "Posso imprimir e assinar o contrato normalmente?",
      answer: "Sim! Após baixar em PDF, você pode imprimir e coletar assinaturas normalmente. O documento tem validade jurídica completa quando assinado pelas partes."
    },
    {
      question: "Como funciona o gerador para iniciantes?",
      answer: "É muito simples: 1) Escolha o tipo de contrato, 2) Preencha o formulário com seus dados, 3) Baixe em PDF/Word. Interface intuitiva, sem complicações técnicas."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
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

          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nosso gerador de contratos.
            </p>
          </header>

          <section className="mb-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

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