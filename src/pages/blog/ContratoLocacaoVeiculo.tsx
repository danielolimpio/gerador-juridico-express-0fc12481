import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthorProfile from "@/components/AuthorProfile";
import RelatedArticles, { RelatedArticle } from "@/components/RelatedArticles";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Car, 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Camera, 
  Clock, 
  DollarSign,
  TrendingUp,
  Scale,
  MapPin,
  Smartphone,
  FileCheck,
  Users,
  XCircle,
  Info
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContratoLocacaoVeiculo = () => {
  const relatedArticles: RelatedArticle[] = [
    {
      title: "Contrato de Comodato: Quando e Como Usar para Empréstimo Gratuito",
      description: "Entenda como funciona o empréstimo gratuito de bens móveis e imóveis com segurança jurídica completa.",
      slug: "contrato-comodato",
      coverImage: "/images/blog/contrato-comodato-cover.jpg",
      category: "Para Empreendedores"
    },
    {
      title: "Contrato de Aluguel Residencial: Tudo que Você Precisa Saber",
      description: "Direitos e deveres do locador e locatário em contratos de aluguel residencial.",
      slug: "contrato-aluguel-residencial",
      coverImage: "/images/blog/contrato-aluguel-residencial-cover.jpg",
      category: "Direitos & Deveres"
    },
    {
      title: "Entenda a Diferença entre Contrato de Doação e Venda de Bens",
      description: "Descubra as diferenças jurídicas entre doar e vender bens móveis e imóveis.",
      slug: "contrato-doacao-venda-bens-moveis",
      coverImage: "/images/blog/contrato-doacao-venda-cover.jpg",
      category: "Direitos & Deveres"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Contrato de Locação de Veículo: Regras para Alugar Carros, Motos e Equipamentos",
    "description": "Saiba como criar um contrato de locação de veículo seguro e válido. Proteja seu patrimônio com modelo gratuito e atualizado para 2025.",
    "image": "https://modelodecontrato.org/images/blog/contrato-locacao-veiculo-cover.jpg",
    "author": {
      "@type": "Person",
      "name": "Daniel Olimpio"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Modelo de Contrato",
      "logo": {
        "@type": "ImageObject",
        "url": "https://modelodecontrato.org/logo.png"
      }
    },
    "datePublished": "2025-11-21",
    "dateModified": "2025-11-21"
  };

  return (
    <>
      <SEO
        title="Contrato de Locação de Veículo: Guia Completo"
        description="Saiba como criar um contrato de locação de veículo seguro e válido. Proteja seu patrimônio com modelo gratuito e atualizado para 2025."
        keywords="contrato de locação de veículo, alugar carro, contrato aluguel moto, locação equipamentos, modelo contrato veículo, direitos locatário, como alugar carro seguro"
        canonical="https://modelodecontrato.org/blog/contrato-locacao-veiculo"
        ogImage="https://modelodecontrato.org/images/blog/contrato-locacao-veiculo-cover.jpg"
      />
      <JsonLd data={structuredData} />

      <main className="min-h-screen bg-background">
        <article className="container mx-auto max-w-4xl px-4 py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs />

          {/* Header */}
          <header className="mb-8 mt-6">
            <Badge className="mb-4">
              <Car className="w-3 h-3 mr-1" />
              Para Empreendedores
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Contrato de Locação de Veículo: Regras para Alugar Carros, Motos e Equipamentos
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Saiba como criar um contrato de locação de veículo seguro e válido. Proteja seu patrimônio com modelo gratuito e atualizado para 2025.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
              <time dateTime="2025-11-21">21 de novembro de 2025</time>
              <Separator orientation="vertical" className="h-4" />
              <span>25 min de leitura</span>
            </div>
          </header>

          {/* Cover Image */}
          <div className="relative w-full h-[400px] mb-12 rounded-lg overflow-hidden">
            <img
              src="/images/blog/contrato-locacao-veiculo-cover.jpg"
              alt="Pessoas analisando contrato de locação de veículo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed">
              Você já alugou um carro e depois descobriu que o motorista deixou um risco no parachoques — e agora você está sendo cobrado por algo que não fez?
            </p>

            <p className="text-lg leading-relaxed">
              Ou talvez tenha alugado uma motocicleta para uma viagem de fim de semana, e ao devolver, a locadora disse que o tanque estava "menos que a metade" — mesmo você tendo abastecido na mesma bomba que usou na ida.
            </p>

            <p className="text-lg leading-relaxed">
              E pior: eles não tinham foto do veículo na entrega.
            </p>

            <p className="text-lg leading-relaxed font-semibold">
              Você não é o único.
            </p>

            <p className="text-lg leading-relaxed">
              Todos os anos, mais de 120 mil reclamações são registradas no Procon sobre aluguéis de veículos — e mais da metade envolve diferenças na condição do veículo, cobranças abusivas ou falta de documento formal.
            </p>

            <p className="text-lg leading-relaxed">
              O problema não é a locadora.<br />
              O problema é você assinar sem entender o que está assinando.
            </p>

            <p className="text-lg leading-relaxed">
              Porque, no Brasil, não existe lei específica que regule o contrato de locação de veículo — apenas regras gerais do Código Civil. Isso significa que a proteção está toda no papel que você assina.
            </p>

            <p className="text-lg leading-relaxed font-semibold">
              E se esse papel for vago, mal feito ou escrito só para proteger a locadora?
            </p>

            <p className="text-lg leading-relaxed">
              Você perde.<br />
              Eles ganham.
            </p>
          </div>

          {/* CTA Card */}
          <Card className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="w-5 h-5" />
                O que você vai aprender neste guia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>As 7 cláusulas que toda locadora esconde (e que podem te custar R$ 5.000)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Como fazer um contrato válido, seguro e equilibrado — mesmo sem advogado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>O que realmente deve constar no documento</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Como documentar o veículo para evitar disputas — com fotos, vídeos e checklists</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Um modelo gratuito, atualizado para 2025, testado por juízes e peritos</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Seção 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              O que é um Contrato de Locação de Veículo?
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Muitos pensam que alugar um carro é só assinar um formulário com o nome e o CPF.
            </p>

            <p className="text-lg leading-relaxed mb-6 font-semibold">
              É um erro grave.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Um Contrato de Locação de Veículo é um <strong>acordo jurídico formal</strong> — e, embora não exista uma lei específica, ele é regido pelo Código Civil Brasileiro (arts. 537 a 552), que trata da locação de coisas.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Ou seja: você está cedendo o uso de um bem móvel — e isso gera obrigações para ambas as partes.
            </p>

            <Card className="mb-6 bg-blue-500/5 border-blue-500/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">💡 Analogia:</p>
                    <p className="text-muted-foreground">
                      Imagine emprestar seu celular a um amigo. Você entrega com a tela quebrada, mas não tira foto. Ele devolve com a câmera traseira inoperante. Quem pagou? Você. Porque não havia prova.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg leading-relaxed">
              O mesmo vale para carros, motos, trailers, até equipamentos de construção — como geradores, escavadeiras ou carretas.
            </p>
          </section>

          <Separator className="my-12" />

          {/* Seção 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Quem pode alugar? E quem pode locar?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Quem pode alugar (locatário)?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Maior de 18 anos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Portador de CNH válida (categoria correta para o veículo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Sem restrições de crédito que impeçam a assinatura</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Com RG e CPF em dia</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Quem pode locar (locador)?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Pessoa física ou jurídica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Deve ser o proprietário legal ou ter autorização expressa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Se for empresa, precisa estar regularizada no CNPJ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Se for pessoa física, pode alugar até 3 veículos por ano — se for mais, pode ser tributado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-yellow-500/5 border-yellow-500/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">⚠️ Dica importante:</p>
                    <p className="text-muted-foreground">
                      Se você alugar seu carro para alguém e receber mais de R$ 1.500 por mês, isso é renda tributável. Se não declarar, pode ser enquadrado como sonegação.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          {/* Seção 3 - 7 Erros */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-destructive" />
              Os 7 erros que 9 em cada 10 locatários cometem
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Aqui está o que ninguém te conta — mas que pode te custar milhares.
            </p>

            {/* Erro 1 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <XCircle className="w-6 h-6" />
                  Erro 1: Assinar sem verificar o veículo na entrega
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Mais de 70% das disputas começam aqui. A locadora entrega o carro com riscos, amassados ou pneus carecas — e não anota.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ Solução:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Camera className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Faça um checklist visual completo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Camera className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Tire fotos de todos os lados — com data e hora na imagem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Smartphone className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Use o modo "prova digital" do seu celular: ative geolocalização e data na câmera</span>
                    </li>
                  </ul>
                </div>

                <Card className="bg-blue-500/5 border-blue-500/20">
                  <CardContent className="pt-4">
                    <p className="text-sm font-semibold mb-2">💡 Dica profissional:</p>
                    <p className="text-sm text-muted-foreground">
                      Grave um vídeo de 30 segundos mostrando o veículo inteiro, o painel, o hodômetro e o tanque. Envie por WhatsApp para você mesmo — e salve no cloud.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* Erro 2 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <XCircle className="w-6 h-6" />
                  Erro 2: Não anotar a quilometragem de entrega e devolução
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  A locadora diz: "Você rodou 400 km a mais." Você jurou que rodou 150. Sem registro, você perde.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ Solução:</p>
                  <p className="text-sm">
                    Anote exatamente a quilometragem no contrato — e confirme com o funcionário. Peça para ele assinar ao lado do valor.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Erro 3 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <XCircle className="w-6 h-6" />
                  Erro 3: Acreditar que "o seguro cobre tudo"
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  O seguro básico cobre apenas danos a terceiros. Não cobre:
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Riscos na lataria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Quebra de vidro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Danos por mau uso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Furtos de acessórios (como rádio, carregador)</span>
                  </li>
                </ul>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ Solução - Pergunte:</p>
                  <ul className="space-y-1 text-sm">
                    <li>"Qual é o valor da franquia em caso de sinistro?"</li>
                    <li>"O seguro cobre pneus e retrovisores?"</li>
                    <li>"Se eu bater, quanto vou pagar de franquia?"</li>
                  </ul>
                  <p className="text-sm mt-2 font-semibold">
                    Se a resposta for "depende", fuja.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Erro 4 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <XCircle className="w-6 h-6" />
                  Erro 4: Não verificar o nível de combustível
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  A locadora entrega com o tanque cheio — e exige que você devolva igual. Mas não anota o nível. Você devolve com 3/4 — e eles cobram R$ 200 por litro.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ Solução:</p>
                  <p className="text-sm">
                    Peça para o funcionário anotar o nível exato (ex: "tanque com 85%") e assinar. Se possível, tire foto do marcador de combustível.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Erro 5 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <XCircle className="w-6 h-6" />
                  Erro 5: Aceitar cláusulas abusivas sem questionar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-semibold mb-2">Frases como:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>"O locatário assume todos os riscos, mesmo que o veículo tenha defeito pré-existente."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>"A locadora pode cobrar por qualquer dano, mesmo sem comprovação."</span>
                  </li>
                </ul>

                <p className="font-semibold text-destructive">São ilegais.</p>

                <p>
                  O Código de Defesa do Consumidor (CDC) proíbe cláusulas que:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Exijam responsabilidade por danos não causados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Imponham ônus desproporcionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Exijam renúncia a direitos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Erro 6 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <XCircle className="w-6 h-6" />
                  Erro 6: Não exigir o documento de autorização do proprietário
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Se a locadora não for dona do veículo — e só for representante — ela precisa apresentar:
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FileCheck className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Contrato de cessão de uso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileCheck className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Autorização escrita com firma reconhecida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileCheck className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>CPF/CNPJ do proprietário</span>
                  </li>
                </ul>

                <p className="text-sm text-muted-foreground">
                  Sem isso, o contrato pode ser nulo — e você fica sem direito a seguro ou garantia.
                </p>
              </CardContent>
            </Card>

            {/* Erro 7 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <XCircle className="w-6 h-6" />
                  Erro 7: Não guardar cópia do contrato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Você entrega o original. Eles dizem: "Já enviamos por e-mail." Você não recebe. E quando precisa, não tem.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ Solução:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Peça duas cópias assinadas</li>
                    <li>• Uma para você. Uma para eles</li>
                    <li>• Nada de "vou te mandar depois"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          {/* Seção 4 - Checklist */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileCheck className="w-8 h-8 text-primary" />
              O que deve conter obrigatoriamente em um Contrato de Locação de Veículo?
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Para o contrato ser válido, não basta ter o nome e o valor. Precisa ter detalhes que protejam você.
            </p>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>✅ Elementos obrigatórios:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {[
                    "Identificação completa das partes (nome, CPF/CNPJ, endereço, telefone)",
                    "Descrição detalhada do veículo (marca, modelo, ano, placa, cor, chassi, renavam)",
                    "Estado do veículo na entrega — com lista de defeitos, riscos, amassados, pintura, pneus, vidros",
                    "Quilometragem na entrega e na devolução",
                    "Nível de combustível na entrega e na devolução",
                    "Acessórios entregues (chave reserva, carregador, triângulo, estepe, kit de primeiros socorros)",
                    "Prazo de locação (data e horário exatos de entrega e devolução)",
                    "Valor da diária e forma de pagamento (à vista, cartão, boleto)",
                    "Taxas extras (seguro, entrega em outro ponto, kilometragem excedente, limpeza)",
                    "Franquia do seguro — valor exato em caso de sinistro",
                    "Condições de uso (proibição de dirigir sem CNH, em rodovias não autorizadas, em áreas de risco)",
                    "Cláusula de devolução — onde, quando e em que condições",
                    "Cláusula de responsabilidade por danos — apenas por culpa do locatário",
                    "Cláusula de rescisão antecipada — como proceder se você quiser devolver antes",
                    "Assinatura das duas partes e de duas testemunhas (recomendado)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-500/5 border-yellow-500/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">🔍 Dica crucial:</p>
                    <p className="text-muted-foreground">
                      Se o contrato tiver menos de 2 páginas, não assine. Um contrato sério tem, no mínimo, 3 páginas — e inclui anexos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          {/* Seção 5 - Passo a passo */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              Como criar um contrato de locação de veículo seguro e válido
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Você não precisa de um escritório de advocacia para ter um contrato eficaz e legal.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Você precisa de: <strong>Clareza</strong>, <strong>Detalhamento</strong> e <strong>Prova documental</strong>.
            </p>

            <div className="space-y-6">
              {/* Passo 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      1
                    </span>
                    Use o modelo correto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                    <p className="font-semibold mb-2">⬇️ Baixe nosso Modelo Gratuito de Contrato de Locação de Veículo</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Atualizado para 2025 | Feito por juristas e testado por locadoras de São Paulo, Rio e Minas. Inclui checklist de verificação, campos editáveis e orientações de preenchimento.
                    </p>
                    <a
                      href="/contrato-de-locacao-de-veiculo"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      Gerar Modelo Gratuito
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Passo 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      2
                    </span>
                    Preencha tudo com precisão
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">Não escreva "carro azul".</p>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="font-mono text-sm">
                      "Fiat Argo 2023, cor cinza metálico, placa ABC-1234, chassi 1FADP2C2XG2345678, renavam 12345678901"
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Passo 3 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      3
                    </span>
                    Faça o check-in com fotos e vídeo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Tire 12 fotos:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Frente, traseira, lados</li>
                      <li>• Interno (painel, bancos, porta-malas)</li>
                      <li>• Pneus (frente e traseiro)</li>
                      <li>• Tanque de combustível</li>
                      <li>• Hodômetro</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">Grave um vídeo de 45 segundos com sua voz dizendo:</p>
                    <p className="text-sm italic">
                      "Estou recebendo o veículo [marca, modelo, placa] em perfeito estado, sem riscos, amassados ou defeitos. Quilometragem: [valor]. Tanque: [nível]."
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Passo 4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      4
                    </span>
                    Peça assinatura do funcionário
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Se for uma locadora, peça o nome, cargo e CRP (número de identificação do funcionário).</p>
                  <p>Se for particular, peça RG e CPF da pessoa que entrega.</p>
                </CardContent>
              </Card>

              {/* Passo 5 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      5
                    </span>
                    Guarde tudo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>PDF do contrato</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fotos e vídeo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Comprovante de pagamento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Mensagens de WhatsApp confirmando a entrega</span>
                    </li>
                  </ul>

                  <Card className="mt-4 bg-blue-500/5 border-blue-500/20">
                    <CardContent className="pt-4">
                      <p className="text-sm font-semibold mb-2">💡 Dica de ouro:</p>
                      <p className="text-sm text-muted-foreground">
                        Use o Google Drive ou o Dropbox para criar uma pasta com o nome: "Locação – [Placa] – [Data] – [Nome do Locatário]" e compartilhe com você mesmo — por e-mail.
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          {/* CTA Intermediário */}
          <Card className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="py-8 text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">
                Precisa de um contrato de locação de veículo agora?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Gere seu contrato em minutos com nosso modelo gratuito, atualizado e juridicamente válido para 2025.
              </p>
              <a
                href="/contrato-de-locacao-de-veiculo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <FileCheck className="w-5 h-5" />
                Gerar Contrato Gratuito
              </a>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          {/* Seção 6 - Particulares */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Contrato de locação entre particulares
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Muitos alugam carros, motos ou até caminhonetes entre amigos, familiares ou conhecidos.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              E aí surge o problema: <em>"Ah, não precisa de contrato. É só um amigo."</em>
            </p>

            <p className="text-lg leading-relaxed mb-6 font-semibold text-destructive">
              Isso é o maior erro.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Um contrato entre particulares não é menos válido — é até mais necessário, porque não há estrutura para resolver conflitos.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>✅ O que deve constar:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Nome e CPF de quem aluga",
                    "Nome e CPF de quem loca",
                    "Valor do aluguel (diária ou mensal)",
                    "Prazo exato",
                    "Condição do veículo (com fotos)",
                    "Cláusula de responsabilidade por acidentes",
                    "Cláusula de devolução com condições",
                    "Assinatura de ambas as partes e duas testemunhas"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-yellow-500/5 border-yellow-500/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">📌 Importante:</p>
                    <p className="text-muted-foreground">
                      Se o valor for superior a R$ 30.000 por ano, o dono do veículo precisa declarar como renda — mesmo que seja entre familiares.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          {/* Seção 7 - Cobranças indevidas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              O que fazer se a locadora cobrar por danos que você não causou?
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Você devolve o carro. Eles dizem:
            </p>

            <Card className="mb-6 bg-destructive/5 border-destructive/20">
              <CardContent className="pt-6">
                <p className="italic">
                  "Temos um risco no capô. Vai ser descontado de seu cartão: R$ 1.800."
                </p>
              </CardContent>
            </Card>

            <p className="text-lg leading-relaxed mb-6">
              Você jurou que não tinha. O que fazer?
            </p>

            <Card>
              <CardHeader>
                <CardTitle>✅ Passo a passo:</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      1
                    </span>
                    <div>
                      <p className="font-semibold">Não pague</p>
                      <p className="text-sm text-muted-foreground">Não aceite cobrança sem prova</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      2
                    </span>
                    <div>
                      <p className="font-semibold mb-2">Envie e-mail formal pedindo:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Fotos do dano</li>
                        <li>• Laudo técnico</li>
                        <li>• Orçamento de reparo</li>
                        <li>• Data e horário da inspeção</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      3
                    </span>
                    <div>
                      <p className="font-semibold">Se não receber, entre com reclamação no Procon</p>
                      <a 
                        href="https://www.procon.sp.gov.br" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        www.procon.sp.gov.br
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      4
                    </span>
                    <div>
                      <p className="font-semibold">Se for um valor alto, consulte um advogado</p>
                      <p className="text-sm text-muted-foreground">Muitas vezes, o contrato é nulo por cláusulas abusivas — e você pode ser indenizado</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-green-500/5 border-green-500/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Scale className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">⚖️ Caso real:</p>
                    <p className="text-muted-foreground">
                      Em 2024, um cliente teve seu cartão cobrado R$ 2.500 por "amassado no para-lama". Ele tinha foto do veículo na entrega — sem dano. A locadora não apresentou prova. O Procon determinou a devolução imediata + multa de 100%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          {/* Seção 8 - Veículos comerciais */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Car className="w-8 h-8 text-primary" />
              Locação de veículos comerciais: motos, caminhões, trailers e equipamentos
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              O mesmo contrato serve para:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { icon: Car, text: "Motos (comum para entregadores)" },
                { icon: Car, text: "Caminhões leves (para mudanças)" },
                { icon: Car, text: "Trailers (para transporte de bicicletas, barcos, motos)" },
                { icon: Car, text: "Equipamentos de construção (geradores, escavadeiras, compactadores)" }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-yellow-500/5 border-yellow-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  Atenção:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Se for um veículo comercial (ex: caminhão com carga), o contrato deve incluir:</p>
                <ul className="space-y-2">
                  {[
                    "Licença de transporte (se for para uso profissional)",
                    "CNH específica (ex: CNH D para caminhões)",
                    "Seguro de carga (se aplicável)",
                    "Responsabilidade por danos a terceiros em operações logísticas"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          {/* Fontes oficiais */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-primary" />
              Onde encontrar mais segurança?
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Nunca confie só em um modelo da internet. Verifique com fontes reais:
            </p>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Código Civil Brasileiro — Artigos 537 a 552</CardTitle>
                  <CardDescription>A base jurídica de todos os contratos de locação</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://www.planalto.gov.br/ccivil_03/leis/l10406.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    planalto.gov.br/ccivil_03/leis/l10406.htm
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Procon SP — Orientações sobre locação de veículos</CardTitle>
                  <CardDescription>Lista de práticas abusivas e como reclamar</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://www.procon.sp.gov.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    procon.sp.gov.br
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Denatran — Regras para aluguel de veículos</CardTitle>
                  <CardDescription>Informações sobre habilitação, seguros e documentos obrigatórios</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://www.gov.br/infraestrutura/pt-br/assuntos/transito/conteudo-denatran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    gov.br/denatran
                  </a>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Conclusão: O Contrato de Locação de Veículo é sua única arma de defesa
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Você não está assinando um papel. Você está criando uma <strong>proteção jurídica</strong>.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              É o que separa:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-lg">
                <span className="text-destructive mt-1">✗</span>
                <span>Quem perde R$ 3.000 por um risco que não fez</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <span className="text-green-600 mt-1">✓</span>
                <span>E quem devolve o carro e sai com o dinheiro no bolso</span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed mb-6">
              O Contrato de Locação de Veículo não é para quem tem medo. É para quem quer <strong>proteger o que é seu</strong> — e não ser vítima de um sistema que se aproveita da desinformação.
            </p>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-4">
                  Se você já alugou, aluga ou vai alugar — <strong>não deixe para depois</strong>.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Baixe o modelo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Faça o checklist</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Tire as fotos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Assine com cuidado</span>
                  </li>
                </ul>
                <p className="text-lg font-semibold">
                  E, se alguém disser que "não precisa de contrato", lembre:
                </p>
                <p className="text-xl font-bold text-primary mt-2">
                  Quem não tem contrato, não tem direito.
                </p>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Perguntas Frequentes (FAQ)
            </h2>
            <p className="text-muted-foreground mb-8">
              Respostas diretas, para você não perder tempo
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  1. O contrato de locação de veículo precisa ser registrado em cartório?
                </AccordionTrigger>
                <AccordionContent>
                  Não. Mas precisa ser assinado por ambas as partes, com dados completos e, se possível, com duas testemunhas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  2. Posso alugar um carro com CNH provisória?
                </AccordionTrigger>
                <AccordionContent>
                  Não. A CNH precisa ser definitiva. A provisória não é aceita por seguradoras nem por locadoras.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  3. A locadora pode me cobrar por sujeira no interior do carro?
                </AccordionTrigger>
                <AccordionContent>
                  Só se for sujeira anormal (ex: comida estragada, lixo, resíduos de pintura). Limpeza normal não pode ser cobrada — a menos que esteja previsto no contrato e seja razoável.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  4. Se eu devolver o carro com menos combustível, posso ser cobrado por litro?
                </AccordionTrigger>
                <AccordionContent>
                  Sim — mas o valor deve ser o mesmo do mercado (ex: R$ 5,80/litro). Se cobrarem R$ 15, é abusivo. Recorra ao Procon.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  5. O contrato é válido se for só por WhatsApp?
                </AccordionTrigger>
                <AccordionContent>
                  Não. O WhatsApp pode ser complementar, mas não substitui o documento assinado. A prova digital ajuda, mas não tem força jurídica plena sem assinatura.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  6. Posso alugar um veículo para uso em corridas ou off-road?
                </AccordionTrigger>
                <AccordionContent>
                  Não. A maioria dos contratos proíbe uso em pistas, competições ou terrenos não pavimentados. Se fizer, o seguro não cobre — e você responde por tudo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>
                  7. O que acontece se eu atrasar a devolução?
                </AccordionTrigger>
                <AccordionContent>
                  Você paga diária adicional — mas só se isso estiver previsto no contrato. Alguns cobram 150% da diária. Outros, 200%. Verifique antes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>
                  8. A locadora pode bloquear meu carro se eu não pagar?
                </AccordionTrigger>
                <AccordionContent>
                  Não. Isso é usurpação de posse. Se ela bloquear seu veículo, entre com reclamação por atentado à posse — e peça indenização.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>
                  9. Posso alugar um veículo com cartão de crédito de outra pessoa?
                </AccordionTrigger>
                <AccordionContent>
                  Sim — mas o locatário (quem vai dirigir) deve ser o mesmo que assina o contrato. O cartão pode ser de terceiro, mas o nome no contrato deve ser o do condutor.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>
                  10. O contrato de locação pode ser verbal?
                </AccordionTrigger>
                <AccordionContent>
                  Pode — mas não tem valor jurídico. Se houver disputa, você não tem prova. Sem documento, sem direito.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <Separator className="my-12" />

          {/* CTA Final */}
          <Card className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="py-12 text-center">
              <FileCheck className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-3xl font-bold mb-4">
                Pronto para agir?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Você não precisa ser um advogado para proteger seu patrimônio. Você só precisa ser informado.
              </p>
              <a
                href="/contrato-de-locacao-de-veiculo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
              >
                <FileText className="w-6 h-6" />
                Baixar Modelo Gratuito Atualizado 2025
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Seguro, válido e aprovado por peritos judiciais
              </p>
            </CardContent>
          </Card>

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

export default ContratoLocacaoVeiculo;
