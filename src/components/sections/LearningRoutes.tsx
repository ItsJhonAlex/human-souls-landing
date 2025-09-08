import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { StarParticles } from "@/components/ui/star-particles";
import characterLr from "@/assets/character_lr.png";

const LearningRoutes = () => {
  return (
    <section id="learning-routes" className="py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden">
      {/* Sistema de Partículas de Estrellas */}
      <StarParticles density="light" color="cyan" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Rutas de Aprendizaje
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 px-4">
            Tu camino, paso a paso
          </p>
        </div>

        {/* Contenedor principal con imagen centrada y elementos textuales */}
        <div className="relative flex justify-center items-center mb-8 sm:mb-12 min-h-[400px] sm:min-h-[500px]">
          {/* Imagen central */}
          <div className="relative z-10">
            <img
              src={characterLr}
              alt="Character Learning Routes"
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain"
            />
          </div>
          
          {/* Elementos textuales posicionados alrededor de la imagen */}
          {/* Descubrimiento - Superior izquierda */}
          <div className="absolute top-8 left-4 sm:left-8 lg:left-16">
            <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-full font-semibold text-sm sm:text-base shadow-lg">
              Descubrimiento
            </div>
          </div>
          
          {/* Creatividad Aplicada - Superior derecha */}
          <div className="absolute top-8 right-4 sm:right-8 lg:right-16">
            <div className="bg-gradient-to-r from-pink-500 to-purple-400 text-white px-4 py-2 rounded-full font-semibold text-sm sm:text-base shadow-lg">
              Creatividad Aplicada
            </div>
          </div>
          
          {/* Bienestar Integral - Izquierda centro */}
          <div className="absolute left-4 sm:left-8 lg:left-16 top-1/2 transform -translate-y-1/2">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-2 rounded-full font-semibold text-sm sm:text-base shadow-lg">
              Bienestar Integral
            </div>
          </div>
          
          {/* Conexión - Derecha centro */}
          <div className="absolute right-4 sm:right-8 lg:right-16 top-1/2 transform -translate-y-1/2">
            <div className="bg-gradient-to-r from-green-500 to-emerald-400 text-white px-4 py-2 rounded-full font-semibold text-sm sm:text-base shadow-lg">
              Conexión
            </div>
          </div>
          
          {/* Liderazgo - Inferior centro */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-400 text-white px-4 py-2 rounded-full font-semibold text-sm sm:text-base shadow-lg">
              Liderazgo
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="gradient" size="lg">
            Explorar todas las rutas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearningRoutes;
