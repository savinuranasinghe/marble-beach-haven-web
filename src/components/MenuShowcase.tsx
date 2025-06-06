
import { Card, CardContent } from "@/components/ui/card";

const MenuShowcase = () => {
  const menuCategories = [
    {
      title: "Fresh Catch of the Day",
      items: [
        {
          name: "Grilled Red Snapper with Coconut Curry Sauce",
          price: "Rs. 8,400",
          description: "Fresh red snapper grilled to perfection, served with our signature coconut curry sauce and steamed jasmine rice",
          image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Pan-Seared Mahi Mahi with Mango Salsa",
          price: "Rs. 7,800",
          description: "Delicately seared mahi mahi topped with fresh tropical mango salsa and coconut rice",
          image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Whole Lobster with Garlic Butter",
          price: "Rs. 13,500",
          description: "Fresh whole lobster grilled with aromatic garlic butter and served with seasonal vegetables",
          image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      title: "Signature Sri Lankan Seafood",
      items: [
        {
          name: "Marble Beach Crab Curry",
          price: "Market Price",
          description: "Our signature crab curry uses traditional Jaffna spices with locally sourced mud crabs, served with coconut rice and fresh sambols",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Jaffna Style Prawn Curry",
          price: "Rs. 7,200",
          description: "Authentic Northern Sri Lankan prawn curry with roasted spices, coconut milk, and curry leaves",
          image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Ambul Thiyal (Sour Fish Curry)",
          price: "Rs. 6,600",
          description: "Traditional Southern Sri Lankan sour fish curry with goraka and aromatic spices",
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Coconut Sambol Grilled Fish",
          price: "Rs. 7,500",
          description: "Daily catch grilled to perfection with aromatic Sri Lankan spices and house-made coconut chutney",
          image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      title: "Contemporary Dishes",
      items: [
        {
          name: "Seared Tuna with Sesame Crust",
          price: "Rs. 8,700",
          description: "Fresh tuna with black sesame crust, served with Asian slaw and soy-ginger reduction",
          image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Seafood Kottu Roti",
          price: "Rs. 5,400",
          description: "Authentic kottu roti elevated with fresh prawns and chef's special curry sauce",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Coconut Rice and Curry Platter",
          price: "Rs. 4,800",
          description: "Traditional Sri Lankan rice and curry with fresh vegetables and coconut sambol",
          image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Wood-Fired Pizza with Sri Lankan Toppings",
          price: "Rs. 4,200-5,700",
          description: "Artisan pizza with local ingredients and Sri Lankan spice blends",
          image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=400&q=80"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in-up">
              Our Menu
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
              Discover authentic Sri Lankan flavors with a contemporary twist, featuring the freshest seafood from our local waters
            </p>
          </div>

          <div className="space-y-16">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-slide-in-left">
                <h3 className="text-3xl font-semibold text-center text-primary mb-8 border-b-2 border-blue-200 pb-4 animate-fade-in">
                  {category.title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-2xl transition-all duration-500 border-blue-100 group hover:scale-105 transform animate-fade-in-up overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-semibold text-primary leading-tight flex-1 mr-4 group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-xl font-bold text-blue-600 whitespace-nowrap animate-pulse">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-slate-100 rounded-lg text-center animate-fade-in-up shadow-lg">
            <h3 className="text-2xl font-semibold text-primary mb-4">Beverages</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="hover:scale-105 transition-transform duration-300">
                <h4 className="font-semibold text-lg mb-2">Premium Ceylon Tea</h4>
                <p className="text-muted-foreground">Selection of finest local teas</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <h4 className="font-semibold text-lg mb-2">Tropical Cocktails</h4>
                <p className="text-muted-foreground">Arrack-based signature drinks</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <h4 className="font-semibold text-lg mb-2">Wine Pairings</h4>
                <p className="text-muted-foreground">Curated international selection</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <h4 className="font-semibold text-lg mb-2">King Coconut Water</h4>
                <p className="text-muted-foreground">Fresh from local coconuts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuShowcase;
