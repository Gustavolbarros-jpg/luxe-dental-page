import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
// Usando a logo correta que você enviou
import logoImage from '@/assets/3.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CORREÇÃO: Menu ajustado sem "Contato" e com links corretos
  const menuItems = [
    { label: 'Benefícios', href: '#benefits' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Sobre Nós', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" aria-label="Página Inicial">
            <img 
              src={logoImage} 
              alt="Logo Gustavo Duarte Odontologia e Estética" 
              // ALTERAÇÃO AQUI: Aumentamos a altura de h-16 para h-20
              className="h-20 w-auto transition-all duration-300"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-heading font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="gold" size="sm" className="ml-4 rounded-full">
              <a href="https://wa.me/5581997464264" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border animate-accordion-down">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-heading font-medium py-3 text-center rounded-md hover:bg-card"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild variant="gold" size="lg" className="mt-4 w-full rounded-full">
                <a href="https://wa.me/5581997464264" target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

