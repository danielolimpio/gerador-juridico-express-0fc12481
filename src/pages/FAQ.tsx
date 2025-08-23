import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import AdBanner from "@/components/AdBanner";

const FAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "Os contratos gerados são válidos juridicamente?",
      answer: "Sim, todos os nossos modelos seguem a legislação brasileira atual e são elaborados por profissionais do direito. No entanto, recomendamos sempre a revisão por um advogado antes da assinatura, especialmente em casos mais complexos."
    },
    {
      question: "Preciso pagar para usar o gerador?",
      answer: "Não, nosso gerador de contratos é completamente gratuito. Você pode criar quantos contratos precisar sem nenhum custo."
    },
    {
      question: "Quais tipos de contratos posso gerar?",
      answer: "Oferecemos mais de 15 tipos de contratos, incluindo compra e venda, locação residencial e comercial, prestação de serviços, doação, empréstimo, comodato e muitos outros."
    },
    {
      question: "Como funciona a validação de CPF e CNPJ?",
      answer: "Nosso sistema valida automaticamente os números de CPF e CNPJ digitados, verificando se seguem o formato correto e se os dígitos verificadores estão corretos."
    },
    {
      question: "Posso baixar o contrato em quais formatos?",
      answer: "Você pode baixar seu contrato em três formatos: PDF (recomendado para impressão), Word (para edição) e TXT (texto simples)."
    },
    {
      question: "Preciso de testemunhas para os contratos?",
      answer: "Depende do tipo de contrato. Alguns contratos como empréstimo entre pessoas físicas são recomendadas testemunhas. Para contratos de imóveis, o registro em cartório é obrigatório."
    },
    {
      question: "Os contratos precisam ser registrados em cartório?",
      answer: "Alguns contratos sim, especialmente aqueles envolvendo imóveis (compra/venda, doação de imóveis). Contratos simples entre pessoas físicas geralmente não precisam de registro."
    },
    {
      question: "Posso editar o contrato depois de gerado?",
      answer: "Sim, se você baixar em formato Word (.docx), poderá editar o contrato. No entanto, seja cuidadoso para não alterar cláusulas importantes que garantem a validade jurídica."
    },
    {
      question: "Vocês guardam meus dados pessoais?",
      answer: "Não armazenamos nenhum dado pessoal inserido nos formulários. Todas as informações são processadas localmente no seu navegador e descartadas após a geração do contrato."
    },
    {
      question: "Como posso ter certeza da qualidade dos contratos?",
      answer: "Nossos modelos são baseados na jurisprudência brasileira e são constantemente atualizados. Além disso, incluímos avisos sobre quando é recomendada a consulta a um advogado."
    },
    {
      question: "Posso usar os contratos para fins comerciais?",
      answer: "Sim, todos os contratos gerados podem ser usados tanto para fins pessoais quanto comerciais, sempre respeitando a legislação aplicável."
    },
    {
      question: "E se eu precisar de um tipo de contrato que não está disponível?",
      answer: "Entre em contato conosco através do e-mail contato@modelosdecontratos.com.br. Estamos sempre expandindo nossa biblioteca de modelos baseados na demanda dos usuários."
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
        title="FAQ - Perguntas Frequentes sobre Contratos Jurídicos"
        description="Tire suas dúvidas sobre contratos jurídicos, validade legal, tipos de contratos, formatos de download e muito mais. Respostas completas e atualizadas."
        keywords="faq contratos, dúvidas contratos jurídicos, contratos válidos, perguntas frequentes modelos contratos"
        canonical="https://modelosdecontratos.com.br/faq"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-8">
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

          <AdBanner />

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

          <AdBanner />

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