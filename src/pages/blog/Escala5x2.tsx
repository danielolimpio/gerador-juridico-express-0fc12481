import SEO from "@/components/SEO";
import AuthorProfile from "@/components/AuthorProfile";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Scale,
  Clock,
  Users,
  ArrowRight,
  ExternalLink,
  Building2,
  Heart,
  AlertCircle,
  CheckCircle,
  Factory,
} from "lucide-react";
import { Link } from "react-router-dom";

const coverImage = "/images/blog/escala-5x2-cover.jpg";
const middleImage = "/images/blog/escala-5x2-meio.jpg";

const Escala5x2 = () => {
  const relatedArticles: RelatedArticle[] = [
    {
      title: "Novo MEI: Guia Completo, Aprovação no Congresso e Vigência em 2027",
      description: "Tudo sobre o Novo MEI: dois funcionários, novo teto de faturamento e como se preparar.",
      slug: "novo-mei-2027-guia-completo",
      coverImage: "/images/blog/novo-mei-2027-cover.jpg",
      category: "Para Empreendedores",
    },
    {
      title: "Contrato de Prestação de Serviços para Autônomos e MEIs: Guia Completo 2026",
      description: "Como fazer um contrato de prestação de serviços válido para autônomos, freelancers e MEIs.",
      slug: "contrato-prestacao-servicos-autonomos",
      coverImage: "/images/blog/contrato-prestacao-servicos-cover.jpg",
      category: "Para Empreendedores",
    },
    {
      title: "Contrato de Aluguel Residencial: tudo o que você precisa saber antes de assinar",
      description: "Cláusulas essenciais, direitos do inquilino, obrigações do locador e como evitar armadilhas.",
      slug: "contrato-aluguel-residencial",
      coverImage: "/images/blog/contrato-aluguel-residencial-cover.jpg",
      category: "Direitos & Deveres",
    },
  ];

  return (
    <>
      <SEO
        title="Escala 5x2 no Brasil: Guia Completo Após Aprovação na Câmara"
        description="Entenda como vai funcionar a escala 5x2, fim da escala 6x1, redução da jornada para 40 horas semanais, vigência em 2027 e impactos no comércio, indústria e saúde."
        keywords="escala 5x2, fim da escala 6x1, jornada de trabalho 40 horas, escala 5x2 aprovada, escala 5x2 comércio, redução da jornada de trabalho, escala 5x2 shopping, escala 5x2 hospital, escala 5x2 indústria, PEC escala 5x2, escala 5x2 quando entra em vigor, escala 5x2 salário, 44 para 40 horas semanais, jornada semanal reduzida, escala 5x2 senado"
        canonical="https://modelodecontrato.org/blog/escala-5x2-como-vai-funcionar"
      />

      <main className="min-h-screen bg-background">
        <article className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
          {/* Cover Image */}
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 mt-6">
            <img
              src={coverImage}
              alt="Trabalhadores brasileiros saindo do escritório felizes ao final do expediente"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
            />
          </div>

          {/* Header */}
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-green-500/10 text-green-600 dark:text-green-400">
              <Scale className="w-3 h-3 mr-1" />
              Direitos & Deveres
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Escala 5x2: guia completo de como vai funcionar após a aprovação no Congresso
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2026-07-07">07 de julho de 2026</time>
              <span>•</span>
              <span>20 min de leitura</span>
            </div>
          </header>

          <Separator className="my-8" />

          <div className="prose prose-lg max-w-none">
            {/* Introdução */}
            <div className="space-y-6 mb-12">
              <p className="text-lg leading-relaxed">
                Poucas discussões mobilizaram tanto o país nos últimos anos quanto a{" "}
                <strong>escala 5x2</strong>. Cinco dias de trabalho, dois dias de descanso, jornada
                reduzida de 44 para 40 horas semanais e — talvez o ponto mais simbólico — o fim do
                trabalho aos sábados na maior parte do comércio e dos serviços. É a maior mudança na
                organização do tempo do trabalhador brasileiro desde a Constituição de 1988.
              </p>

              <p className="text-lg leading-relaxed">
                Em maio de 2026, a <strong>Câmara dos Deputados aprovou o texto-base</strong> da PEC
                que instituiu a escala 5x2 como padrão nacional. Agora, o projeto está sob análise do
                Senado Federal e deve entrar em vigor de forma gradual a partir de 2027. O ambiente é
                de expectativa por parte dos trabalhadores e de reorganização acelerada por parte das
                empresas, especialmente do comércio de rua, dos shoppings, da indústria e do setor de
                saúde.
              </p>

              <p className="text-lg leading-relaxed">
                Neste guia, escrito com foco em quem quer entender o que muda de verdade — e não só o
                que aparece na manchete —, você vai encontrar a linha do tempo da tramitação, as regras
                aprovadas, os impactos por setor, o que acontece com o salário, as exceções para
                atividades essenciais e um raio-X honesto dos prós e contras. Sem torcida, sem
                achismo: só o que a lei diz e o que o mercado projeta.
              </p>
            </div>

            <Separator className="my-12" />

            {/* O que é */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">O que é, afinal, a escala 5x2?</h2>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  A escala 5x2 nada mais é do que <strong>cinco dias trabalhados por dois dias de
                  descanso</strong> a cada semana. Traduzindo para o dia a dia: o trabalhador cumpre
                  jornada de segunda a sexta e folga aos sábados e domingos. É o modelo que a maioria
                  dos escritórios administrativos, funcionários públicos e bancos já pratica há
                  décadas — e que agora se torna padrão para setores hoje enquadrados na escala 6x1.
                </p>

                <p className="text-lg leading-relaxed">
                  Junto com a mudança de escala, a proposta reduz a jornada máxima de{" "}
                  <strong>44 horas semanais para 40 horas</strong>, sem cortar salário. Isso significa
                  uma jornada padrão de <strong>8 horas por dia, cinco dias por semana</strong>, com
                  algum espaço para negociações coletivas, banco de horas e turnos alternativos.
                </p>

                <Card className="bg-green-500/5 border-green-500/20">
                  <CardContent className="p-6">
                    <p className="text-base leading-relaxed">
                      <strong>Em resumo:</strong> não é apenas uma folga a mais. É uma reorganização
                      completa do jeito como o Brasil trabalha, com efeito em custo de operação,
                      escala de lojas, funcionamento aos sábados e planejamento familiar.
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
                  <h2 className="text-3xl font-bold mb-4">Como está a tramitação no Congresso Nacional</h2>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                A PEC da escala 5x2 é o desdobramento da campanha “Vida Além do Trabalho” (VAT), que
                nasceu nas redes em 2023 e chegou ao Congresso como projeto de emenda constitucional.
                Você pode acompanhar cada movimentação diretamente no{" "}
                <a
                  href="https://www.senado.leg.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  portal oficial do Senado Federal
                </a>{" "}
                e no{" "}
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
                  <h3 className="text-2xl font-semibold mb-3">Maio de 2026 — aprovação na Câmara</h3>
                  <p className="text-lg leading-relaxed">
                    A Câmara dos Deputados aprovou, em dois turnos, o texto-base da PEC. Ficou
                    definida a redução gradual da jornada de 44 para 40 horas e a substituição da
                    escala 6x1 pela 5x2 no comércio, nos serviços e na indústria.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">2026 — análise no Senado Federal</h3>
                  <p className="text-lg leading-relaxed">
                    O texto foi enviado ao Senado, onde passa pela Comissão de Constituição e Justiça
                    (CCJ) e pela Comissão de Assuntos Sociais (CAS). Estima-se votação em plenário
                    ainda no segundo semestre. Havendo modificações, o texto volta para a Câmara.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">2027 — vigência prevista</h3>
                  <p className="text-lg leading-relaxed">
                    Sancionada a lei, a expectativa é de <strong>vigência a partir de 2027</strong>,
                    com implementação escalonada em três a cinco anos, dependendo do setor. Essa
                    gradação é a chave para evitar impacto brusco no comércio e na indústria.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Middle Image */}
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden my-12">
              <img
                src={middleImage}
                alt="Congresso Nacional brasileiro em Brasília, sede da votação da escala 5x2"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>

            {/* Como vai funcionar */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Como a nova escala 5x2 vai funcionar na prática</h2>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Na prática, o desenho aprovado prevê algumas regras simples de entender, mas com
                impactos profundos no cotidiano das empresas e dos trabalhadores. As principais são:
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>
                  <strong>Cinco dias trabalhados por dois dias de descanso semanal</strong>, sendo pelo
                  menos um domingo por mês obrigatoriamente incluído no descanso.
                </li>
                <li>
                  <strong>Jornada de 40 horas semanais</strong>, com jornada diária padrão de 8 horas,
                  admitindo variações via acordo coletivo.
                </li>
                <li>
                  <strong>Redução gradual</strong> ao longo de três a cinco anos, evitando choque no
                  custo operacional das empresas.
                </li>
                <li>
                  <strong>Manutenção do salário</strong>: o salário-base do trabalhador não pode ser
                  reduzido em razão da redução da jornada.
                </li>
                <li>
                  <strong>Escalas alternativas permitidas</strong>: comércio, saúde e indústria podem
                  adotar 4x3, 5x2 tradicional ou modelos em revezamento, desde que respeitado o teto
                  de 40 horas.
                </li>
                <li>
                  <strong>Preservação do banco de horas</strong>, com regras próprias de compensação
                  em até 12 meses.
                </li>
              </ul>

              <p className="text-lg leading-relaxed mt-6">
                Convém prestar atenção em um ponto: a Constituição já autoriza acordos coletivos para
                distribuir a jornada de forma mais flexível. Com a nova regra, a base passa a ser mais
                curta, mas cada categoria pode negociar particularidades — inclusive o funcionamento
                em fins de semana em setores específicos.
              </p>
            </section>

            <Separator className="my-12" />

            {/* Salário */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">O salário vai diminuir com a escala 5x2?</h2>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Essa é a pergunta que mais aparece em qualquer roda de conversa. O texto aprovado é
                claro: <strong>não pode haver redução salarial</strong> em decorrência da mudança de
                escala. Ou seja, quem hoje ganha R$ 2.500,00 trabalhando 44 horas continuará ganhando
                R$ 2.500,00 trabalhando 40 horas.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O que os economistas debatem é o efeito de médio e longo prazo. Existem duas visões
                principais:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-green-500/5 border-green-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-green-700 dark:text-green-400">
                      Visão otimista
                    </h3>
                    <p className="text-base leading-relaxed">
                      A produtividade tende a subir com jornadas menores, o consumo interno cresce
                      (mais tempo livre = mais gasto) e novos empregos são criados para cobrir o
                      volume operacional. Salários acompanham a média histórica de reajustes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-orange-500/5 border-orange-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-orange-700 dark:text-orange-400">
                      Visão cautelosa
                    </h3>
                    <p className="text-base leading-relaxed">
                      Setores com margem apertada (comércio popular, restaurantes, serviços de rua)
                      podem sofrer aumento de custo por hora trabalhada, o que pressiona os reajustes
                      salariais reais e pode levar a algum enxugamento em cargos de menor
                      qualificação.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg leading-relaxed mt-6">
                A verdade fica no meio. Estudos internacionais sobre semanas reduzidas de trabalho
                (Islândia, Bélgica, Reino Unido) mostraram <strong>ganhos de produtividade</strong>,
                mas o Brasil tem uma economia muito mais informal e um comércio que depende dos
                sábados. Por isso a redução foi desenhada em <strong>etapas graduais</strong>, para
                permitir o ajuste do mercado.
              </p>
            </section>

            <Separator className="my-12" />

            {/* Impacto por setor */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Como a escala 5x2 afeta cada setor</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Comércio de rua</h3>
                  <p className="text-lg leading-relaxed">
                    O comércio de rua vive dos sábados. Lojas de bairro, papelarias, açougues,
                    padarias e mercados menores dependem do movimento do fim de semana. A tendência é
                    manter o funcionamento aos sábados <strong>via revezamento de equipe</strong>, com
                    parte dos empregados folgando na sexta ou na segunda. Muitas empresas devem
                    contratar meio-turno adicional para compensar as horas retiradas.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Shoppings centers</h3>
                  <p className="text-lg leading-relaxed">
                    Os shoppings são caso à parte. Com contrato de locação atrelado ao horário de
                    funcionamento, dificilmente vão fechar aos sábados. O que muda é a escala interna
                    das lojas: cada operação precisará <strong>redimensionar a equipe</strong> para
                    cobrir sábado, domingo e feriados com folgas compensatórias no meio da semana. É
                    provável que aumente a contratação de aprendizes, jovens em primeiro emprego e
                    trabalho intermitente.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Restaurantes, bares e turismo</h3>
                  <p className="text-lg leading-relaxed">
                    Setor com forte pico nos fins de semana. Aqui, a solução mais discutida é a
                    <strong> escala flexível 5x2 com folgas móveis</strong>, garantindo cobertura de
                    sexta a domingo. Cozinhas de restaurante costumam operar em turnos ajustados por
                    convenção coletiva — a nova regra apenas encurta a jornada total, mantendo o
                    espírito de flexibilidade.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Indústria e siderurgia</h3>
                  <p className="text-lg leading-relaxed">
                    Indústrias com <strong>processos contínuos</strong>, como siderurgias, refinarias,
                    fábricas de papel e cimenteiras, não podem parar. Para esses casos, a legislação
                    prevê escalas específicas — como <strong>4x2, 6x2 (turnos) ou 12x36</strong> —,
                    todas ajustadas ao teto anual de horas trabalhadas. A carga semanal média cai,
                    mas a operação contínua é preservada. Trabalhadores em turnos ininterruptos de
                    revezamento continuam com regime próprio, como já ocorre hoje.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Saúde: hospitais, clínicas e emergência</h3>
                  <p className="text-lg leading-relaxed">
                    Hospitais e prontos-socorros também têm regime especial. A famosa escala 12x36
                    continua permitida para enfermagem, médicos plantonistas e equipe de urgência,
                    seguindo o disposto na CLT. Além disso, hospitais podem manter escalas
                    <strong> 5x2 com dias móveis</strong>, garantindo que sábado e domingo tenham
                    equipe completa. O objetivo é <strong>reduzir o esgotamento profissional</strong>,
                    e não paralisar o atendimento.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Serviços essenciais (segurança, transporte, energia)</h3>
                  <p className="text-lg leading-relaxed">
                    Setores essenciais têm escalas próprias garantidas pela Constituição. A nova
                    regra não afeta trabalhos como policiais, bombeiros, motoristas de ônibus,
                    aeroviários, controladores de tráfego e operadores de energia — mas convenções
                    coletivas podem, sim, discutir descanso adicional e redução de jornada
                    proporcional.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Flexibilidade */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Quem quiser continuar na 6x1 poderá manter?</h2>

              <p className="text-lg leading-relaxed mb-6">
                Esse é outro ponto que gera dúvidas. A regra aprovada estabelece que a{" "}
                <strong>escala 5x2 será o padrão nacional</strong>, mas prevê exceções específicas
                mediante <strong>acordo coletivo</strong> firmado com o sindicato da categoria.
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>
                  <strong>Setores com pico de fim de semana</strong> podem manter operação aos
                  sábados, desde que compensem a jornada em outros dias.
                </li>
                <li>
                  <strong>Escalas 12x36, 5x1, 4x2 e similares</strong> continuam válidas nas atividades
                  essenciais e em turnos de revezamento.
                </li>
                <li>
                  <strong>Trabalho individual voluntário</strong> aos sábados: permitido com adicional
                  de horas extras (mínimo de 50%) ou compensação em dobro.
                </li>
              </ul>

              <p className="text-lg leading-relaxed mt-6">
                Ou seja: a escala 6x1 pura, como muitas categorias vivem hoje, deixa de existir como
                regra. Mas variações negociadas podem preservar boa parte da flexibilidade — o
                sindicato do trabalhador ganha um papel ainda mais estratégico nessa transição.
              </p>
            </section>

            <Separator className="my-12" />

            {/* Empresas */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Impacto no setor empresarial</h2>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Do lado das empresas, três desafios costumam ser citados por confederações como a
                CNI (Confederação Nacional da Indústria) e a CNC (Confederação Nacional do Comércio):
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">1. Aumento do custo por hora</h3>
                  <p className="text-lg leading-relaxed">
                    Reduzir a jornada mantendo o salário eleva o custo unitário da hora trabalhada.
                    Para compensar, empresas devem investir em produtividade (automação, gestão,
                    treinamento) e revisar processos internos.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">2. Contratação para cobrir escala</h3>
                  <p className="text-lg leading-relaxed">
                    Setores que precisam ficar abertos aos sábados terão de contratar novos
                    empregados ou usar contratos intermitentes. É provável que empresas menores
                    formalizem parcerias com prestadores{" "}
                    <Link
                      to="/blog/contrato-prestacao-servicos-autonomos"
                      className="text-primary hover:underline font-medium"
                    >
                      via contrato de prestação de serviços com autônomos
                    </Link>{" "}
                    para reforçar a escala nos fins de semana.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">3. Impacto no fluxo de caixa</h3>
                  <p className="text-lg leading-relaxed">
                    Quem já opera com margem apertada pode sofrer no primeiro ano. A implementação
                    gradual, no entanto, tende a diluir o impacto. O SEBRAE recomenda que
                    micro e pequenas empresas façam projeções de custo antes da vigência para
                    reajustar preços de forma responsável.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed mt-6">
                Vale acompanhar as posições oficiais do{" "}
                <a
                  href="https://www.gov.br/trabalho-e-emprego/pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Ministério do Trabalho e Emprego
                </a>{" "}
                para não perder nenhum detalhe da regulamentação.
              </p>
            </section>

            <Separator className="my-12" />

            {/* Qualidade de vida */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Como a escala 5x2 pode melhorar a vida do trabalhador</h2>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Não é preciso ser especialista para entender: dois dias de descanso são muito
                diferentes de um. Estudos brasileiros e internacionais apontam vários ganhos
                relacionados à saúde física e mental:
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>
                  <strong>Redução de burnout e afastamentos</strong>: um segundo dia de folga permite
                  descanso real, além dos afazeres domésticos que tomam quase todo o sábado atual.
                </li>
                <li>
                  <strong>Mais tempo com a família</strong>: pais podem acompanhar a rotina dos
                  filhos e a divisão do trabalho doméstico tende a ficar mais equilibrada.
                </li>
                <li>
                  <strong>Aumento do consumo cultural e turismo</strong>: mais lazer significa mais
                  gasto em cinema, eventos, viagens curtas e restaurantes.
                </li>
                <li>
                  <strong>Redução de acidentes de trabalho</strong>: fadiga acumulada é uma das
                  principais causas de erros e lesões.
                </li>
                <li>
                  <strong>Ampliação de estudos e formação</strong>: mais tempo livre no fim de
                  semana significa mais oportunidade de cursos, faculdade e requalificação.
                </li>
              </ul>

              <Card className="bg-blue-500/5 border-blue-500/20 mt-8">
                <CardContent className="p-6">
                  <p className="text-base leading-relaxed">
                    Um dado curioso: nos países que reduziram a jornada, o número de horas
                    <strong> efetivamente produtivas por trabalhador cresceu</strong>. As pessoas
                    concentram-se mais em jornadas menores, reduzem distrações e chegam mais
                    descansadas. É um contraponto interessante ao medo de perda de produtividade.
                  </p>
                </CardContent>
              </Card>
            </section>

            <Separator className="my-12" />

            {/* Riscos */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Os riscos e pontos de atenção</h2>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Não é justo pintar apenas o lado bom. A transição envolve riscos reais que precisam
                ser levados em conta:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Aumento da informalidade</h3>
                  <p className="text-lg leading-relaxed">
                    Se o custo da mão de obra formal subir sem contrapartida de produtividade,
                    negócios pequenos podem migrar para prestação por MEI, contratos PJ e trabalho
                    intermitente. Isso pode diluir os direitos do trabalhador na prática.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Enxugamento de vagas iniciais</h3>
                  <p className="text-lg leading-relaxed">
                    Cargos de baixa qualificação (empacotador, repositor, auxiliar) podem ser
                    reduzidos temporariamente conforme empresas revisam suas escalas. O contrapeso é
                    a criação de vagas em turnos de fim de semana.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Judicialização inicial</h3>
                  <p className="text-lg leading-relaxed">
                    Toda grande reforma trabalhista gera onda de ações. É natural que a Justiça do
                    Trabalho receba muitos casos ligados a compensação de horas, escalas 12x36 e
                    aplicação por categoria. Empresas devem investir em regularização documental —
                    inclusive contratos internos — para não sofrer no processo.
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
                    Precisa formalizar contratos com essa nova realidade?
                  </h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Com a escala 5x2 chegando, muitos empregadores vão reforçar escalas com
                    prestadores autônomos. Use nosso gerador de contrato gratuito, sem cadastro, para
                    formalizar cada acordo em minutos.
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
                      href="https://www.senado.leg.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Senado Federal — acompanhamento oficial de projetos</span>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <a
                      href="https://www.gov.br/trabalho-e-emprego/pt-br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Ministério do Trabalho e Emprego — regulamentações vigentes</span>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <a
                      href="https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452compilado.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>CLT (Consolidação das Leis do Trabalho) — texto oficial no Planalto</span>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Conclusão */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Conclusão: o Brasil que trabalha menos e vive mais</h2>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  A adoção da escala 5x2 é, sem exagero, uma mudança geracional. Ela redesenha o
                  tempo do trabalhador brasileiro, aproxima o país das principais economias
                  desenvolvidas e força uma revisão bem-vinda na maneira como as empresas organizam
                  suas equipes. Ao mesmo tempo, exige responsabilidade: uma transição feita sem
                  gradação pode gerar mais problemas do que soluções.
                </p>

                <p className="text-lg leading-relaxed">
                  O desafio, tanto para o poder público quanto para empregadores e trabalhadores, é
                  encarar a nova regra como oportunidade de <strong>aumentar a produtividade real</strong>,
                  investir em tecnologia, treinar equipes e valorizar o tempo de descanso como
                  ingrediente essencial de qualidade de vida. Se essa conta fechar, o país sai
                  ganhando por muitas décadas.
                </p>

                <p className="text-lg leading-relaxed">
                  Continue acompanhando este blog — assim que houver movimentação no Senado, novo
                  texto de emenda ou regulamentações do Ministério do Trabalho, este guia será
                  atualizado.
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
                    q: "Quando a escala 5x2 entra em vigor?",
                    a: "A vigência prevista é 2027, com implementação gradual em até cinco anos a partir da sanção da lei, para permitir a adaptação de empresas.",
                  },
                  {
                    q: "A escala 5x2 vale para todos os trabalhadores?",
                    a: "É a regra geral, mas há exceções: hospitais, indústrias de processo contínuo, serviços essenciais e turnos de revezamento continuam com escalas próprias.",
                  },
                  {
                    q: "Vou ganhar menos com a escala 5x2?",
                    a: "Não. O texto proíbe redução salarial em decorrência da mudança de jornada. Reajustes futuros seguem as convenções coletivas.",
                  },
                  {
                    q: "Meu chefe pode manter a escala 6x1 no meu contrato?",
                    a: "Não como padrão. A escala 6x1 pura deixa de existir. É possível manter operação aos sábados via revezamento (5x2 com folgas móveis) ou por acordo coletivo específico.",
                  },
                  {
                    q: "Como fica o comércio de rua e os shoppings aos sábados?",
                    a: "Continuam abertos. O que muda é a escala interna: cada colaborador cumpre cinco dias, com folgas alternadas para cobrir sábado, domingo e feriados.",
                  },
                  {
                    q: "E os hospitais e siderurgias que não podem parar?",
                    a: "Mantêm escalas específicas como 12x36 e turnos de revezamento, com a jornada semanal média ajustada ao novo teto de 40 horas.",
                  },
                  {
                    q: "Preciso mudar meu contrato de trabalho atual?",
                    a: "A mudança será automática quando a lei entrar em vigor. Ainda assim, empregadores podem publicar aditivos contratuais formalizando a nova jornada.",
                  },
                  {
                    q: "A escala 5x2 vale para MEI e autônomos?",
                    a: "Não. A regra é para trabalhadores com carteira assinada (CLT). MEIs e autônomos continuam definindo sua própria jornada.",
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
                    Este artigo é informativo e não substitui orientação jurídica personalizada. Para
                    situações específicas, consulte um advogado trabalhista de sua confiança.
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

export default Escala5x2;
