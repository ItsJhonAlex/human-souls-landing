import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-character.svg";

const Hero = () => {
  return (
    <section className="relative gradient-hero min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Únete a la primera
            <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent"> red social </span>
            de transformación humana
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Descubre cómo, al crecer y aprender en comunidad, creamos un mundo de infinitas posibilidades. 
            Lo digital y lo humano se fusionan para que descubras tus talentos y te conviertas en un agente de cambio real.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              className="group relative w-[289px] h-[54px] bg-[#02D6D9] hover:bg-[#02D6D9]/90 transition-all duration-300 shadow-[0px_2px_5px_rgba(0,0,0,0.15)] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.25)] rounded-[20px] overflow-hidden"
              style={{
                '--fondo-boton-principal': '#02D6D9'
              } as React.CSSProperties}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <span className="text-white text-xl font-bold font-nohemi leading-none">
                    Empieza tu viaje
                  </span>
                  <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
          
          <p className="text-white/70 text-sm">
            ✨ Ya somos una comunidad global en crecimiento
          </p>
        </div>
        
        <div className="relative">
          {/* Decorative background elements for SVG */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl scale-150"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 to-primary/5 rounded-full blur-2xl scale-125 animate-pulse"></div>
          
          <div className="relative animate-float">
            <img 
              src={heroImage} 
              alt="Human Souls Character" 
              className="w-full max-w-md mx-auto drop-shadow-2xl filter brightness-105 contrast-105"
            />
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
