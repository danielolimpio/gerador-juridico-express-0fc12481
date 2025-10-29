import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
</QueryClientProvider>
);

export default App;
