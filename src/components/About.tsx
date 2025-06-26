import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80"
          alt="Chef at Marble Beach"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Right Side - Content */}
      <div className="w-1/2 bg-gray-50 flex items-center justify-center px-8 py-12">
        <div className="max-w-md">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-black mb-8">
            CHEF KUMAR
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6 text-base">
            Kumar's deep appreciation of Sri Lankan coastal traditions and his innovative approach to contemporary cuisine are the driving forces in his cooking. Kumar leads the
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-8 text-base">
            <span className="underline cursor-pointer">Marble Beach team</span> with a focus on excellence, authenticity and coastal hospitality.
          </p>
          
          <Button 
            className="bg-transparent border border-black text-black hover:bg-transparent hover:text-black px-8 py-3 text-sm tracking-wide uppercase font-light rounded-none"
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;