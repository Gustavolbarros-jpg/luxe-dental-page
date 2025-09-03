import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Maria Helena Silva",
    role: "Empresária",
    image: testimonial1,
    rating: 5,
    text: "Depois de anos escondendo meu sorriso, finalmente tenho a confiança que sempre quis. O atendimento foi excepcional e o resultado superou todas as minhas expectativas."
  },
  {
    name: "Roberto Mendes",
    role: "Advogado",
    image: testimonial2,
    rating: 5,
    text: "A tecnologia utilizada na clínica é impressionante. O procedimento foi rápido, indolor e o resultado ficou extremamente natural. Recomendo sem hesitar."
  },
  {
    name: "Ana Carolina Dias",
    role: "Arquiteta",
    image: testimonial3,
    rating: 5,
    text: "Profissionalismo e cuidado em cada detalhe. A equipe me deixou muito segura durante todo o processo. Meu sorriso nunca esteve tão bonito!"
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
            Conheça a experiência de quem já transformou sua vida com nossos implantes premium
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-premium transition-all duration-500 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon Background */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary animate-glow"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-8 leading-relaxed font-body italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Gold Line Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-8 py-4">
            <div className="flex -space-x-2">
              {[testimonial1, testimonial2, testimonial3].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-background"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="font-heading font-semibold text-primary">+5000 Pacientes</p>
              <p className="text-xs text-muted-foreground">Avaliação 4.9/5.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;