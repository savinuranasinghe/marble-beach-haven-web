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

const About = () => {
  const navigate = useNavigate();
  const [containerRef, containerVisible] = useScrollAnimation(0.2);
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [textRef, textVisible] = useScrollAnimation(0.3);
  const [buttonRef, buttonVisible] = useScrollAnimation(0.3);

  const handleReadMore = () => {
    navigate('/about', { state: { scrollTo: 'chef-kumar' } });
  };

  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row md:h-screen mt-8 md:mt-0 p-0">
      {/* Image - Full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 h-64 md:h-full relative">
        <img 
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80"
          alt="Chef at Marble Beach"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content - Full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 flex-1 md:h-full bg-gray-50 flex items-center justify-center px-6 md:px-16 py-8 md:py-20">
        <div ref={containerRef} className="max-w-sm text-center md:text-left">
          {/* Animated Title */}
          <div ref={titleRef} className={`transition-all duration-1000 ease-out ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-5xl font-light tracking-wide text-black mb-4 md:mb-10">
              CHEF KUMAR
            </h2>
          </div>
          
          {/* Animated Single Paragraph */}
          <div ref={textRef} className={`transition-all duration-1000 ease-out delay-200 ${
            textVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-700 leading-relaxed mb-4 md:mb-10 text-sm md:text-base">
              Kumar's deep appreciation of Sri Lankan coastal traditions and his innovative approach to contemporary cuisine are the driving forces in his cooking. Kumar leads the Marble Beach team with a focus on excellence, authenticity and coastal hospitality.
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
    </section>
  );
};

export default About;