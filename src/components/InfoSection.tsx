// src/components/InfoSection.tsx

// Ajustei os ícones importados conforme o novo conteúdo
import { Smile, Heart, Shield, Lightbulb } from 'lucide-react';

const benefits = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: 'Sorriso Natural e Preciso',
      description: 'Facetas e implantes projetados para harmonizar estética e funcionalidade.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Planejamento Personalizado',
      description: 'Cada tratamento é cuidadosamente planejado para atender às suas necessidades individuais.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Saúde Bucal Avançada',
      description: 'Procedimentos que preservam a integridade e a saúde do seu sorriso.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Autoestima Renovada',
      description: 'Sinta a confiança de um sorriso que reflete sua melhor versão.'
    }
  ];

const InfoSection = () => {
  return (
    // Usando o gradiente definido no seu index.css
    <section className="relative py-12 bg-gradient-gold">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mb-3 group-hover:bg-background/80 transition-colors">
                {/* O ícone já usará a cor correta do gradiente do pai */}
                <div className="text-primary-light">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-background font-bold font-heading text-lg mb-1">
                {benefit.title}
              </h3>
              <p className="text-background/80 text-sm font-body">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;