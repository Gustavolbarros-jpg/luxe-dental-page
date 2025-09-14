import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              Duarte Odonto
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body mb-6">
              Técnica artesanal que valoriza cada detalhe para entregar sorrisos autênticos e harmônicos.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a 
                href="https://web.facebook.com/profile.php?id=100071929212894" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary group transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-background" />
              </a>
              <a 
                href="https://www.instagram.com/gustavoduarteribeiro/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary group transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-background" />
              </a>
              <a 
                href="https://wa.me/5581997464264" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary group transition-all duration-300"
                aria-label="WhatsApp"
              >
                {/* WhatsApp SVG Icon */}
                <svg
                  className="w-5 h-5 text-primary group-hover:text-background"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.31 20.6C8.75 21.39 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.13C10.56 20.13 9.12 19.74 7.84 19L7.54 18.82L4.44 19.65L5.28 16.61L5.07 16.29C4.21 14.94 3.82 13.43 3.82 11.91C3.82 7.39 7.51 3.7 12.04 3.7C16.57 3.7 20.26 7.39 20.26 11.91C20.26 16.43 16.57 20.13 12.04 20.13ZM17.33 14.22C17.08 14.82 16.03 15.37 15.34 15.54C14.81 15.68 14.21 15.72 13.71 15.54C13.21 15.38 12.4 15.11 11.23 14.12C9.8 12.91 8.84 11.39 8.64 11.09C8.43 10.79 7.78 9.87 7.78 9.1C7.78 8.33 8.31 7.83 8.53 7.63C8.75 7.42 9.08 7.35 9.33 7.35C9.43 7.35 9.53 7.35 9.61 7.36C9.87 7.39 10.02 7.4 10.18 7.73C10.37 8.1 10.83 9.31 10.93 9.46C11.03 9.61 11.08 9.79 11 9.96C10.92 10.13 10.87 10.27 10.74 10.42C10.61 10.57 10.49 10.68 10.38 10.8C10.28 10.9 10.16 11.03 10.32 11.29C10.48 11.55 10.93 12.21 11.59 12.82C12.44 13.62 13.18 13.91 13.48 14.06C13.78 14.21 14.02 14.17 14.21 13.97C14.43 13.74 14.78 13.22 15.06 12.89C15.31 12.59 15.58 12.51 15.86 12.61C16.14 12.71 17.08 13.22 17.26 13.4C17.44 13.58 17.58 13.73 17.63 13.85C17.68 13.97 17.58 14.22 17.33 14.22Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-heading font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm font-body">
                  R. Guilherme Pinto, 146 - sala 11<br />
                  Graças, Recife - PE, 50050-290
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm font-body">
                  (81) 98222-3417
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm font-body">
                  contato@duarteodonto.com.br
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm font-body">
                  Seg-Sex: 08h–18h | Sáb: 08h–13h
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
            © 2024 Duarte Odonto Ltda. Todos os direitos reservados.
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

