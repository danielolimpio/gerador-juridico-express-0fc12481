import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import ContractGenerator from "./pages/ContractGenerator";
import ComoFunciona from "./pages/ComoFunciona";
import TiposDeContratos from "./pages/TiposDeContratos";
import ExemplosDeContratos from "./pages/ExemplosDeContratos";
import FAQ from "./pages/FAQ";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosDeUso from "./pages/TermosDeUso";
import AvisoLegal from "./pages/AvisoLegal";
import Cookies from "./pages/Cookies";
import Contato from "./pages/Contato";
import GlossarioJuridico from "./pages/GlossarioJuridico";
import ContratoDeAdesao from "./pages/ContratoDeAdesao";
import FiadorResponsabilidade from "./pages/FiadorResponsabilidade";
import CaucaoGarantia from "./pages/CaucaoGarantia";
import ComodatoEmprestimo from "./pages/ComodatoEmprestimo";
import VicioRedibitorio from "./pages/VicioRedibitorio";
import ResilicaoContratual from "./pages/ResilicaoContratual";
import RescisaoContrato from "./pages/RescisaoContrato";
import OnerosiadeExcessiva from "./pages/OnerosiadeExcessiva";
import ClausulaPenal from "./pages/ClausulaPenal";
import Novacao from "./pages/Novacao";
import AlienacaoFiduciaria from "./pages/AlienacaoFiduciaria";
import Usufruto from "./pages/Usufruto";
import Arras from "./pages/Arras";
import ForcaMaior from "./pages/ForcaMaior";
import CasoFortuito from "./pages/CasoFortuito";
import DireitoArrependimento from "./pages/DireitoArrependimento";
import Benfeitorias from "./pages/Benfeitorias";
import Eviccao from "./pages/Eviccao";
import SubRogacao from "./pages/SubRogacao";
import Mora from "./pages/Mora";
import Arbitragem from "./pages/Arbitragem";
import ClausulaNaoConcorrencia from "./pages/ClausulaNaoConcorrencia";
import ClausulaConfidencialidade from "./pages/ClausulaConfidencialidade";
import CessaoCredito from "./pages/CessaoCredito";
import CessaoDireitos from "./pages/CessaoDireitos";
import CondicaoResolutiva from "./pages/CondicaoResolutiva";
import CondicaoSuspensiva from "./pages/CondicaoSuspensiva";
import ContratoAleatorio from "./pages/ContratoAleatorio";
import ContratoBilateral from "./pages/ContratoBilateral";
import ContratoUnilateral from "./pages/ContratoUnilateral";
import DanoMoral from "./pages/DanoMoral";
import DanoMaterial from "./pages/DanoMaterial";
import Blog from "./pages/Blog";
import ContratoAluguelResidencial from "./pages/blog/ContratoAluguelResidencial";
import ContratoComodato from "./pages/blog/ContratoComodato";
import ContratoDoacao from "./pages/blog/ContratoDoacao";
import ContratoMandato from "./pages/blog/ContratoMandato";
import ContratoFranquia from "./pages/blog/ContratoFranquia";
import ContratoLocacaoVeiculo from "./pages/blog/ContratoLocacaoVeiculo";
import ContratoPrestacaoServicos from "./pages/blog/ContratoPrestacaoServicos";
import NovoMei2027 from "./pages/blog/NovoMei2027";
import Escala5x2 from "./pages/blog/Escala5x2";
import Sobre from "./pages/Sobre";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gerador" element={<ContractGenerator />} />
            
            {/* Rotas SEO-friendly para contratos */}
            <Route path="/contrato-de-compra-e-venda" element={<ContractGenerator />} />
            <Route path="/contrato-de-locacao-comercial" element={<ContractGenerator />} />
            <Route path="/modelos-de-contrato-de-aluguel" element={<ContractGenerator />} />
            <Route path="/contrato-de-prestacao-de-servicos" element={<ContractGenerator />} />
            <Route path="/contrato-de-parceria-empresarial" element={<ContractGenerator />} />
            <Route path="/contrato-de-doacao" element={<ContractGenerator />} />
            <Route path="/contrato-de-emprestimo" element={<ContractGenerator />} />
            <Route path="/contrato-de-comodato" element={<ContractGenerator />} />
            <Route path="/contrato-de-mandato" element={<ContractGenerator />} />
            <Route path="/contrato-de-alienacao-fiduciaria" element={<ContractGenerator />} />
            <Route path="/contrato-de-estagio" element={<ContractGenerator />} />
            <Route path="/contrato-de-trabalho-autonomo" element={<ContractGenerator />} />
            <Route path="/contrato-de-rescisao-de-contrato" element={<ContractGenerator />} />
            <Route path="/contrato-de-locacao-de-veiculo" element={<ContractGenerator />} />
            <Route path="/contrato-de-franquia" element={<ContractGenerator />} />
            
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/tipos-de-contratos" element={<TiposDeContratos />} />
            <Route path="/exemplos-de-contratos" element={<ExemplosDeContratos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/contrato-aluguel-residencial" element={<ContratoAluguelResidencial />} />
          <Route path="/blog/contrato-comodato" element={<ContratoComodato />} />
          <Route path="/blog/contrato-doacao-venda-bens-moveis" element={<ContratoDoacao />} />
            <Route path="/blog/contrato-mandato" element={<ContratoMandato />} />
            <Route path="/blog/contrato-franquia" element={<ContratoFranquia />} />
            <Route path="/blog/contrato-locacao-veiculo" element={<ContratoLocacaoVeiculo />} />
            <Route path="/blog/contrato-prestacao-servicos-autonomos" element={<ContratoPrestacaoServicos />} />
            <Route path="/blog/novo-mei-2027-guia-completo" element={<NovoMei2027 />} />
            <Route path="/blog/escala-5x2-como-vai-funcionar" element={<Escala5x2 />} />
          <Route path="/sobre" element={<Sobre />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/glossario-juridico" element={<GlossarioJuridico />} />
            <Route path="/contrato-de-adesao" element={<ContratoDeAdesao />} />
            <Route path="/fiador-responsabilidade-legal" element={<FiadorResponsabilidade />} />
            <Route path="/caucao-garantia-contratual" element={<CaucaoGarantia />} />
            <Route path="/comodato-emprestimo-gratuito" element={<ComodatoEmprestimo />} />
            <Route path="/vicio-redibitorio-defeito-oculto" element={<VicioRedibitorio />} />
            <Route path="/resilicao-contratual-mutuo-acordo" element={<ResilicaoContratual />} />
          <Route path="/rescisao-de-contrato-descumprimento" element={<RescisaoContrato />} />
          <Route path="/onerosidade-excessiva-teoria-imprevacao" element={<OnerosiadeExcessiva />} />
          <Route path="/clausula-penal-multa-contratual" element={<ClausulaPenal />} />
          <Route path="/novacao-substituicao-obrigacao" element={<Novacao />} />
          <Route path="/alienacao-fiduciaria-garantia" element={<AlienacaoFiduciaria />} />
          <Route path="/usufruto-direito-real" element={<Usufruto />} />
          <Route path="/arras-sinal-contratual" element={<Arras />} />
          <Route path="/forca-maior-evento-imprevisivel" element={<ForcaMaior />} />
          <Route path="/caso-fortuito-evento-inevitavel" element={<CasoFortuito />} />
          <Route path="/direito-arrependimento-prazo-legal" element={<DireitoArrependimento />} />
          <Route path="/benfeitorias-melhoramentos" element={<Benfeitorias />} />
          <Route path="/eviccao-perda-bem" element={<Eviccao />} />
          <Route path="/sub-rogacao-substituicao" element={<SubRogacao />} />
          <Route path="/mora-atraso-obrigacao" element={<Mora />} />
          <Route path="/arbitragem-resolucao-conflitos" element={<Arbitragem />} />
          <Route path="/clausula-nao-concorrencia" element={<ClausulaNaoConcorrencia />} />
          <Route path="/clausula-confidencialidade" element={<ClausulaConfidencialidade />} />
          <Route path="/cessao-credito" element={<CessaoCredito />} />
          <Route path="/cessao-direitos" element={<CessaoDireitos />} />
          <Route path="/condicao-resolutiva" element={<CondicaoResolutiva />} />
          <Route path="/condicao-suspensiva" element={<CondicaoSuspensiva />} />
          <Route path="/contrato-aleatorio" element={<ContratoAleatorio />} />
          <Route path="/contrato-bilateral" element={<ContratoBilateral />} />
          <Route path="/contrato-unilateral" element={<ContratoUnilateral />} />
          <Route path="/dano-moral" element={<DanoMoral />} />
          <Route path="/dano-material" element={<DanoMaterial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
</QueryClientProvider>
);

export default App;
