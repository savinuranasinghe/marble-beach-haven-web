import { Button } from "@/components/ui/button";

const MenuShowcase = () => {
  return (
    <section id="menu" className="min-h-screen flex">
      {/* Left Side - Content */}
      <div className="w-1/2 bg-gray-50 flex items-center justify-center px-10 py-16">
        <div className="max-w-md">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-black mb-8">
            MENU
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6 text-base">
            A progression of authentic Sri Lankan flavours where spice, freshness and harmony is paramount. Delve into the Marble Beach dining experience with our
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-8 text-base">
            <span className="underline cursor-pointer">Coastal Menu</span> and a thoughtfully curated <span className="underline cursor-pointer">Wine Selection</span>.
          </p>
          
          <Button 
            className="bg-transparent border border-black text-black hover:bg-transparent hover:text-black px-8 py-3 text-sm tracking-wide uppercase font-light rounded-none"
          >
            Read More
          </Button>
        </div>
      </div>
      
      {/* Right Side - Food Image */}
      <div className="w-1/2 relative">
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