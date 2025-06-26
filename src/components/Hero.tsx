import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Quay-style Header */}
      <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-light tracking-[0.2em] text-black">
              MARBLE BEACH
            </div>
            
            {/* Desktop Navigation - Hidden initially, appears on scroll */}
            <nav className="hidden md:flex space-x-8 text-sm tracking-wide">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-black transition-colors uppercase"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("menu")}
                className="text-gray-700 hover:text-black transition-colors uppercase"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection("experience")}
                className="text-gray-700 hover:text-black transition-colors uppercase"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-black transition-colors uppercase"
              >
                Contact
              </button>
            </nav>

            {/* Reservation Button */}
            <Button 
              onClick={() => scrollToSection("reservations")}
              className="bg-black text-white hover:bg-gray-800 px-6 py-2 text-sm tracking-wide uppercase font-light rounded-none"
            >
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection("about")}
                className="block text-gray-700 hover:text-black transition-colors uppercase tracking-wide"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("menu")}
                className="block text-gray-700 hover:text-black transition-colors uppercase tracking-wide"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection("experience")}
                className="block text-gray-700 hover:text-black transition-colors uppercase tracking-wide"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block text-gray-700 hover:text-black transition-colors uppercase tracking-wide"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Quay-style Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
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