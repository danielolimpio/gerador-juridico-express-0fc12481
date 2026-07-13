import SEO from "@/components/SEO";
import AuthorProfile from "@/components/AuthorProfile";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Car,
  FileText,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Search,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const coverImage = "/images/blog/compra-venda-veiculo-cover.jpg";
const middleImage = "/images/blog/compra-venda-veiculo-meio.jpg";

const CompraVendaVeiculo = () => {
  const relatedArticles: RelatedArticle[] = [
    {
      title: "Seguradora ou Associação de Proteção Veicular: Diferenças e Cuidados",
      description: "Entenda a diferença entre seguradora e associação de proteção veicular antes de proteger seu carro.",
      slug: "seguradora-vs-associacao-protecao-veicular",
      coverImage: "/images/blog/seguradora-associacao-cover.jpg",
      category: "Direitos & Deveres",
    },
    {
      title: "Contrato de Locação de Veículo: Regras para Alugar Carros, Motos e Equipamentos",
      description: "Proteja-se ao alugar veículos e evite cobranças abusivas.",
      slug: "contrato-locacao-veiculo",
      coverImage: "/images/blog/contrato-locacao-veiculo-cover.jpg",
      category: "Para Empreendedores",
    },
    {
      title: "Contrato de Comodato: Quando e Como Usar para Empréstimo Gratuito de Bens",
      description: "Empreste um veículo com segurança usando o modelo de comodato correto.",
      slug: "contrato-comodato",
      coverImage: "/images/blog/contrato-comodato-cover.jpg",
      category: "Para Empreendedores",
    },
  ];

  return (
    <>
      <SEO
        title="Contrato de Compra e Venda de Veículo: Como Não Cair em Golpes"
        description="Guia completo do contrato de compra e venda de veículo em 2026: cláusulas obrigatórias, ATPV-e digital, dívidas ocultas, vistoria e cuidados para não cair em golpes."
        keywords="contrato de compra e venda de veículo, ATPV-e, contrato de compra e venda de carro, comprar carro usado sem golpe, transferência de veículo, DUT digital, contrato compra veículo pdf, cuidados ao comprar carro, dívidas de veículo, IPVA em atraso, DPVAT, vistoria de carro usado, comprar moto usada, contrato veículo modelo, DETRAN transferência"
        canonical="https://modelodecontrato.org/blog/contrato-compra-venda-veiculo-golpes"
      />

      <main className="min-h-screen bg-background">
        <article className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 mt-6">
            <img
              src={coverImage}
              alt="Chaves sobre contrato de compra e venda de veículo em concessionária"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
            />
          </div>

          <header className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-red-500/10 text-red-600 dark:text-red-400">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Erros &amp; Riscos
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Contrato de compra e venda de veículo: como não cair em golpes em 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2026-07-13">13 de julho de 2026</time>
              <span>•</span>
              <span>22 min de leitura</span>
            </div>
          </header>

          <Separator className="my-8" />

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 mb-12">
              <p className="text-lg leading-relaxed">
                Comprar um carro usado no Brasil ainda tem cheiro de aventura. Anúncio bonito na
                internet, preço abaixo da tabela, vendedor que responde na hora e um documento
                genérico impresso em papel branco — pronto, é assim que muita gente perde dinheiro
                todo mês. O problema quase nunca está no veículo em si; está no{" "}
                <strong>contrato de compra e venda de veículo</strong> mal feito, incompleto ou
                simplesmente ausente.
              </p>

              <p className="text-lg leading-relaxed">
                Desde 2021, o antigo CRV em papel foi substituído pela{" "}
                <strong>ATPV-e (Autorização para Transferência de Propriedade Eletrônica)</strong>,
                conforme regulamentado pela Resolução do Contran nº 809/2020. Esse é o documento
                oficial de transferência. Mas ele não substitui o contrato: quem compra ainda precisa
                de um contrato escrito, claro e assinado, para se proteger contra dívidas ocultas,
                arrependimentos e fraudes cada vez mais criativas.
              </p>

              <p className="text-lg leading-relaxed">
                Este guia foi pensado para quem vai comprar ou vender um veículo — carro, moto,
                caminhão ou utilitário — e quer fazer isso com segurança jurídica. Vamos falar do
                que a lei exige, das cláusulas essenciais, dos golpes mais comuns em 2026 e do
                passo a passo real de uma transferência sem sustos.
              </p>
            </div>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">O que é o contrato de compra e venda de veículo</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                O contrato de compra e venda de veículo é o instrumento particular no qual o
                proprietário (vendedor) transfere a posse e a propriedade de um automóvel para outra
                pessoa (comprador) mediante o pagamento de um preço certo em dinheiro. Sua base
                legal está nos artigos 481 e seguintes do{" "}
                <a
                  href="https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Código Civil brasileiro (Lei nº 10.406/2002)
                </a>
                .
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Ele convive com outros dois documentos indispensáveis: o <strong>CRLV-e</strong>{" "}
                (Certificado de Registro e Licenciamento de Veículo) e a{" "}
                <strong>ATPV-e</strong>, ambos hoje 100% digitais. O contrato é o que descreve a
                negociação — quem vendeu, quem comprou, por quanto e sob quais condições. Já a ATPV-e
                é o documento que o DETRAN reconhece para transferir oficialmente o registro.
              </p>

              <Card className="bg-blue-500/5 border-blue-500/20">
                <CardContent className="p-6">
                  <p className="text-base leading-relaxed">
                    <strong>Resumo prático:</strong> contrato + ATPV-e = negócio protegido. Sem
                    contrato, o comprador fica exposto a dívidas anteriores; sem ATPV-e, o veículo
                    continua no nome do antigo dono no sistema oficial.
                  </p>
                </CardContent>
              </Card>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Cláusulas obrigatórias em um contrato bem feito</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Um contrato de compra e venda de veículo válido não precisa ser complexo, mas
                precisa ser completo. As cláusulas abaixo protegem tanto quem vende quanto quem
                compra, e reduzem drasticamente o risco de discussão judicial:
              </p>

              <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
                <li>
                  <strong>Qualificação completa das partes</strong>: nome, CPF, RG, endereço,
                  estado civil e profissão do vendedor e do comprador.
                </li>
                <li>
                  <strong>Descrição precisa do veículo</strong>: marca, modelo, cor, ano de
                  fabricação e modelo, placa, chassi, RENAVAM, combustível e quilometragem no ato
                  da venda.
                </li>
                <li>
                  <strong>Preço, forma e prazo de pagamento</strong>: valor total, meio (PIX,
                  transferência, cheque, dinheiro, financiamento), parcelamento e datas.
                </li>
                <li>
                  <strong>Condições da entrega</strong>: data e local em que a posse física do
                  veículo será transferida.
                </li>
                <li>
                  <strong>Responsabilidade por multas, IPVA, DPVAT e licenciamento</strong>:
                  definir claramente até que data o vendedor responde, especialmente por infrações
                  anteriores.
                </li>
                <li>
                  <strong>Cláusula de vistoria e estado do veículo</strong>: declaração de que o
                  comprador vistoriou o veículo e o recebe no estado em que se encontra.
                </li>
                <li>
                  <strong>Prazo para transferência no DETRAN</strong>: idealmente 30 dias, com
                  multa contratual caso o comprador não realize a transferência (o Código de
                  Trânsito Brasileiro dá 30 dias, art. 123).
                </li>
                <li>
                  <strong>Foro de eleição</strong>: cidade em que eventual disputa será resolvida.
                </li>
              </ul>

              <p className="text-lg leading-relaxed mt-6">
                Contratos digitais assinados eletronicamente já são plenamente válidos. A{" "}
                <a
                  href="https://www.gov.br/governodigital/pt-br/assinatura-eletronica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  MP 2.200-2/2001 e a Lei 14.063/2020
                </a>{" "}
                garantem valor jurídico a assinaturas eletrônicas simples, avançadas e qualificadas
                — as três podem ser usadas em contratos de veículos.
              </p>
            </section>

            <Separator className="my-12" />

            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden my-12">
              <img
                src={middleImage}
                alt="Painel de veículo e documentos durante inspeção veicular antes da compra"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Os 8 golpes mais comuns em 2026 (e como evitar cada um)</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">1. Anúncio abaixo do preço da FIPE</h3>
                  <p className="text-lg leading-relaxed">
                    Preço muito abaixo do valor de mercado é o gatilho clássico. Consulte a{" "}
                    <a
                      href="https://veiculos.fipe.org.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Tabela FIPE oficial
                    </a>{" "}
                    e desconfie de valores 20% ou 30% menores do que a média.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">2. Vendedor que se recusa a mostrar CNH e CRV</h3>
                  <p className="text-lg leading-relaxed">
                    O primeiro passo é conferir se o nome do vendedor bate com o proprietário no
                    documento. Se o carro está em nome de terceiros “de confiança”, existe risco
                    de veículo de leilão irregular, veículo alienado ou até de origem duvidosa.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">3. Dívidas ocultas: IPVA, multas e financiamento</h3>
                  <p className="text-lg leading-relaxed">
                    Um veículo pode estar em nome do vendedor mas com{" "}
                    <strong>alienação fiduciária</strong> ativa junto ao banco. Sem quitação do
                    financiamento, a transferência é impossível. Consulte antes o{" "}
                    <a
                      href="https://www.gov.br/pt-br/servicos/consultar-situacao-do-veiculo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      portal gov.br
                    </a>{" "}
                    e o site do DETRAN do estado do veículo.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">4. Adulteração de chassi ou motor</h3>
                  <p className="text-lg leading-relaxed">
                    Peça sempre <strong>vistoria cautelar em empresa credenciada pelo DETRAN</strong>.
                    Custa entre R$ 100 e R$ 300 e detecta remarcação de chassi, troca irregular de
                    peças, batidas graves e passagens por leilão.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">5. Golpe do falso PIX ou transferência estornada</h3>
                  <p className="text-lg leading-relaxed">
                    Confirme o pagamento no app do banco em tempo real, aguarde a compensação,
                    prefira PIX (imediato e irreversível para valores confirmados) e desconfie de
                    comprovantes enviados por WhatsApp. Já foram registrados casos de comprovantes
                    editados com apps de imagem.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">6. Golpe do procurador</h3>
                  <p className="text-lg leading-relaxed">
                    Alguém aparece com procuração para vender um carro em nome de terceiros. Muitas
                    procurações são falsificadas ou revogadas. Exija procuração pública, com firma
                    reconhecida em cartório e confirmação no site do cartório emissor.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">7. Veículo sinistrado com recuperação estética</h3>
                  <p className="text-lg leading-relaxed">
                    Carros com <strong>sinistro de médias e grandes monta</strong> devem ter essa
                    informação registrada. A vistoria cautelar identifica soldas escondidas, air
                    bags disparados e chassis alinhados fora de fábrica.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">8. Comprador que “esquece” de transferir</h3>
                  <p className="text-lg leading-relaxed">
                    Do lado do vendedor, o risco clássico é o comprador não transferir o veículo
                    dentro de 30 dias. O vendedor continua responsável por multas e IPVA. Solução:{" "}
                    <strong>comunicar a venda ao DETRAN imediatamente</strong> (documento oficial
                    gratuito no gov.br) e reter no contrato uma multa robusta pela não
                    transferência.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Checklist de vistoria antes de fechar o negócio</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Antes da assinatura do contrato de compra e venda, o comprador precisa fazer três
                verificações em separado — documental, mecânica e judicial. Sem as três, qualquer
                contrato é frágil:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Documental</h3>
                    <ul className="text-sm space-y-2 list-disc pl-4">
                      <li>CRLV-e atualizado</li>
                      <li>ATPV-e emitida</li>
                      <li>IPVA e DPVAT quitados</li>
                      <li>Sem restrições no RENAVAM</li>
                      <li>Sem alienação fiduciária</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Mecânica</h3>
                    <ul className="text-sm space-y-2 list-disc pl-4">
                      <li>Vistoria cautelar</li>
                      <li>Teste-drive em pista mista</li>
                      <li>Inspeção de suspensão</li>
                      <li>Diagnóstico eletrônico (OBD)</li>
                      <li>Histórico de manutenção</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Judicial</h3>
                    <ul className="text-sm space-y-2 list-disc pl-4">
                      <li>Certidão negativa do vendedor</li>
                      <li>Consulta ao CPF do vendedor</li>
                      <li>Consulta de leilão no DETRAN</li>
                      <li>Origem em sinistro</li>
                      <li>Bloqueios judiciais</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Como funciona a transferência com ATPV-e</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                A ATPV-e substituiu o antigo verso do CRV em papel. O procedimento hoje é
                inteiramente digital, feito no portal ou aplicativo{" "}
                <a
                  href="https://www.gov.br/pt-br/servicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  gov.br
                </a>{" "}
                e no Portal de Serviços do DETRAN de cada estado. Passo a passo simplificado:
              </p>

              <ol className="space-y-3 text-lg leading-relaxed list-decimal pl-6">
                <li>
                  O vendedor emite a ATPV-e pelo portal do DETRAN, gerando um PDF com QR Code.
                </li>
                <li>Comprador e vendedor assinam a ATPV-e com firma reconhecida em cartório.</li>
                <li>Comprador realiza vistoria obrigatória.</li>
                <li>Comprador solicita a transferência no DETRAN, pagando as taxas.</li>
                <li>Novo CRLV-e é emitido em nome do comprador.</li>
                <li>
                  O vendedor faz a <strong>Comunicação de Venda</strong> — hoje já automática com a
                  ATPV-e digital, mas sempre confira no seu login gov.br.
                </li>
              </ol>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Direitos do comprador em veículos com defeito oculto</h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                O Código Civil prevê a <strong>garantia por vício redibitório</strong> — defeitos
                ocultos que só aparecem depois da compra. O prazo é de{" "}
                <strong>30 dias</strong> após a entrega para bens móveis, contados a partir da
                descoberta do defeito. Se o vício era conhecido e omitido, o vendedor pode ser
                responsabilizado ainda que o carro seja usado.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                No caso de compra em loja ou concessionária, aplica-se também o{" "}
                <a
                  href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Código de Defesa do Consumidor
                </a>
                , com prazo de 90 dias para reclamar por vícios em bens duráveis. Já em compras
                entre particulares, aplica-se apenas o Código Civil.
              </p>

              <p className="text-lg leading-relaxed">
                Vale entender também nossa página sobre{" "}
                <Link to="/vicio-redibitorio-defeito-oculto" className="text-primary hover:underline">
                  vício redibitório e defeito oculto
                </Link>{" "}
                — ela explica em detalhe como acionar o vendedor e quais provas colher.
              </p>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/30">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Faça seu contrato de compra e venda de veículo agora
                  </h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Gere um contrato completo, com todas as cláusulas de proteção, em menos de 3
                    minutos. Formato PDF e Word, gratuito e sem cadastro.
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
                      href="https://www.gov.br/infraestrutura/pt-br/assuntos/transito"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Ministério dos Transportes — regulamentações de trânsito e veículos</span>
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <a
                      href="https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Código de Trânsito Brasileiro — Lei nº 9.503/1997</span>
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <a
                      href="https://www.gov.br/senacon/pt-br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Senacon — Secretaria Nacional do Consumidor</span>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Conclusão: contrato bem feito é o freio de segurança da compra</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Comprar ou vender um veículo é uma das maiores transações que a maioria dos
                  brasileiros faz na vida. Ainda assim, muita gente resolve tudo no boca a boca ou
                  em um recibo genérico. O resultado aparece semanas depois: multa que chega no
                  novo dono, financiamento não quitado, IPVA em atraso, veículo bloqueado por
                  ordem judicial. Nenhum desses problemas se resolve rápido — e todos podem ser
                  evitados com um contrato completo e uma vistoria minuciosa.
                </p>
                <p className="text-lg leading-relaxed">
                  O contrato de compra e venda de veículo é barato — na verdade, gratuito quando
                  gerado no nosso sistema — e devolve tranquilidade a quem vende e a quem compra.
                  Somando isso à ATPV-e, à vistoria cautelar e às consultas oficiais no DETRAN, o
                  risco de golpe cai drasticamente.
                </p>
              </div>
            </section>

            <Separator className="my-12" />

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "O que é a ATPV-e e ela substitui o contrato de compra e venda?",
                    a: "A ATPV-e é o documento digital oficial da transferência de veículo, emitido pelo DETRAN. Ela não substitui o contrato: o contrato descreve a negociação, enquanto a ATPV-e transfere oficialmente a propriedade nos sistemas.",
                  },
                  {
                    q: "Preciso reconhecer firma no contrato de veículo?",
                    a: "No contrato particular, o reconhecimento de firma não é obrigatório, mas é recomendado. Já na ATPV-e, o reconhecimento por autenticidade das assinaturas é obrigatório em cartório.",
                  },
                  {
                    q: "Quem paga o IPVA no ano da venda?",
                    a: "A regra prática é dividir proporcionalmente aos meses de posse — se o vendedor usou o carro por 5 meses, paga 5/12; o comprador paga 7/12. O contrato pode definir de outra forma, desde que expresso.",
                  },
                  {
                    q: "O que é a comunicação de venda?",
                    a: "É a informação oficial ao DETRAN de que o veículo foi vendido. Com a ATPV-e digital, ela é feita automaticamente ao gerar o documento, mas é bom confirmar no seu gov.br.",
                  },
                  {
                    q: "Como saber se o carro tem financiamento em aberto?",
                    a: "Consulte o CRLV-e ou o site do DETRAN do estado do veículo: veículos com alienação fiduciária vêm com esta marcação. Também é possível pedir uma certidão negativa no portal gov.br.",
                  },
                  {
                    q: "O contrato digital assinado eletronicamente é válido?",
                    a: "Sim. Contratos assinados eletronicamente têm validade jurídica plena desde a MP 2.200-2/2001 e a Lei 14.063/2020. Recomenda-se plataforma que gere trilha de auditoria.",
                  },
                  {
                    q: "O que fazer se descobrir defeito grave depois da compra?",
                    a: "Se comprou de particular, o prazo é de 30 dias após descobrir o defeito, aplicando o Código Civil. Se comprou em concessionária, aplica-se o CDC com prazo de 90 dias.",
                  },
                  {
                    q: "Preciso de reconhecimento de firma para vender uma moto?",
                    a: "Sim. Todas as motos, ciclomotores, quadriciclos e triciclos seguem a mesma regra dos carros: ATPV-e com reconhecimento de firma e comunicação de venda.",
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
                    Consulte um advogado para casos específicos.
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

export default CompraVendaVeiculo;
