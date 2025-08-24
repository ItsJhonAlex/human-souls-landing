import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 gradient-primary">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Empieza tu viaje hoy
          </h2>
          <p className="text-xl text-white/90">
            No te quedes fuera de la primera red social de transformación humana. 
            Conecta, aprende y convierte tu propósito en acción junto a una comunidad global.
          </p>
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
            Únete ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-white/70 text-sm">
            Ya somos una comunidad global en crecimiento
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
