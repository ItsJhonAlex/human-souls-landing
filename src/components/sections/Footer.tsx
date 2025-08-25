import { Button } from "@/components/ui/button";
import { StarParticles } from "@/components/ui/star-particles";

const Footer = () => {
  const navigationLinks = [
    { name: "Comunidad", href: "#" },
    { name: "Cápsulas", href: "#" },
    { name: "Soul Buddies", href: "#" },
    { name: "Ecosistema", href: "#" }
  ];

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "TikTok", href: "#" }
  ];

  return (
    <footer id="footer" className="bg-foreground text-background py-12 sm:py-16 px-4 relative overflow-hidden">
      {/* Sistema de Partículas de Estrellas */}
      <StarParticles density="light" color="white" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Human Souls</h3>
            <p className="text-sm opacity-80 mb-4">
              Juntos somos la magia que transforma el mundo ✨
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:opacity-100 transition-opacity">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Conéctate</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:opacity-100 transition-opacity">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm opacity-80 mb-4">
              🌱 Súmate y recibe novedades exclusivas
            </p>
            <Button variant="secondary" size="sm">
              Suscribirme
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
          <p>© 2025 Human Souls. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
