
import { Card, CardContent } from "@/components/ui/card";

const MenuShowcase = () => {
  const menuCategories = [
    {
      title: "Fresh Catch of the Day",
      items: [
        {
          name: "Grilled Red Snapper with Coconut Curry Sauce",
          price: "$28",
          description: "Fresh red snapper grilled to perfection, served with our signature coconut curry sauce and steamed jasmine rice"
        },
        {
          name: "Pan-Seared Mahi Mahi with Mango Salsa",
          price: "$26",
          description: "Delicately seared mahi mahi topped with fresh tropical mango salsa and coconut rice"
        },
        {
          name: "Whole Lobster with Garlic Butter",
          price: "$45",
          description: "Fresh whole lobster grilled with aromatic garlic butter and served with seasonal vegetables"
        }
      ]
    },
    {
      title: "Signature Sri Lankan Seafood",
      items: [
        {
          name: "Marble Beach Crab Curry",
          price: "Market Price",
          description: "Our signature crab curry uses traditional Jaffna spices with locally sourced mud crabs, served with coconut rice and fresh sambols"
        },
        {
          name: "Jaffna Style Prawn Curry",
          price: "$24",
          description: "Authentic Northern Sri Lankan prawn curry with roasted spices, coconut milk, and curry leaves"
        },
        {
          name: "Ambul Thiyal (Sour Fish Curry)",
          price: "$22",
          description: "Traditional Southern Sri Lankan sour fish curry with goraka and aromatic spices"
        },
        {
          name: "Coconut Sambol Grilled Fish",
          price: "$25",
          description: "Daily catch grilled to perfection with aromatic Sri Lankan spices and house-made coconut chutney"
        }
      ]
    },
    {
      title: "Contemporary Dishes",
      items: [
        {
          name: "Seared Tuna with Sesame Crust",
          price: "$29",
          description: "Fresh tuna with black sesame crust, served with Asian slaw and soy-ginger reduction"
        },
        {
          name: "Seafood Kottu Roti",
          price: "$18",
          description: "Authentic kottu roti elevated with fresh prawns and chef's special curry sauce"
        },
        {
          name: "Coconut Rice and Curry Platter",
          price: "$16",
          description: "Traditional Sri Lankan rice and curry with fresh vegetables and coconut sambol"
        },
        {
          name: "Wood-Fired Pizza with Sri Lankan Toppings",
          price: "$14-19",
          description: "Artisan pizza with local ingredients and Sri Lankan spice blends"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Menu
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover authentic Sri Lankan flavors with a contemporary twist, featuring the freshest seafood from our local waters
            </p>
          </div>

          <div className="space-y-16">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in">
                <h3 className="text-3xl font-semibold text-center text-primary mb-8 border-b-2 border-blue-200 pb-4">
                  {category.title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow duration-300 border-blue-100">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-semibold text-primary leading-tight flex-1 mr-4">
                            {item.name}
                          </h4>
                          <span className="text-xl font-bold text-blue-600 whitespace-nowrap">
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

          <div className="mt-16 p-8 bg-slate-50 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">Beverages</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-lg mb-2">Premium Ceylon Tea</h4>
                <p className="text-muted-foreground">Selection of finest local teas</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Tropical Cocktails</h4>
                <p className="text-muted-foreground">Arrack-based signature drinks</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Wine Pairings</h4>
                <p className="text-muted-foreground">Curated international selection</p>
              </div>
              <div>
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
