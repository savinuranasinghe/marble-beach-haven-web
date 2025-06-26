import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="h-screen flex flex-col md:flex-row mt-8 md:mt-0 p-0">
      {/* Image - Full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
        <img 
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80"
          alt="Chef at Marble Beach"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content - Full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-50 flex items-center justify-center px-6 md:px-16 py-8 md:py-20">
        <div className="max-w-sm text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-black mb-6 md:mb-10">
            CHEF KUMAR
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
            Kumar's deep appreciation of Sri Lankan coastal traditions and his innovative approach to contemporary cuisine are the driving forces in his cooking. Kumar leads the
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6 md:mb-10 text-sm md:text-base">
            <span>Marble Beach team</span> with a focus on excellence, authenticity and coastal hospitality.
          </p>
          
          <Button 
            className="bg-transparent border border-black text-black hover:bg-transparent hover:text-black px-6 md:px-8 py-2 md:py-3 text-xs md:text-sm tracking-wide uppercase font-light rounded-none"
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;