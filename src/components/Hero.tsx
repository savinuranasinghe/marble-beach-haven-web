
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToReservations = () => {
    const element = document.getElementById("reservations");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Marble Beach
          <span className="block text-3xl md:text-4xl font-light mt-2 text-blue-200">Sri Lanka</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto animate-fade-in opacity-90">
          Where Ocean Meets Cuisine
        </p>
        
        <p className="text-lg mb-10 max-w-3xl mx-auto animate-fade-in opacity-80">
          Contemporary Sri Lankan Coastal Dining Experience
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            onClick={scrollToReservations}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Reserve Your Table
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Menu
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-white opacity-60 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
