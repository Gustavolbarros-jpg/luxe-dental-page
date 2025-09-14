const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 scroll-mt-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold font-heading mb-4 text-foreground">
            Nossos <span className="bg-gradient-gold bg-clip-text text-transparent">Benefícios</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            Descubra as vantagens exclusivas que oferecemos aos nossos pacientes
          </p>
        </div>

        {/* Cards de benefícios */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-2xl shadow-premium bg-card border border-border hover:shadow-lg transition">
            <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
              Atendimento Personalizado
            </h3>
            <p className="text-muted-foreground">
              Cada paciente recebe um plano de tratamento exclusivo de acordo com suas necessidades.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-premium bg-card border border-border hover:shadow-lg transition">
            <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
              Tecnologia de Ponta
            </h3>
            <p className="text-muted-foreground">
              Utilizamos os equipamentos mais modernos para garantir precisão e conforto.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-premium bg-card border border-border hover:shadow-lg transition">
            <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
              Resultados Naturais
            </h3>
            <p className="text-muted-foreground">
              Tratamentos estéticos que realçam a beleza do sorriso de forma harmoniosa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
