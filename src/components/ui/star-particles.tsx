// Componente de Estrella Grande
export const StarLarge = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="29" 
    height="32" 
    viewBox="0 0 29 32" 
    fill="none"
    className={className}
    style={style}
  >
    <g filter="url(#filter0_d_1_1317)">
      <path 
        d="M7.71515 15.7713C13.2429 14.449 14.4288 12.2846 15.3904 7.56511C15.7528 12.1608 16.9145 14.1968 22.1728 16.0437C17.2559 17.4677 15.7592 19.3369 15.0742 24.3468C14.7016 18.8086 12.6341 17.3303 7.71515 15.7713Z" 
        fill="white"
      />
    </g>
    <defs>
      <filter id="filter0_d_1_1317" x="0.915088" y="0.765063" width="28.0578" height="30.3817" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="3.4"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.95 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1317"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1317" result="shape"/>
      </filter>
    </defs>
  </svg>
);

// Componente de Estrella Pequeña
export const StarSmall = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="14" 
    height="14" 
    viewBox="0 0 14 14" 
    fill="none"
    className={className}
    style={style}
  >
    <g filter="url(#filter0_d_1_1304)">
      <path 
        d="M4.98547 3.33946L5.72943 6.22875L3.21145 7.82913L6.18922 8.01442L6.93318 10.9037L8.02958 8.12894L11.0074 8.31423L8.7072 6.41404L9.8036 3.63927L7.28562 5.23965L4.98547 3.33946Z" 
        fill="white"
      />
    </g>
    <defs>
      <filter id="filter0_d_1_1304" x="0.269806" y="0.397858" width="13.6791" height="13.4474" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1.47081"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.95 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1304"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1304" result="shape"/>
      </filter>
    </defs>
  </svg>
);

// Componente de Partículas de Estrellas
export const StarParticles = ({ density = "normal", color = "white" }: { density?: "light" | "normal" | "heavy"; color?: string }) => {
  const getParticleCount = () => {
    switch (density) {
      case "light": return 8;
      case "normal": return 15;
      case "heavy": return 25;
      default: return 15;
    }
  };

  const particleCount = getParticleCount();
  const particles = Array.from({ length: particleCount }, (_, i) => i);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((index) => {
        const isLarge = Math.random() > 0.6; // 40% de probabilidad de estrella grande
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const animationDelay = Math.random() * 6;
        const animationDuration = 4 + Math.random() * 3;
        const rotation = Math.random() * 360;
        const scale = 0.6 + Math.random() * 1.2;
        const opacity = 0.4 + Math.random() * 0.6;
        
        // Colores aleatorios para estrellas más hermosas
        const starColors = [
          'rgba(255, 255, 255, 0.9)', // Blanco brillante
          'rgba(255, 215, 0, 0.8)',   // Dorado
          'rgba(192, 192, 192, 0.8)', // Plateado
          'rgba(255, 182, 193, 0.7)', // Rosa suave
          'rgba(173, 216, 230, 0.7)', // Azul claro
        ];
        const randomColor = starColors[Math.floor(Math.random() * starColors.length)];

        const StarComponent = isLarge ? StarLarge : StarSmall;

        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${animationDelay}s`,
              animationDuration: `${animationDuration}s`,
              transform: `rotate(${rotation}deg) scale(${scale})`,
              opacity: opacity,
              animation: `twinkle ${animationDuration}s ease-in-out infinite ${animationDelay}s`,
            }}
          >
            <StarComponent 
              style={{
                filter: `drop-shadow(0 0 12px ${randomColor}) drop-shadow(0 0 20px ${randomColor}) brightness(1.2)`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
