import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 gradient-primary">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white px-4">
            Empieza tu viaje hoy
          </h2>
          <p className="text-lg sm:text-xl text-white/90 px-4">
            No te quedes fuera de la primera red social de transformación humana. 
            Conecta, aprende y convierte tu propósito en acción junto a una comunidad global.
          </p>
          <div className="px-4">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Únete ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-white/70 text-sm px-4">
            Ya somos una comunidad global en crecimiento
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
