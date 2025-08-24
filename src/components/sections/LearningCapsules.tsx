import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Zap, Globe, Target, Palette, Heart } from "lucide-react";
import capsulesImage from "@/assets/learning-capsules.jpg";

const LearningCapsules = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Cápsulas de Aprendizaje
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 px-4">
            Crece, conéctate e inspira
          </p>
          <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            Pequeños espacios de formación y conexión que transforman tu forma de aprender, compartir y vivir. 
            Experiencias breves, creativas y dinámicas que puedes disfrutar estés donde estés.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div>
            <img 
              src={capsulesImage} 
              alt="Cápsulas de Aprendizaje" 
              className="w-full rounded-3xl shadow-card"
            />
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                30-45 minutos • 100% online y en vivo
              </Badge>
              
              <p className="text-lg leading-relaxed">
                Las Cápsulas de Aprendizaje son encuentros interactivos, diseñados para que adquieras nuevas herramientas 
                y amplíes tu visión en pocos minutos, con un enfoque integral que une lo profesional, lo creativo y lo humano.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Aprende en poco tiempo, sin saturarte</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Conéctate con personas que comparten tus intereses</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Accede a perspectivas globales</span>
                </li>
                <li className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Aplica lo aprendido de forma inmediata</span>
                </li>
              </ul>
            </div>
            
            <Button variant="cta" size="lg">
              Descubre las próximas cápsulas
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
            <CardContent className="p-6 text-center">
              <Palette className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cápsulas Creativas</h3>
              <p className="text-sm text-muted-foreground">
                Despierta tu imaginación y potencia tu capacidad de innovar
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cápsulas de Impacto</h3>
              <p className="text-sm text-muted-foreground">
                Proyectos colaborativos para generar cambios reales
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cápsulas Vitales</h3>
              <p className="text-sm text-muted-foreground">
                Fortalece tu bienestar físico, mental y emocional
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cápsulas de Conexión</h3>
              <p className="text-sm text-muted-foreground">
                Construye vínculos auténticos que trasciendan fronteras
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LearningCapsules;
