
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToReservations = () => {
    const element = document.getElementById("reservations");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Images */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-75"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=80')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')`,
            transform: `translateY(${scrollY * 0.3}px)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-300 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-16 w-6 h-6 bg-coral-400 rounded-full animate-float-delayed opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-gold-300 rounded-full animate-float-slow opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up-fade">
          Marble Beach
          <span className="block text-3xl md:text-4xl font-light mt-2 text-blue-200 animate-slide-up-fade-delayed">Sri Lanka</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto animate-fade-in-up opacity-90">
          Where Ocean Meets Cuisine
        </p>
        
        <p className="text-lg mb-10 max-w-3xl mx-auto animate-fade-in-up opacity-80">
          Contemporary Sri Lankan Coastal Dining Experience
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Button 
            onClick={scrollToReservations}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full transform hover:scale-110 transition-all duration-300 animate-bounce-gentle shadow-2xl hover:shadow-blue-500/50"
          >
            Reserve Your Table
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg rounded-full transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-white/30"
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Menu
          </Button>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center">
          <div className="w-1 h-8 bg-white opacity-60 rounded-full mb-2 animate-pulse"></div>
          <div className="text-white text-sm opacity-60">Scroll</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
