import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gerador" element={<ContractGenerator />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
