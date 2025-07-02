import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Leaf, Flame, Star } from "lucide-react";

const Menu = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goBackHome = () => {
    navigate('/');
  };

  const makeReservation = () => {
    navigate('/', { state: { scrollTo: 'reservations' } });
  };

  const menuItems = {
    appetizers: [
      {
        name: "Jaffna Crab Cakes",
        description: "Delicate crab meat with aromatic northern spices, coconut chutney",
        price: "LKR 2,800",
        dietary: ["spicy"],
        special: true
      },
      {
        name: "Pol Sambol Bruschetta",
        description: "Traditional coconut relish on artisan bread, micro herbs",
        price: "LKR 1,200",
        dietary: ["vegetarian"]
      },
      {
        name: "Ambul Thiyal Prawns",
        description: "Sour fish curry essence, king prawns, curry leaves tempura",
        price: "LKR 3,200",
        dietary: ["spicy"]
      },
      {
        name: "Jackfruit Carpaccio",
        description: "Young jackfruit, cashew cream, pomegranate, pandan oil",
        price: "LKR 1,800",
        dietary: ["vegetarian"]
      }
    ],
    mains: [
      {
        name: "Negombo Lobster Curry",
        description: "Half lobster in rich coconut curry, steamed red rice, papadam",
        price: "LKR 8,500",
        dietary: ["spicy"],
        special: true
      },
      {
        name: "Galle Fort Fish & Chips",
        description: "Beer-battered catch of the day, sweet potato chips, mint chutney",
        price: "LKR 3,800"
      },
      {
        name: "Kottu Risotto",
        description: "Deconstructed kottu with arborio rice, vegetables, egg ribbon",
        price: "LKR 2,600",
        dietary: ["vegetarian"]
      },
      {
        name: "Mannar Crab Curry",
        description: "Mud crab in traditional spice blend, coconut roti, dalcha",
        price: "LKR 6,200",
        dietary: ["spicy"]
      },
      {
        name: "Colombo Black Pork Curry",
        description: "Slow-braised pork belly, roasted spices, hoppers",
        price: "LKR 4,200",
        dietary: ["spicy"]
      },
      {
        name: "Weligama Bay Seabass",
        description: "Whole seabass, lemongrass, ginger flower, banana leaf",
        price: "LKR 4,800"
      }
    ],
    desserts: [
      {
        name: "Watalappan Soufflé",
        description: "Traditional jaggery custard reimagined, coconut ice cream",
        price: "LKR 1,500",
        special: true
      },
      {
        name: "Kithul Treacle Tart",
        description: "Palm treacle, cashew praline, vanilla bean cream",
        price: "LKR 1,200"
      },
      {
        name: "Tropical Fruit Salad",
        description: "Seasonal fruits, lime leaf syrup, toasted coconut",
        price: "LKR 900",
        dietary: ["vegetarian"]
      },
      {
        name: "Ceylon Tea Panna Cotta",
        description: "Earl Grey infusion, milk chocolate soil, gold leaf",
        price: "LKR 1,300",
        dietary: ["vegetarian"]
      }
    ]
  };

  const wines = [
    { name: "Champagne Laurent-Perrier Brut", origin: "France", price: "LKR 18,000" },
    { name: "Sauvignon Blanc, Cloudy Bay", origin: "New Zealand", price: "LKR 12,000" },
    { name: "Chardonnay, Leeuwin Estate", origin: "Australia", price: "LKR 15,000" },
    { name: "Pinot Noir, Felton Road", origin: "New Zealand", price: "LKR 16,500" }
  ];

  const MenuItem = ({ item, category }: { item: any, category: string }) => (
    <div className="mb-8 md:mb-10">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <h3 className="text-lg md:text-xl font-light tracking-wide text-black">
            {item.name}
          </h3>
          <div className="flex gap-1">
            {item.special && <Star className="w-4 h-4 text-yellow-500" />}
            {item.dietary?.includes("vegetarian") && <Leaf className="w-4 h-4 text-green-600" />}
            {item.dietary?.includes("spicy") && <Flame className="w-4 h-4 text-red-500" />}
          </div>
        </div>
        <span className="text-lg font-light text-black ml-4">{item.price}</span>
      </div>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
        {item.description}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header - Mobile Back Arrow + Desktop Button */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black' 
          : 'bg-white/95 backdrop-blur-sm'
      } border-b ${isScrolled ? 'border-gray-800' : 'border-gray-100'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* Mobile Back Arrow - Only visible on mobile */}
            <button 
              onClick={goBackHome}
              className={`md:hidden flex items-center justify-center w-10 h-10 transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
              }`}
            >
              <ArrowLeft size={20} />
            </button>

            {/* Logo - Centered on mobile, left on desktop */}
            <div className={`text-2xl font-light tracking-[0.2em] transition-colors duration-300 flex-1 md:flex-none text-center md:text-left ${
              isScrolled ? 'text-white' : 'text-black'
            }`}>
              MARBLE BEACH
            </div>
            
            {/* Desktop Back Button - Only visible on desktop */}
            <Button 
              onClick={goBackHome}
              className={`hidden md:block px-6 py-2 text-sm tracking-wide uppercase font-bold rounded-none transition-all duration-300 ${
                isScrolled 
                  ? 'bg-transparent border border-white text-white hover:bg-white hover:text-black' 
                  : 'bg-transparent border border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              BACK TO HOME
            </Button>

            {/* Empty div for mobile layout balance */}
            <div className="md:hidden w-10"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-8 text-black">
              Our Menu
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              Contemporary Sri Lankan coastal cuisine showcasing the finest local ingredients and traditional techniques
            </p>
            
            {/* Legend */}
            <div className="flex justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Chef's Special</span>
              </div>
              <div className="flex items-center gap-1">
                <Leaf className="w-4 h-4 text-green-600" />
                <span>Vegetarian</span>
              </div>
              <div className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-red-500" />
                <span>Spicy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Appetizers */}
          <section className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8 md:mb-12 text-center">
              Small Plates
            </h2>
            
            {/* Featured Image */}
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1200&q=80"
                alt="Jaffna Crab Cakes"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
              {menuItems.appetizers.map((item, index) => (
                <MenuItem key={index} item={item} category="appetizers" />
              ))}
            </div>
          </section>

          {/* Main Courses */}
          <section className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8 md:mb-12 text-center">
              Main Courses
            </h2>
            
            {/* Featured Images Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <img 
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
                alt="Negombo Lobster Curry"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
                alt="Mannar Crab Curry"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
              {menuItems.mains.map((item, index) => (
                <MenuItem key={index} item={item} category="mains" />
              ))}
            </div>
          </section>

          {/* Desserts */}
          <section className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8 md:mb-12 text-center">
              Sweet Endings
            </h2>
            
            {/* Featured Image */}
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80"
                alt="Watalappan Soufflé"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
              {menuItems.desserts.map((item, index) => (
                <MenuItem key={index} item={item} category="desserts" />
              ))}
            </div>
          </section>

          {/* Wine Selection */}
          <section className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8 md:mb-12 text-center">
              Wine Selection
            </h2>
            
            {/* Wine Image */}
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
                alt="Wine Selection"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {wines.map((wine, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-light tracking-wide text-black">
                      {wine.name}
                    </h3>
                    <span className="text-lg font-light text-black ml-4">{wine.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{wine.origin}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 text-sm mt-8">
              Our sommelier can recommend perfect pairings for your meal
            </p>
          </section>
        </div>
      </div>

      {/* Footer CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              Experience Our Coastal Menu
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our menu changes seasonally to showcase the finest local ingredients. 
              Please inform our staff of any dietary requirements or allergies.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Prices are in Sri Lankan Rupees and inclusive of applicable taxes.
            </p>
            <Button 
              onClick={makeReservation}
              className="bg-black text-white border border-white hover:bg-white hover:text-black px-8 py-3 text-sm tracking-wide uppercase font-bold rounded-none transition-all duration-300"
            >
              Make a Reservation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;