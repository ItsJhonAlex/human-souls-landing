import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Zap, Globe, Target, Palette, Heart } from "lucide-react";
import { StarParticles } from "@/components/ui/star-particles";
import { motion } from "motion/react";
import { useScrollContext } from "@/contexts/ScrollContext";

import icon1 from "@/assets/icons/1.png";
import icon2 from "@/assets/icons/2.png";
import icon3 from "@/assets/icons/3.png";
import icon4 from "@/assets/icons/4.png";
import icon5 from "@/assets/icons/5.png";
import icon6 from "@/assets/icons/6.png";
import icon7 from "@/assets/icons/7.png";
import icon8 from "@/assets/icons/8.png";
import icon9 from "@/assets/icons/9.png";
import icon10 from "@/assets/icons/10.png";
import icon11 from "@/assets/icons/11.png";

const Icons = {
  1: icon1,
  2: icon2,
  3: icon3,
  4: icon4,
  5: icon5,
  6: icon6,
  7: icon7,
  8: icon8,
  9: icon9,
  10: icon10,
  11: icon11,
};

const LearningCapsules = () => {
  const { smoothCapsulesY } = useScrollContext();
  
  return (
    <motion.section 
      id="learning-capsules" 
      className="py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden bg-white z-10"
      style={{ y: smoothCapsulesY }}
    >
      {/* Sistema de Partículas de Estrellas */}
      <StarParticles density="light" color="cyan" />
      
      <div className="container mx-auto relative z-10 mt-10">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          {/* Portal principal con imágenes superpuestas */}
          <div className="relative">
              <motion.img
                animate={{
                  x: [5, Math.random() * 2, 5],
                  y: [5, Math.random() * 2, 5],
                }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              src={Icons[11]} 
              alt="Cápsulas de Aprendizaje" 
              className="w-full rounded-3xl"
            />
            
            <div className="absolute inset-0 flex items-center justify-center w-[120%] h-[120%] ml-[-8%] mt-[-5%]">

              <div className="mr-[-40%] md:mr-[-20%] lg:mr-[-40%]">
                <motion.img
                  animate={{
                    x: [12, Math.random() * 3, 12],
                    y: [12, Math.random() * 3, 12],
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  src={Icons[8]} 
                  alt="Cápsulas de Aprendizaje" 
                  className="w-[75%] h-auto animate-float duration-300 hover:scale-105"
                />
              </div>
              

              <div className="flex flex-col items-center">
                {/* Icons[8] - Esquina inferior izquierda */}
                <motion.img
                  animate={{
                    x: [12, Math.random() * 3, 12],
                    y: [12, Math.random() * 3, 12],
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  src={Icons[9]} 
                  alt="Cápsulas de Aprendizaje" 
                  className="w-[75%] h-auto animate-float duration-300 hover:scale-105"
                />
                
                {/* Icons[10] - Esquina inferior derecha */}
                <motion.img
                  animate={{
                    x: [10, Math.random() * 2, 10],
                    y: [30, Math.random() * 2, 30],
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  src={Icons[10]} 
                  alt="Cápsulas de Aprendizaje" 
                  className="w-[70%] h-auto animate-float duration-300 hover:scale-105"
                />
              </div>

            {(() => {
              
              const posiciones = [
                { top: 75, left: 40 },
                { top: 55, left: 70 },
                { top: 22, left: 18 },
                { top: 20, left: 35 },
                { top: 55, left: 15 },
                { top: 5, left: 65 },
                { top: 85, left: 75 },
              ];

              // Generar un array de índices de iconos posibles (por ejemplo, del 1 al 7)
              const iconosDisponibles = Array.from({ length: 7 }, (_, i) => i + 1);

              // Mezclar los iconos para que sean random en cada render
              const iconosRandom = iconosDisponibles
                .map((icono) => ({ icono, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ icono }) => icono);

              return posiciones.map((pos, idx) => {
                // Si el icono es el 7, lo hacemos más grande
                const esIconoSiete = iconosRandom[idx] === 7;
                return (
                  <motion.img
                  animate={{
                    x: [12, Math.random() * 3, 12],
                    y: [12, Math.random() * 3, 12],
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}

                    key={idx}
                    src={Icons[iconosRandom[idx]]}
                    alt={`Decorativo ${idx + 1}`}
                    className={`${esIconoSiete ? "w-[20%] h-[20%]" : "w-[10%] h-[10%]"} opacity-90 hover:opacity-100 hover:scale-125 cursor-pointer absolute`}
                    style={{
                      top: `${pos.top}%`,
                      left: `${pos.left}%`,
                    }}
                  />
                );
              });
            })()}
            </div>
          </div>
          
          <div className="space-y-6 mt-36">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-52">
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
    </motion.section>
  );
};

export default LearningCapsules;
