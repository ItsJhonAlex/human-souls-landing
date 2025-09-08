import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-character.png";
import heroBg from "@/assets/hero_bg.png";
import heroCharacter from "@/assets/hero_character.png";
import { StarParticles } from "@/components/ui/star-particles";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-8" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
      
      <div className="container mx-auto relative z-10 max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full py-8">
          {/* Contenido de texto - Izquierda */}
          <div className="text-left space-y-6 flex flex-col justify-center h-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Human Souls
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
              Únete a la primera red social de transformación humana
            </h2>
            
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-lg">
              Descubre cómo, al crecer y aprender en comunidad, creamos un mundo de infinitas posibilidades. 
              Lo digital y lo humano se fusionan para que descubras tus talentos y te conviertas en un agente de cambio real.
            </p>
            
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Empieza tu viaje
            </button>
            
            <p className="text-white/70 text-sm">
              ✨ Ya somos una comunidad global en crecimiento
            </p>
          </div>
          
          {/* Imagen del personaje - Derecha */}
          <div className="flex justify-center lg:justify-end items-center h-full">
            <img 
              src={heroCharacter} 
              alt="Human Souls Character" 
              className="w-full max-w-[225px] sm:max-w-[300px] lg:max-w-[384px] xl:max-w-[432px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
