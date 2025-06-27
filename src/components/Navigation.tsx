import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection like About page
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black' 
        : 'bg-white/95 backdrop-blur-sm'
    } border-b ${isScrolled ? 'border-gray-800' : 'border-gray-100'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className={`text-2xl font-light tracking-[0.2em] transition-colors duration-300 ${
            isScrolled ? 'text-white' : 'text-black'
          }`}>
            MARBLE BEACH
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm tracking-wide">
            <button 
              onClick={() => scrollToSection("home")} 
              className={`hover:opacity-70 transition-all duration-300 uppercase ${
                isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className={`hover:opacity-70 transition-all duration-300 uppercase ${
                isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("menu")} 
              className={`hover:opacity-70 transition-all duration-300 uppercase ${
                isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection("reservations")} 
              className={`hover:opacity-70 transition-all duration-300 uppercase ${
                isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              Reservations
            </button>
            <button 
              onClick={() => scrollToSection("gallery")} 
              className={`hover:opacity-70 transition-all duration-300 uppercase ${
                isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className={`hover:opacity-70 transition-all duration-300 uppercase ${
                isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection("reservations")} 
            className={`hidden md:block px-6 py-2 text-sm tracking-wide uppercase font-bold rounded-none transition-all duration-300 ${
              isScrolled 
                ? 'bg-black text-white border border-white hover:bg-white hover:text-black' 
                : 'bg-white text-black border border-black hover:bg-black hover:text-white'
            }`}
          >
            Book Now
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-black'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - FIXED: No border-t, clean styling */}
        {isOpen && (
          <div className={`md:hidden transition-colors duration-300 ${
            isScrolled 
              ? 'bg-black' 
              : 'bg-white'
          }`}>
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection("home")}
                className={`block hover:opacity-70 transition-all duration-300 uppercase tracking-wide ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className={`block hover:opacity-70 transition-all duration-300 uppercase tracking-wide ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("menu")}
                className={`block hover:opacity-70 transition-all duration-300 uppercase tracking-wide ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection("reservations")}
                className={`block hover:opacity-70 transition-all duration-300 uppercase tracking-wide ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                Reservations
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className={`block hover:opacity-70 transition-all duration-300 uppercase tracking-wide ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className={`block hover:opacity-70 transition-all duration-300 uppercase tracking-wide ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                Contact
              </button>
              
              <div className="pt-4">
                <Button 
                  onClick={() => scrollToSection("reservations")}
                  className={`w-full py-3 text-sm tracking-wide uppercase font-bold rounded-none transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-black text-white border border-white hover:bg-white hover:text-black' 
                      : 'bg-white text-black border border-black hover:bg-black hover:text-white'
                  }`}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;