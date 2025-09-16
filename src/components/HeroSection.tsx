import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/drGustavo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[900px] overflow-hidden bg-gradient-dark">
      {/* Background Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[800px]">
          
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              O sorriso{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                perfeito
              </span>
              <br />
              Facetas de Resina{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Excelência
              </span>{" "}
              que Encanta
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed font-body">
              Descubra como alcançar um sorriso natural, harmônico e personalizado.  
              Trabalhamos com tecnologia digital de ponta e materiais premium para entregar excelência em cada detalhe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="gold" size="xl" className="group">
                <a 
                  href="https://wa.me/5581997464264"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2" />
                  Agendar Avaliação
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div>
                <p className="text-xl md:text-2xl font-bold text-primary font-heading">Arte & Precisão</p>
                <p className="text-sm text-muted-foreground">Técnica artesanal com planejamento digital.</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-primary font-heading">Sorrisos Únicos</p>
                <p className="text-sm text-muted-foreground">Cada sorriso é uma obra de arte exclusiva.</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-primary font-heading">Padrão Premium</p>
                <p className="text-sm text-muted-foreground">Materiais de alta performance e cuidado exclusivo.</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img 
                src={heroImage}
                alt="Dr. Gustavo Duarte, especialista em facetas de resina"
                // A borda foi removida
                className="w-full h-[600px] object-contain rounded-3xl" 
              />
              
              {/* Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/30 pointer-events-none rounded-3xl"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card backdrop-blur-md border border-primary/20 rounded-2xl p-6 shadow-gold animate-fade-in">
              <p className="text-primary font-heading font-semibold text-lg mb-1">
                Dr. Gustavo Duarte
              </p>
              <p className="text-sm text-muted-foreground">
                Especialista em Facetas em Resina
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;

