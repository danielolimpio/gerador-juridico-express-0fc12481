import SEO from "@/components/SEO";
import AuthorProfile from "@/components/AuthorProfile";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Scale,
  ArrowRight,
  ExternalLink,
  AlertCircle,
  Wallet,
  FileText,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const coverImage = "/images/blog/contrato-estagio-cover.jpg";
const middleImage = "/images/blog/contrato-estagio-meio.jpg";

const ContratoEstagio = () => {
  const relatedArticles: RelatedArticle[] = [
    {
      title: "Contrato de Prestação de Serviços para Autônomos e MEIs",
      description: "Guia completo sobre cláusulas, rescisão e proteção jurídica para prestadores de serviço.",
      slug: "contrato-prestacao-servicos-autonomos",
      coverImage: "/images/blog/contrato-prestacao-servicos-cover.jpg",
      category: "Para Empreendedores",
    },
    {
      title: "Escala 5x2: Guia Completo de Como Vai Funcionar",
      description: "Fim da escala 6x1, jornada de 40 horas e impactos no mercado de trabalho.",
      slug: "escala-5x2-como-vai-funcionar",
      coverImage: "/images/blog/escala-5x2-cover.jpg",
      category: "Direitos & Deveres",
    },
    {
      title: "Novo MEI: Aprovação no Congresso e Vigência em 2027",
      description: "Novo teto, novos limites e o que muda para o microempreendedor individual.",
      slug: "novo-mei-2027-guia-completo",
      coverImage: "/images/blog/novo-mei-2027-cover.jpg",
      category: "Para Empreendedores",
    },
  ];

  return (
    <>
      <SEO
        title="Contrato de Estágio 2026: Lei 11.788, Jornada, Bolsa e Direitos"
        description="Guia completo do contrato de estágio em 2026: Lei 11.788/2008, jornada, bolsa-auxílio, seguro obrigatório, TCE, obrigações da empresa e diferença para menor aprendiz."
        keywords="contrato de estágio, Lei 11788, termo de compromisso de estágio, TCE, bolsa auxílio estágio, jornada de estágio, estágio obrigatório e não obrigatório, seguro estagiário, menor aprendiz, diferença estagiário e aprendiz, direitos do estagiário, contrato menor aprendiz, jornada máxima estagiário, recesso estágio, agente de integração"
        canonical="https://modelodecontrato.org/blog/contrato-estagio-lei-11788-guia-completo"
      />

      <main className="min-h-screen bg-background">
        <article className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 mt-6">
            <img
              src={coverImage}
              alt="Estudante estagiário usando notebook em escritório moderno"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
            />
          </div>

          <header className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-green-500/10 text-green-600 dark:text-green-400">
              <Scale className="w-3 h-3 mr-1" />
              Direitos &amp; Deveres
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Contrato de estágio 2026: Lei 11.788, jornada, bolsa e diferenças para o menor aprendiz
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2026-07-13">13 de julho de 2026</time>
              <span>•</span>
              <span>23 min de leitura</span>
            </div>
          </header>

          <Separator className="my-8" />

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 mb-12">
              <p className="text-lg leading-relaxed">
                O estágio é, para milhões de estudantes brasileiros, a primeira porta de entrada no
                mercado formal. Bem estruturado, ele complementa a formação acadêmica, aproxima teoria
                e prática e cria oportunidades reais de contratação após a graduação. Mal
                estruturado, vira mão de obra barata disfarçada, sem retorno pedagógico e com sérios
                riscos jurídicos para a empresa.
              </p>

              <p className="text-lg leading-relaxed">
                Para separar o joio do trigo, o Brasil tem uma lei específica: a{" "}
                <a
                  href="https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11788.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Lei nº 11.788/2008
                </a>
                , conhecida como Lei do Estágio. Ela define quem pode ser estagiário, quem pode
                oferecer estágio, prazo, jornada, bolsa, recesso e obrigações trilaterais entre
                estudante, instituição de ensino e parte concedente. Este guia resume tudo o que
                importa em 2026, com foco prático.
              </p>

              <p className="text-lg leading-relaxed">
                Também tratamos aqui de uma dúvida recorrente: qual a diferença entre o{" "}
                <strong>contrato de estágio</strong> e o <strong>contrato de menor aprendiz</strong>?
                Os dois envolvem jovens em formação, mas seguem regimes jurídicos, faixas etárias e
                regras trabalhistas bem diferentes.
              </p>
            </div>

            <Separator className="my-12" />

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Índice do artigo</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>O que é o contrato de estágio</li>
                <li>Quem pode ser estagiário</li>
                <li>Quem pode oferecer estágio</li>
                <li>Estágio obrigatório e não obrigatório</li>
                <li>Termo de Compromisso de Estágio (TCE)</li>
                <li>Jornada máxima e adaptação em avaliações</li>
                <li>Bolsa-auxílio, auxílio-transporte e recesso</li>
                <li>Seguro obrigatório contra acidentes pessoais</li>
                <li>Obrigações da empresa concedente</li>
                <li>Prazo máximo e desligamento</li>
                <li>Diferença entre estagiário e menor aprendiz</li>
                <li>Perguntas frequentes</li>
              </ul>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">O que é o contrato de estágio</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                O estágio é um <strong>ato educativo escolar supervisionado</strong>, desenvolvido no
                ambiente de trabalho, com o objetivo de preparar o estudante para o mundo profissional.
                Ele não gera vínculo empregatício desde que sejam cumpridos todos os requisitos da Lei
                11.788/2008. É essa a fronteira jurídica que precisa ser respeitada por qualquer
                empresa que contrata estagiários.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Quando a empresa descumpre a lei — exemplo clássico é atribuir ao estagiário funções
                completamente estranhas ao seu curso ou submetê-lo a rotina de empregado sem
                supervisão pedagógica — o estágio é <strong>desconfigurado</strong>. Nesse caso, o
                estudante pode reclamar na Justiça do Trabalho todas as verbas de emprego formal:
                férias, 13º, FGTS, INSS e horas extras.
              </p>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Quem pode ser estagiário</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Podem estagiar estudantes matriculados e frequentando regularmente:
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>Cursos de educação superior (graduação e tecnólogo);</li>
                <li>Cursos de educação profissional técnica de nível médio;</li>
                <li>Ensino médio regular (limitado a atividades compatíveis);</li>
                <li>Educação especial;</li>
                <li>Anos finais do ensino fundamental, na modalidade profissional da educação de jovens e adultos.</li>
              </ul>

              <p className="text-lg leading-relaxed mt-6">
                A idade mínima varia. Para ensino superior, a maioridade é a regra. Para ensino médio,
                a lei permite o estágio a partir dos 16 anos, sempre em atividades compatíveis com o
                grau de desenvolvimento do estudante.
              </p>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Quem pode oferecer estágio</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                A Lei 11.788/2008 chama de <strong>parte concedente</strong> quem oferece a vaga.
                Podem ser:
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>Órgãos e entidades da administração pública direta e indireta;</li>
                <li>Pessoas jurídicas de direito privado;</li>
                <li>Profissionais liberais de nível superior devidamente registrados em seus conselhos.</li>
              </ul>

              <p className="text-lg leading-relaxed mt-6">
                A empresa deve manter proporção limitada de estagiários. Em regra: para 1 a 5
                empregados, 1 estagiário; de 6 a 10, até 2; de 11 a 25, até 5; acima disso, até 20%
                do quadro. Os limites não se aplicam ao estágio obrigatório para conclusão do curso e
                a estagiários com deficiência.
              </p>
            </section>

            <Separator className="my-12" />

            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden my-12">
              <img
                src={middleImage}
                alt="Grupo de estagiários trabalhando em reunião de equipe no escritório"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Estágio obrigatório e não obrigatório</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                A lei divide o estágio em duas espécies. Cada uma tem consequências práticas
                importantes para o pagamento da bolsa e para o cumprimento de carga horária:
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>
                  <strong>Estágio obrigatório:</strong> exigido pelo projeto pedagógico do curso como
                  requisito para diploma. Nesse caso, a bolsa-auxílio e o auxílio-transporte são
                  facultativos, embora bastante comuns.
                </li>
                <li>
                  <strong>Estágio não obrigatório:</strong> atividade complementar, não exigida pelo
                  curso. A concessão de bolsa-auxílio e auxílio-transporte é <strong>obrigatória</strong>.
                </li>
              </ul>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Termo de Compromisso de Estágio (TCE)</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                O TCE é o documento central da relação. É um contrato tripartite, assinado por{" "}
                <strong>estudante, instituição de ensino e parte concedente</strong>. Sem TCE, não há
                estágio válido, e o vínculo passa automaticamente a ser regido pela CLT.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O TCE deve conter, no mínimo:
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>Qualificação completa das três partes;</li>
                <li>Objetivos educacionais e relação das atividades a serem desenvolvidas;</li>
                <li>Nome do supervisor da parte concedente e do professor orientador;</li>
                <li>Jornada semanal e horário do estágio;</li>
                <li>Valor da bolsa e do auxílio-transporte, quando devidos;</li>
                <li>Vigência do estágio;</li>
                <li>Cobertura de seguro contra acidentes pessoais;</li>
                <li>Condições para desligamento antecipado;</li>
                <li>Compromisso da parte concedente com plano de atividades;</li>
                <li>Regras para relatórios semestrais de acompanhamento.</li>
              </ul>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Jornada máxima do estágio</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                A jornada do estagiário é limitada por lei. Não pode haver hora extra, banco de horas
                nem prorrogação habitual. Os tetos são:
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li><strong>4 horas diárias / 20 semanais</strong> para estudantes de educação especial e anos finais do fundamental (EJA);</li>
                <li><strong>6 horas diárias / 30 semanais</strong> para estudantes do ensino superior, médio regular e profissional;</li>
                <li><strong>Até 40 horas semanais</strong>, excepcionalmente, em cursos que alternam teoria e prática, quando não há aulas presenciais.</li>
              </ul>

              <p className="text-lg leading-relaxed mt-6">
                Em períodos de <strong>avaliações escolares</strong>, a jornada deve ser reduzida à
                metade, sem prejuízo da bolsa, para permitir bom desempenho acadêmico. Essa é uma das
                regras mais descumpridas por empresas e é foco frequente de fiscalização do Ministério
                do Trabalho.
              </p>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Bolsa-auxílio, transporte e recesso</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                A <strong>bolsa-auxílio</strong> não tem valor mínimo fixado por lei federal, mas
                precisa ser compatível com o mercado. No estágio não obrigatório, ela é devida junto
                com o <strong>auxílio-transporte</strong>. Sobre a bolsa não incidem INSS nem FGTS,
                mas ela pode sofrer retenção de IRRF se exceder a faixa de isenção mensal.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O estagiário também tem direito a <strong>recesso remunerado</strong>: 30 dias após 12
                meses de estágio, preferencialmente durante as férias escolares. Se o estágio for
                inferior a 12 meses, o recesso é proporcional. Não confundir com férias — o instituto
                é próprio da Lei do Estágio.
              </p>

              <Card className="bg-blue-500/5 border-blue-500/20">
                <CardContent className="p-6">
                  <p className="text-base leading-relaxed">
                    <strong>Boa prática:</strong> muitas empresas oferecem também vale-refeição, plano
                    de saúde e programa de desenvolvimento. Esses benefícios não são obrigatórios, mas
                    ajudam na atração de talentos e não descaracterizam o estágio.
                  </p>
                </CardContent>
              </Card>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Seguro obrigatório contra acidentes pessoais</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                A contratação de <strong>seguro contra acidentes pessoais</strong> em favor do
                estagiário é obrigatória. No estágio não obrigatório, a responsabilidade é da parte
                concedente. No estágio obrigatório, a instituição de ensino pode assumir a
                contratação. A ausência do seguro é uma das principais causas de descaracterização
                automática do estágio.
              </p>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Obrigações da empresa concedente</h2>
              </div>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>Celebrar o TCE junto com o estudante e a instituição de ensino;</li>
                <li>Indicar funcionário para supervisionar até 10 estagiários simultaneamente;</li>
                <li>Oferecer plano de atividades compatível com o curso;</li>
                <li>Contratar seguro obrigatório;</li>
                <li>Encaminhar relatório semestral à instituição de ensino;</li>
                <li>Emitir termo de realização do estágio ao final;</li>
                <li>Respeitar limites de jornada e reduzir carga em avaliações;</li>
                <li>Conceder o recesso remunerado nos termos da lei.</li>
              </ul>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Prazo máximo e desligamento</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                A duração máxima do estágio na mesma parte concedente é de <strong>2 anos</strong>,
                salvo no caso de estagiário com deficiência, para quem o prazo não se aplica. Depois
                dos 2 anos, o estudante pode até seguir na empresa, mas sob outro regime, geralmente
                CLT ou jovem aprendiz — nunca renovando o TCE.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O desligamento pode ocorrer:
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>Ao fim do prazo previsto no TCE;</li>
                <li>Por conclusão ou abandono do curso;</li>
                <li>Por descumprimento de qualquer cláusula do TCE;</li>
                <li>Por iniciativa de qualquer parte, a qualquer tempo, com aviso.</li>
              </ul>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Diferença entre estagiário e menor aprendiz</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                O <strong>menor aprendiz</strong> segue a{" "}
                <a
                  href="https://www.planalto.gov.br/ccivil_03/leis/l10097.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Lei 10.097/2000
                </a>{" "}
                e a CLT (arts. 428 a 433). Ele tem <strong>vínculo empregatício</strong>, carteira
                assinada, FGTS, 13º salário e férias. O estagiário, ao contrário, não tem vínculo
                empregatício quando cumpridos os requisitos da Lei 11.788/2008.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-3 font-semibold">Aspecto</th>
                      <th className="p-3 font-semibold">Estagiário</th>
                      <th className="p-3 font-semibold">Menor aprendiz</th>
                    </tr>
                  </thead>
                  <tbody className="text-base">
                    <tr className="border-b">
                      <td className="p-3">Base legal</td>
                      <td className="p-3">Lei 11.788/2008</td>
                      <td className="p-3">Lei 10.097/2000 + CLT</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Idade</td>
                      <td className="p-3">A partir de 16 anos</td>
                      <td className="p-3">14 a 24 anos</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Vínculo empregatício</td>
                      <td className="p-3">Não</td>
                      <td className="p-3">Sim</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Carteira assinada</td>
                      <td className="p-3">Não</td>
                      <td className="p-3">Sim</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">FGTS</td>
                      <td className="p-3">Não</td>
                      <td className="p-3">Sim (alíquota 2%)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Remuneração</td>
                      <td className="p-3">Bolsa-auxílio</td>
                      <td className="p-3">Salário mínimo hora</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Jornada máxima</td>
                      <td className="p-3">6h/dia (regra geral)</td>
                      <td className="p-3">6h/dia (até 8h para quem concluiu fundamental)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Duração</td>
                      <td className="p-3">Até 2 anos</td>
                      <td className="p-3">Até 2 anos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/30">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Precisa formalizar contratos de estágio, trabalho autônomo ou serviços?
                  </h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Nosso gerador cria contratos completos, com todas as cláusulas obrigatórias, em
                    minutos. Sem cadastro, sem custo, com base na legislação vigente.
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

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Para se aprofundar</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <a
                      href="https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11788.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Lei 11.788/2008 — Lei do Estágio (Planalto)</span>
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <a
                      href="https://www.gov.br/mte/pt-br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Ministério do Trabalho e Emprego — orientações sobre estágio</span>
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <a
                      href="https://www.camara.leg.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Câmara dos Deputados — tramitação de projetos sobre estágio</span>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Conclusão</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  O contrato de estágio, quando bem estruturado, cumpre seu papel de aproximar
                  academia e mercado sem transformar o estudante em empregado sem direitos. A Lei
                  11.788/2008 é rigorosa: exige TCE, jornada limitada, seguro obrigatório, plano de
                  atividades e supervisão efetiva. Descumprir qualquer desses pontos é abrir a porta
                  para uma reclamação trabalhista de vínculo empregatício.
                </p>
                <p className="text-lg leading-relaxed">
                  Para complementar a leitura, vale conhecer o guia sobre{" "}
                  <Link to="/contrato-de-trabalho-autonomo" className="text-primary hover:underline">
                    contrato de trabalho autônomo
                  </Link>
                  , muito confundido com o estágio, e o{" "}
                  <Link to="/blog/contrato-prestacao-servicos-autonomos" className="text-primary hover:underline">
                    contrato de prestação de serviços para autônomos e MEIs
                  </Link>
                  , alternativa formal quando a atividade não tem viés pedagógico.
                </p>
              </div>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Estagiário tem direito a férias?",
                    a: "Não tem férias no sentido celetista. Tem recesso remunerado de 30 dias após 12 meses de estágio, preferencialmente nas férias escolares. Se o estágio for inferior a 12 meses, o recesso é proporcional.",
                  },
                  {
                    q: "Estagiário recebe 13º salário?",
                    a: "Não. O estagiário recebe apenas a bolsa-auxílio prevista no TCE. 13º salário é benefício da relação de emprego regida pela CLT.",
                  },
                  {
                    q: "Estagiário pode fazer hora extra?",
                    a: "Não. A jornada máxima é rígida (6 horas/dia como regra) e não admite hora extra, banco de horas ou compensação. Extrapolar caracteriza vínculo empregatício.",
                  },
                  {
                    q: "Empresa é obrigada a pagar bolsa-auxílio?",
                    a: "No estágio não obrigatório, sim, junto com o auxílio-transporte. No estágio obrigatório, o pagamento é facultativo.",
                  },
                  {
                    q: "Qual a duração máxima do contrato de estágio?",
                    a: "2 anos na mesma parte concedente. Estagiários com deficiência não têm limite. Após esse período, para continuar, é necessário mudar o regime jurídico.",
                  },
                  {
                    q: "Estagiário paga INSS?",
                    a: "Não há contribuição obrigatória sobre a bolsa. O estudante pode contribuir facultativamente para o INSS, caso queira acumular tempo para aposentadoria.",
                  },
                  {
                    q: "Qual a diferença prática entre estagiário e menor aprendiz?",
                    a: "Estagiário complementa a formação acadêmica sem vínculo empregatício. Menor aprendiz tem contrato de trabalho especial regido pela CLT, com carteira assinada, salário mínimo hora e FGTS de 2%.",
                  },
                  {
                    q: "É obrigatório passar por um agente de integração?",
                    a: "Não é obrigatório. A lei permite que a instituição de ensino contrate diretamente com a empresa, embora o agente de integração (CIEE, IEL, entre outros) seja bastante usado.",
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
                    Este artigo é informativo e não substitui orientação jurídica personalizada.
                    Consulte um advogado trabalhista para casos concretos.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>

          <Separator className="my-12" />

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Sobre o Autor</h3>
            <AuthorProfile variant="compact" showSocialLinks={true} />
          </div>
        </article>

        <RelatedArticles articles={relatedArticles} />
      </main>
    </>
  );
};

export default ContratoEstagio;
