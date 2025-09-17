import { Star, Quote, Instagram } from "lucide-react"; // Adicionado ícone do Instagram
import { Button } from "@/components/ui/button"; // Importado o componente Button

// DEPOIMENTOS ATUALIZADOS - Sem nomes ou imagens
const testimonials = [
  {
    rating: 5,
    text: "Ficou muito top, não é porque é meu mas ficou show. Arrocha fio, diferença absurda, mudou demais kkkkkkkkkk."
  },
  {
    rating: 5,
    text: "Meu velho, sei que ainda não terminamos, mas tô começando a entender agora o quão bom ficou kkk. Na hora você fica se acostumando ainda, mas parabéns e muito obrigado pelo trabalho. Ficou show demais!!"
  },
  {
    rating: 5,
    text: "Oi Dr, bom dia. Quero lhe agradecer pelo excelente trabalho, mudou meu sorriso e minha autoestima. Estou muito satisfeita com o resultado e impressionada com sua atenção aos detalhes e profissionalismo."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-overlay opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Histórias de{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Transformação
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Conheça a experiência de quem já transformou o sorriso conosco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-premium transition-all duration-500 animate-fade-in-up relative overflow-hidden flex flex-col justify-between"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div>
                <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary animate-glow"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed font-body italic">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* NOVO BOTÃO PARA O INSTAGRAM */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6 font-body">
            Veja mais sobre meu trabalho e depoimentos reais no Instagram.
          </p>
          <Button asChild variant="gold-outline" size="lg">
            <a href="https://www.instagram.com/gustavoduarteribeiro/" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2" />
              Siga no Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

