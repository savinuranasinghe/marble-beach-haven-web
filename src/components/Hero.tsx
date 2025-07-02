import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
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
    setIsMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Quay-style Header with Scroll Effect */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black' 
          : 'bg-white'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className={`text-2xl font-light tracking-[0.2em] transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-black'
            }`}>
              MARBLE BEACH
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 text-sm tracking-wide">
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
                onClick={() => navigateToPage("/rooms")}
                className={`hover:opacity-70 transition-all duration-300 uppercase ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                Rooms
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
            </nav>

            {/* Reservation Button - Hidden on Mobile */}
            <Button 
              onClick={() => scrollToSection("reservations")}
              className={`hidden md:block px-6 py-2 text-sm tracking-wide uppercase font-bold rounded-none transition-all duration-300 ${
                isScrolled 
                  ? 'bg-black text-white border border-white hover:bg-white hover:text-black' 
                  : 'bg-white text-black border border-black hover:bg-white hover:text-black'
              }`}
            >
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-black'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden transition-colors duration-300 ${
            isScrolled 
              ? 'bg-black' 
              : 'bg-white'
          }`}>
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button 
                onClick={() => {
                  scrollToSection("about");
                  setIsMenuOpen(false);
                }}
                className={`block hover:opacity-70 transition-all duration-300 uppercase tracking-wide ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => {
                  scrollToSection("menu");
                  setIsMenuOpen(false);
                }}
                className={`block hover:opacity-70 transition-all duration-300 uppercase tracking-wide ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                Menu
              </button>
              <button 
                onClick={() => navigateToPage("/rooms")}
                className={`block hover:opacity-70 transition-all duration-300 uppercase tracking-wide ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                Rooms
              </button>
              <button 
                onClick={() => {
                  scrollToSection("gallery");
                  setIsMenuOpen(false);
                }}
                className={`block hover:opacity-70 transition-all duration-300 uppercase tracking-wide ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                Gallery
              </button>
              <button 
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
                className={`block hover:opacity-70 transition-all duration-300 uppercase tracking-wide ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                Contact
              </button>
              
              {/* Mobile Book Now Button */}
              <div className="pt-4">
                <Button 
                  onClick={() => {
                    scrollToSection("reservations");
                    setIsMenuOpen(false);
                  }}
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
      </header>

      {/* Quay-style Hero Section */}
      <section className="relative h-screen w-full overflow-hidden block m-0 p-0" style={{ marginTop: 0, marginBottom: 0 }}>
        {/* Full-width Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=80"
            alt="Marble Beach Restaurant Ocean View"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        {/* Centered Logo and Text - Quay Style */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* Main Logo */}
          <div className="mb-8">
            <h1 className="text-white text-5xl md:text-7xl font-light tracking-[0.3em] mb-4">
              MARBLE BEACH
            </h1>
            <div className="w-24 h-px bg-white mx-auto mb-4"></div>
            <p className="text-white text-xl md:text-2xl font-light tracking-[0.2em]">
              SRI LANKA
            </p>
          </div>
          
          {/* Subtitle */}
          <p className="text-white text-base md:text-lg font-light tracking-wide max-w-2xl leading-relaxed opacity-90">
            Contemporary Sri Lankan coastal dining with panoramic ocean views
          </p>
        </div>

        {/* Bottom Navigation Hint - like Quay */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-8 bg-white/50"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;