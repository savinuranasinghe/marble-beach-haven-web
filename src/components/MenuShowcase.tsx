import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Custom hook for repeatable scroll animations
const useScrollAnimation = (threshold = 0.3) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Animation triggers when entering viewport and resets when leaving
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

const MenuShowcase = () => {
  const navigate = useNavigate();
  const [containerRef, containerVisible] = useScrollAnimation(0.2);
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [textRef, textVisible] = useScrollAnimation(0.3);
  const [buttonRef, buttonVisible] = useScrollAnimation(0.3);

  const handleReadMore = () => {
    navigate('/menu');
  };

  return (
    <section id="menu" className="min-h-screen flex flex-col md:flex-row md:h-screen m-0 p-0" style={{ marginTop: 0, marginBottom: 0 }}>
      {/* Content - Full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 flex-1 md:h-full bg-gray-50 flex items-center justify-center px-6 md:px-16 py-8 md:py-20 order-2 md:order-1">
        <div ref={containerRef} className="max-w-sm text-center md:text-left">
          {/* Animated Title */}
          <div ref={titleRef} className={`transition-all duration-1000 ease-out ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-5xl font-light tracking-wide text-black mb-4 md:mb-10">
              MENU
            </h2>
          </div>
          
          {/* Animated Single Paragraph */}
          <div ref={textRef} className={`transition-all duration-1000 ease-out delay-200 ${
            textVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-700 leading-relaxed mb-4 md:mb-10 text-sm md:text-base">
              A progression of authentic Sri Lankan flavours where spice, freshness and harmony is paramount. Delve into the Marble Beach dining experience with our Coastal Menu and a thoughtfully curated Wine Selection.
            </p>
          </div>
          
          {/* Animated Button */}
          <div ref={buttonRef} className={`transition-all duration-1000 ease-out delay-400 ${
            buttonVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              onClick={handleReadMore}
              className="bg-transparent border border-black text-black hover:bg-transparent hover:text-black px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm tracking-wide uppercase font-light rounded-none"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Image - Full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 h-64 md:h-full relative order-1 md:order-2">
        <img 
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=80"
          alt="Signature Crab Curry"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default MenuShowcase;