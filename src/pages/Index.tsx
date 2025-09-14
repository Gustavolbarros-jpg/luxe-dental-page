import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ExcellenceSection from "@/components/ExcellenceSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <Navbar /> {/* Navbar fixa no topo */}
      <HeroSection />
      <InfoSection />
      <BeforeAfterGallery /> {/* id="resultados" já existente */}
      <BenefitsSection />   {/* id="benefits" ajustado com scroll-mt */}
      <ExcellenceSection />
      <TestimonialsSection />
      <AboutSection />      {/* id="about" já existente */}
      <Footer />
    </main>
  );
};

export default Index;
