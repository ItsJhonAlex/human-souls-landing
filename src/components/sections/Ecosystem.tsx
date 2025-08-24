import { Card, CardContent } from "@/components/ui/card";
import { User, UserCheck, Play, BookOpen, Gamepad2, Users, Calendar, Target } from "lucide-react";

const Ecosystem = () => {
  const ecosystemElements = [
    {
      icon: User,
      title: "Perfiles Vivos",
      description: "Cada persona cuenta con un perfil dinámico, un muro personal y acceso a su propia isla de energía."
    },
    {
      icon: UserCheck,
      title: "Soul Buddies (Mentores)",
      description: "Guías y facilitadores que acompañan con cursos, sesiones y proyectos de impacto."
    },
    {
      icon: Play,
      title: "Cápsulas de Aprendizaje",
      description: "Micro-experiencias prácticas y creativas para aprender, reflexionar y crecer en comunidad."
    },
    {
      icon: BookOpen,
      title: "Rutas de Transformación",
      description: "Itinerarios de aprendizaje diseñados para profundizar en áreas clave de la vida y el propósito."
    },
    {
      icon: Gamepad2,
      title: "Gamificación con Propósito",
      description: "Misiones, insignias y logros que hacen del crecimiento una experiencia divertida y motivadora."
    },
    {
      icon: Users,
      title: "Proyectos Colaborativos",
      description: "Espacios donde las ideas se convierten en acciones concretas que transforman realidades."
    },
    {
      icon: Calendar,
      title: "Agenda Sesiones",
      description: "Disponibilidad de mentores, sesiones en vivo y actividades comunitarias para mantenerte en movimiento."
    },
    {
      icon: Target,
      title: "Agenda Viva 2030",
      description: "Nuestra hoja de ruta hacia un mundo más consciente, creativo y colaborativo."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Nuestro Ecosistema Vivo
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6 px-4">
            Un espacio donde lo digital y lo humano se encuentran para crear impacto real.
          </p>
          <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            El ecosistema de Human Souls integra personas, herramientas y experiencias en un mismo lugar. 
            Es un entorno diseñado para que cada miembro pueda <strong>descubrirse, aprender, conectar y transformar</strong>. 
            Aquí todo está interconectado: perfiles, cápsulas de aprendizaje, rutas, comunidad y proyectos con impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ecosystemElements.map((element, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-0 group">
              <CardContent className="p-6 text-center">
                <element.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-lg mb-3">{element.title}</h3>
                <p className="text-muted-foreground text-sm">{element.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
