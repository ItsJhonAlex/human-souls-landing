import Hero from "@/components/sections/Hero";
import LearningCapsules from "@/components/sections/LearningCapsules";
import LearningRoutes from "@/components/sections/LearningRoutes";
import Benefits from "@/components/sections/Benefits";
import CTA from "@/components/sections/CTA";
import Ecosystem from "@/components/sections/Ecosystem";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import SoulBuddy from "@/components/sections/SoulBuddy";
import Values from "@/components/sections/Values";
import Footer from "@/components/sections/Footer";
import FloatingNavbar from "@/components/ui/floating-navbar";

const Index = () => {
  const navSections = [
    { id: 'hero', label: 'Inicio' },
    { id: 'learning-capsules', label: 'Cápsulas' },
    { id: 'learning-routes', label: 'Rutas' },
    { id: 'benefits', label: 'Beneficios' },
    { id: 'ecosystem', label: 'Ecosistema' },
    { id: 'team', label: 'Equipo' },
    { id: 'testimonials', label: 'Testimonios' },
    { id: 'cta', label: 'Únete' },
    { id: 'soul-buddy', label: 'Soul Buddy' },
    { id: 'values', label: 'Valores' },
    { id: 'footer', label: 'Contacto' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Navigation */}
      <FloatingNavbar sections={navSections} />
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Cápsulas Human Souls */}
      <LearningCapsules />

      {/* 3. Rutas de Aprendizaje */}
      <LearningRoutes />

      {/* 4. Beneficios */}
      <Benefits />

      {/* 5. Ecosistema Human Souls */}
      <Ecosystem />

      {/* 6. Equipo de Trabajo */}
      <Team />

      {/* 7. Testimonios */}
      <Testimonials />

      {/* 8. CTA Principal */}
      <CTA />

      {/* 9. Postúlate como Soul Buddy */}
      <SoulBuddy />

      {/* 10. Valores y Principios */}
      <Values />

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};

export default Index;