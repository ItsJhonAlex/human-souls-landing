import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Flame, Rocket, Palette, Globe } from "lucide-react";
import { StarParticles } from "@/components/ui/star-particles";

const Values = () => {
  const values = [
    {
      icon: Handshake,
      emoji: "🤝",
      title: "Conexión Humana",
      description: "Donde cada encuentro es auténtico y significativo."
    },
    {
      icon: Flame,
      emoji: "🔥",
      title: "Propósito Vivo",
      description: "Todo lo que hacemos nace de un 'para qué' más grande."
    },
    {
      icon: Rocket,
      emoji: "🚀",
      title: "Acción Real",
      description: "Convertimos la inspiración en proyectos con impacto concreto."
    },
    {
      icon: Palette,
      emoji: "🎨",
      title: "Creatividad Colaborativa",
      description: "El poder de imaginar y co-crear juntos."
    },
    {
      icon: Globe,
      emoji: "🌍",
      title: "Transformación Colectiva",
      description: "Porque crecer en comunidad multiplica los resultados."
    }
  ];

  return (
    <section id="values" className="py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden">
      {/* Sistema de Partículas de Estrellas */}
      <StarParticles density="light" color="cyan" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Nuestros Valores
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Human Souls se sostiene sobre pilares que inspiran y guían cada experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-0 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{value.emoji}</div>
                <value.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
