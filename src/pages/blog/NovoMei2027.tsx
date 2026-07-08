import SEO from "@/components/SEO";
import AuthorProfile from "@/components/AuthorProfile";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  FileText,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Users,
  Wallet,
  Scale,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const coverImage = "/images/blog/novo-mei-2027-cover.jpg";
const middleImage = "/images/blog/novo-mei-2027-meio.jpg";

const NovoMei2027 = () => {
  const relatedArticles: RelatedArticle[] = [
    {
      title: "Contrato de Prestação de Serviços para Autônomos e MEIs: Guia Completo 2026",
      description: "Como fazer um contrato de prestação de serviços válido para autônomos, freelancers e MEIs.",
      slug: "contrato-prestacao-servicos-autonomos",
      coverImage: "/images/blog/contrato-prestacao-servicos-cover.jpg",
      category: "Para Empreendedores",
    },
    {
      title: "Contrato de Franquia: Guia Completo para Empreendedores",
      description: "Aprenda tudo sobre contratos de franquia e como expandir seu negócio com segurança.",
      slug: "contrato-franquia",
      coverImage: "/images/blog/contrato-franquia-cover.jpg",
      category: "Para Empreendedores",
    },
    {
      title: "Contrato de Comodato: Quando e Como Usar para Empréstimo Gratuito de Bens",
      description: "Saiba quando usar o contrato de comodato para emprestar bens sem cobrar.",
      slug: "contrato-comodato",
      coverImage: "/images/blog/contrato-comodato-cover.jpg",
      category: "Para Empreendedores",
    },
  ];

  return (
    <>
      <SEO
        title="Novo MEI 2027: Guia Completo, Aprovação no Congresso e Novas Regras"
        description="Tudo sobre o Novo MEI: 2 funcionários permitidos, novo teto de faturamento, tramitação no Congresso e o que muda para o microempreendedor a partir de 2027."
        keywords="novo mei 2027, novo mei aprovado, mei dois funcionarios, novo teto mei, novo faturamento mei 2027, projeto de lei complementar mei, mei nova regra, novo limite mei, congresso nacional mei, senado mei, mei 2027 novidades, quando entra em vigor novo mei, contratar dois funcionarios mei, mei ampliado, reforma do mei"
        canonical="https://modelodecontrato.org/blog/novo-mei-2027-guia-completo"
      />

      <main className="min-h-screen bg-background">
        <article className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
          {/* Cover Image */}
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 mt-6">
            <img
              src={coverImage}
              alt="Microempreendedora individual brasileira trabalhando em seu ateliê próprio"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
            />
          </div>

          {/* Header */}
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Briefcase className="w-3 h-3 mr-1" />
              Para Empreendedores
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Novo MEI: guia completo da aprovação no Congresso e vigência prevista para 2027
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2026-07-07">07 de julho de 2026</time>
              <span>•</span>
              <span>22 min de leitura</span>
            </div>
          </header>

          <Separator className="my-8" />

          <div className="prose prose-lg max-w-none">
            {/* Introdução */}
            <div className="space-y-6 mb-12">
              <p className="text-lg leading-relaxed">
                Quem abriu um <strong>MEI</strong> nos últimos anos sabe muito bem: o modelo virou pequeno
                demais para a realidade de muita gente. Quem tem uma loja de bairro, presta serviço
                técnico, entrega comida, faz manutenção ou toca uma marmitaria estourou o teto de
                faturamento em pouco tempo — e ainda esbarrou no limite de contratar apenas um único
                empregado. É justamente aí que entra o <strong>Novo MEI</strong>, projeto que caminha no
                Congresso Nacional e promete a maior atualização do regime desde a sua criação, em 2008.
              </p>

              <p className="text-lg leading-relaxed">
                A boa notícia é que, depois de anos de audiências públicas, o texto ganhou fôlego em 2025
                e 2026 e hoje é uma das prioridades pactuadas entre o governo federal, o SEBRAE, as
                confederações comerciais e as bancadas do empreendedorismo. A previsão mais aceita hoje é
                de que as regras entrem em vigor em <strong>1º de janeiro de 2027</strong>, dando tempo
                para a Receita Federal atualizar sistemas e para os empreendedores se adaptarem.
              </p>

              <p className="text-lg leading-relaxed">
                Neste guia, escrito em linguagem de gente que trabalha no dia a dia (não em juridiquês de
                gabinete), você vai entender: o que muda de verdade, quanto passa a ser o novo teto de
                faturamento, como fica a possibilidade de <strong>contratar dois funcionários</strong>,
                quais categorias serão beneficiadas, como está a tramitação, o que ainda pode mudar e,
                principalmente, como se preparar para a virada de chave em 2027.
              </p>
            </div>

            <Separator className="my-12" />

            {/* O que é */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">O que é o MEI hoje — e por que ele precisou mudar</h2>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  O Microempreendedor Individual foi criado pela Lei Complementar nº 128/2008 com um
                  objetivo bem definido: tirar da informalidade milhões de brasileiros que trabalhavam por
                  conta própria — vendedores ambulantes, cabeleireiras, borracheiros, costureiras,
                  encanadores, pequenos comerciantes. O tripé sempre foi o mesmo: teto de faturamento
                  baixo, tributação simplificada e apenas um empregado registrado, recebendo um salário
                  mínimo ou o piso da categoria.
                </p>

                <p className="text-lg leading-relaxed">
                  De lá pra cá, quase 16 milhões de brasileiros formalizaram um CNPJ MEI, segundo dados do
                  Portal do Empreendedor. Foi um enorme sucesso — só que o país mudou. A inflação
                  acumulada corroeu o valor real do teto (que está congelado em{" "}
                  <strong>R$ 81.000,00 por ano</strong> desde 2018), o comércio eletrônico explodiu, os
                  aplicativos criaram novas profissões e o custo de operação subiu. Resultado: muita
                  gente estava sendo desenquadrada, virando ME sem estar preparada, ou operando “no
                  cinza”, dividindo faturamento entre CPFs de parentes para não perder o regime.
                </p>

                <Card className="bg-purple-500/5 border-purple-500/20">
                  <CardContent className="p-6">
                    <p className="text-base leading-relaxed">
                      <strong>Em resumo:</strong> o MEI atual não acompanha mais quem cresceu. O
                      chamado <em>Novo MEI</em> nasce para corrigir essa distorção, ampliar o teto,
                      permitir a contratação de <strong>até dois empregados</strong> e reduzir a chance
                      de o pequeno negócio “quebrar” justamente quando começa a dar certo.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Tramitação */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Como está a tramitação do Novo MEI no Congresso Nacional</h2>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                O texto que hoje discutimos como <strong>“Novo MEI”</strong> é, na verdade, um conjunto
                de propostas que se juntaram ao longo dos últimos anos. Os principais são o Projeto de
                Lei Complementar nº 108/2021 e o PLP nº 68/2024, apensados na Câmara dos Deputados, além
                de sugestões trazidas pelo governo federal por meio do Ministério do Empreendedorismo,
                da Microempresa e da Empresa de Pequeno Porte. Você pode acompanhar a tramitação
                atualizada diretamente no{" "}
                <a
                  href="https://www.camara.leg.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  portal da Câmara dos Deputados
                </a>
                .
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">1. O que já foi aprovado</h3>
                  <p className="text-lg leading-relaxed">
                    A comissão especial da Câmara aprovou o parecer que consolida os principais pontos:
                    novo teto de faturamento, permissão para dois empregados e faixas escalonadas de DAS
                    (o boleto único do MEI). Em 2026, o texto foi levado ao plenário e recebeu apoio
                    majoritário das bancadas do comércio, dos serviços e do agronegócio familiar.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">2. O que ainda falta</h3>
                  <p className="text-lg leading-relaxed">
                    Depois da Câmara, o projeto segue para o <strong>Senado Federal</strong>, onde
                    deverá passar pelas Comissões de Assuntos Econômicos (CAE) e de Constituição e
                    Justiça (CCJ) antes de ir a plenário. Havendo emendas, volta à Câmara. Só depois
                    disso é encaminhado à sanção presidencial. É esse trajeto que faz analistas
                    apostarem em <strong>publicação da lei ainda em 2026</strong>, com vigência plena a
                    partir de janeiro de 2027.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">3. Por que 2027 e não antes</h3>
                  <p className="text-lg leading-relaxed">
                    Mudar o MEI não é só alterar um valor no sistema: é preciso atualizar o Portal do
                    Empreendedor, o aplicativo do MEI, integrar com o eSocial, treinar contadores e
                    ajustar convênios com prefeituras. Por isso, mesmo que a sanção saia neste ano, a
                    <strong> vigência oficial deve ficar para o exercício de 2027</strong>, respeitando
                    o princípio da anterioridade tributária.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Middle Image */}
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden my-12">
              <img
                src={middleImage}
                alt="Dois funcionários trabalhando juntos em um pequeno negócio brasileiro"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>

            {/* Novo teto */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Qual será o novo teto de faturamento anual do MEI</h2>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Este é o ponto que mais interessa a quem está estourando o limite atual. O relatório
                aprovado na Câmara prevê um <strong>reajuste substancial do teto</strong>, alinhando o
                MEI à inflação acumulada desde 2018 e criando um respiro para o crescimento natural do
                negócio.
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>
                  <strong>Teto atual:</strong> R$ 81.000,00 por ano (equivalente a R$ 6.750,00 por mês
                  em média).
                </li>
                <li>
                  <strong>Novo teto proposto:</strong> <strong>R$ 130.000,00 por ano</strong>, o que
                  equivale a cerca de <strong>R$ 10.833,00 por mês</strong>.
                </li>
                <li>
                  <strong>MEI Caminhoneiro:</strong> valor específico, com previsão de subir para até
                  R$ 251.600,00, em linha com os custos do setor.
                </li>
                <li>
                  <strong>Correção automática:</strong> uma das principais novidades é a criação de
                  gatilho de atualização periódica do teto, evitando que fique congelado por uma década,
                  como aconteceu.
                </li>
              </ul>

              <p className="text-lg leading-relaxed mt-6">
                Na prática, isso significa que profissionais como fotógrafos, confeiteiros, prestadores
                de serviços digitais, mecânicos e pequenos comerciantes ganham fôlego para
                <strong> quase dobrar o faturamento sem sair do regime simplificado</strong>. Menos
                burocracia, menos custo com contabilidade complexa e a permanência do DAS único.
              </p>
            </section>

            <Separator className="my-12" />

            {/* Dois empregados */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">MEI vai poder contratar dois funcionários: como vai funcionar</h2>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Talvez essa seja a mudança mais celebrada. Hoje, o microempreendedor individual só pode
                registrar <strong>um empregado</strong> recebendo o piso da categoria. Para muitos
                negócios, isso é pouco: pense em uma barbearia com dois cadeiras, um brechó que precisa
                de gente no caixa e no atendimento ou um serviço de entrega em dupla. Com o Novo MEI,
                caem essas amarras.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">O que a proposta permite</h3>
                  <p className="text-lg leading-relaxed">
                    O texto autoriza a contratação de <strong>até dois empregados</strong>, cada um
                    recebendo um salário mínimo ou o piso da categoria profissional (o que for maior). A
                    ideia é dobrar a capacidade produtiva sem migrar de regime e sem perder o DAS
                    simplificado.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Direitos trabalhistas garantidos</h3>
                  <p className="text-lg leading-relaxed">
                    Os dois empregados continuam com <strong>todos os direitos previstos na CLT</strong>:
                    carteira assinada, férias, 13º salário, FGTS, INSS, aviso-prévio, seguro-desemprego.
                    Nada muda para o trabalhador. O que muda é o cadastro no eSocial, que passa a
                    permitir dois vínculos ativos no CNPJ MEI.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Custo mensal aproximado por empregado</h3>
                  <p className="text-lg leading-relaxed">
                    O empregador MEI paga 3% de INSS sobre o salário e 8% de FGTS, além do próprio
                    salário. Para dois empregados no mínimo, isso representa um custo mensal fixo em
                    torno de R$ 3.400 a R$ 3.800, dependendo do ano-base. Antes de contratar, faça a
                    conta na ponta do lápis.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Contrato especial */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Precisa de um contrato especial para contratar dois funcionários?</h2>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Essa é uma dúvida legítima que vem crescendo em fóruns e grupos de empreendedores. A
                resposta curta: <strong>não existe um “contrato especial de MEI”</strong>. O documento
                que rege a relação continua sendo o <strong>contrato de trabalho tradicional (CLT)</strong>,
                assinado individualmente com cada um dos dois empregados.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O que muda é o registro no eSocial (que passa a aceitar dois vínculos) e a atenção
                redobrada com pontos como:
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>
                  <strong>Jornada de cada empregado:</strong> mesmo com dois funcionários, cada um tem
                  jornada máxima de 44 horas semanais (ou a nova regra da escala 5x2, quando aprovada).
                </li>
                <li>
                  <strong>Escala e revezamento:</strong> se o negócio funciona em horários estendidos,
                  vale definir escala por escrito para evitar horas extras não pagas.
                </li>
                <li>
                  <strong>Descrição de função:</strong> deixe claro no contrato quem faz o quê. Isso
                  evita o famoso “acumula tudo” que gera ações trabalhistas.
                </li>
                <li>
                  <strong>Cláusula de confidencialidade:</strong> se o empregado tem acesso a lista de
                  clientes ou fornecedores, formalize.
                </li>
              </ul>

              <p className="text-lg leading-relaxed mt-6">
                Para se antecipar, vale ler nosso guia sobre o{" "}
                <Link to="/blog/contrato-prestacao-servicos-autonomos" className="text-primary hover:underline font-medium">
                  contrato de prestação de serviços para autônomos e MEIs
                </Link>
                , especialmente se você planeja combinar contratações CLT com prestadores PJ para
                escalar o negócio.
              </p>
            </section>

            <Separator className="my-12" />

            {/* Novas faixas do DAS */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Como fica o DAS: as novas faixas de contribuição</h2>

              <p className="text-lg leading-relaxed mb-6">
                O <strong>DAS-MEI</strong> — aquele boleto único que hoje custa cerca de R$ 75 — também
                será atualizado. A tendência é criar <strong>faixas progressivas</strong>, de modo que
                o valor pago seja proporcional ao faturamento. É uma forma de manter a simplicidade sem
                penalizar quem fatura pouco.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Faixa 1 – MEI Básico</h3>
                  <p className="text-lg leading-relaxed">
                    Para quem fatura até R$ 81 mil por ano (o teto atual). Contribuição mantida em
                    torno do valor de hoje, corrigida apenas pela inflação.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Faixa 2 – MEI Ampliado</h3>
                  <p className="text-lg leading-relaxed">
                    Para quem fatura entre R$ 81 mil e R$ 130 mil. O DAS passa a incorporar um
                    complemento proporcional, mas ainda muito abaixo dos custos do Simples Nacional
                    tradicional.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Faixa 3 – MEI Caminhoneiro</h3>
                  <p className="text-lg leading-relaxed">
                    Mantém a contribuição diferenciada, com percentual sobre o INSS calculado sobre
                    valor específico do setor.
                  </p>
                </div>
              </div>

              <Card className="bg-blue-500/5 border-blue-500/20 mt-8">
                <CardContent className="p-6">
                  <p className="text-base leading-relaxed">
                    <strong>Fique atento:</strong> os valores exatos ainda podem sofrer ajustes na
                    votação do Senado. O importante é que a lógica é clara: <em>quem fatura mais paga
                    mais, mas quem fatura pouco continua com o mesmo custo</em>.
                  </p>
                </CardContent>
              </Card>
            </section>

            <Separator className="my-12" />

            {/* Atividades */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Quais atividades passam a ser permitidas no Novo MEI</h2>

              <p className="text-lg leading-relaxed mb-6">
                Outro ponto delicado do MEI atual é a lista de ocupações permitidas — que exclui
                atividades importantes como advocacia, medicina, engenharia e várias profissões
                regulamentadas. O Novo MEI mantém essa restrição para conselhos profissionais, mas
                <strong> amplia significativamente as ocupações digitais e de serviços</strong>.
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>
                  <strong>Marketing digital e social media:</strong> passa a constar oficialmente na
                  lista de atividades.
                </li>
                <li>
                  <strong>Desenvolvimento de aplicativos e sites (freelancers de tecnologia):</strong>
                  ampliado, com CNAEs mais claros.
                </li>
                <li>
                  <strong>Produção de conteúdo digital:</strong> incluindo criadores de vídeo,
                  podcasters e streamers.
                </li>
                <li>
                  <strong>Serviços de entrega e logística leve:</strong> motofretistas, bikers e
                  motoristas de app com CNPJ.
                </li>
                <li>
                  <strong>Prestadores técnicos:</strong> instalação e manutenção de equipamentos
                  eletrônicos, energia solar e ar-condicionado.
                </li>
                <li>
                  <strong>Educação livre:</strong> professores particulares e produtores de cursos
                  online (dentro dos limites já estabelecidos).
                </li>
              </ul>

              <p className="text-lg leading-relaxed mt-6">
                Se você atua em alguma dessas áreas e hoje trabalha como pessoa física, prepare-se:
                formalizar via Novo MEI ficará bem mais atrativo em 2027.
              </p>
            </section>

            <Separator className="my-12" />

            {/* Impacto */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">O que muda na prática para quem já é MEI</h2>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Se você já tem um MEI aberto, respire fundo: não vai ser preciso fechar e abrir de
                  novo. A migração acontece de forma automática, pelo próprio Portal do Empreendedor,
                  assim que a lei entrar em vigor. É provável que você receba um comunicado da Receita
                  Federal com a nova faixa aplicável ao seu CNPJ.
                </p>

                <p className="text-lg leading-relaxed">
                  Ainda assim, algumas ações preventivas ajudam a começar 2027 no azul:
                </p>

                <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                  <li>
                    <strong>Organize seu fluxo de caixa:</strong> separe o faturamento dos últimos 12
                    meses para saber em qual faixa você entrará.
                  </li>
                  <li>
                    <strong>Regularize eventuais pendências no DAS:</strong> boletos em aberto podem
                    travar a migração automática.
                  </li>
                  <li>
                    <strong>Atualize seus CNAEs:</strong> se você exerce atividade fora dos códigos
                    cadastrados, alinhe antes.
                  </li>
                  <li>
                    <strong>Planeje a contratação do segundo empregado:</strong> se faz sentido, comece
                    a estudar o custo desde já.
                  </li>
                  <li>
                    <strong>Formalize contratos com clientes:</strong> um{" "}
                    <Link to="/gerador" className="text-primary hover:underline font-medium">
                      contrato bem feito com cada cliente
                    </Link>{" "}
                    protege o negócio no crescimento.
                  </li>
                </ul>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Vantagens e desvantagens */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Vantagens e pontos de atenção do Novo MEI</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-green-500/5 border-green-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
                      Vantagens
                    </h3>
                    <ul className="space-y-2 text-base leading-relaxed list-disc pl-5">
                      <li>Teto quase dobrado, chegando a R$ 130 mil por ano.</li>
                      <li>Possibilidade de contratar dois empregados.</li>
                      <li>Reajuste periódico do teto para evitar defasagem.</li>
                      <li>Novas atividades digitais permitidas.</li>
                      <li>Contribuição mantida em faixa competitiva.</li>
                      <li>Migração automática, sem burocracia extra.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-orange-500/5 border-orange-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-orange-700 dark:text-orange-400">
                      Pontos de atenção
                    </h3>
                    <ul className="space-y-2 text-base leading-relaxed list-disc pl-5">
                      <li>Faixa ampliada terá contribuição maior.</li>
                      <li>Custo mensal com dois empregados cresce sensivelmente.</li>
                      <li>Aumento do controle via eSocial e Receita Federal.</li>
                      <li>Algumas profissões regulamentadas continuam fora.</li>
                      <li>Necessidade de organizar contabilidade e notas.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Como se preparar */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Como se preparar hoje para o Novo MEI de 2027</h2>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Ninguém deveria esperar 1º de janeiro de 2027 chegar para agir. Quem se organiza nos
                próximos meses sai na frente e evita correria de última hora. Um caminho recomendado é
                estudar o material gratuito do{" "}
                <a
                  href="https://sebrae.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  SEBRAE
                </a>
                , que já publica cartilhas sobre gestão de MEI, precificação e contratação.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg leading-relaxed">
                    <strong>Faça um diagnóstico do seu faturamento.</strong> Se você fatura entre R$ 6
                    mil e R$ 10 mil por mês, o Novo MEI é praticamente feito para você.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg leading-relaxed">
                    <strong>Padronize seus contratos.</strong> Passe a usar um modelo escrito com todos
                    os clientes — isso reduz calote e evita disputas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg leading-relaxed">
                    <strong>Comece a emitir nota fiscal em todas as vendas.</strong> A Receita cruza
                    dados: informalidade parcial hoje vira problema em 2027.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg leading-relaxed">
                    <strong>Estude a rotina do eSocial.</strong> Contratar dois empregados exige o
                    envio de eventos mensais — vale contar com um contador ou plataforma automatizada.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg leading-relaxed">
                    <strong>Monte uma reserva de caixa.</strong> O segundo empregado só compensa se o
                    caixa aguentar dois salários mesmo em meses fracos.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Perguntas polêmicas */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Pontos polêmicos que ainda podem mudar</h2>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Profissões regulamentadas</h3>
                  <p className="text-lg leading-relaxed">
                    Há forte pressão de conselhos como OAB, CRM e CRC para que profissões
                    regulamentadas continuem fora do MEI. A tendência é que essa restrição seja
                    mantida, mas algumas categorias, como pequenos escritórios de contabilidade
                    técnica, ainda tentam brecha durante o processo.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Fim do MEI Truck</h3>
                  <p className="text-lg leading-relaxed">
                    O MEI Caminhoneiro ganhou faturamento diferenciado em 2022, mas há discussão sobre
                    unificar as regras. A proposta atual mantém a diferenciação, mas revisa o valor
                    máximo permitido.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Fiscalização</h3>
                  <p className="text-lg leading-relaxed">
                    Com o cruzamento de dados via Pix, notas fiscais eletrônicas e maquininhas de
                    cartão, a Receita Federal terá muito mais informação sobre o MEI. Quem trabalha
                    “meio dentro, meio fora” do sistema precisa se acertar antes que a virada aconteça.
                    Vale conferir os canais oficiais do{" "}
                    <a
                      href="https://www.gov.br/receitafederal/pt-br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      portal da Receita Federal
                    </a>{" "}
                    para se atualizar.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-12" />

            {/* CTA */}
            <section className="mb-12">
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/30">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Prepare seus contratos para a nova fase do MEI
                  </h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Cresceu, contratou funcionário, atendendo mais clientes? Formalize tudo com um
                    contrato bem feito. Use nosso gerador gratuito, sem cadastro, e baixe em PDF ou
                    Word em minutos.
                  </p>
                  <Button asChild size="lg" className="text-base">
                    <Link to="/gerador">
                      Gerar Contrato Grátis Agora
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

            <Separator className="my-12" />

            {/* Referências */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Para se aprofundar</h2>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <a
                      href="https://www.camara.leg.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Câmara dos Deputados — acompanhamento oficial de projetos</span>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <a
                      href="https://sebrae.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>SEBRAE — cartilhas, cursos e ferramentas para o MEI</span>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <a
                      href="https://www.gov.br/receitafederal/pt-br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Receita Federal — publicações oficiais sobre Simples Nacional e MEI</span>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Conclusão */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Conclusão: o Novo MEI é uma virada de página</h2>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  O microempreendedor individual chega a 2027 mais parecido com a realidade do país. O
                  teto de <strong>R$ 130 mil</strong>, a possibilidade de contratar dois funcionários e
                  a modernização das atividades permitidas mostram um esforço de encaixar o regime na
                  economia digital, no crescimento dos serviços e no aumento natural do custo de vida.
                </p>

                <p className="text-lg leading-relaxed">
                  Para quem já vive de MEI, é hora de organizar a casa: contratos claros, notas
                  fiscais em dia, contabilidade minimamente controlada e, se possível, uma reserva de
                  caixa para dar segurança na contratação do segundo empregado. Para quem está
                  pensando em abrir, 2027 pode ser o melhor ano da última década para formalizar um
                  pequeno negócio.
                </p>

                <p className="text-lg leading-relaxed">
                  E lembre-se: as regras podem sofrer ajustes finais no Senado. Continue acompanhando
                  este blog — vamos atualizar este guia sempre que houver movimentação relevante no
                  Congresso.
                </p>
              </div>
            </section>

            <Separator className="my-12" />

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes (FAQ)</h2>

              <div className="space-y-4">
                {[
                  {
                    q: "Quando entra em vigor o Novo MEI?",
                    a: "A previsão majoritária é 1º de janeiro de 2027, respeitando a anterioridade tributária. A data pode se antecipar caso o Senado conclua a votação ainda em 2026.",
                  },
                  {
                    q: "Qual será o novo teto de faturamento do MEI?",
                    a: "O projeto aprovado pela comissão da Câmara prevê teto de R$ 130 mil por ano para o MEI comum, com valores diferenciados para o MEI Caminhoneiro.",
                  },
                  {
                    q: "MEI vai poder contratar dois funcionários?",
                    a: "Sim. O texto permite dois empregados, cada um recebendo salário mínimo ou o piso da categoria, com todos os direitos garantidos pela CLT.",
                  },
                  {
                    q: "Preciso de um contrato especial para contratar dois empregados?",
                    a: "Não. O contrato é o padrão de trabalho CLT, assinado individualmente. O que muda é o cadastro no eSocial, que passa a aceitar dois vínculos ativos.",
                  },
                  {
                    q: "Vou pagar mais DAS no Novo MEI?",
                    a: "Depende da faixa. Quem continua abaixo dos R$ 81 mil paga praticamente o mesmo. Quem fatura entre R$ 81 mil e R$ 130 mil terá um complemento proporcional, ainda menor que o Simples Nacional.",
                  },
                  {
                    q: "Preciso fechar meu MEI atual e abrir outro?",
                    a: "Não. A migração é automática, feita pelo Portal do Empreendedor assim que a nova lei entrar em vigor.",
                  },
                  {
                    q: "Advogados, médicos e engenheiros poderão ser MEI?",
                    a: "A tendência é manter a restrição para profissões regulamentadas por conselhos. Isso ainda pode sofrer alterações durante a tramitação no Senado.",
                  },
                  {
                    q: "O Novo MEI pode ser vetado pelo presidente?",
                    a: "Vetos pontuais são possíveis, principalmente sobre valores. Mas há amplo apoio político ao texto, tornando um veto integral improvável.",
                  },
                ].map((f, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{f.q}</h3>
                      <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 bg-muted/30">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground italic">
                    Este artigo é informativo e não substitui orientação jurídica ou contábil
                    personalizada. Para situações específicas, consulte um advogado ou contador de sua
                    confiança.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>

          <Separator className="my-12" />

          {/* Author */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Sobre o Autor</h3>
            <AuthorProfile variant="compact" showSocialLinks={true} />
          </div>
        </article>

        {/* Related */}
        <RelatedArticles articles={relatedArticles} />
      </main>
    </>
  );
};

export default NovoMei2027;
