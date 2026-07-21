import SEO from "@/components/SEO";
import AuthorProfile from "@/components/AuthorProfile";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Scale,
  ArrowRight,
  ExternalLink,
  AlertCircle,
  Landmark,
  Wallet,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

const coverImage = "/images/blog/locacao-comercial-cover.jpg";
const middleImage = "/images/blog/locacao-comercial-meio.jpg";

const LocacaoComercialRenovatoria = () => {
  const relatedArticles: RelatedArticle[] = [
    {
      title: "Contrato de Aluguel Residencial: tudo o que você precisa saber antes de assinar",
      description: "Cláusulas essenciais, direitos do inquilino e obrigações do locador em contratos residenciais.",
      slug: "contrato-aluguel-residencial",
      coverImage: "/images/blog/contrato-aluguel-residencial-cover.jpg",
      category: "Direitos & Deveres",
    },
    {
      title: "Contrato de Franquia: Guia Completo para Empreendedores",
      description: "Pontos essenciais do contrato de franquia e proteção jurídica para expandir.",
      slug: "contrato-franquia",
      coverImage: "/images/blog/contrato-franquia-cover.jpg",
      category: "Para Empreendedores",
    },
    {
      title: "Contrato de Prestação de Serviços para Autônomos e MEIs",
      description: "Cláusulas essenciais, rescisão e proteção jurídica para prestadores de serviço.",
      slug: "contrato-prestacao-servicos-autonomos",
      coverImage: "/images/blog/contrato-prestacao-servicos-cover.jpg",
      category: "Para Empreendedores",
    },
  ];

  return (
    <>
      <SEO
        title="Contrato de Locação Comercial: Renovatória, Reajustes e Direitos em 2026"
        description="Guia completo do contrato de locação comercial em 2026: ação renovatória, ponto comercial, IPTU, luvas, reajuste do aluguel, garantias e direitos do lojista."
        keywords="contrato de locação comercial, ação renovatória, ponto comercial, aluguel de loja, reajuste de aluguel comercial, luvas contrato, IPTU locação, Lei do Inquilinato, direito do lojista, garantia locatícia, fiador locação comercial, seguro fiança, caução, aluguel de galpão, locação de sala comercial"
        canonical="https://modelodecontrato.org/blog/contrato-locacao-comercial-renovatoria"
      />

      <main className="min-h-screen bg-background">
        <article className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 mt-6">
            <img
              src={coverImage}
              alt="Fachada de loja comercial em rua movimentada com placas de aluguel"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
            />
          </div>

          <header className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Building2 className="w-3 h-3 mr-1" />
              Para Empreendedores
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Contrato de locação comercial: renovatória, reajustes e direitos do lojista em 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2026-07-13">13 de julho de 2026</time>
              <span>•</span>
              <span>24 min de leitura</span>
            </div>
          </header>

          <Separator className="my-8" />

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 mb-12">
              <p className="text-lg leading-relaxed">
                Alugar um imóvel para instalar uma loja, restaurante, clínica ou escritório é uma das
                decisões mais estratégicas de qualquer empreendedor. O <strong>ponto comercial</strong> muitas
                vezes vale mais do que o próprio negócio: é ele que atrai clientela, viabiliza o
                fluxo de vendas e sustenta o valor do fundo de comércio. Por isso, o{" "}
                <strong>contrato de locação comercial</strong> não pode ser tratado como um formulário
                genérico — cada cláusula tem impacto direto no bolso, na segurança jurídica e no futuro
                da empresa.
              </p>

              <p className="text-lg leading-relaxed">
                No Brasil, a locação de imóveis não residenciais é regida principalmente pela{" "}
                <a
                  href="https://www.planalto.gov.br/ccivil_03/leis/l8245.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Lei 8.245/1991 (Lei do Inquilinato)
                </a>
                , especialmente pelos artigos 51 a 57, que tratam da proteção ao ponto comercial e da
                ação renovatória. Somam-se a ela o Código Civil, a jurisprudência do STJ e regras
                específicas dos contratos de shopping center.
              </p>

              <p className="text-lg leading-relaxed">
                Este guia destrincha, ponto a ponto, o que todo lojista, franqueado, prestador de
                serviço e investidor precisa saber antes de assinar. São regras estáveis, aplicadas há
                décadas nos tribunais, com atualizações importantes de 2024 e 2025 na parte de índices
                de reajuste e garantias. Ao final, você entende quando cabe renovatória, como funcionam
                as luvas, o que pode ser cobrado além do aluguel e como reduzir riscos jurídicos.
              </p>
            </div>

            <Separator className="my-12" />

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Índice do artigo</h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>O que é e para que serve o contrato de locação comercial</li>
                <li>Diferenças entre locação comercial e residencial</li>
                <li>Cláusulas obrigatórias e recomendadas</li>
                <li>Ação renovatória: como funciona e quando cabe</li>
                <li>Reajuste do aluguel: IGP-M, IPCA, IVAR e revisional</li>
                <li>Ponto comercial, luvas e fundo de comércio</li>
                <li>Garantias: fiador, caução, seguro-fiança e título de capitalização</li>
                <li>Locação em shopping center e regras especiais</li>
                <li>Rescisão antecipada, multa e devolução do imóvel</li>
                <li>Perguntas frequentes</li>
              </ul>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">O que é o contrato de locação comercial</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                O contrato de locação comercial é o instrumento pelo qual o proprietário
                (<strong>locador</strong>) cede o uso de um imóvel não residencial ao{" "}
                <strong>locatário</strong>, mediante pagamento periódico do aluguel, para o exercício
                de atividade econômica: comércio, indústria, prestação de serviço, consultório,
                escritório profissional ou associação. Por ser uma modalidade não residencial, aplica-se
                o capítulo próprio da Lei 8.245/1991.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                A grande diferença em relação à locação residencial está na proteção ao{" "}
                <strong>ponto comercial</strong>. A lei reconhece que a clientela conquistada em um
                endereço é patrimônio do locatário e, por isso, garante mecanismos para que ele não
                seja despejado arbitrariamente após anos investindo na consolidação do negócio.
              </p>

              <Card className="bg-blue-500/5 border-blue-500/20">
                <CardContent className="p-6">
                  <p className="text-base leading-relaxed">
                    <strong>Ponto de atenção:</strong> nem toda locação de imóvel usado para negócio é
                    “comercial” para fins de renovatória. É preciso preencher os requisitos do artigo
                    51 da Lei do Inquilinato, que veremos adiante.
                  </p>
                </CardContent>
              </Card>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Diferenças entre locação comercial e residencial</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Ainda que ambas sejam reguladas pela mesma lei, as regras práticas são bastante
                distintas. Um contrato comercial precisa refletir a lógica empresarial: prazo mais
                longo, garantia reforçada, discussão sobre reformas e possibilidade de sublocação
                controlada. Um contrato residencial trabalha com prazos padrão de 30 meses e proteção
                mais forte ao morador.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-3 font-semibold">Aspecto</th>
                      <th className="p-3 font-semibold">Comercial</th>
                      <th className="p-3 font-semibold">Residencial</th>
                    </tr>
                  </thead>
                  <tbody className="text-base">
                    <tr className="border-b">
                      <td className="p-3">Prazo mínimo recomendado</td>
                      <td className="p-3">5 anos (para renovatória)</td>
                      <td className="p-3">30 meses (padrão)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Renovação compulsória</td>
                      <td className="p-3">Sim, se cumpridos requisitos</td>
                      <td className="p-3">Não</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Reajuste anual</td>
                      <td className="p-3">Livre negociação (IGP-M, IPCA, IVAR)</td>
                      <td className="p-3">Livre negociação (com práticas comuns)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Denúncia vazia</td>
                      <td className="p-3">Permitida ao fim do prazo</td>
                      <td className="p-3">Permitida após 30 meses</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Multa por rescisão antecipada</td>
                      <td className="p-3">Proporcional ao tempo restante</td>
                      <td className="p-3">Proporcional ao tempo restante</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <Separator className="my-12" />

            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden my-12">
              <img
                src={middleImage}
                alt="Interior de loja comercial vazia com balcão e prateleiras em preparação para ocupação"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Cláusulas obrigatórias e recomendadas</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Um bom contrato de locação comercial vai muito além do preço e do prazo. Ele deve
                antecipar conflitos que costumam aparecer no meio da relação: quem paga o IPTU, quem
                custeia reformas exigidas por prefeitura ou corpo de bombeiros, o que acontece se o
                imóvel ficar interditado, como se comporta o aluguel em caso de inflação atípica.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cláusulas obrigatórias</h3>
              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>Qualificação completa das partes (locador, locatário e, se houver, fiador)</li>
                <li>Descrição detalhada do imóvel, com endereço, metragem e matrícula</li>
                <li>Destinação exclusiva (atividade permitida)</li>
                <li>Valor do aluguel, forma de pagamento e data de vencimento</li>
                <li>Prazo do contrato e forma de renovação</li>
                <li>Índice de reajuste anual</li>
                <li>Garantia locatícia escolhida</li>
                <li>Foro de eleição para conflitos</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-3">Cláusulas recomendadas</h3>
              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>Responsabilidade por IPTU, taxa de lixo, condomínio e seguro contra incêndio</li>
                <li>Regras para benfeitorias necessárias, úteis e voluptuárias</li>
                <li>Permissão ou vedação de sublocação e cessão do ponto</li>
                <li>Condições para reforma e adequação do imóvel à atividade</li>
                <li>Vistoria de entrada e de saída documentada em anexo</li>
                <li>Cláusula de revisão em caso de desequilíbrio econômico</li>
                <li>Regras claras para rescisão antecipada e devolução das chaves</li>
                <li>Cláusula de confidencialidade quando envolver segredos comerciais</li>
              </ul>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Landmark className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Ação renovatória: como funciona e quando cabe</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                A ação renovatória é o principal mecanismo de proteção do ponto comercial. Prevista no
                artigo 51 da Lei 8.245/1991, ela permite que o locatário obrigue o proprietário a
                renovar o contrato por igual prazo, mesmo contra a vontade dele — desde que cumpridos,
                cumulativamente, três requisitos:
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>
                  <strong>Contrato escrito e por prazo determinado</strong> de no mínimo 5 anos
                  (podem ser somados contratos sucessivos, prática chamada de <em>accessio temporis</em>);
                </li>
                <li>
                  <strong>Exploração da mesma atividade</strong> por, no mínimo, 3 anos ininterruptos
                  no imóvel;
                </li>
                <li>
                  <strong>Ajuizamento no prazo</strong>: entre 1 ano e 6 meses antes do término do
                  contrato em vigor. Perdeu esse prazo, perdeu o direito à renovação forçada.
                </li>
              </ul>

              <p className="text-lg leading-relaxed my-6">
                A renovatória é decidida pelo juízo cível. O valor do novo aluguel é fixado com base
                em perícia que avalia o mercado imobiliário local. É comum que o valor final fique um
                pouco acima do que era pago antes, aproximando-se do preço de mercado — mas o lojista
                mantém o ponto.
              </p>

              <Card className="bg-orange-500/5 border-orange-500/20">
                <CardContent className="p-6">
                  <p className="text-base leading-relaxed">
                    <strong>Exceções em que o locador pode retomar:</strong> reforma substancial exigida
                    pelo Poder Público, uso próprio ou de sociedade em que tenha participação, ou
                    proposta mais vantajosa de terceiro para atividade diferente. Nesses casos, pode
                    haver direito à indenização pelo fundo de comércio perdido.
                  </p>
                </CardContent>
              </Card>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Reajuste do aluguel: IGP-M, IPCA, IVAR e revisional</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                O reajuste anual do aluguel comercial é definido livremente entre as partes. Por muito
                tempo, o índice mais usado foi o IGP-M, calculado pela Fundação Getulio Vargas. Depois
                dos picos inflacionários de 2020 e 2021, muitos contratos migraram para o{" "}
                <strong>IPCA</strong> ou para o <strong>IVAR</strong>, índice específico para aluguéis
                residenciais criado pela FGV. Cada um tem uma dinâmica:
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>
                  <strong>IGP-M:</strong> sensível a variações do dólar e commodities; costuma
                  disparar em momentos de crise cambial.
                </li>
                <li>
                  <strong>IPCA:</strong> mais estável, reflete inflação ao consumidor; é o índice
                  oficial da meta de inflação.
                </li>
                <li>
                  <strong>IVAR:</strong> baseado em aluguéis efetivamente contratados, tende a
                  acompanhar melhor a realidade do mercado imobiliário.
                </li>
              </ul>

              <p className="text-lg leading-relaxed my-6">
                A cada 3 anos, qualquer das partes pode pedir <strong>ação revisional</strong> para
                ajustar o valor ao preço de mercado, conforme o artigo 19 da Lei 8.245/1991. Ela é
                diferente da renovatória: aqui o objetivo é apenas revisar o valor, sem alterar prazo
                nem extinguir o contrato.
              </p>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Ponto comercial, luvas e fundo de comércio</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Ponto comercial é o local físico consolidado como referência da clientela. Fundo de
                comércio é o conjunto de bens materiais e imateriais que fazem o negócio funcionar
                (marca, clientela, ponto, estrutura, know-how). As <strong>luvas</strong> são um valor
                pago, geralmente na entrada de um novo contrato, como remuneração pelo ponto valorizado
                que o locador entrega — prática comum em shoppings, ruas de grande fluxo e imóveis
                históricos.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Vale registrar que o pagamento de luvas <strong>no ato de renovação</strong> é vedado
                pela Lei do Inquilinato (art. 45). Isso significa que o proprietário não pode exigir
                “nova entrada” quando o locatário está exercendo direito legítimo à renovação. Cobrar
                luvas de renovação pode caracterizar cláusula abusiva.
              </p>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Garantias locatícias</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                O locador só pode exigir <strong>uma</strong> modalidade de garantia por contrato,
                conforme o artigo 37 da Lei 8.245/1991. Escolher a garantia certa reduz custos e
                acelera a análise cadastral:
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>
                  <strong>Fiador:</strong> pessoa física ou jurídica que responde solidariamente pelo
                  pagamento. Custo zero para o locatário, mas exige patrimônio compatível.
                </li>
                <li>
                  <strong>Caução:</strong> depósito em dinheiro (limitado a 3 meses de aluguel),
                  imóvel ou título. Bloqueia capital de giro da empresa.
                </li>
                <li>
                  <strong>Seguro-fiança:</strong> apólice contratada com seguradora; custa cerca de 1
                  a 1,5 aluguel por ano e substitui o fiador.
                </li>
                <li>
                  <strong>Título de capitalização:</strong> o inquilino compra um título com valor
                  equivalente a alguns aluguéis; ao final do contrato, resgata parte do dinheiro.
                </li>
              </ul>

              <p className="text-lg leading-relaxed mt-6">
                Também são comuns garantias adicionais como aval em nota promissória e, em contratos
                de rede, garantias corporativas assinadas pela franqueadora ou controladora.
              </p>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Locação em shopping center: regras especiais</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Contratos de lojas em shopping seguem o regime do artigo 54 da Lei do Inquilinato. Nele,
                prevalece o que estiver contratado — inclusive práticas peculiares como aluguel
                percentual (fixo mínimo + percentual do faturamento), aluguel dobrado em dezembro,
                fundo de promoção coletivo, taxa de administração do condomínio e regras rigorosas de
                horário de funcionamento.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Também é aceito o pagamento de <strong>Cessão de Direitos de Uso</strong> (CDU), que
                funciona como luvas de entrada. O lojista que assina um contrato de shopping precisa
                calcular com cuidado o custo total de ocupação (aluguel + condomínio + fundo + IPTU
                proporcional + CDU amortizado), que costuma variar entre 12% e 20% do faturamento
                bruto.
              </p>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Rescisão antecipada, multa e devolução do imóvel</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                A Lei do Inquilinato prevê, no artigo 4º, que o locatário pode devolver o imóvel antes
                do fim do prazo, mediante pagamento de multa proporcional ao tempo restante. Se o
                contrato tem 60 meses e o inquilino sai com 30 meses cumpridos, a multa é reduzida
                pela metade.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Em situações específicas — transferência determinada pelo empregador para outra
                localidade, por exemplo — a multa pode ser dispensada. Já para o locador, a
                possibilidade de retomada durante o prazo é restrita: só pode ocorrer por infração
                contratual grave, inadimplemento ou nas hipóteses do artigo 9º da Lei.
              </p>

              <Card className="bg-green-500/5 border-green-500/20">
                <CardContent className="p-6">
                  <p className="text-base leading-relaxed">
                    <strong>Checklist de saída:</strong> vistoria de saída com fotos, quitação de
                    IPTU e condomínio, retirada de instalações removíveis, entrega das chaves com
                    protocolo, distrato assinado e restituição do depósito quando houver caução em
                    dinheiro.
                  </p>
                </CardContent>
              </Card>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/30">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Vai alugar ou disponibilizar um imóvel comercial?
                  </h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Nosso gerador cria contratos de locação comercial completos, com todas as
                    cláusulas obrigatórias, em poucos minutos. Sem cadastro, sem custo.
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
                      href="https://www.planalto.gov.br/ccivil_03/leis/l8245.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Lei 8.245/1991 — Lei do Inquilinato (Planalto)</span>
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <a
                      href="https://www.stj.jus.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Superior Tribunal de Justiça — jurisprudência sobre locação</span>
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <a
                      href="https://www.oab.org.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>OAB — orientação jurídica ao empresário</span>
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
                  O contrato de locação comercial é a espinha dorsal de qualquer operação com endereço
                  físico. Prazos bem definidos, garantia adequada, índice de reajuste transparente e
                  cláusulas claras sobre reformas, tributos e sublocação evitam boa parte dos
                  conflitos que chegam ao Judiciário.
                </p>
                <p className="text-lg leading-relaxed">
                  Se você quer entender temas correlatos, vale ler nosso guia sobre{" "}
                  <Link to="/blog/contrato-aluguel-residencial" className="text-primary hover:underline">
                    contrato de aluguel residencial
                  </Link>{" "}
                  e a explicação sobre{" "}
                  <Link to="/caucao-garantia-contratual" className="text-primary hover:underline">
                    caução como garantia contratual
                  </Link>
                  . Para franquias e redes, o{" "}
                  <Link to="/blog/contrato-franquia" className="text-primary hover:underline">
                    contrato de franquia
                  </Link>{" "}
                  costuma andar junto do contrato de locação e merece atenção redobrada.
                </p>
              </div>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Qual o prazo mínimo para ter direito à renovatória?",
                    a: "O contrato precisa ser escrito, por prazo determinado, e a soma dos contratos deve totalizar no mínimo 5 anos. O locatário também precisa comprovar 3 anos ininterruptos na mesma atividade.",
                  },
                  {
                    q: "O locador pode aumentar o aluguel comercial quando quiser?",
                    a: "Não. O reajuste segue o índice previsto no contrato (IGP-M, IPCA, IVAR) e ocorre anualmente. Fora disso, só cabe revisão a cada 3 anos por ação judicial.",
                  },
                  {
                    q: "O que são luvas na locação comercial?",
                    a: "É o valor pago pelo locatário em contrapartida ao valor agregado do ponto. É permitido na assinatura inicial, mas proibido em renovações compulsórias.",
                  },
                  {
                    q: "Quem paga IPTU e condomínio na locação comercial?",
                    a: "A regra geral é que o locatário paga IPTU e taxas ordinárias de condomínio, salvo previsão diferente no contrato. Despesas extraordinárias e obras estruturais são do locador.",
                  },
                  {
                    q: "Posso rescindir o contrato antes do prazo?",
                    a: "Sim, mediante pagamento de multa proporcional ao tempo restante. Contratos bem redigidos preveem também formas amigáveis de saída antecipada.",
                  },
                  {
                    q: "O locador pode se recusar a renovar o contrato?",
                    a: "Se o locatário não ajuizar a renovatória no prazo (entre 1 ano e 6 meses antes do fim), sim. Se ajuizar e cumprir os requisitos, só cabe recusa nas hipóteses do artigo 52 da Lei 8.245/1991.",
                  },
                  {
                    q: "Quantas garantias o locador pode exigir?",
                    a: "Apenas uma modalidade por contrato. Combinar fiador com caução em dinheiro, por exemplo, contraria o artigo 37 da Lei do Inquilinato.",
                  },
                  {
                    q: "Locação em shopping segue as mesmas regras?",
                    a: "Não integralmente. O artigo 54 da Lei permite condições especiais (aluguel percentual, fundo de promoção, dobra de dezembro) desde que expressas no contrato.",
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
                    Consulte um advogado para casos concretos.
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

export default LocacaoComercialRenovatoria;
