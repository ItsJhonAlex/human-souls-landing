import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-character.png";
import bgImage from "@/assets/hero-image.png";
import cristalImage from "@/assets/cristal.png";
import { StarParticles } from "@/components/ui/star-particles";
import { motion } from "motion/react"

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center px-4 overflow-hidden" style={{
      background: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #1F42C4 0%, #0da5ff 25%, #8D56FF 50%, #40DBB7 80%)',
        opacity: 0.85
         }}>
      </div>
      
      <div className="absolute inset-0 opacity-20"></div>
      
      {/* Sistema de Partículas de Estrellas */}
      <StarParticles density="light" color="white" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
         <div className="text-center lg:text-left space-y-8 lg:space-y-10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-relaxed tracking-wide">
              <span className="block mb-2 lg:mb-4 tracking-wider">Human Souls</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed tracking-wide mb-6">
              <span className="block mb-2 lg:mb-4 tracking-wider">Únete a la primera 
                <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent tracking-wide"> red social </span>
              </span>
              
              <span className="block mt-2 lg:mt-4 tracking-wider">de transformación humana</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed px-4 lg:px-0">
              Descubre cómo, al crecer y aprender en comunidad, creamos un mundo de infinitas posibilidades. 
              Lo digital y lo humano se fusionan para que descubras tus talentos y te conviertas en un agente de cambio real.
            </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              className="group relative w-full sm:w-[289px] max-w-[320px] h-[54px] bg-[#02D6D9] hover:bg-[#02D6D9]/90 transition-all duration-300 shadow-[0px_2px_5px_rgba(0,0,0,0.15)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.25)] rounded-[20px] overflow-hidden mx-auto sm:mx-0"
              style={{
                '--fondo-boton-principal': '#02D6D9'
              } as React.CSSProperties}
            >
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="flex items-center gap-2">
                  <span className="text-white text-lg sm:text-xl font-bold font-nohemi leading-none">
                    Empieza tu viaje
                  </span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          
          
          <p className="text-white/70 text-sm">
            ✨ Ya somos una comunidad global en crecimiento
          </p>

            <motion.img
              src={cristalImage}
              initial={{
                scale: 0,
                opacity: 0,
                rotate: -180,
              }}
              animate={{
                scale: [0, 1.3, 0.9, 1.08, 1],
                opacity: [0, 1, 1, 1, 1],
                rotate: [-180, 0, 5, -2, 0],
              }}
              transition={{
                duration: 0.8,
                ease: [0.68, -0.55, 0.265, 1.55],
                times: [0, 0.2, 0.5, 0.8, 1],
                delay: 1.2 
              }}
              className="hidden lg:block w-20 drop-shadow-2xl filter brightness-105 contrast-105 rotate-[15deg]" 
            />
        </div>
        
        <div className="relative">
          {/* Decorative background elements for SVG */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl scale-150"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 to-primary/5 rounded-full blur-2xl scale-125 animate-pulse"></div>
          
          <div className="relative animate-float">

          <motion.img
            src={heroImage}
            initial={{
              scale: 0,
              opacity: 0,
              y: 20,
            }}
            animate={{
              scale: [0, 1.3, 0.9, 1.08, 1],
              opacity: [0, 1, 1, 1, 1],
              y: [20, -5, 2, -1, 0],
            }}
            transition={{
              duration: 0.7,
              ease: [0.68, -0.55, 0.265, 1.55], 
              times: [0, 0.2, 0.5, 0.8, 1]
            }}
            className="w-full max-w-md mx-auto drop-shadow-2xl filter brightness-105 contrast-105"
          />

            {/* Cristal 1 */}
            <div className="absolute top-[10%] left-[20%] animate-float ">
              
            <motion.img
              src={cristalImage}
              initial={{
                scale: 0,
                opacity: 0,
                rotate: -180,
              }}
              animate={{
                scale: [0, 1.3, 0.9, 1.08, 1],
                opacity: [0, 1, 1, 1, 1],
                rotate: [-180, 0, 5, -2, 0],
              }}
              transition={{
                duration: 0.8,
                ease: [0.68, -0.55, 0.265, 1.55],
                times: [0, 0.2, 0.5, 0.8, 1],
                delay: 0.8 
              }}
              className="w-20 drop-shadow-2xl filter brightness-105 contrast-105 rotate-[15deg]" 
            />

            </div>
            
            {/* Cristal 2 */}
            <div className="absolute top-[80%] left-[65%] animate-float">
              <motion.img
                src={cristalImage}
                initial={{
                  scale: 0,
                  opacity: 0,
                  rotate: -180,
                }}
                animate={{
                  scale: [0, 1.3, 0.9, 1.08, 1],
                  opacity: [0, 1, 1, 1, 1],
                  rotate: [-180, 0, 5, -2, 0],
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.68, -0.55, 0.265, 1.55],
                  times: [0, 0.2, 0.5, 0.8, 1],
                  delay: 1.6
                }}
                className="w-20 drop-shadow-2xl filter brightness-105 contrast-105 rotate-[15deg]" 
              />
            </div>
          </div>


          
          {/* Additional floating elements */}
          <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-1/3 -right-6 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
