import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              DentalPremium
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body mb-6">
              Transformando sorrisos com excelência e tecnologia de ponta desde 2009.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-card border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary group transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-background" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary group transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-background" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary group transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-background" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-heading font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Home", "Sobre Nós", "Tratamentos", "Tecnologia", "Depoimentos", "Blog"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="font-heading font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Implantes Unitários",
                "Protocolo All-on-4",
                "Enxerto Ósseo",
                "Sedação Consciente",
                "Planejamento Digital",
                "Próteses Premium"
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-body"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-heading font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm font-body">
                  Av. Paulista, 1234 - 10º andar<br />
                  São Paulo - SP, 01310-100
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm font-body">
                  (11) 9 8765-4321
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm font-body">
                  contato@dentalpremium.com.br
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm font-body">
                  Seg-Sex: 8h-18h | Sáb: 8h-13h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-gold opacity-20 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-body text-center md:text-left">
            © 2024 DentalPremium. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-body">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-body">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;