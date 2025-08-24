import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Target, Globe, Sparkles, Heart } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Conexiones Reales y Significativas",
      description: "Únete a personas auténticas que comparten tus valores y objetivos"
    },
    {
      icon: BookOpen,
      title: "Aprendizaje Continuo",
      description: "Accede a cápsulas creativas, rutas de aprendizaje y experiencias que potencian tus talentos"
    },
    {
      icon: Target,
      title: "Acción con Propósito",
      description: "Convierte tus ideas en proyectos reales con impacto positivo"
    },
    {
      icon: Globe,
      title: "Oportunidades Globales",
      description: "Colabora con miembros y mentores de diferentes países"
    },
    {
      icon: Sparkles,
      title: "Inspiración Constante",
      description: "Participa en actividades que nutren tu creatividad y motivación"
    },
    {
      icon: Heart,
      title: "Comunidad Viva y Apoyo Mutuo",
      description: "Crece acompañado de personas que te impulsan a dar tu mejor versión"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Beneficios de Unirte a Human Souls
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Conecta, crece y transforma tu mundo junto a personas que comparten tu visión
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
              <CardContent className="p-6">
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center px-4">
          <Button variant="hero" size="lg" className="w-full sm:w-auto max-w-md mx-auto">
            <span className="text-center">Forma parte del movimiento que transforma vidas</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
