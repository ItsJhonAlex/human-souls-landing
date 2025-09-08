import { Card, CardContent } from "@/components/ui/card";
import { StarParticles } from "@/components/ui/star-particles";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      placeholder: "Foto del miembro 1"
    },
    {
      id: 2,
      placeholder: "Foto del miembro 2"
    },
    {
      id: 3,
      placeholder: "Foto del miembro 3"
    },
    {
      id: 4,
      placeholder: "Foto del miembro 4"
    }
  ];

  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Sistema de Partículas de Estrellas */}
      <StarParticles density="light" color="cyan" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            El equipo detrás de Human Souls
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6 px-4">
            Una visión compartida que une talento, propósito y acción.
          </p>
          <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            El ecosistema de Human Souls integra personas, herramientas y experiencias en un mismo lugar. 
            Es un entorno diseñado para que cada miembro pueda descubrirse, aprender, conectar y 
            transformar. Aquí todo está interconectado: perfiles, cápsulas de aprendizaje, rutas, 
            comunidad y proyectos con impacto.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 w-32 h-48 sm:w-40 sm:h-60 bg-black"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm text-center px-2">
                  {member.placeholder}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
