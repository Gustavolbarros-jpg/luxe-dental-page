import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-smile.jpg";

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
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Sorria com{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Confiança
              </span>
              <br />
              Implantes Premium com Tecnologia de Ponta
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed font-body">
              Transforme seu sorriso com implantes dentários de última geração. 
              Nossa clínica oferece tratamento personalizado com os melhores 
              profissionais e tecnologia avançada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" className="group">
                <Calendar className="mr-2" />
                Agendar Avaliação
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="gold-outline" size="xl">
                <Phone className="mr-2" />
                Falar Conosco
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-primary font-heading">15+</p>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary font-heading">5000+</p>
                <p className="text-sm text-muted-foreground">Pacientes Satisfeitos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary font-heading">99%</p>
                <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img 
                src={heroImage}
                alt="Mulher sorrindo com confiança mostrando implantes dentários perfeitos"
                className="w-full h-[600px] object-cover"
              />
              {/* Gold Accent Border */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl pointer-events-none"></div>
              
              {/* Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/30 pointer-events-none"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card backdrop-blur-md border border-primary/20 rounded-2xl p-6 shadow-gold animate-fade-in">
              <p className="text-primary font-heading font-semibold text-lg mb-1">
                Tecnologia Suíça
              </p>
              <p className="text-sm text-muted-foreground">
                Equipamentos de última geração
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;