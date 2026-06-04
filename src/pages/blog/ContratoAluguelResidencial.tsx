import SEO from "@/components/SEO";
import AuthorProfile from "@/components/AuthorProfile";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  CheckCircle2, 
  Home,
  Shield,
  DollarSign,
  ClipboardCheck,
  AlertCircle,
  MessageSquare,
  ArrowRight,
  ExternalLink
} from "lucide-react";
const coverImage = "/images/blog/contrato-aluguel-residencial-cover.jpg";

const ContratoAluguelResidencial = () => {
  const relatedArticles: RelatedArticle[] = [
    {
      title: "Contrato de Comodato: Quando e Como Usar para Empréstimo Gratuito de Bens",
      description: "Aprenda a formalizar empréstimos de bens como carros e ferramentas sem cobrar.",
      slug: "contrato-comodato",
      coverImage: "/images/blog/contrato-comodato-cover.jpg",
      category: "Para Empreendedores"
    },
    {
      title: "Contrato de Locação de Veículo: Regras para Alugar Carros",
      description: "Proteja seu patrimônio com um contrato de locação de veículo seguro e válido.",
      slug: "contrato-locacao-veiculo",
      coverImage: "/images/blog/contrato-locacao-veiculo-cover.jpg",
      category: "Passo a Passo"
    },
    {
      title: "Contrato de Mandato: Autorização Legal para Agir em Nome de Terceiros",
      description: "Saiba quando e como usar um contrato de mandato para representação legal.",
      slug: "contrato-mandato",
      coverImage: "/images/blog/contrato-mandato-cover.jpg",
      category: "Passo a Passo"
    }
  ];

  return (
    <>
      <SEO
        title="Contrato de Aluguel Residencial: Modelo Grátis em PDF e Guia 2026"
        description="Modelo de contrato de aluguel residencial grátis em PDF e Word. Entenda cláusulas essenciais, direitos do inquilino, obrigações do locador, garantia locatícia e como fazer um contrato de aluguel simples e seguro."
        keywords="contrato de aluguel residencial, modelo de contrato de aluguel, contrato de aluguel simples, contrato de aluguel pdf, contrato de locação residencial, como fazer um contrato de aluguel, modelo de contrato de aluguel residencial, contrato de aluguel de casa, contrato simples de aluguel, Lei do Inquilinato, direitos do inquilino, garantia locatícia"
        canonical="https://modelodecontrato.org/blog/contrato-aluguel-residencial"
      />

      <main className="min-h-screen bg-background">
        <article className="container mx-auto max-w-4xl px-4 py-8 md:py-12">

          {/* Cover Image */}
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 mt-6">
            <img 
              src={coverImage} 
              alt="Pessoas assinando contrato de aluguel residencial com casa de madeira e chaves sobre a mesa"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-green-500/10 text-green-600 dark:text-green-400">
              <Scale className="w-3 h-3 mr-1" />
              Direitos & Deveres
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Contrato de Aluguel Residencial: tudo o que você precisa saber antes de assinar
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2025-11-21">21 de novembro de 2025</time>
              <span>•</span>
              <span>12 min de leitura</span>
            </div>
          </header>

          <Separator className="my-8" />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <p className="text-xl leading-relaxed text-muted-foreground mb-8">
              Assinar um contrato de aluguel residencial é muito mais do que colocar um nome no papel. Para muitos brasileiros, é o primeiro passo rumo à independência, uma nova fase de vida, ou até uma saída de emergência. Mas quantos realmente leem — e, mais importante, entendem — tudo o que está escrito nesse documento antes de estampar sua assinatura?
            </p>

            <p className="mb-6">
              Infelizmente, a pressa, a empolgação com o novo imóvel ou a simples confiança no proprietário levam milhares de pessoas a assinarem contratos com cláusulas abusivas, omissões perigosas ou obrigações mal definidas. E quando algo dá errado — um vazamento, um aumento abusivo, um despejo relâmpago —, o inquilino se vê sem proteção, justamente porque não sabia o que havia concordado.
            </p>

            <p className="mb-6">
              Este guia foi feito para mudar isso. Aqui, você vai descobrir tudo o que precisa saber antes de assinar um contrato de aluguel residencial, desde as exigências mínimas da lei até os detalhes que ninguém costuma explicar. Vamos destrinchar o documento com clareza, mostrar o que é obrigatório e o que pode (ou não) ser negociado, e te entregar ferramentas práticas para proteger seu direito à moradia digna.
            </p>

            <p className="mb-12">
              Se você está prestes a alugar uma casa ou apartamento, reserve os próximos minutos. Eles podem poupar meses de dor de cabeça — e até milhares de reais.
            </p>

            <Separator className="my-12" />

            {/* Seção 1 */}
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Home className="w-8 h-8 text-primary" />
              Por que o contrato de aluguel residencial é tão importante?
            </h2>

            <p className="mb-6">
              Muita gente acha que, por ser "só um aluguel", o contrato é algo burocrático. Engano. Na prática, esse documento é a única prova concreta do acordo entre você e o locador. Ele define:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span>Quanto você pagará (e quando),</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span>Quem é responsável por cada tipo de reparo,</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span>Por quanto tempo poderá morar ali,</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span>E, principalmente, o que acontecerá se houver um conflito.</span>
              </li>
            </ul>

            <p className="mb-6">
              Sem um contrato de aluguel residencial escrito e bem estruturado, você está à mercê da boa vontade do proprietário — e da sorte. A Lei do Inquilinato (Lei nº 8.245/1991) garante direitos e deveres para ambas as partes, mas muitas dessas proteções só valem se estiverem claramente expressas no contrato ou se houver prova do vínculo locatício.
            </p>

            <p className="mb-8">
              Ou seja: um contrato mal redigido, vago ou incompleto pode invalidar até mesmo as garantias legais. Por isso, entender cada item antes de assinar não é exagero. É essencial.
            </p>

            <Card className="bg-blue-500/5 border-blue-500/20 mb-12">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Dica prática</h3>
                    <p className="text-muted-foreground">
                      Mesmo que o proprietário insista que "é só um modelo simples", nunca aceite um contrato verbal. A Lei exige que o contrato de locação residencial seja por escrito, especialmente se for por prazo superior a 30 meses (Art. 32 da Lei 8.245/91).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            {/* Seção 2 */}
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              O que a lei exige em um contrato de aluguel residencial?
            </h2>

            <p className="mb-8">
              A Lei do Inquilinato estabelece uma série de cláusulas obrigatórias que devem constar em todo contrato de locação residencial. Se faltarem, o documento pode ser considerado incompleto — e isso abre brecha para interpretações que nem sempre favorecem o inquilino.
            </p>

            <h3 className="text-2xl font-semibold mb-6">Elementos essenciais que devem estar no contrato:</h3>

            <div className="space-y-6 mb-12">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Identificação completa das partes
                  </h4>
                  <p className="text-muted-foreground">
                    Nome completo, CPF, RG e endereço de inquilino e locador (ou administradora, se for o caso).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Descrição detalhada do imóvel
                  </h4>
                  <p className="text-muted-foreground">
                    Endereço completo, matrícula do imóvel no cartório de registro (se possível), e identificação de benfeitorias (como garagem, depósito, área de serviço).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Valor do aluguel e forma de reajuste
                  </h4>
                  <p className="text-muted-foreground">
                    O valor inicial e o índice de correção (normalmente IGP-M, IPCA ou INPC). A lei permite reajuste anual com base em índice de mercado — mas não permite reajustes arbitrários.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Prazo do contrato
                  </h4>
                  <p className="text-muted-foreground">
                    Pode ser por tempo determinado (comum: 30 meses) ou indeterminado. Contratos com prazo inferior a 30 meses não dão direito à renovação compulsória, mas ainda assim conferem proteção contra despejo imotivado.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Forma de pagamento
                  </h4>
                  <p className="text-muted-foreground">
                    Data de vencimento, multa por atraso (máximo de 10% nos primeiros 3 dias, segundo jurisprudência consolidada), e juros moratórios (limitados a 1% ao mês).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Encargos e despesas
                  </h4>
                  <p className="text-muted-foreground">
                    Quem paga o IPTU, condomínio, água, luz, gás? Tudo deve estar claro. O inquilino só é obrigado a pagar taxas de condomínio e tributos ligados ao uso (como água e luz); o IPTU e o seguro incêndio normalmente são do locador — a menos que haja cláusula específica.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Garantia locatícia
                  </h4>
                  <p className="text-muted-foreground">
                    Fiador, depósito caução, seguro fiança ou título de capitalização. O contrato deve especificar qual foi escolhida e as condições.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-orange-500/5 border-orange-500/20 mb-12">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Atenção</h3>
                    <p className="text-muted-foreground">
                      O locador não pode exigir mais de uma forma de garantia ao mesmo tempo (ex: fiador + depósito caução), salvo em casos excepcionais, como imóveis de alto valor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mb-8">
              Se seu contrato não tiver esses elementos, não assine. Peça para revisar ou, melhor ainda, use um modelo completo e atualizado como o que oferecemos gratuitamente em nosso{" "}
              <a href="/tipos-de-contratos" className="text-primary hover:underline font-semibold">
                gerador de contratos de aluguel residencial
              </a>.
            </p>

            <Separator className="my-12" />

            {/* Seção 3 */}
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              Cláusulas perigosas que você deve evitar
            </h2>

            <p className="mb-8">
              Além das omissões, há cláusulas que, embora pareçam "normais", podem ser abusivas ou ilegais. Fique de olho:
            </p>

            <div className="space-y-6 mb-12">
              <Card className="border-l-4 border-l-red-500 bg-red-500/5">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    ❌ "O inquilino assume todas as despesas do imóvel, inclusive IPTU e seguro"
                  </h4>
                  <p className="text-muted-foreground">
                    Isso é ilegal. O IPTU é obrigação do proprietário, a menos que haja acordo expresso e por escrito — e mesmo assim, o inquilino não é obrigado a aceitar.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500 bg-red-500/5">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    ❌ "O proprietário pode entrar no imóvel a qualquer momento para vistoria"
                  </h4>
                  <p className="text-muted-foreground">
                    Você tem direito à intimidade e inviolabilidade do domicílio (CF, Art. 5º, XI). O locador só pode entrar com aviso prévio (geralmente 24 a 48 horas) e em horário combinado.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500 bg-red-500/5">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    ❌ "Multas superiores a 10% por atraso no aluguel"
                  </h4>
                  <p className="text-muted-foreground">
                    A jurisprudência do STJ entende que multas acima de 10% configuram abuso. O mesmo vale para juros acima de 1% ao mês.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500 bg-red-500/5">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    ❌ "Contrato por 12 meses, sem direito à renovação"
                  </h4>
                  <p className="text-muted-foreground">
                    Tecnicamente válido, mas lembre-se: contratos com prazo menor que 30 meses não dão direito à renovação compulsória. Ao fim do prazo, o locador pode pedir o imóvel de volta sem justificar.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20 mb-12">
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  <strong>Leia também:</strong> Saiba mais sobre erros comuns ao assinar um contrato de aluguel — muitos inquilinos perdem direitos por não questionarem esses detalhes.
                </p>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            {/* Seção 4 */}
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Garantias locatícias: entenda suas opções
            </h2>

            <p className="mb-8">
              A garantia é um dos pontos mais delicados — e frustrantes — do processo de locação. Muitos proprietários exigem fiador com imóvel, o que é um obstáculo enorme para jovens ou recém-chegados em uma cidade.
            </p>

            <p className="mb-8">
              Mas você tem alternativas. Veja as principais:
            </p>

            <div className="space-y-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">1. Fiador</h3>
                  <p className="text-muted-foreground mb-4">
                    A forma tradicional. Pode ser pessoa física (com renda comprovada e, muitas vezes, imóvel quitado) ou jurídica (como empresas de fiança locatícia).
                  </p>
                  <Card className="bg-yellow-500/5 border-yellow-500/20">
                    <CardContent className="pt-4">
                      <p className="text-sm">
                        <strong>Importante:</strong> O fiador responde solidariamente pelas dívidas do inquilino. Se você não pagar, ele será cobrado diretamente.
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">2. Depósito caução</h3>
                  <p className="text-muted-foreground mb-4">
                    Corresponde a até 3 aluguéis, depositados em conta vinculada. Ao fim do contrato, o valor é devolvido, corrigido monetariamente.
                  </p>
                  <Card className="bg-orange-500/5 border-orange-500/20">
                    <CardContent className="pt-4">
                      <p className="text-sm">
                        <strong>Cuidado:</strong> O dinheiro não pode ficar na conta do proprietário. Deve ser depositado em conta conjunta ou judicial, com correção e rendimento ao inquilino.
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">3. Seguro fiança</h3>
                  <p className="text-muted-foreground mb-4">
                    Você paga um prêmio anual (geralmente entre 10% e 15% do valor anual do aluguel) a uma seguradora. Se houver inadimplência, a seguradora paga ao locador e depois cobra você.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Vantagem:</strong> mais acessível que um fiador com imóvel.</span>
                    </p>
                    <p className="text-sm flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Desvantagem:</strong> não é reembolsável.</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">4. Cessão fiduciária de quotas de fundo de investimento</h3>
                  <p className="text-muted-foreground mb-4">
                    Nova modalidade trazida pela Lei nº 14.019/2020. Permite usar aplicações financeiras como garantia.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Ainda pouco comum, mas promissora para quem tem investimentos.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="mb-8">
              Se nenhuma opção for viável, considere imóveis com locação por temporada (menos de 90 dias), que não exigem garantia, mas têm regras próprias e custos mais altos.
            </p>

            <Separator className="my-12" />

            {/* Seção 5 - Tabela */}
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-primary" />
              Quem paga o quê? Entenda a divisão de despesas
            </h2>

            <p className="mb-8">
              Uma das maiores fontes de conflito no aluguel é a divisão de contas. A lei é clara:
            </p>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="text-left p-4 font-semibold">Despesa</th>
                    <th className="text-left p-4 font-semibold">Responsável</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4">Aluguel</td>
                    <td className="p-4 font-semibold">Inquilino</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4">Condomínio</td>
                    <td className="p-4 font-semibold">Inquilino</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Água, luz, gás, internet</td>
                    <td className="p-4 font-semibold">Inquilino</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4">IPTU</td>
                    <td className="p-4 font-semibold">Proprietário <span className="text-xs text-muted-foreground">(salvo acordo em contrário)</span></td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Seguro incêndio</td>
                    <td className="p-4 font-semibold">Proprietário</td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4">Reparações estruturais<br/><span className="text-xs text-muted-foreground">(paredes, telhado, encanamento principal)</span></td>
                    <td className="p-4 font-semibold">Proprietário</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Reparações por uso<br/><span className="text-xs text-muted-foreground">(torneiras, lâmpadas, fechaduras)</span></td>
                    <td className="p-4 font-semibold">Inquilino</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-8">
              Lembre-se: o contrato pode alterar essa divisão, mas só se for vantajoso para o inquilino. Cláusulas que transferem obrigações legais do locador para o locatário sem contrapartida podem ser anuladas.
            </p>

            <Card className="bg-blue-500/5 border-blue-500/20 mb-12">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Exemplo prático</h3>
                    <p className="text-muted-foreground">
                      Se o contrato diz que o inquilino paga o IPTU, mas não reduz o valor do aluguel, isso pode ser considerado abusivo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            {/* Seção 6 */}
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              Como proceder em caso de vícios ou defeitos no imóvel?
            </h2>

            <p className="mb-8">
              Imóveis velhos, infiltrações, entupimentos, falta de pressão na água… problemas comuns, mas que geram grandes dores de cabeça.
            </p>

            <p className="mb-8">
              A lei distingue dois tipos de reparos:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Reparos locativos</h3>
                  <p className="text-muted-foreground mb-4">
                    Decorrentes do uso normal (ex: troca de lâmpadas, desentupimento de pia). São de responsabilidade do inquilino.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Reparos urgentes ou estruturais</h3>
                  <p className="text-muted-foreground mb-4">
                    Que comprometem a segurança ou habitabilidade (ex: vazamento no teto, rachaduras, falta de esgoto). São do proprietário.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="mb-6">
              Se o locador se recusar a fazer um reparo estrutural, você tem três opções legais:
            </p>

            <div className="space-y-4 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <p className="text-muted-foreground pt-1">
                      Pedir a resolução do contrato (encerrar o aluguel sem multa);
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <p className="text-muted-foreground pt-1">
                      Fazer o reparo por conta própria e descontar do aluguel (desde que comprovado e comunicado);
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <p className="text-muted-foreground pt-1">
                      Entrar na justiça para obrigá-lo a reparar (via ação de obrigação de fazer).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-500/5 border-blue-500/20 mb-12">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Dica</h3>
                    <p className="text-muted-foreground">
                      Sempre comunique defeitos por e-mail ou aplicativo com confirmação de leitura, e guarde as provas (fotos, vídeos, orçamentos).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            {/* Seção 7 */}
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-primary" />
              Renovação, rescisão e despejo: o que diz a lei?
            </h2>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Renovação compulsória</h3>
            <p className="mb-6">
              Se o contrato for por 30 meses ou mais, o inquilino tem direito à renovação por igual prazo, desde que:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span>Tenha cumprido todas as obrigações,</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span>Peça a renovação com antecedência mínima de 30 dias,</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span>O imóvel seja usado para comércio ou residência (no caso residencial, o direito existe, mas é menos absoluto que no comercial).</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Rescisão antecipada</h3>
            <p className="mb-6">
              Se você quiser sair antes do fim do prazo:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Em contratos com prazo determinado, há multa proporcional (máximo de 3 aluguéis, decrescente com o tempo).</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Em contratos sem prazo, basta avisar com 30 dias de antecedência, sem multa.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Despejo</h3>
            <p className="mb-6">
              O locador só pode pedir o imóvel de volta:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Ao fim do contrato (sem prazo ou com prazo &lt; 30 meses);</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Se houver inadimplência por mais de 3 meses;</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Se o inquilino usar o imóvel para fim diferente do contratado;</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Se houver sublocação não autorizada.</span>
              </li>
            </ul>

            <Card className="bg-orange-500/5 border-orange-500/20 mb-12">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Importante</h3>
                    <p className="text-muted-foreground">
                      Não existe "despejo imediato". Mesmo em casos de inadimplência, o inquilino tem direito à defesa em juízo e, em muitos casos, a um prazo para quitar a dívida.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mb-8">
              <strong>Saiba mais:</strong> Confira nosso guia passo a passo para{" "}
              <a href="/rescisao-contrato" className="text-primary hover:underline">
                rescindir um contrato de aluguel sem prejuízos
              </a>.
            </p>

            <Separator className="my-12" />

            {/* Checklist */}
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <ClipboardCheck className="w-8 h-8 text-primary" />
              Checklist: 7 passos antes de assinar seu contrato
            </h2>

            <div className="space-y-4 mb-12">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground pt-1">
                      Leia todo o contrato, linha por linha — inclusive a letra miúda.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground pt-1">
                      Verifique se todas as cláusulas obrigatórias estão presentes (veja lista acima).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground pt-1">
                      Confirme a forma de garantia e se você consegue cumpri-la.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground pt-1">
                      Tire fotos ou vídeos do imóvel no dia da entrega das chaves (com data e hora).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground pt-1">
                      Peça um recibo de entrega das chaves e do primeiro aluguel.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground pt-1">
                      Guarde cópia assinada do contrato (digital e impressa).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground pt-1">
                      Registre o contrato no cartório se for por mais de 30 meses (não é obrigatório, mas protege contra venda do imóvel).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20 mb-12">
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground mb-4">
                  Esse checklist simples pode evitar 90% dos problemas comuns em locações.
                </p>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            {/* Conclusão */}
            <h2 className="text-3xl font-bold mb-6">Conclusão: seu direito à moradia começa com um bom contrato</h2>

            <p className="mb-6">
              Assinar um contrato de aluguel residencial não é apenas um trâmite. É o ato que define, por meses ou anos, onde você vai morar, quanto vai gastar e com que segurança.
            </p>

            <p className="mb-6">
              Ignorar os detalhes pode parecer prático no curto prazo — mas é um risco enorme no médio e longo prazo. Um documento bem feito, claro e alinhado com a lei, por outro lado, é uma ferramenta de proteção poderosa. Ele garante que o seu direito à moradia não dependa da boa vontade de ninguém, mas sim de regras justas e transparentes.
            </p>

            <p className="mb-6">
              Se você está prestes a alugar um imóvel, não subestime esse momento. Use este guia como referência, questione o que não entende, e nunca tenha vergonha de pedir esclarecimentos.
            </p>

            <p className="mb-12">
              E se precisar de um modelo de contrato de aluguel residencial completo, atualizado e 100% gratuito — alinhado com tudo o que explicamos aqui —, você já sabe onde encontrar. Crie seu contrato em 30 segundos e durma tranquilo sabendo que está protegido.
            </p>

            {/* CTA Principal */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 mb-12">
              <CardContent className="pt-8 pb-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Precisa de um contrato de aluguel residencial?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Crie um contrato completo, atualizado e 100% gratuito em minutos. Todos os elementos obrigatórios já inclusos.
                </p>
                <Button size="lg" asChild className="gap-2">
                  <a href="/tipos-de-contratos">
                    Gerar Contrato Grátis
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <p className="text-center text-muted-foreground italic mb-12">
              Compartilhe este artigo com quem está procurando um imóvel para alugar. Pode ser a diferença entre um lar seguro… e uma dor de cabeça sem fim.
            </p>

            <Separator className="my-12" />

            {/* FAQ */}
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-primary" />
              Perguntas Frequentes (FAQ)
            </h2>

            <div className="space-y-4 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">O que é obrigatório ter em um contrato de aluguel residencial?</h3>
                  <p className="text-muted-foreground">
                    Devem constar: identificação das partes, descrição do imóvel, valor do aluguel, prazo, forma de pagamento, encargos, garantia locatícia e cláusulas sobre reparos e despesas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Posso alugar sem fiador?</h3>
                  <p className="text-muted-foreground">
                    Sim. O fiador é apenas uma das formas de garantia. Você pode optar por depósito caução, seguro fiança ou cessão fiduciária.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Quem paga o IPTU no aluguel residencial?</h3>
                  <p className="text-muted-foreground">
                    Por lei, o IPTU é de responsabilidade do proprietário. O contrato pode transferir essa obrigação ao inquilino, mas só com cláusula expressa e vantajosa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">O proprietário pode aumentar o aluguel antes de um ano?</h3>
                  <p className="text-muted-foreground">
                    Não. O reajuste só é permitido após 12 meses de contrato, com base em índice de mercado (como IGP-M ou IPCA).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Posso sublocar o imóvel alugado?</h3>
                  <p className="text-muted-foreground">
                    Só com autorização expressa do locador. Sem ela, a sublocação é motivo para rescisão do contrato.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">O que fazer se o imóvel tiver problemas estruturais?</h3>
                  <p className="text-muted-foreground">
                    Notifique o locador por escrito. Se ele não resolver em prazo razoável, você pode descontar os reparos do aluguel ou pedir a rescisão do contrato.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Links relacionados */}
            <Card className="bg-muted/30">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  Artigos relacionados
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/glossario-juridico" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Como rescindir um contrato de aluguel sem prejuízos
                    </a>
                  </li>
                  <li>
                    <a href="/tipos-de-contratos" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Gerar contrato de aluguel residencial grátis
                    </a>
                  </li>
                  <li>
                    <a href="/glossario-juridico" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Glossário jurídico: termos essenciais para inquilinos
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-12" />

          {/* Author Profile */}
          <div className="mt-12">
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

export default ContratoAluguelResidencial;
