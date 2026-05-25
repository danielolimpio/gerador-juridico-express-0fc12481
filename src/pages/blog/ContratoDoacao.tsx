import SEO from "@/components/SEO";
import AuthorProfile from "@/components/AuthorProfile";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  Scale, 
  TrendingUp,
  BadgeCheck,
  XCircle,
  Info
} from "lucide-react";

const ContratoDoacao = () => {
  const relatedArticles: RelatedArticle[] = [
    {
      title: "Contrato de Comodato: Quando e Como Usar para Empréstimo Gratuito de Bens",
      description: "Aprenda a formalizar empréstimos de bens como carros e ferramentas sem cobrar.",
      slug: "contrato-comodato",
      coverImage: "/images/blog/contrato-comodato-cover.jpg",
      category: "Para Empreendedores"
    },
    {
      title: "Contrato de Aluguel Residencial: tudo o que você precisa saber antes de assinar",
      description: "Entenda cláusulas essenciais, seus direitos como inquilino e obrigações do locador.",
      slug: "contrato-aluguel-residencial",
      coverImage: "/images/blog/contrato-aluguel-residencial-cover.jpg",
      category: "Direitos & Deveres"
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
        title="Entenda a Diferença entre Contrato de Doação e Venda de Be"
        description="Confira as diferenças legais entre doação e venda de bens móveis. Evite problemas futuros com modelos juridicamente válidos e gratuitos."
        keywords="contrato de doação, venda de bens móveis, diferença doação e venda, ITCMD, ICMS, transferência de veículo"
        canonical="https://modelodecontrato.org/blogcontrato-doacao-venda-bens-moveis"
        ogImage="/images/blog/contrato-doacao-venda-cover.jpg"
      />

      <main className="min-h-screen bg-background">
        <article className="container mx-auto max-w-4xl px-4 py-8 md:py-12">

          {/* Cover Image */}
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 mt-6">
            <img 
              src="/images/blog/contrato-doacao-venda-cover.jpg" 
              alt="Contrato de Doação e Venda de Bens Móveis"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Entenda a Diferença entre Contrato de Doação e Venda de Bens Móveis
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2025-11-21">21 de novembro de 2025</time>
              <span>•</span>
              <span>18 min de leitura</span>
            </div>
          </header>

          <Separator className="my-8" />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Você já teve que passar um carro para um parente, ou talvez uma moto, um computador ou até um conjunto de móveis de casa? E, na hora de formalizar, pensou: "Será que é melhor fazer um contrato de venda ou de doação?"
            </p>

            <p className="leading-relaxed mb-6">
              Muitos brasileiros enfrentam essa dúvida — e, por não entenderem a diferença entre contrato de doação e venda de bens móveis, acabam cometendo erros que geram dor de cabeça, custos extras, até processos judiciais anos depois.
            </p>

            <p className="leading-relaxed mb-6">
              Imagine: você passa um carro para seu filho por "doação", sem documento, sem escritura, sem registro. Anos depois, ele vende o veículo para um terceiro — e o fisco descobre que o bem nunca foi declarado como doação formal. Resultado? Multa, juros, e a possibilidade de o bem ser retomado.
            </p>

            <p className="leading-relaxed mb-8">
              Ou pior: você vende um bem por um valor simbólico — "R$ 100" — para evitar impostos, mas o fisco entende como fraude.
            </p>

            <Card className="bg-primary/5 border-primary/20 mb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    A verdade é simples: entender a diferença entre contrato de doação e venda de bens móveis não é só um detalhe jurídico. É uma questão de segurança patrimonial, fiscal e familiar.
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-primary" />
              Por que essa confusão é tão comum no Brasil?
            </h2>

            <p className="leading-relaxed mb-6">
              A confusão entre doação e venda não é casual. Ela nasce de uma realidade cotidiana: famílias que querem ajudar, mas não sabem como fazê-lo legalmente.
            </p>

            <p className="leading-relaxed mb-6">
              Em muitos lares brasileiros, transferir bens entre parentes é visto como um ato de carinho — não de negócio. Por isso, a ideia de "fazer um contrato" soa fria, burocrática, quase desrespeitosa.
            </p>

            <p className="leading-relaxed mb-6">
              <strong>Mas a lei não enxerga sentimentos. Ela enxerga documentos.</strong>
            </p>

            <p className="leading-relaxed mb-4">
              E quando o bem é móvel — como um carro, uma motocicleta, um equipamento de trabalho, um piano, ou até uma coleção de quadros — a ausência de formalização pode gerar consequências sérias:
            </p>

            <ul className="space-y-2 mb-8 ml-6">
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>Imposto de Transmissão de Bens (ITBI) ou ICMS mal calculado</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>Divergência na declaração de IR</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>Problemas na transferência de propriedade no Detran</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>Reclamações de herdeiros após o falecimento do doador</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>Ação de nulidade por fraude contra terceiros</span>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <FileText className="w-7 h-7 text-primary" />
              O que é um contrato de doação de bens móveis?
            </h2>

            <p className="leading-relaxed mb-6">
              Um contrato de doação é um ato jurídico unilateral, no qual uma pessoa (o doador) transfere gratuitamente a propriedade de um bem móvel para outra (o donatário), sem exigir contrapartida.
            </p>

            <p className="leading-relaxed mb-6">
              Não é um presente de aniversário. É um ato formal, que exige escritura pública ou particular, dependendo do valor e da natureza do bem.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              Quando a doação é a melhor opção?
            </h3>

            <ul className="space-y-2 mb-6 ml-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Você quer ajudar um familiar sem receber nada em troca</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>O bem tem valor sentimental, não apenas financeiro</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Você quer evitar a cobrança de impostos sobre venda (como ICMS)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>O donatário não tem condições financeiras de arcar com o preço de mercado</span>
              </li>
            </ul>

            <Card className="bg-muted/30 border-muted mb-8">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-primary" />
                  Exemplo prático:
                </h4>
                <p className="text-sm leading-relaxed">
                  Joana, 62 anos, quer passar seu carro popular de 2015 para o filho, Lucas, 25. O veículo está avaliado em R$ 35.000. Joana não quer vender, porque acha que o filho ainda não tem condições de pagar um valor justo. Ela opta pela doação.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              Imposto sobre doação: o que pagar?
            </h3>

            <p className="leading-relaxed mb-6">
              No Brasil, a doação é tributada pelo Imposto sobre Transmissão Causa Mortis e Doação (ITCMD), que é estadual. Cada estado tem alíquotas diferentes:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-4 font-semibold">Estado</th>
                    <th className="text-left p-4 font-semibold">Alíquota ITCMD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4">São Paulo</td>
                    <td className="p-4">4%</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Rio de Janeiro</td>
                    <td className="p-4">4%</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Minas Gerais</td>
                    <td className="p-4">5%</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Bahia</td>
                    <td className="p-4">4%</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Paraná</td>
                    <td className="p-4">4%</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4">Santa Catarina</td>
                    <td className="p-4">3%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="bg-amber-500/10 border-amber-500/20 mb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm leading-relaxed mb-2">
                      <strong>Atenção:</strong> Doação entre cônjuges, companheiros e parentes em linha reta (pais, filhos, avós, netos) é isenta de ITCMD em alguns estados — como São Paulo e Rio de Janeiro — desde que o valor não ultrapasse R$ 50.000 por ano.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Se não pagar? O fisco pode cobrar anos depois — com juros e multa de 75%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-primary" />
              O que é um contrato de venda de bens móveis?
            </h2>

            <p className="leading-relaxed mb-6">
              A venda é um contrato bilateral: uma parte entrega o bem, e a outra paga um preço. Aqui, o dinheiro é essencial. Mesmo que seja simbólico — como R$ 100 — o valor precisa constar.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              Quando a venda é a melhor opção?
            </h3>

            <ul className="space-y-2 mb-6 ml-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Você quer manter o bem como um ativo financeiro</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>O comprador tem condições de pagar o valor de mercado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Você quer evitar complicações futuras com herança</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>O bem será usado para fins comerciais</span>
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              Mas e se eu vender por R$ 100?
            </h3>

            <Card className="bg-destructive/10 border-destructive/20 mb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm leading-relaxed mb-2">
                      <strong>Armadilha comum:</strong> Muitos pensam: "Se eu vender por R$ 100, evito o ICMS e o ITCMD."
                    </p>
                    <p className="text-sm leading-relaxed mb-3">
                      <strong>Errado.</strong> O fisco tem mecanismos para identificar operações simuladas. Se o valor declarado for claramente inferior ao valor de mercado — e houver relação de parentesco — o órgão pode considerar a venda como fraude.
                    </p>
                    <p className="text-sm font-semibold">Resultado:</p>
                    <ul className="text-sm space-y-1 ml-4 mt-2">
                      <li>• O ICMS é cobrado com base no valor de tabela (Fipe)</li>
                      <li>• O donatário pode ser autuado por sonegação</li>
                      <li>• O contrato pode ser anulado</li>
                      <li>• Há risco de investigação por lavagem de dinheiro</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Scale className="w-7 h-7 text-primary" />
              Tabela comparativa: Doação vs Venda
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-4 font-semibold">Característica</th>
                    <th className="text-left p-4 font-semibold">Doação</th>
                    <th className="text-left p-4 font-semibold">Venda</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Natureza jurídica</td>
                    <td className="p-4">Unilateral (sem contrapartida)</td>
                    <td className="p-4">Bilateral (há pagamento)</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Valor do bem</td>
                    <td className="p-4">Não precisa ser pago</td>
                    <td className="p-4">Deve ser declarado (mesmo que simbólico)</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Formalização obrigatória</td>
                    <td className="p-4">Escritura pública se valor &gt; R$ 30.000</td>
                    <td className="p-4">Sempre necessário contrato escrito</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Imposto principal</td>
                    <td className="p-4">ITCMD (estado)</td>
                    <td className="p-4">ICMS (estado)</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Risco de anulação</td>
                    <td className="p-4">Alto se não formalizado</td>
                    <td className="p-4">Baixo se valor for realista</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Impacto na herança</td>
                    <td className="p-4">Bem não entra no patrimônio após transferência</td>
                    <td className="p-4">Bem é do comprador — não afeta herança</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
              Passo a passo: como criar um contrato válido
            </h2>

            <div className="space-y-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                    Defina o tipo de operação
                  </h4>
                  <p className="text-sm leading-relaxed ml-9">
                    É um presente? → Doação<br />
                    É uma troca por dinheiro? → Venda
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                    Verifique o valor de mercado
                  </h4>
                  <p className="text-sm leading-relaxed ml-9">
                    Use a tabela Fipe para saber o valor médio do bem. Isso é crucial para evitar suspeitas de fraude.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                    Escolha o modelo de contrato
                  </h4>
                  <p className="text-sm leading-relaxed ml-9 mb-3">
                    Para doação ou venda, o contrato deve incluir: nome completo dos envolvidos, descrição detalhada do bem, valor (no caso de venda), assinatura das partes e testemunhas.
                  </p>
                  <a 
                    href="/tipos-de-contratos" 
                    className="text-primary hover:text-primary/80 text-sm font-medium ml-9 inline-flex items-center gap-1"
                  >
                    Gerar contrato gratuito →
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">4</span>
                    Pague os impostos devidos
                  </h4>
                  <p className="text-sm leading-relaxed ml-9">
                    Doação: ITCMD (verifique na secretaria da fazenda do seu estado)<br />
                    Venda: ICMS (emitido pela loja ou vendedor)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">5</span>
                    Faça a transferência no Detran
                  </h4>
                  <p className="text-sm leading-relaxed ml-9">
                    Leve todos os documentos originais, pague as taxas de transferência e aguarde a emissão da nova CRLV.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
              Erros fatais que você NUNCA deve cometer
            </h2>

            <div className="space-y-3 mb-8">
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Entregar o bem sem contrato</p>
                      <p className="text-sm text-muted-foreground">Se o doador morrer, o bem pode ser reivindicado por outros herdeiros.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Fazer doação com valor simbólico</p>
                      <p className="text-sm text-muted-foreground">Vira fraude. O fisco investiga.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Não declarar a doação na declaração de IR</p>
                      <p className="text-sm text-muted-foreground">Pode gerar multa por omissão.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Não reconhecer firma</p>
                      <p className="text-sm text-muted-foreground">O contrato pode ser considerado nulo.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">
              Conclusão: escolha com consciência, não com pressa
            </h2>

            <p className="leading-relaxed mb-6">
              Entender a diferença entre contrato de doação e venda de bens móveis não é um detalhe técnico — é um ato de responsabilidade.
            </p>

            <p className="leading-relaxed mb-6">
              Você não está apenas transferindo um bem. Está transferindo segurança, tranquilidade e futuro. Um carro, um computador, um piano — não são só objetos. São símbolos de confiança, de cuidado, de amor.
            </p>

            <p className="leading-relaxed mb-8">
              <strong>Mas o amor não se sustenta sem documento.</strong>
            </p>

            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 mb-12">
              <CardContent className="py-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Proteja-se sem complicar</h3>
                <p className="mb-6 opacity-90">
                  Gere um contrato personalizado em 30 segundos, sem cadastro, 100% grátis.
                </p>
                <a
                  href="/tipos-de-contratos"
                  className="inline-flex items-center justify-center px-8 py-3 bg-background text-foreground font-semibold rounded-lg hover:bg-background/90 transition-colors"
                >
                  Criar Contrato Agora
                </a>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Perguntas Frequentes (FAQ)
            </h2>

            <div className="space-y-4 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">O que é um contrato de comodato?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    É um acordo gratuito para emprestar bens com a obrigação de devolvê-los no mesmo estado. Não há pagamento envolvido.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Precisa de testemunhas ou reconhecimento em cartório?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Não necessariamente. O contrato é válido com apenas as assinaturas das partes, mas o reconhecimento de firma dá mais segurança jurídica.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Posso emprestar um carro com contrato de doação?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Não. Se você pretende receber o bem de volta, use um contrato de comodato, não de doação. A doação transfere a propriedade definitivamente.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">O contrato vale para bens imóveis?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Sim. Pode ser usado para ceder casas, salas comerciais, terrenos ou partes de imóveis — desde que sem cobrança. Mas para imóveis, a formalização em cartório é mais rigorosa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">E se o bem se perder ou for roubado?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Na doação, o bem já pertence ao donatário, então o risco é dele. Na venda, o risco também passa para o comprador após a entrega. Em casos de comodato, o risco é do comodante, salvo negligência do comodatário.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Posso rescindir uma doação antes do prazo?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Doação não tem prazo — ela é definitiva. Só pode ser revogada em casos específicos, como ingratidão do donatário ou necessidade extrema do doador.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Onde baixar um modelo válido?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Você pode gerar um gratuitamente em <a href="/tipos-de-contratos" className="text-primary hover:text-primary/80 font-medium">modelodecontrato.org</a>, com opção de PDF ou Word, sem cadastro.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted/30 border-muted mb-12">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground italic text-center">
                  Este artigo é informativo e não substitui orientação jurídica personalizada. Para situações complexas, consulte um advogado.
                </p>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            {/* Links Relacionados */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Leia também:</h3>
              <div className="space-y-3">
                <a href="/blog/contrato-comodato" className="block p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-colors">
                  <p className="font-medium text-primary mb-1">Contrato de Comodato: Quando e Como Usar →</p>
                  <p className="text-sm text-muted-foreground">Entenda quando o comodato é a melhor opção para empréstimo gratuito.</p>
                </a>
                <a href="/tipos-de-contratos" className="block p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-colors">
                  <p className="font-medium text-primary mb-1">Tipos de Contratos: Qual Escolher? →</p>
                  <p className="text-sm text-muted-foreground">Veja todos os modelos disponíveis e escolha o ideal para sua situação.</p>
                </a>
              </div>
            </div>
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

export default ContratoDoacao;
