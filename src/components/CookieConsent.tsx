import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md animate-in slide-in-from-bottom-5">
      <Card className="relative p-6 shadow-lg border-2">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        <div className="flex items-start gap-3 mb-4">
          <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              Aviso de Cookies
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Usamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa política de cookies.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 text-xs">
            <a
              href="/politica-privacidade"
              className="text-primary hover:underline"
            >
              Política de Privacidade
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="/termos-de-uso"
              className="text-primary hover:underline"
            >
              Termos de Uso
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="/cookies"
              className="text-primary hover:underline"
            >
              Política de Cookies
            </a>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleAccept}
              size="sm"
              className="flex-1"
            >
              Aceitar
            </Button>
            <Button
              onClick={handleReject}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              Rejeitar
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;