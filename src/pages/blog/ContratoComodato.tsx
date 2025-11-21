import SEO from "@/components/SEO";
import AuthorProfile from "@/components/AuthorProfile";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Shield, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Car,
  Wrench,
  Home,
  Camera,
  Music,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const coverImage = "/images/blog/contrato-comodato-cover.jpg";

const ContratoComodato = () => {
  return (
    <>
      <SEO
        title="Contrato de Comodato: Quando e Como Usar para Empréstimo Gratuito de Bens"
        description="Saiba quando usar o contrato de comodato para emprestar bens como carros ou ferramentas sem cobrar. Proteja-se legalmente com modelo gratuito."
        keywords="contrato de comodato, empréstimo gratuito, comodato de bens, emprestar carro, emprestar ferramentas, comodato veículos"
        canonical="https://modelodecontrato.org/blog/contrato-comodato"
      />

      <main className="min-h-screen bg-background">
        <article className="container mx-auto max-w-4xl px-4 py-8 md:py-12">

          {/* Cover Image */}
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 mt-6">
            <img 
              src={coverImage} 
              alt="Contrato de Comodato: Quando e Como Usar para Empréstimo Gratuito de Bens"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Briefcase className="w-3 h-3 mr-1" />
              Para Empreendedores
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Contrato de Comodato: Quando e Como Usar para Empréstimo Gratuito de Bens
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2025-11-21">21 de novembro de 2025</time>
              <span>•</span>
              <span>15 min de leitura</span>
            </div>
          </header>

          <Separator className="my-8" />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Introdução */}
            <div className="space-y-6 mb-12">
              <p className="text-lg leading-relaxed">
                Imagine emprestar seu carro para um amigo viajar nas férias. Ou ceder sua furadeira profissional para o vizinho reformar a cozinha. Tudo feito com boa vontade, sem cobrar nada — afinal, é só gentileza entre conhecidos. Mas e se, na volta, o carro estiver com rachadura no para-brisa? E se a furadeira quebrar sem explicação? De repente, aquela gentileza vira mal-entendido, estresse e até briga.
              </p>

              <p className="text-lg leading-relaxed">
                Essa é a realidade de muitos brasileiros que emprestam bens sem formalizar nada por escrito. O que parece um gesto simples pode gerar consequências jurídicas reais — principalmente se o bem não voltar intacto ou for usado de forma inadequada. A boa notícia? Existe uma solução prática, gratuita e juridicamente válida: o <strong>contrato de comodato</strong>.
              </p>

              <p className="text-lg leading-relaxed">
                Neste artigo, você vai entender exatamente quando e como usar o <strong>contrato de comodato para empréstimo gratuito de bens</strong>, como carros, ferramentas, equipamentos eletrônicos, móveis, máquinas agrícolas e muito mais. Explicaremos o que o documento cobre, por que ele protege tanto quem empresta quanto quem recebe o bem, e como gerar um modelo válido em minutos — sem precisar de advogado.
              </p>

              <p className="text-lg leading-relaxed">
                Se você já emprestou algo com o coração na mão e, depois, ficou com o estômago embrulhado, este guia é para você.
              </p>
            </div>

            <Separator className="my-12" />

            {/* O que é comodato */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">
                    O que é um contrato de comodato? (e por que ele é mais importante do que você imagina)
                  </h2>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  O <strong>contrato de comodato</strong> é um tipo de acordo previsto no Código Civil brasileiro (artigos 579 a 585) que regula o empréstimo gratuito de bens. Diferentemente de um aluguel, locação ou venda, no comodato não há cobrança de valor algum. O bem é cedido temporariamente, com a obrigação explícita de devolução no mesmo estado em que foi entregue — salvo o desgaste natural do uso previsto.
                </p>

                <p className="text-lg leading-relaxed">
                  Ou seja: o comodato não transfere a propriedade do bem, nem gera lucro. Ele apenas autoriza alguém a usá-lo por um tempo determinado — ou até que o dono peça de volta.
                </p>

                <Card className="bg-blue-500/5 border-blue-500/20">
                  <CardContent className="p-6">
                    <p className="text-lg leading-relaxed">
                      Muita gente acha que "contrato" é coisa burocrática, só para empresas ou transações milionárias. Ledo engano. Na vida real, o comodato é útil até em situações aparentemente simples:
                    </p>

                    <ul className="mt-4 space-y-2 text-lg">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Um tio empresta seu trator a um sobrinho para arar a roça por uma semana.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Uma ONG cede laptops para voluntários durante uma campanha.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Um músico empresta seu violão a um aluno por um mês.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Um comerciante empresta uma tenda de feira para um amigo estrear seu food truck.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed">
                  Em todos esses casos, o <strong>contrato de comodato</strong> não apenas formaliza a confiança, mas a protege. E essa diferença é crucial.
                </p>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Quando usar */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">
                    Quando usar o contrato de comodato? 6 situações comuns (e uma que você talvez não esperasse)
                  </h2>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Você não precisa de um contrato para emprestar um livro de bolso por dois dias. Mas se o bem tem valor econômico, sentimental ou é essencial para o seu trabalho, vale — e muito — documentar o empréstimo. Confira situações em que o <strong>contrato de comodato para empréstimo gratuito de bens</strong> é altamente recomendado:
                </p>

                <div className="grid gap-6 mt-8">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Car className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Emprestar veículos (carros, motos, barcos, tratores)</h3>
                          <p className="text-muted-foreground">
                            Veículos são bens de alto valor e risco. Um contrato evita que o comodatário (quem recebe o bem) use o carro para fins não autorizados — como corridas, aplicativos de transporte ou viagens interestaduais sem aviso.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Wrench className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Equipamentos profissionais (ferramentas, máquinas, câmeras)</h3>
                          <p className="text-muted-foreground">
                            Um marceneiro que empresta uma tupia de R$ 2.000 precisa ter clareza sobre responsabilidade por danos. O comodato define limites de uso e obrigações.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Camera className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Bens eletrônicos valiosos (notebooks, drones, celulares)</h3>
                          <p className="text-muted-foreground">
                            Se você empresta seu MacBook para um colega, o comodato pode exigir que ele o devolva com o mesmo nível de bateria, integridade física e sem softwares instalados.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Home className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Imóveis ou partes deles (garagem, depósito, salão)</h3>
                          <p className="text-muted-foreground">
                            Sim, o comodato também se aplica a imóveis! É comum em famílias onde um parente cede um quarto ou um galpão sem cobrar aluguel. Nesse caso, o contrato evita confusões sobre prazo e uso.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Briefcase className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Materiais para eventos (mesas, cadeiras, tendas, som)</h3>
                          <p className="text-muted-foreground">
                            Muitos microempreendedores (MEIs) emprestam equipamentos para colegas do ramo. O comodato registra o estado inicial e o prazo de devolução — evitando prejuízos.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Music className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Bens com valor afetivo (objetos de coleção, antiguidades, instrumentos musicais)</h3>
                          <p className="text-muted-foreground">
                            Aqui, o risco não é financeiro, mas emocional. Um contrato pode exigir cuidados especiais, como transporte em caixa acolchoada ou proibição de exposição ao sol.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-purple-500/5 border-purple-500/20 mt-8">
                  <CardContent className="p-6">
                    <p className="text-lg leading-relaxed">
                      <strong>Mas há um caso menos óbvio:</strong> o comodato é frequentemente usado por instituições públicas e sem fins lucrativos para ceder bens a outras entidades. Por exemplo, uma prefeitura pode ceder um espaço cultural para uma ONG realizar oficinas. Nesse contexto, o comodato garante transparência e conformidade legal.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Tabela comparativa */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Comodato vs. outros contratos: entenda as diferenças essenciais
              </h2>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Muita gente confunde o comodato com o contrato de empréstimo com retorno em dinheiro (mútuo) ou com a locação. As distinções são juridicamente significativas:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-4 text-left font-semibold">Tipo de Contrato</th>
                        <th className="border border-border p-4 text-left font-semibold">Gratuito?</th>
                        <th className="border border-border p-4 text-left font-semibold">Devolve o bem?</th>
                        <th className="border border-border p-4 text-left font-semibold">Há pagamento?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-4 font-medium">Comodato</td>
                        <td className="border border-border p-4">Sim</td>
                        <td className="border border-border p-4">Sim (mesmo bem)</td>
                        <td className="border border-border p-4">Não</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-4 font-medium">Mútuo</td>
                        <td className="border border-border p-4">Sim</td>
                        <td className="border border-border p-4">Sim (em valor equivalente, não o mesmo bem)</td>
                        <td className="border border-border p-4">Sim (ex: emprestar R$ 500)</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4 font-medium">Locação</td>
                        <td className="border border-border p-4">Não</td>
                        <td className="border border-border p-4">Sim</td>
                        <td className="border border-border p-4">Não</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-4 font-medium">Venda</td>
                        <td className="border border-border p-4">Não</td>
                        <td className="border border-border p-4">Não</td>
                        <td className="border border-border p-4">Sim</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Card className="bg-orange-500/5 border-orange-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg mb-2">Exemplo prático:</p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Se você empresta R$ 1.000, isso é <strong>mútuo</strong> — e o amigo devolve o valor, não a nota de R$ 1.000 específica.</li>
                          <li>• Se você empresta uma bicicleta, isso é <strong>comodato</strong> — e a mesma bike deve voltar.</li>
                          <li>• Se você aluga a bicicleta por R$ 20/dia, isso é <strong>locação</strong>.</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed">
                  A <strong>gratuidade</strong> é a marca registrada do comodato. Assim que há pagamento, mesmo simbólico, o contrato deixa de ser comodato e passa a ser locação — com obrigações fiscais, tributação e regras diferentes.
                </p>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Cláusulas essenciais */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">
                    5 cláusulas essenciais que todo contrato de comodato deve ter
                  </h2>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Um bom <strong>contrato de comodato</strong> não precisa ser longo, mas deve ser claro e abrangente. Aqui estão as cláusulas fundamentais que você não pode ignorar:
                </p>

                <div className="space-y-6 mt-8">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">1. Identificação das partes</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Nome completo, CPF, RG e endereço tanto do comodante (quem empresta) quanto do comodatário (quem recebe). Isso evita ambiguidades em caso de disputa.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">2. Descrição detalhada do bem</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Modelo, marca, cor, número de série, estado de conservação (inclusive fotos anexadas). Quanto mais específico, melhor.
                      </p>
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <p className="text-sm italic">
                            Ex: "Furadeira de impacto Black+Decker 710W, modelo DCD771B2, cor preta, com duas baterias e carregador, sem riscos na carcaça."
                          </p>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">3. Prazo e forma de devolução</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Data exata ou condição para devolução ("até 30 dias após a conclusão da obra"). Inclua local de devolução e horário, se relevante.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">4. Uso permitido e proibições</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Defina claramente o propósito do empréstimo ("uso exclusivo para pintura de parede interna") e o que não pode ser feito ("proibido usar em ambientes úmidos ou alugar a terceiros").
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">5. Responsabilidade por danos e perda</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Estabeleça que o comodatário responde por danos causados por uso inadequado — mas não por desgaste natural.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-red-500/5 border-red-500/20 mt-6">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <p className="text-lg leading-relaxed">
                        <strong>Importante:</strong> se o bem for danificado por força maior (ex: enchente), o comodatário geralmente não responde — a menos que tenha negligência.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed">
                  Você pode criar seu próprio <strong>contrato de comodato</strong> com essas cláusulas usando nosso <a href="/tipos-de-contratos" className="text-primary hover:underline font-medium">gerador gratuito de contratos</a>, que produz documentos juridicamente válidos em PDF ou Word em menos de 30 segundos.
                </p>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Código Civil */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                O que o Código Civil diz sobre o comodato (e por que você deve se importar)
              </h2>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Os artigos 579 a 585 do Código Civil regulam o comodato no Brasil. Alguns pontos-chave:
                </p>

                <div className="space-y-4">
                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <p className="leading-relaxed">
                        <strong>Art. 580:</strong> O comodatário é obrigado a conservar o bem "como se fora seu".
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <p className="leading-relaxed">
                        <strong>Art. 582:</strong> Se o bem se deteriorar por uso normal, o comodatário não responde. Mas se o dano for por imprudência, ele deve indenizar.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <p className="leading-relaxed">
                        <strong>Art. 583:</strong> O comodante pode pedir o bem de volta a qualquer momento, mesmo antes do prazo — especialmente se precisar dele com urgência.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <p className="leading-relaxed">
                        <strong>Art. 585:</strong> O comodatário não pode emprestar o bem a terceiros sem autorização.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg leading-relaxed">
                  Essas regras existem para equilibrar confiança e responsabilidade. Elas protegem quem empresta — sem criminalizar quem recebe com boa fé.
                </p>

                <p className="text-lg leading-relaxed">
                  Contudo, a lei é genérica. Um contrato bem redigido complementa essas normas com detalhes do seu caso real. É aí que a documentação escrita faz toda a diferença.
                </p>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Passo a passo */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">
                    Passo a passo: como criar um contrato de comodato válido em 5 minutos
                  </h2>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Você não precisa de papel timbrado, cartório (em regra) ou advogado. Siga este roteiro simples:
                </p>

                <div className="space-y-4 mt-6">
                  <Card className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Acesse um gerador confiável</h3>
                          <p className="text-muted-foreground">
                            Use plataformas como o Modelo de Contrato, que oferece modelos validados por advogados.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Selecione "Contrato de Comodato"</h3>
                          <p className="text-muted-foreground">
                            Preencha os dados das partes e do bem com atenção.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Personalize as cláusulas</h3>
                          <p className="text-muted-foreground">
                            Adicione especificações relevantes: "proibido viajar com o carro fora do estado", "obrigatório usar capa protetora no notebook", etc.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Revise com as duas partes</h3>
                          <p className="text-muted-foreground">
                            Ambos devem ler e concordar com o conteúdo antes de assinar.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                          5
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Assine e guarde cópias</h3>
                          <p className="text-muted-foreground">
                            Duas vias: uma para cada parte. Assinaturas à caneta (ou digital, se ambas aceitarem).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-blue-500/5 border-blue-500/20 mt-6">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-lg leading-relaxed">
                        <strong>Dica profissional:</strong> tire fotos do bem antes da entrega e inclua-as como anexo ao contrato. Isso serve como prova visual do estado inicial.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Erros comuns */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-red-500/10">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">
                    Erros comuns ao emprestar bens sem contrato (e como evitá-los)
                  </h2>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Mesmo com boas intenções, muita gente comete erros que geram prejuízos:
                </p>

                <div className="space-y-4 mt-6">
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <p className="leading-relaxed">
                        <strong>"Ah, ele é meu amigo!"</strong> → Amizade não substitui clareza. Um contrato reforça a confiança, não a enfraquece.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <p className="leading-relaxed">
                        <strong>Esquecer de registrar o estado do bem</strong> → Sem isso, é sua palavra contra a dele em caso de dano.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <p className="leading-relaxed">
                        <strong>Não definir prazo</strong> → O bem pode ser "esquecido" por meses.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <p className="leading-relaxed">
                        <strong>Assumir que "não tem valor, então não importa"</strong> → Um dano pequeno pode gerar grande atrito.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg leading-relaxed font-semibold text-center py-6">
                  O comodato não é desconfiança — é respeito mútuo traduzido em palavras.
                </p>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Casos reais */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Casos reais: como o contrato de comodato resolveu conflitos no dia a dia
              </h2>

              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-blue-500/5 to-transparent">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Caso 1 – O carro "emprestado para sempre"</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Um jovem emprestou seu carro a um colega por "uns dias". Passaram-se 3 meses, e o carro não voltou. Sem contrato, ele não tinha como provar a data prometida. Com um comodato, teria direito de exigir a devolução imediata.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-500/5 to-transparent">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Caso 2 – A furadeira quebrada na reforma</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Um pedreiro devolveu uma furadeira com o motor queimado, alegando "uso normal". O dono, com contrato que exigia "uso leve em alvenaria", conseguiu indenização com base na cláusula de responsabilidade.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/5 to-transparent">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Caso 3 – O espaço cedido para igreja</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Uma família cedeu um galpão para uma igreja sem contrato. Quando quis usar o espaço para outro fim, a igreja se recusou a sair. Um comodato com prazo evitaria esse impasse.
                    </p>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed font-medium">
                  Esses exemplos mostram que o maior risco não está no valor do bem, mas na ausência de regras claras.
                </p>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Quando NÃO usar */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Quando o comodato NÃO é a melhor opção?
              </h2>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Apesar de sua utilidade, há situações em que outros contratos são mais adequados:
                </p>

                <div className="space-y-4">
                  <Card className="border-l-4 border-l-orange-500">
                    <CardContent className="p-6">
                      <p className="leading-relaxed">
                        <strong>Se houver qualquer pagamento</strong> → use locação.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardContent className="p-6">
                      <p className="leading-relaxed">
                        <strong>Se o bem for consumível</strong> (ex: alimentos, materiais de escritório) → o comodato não se aplica, pois o bem não volta. Nesse caso, use um termo de cessão ou simples recibo.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardContent className="p-6">
                      <p className="leading-relaxed">
                        <strong>Se o objetivo for doar</strong> → use contrato de doação, que transfere a propriedade.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg leading-relaxed">
                  Para saber qual documento usar, leia nosso <a href="/tipos-de-contratos" className="text-primary hover:underline font-medium">guia comparativo: Tipos de Contrato: Qual Escolher para Cada Situação?</a>
                </p>
              </div>
            </section>

            <Separator className="my-12" />

            {/* CTA */}
            <section className="mb-12">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-8 md:p-12 text-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Proteja-se sem complicar: use um modelo gratuito e válido
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Você não precisa reinventar a roda. O <strong>contrato de comodato para empréstimo gratuito de bens</strong> já existe em formatos prontos, atualizados e juridicamente seguros.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Em nosso site, você gera um modelo personalizado em 30 segundos, sem cadastro, 100% grátis. Basta informar quem está emprestando e quem está recebendo, qual bem está sendo cedido, por quanto tempo, e condições especiais de uso.
                  </p>
                  <a
                    href="/tipos-de-contratos"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg shadow-lg"
                  >
                    Crie seu Contrato de Comodato Agora
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </CardContent>
              </Card>
            </section>

            {/* Links úteis */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Links úteis e referências oficiais
              </h2>

              <div className="space-y-3">
                <Card>
                  <CardContent className="p-4">
                    <a 
                      href="https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Código Civil Brasileiro – Artigos 579 a 585 (Planalto)</span>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <a 
                      href="https://www.cnj.jus.br/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Cartilha sobre Contratos Civis (CNJ)</span>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <a 
                      href="/glossario-juridico" 
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ArrowRight className="w-5 h-5" />
                      <span>Guia para MEIs sobre Contratos de Prestação de Serviços</span>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Conclusão */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Conclusão: Gentileza com responsabilidade é ainda mais bonita
              </h2>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Emprestar algo de graça é um ato de generosidade — e isso merece ser preservado. O <strong>contrato de comodato</strong> não transforma seu gesto em transação fria; pelo contrário, ele protege a boa vontade que o motivou.
                </p>

                <p className="text-lg leading-relaxed">
                  Ao formalizar o empréstimo, você evita mal-entendidos, mantém relações saudáveis e garante que sua gentileza não se converta em prejuízo. E o melhor: fazer isso é rápido, simples e gratuito.
                </p>

                <p className="text-lg leading-relaxed">
                  Se você está prestes a emprestar um bem — seja um carro, uma ferramenta ou até um espaço — não deixe para depois. Gaste 5 minutos criando um <strong>contrato de comodato</strong>. Sua paz mental agradecerá.
                </p>

                <Card className="bg-gradient-to-r from-green-500/10 to-transparent border-green-500/20">
                  <CardContent className="p-6">
                    <p className="text-lg leading-relaxed font-medium text-center">
                      E se este artigo foi útil, compartilhe com alguém que costuma emprestar coisas. Talvez você evite uma briga entre amigos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Perguntas Frequentes (FAQ)
              </h2>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">O que é um contrato de comodato?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      É um acordo gratuito para emprestar bens com a obrigação de devolvê-los no mesmo estado. Não há pagamento envolvido.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Precisa de testemunhas ou reconhecimento em cartório?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Não. O comodato é válido com apenas as assinaturas das partes, salvo em casos específicos (ex: imóveis rurais com valor elevado).
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Posso emprestar um carro com contrato de comodato?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sim. Inclusive, é altamente recomendado, pois define responsabilidades em caso de acidentes ou multas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">O comodato vale para bens imóveis?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sim. Pode ser usado para ceder casas, salas comerciais, terrenos ou partes de imóveis — desde que sem cobrança.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">E se o bem se perder ou for roubado?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      O comodatário só responde se houver negligência (ex: deixar carro destravado em local perigoso). Caso contrário, o risco é do proprietário.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Posso rescindir o comodato antes do prazo?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sim. O comodante pode pedir o bem de volta a qualquer momento, especialmente por necessidade urgente.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Onde baixar um modelo de comodato válido?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Você pode gerar um gratuitamente em <a href="/tipos-de-contratos" className="text-primary hover:underline font-medium">modelodecontrato.org</a>, com opção de PDF ou Word, sem cadastro.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8 bg-muted/30">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground italic">
                    Este artigo é informativo e não substitui orientação jurídica personalizada. Para situações complexas, consulte um advogado.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>

          <Separator className="my-12" />

          {/* Author Profile */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Sobre o Autor</h3>
            <AuthorProfile variant="compact" showSocialLinks={true} />
          </div>
        </article>
      </main>
    </>
  );
};

export default ContratoComodato;
