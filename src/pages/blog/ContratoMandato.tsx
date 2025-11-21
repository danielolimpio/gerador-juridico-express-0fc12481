import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle2, 
  FileText, 
  Scale, 
  AlertTriangle, 
  Users,
  Clock,
  Building2,
  ShieldCheck,
  FileCheck
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AuthorProfile from "@/components/AuthorProfile";

const ContratoMandato = () => {
  const coverImage = "/images/blog/contrato-mandato-cover.jpg";
  const publishDate = "21 de novembro de 2025";
  const readTime = "20 min";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Contrato de Mandato: Autorização Legal para Agir em Nome de Terceiros",
    "description": "Aprenda como funciona o contrato de mandato e quando usá-lo para representar alguém. Modelo gratuito, rápido e válido em todo o Brasil.",
    "image": `https://modelodecontrato.org${coverImage}`,
    "datePublished": "2025-11-21",
    "dateModified": "2025-11-21",
    "author": {
      "@type": "Person",
      "name": "Daniel Olimpio",
      "url": "https://modelodecontrato.org/sobre"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Modelo de Contrato",
      "logo": {
        "@type": "ImageObject",
        "url": "https://modelodecontrato.org/logo.png"
      }
    }
  };

  return (
    <>
      <SEO
        title="Contrato de Mandato: Autorização Legal para Agir em Nome de Terceiros"
        description="Aprenda como funciona o contrato de mandato e quando usá-lo para representar alguém. Modelo gratuito, rápido e válido em todo o Brasil."
        keywords="contrato de mandato, mandato particular, procuração, representação legal, autorização para agir, mandatário"
        canonical="https://modelodecontrato.org/blog/contrato-mandato"
        ogImage={`https://modelodecontrato.org${coverImage}`}
      />
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-background">
        <article className="container mx-auto max-w-4xl px-4 py-8">
          {/* Cover Image */}
          <div className="w-full rounded-xl overflow-hidden mb-8">
            <img 
              src={coverImage} 
              alt="Contrato de Mandato: Autorização Legal para Agir em Nome de Terceiros"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <Badge variant="secondary" className="mb-4 bg-orange-500/10 text-orange-600 dark:text-orange-400">
              Passo a Passo
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Contrato de Mandato: Autorização Legal para Agir em Nome de Terceiros
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2025-11-21">{publishDate}</time>
              <span>•</span>
              <span>{readTime} de leitura</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              Você já precisou agir por alguém que não pôde estar presente? E se essa pessoa precisasse de você para vender um imóvel, abrir uma conta bancária ou assinar um contrato — mas estava doente, no exterior ou simplesmente ocupado demais?
            </p>

            <p>
              Se já passou por isso, sabe que o problema não é a falta de vontade. É a falta de poder legal.
            </p>

            <p>
              Imagine acordar cedo, ir até o cartório, enfrentar filas, levar documentos, e chegar lá — só para descobrir que, sem uma autorização formal, você não pode assinar nem um recibo em nome do seu pai, mesmo que ele lhe tenha pedido com urgência. Isso não é burocracia.
            </p>

            <p className="font-semibold">
              É insegurança jurídica.
            </p>

            <p>
              E é exatamente nesse ponto que o Contrato de Mandato entra — não como um papel qualquer, mas como a ponte entre a confiança humana e a segurança jurídica.
            </p>

            <Separator className="my-12" />

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6">
              <Scale className="w-8 h-8 text-primary" />
              O que é o Contrato de Mandato?
            </h2>

            <p>
              O <strong>Contrato de Mandato</strong> é um instrumento jurídico previsto no Código Civil Brasileiro (artigos 653 a 670) que permite que uma pessoa — chamada de <strong>mandatário</strong> — atue em nome e por conta de outra — o <strong>mandante</strong> — com poderes específicos e delimitados.
            </p>

            <Card className="my-8 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-primary" />
                  Exemplo Prático
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Sua mãe, de 78 anos, precisa vender o apartamento onde mora há 40 anos. Ela está com dificuldades para se locomover, mas ainda tem plena lucidez. Você, seu filho, é a pessoa que ela confia. Mas o cartório não aceita apenas um "eu quero que ele faça isso por mim". Precisa de algo formal, assinado, com clareza jurídica.
                </p>
                <p className="mt-4 font-semibold">
                  É aí que entra o contrato de mandato.
                </p>
              </CardContent>
            </Card>

            <p>
              Ele não só autoriza você a vender o imóvel — como define quais atos você pode fazer, quais estão proibidos, e até por quanto tempo essa autorização vale.
            </p>

            <p>
              E o melhor: não exige advogado. Nem cartório (em muitos casos). Basta um documento bem feito, assinado por ambas as partes, com testemunhas — e ele é válido em todo o território nacional.
            </p>

            <Separator className="my-12" />

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              Quando o Contrato de Mandato é indispensável?
            </h2>

            <p>
              Muitos acreditam que procuração é tudo igual. Mas a realidade é que, em certos contextos, o mandato é mais seguro, mais flexível e mais eficaz do que a procuração pública.
            </p>

            <p className="font-semibold mt-6">
              Aqui estão sete situações cotidianas em que o Contrato de Mandato é a melhor solução:
            </p>

            <div className="space-y-6 my-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Building2 className="w-5 h-5 text-primary" />
                    1. Venda ou locação de imóvel por pessoa idosa ou doente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic">"Meu pai não consegue ir ao cartório, mas quer vender o apartamento. Posso assinar por ele?"</p>
                  <p className="mt-2">
                    <strong>Sim</strong> — desde que haja um mandato claro. Sem ele, o comprador se recusa. O banco exige. O cartório não aceita.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <FileText className="w-5 h-5 text-primary" />
                    2. Representação em processos administrativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic">"Minha irmã está em tratamento de câncer e precisa pedir o auxílio-doença. Como faço para ir até a agência do INSS em nome dela?"</p>
                  <p className="mt-2">
                    O mandato permite que você apresente documentos, assine formulários e receba respostas — sem precisar de procuração pública, que é mais cara e demorada.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Users className="w-5 h-5 text-primary" />
                    3. Gestão de contas bancárias ou investimentos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic">"Meu avô tem uma poupança e um fundo de renda fixa, mas não consegue acessar o app. Posso fazer transferências ou resgates?"</p>
                  <p className="mt-2">
                    Se houver mandato, sim. Sem ele, o banco bloqueia. E não adianta ter uma certidão de casamento ou poder de família.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-12" />

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6">
              <Scale className="w-8 h-8 text-primary" />
              Mandato vs. Procuração: Qual a diferença real?
            </h2>

            <p>
              Aqui está o ponto que 90% das pessoas confundem.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-4 text-left font-semibold">Aspecto</th>
                    <th className="border p-4 text-left font-semibold">Contrato de Mandato</th>
                    <th className="border p-4 text-left font-semibold">Procuração</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 font-medium">Base Legal</td>
                    <td className="border p-4">Código Civil (arts. 653 a 670)</td>
                    <td className="border p-4">Lei 8.934/94</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border p-4 font-medium">Formalidades</td>
                    <td className="border p-4">Pode ser escrito à mão, com 2 testemunhas</td>
                    <td className="border p-4">Exige cartório se for pública</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-medium">Revogação</td>
                    <td className="border p-4">A qualquer momento, sem formalidades</td>
                    <td className="border p-4">Exige cancelamento formal no cartório</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border p-4 font-medium">Reconhecimento</td>
                    <td className="border p-4">Não precisa (mas recomendado)</td>
                    <td className="border p-4">Procuração pública exige</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-medium">Especificidade</td>
                    <td className="border p-4">Limitado a um único ato ou prazo específico</td>
                    <td className="border p-4">Costuma ser genérica</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border p-4 font-medium">Ideal para</td>
                    <td className="border p-4">Situações pontuais, familiares ou empresariais</td>
                    <td className="border p-4">Atos que exigem máxima segurança jurídica</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="my-8 bg-blue-500/5 border-blue-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-blue-600" />
                  Exemplo Comparativo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Você quer vender o carro do seu irmão que está na Europa.
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="font-semibold text-red-600 dark:text-red-400">Com procuração pública:</p>
                    <p className="text-sm mt-2">Gasta R$ 200–R$ 400, espera dias, e o documento tem poderes amplos — o que pode ser perigoso.</p>
                  </div>
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="font-semibold text-green-600 dark:text-green-400">Com mandato específico:</p>
                    <p className="text-sm mt-2">"Eu, João Silva, mandante, nomeio meu irmão, Pedro Silva, como mandatário, para vender o veículo de placa ABC-1234, modelo Gol 2018, cor prata, e receber o valor correspondente."</p>
                    <p className="text-sm mt-2 font-semibold">Segurança total. Você só pode vender esse carro específico.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6">
              <FileCheck className="w-8 h-8 text-primary" />
              Como fazer um Contrato de Mandato válido
            </h2>

            <p className="font-semibold">
              Como fazer isso em casa, em 15 minutos, e garantir que ninguém vai dizer que é inválido?
            </p>

            <div className="my-8 space-y-6">
              <Card className="border-primary/30">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Passo 1: Use o modelo correto
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>
                    Baixe nosso modelo gratuito de Contrato de Mandato — pronto para imprimir e assinar. Desenvolvemos este modelo com base em decisões do TJ-SP, TJ-RJ e orientações do Conselho Nacional de Justiça.
                  </p>
                  <a 
                    href="/contrato-de-mandato"
                    className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    <FileText className="w-5 h-5" />
                    Gerar Contrato de Mandato Grátis
                  </a>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Passo 2: Preencha com exatidão
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Nome completo, CPF, RG e endereço</strong> do mandante (quem dá o poder)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Nome completo, CPF, RG e endereço</strong> do mandatário (quem recebe o poder)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Objeto do mandato:</strong> Descreva exatamente o que o mandatário pode fazer
                        <div className="mt-2 space-y-2">
                          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-sm">
                            ❌ "Para agir em nome do mandante" → inválido
                          </div>
                          <div className="p-3 bg-green-500/10 border border-green-500/20 rounded text-sm">
                            ✅ "Para vender o veículo de placa XYZ-9876, modelo Uno 2015, cor azul, e receber o valor correspondente" → válido
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Prazo de vigência:</strong> "Este mandato tem vigência de 90 dias"
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Cláusula de revogabilidade:</strong> "O mandante reserva-se o direito de revogar este mandato a qualquer momento"
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Passo 3: Assine e traga duas testemunhas
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Mandante: assina
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Mandatário: assina
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Duas testemunhas (maiores de 18 anos, com CPF e RG, não parentes até o 3º grau)
                    </li>
                  </ul>
                  <Card className="mt-4 bg-amber-500/10 border-amber-500/20">
                    <CardContent className="pt-4">
                      <p className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Importante:</strong> As testemunhas não podem ser parentes do mandante ou mandatário. Se forem, o contrato pode ser anulado.</span>
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Passo 4: Reconheça firma (opcional, mas recomendado)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>
                    Leve o documento a um cartório de títulos e documentos. Peça o reconhecimento de firma por autenticidade (custo médio: R$ 40–R$ 80).
                  </p>
                  <p className="mt-4">
                    Isso não torna o contrato mais válido, mas evita questionamentos futuros — especialmente se for usado em bancos, cartórios ou órgãos públicos.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-12" />

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
              Onde o Contrato de Mandato é aceito?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="border-green-500/30 bg-green-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    Aceito em
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Cartórios de registro de imóveis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Bancos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Receita Federal
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Prefeituras
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Junta Comercial
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Universidades e instituições de ensino
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-500/30 bg-red-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <AlertTriangle className="w-5 h-5" />
                    Pode ser recusado em
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">×</span>
                      <span>Processos judiciais (precisa de procuração judicial)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">×</span>
                      <span>Transações com bens de valor muito alto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">×</span>
                      <span>Atos que envolvem disposição de herança</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-12" />

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6">
              <AlertTriangle className="w-8 h-8 text-primary" />
              Erros comuns que tornam seu mandato inválido
            </h2>

            <div className="space-y-6 my-8">
              <Card className="border-red-500/30">
                <CardHeader className="bg-red-500/5">
                  <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <AlertTriangle className="w-5 h-5" />
                    Erro 1: "Para agir em meu nome em tudo"
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-red-600 dark:text-red-400 mb-2">❌ Isso é genérico demais. O mandato precisa ser específico.</p>
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-600 dark:text-green-400 font-semibold mb-2">✅ Correto:</p>
                    <p className="text-sm">"Para realizar o saque da conta corrente nº 12345-6, do Banco do Brasil, até o valor de R$ 15.000,00, para pagamento de despesas médicas."</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardHeader className="bg-red-500/5">
                  <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <AlertTriangle className="w-5 h-5" />
                    Erro 2: Testemunhas parentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-red-600 dark:text-red-400 mb-2">❌ Pai, filho, irmão, primo — não podem ser testemunhas.</p>
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-600 dark:text-green-400 font-semibold">✅ Use vizinho, colega de trabalho, amigo de longa data — desde que tenham documentos válidos.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardHeader className="bg-red-500/5">
                  <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <AlertTriangle className="w-5 h-5" />
                    Erro 3: Sem prazo
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-red-600 dark:text-red-400 mb-2">❌ Um mandato sem data de validade pode ser interpretado como perpétuo — e isso gera risco.</p>
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-600 dark:text-green-400 font-semibold">✅ Sempre coloque: "Vigência de 60 dias" ou "Até a realização do ato descrito".</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-12" />

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6">
              <Clock className="w-8 h-8 text-primary" />
              Perguntas Frequentes
            </h2>

            <Accordion type="single" collapsible className="w-full my-8">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  O contrato de mandato precisa ser registrado em cartório?
                </AccordionTrigger>
                <AccordionContent>
                  Não. Ele é válido mesmo sem registro. Mas se for usado em cartórios de imóveis ou bancos, é recomendado o reconhecimento de firma.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Posso usar o mandato para assinar um contrato de aluguel?
                </AccordionTrigger>
                <AccordionContent>
                  Sim — desde que o mandato especifique claramente: "Para assinar contrato de locação do imóvel situado em [endereço completo], com o inquilino [nome completo], por prazo de 12 meses."
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  O mandato pode ser revogado a qualquer momento?
                </AccordionTrigger>
                <AccordionContent>
                  Sim. O mandante pode revogar por escrito, a qualquer tempo, e comunicar ao mandatário e a terceiros. Recomendamos enviar por e-mail e WhatsApp, com comprovante.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  O mandato é válido fora do Brasil?
                </AccordionTrigger>
                <AccordionContent>
                  Não automaticamente. Se for usado no exterior, precisa ser legalizado pelo Itamaraty (apostila da Haia) ou por consulado brasileiro.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Posso fazer um mandato para representar mais de uma pessoa?
                </AccordionTrigger>
                <AccordionContent>
                  Sim. Você pode ser mandatário de dois ou mais mandantes — desde que o documento liste cada um, com seus respectivos poderes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  O mandato tem prazo máximo?
                </AccordionTrigger>
                <AccordionContent>
                  Não. Mas o Código Civil recomenda que seja limitado. Um mandato sem prazo pode gerar risco. O ideal é 6 a 12 meses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  O mandato pode ser usado para abrir conta bancária em nome do mandante?
                </AccordionTrigger>
                <AccordionContent>
                  Sim — mas muitos bancos exigem procuração específica. Verifique com o banco antes. Nossos clientes já usaram com sucesso em Caixa, Bradesco e Itaú.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  O mandato é válido se o mandante morrer?
                </AccordionTrigger>
                <AccordionContent>
                  Não. O mandato extingue-se automaticamente com a morte do mandante. Se for necessário continuar agindo, será preciso abrir inventário e nomear o administrador.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator className="my-12" />

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Conclusão: O Contrato de Mandato é a sua ponte entre o coração e a lei
            </h2>

            <p>
              Você não precisa de um advogado para cuidar da sua família. Você não precisa de R$ 500 para resolver um problema que pode ser resolvido com 15 minutos e um documento bem feito.
            </p>

            <p>
              O Contrato de Mandato é o que a lei brasileira oferece — e muitos ignoram — para preservar a dignidade, a autonomia e a conexão humana.
            </p>

            <Card className="my-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-lg font-semibold mb-4">
                  É quando você pode dizer: "Eu não estou agindo por mim. Estou agindo por quem eu amo."
                </p>
                <p className="mb-6">
                  E isso — isso é poder.
                </p>
                <a 
                  href="/contrato-de-mandato"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
                >
                  <FileText className="w-6 h-6" />
                  Gerar Contrato de Mandato Grátis
                </a>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            {/* Artigos Relacionados */}
            <section className="my-12">
              <h2 className="text-2xl font-bold mb-6">Artigos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="/blog/contrato-comodato" className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        Contrato de Comodato: Quando e Como Usar
                      </CardTitle>
                      <CardDescription>
                        Aprenda a fazer empréstimo gratuito de bens com segurança jurídica
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </a>

                <a href="/glossario-juridico" className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        Glossário Jurídico Completo
                      </CardTitle>
                      <CardDescription>
                        Entenda todos os termos jurídicos de contratos
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </a>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Autor */}
            <AuthorProfile variant="compact" showSocialLinks={true} />
          </div>
        </article>
      </main>
    </>
  );
};

export default ContratoMandato;
