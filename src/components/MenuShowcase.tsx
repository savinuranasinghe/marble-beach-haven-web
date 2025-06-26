import { Button } from "@/components/ui/button";

const MenuShowcase = () => {
  return (
    <section id="menu" className="h-screen flex flex-col md:flex-row m-0 p-0" style={{ marginTop: 0, marginBottom: 0 }}>
      {/* Content - Full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-50 flex items-center justify-center px-6 md:px-16 py-8 md:py-20 order-2 md:order-1">
        <div className="max-w-sm text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-black mb-6 md:mb-10">
            MENU
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
            A progression of authentic Sri Lankan flavours where spice, freshness and harmony is paramount. Delve into the Marble Beach dining experience with our
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6 md:mb-10 text-sm md:text-base">
            <span>Coastal Menu</span> and a thoughtfully curated <span>Wine Selection</span>.
          </p>
          
          <Button 
            className="bg-transparent border border-black text-black hover:bg-transparent hover:text-black px-6 md:px-8 py-2 md:py-3 text-xs md:text-sm tracking-wide uppercase font-light rounded-none"
          >
            Read More
          </Button>
        </div>
      </div>
      
      {/* Image - Full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative order-1 md:order-2">
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