import logoNavbar from "@/assets/logo_navbar.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/20 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logoNavbar} 
              alt="Human Souls Logo" 
              className="h-14 w-auto sm:h-16 transition-all duration-200 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;