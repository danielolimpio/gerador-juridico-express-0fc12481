import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AuthorProfile from "@/components/AuthorProfile";
import { 
  Store, 
  TrendingUp, 
  ShieldAlert, 
  Target, 
  Users, 
  DollarSign,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  Scale,
  Calendar,
  Handshake
} from "lucide-react";

const ContratoFranquia = () => {
  const relatedArticles: RelatedArticle[] = [
    {
      title: "Contrato de Comodato: Quando e Como Usar para Empréstimo Gratuito de Bens",
      description: "Aprenda a formalizar empréstimos de bens como carros e ferramentas sem cobrar.",
      slug: "contrato-comodato",
      coverImage: "/images/blog/contrato-comodato-cover.jpg",
      category: "Para Empreendedores"
    },
    {
      title: "Contrato de Mandato: Autorização Legal para Agir em Nome de Terceiros",
      description: "Saiba quando e como usar um contrato de mandato para representação legal.",
      slug: "contrato-mandato",
      coverImage: "/images/blog/contrato-mandato-cover.jpg",
      category: "Passo a Passo"
    },
    {
      title: "Contrato de Locação de Veículo: Regras para Alugar Carros",
      description: "Proteja seu patrimônio com um contrato de locação de veículo seguro e válido.",
      slug: "contrato-locacao-veiculo",
      coverImage: "/images/blog/contrato-locacao-veiculo-cover.jpg",
      category: "Passo a Passo"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Contrato de Franquia: Guia Completo para Empreendedores que Querem Expandir",
    description: "Descubra os pontos essenciais de um contrato de franquia. Proteja seu negócio com modelo juridicamente válido e pronto para download.",
    image: "https://modelodecontrato.org/images/blog/contrato-franquia-cover.jpg",
    author: {
      "@type": "Person",
      name: "Daniel Olimpio",
      url: "https://modelodecontrato.org/sobre"
    },
    publisher: {
      "@type": "Organization",
      name: "Modelo de Contrato",
      logo: {
        "@type": "ImageObject",
        url: "https://modelodecontrato.org/logo.png"
      }
    },
    datePublished: "2025-11-21",
    dateModified: "2025-11-21"
  };

  return (
    <>
      <SEO
        title="Contrato de Franquia: Guia Completo para Empreendedores que Querem Expandir"
        description="Descubra os pontos essenciais de um contrato de franquia. Proteja seu negócio com modelo juridicamente válido e pronto para download."
        keywords="contrato de franquia, franquia, empreendedorismo, modelo de contrato, ABF, DFP, royalties"
        canonical="https://modelodecontrato.org/blog/contrato-franquia"
        ogImage="https://modelodecontrato.org/images/blog/contrato-franquia-cover.jpg"
      />
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-background">
        <article className="container mx-auto max-w-4xl px-4 py-12">
          {/* Cover Image */}
          <div className="w-full rounded-xl overflow-hidden mb-8">
            <img 
              src="/images/blog/contrato-franquia-cover.jpg" 
              alt="Contrato de Franquia: Guia Completo para Empreendedores que Querem Expandir"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Header */}
          <header className="mb-12">
            <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Store className="w-3 h-3 mr-1" />
              Para Empreendedores
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Contrato de Franquia: Guia Completo para Empreendedores que Querem Expandir
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2025-11-21">21 de novembro de 2025</time>
              <span>•</span>
              <span>25 min de leitura</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            {/* Introduction */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Você já sonhou em ter um negócio próprio — mas não quer começar do zero?
            </p>

            <p className="mb-6">
              Imagina:
            </p>

            <ul className="space-y-2 mb-8">
              <li>Você não precisa inventar um cardápio.</li>
              <li>Não precisa criar uma marca do zero.</li>
              <li>Não precisa treinar equipe sem manual.</li>
              <li>Não precisa gastar anos construindo confiança no mercado.</li>
              <li>Você apenas liga o sistema.</li>
            </ul>

            <p className="mb-6">
              E funciona.
            </p>

            <p className="mb-6">
              Esse é o apelo poderoso da franquia.
            </p>

            <p className="mb-6">
              E é também o maior erro que muitos cometem.
            </p>

            <p className="mb-8">
              Porque, na pressa de "entrar no negócio pronto", milhares de empreendedores assinam contratos sem entender os termos — e acabam presos em obrigações ocultas, taxas abusivas, ou até em marcas que desaparecem no primeiro ano.
            </p>

            <p className="mb-8">
              Você não quer ser mais um número na estatística. Quer ser o empreendedor inteligente que entende o que está assinando — antes de dar o primeiro passo.
            </p>

            <Card className="bg-primary/5 border-primary/20 mb-12">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed">
                  Este é o <strong>Contrato de Franquia: Guia Completo para Empreendedores que Querem Expandir</strong> — escrito não por advogados que vivem em escritórios, mas por quem já ajudou mais de 300 franqueados a não cair em armadilhas.
                </p>
              </CardContent>
            </Card>

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-16 mb-8">
              <Store className="w-8 h-8 text-primary" />
              O que é um Contrato de Franquia?
            </h2>

            <p className="mb-6">
              Um <strong>Contrato de Franquia: Guia Completo para Empreendedores que Querem Expandir</strong> não é um simples acordo de uso de marca.
            </p>

            <p className="mb-6">
              É um <strong>contrato de operação</strong>.
            </p>

            <p className="mb-6">
              Você não está comprando um nome. Está comprando um sistema completo:
            </p>

            <ul className="space-y-2 mb-8">
              <li>O produto ou serviço</li>
              <li>O modelo de negócio</li>
              <li>O treinamento</li>
              <li>O suporte contínuo</li>
              <li>O marketing centralizado</li>
              <li>O padrão de atendimento</li>
              <li>O sistema de gestão</li>
            </ul>

            <p className="mb-6">
              E, em troca, você paga:
            </p>

            <ul className="space-y-2 mb-8">
              <li>Uma taxa de adesão (entrada)</li>
              <li>Taxa de franquia (mensal)</li>
              <li>Taxa de publicidade (fundo de marca)</li>
              <li>Pode haver royalties, comissões, exigência de fornecedores exclusivos…</li>
            </ul>

            <Card className="bg-blue-500/5 border-blue-500/20 mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Analogia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Imagine alugar uma casa com móveis.
                </p>
                <p className="mb-4">
                  A franqueadora te dá a casa, os móveis, o manual de como usar tudo, e até o vizinho que te ajuda.
                </p>
                <p>
                  Mas se você pintar a parede de roxo, trocar o fogão, ou deixar de pagar a taxa de condomínio… Ela pode te expulsar. E você perde tudo o que investiu.
                </p>
              </CardContent>
            </Card>

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-16 mb-8">
              <TrendingUp className="w-8 h-8 text-primary" />
              Quando o Contrato de Franquia é a melhor escolha?
            </h2>

            <p className="mb-8">
              Não é para todo mundo. Mas, quando encaixa, é a forma mais segura de escalar um negócio no Brasil.
            </p>

            <div className="grid gap-6 mb-12">
              <Card className="bg-green-500/5 border-green-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    Cenário 1: Você tem capital, mas nenhuma experiência
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic mb-4">
                    "Quero abrir um negócio, mas não sei como gerenciar estoque, treinar equipe ou lidar com reclamações."
                  </p>
                  <p>
                    A franquia te dá o manual. O treinamento. O suporte. Você só precisa ser disciplinado.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-500/5 border-green-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    Cenário 2: Você quer entrar rápido em mercado saturado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic mb-4">
                    "Quero abrir uma lanchonete em São Paulo, mas já tem 200 no bairro."
                  </p>
                  <p>
                    Se você for uma franquia reconhecida, você tem reconhecimento imediato. O cliente já confia. Você não precisa convencer ninguém.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-500/5 border-green-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    Cenário 3: Você quer escalar sem riscos de inovação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic mb-4">
                    "Quero crescer, mas não quero perder tempo criando app, sistema de entrega ou logística."
                  </p>
                  <p>
                    A franquia já tem tudo. Você só precisa replicar.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-16 mb-8">
              <ShieldAlert className="w-8 h-8 text-primary" />
              Os 7 erros que 9 em cada 10 franqueados cometem
            </h2>

            <p className="mb-8">
              Aqui está a verdade que ninguém te conta: <strong>90% dos fracassos em franquias não acontecem por falta de público. Acontecem por má interpretação do contrato.</strong>
            </p>

            <div className="space-y-8 mb-12">
              <Card className="bg-red-500/5 border-red-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    Erro 1: Acreditar que "tudo é fixo"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Muitos pensam: <em>"O contrato é padrão. Não dá para negociar."</em>
                  </p>
                  <p className="mb-4">
                    <strong>Falso.</strong>
                  </p>
                  <p className="mb-4">
                    A Lei da Franquia (Lei nº 8.955/94) diz que o contrato é livremente negociado.
                  </p>
                  <div className="bg-background/50 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold mb-2">💡 Dica prática:</p>
                    <p className="text-sm">
                      Antes de assinar, faça uma lista de 3 cláusulas que você quer mudar. Ex: "Quero poder comprar o café de outro fornecedor" ou "Quero reduzir a taxa de publicidade para 2% ao invés de 5%."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-500/5 border-red-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    Erro 2: Ignorar a "taxa de publicidade"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Você paga R$ 500 por mês de taxa de franquia. Mas a taxa de publicidade? R$ 1.200.
                  </p>
                  <p className="mb-4">
                    E sabe onde esse dinheiro vai? Em campanhas nacionais… que nunca chegam ao seu bairro.
                  </p>
                  <p className="font-semibold">Pergunte:</p>
                  <ul className="space-y-1 mt-2">
                    <li>• Quem define os gastos?</li>
                    <li>• Existe relatório mensal?</li>
                    <li>• Posso ver o extrato?</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-red-500/5 border-red-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    Erro 3: Não pedir o COF (Circular de Oferta de Franquia)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    O COF é obrigatório por lei. É o "prontuário médico" da franquia.
                  </p>
                  <p className="mb-4">
                    Ele contém: Histórico da empresa, número de unidades abertas e fechadas nos últimos 5 anos, litígios judiciais, taxas e custos reais, estrutura de suporte.
                  </p>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                    <p className="font-semibold text-yellow-700 dark:text-yellow-400">
                      ⚠️ Se a franqueadora não entregar o COF com 10 dias de antecedência — o contrato é nulo. Sim. Você pode anular e pedir devolução de tudo.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-500/5 border-red-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    Erro 4: Assinar sem entender exclusividade territorial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Você paga R$ 80 mil de entrada para abrir uma loja em um shopping. Mas… a franqueadora abre outra loja na mesma fila, 10 metros distante.
                  </p>
                  <p className="mb-4">
                    Isso é legal — se o contrato permitir.
                  </p>
                  <p className="font-semibold mb-2">Pergunte:</p>
                  <ul className="space-y-1">
                    <li>• Qual é o raio de exclusividade?</li>
                    <li>• É 500 metros? 1 km?</li>
                    <li>• Vale para shopping, rua, bairro?</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-red-500/5 border-red-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    Erro 5: Achar que "o suporte é infinito"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A franqueadora promete: <em>"Temos equipe de suporte 24/7."</em>
                  </p>
                  <p className="mb-4">
                    Na prática? Você liga. Atende um atendente. Ele te passa para outro. Depois de 3 dias, você recebe um e-mail genérico: "Consulte o manual."
                  </p>
                  <div className="bg-background/50 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold mb-2">💡 Teste:</p>
                    <p className="text-sm">
                      Ligue para 3 franqueados da mesma marca. Pergunte: "Você já teve apoio real da matriz quando teve problema?" Se a maioria disser "não" — fuja.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-500/5 border-red-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    Erro 6: Não saber o que acontece se você quiser sair
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    E se, após 2 anos, você perceber que o negócio não dá lucro?
                  </p>
                  <p className="mb-4">
                    Você pode vender? Precisa de autorização? A franqueadora tem direito de preferência? Quanto ela paga pelo seu investimento?
                  </p>
                  <p>
                    Muitos contratos dizem: "Em caso de rescisão, o franqueado perde todos os direitos e investimentos." <strong>Isso é ilegal.</strong>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-red-500/5 border-red-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    Erro 7: Não ter um advogado especializado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Você não precisa de um "advogado de família". Precisa de um especialista em franquias.
                  </p>
                  <div className="bg-background/50 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold mb-2">💡 Dica:</p>
                    <p className="text-sm">
                      Contrate um profissional por hora — não por contrato. Custa R$ 300–R$ 600. Pode salvar você de perdas de R$ 100 mil.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-16 mb-8">
              <Scale className="w-8 h-8 text-primary" />
              Mandato vs. Procuração: Qual a diferença?
            </h2>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left p-4 font-semibold bg-muted/50">Aspecto</th>
                    <th className="text-left p-4 font-semibold bg-muted/50">Contrato de Franquia</th>
                    <th className="text-left p-4 font-semibold bg-muted/50">Negócio Autônomo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Tempo para abrir</td>
                    <td className="p-4">15 a 45 dias</td>
                    <td className="p-4">3 a 12 meses</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Investimento inicial</td>
                    <td className="p-4">R$ 50 mil a R$ 500 mil</td>
                    <td className="p-4">R$ 20 mil a R$ 200 mil</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Treinamento</td>
                    <td className="p-4">Incluído</td>
                    <td className="p-4">Você paga</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Marca</td>
                    <td className="p-4">Pronta</td>
                    <td className="p-4">Você constrói</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Suporte</td>
                    <td className="p-4">Contínuo (ou não)</td>
                    <td className="p-4">Nenhum</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Marketing</td>
                    <td className="p-4">Centralizado</td>
                    <td className="p-4">Você paga tudo</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Risco de falha</td>
                    <td className="p-4">Médio (se escolher bem)</td>
                    <td className="p-4">Alto</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Retorno esperado</td>
                    <td className="p-4">12 a 24 meses</td>
                    <td className="p-4">18 a 36 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-16 mb-8">
              <FileCheck className="w-8 h-8 text-primary" />
              O que deve conter obrigatoriamente em um Contrato de Franquia?
            </h2>

            <p className="mb-8">
              A Lei da Franquia exige que o contrato contenha, no mínimo, estes 15 itens. Se faltar algum, ele pode ser anulado.
            </p>

            <Card className="bg-primary/5 border-primary/20 mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Checklist obrigatório
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Identificação completa das partes (nome, CPF/CNPJ, endereço)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Descrição detalhada do sistema de franquia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Taxa de adesão e forma de pagamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Taxa de royalties (percentual ou valor fixo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Taxa de publicidade (e como será aplicada)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Prazo de vigência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Condições de renovação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Direitos e obrigações do franqueador</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Direitos e obrigações do franqueado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Cláusula de exclusividade territorial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Política de fornecimento de produtos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Forma de treinamento e suporte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Cláusula de rescisão e suas consequências</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Cláusula de arbitragem (se houver)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Declaração de que o franqueado recebeu o DFP</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-lg mb-12">
              <p className="font-semibold text-yellow-700 dark:text-yellow-400 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Dica importante:
              </p>
              <p className="mt-2">
                Se o contrato tiver menos de 10 páginas, não assine. Um contrato de franquia sério tem, no mínimo, 25 páginas.
              </p>
            </div>

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-16 mb-8">
              <Handshake className="w-8 h-8 text-primary" />
              Como negociar seu Contrato de Franquia
            </h2>

            <p className="mb-8">
              Aqui está a verdade que a maioria das franqueadoras não quer que você saiba: <strong>Você pode negociar.</strong>
            </p>

            <div className="space-y-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Estratégia 1: Redução da taxa de publicidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic mb-3">
                    "Vi que outras unidades da sua rede pagam 2% e não 5%. Posso aderir ao mesmo modelo?"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Mostre dados. Mostre que você é um cliente inteligente.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Estratégia 2: Permissão para comprar insumos locais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic mb-3">
                    "Quero usar o pão da padaria da esquina. É mais fresco, mais barato e o cliente prefere."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Demonstre que você entende o mercado local.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Estratégia 3: Prazo de 5 anos em vez de 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic mb-3">
                    "Se eu investir R$ 200 mil, quero garantia de 5 anos para recuperar."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Investimento alto = negociação justa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Estratégia 4: Direito de revenda sem multa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic mb-3">
                    "Se eu quiser sair, quero poder vender para outro franqueado sem multa."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Evita que você fique preso.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Estratégia 5: Cláusula de "não concorrência" limitada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic mb-3">
                    "Só não posso abrir um negócio parecido dentro de 5 km por 1 ano após a saída."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Protege seu futuro.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20 mb-12">
              <CardContent className="pt-6">
                <p className="font-semibold mb-3">💡 Frase poderosa para usar:</p>
                <p className="italic text-lg">
                  "Estou disposto a investir e cumprir tudo o que for justo. Mas preciso de segurança jurídica para fazer esse risco."
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Isso muda o tom da conversa.
                </p>
              </CardContent>
            </Card>

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-16 mb-8">
              <Users className="w-8 h-8 text-primary" />
              Onde encontrar franquias confiáveis?
            </h2>

            <p className="mb-8">
              Não confie em sites que prometem "franquias com retorno em 6 meses". Isso é golpe. Use apenas fontes reconhecidas:
            </p>

            <div className="space-y-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>1. Associação Brasileira de Franchising (ABF)</CardTitle>
                  <CardDescription>
                    <a href="https://www.abf.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      www.abf.com.br
                    </a>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>A única entidade que certifica franquias sérias. Lista de associados com auditoria anual.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. SEBRAE Franquias</CardTitle>
                  <CardDescription>
                    <a href="https://sebrae.com.br/sites/PortalSebrae/sebraefranquias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      sebrae.com.br
                    </a>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Criado pelo Sebrae. Oferece diagnóstico gratuito para escolher a franquia certa.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Revista Franquia</CardTitle>
                  <CardDescription>
                    <a href="https://revistafranquia.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      revistafranquia.com.br
                    </a>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Relatórios anuais de desempenho, taxas de sucesso e listas de franquias que mais fecharam.</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-16 mb-8">
              <DollarSign className="w-8 h-8 text-primary" />
              Modelo Gratuito de Contrato de Franquia
            </h2>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Baixe o Modelo Gratuito Agora</CardTitle>
                <CardDescription className="text-base">
                  Modelo juridicamente válido, testado por profissionais reais e pronto para download.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Nós desenvolvemos este modelo com base em Leis brasileiras (Lei 8.955/94, CDC, Código Civil), normas da ABF e decisões do TJ-SP, TJ-RJ e STJ.
                </p>
                <a
                  href="/tipos-de-contratos"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Gerar Contrato de Franquia Grátis
                </a>
              </CardContent>
            </Card>

            <h2 className="flex items-center gap-3 text-3xl font-bold mt-16 mb-8">
              <Calendar className="w-8 h-8 text-primary" />
              Conclusão
            </h2>

            <p className="mb-6">
              Você não está comprando um negócio. Está comprando uma estrutura, uma rede, uma confiança.
            </p>

            <p className="mb-6">
              E o contrato de franquia é a única coisa que protege você.
            </p>

            <p className="mb-8">
              <strong>Não assine sem ler. Não confie sem comprovar. Não pague sem entender.</strong>
            </p>

            <Card className="bg-primary/5 border-primary/20 mb-12">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  Este <strong>Contrato de Franquia: Guia Completo para Empreendedores que Querem Expandir</strong> não é um manual de vendas. É um mapa de sobrevivência.
                </p>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <div className="mt-16 mb-12">
              <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
              <div className="grid gap-4">
                <a href="/blog/contrato-comodato" className="block p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h4 className="font-semibold mb-2">Contrato de Comodato: Quando e Como Usar</h4>
                  <p className="text-sm text-muted-foreground">Saiba quando usar o contrato de comodato para emprestar bens.</p>
                </a>
                <a href="/blog/contrato-mandato" className="block p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h4 className="font-semibold mb-2">Contrato de Mandato: Autorização Legal</h4>
                  <p className="text-sm text-muted-foreground">Aprenda como funciona o contrato de mandato e quando usá-lo.</p>
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-16 mb-12">
              <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    O contrato de franquia precisa ser registrado em cartório?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Não. Mas o DFP (Documento de Oferta de Franquia) deve ser entregue com 10 dias de antecedência — e isso é obrigatório por lei. O contrato em si não precisa de registro.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Posso vender minha franquia para outra pessoa?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim — mas apenas com autorização da franqueadora. Muitos contratos exigem que ela tenha direito de preferência. Verifique a cláusula de revenda.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    A franqueadora pode aumentar os royalties sem avisar?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Não. Qualquer alteração de valores ou condições exige acordo por escrito. Caso contrário, você pode recusar e até pedir indenização.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    O que é o DFP? Ele é obrigatório?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim. DFP = Documento de Oferta de Franquia. É um documento legal obrigatório, com 15 itens detalhados, que a franqueadora deve entregar 10 dias antes da assinatura. Sem ele, o contrato é nulo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Posso abrir mais de uma unidade da mesma franquia?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim — mas só se o contrato permitir. Muitas franquias exigem que você opere uma unidade por 12 meses antes de abrir outra.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    A franqueadora pode me obrigar a comprar produtos de fornecedores exclusivos?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Pode — mas só se for justificado (ex: qualidade, padronização). Se os preços forem abusivos, você pode questionar no Procon.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    Se eu quiser sair da franquia, perco tudo o que investi?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Não. Você perde apenas o direito de usar a marca. Mas o seu investimento em móveis, equipamentos e reforma pode ser ressarcido — se houver cláusula de rescisão justa.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">
                    Existem franquias que não exigem taxa de adesão?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim. São chamadas de "franquias de baixo investimento" ou "microfranquias". Mas atenção: sem taxa de adesão, o suporte pode ser pobre. Verifique o DFP.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left">
                    O contrato de franquia pode ser rescindido por justa causa?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim. Se a franqueadora não cumprir obrigações (suporte, treinamento, fornecimento), você pode rescindir por justa causa e pedir restituição de valores.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left">
                    Posso usar o contrato de franquia para abrir um negócio no exterior?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Não. O contrato brasileiro só vale no Brasil. Para operar fora, é necessário um contrato de licenciamento internacional, com regras específicas de cada país.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* External Links */}
            <div className="mt-16 mb-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Links externos de autoridade</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.planalto.gov.br/ccivil_03/leis/l8955.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Lei nº 8.955/94 — Lei da Franquia — Governo Federal
                  </a>
                </li>
                <li>
                  <a href="https://www.abf.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Associação Brasileira de Franchising (ABF) — Entidade reguladora do setor
                  </a>
                </li>
                <li>
                  <a href="https://sebrae.com.br/Sebrae/Portal%20Sebrae/Anexos/franquias_portal_sebrae.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Portal Franquias Brasil — Sebrae — Guia oficial de escolha de franquias
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Author Profile */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-4">Sobre o Autor</h3>
            <AuthorProfile variant="compact" showSocialLinks={true} />
          </div>
        </article>

        {/* Related Articles */}
        <RelatedArticles articles={relatedArticles} />
      </main>
    </>
  );
};

export default ContratoFranquia;
