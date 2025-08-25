import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavSection {
  id: string;
  label: string;
  icon?: string;
}

interface FloatingNavbarProps {
  sections: NavSection[];
  className?: string;
}

export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ 
  sections, 
  className 
}) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Show navbar after scrolling 100px
      setIsVisible(scrollTop > 100);

      // Find active section
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      let currentSection = '';
      
      for (const element of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider section active if it's in the top 50% of viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = element.id;
            break;
          }
        }
      }

      // If no section is perfectly centered, find the closest one
      if (!currentSection && sectionElements.length > 0) {
        let closestSection = '';
        let closestDistance = Infinity;

        for (const element of sectionElements) {
          if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = element.id;
            }
          }
        }
        currentSection = closestSection;
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const getSectionProgress = (sectionId: string, index: number) => {
    if (index < sections.findIndex(s => s.id === activeSection)) {
      return 100; // Completed sections
    } else if (sectionId === activeSection) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const sectionProgress = Math.max(0, Math.min(100, 
          ((window.innerHeight / 2 - rect.top) / rect.height) * 100
        ));
        return sectionProgress;
      }
    }
    return 0; // Future sections
  };

  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-300",
        "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4",
        "shadow-xl hover:shadow-2xl",
        className
      )}
    >
      {/* Progress indicator */}
      <div className="absolute left-2 top-4 bottom-4 w-0.5 bg-white/20 rounded-full">
        <div 
          className="w-full bg-gradient-to-b from-primary to-cyan-400 rounded-full transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation dots */}
      <div className="ml-6 space-y-4">
        {sections.map((section, index) => {
          const isActive = section.id === activeSection;
          const sectionProgress = getSectionProgress(section.id, index);
          const isCompleted = index < sections.findIndex(s => s.id === activeSection);

          return (
            <div
              key={section.id}
              className="relative group cursor-pointer"
              onClick={() => scrollToSection(section.id)}
            >
              {/* Dot indicator */}
              <div 
                className={cn(
                  "w-3 h-3 rounded-full border-2 transition-all duration-300 relative",
                  "hover:scale-125",
                  isActive 
                    ? "border-primary bg-primary shadow-lg shadow-primary/50" 
                    : isCompleted
                    ? "border-cyan-400 bg-cyan-400"
                    : "border-white/40 bg-white/10"
                )}
              >
                {/* Progress ring for active section */}
                {isActive && (
                  <svg 
                    className="absolute inset-0 w-3 h-3 -rotate-90"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 10}`}
                      strokeDashoffset={`${2 * Math.PI * 10 * (1 - sectionProgress / 100)}`}
                      className="text-primary"
                    />
                  </svg>
                )}
              </div>

              {/* Section label tooltip */}
              <div 
                className={cn(
                  "absolute right-full mr-3 top-1/2 -translate-y-1/2",
                  "bg-gray-900/90 text-white px-3 py-1 rounded-lg text-sm font-medium",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                  "whitespace-nowrap pointer-events-none",
                  "before:content-[''] before:absolute before:left-full before:top-1/2 before:-translate-y-1/2",
                  "before:border-4 before:border-transparent before:border-l-gray-900/90"
                )}
              >
                {section.label}
              </div>

              {/* Active section glow */}
              {isActive && (
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary animate-ping opacity-20" />
              )}
            </div>
          );
        })}
      </div>

      {/* Overall progress percentage */}
      <div className="mt-4 pt-3 border-t border-white/20">
        <div className="text-center">
          <span className="text-xs text-white/70 font-medium">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default FloatingNavbar;
