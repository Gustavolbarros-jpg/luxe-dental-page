import { Award, Heart, Sparkles, Clock, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
// Esta imagem será trocada por você depois
import professionalImage from "@/assets/drgustavo.jpeg"; 

// Nova lista de diferenciais
const features = [
  {
    icon: Sparkles,
    text: "Confecção 100% artesanal de facetas de resina, com naturalidade e estética personalizada."
  },
  {
    icon: ClipboardCheck,
    text: "Planejamento estético criterioso, sempre alinhado às expectativas e características únicas de cada paciente."
  },
  {
    icon: Clock,
    text: "Possibilidade de realizar facetas premium de resina em poucas horas, com excelência."
  },
  {
    icon: Award,
    text: "Experiência em odontologia estética inserida em uma clínica de padrão internacional em implantodontia."
  },
  {
    icon: Heart,
    text: "Atendimento humanizado, que une tecnologia de ponta com cuidado próximo e individualizado."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado da Imagem */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-premium bg-black">
              <img 
                src={professionalImage} 
                alt="Dr. Gustavo Duarte, especialista em odontologia estética"
                className="w-full h-[600px] object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
          </div>

          {/* Lado do Conteúdo com o novo texto */}
          <div className="animate-fade-in-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transformando Sorrisos,{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Realizando Sonhos
              </span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-body">
              “Sou o Dr. Gustavo Duarte, nascido em Recife e apaixonado pela odontologia estética. Ao longo da minha trajetória, percebi que muitas pessoas sonhavam com facetas dentárias, mas se frustravam com resultados artificiais e pouco naturais. Isso me motivou a me especializar em facetas de resina artesanais, desenvolvendo uma técnica que valoriza cada detalhe para entregar sorrisos autênticos, harmônicos e que refletem a essência de cada paciente.”
            </p>

            {/* Lista de Diferenciais */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="w-4 h-4 text-background" />
                  </div>
                  <span className="text-foreground font-body">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="gold" size="lg">
                 <a href="https://wa.me/5581997464264" target="_blank" rel="noopener noreferrer">
                    Agendar Sua Consulta
                 </a>
              </Button>
              <Button asChild variant="gold-outline" size="lg">
                <a href="https://share.google/g0yGagPrD6IX4uXkK" target="_blank" rel="noopener noreferrer">
                  Conhecer a Clínica
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

