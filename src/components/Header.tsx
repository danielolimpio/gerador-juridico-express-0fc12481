import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Sobre", path: "/aviso-legal" },
    { label: "Como Funciona", path: "/como-funciona" },
    { label: "Modelos", path: "/tipos-de-contratos" },
    { label: "Exemplos", path: "/exemplos-de-contratos" },
    { label: "FAQ", path: "/faq" },
    { label: "Contato", path: "/contato" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navega para a página de tipos de contratos com query
      navigate(`/tipos-de-contratos?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleGerarContrato = () => {
    navigate("/");
    setTimeout(() => {
      const contractTypesSection = document.querySelector('#contract-types-section');
      contractTypesSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg hidden sm:block">Contratos</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Search and CTA */}
          <div className="flex items-center gap-3">
            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="hidden md:flex relative">
              <Input
                type="text"
                placeholder="Buscar contratos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 lg:w-64 pr-10"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>

            {/* CTA Button */}
            <Button
              variant="default"
              onClick={handleGerarContrato}
              className="hidden sm:flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Gerar Contrato Grátis
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-6">
                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="relative">
                    <Input
                      type="text"
                      placeholder="Buscar contratos..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pr-10"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      variant="ghost"
                      className="absolute right-0 top-0 h-full"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-4">
                    {menuItems.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => {
                          navigate(item.path);
                          setMobileMenuOpen(false);
                        }}
                        className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <Button
                    variant="default"
                    onClick={() => {
                      handleGerarContrato();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Gerar Contrato Grátis
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
