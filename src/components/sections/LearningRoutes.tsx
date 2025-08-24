import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Lightbulb, Users, Sparkles } from "lucide-react";

const LearningRoutes = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Rutas de Aprendizaje
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 px-4">
            Tu camino, paso a paso
          </p>
          <p className="text-base sm:text-lg max-w-3xl mx-auto px-4">
            Avanza desde lo básico hasta el nivel experto con itinerarios claros y motivadores. 
            Recorridos temáticos que combinan cursos, cápsulas y prácticas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="shadow-card hover:scale-105 transition-all duration-300 border-2 border-primary/20">
            <CardContent className="p-6">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Ruta de Descubrimiento</h3>
              <p className="text-muted-foreground text-sm">
                Para quienes dan sus primeros pasos en su transformación personal
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:scale-105 transition-all duration-300 border-2 border-secondary/20">
            <CardContent className="p-6">
              <Lightbulb className="h-12 w-12 text-secondary mb-4" />
              <h3 className="font-bold text-lg mb-2">Creatividad Aplicada</h3>
              <p className="text-muted-foreground text-sm">
                Transforma ideas en proyectos reales con impacto
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:scale-105 transition-all duration-300 border-2 border-accent/20">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Conexión y Liderazgo</h3>
              <p className="text-muted-foreground text-sm">
                Mejora tus habilidades sociales y de liderazgo humano
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:scale-105 transition-all duration-300 border-2 border-primary/20">
            <CardContent className="p-6">
              <Sparkles className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Bienestar Integral</h3>
              <p className="text-muted-foreground text-sm">
                Hábitos y herramientas para potenciar tu energía vital
              </p>
            </CardContent>
          </Card>
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
