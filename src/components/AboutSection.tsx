import { Check, Award, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicImage from "@/assets/clinic-interior.jpg";

const features = [
  "Certificação Internacional ISO 9001",
  "Equipamentos Importados da Suíça",
  "Protocolo de Segurança Rigoroso",
  "Acompanhamento Pós-Operatório Vitalício"
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img 
                src={clinicImage}
                alt="Interior moderno da clínica com equipamentos de última geração"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-card/90 backdrop-blur-md border border-primary/20 rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground font-heading">15+</p>
                      <p className="text-xs text-muted-foreground">Anos de Excelência</p>
                    </div>
                    <div>
                      <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground font-heading">8</p>
                      <p className="text-xs text-muted-foreground">Certificações Internacionais</p>
                    </div>
                    <div>
                      <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground font-heading">25+</p>
                      <p className="text-xs text-muted-foreground">Especialistas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Excelência em{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Implantes Dentários
              </span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-body">
              Nossa clínica é referência internacional em implantodontia, combinando 
              tecnologia de ponta com uma equipe altamente especializada. Cada 
              procedimento é planejado digitalmente para garantir precisão milimétrica 
              e resultados excepcionais.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed font-body">
              Utilizamos apenas materiais premium importados e seguimos os mais 
              rigorosos protocolos internacionais de segurança e qualidade. Nosso 
              compromisso é proporcionar uma experiência única, desde a primeira 
              consulta até o acompanhamento pós-tratamento.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-background" />
                  </div>
                  <span className="text-foreground font-body">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg">
                Conhecer a Clínica
              </Button>
              <Button variant="gold-outline" size="lg">
                Ver Credenciais
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="mt-10 p-4 bg-card border border-primary/20 rounded-xl inline-block">
              <p className="text-xs text-muted-foreground mb-1">Reconhecimento Internacional</p>
              <p className="font-heading font-semibold text-primary">
                Top 10 Clínicas de Implantes - América Latina 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;