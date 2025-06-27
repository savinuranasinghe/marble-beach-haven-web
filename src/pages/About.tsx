import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.3) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};

const About = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [section1Ref, section1Visible] = useScrollAnimation(0.3);
  const [section2Ref, section2Visible] = useScrollAnimation(0.3);
  const [section3Ref, section3Visible] = useScrollAnimation(0.3);

  // Scroll detection for navbar
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
  };

  const goBackHome = () => {
    navigate('/');
  };

  const makeReservation = () => {
    navigate('/', { state: { scrollTo: 'reservations' } });
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header - Minimal like Quay with Scroll Effect */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
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
            <Button 
              onClick={goBackHome}
              className={`px-6 py-2 text-sm tracking-wide uppercase font-bold rounded-none transition-all duration-300 ${
                isScrolled 
                  ? 'bg-transparent border border-white text-white hover:bg-white hover:text-black' 
                  : 'bg-transparent border border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Section 1: Chef Kumar's Story */}
      <section className="min-h-screen flex flex-col md:flex-row md:h-screen mt-20">
        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80"
            alt="Chef Kumar Portrait"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="w-full md:w-1/2 flex-1 md:h-full bg-gray-50 flex items-center justify-center px-6 md:px-16 py-8 md:py-20">
          <div ref={section1Ref} className="max-w-lg w-full">
            <div className={`transition-all duration-1000 ease-out ${
              section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-3xl md:text-6xl font-light tracking-wide text-black mb-4 md:mb-12">
                CHEF KUMAR
              </h1>
              
              <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  Chef Kumar is the culinary visionary behind Marble Beach, bringing together authentic Sri Lankan coastal traditions with contemporary fine dining techniques. Born and raised in the fishing villages of Sri Lanka's southern coast, Kumar's deep connection to the ocean and its bounty shapes every dish he creates.
                </p>
                
                <p>
                  Kumar began his culinary journey at age 16, learning traditional spice blending techniques from his grandmother before pursuing formal training at culinary institutes in Colombo. His passion for showcasing Sri Lanka's rich coastal cuisine led him to work in prestigious kitchens across Asia, where he developed his signature style of modern Sri Lankan cooking.
                </p>
                
                <p>
                  Today, Kumar is recognized as one of Sri Lanka's most innovative chefs, having received the National Culinary Excellence Award. His commitment to sustainable fishing practices has made Marble Beach a beacon of responsible coastal dining.
                </p>
              </div>
              
              <div className="mt-6 md:mt-10">
                <Button 
                  onClick={() => scrollToSection("philosophy")}
                  className="bg-transparent border border-black text-black hover:bg-black hover:text-white px-6 md:px-8 py-2 md:py-3 text-xs md:text-sm tracking-wide uppercase font-light rounded-none transition-all duration-300"
                >
                  Continue Reading
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Culinary Philosophy */}
      <section id="philosophy" className="min-h-screen flex flex-col md:flex-row md:h-screen">
        {/* Content */}
        <div className="w-full md:w-1/2 flex-1 md:h-full bg-white flex items-center justify-center px-6 md:px-16 py-8 md:py-20 order-2 md:order-1">
          <div ref={section2Ref} className="max-w-lg w-full">
            <div className={`transition-all duration-1000 ease-out ${
              section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-3xl md:text-6xl font-light tracking-wide text-black mb-4 md:mb-12">
                CULINARY PHILOSOPHY
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  Kumar's culinary philosophy centers on the belief that great cuisine emerges from the harmony between tradition and innovation. Drawing inspiration from the rhythms of the ocean and the complexity of Sri Lankan spice culture, each dish tells a story of coastal heritage reimagined for the contemporary palate.
                </p>
                
                <p>
                  "Food inspired by nature and perfected by tradition," Kumar describes his approach. Working exclusively with fishermen who practice sustainable methods, he ensures that each day's menu reflects the ocean's natural bounty. His spice garden, cultivated with heirloom varieties, provides the aromatic foundation for his signature curry blends and marinades.
                </p>
                
                <p>
                  The seasonal menu philosophy follows Sri Lanka's monsoon patterns, celebrating the unique ingredients each brings. Kumar's cooking connects diners to the natural cycles that have sustained coastal communities for generations.
                </p>
              </div>
              
              <div className="mt-6 md:mt-10">
                <Button 
                  onClick={() => scrollToSection("heritage")}
                  className="bg-transparent border border-black text-black hover:bg-black hover:text-white px-6 md:px-8 py-2 md:py-3 text-xs md:text-sm tracking-wide uppercase font-light rounded-none transition-all duration-300"
                >
                  Continue Reading
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full relative order-1 md:order-2">
          <img 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80"
            alt="Chef Kumar preparing spices"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Section 3: Marble Beach Heritage */}
      <section id="heritage" className="min-h-screen flex flex-col md:flex-row md:h-screen">
        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1000&q=80"
            alt="Marble Beach Heritage"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="w-full md:w-1/2 flex-1 md:h-full bg-gray-50 flex items-center justify-center px-6 md:px-16 py-8 md:py-20">
          <div ref={section3Ref} className="max-w-lg w-full">
            <div className={`transition-all duration-1000 ease-out ${
              section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-3xl md:text-6xl font-light tracking-wide text-black mb-4 md:mb-12">
                MARBLE BEACH HERITAGE
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  Marble Beach was born from a vision to create Sri Lanka's premier coastal dining destination, where the island's rich culinary heritage meets world-class hospitality. Choosing Unawatuna for its pristine beaches and vibrant fishing community, Kumar sought to build more than a restaurant—he envisioned a cultural bridge connecting travelers to authentic Sri Lankan coastal life.
                </p>
                
                <p>
                  The restaurant's design reflects the natural beauty of its surroundings, with sustainable materials sourced from local artisans and architecture that frames breathtaking ocean views. Every element, from the hand-carved wooden tables to the living spice walls, tells the story of Sri Lankan craftsmanship and natural abundance.
                </p>
                
                <p>
                  Marble Beach showcases Sri Lankan coastal cuisine to the world while supporting local communities through partnerships with fishermen, farmers, and artisans. Our commitment includes ocean conservation initiatives and sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
            Experience Chef Kumar's Vision
          </h3>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join us for an unforgettable journey through Sri Lankan coastal cuisine, 
            where tradition meets innovation in every dish.
          </p>
          <Button 
            onClick={makeReservation}
            className="bg-black text-white border border-white hover:bg-white hover:text-black px-8 py-3 text-sm tracking-wide uppercase font-bold rounded-none transition-all duration-300"
          >
            Make a Reservation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;