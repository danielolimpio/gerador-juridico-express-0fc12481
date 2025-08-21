import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        variant="google" 
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none group"
        onClick={() => {
          window.location.href = '/contrato/compra-venda';
        }}
      >
        <span className="hidden sm:inline">Gerar Contrato Agora</span>
        <span className="sm:hidden">Gerar</span>
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default FloatingButton;