import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      emoji: "👩‍💼",
      name: "Daiana Ramírez",
      role: "CEO & Fundadora",
      description: "Visión estratégica, diseño de la experiencia, alianzas y dirección creativa."
    },
    {
      emoji: "👨‍💼",
      name: "Leonardo",
      role: "Socio Primario y Experiencia de Usuario",
      description: "Diseña dinámicas de interacción y asegura que la comunidad se sienta viva."
    },
    {
      emoji: "👨‍💻",
      name: "Orlando",
      role: "Desarrollo de la App",
      description: "Responsable de la arquitectura técnica y funcionamiento de la plataforma."
    },
    {
      emoji: "👨‍💻",
      name: "Jonatan",
      role: "Arquitectura de Landing",
      description: "Arquitectura de la landing page y funcionalidad."
    },
    {
      emoji: "🎨",
      name: "Juan",
      role: "Identidad Visual",
      description: "Diseño gráfico e identidad visual que transmiten el alma de la comunidad."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            El equipo detrás de Human Souls
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6 px-4">
            Una visión compartida que une talento, propósito y acción.
          </p>
          <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            Somos un equipo multidisciplinario apasionado por transformar la manera en que las personas aprenden, 
            se conectan y generan impacto. Cada uno aporta su esencia y experiencia para hacer de Human Souls 
            una comunidad viva y global.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{member.emoji}</div>
                <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
