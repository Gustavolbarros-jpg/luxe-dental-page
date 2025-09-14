import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // Plugin para autoplay
// CORREÇÃO: Alterado de .jpg para .jpeg para corresponder aos nomes dos arquivos
import antesdepois1 from '@/assets/antesdepois1.jpeg';
import antesdepois2 from '@/assets/antesdepois2.jpeg';
import antesdepois3 from '@/assets/antesdepois3.jpeg';
import antesdepois4 from '@/assets/antesdepois4.jpeg';
import antesdepois5 from '@/assets/antesdepois5.jpeg';
import antesdepois6 from '@/assets/antesdepois6.jpeg';
import antesdepois7 from '@/assets/antesdepois7.jpeg';


const BeforeAfterGallery = () => {
  // A lista de casos agora contém apenas as imagens e um alt text
  const cases = [
    { id: 1, image: antesdepois1, treatment: 'Facetas de Resina Premium' },
    { id: 2, image: antesdepois2, treatment: 'Harmonização do Sorriso' },
    { id: 3, image: antesdepois3, treatment: 'Rejuvenescimento Dental' },
    { id: 4, image: antesdepois4, treatment: 'Design de Sorriso' },
    { id: 5, image: antesdepois5, treatment: 'Facetas em 1 Sessão' },
    { id: 6, image: antesdepois6, treatment: 'Estética Dental Avançada' },
    { id: 7, image: antesdepois7, treatment: 'Lentes de Contato em Resina' }
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section
      id="resultados"
      className="relative py-24 bg-gradient-dark overflow-hidden scroll-mt-28"
    >
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-gradient-gold-radial opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold font-heading mb-4 text-foreground">
            <span>Transformações </span>
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Reais
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            Veja os resultados impressionantes dos nossos tratamentos
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Carousel 
            setApi={setApi} 
            opts={{ loop: true }} 
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false, // <-- AJUSTE AQUI
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {cases.map((caseItem) => (
                <CarouselItem key={caseItem.id}>
                  <div className="flex flex-col items-center">
                    {/* Container da imagem ajustado para imagens verticais */}
                    <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-premium w-full max-w-md mx-auto">
                      <img
                        src={caseItem.image}
                        alt={`Antes e depois do tratamento de ${caseItem.treatment}`}
                        className="w-full h-auto object-contain max-h-[70vh]"
                      />
                    </div>
                    {/* Textos descritivos removidos */}
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
           {/* Botão de CTA agora é um link funcional para o WhatsApp */}
          <Button asChild variant="gold" size="xl">
            <a href="https://wa.me/5581997464264" target="_blank" rel="noopener noreferrer">
              Agende sua Consulta
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;

