import React, { createContext, useContext, ReactNode } from 'react';
import { useScroll, useTransform, useSpring } from 'motion/react';

interface ScrollContextType {
  capsulesY: ReturnType<typeof useTransform>;
  smoothCapsulesY: ReturnType<typeof useSpring>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext debe usarse dentro de ScrollProvider');
  }
  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const { scrollY } = useScroll();
  
  // Transforma el scroll del hero en movimiento de las cápsulas
  const capsulesY = useTransform(
    scrollY,
    [0, window.innerHeight * 1.5], // Rango extendido para movimiento más natural
    [0, -window.innerHeight * 0.8] // Movimiento más suave y gradual
  );
  
  // Añade física realista al movimiento con mejor fluidez
  const smoothCapsulesY = useSpring(capsulesY, {
    stiffness: 50,        // Menor stiffness para movimiento más suave
    damping: 18,          // Menor damping para menos rebote
    mass: 0.8,            // Añadir masa para inercia más natural
    restDelta: 0.01,      // Precisión del movimiento
    restSpeed: 0.01       // Velocidad mínima para considerar "en reposo"
  });

  const value = {
    capsulesY,
    smoothCapsulesY
  };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
}; 