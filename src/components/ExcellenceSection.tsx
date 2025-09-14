import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Importando todas as imagens da série "excelencia"
import excelencia1_0 from '@/assets/excelencia1.0.jpeg';
import excelencia2_0 from '@/assets/excelencia2.0.jpeg';
import excelencia2_1 from '@/assets/excelencia2.1.jpeg';
import excelencia2_2 from '@/assets/excelencia2.2.jpeg';
import excelencia2_3 from '@/assets/excelencia2.3.jpeg';
import excelencia3_0 from '@/assets/excelencia3.0.jpeg';
import excelencia3_1 from '@/assets/excelencia3.1.jpeg';
import excelencia3_2 from '@/assets/excelencia3.2.jpeg';
import excelencia3_3 from '@/assets/excelencia3.3.jpeg';
import excelencia4_0 from '@/assets/excelencia4.0.jpeg';
import excelencia4_1 from '@/assets/excelencia4.1.jpeg';

const ExcellenceSection = () => {
  const cases = [
    { id: 1, image: excelencia1_0, treatment: 'Planejamento Digital' },
    { id: 2, image: excelencia2_0, treatment: 'Prova do Sorriso' },
    { id: 3, image: excelencia2_1, treatment: 'Prova do Sorriso' },
    { id: 4, image: excelencia2_2, treatment: 'Prova do Sorriso' },
    { id: 5, image: excelencia2_3, treatment: 'Prova do Sorriso' },
    { id: 6, image: excelencia3_0, treatment: 'Seleção de Cor e Forma' },
    { id: 7, image: excelencia3_1, treatment: 'Seleção de Cor e Forma' },
    { id: 8, image: excelencia3_2, treatment: 'Seleção de Cor e Forma' },
    { id: 9, image: excelencia3_3, treatment: 'Seleção de Cor e Forma' },
    { id: 10, image: excelencia4_0, treatment: 'Acabamento e Polimento' },
    { id: 11, image: excelencia4_1, treatment: 'Acabamento e Polimento' }
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Configuração do autoplay (1500ms + não parar ao interagir)
  const plugin = useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api || cases.length === 0) return;

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    // fallback para garantir loop infinito mesmo se autoplay travar
    api.on("select", () => {
      if (api.selectedScrollSnap() === cases.length - 1) {
        setTimeout(() => api.scrollTo(0), 1500);
      }
    });

    return () => {
      api.off("select", onSelect);
    };
  }, [api, cases.length]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section id="excelencia" className="relative py-24 bg-background overflow-hidden scroll-mt-28">
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-gradient-gold-radial opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold font-heading mb-4 text-foreground">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Excelência
            </span>
            <span> em Todos os Detalhes</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            Cada caso é estudado e planejado com a máxima precisão para um resultado único.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel 
            setApi={setApi} 
            opts={{ loop: true }} // loop ativado
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {cases.map((caseItem) => (
                <CarouselItem key={caseItem.id}>
                  <div className="flex flex-col items-center">
                    <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-premium w-full max-w-md mx-auto">
                      <img
                        src={caseItem.image}
                        alt={`Detalhes do tratamento de ${caseItem.treatment}`}
                        className="w-full h-auto object-contain max-h-[70vh]"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-3 mt-8">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Ver caso ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? 'w-10 bg-primary' : 'bg-primary/30 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button asChild variant="gold" size="xl">
            <a href="https://wa.me/5581997464264" target="_blank" rel="noopener noreferrer">
              Agendar Consulta de Avaliação
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
