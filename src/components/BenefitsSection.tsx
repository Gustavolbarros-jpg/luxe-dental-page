import { Shield, Clock, Award, Heart, Users, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Garantia Vitalícia",
    description: "Todos os nossos implantes possuem garantia vitalícia para sua total tranquilidade e segurança."
  },
  {
    icon: Clock,
    title: "Resultados Rápidos",
    description: "Procedimentos ágeis com tecnologia avançada que reduzem o tempo de recuperação significativamente."
  },
  {
    icon: Award,
    title: "Profissionais Premiados",
    description: "Equipe com certificações internacionais e reconhecimento em implantodontia avançada."
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cuidado personalizado do início ao fim, garantindo conforto em todas as etapas do tratamento."
  },
  {
    icon: Users,
    title: "Mais de 5000 Sorrisos",
    description: "Milhares de pacientes satisfeitos com resultados que superam expectativas."
  },
  {
    icon: Sparkles,
    title: "Tecnologia de Ponta",
    description: "Equipamentos de última geração importados para precisão e conforto máximo."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher Nossa{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Clínica Premium
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Combinamos expertise, tecnologia e cuidado personalizado para 
            oferecer a melhor experiência em implantes dentários
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-gold transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gold Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-background" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body">
                {benefit.description}
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6 font-body">
            Pronto para transformar seu sorriso?
          </p>
          <button className="font-heading uppercase tracking-wider text-primary hover:text-primary-light transition-colors duration-300 text-sm font-semibold flex items-center gap-2 mx-auto group">
            Conhecer Todos os Benefícios
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;