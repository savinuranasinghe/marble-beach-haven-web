
import { Award, Star, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nestled along Sri Lanka's pristine coastline, Marble Beach brings together the island's rich culinary heritage with contemporary coastal dining
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Fresh, Authentic, Extraordinary
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every morning, our chefs work with local fishermen to select the finest catch of the day. We honor traditional Sri Lankan cooking methods while presenting them with a modern, sophisticated touch that celebrates both flavor and artistry.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our beachfront location offers more than just stunning ocean views – it's where the rhythm of the waves meets the sizzle of our grills, creating an atmosphere that's both relaxed and refined.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From our signature crab curry using time-honored Jaffna spices to our innovative fusion dishes, every plate tells the story of Sri Lanka's coastal culture.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Ocean view from restaurant"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-primary mb-2">Award Winner</h4>
              <p className="text-muted-foreground">Sri Lanka Tourism Excellence Award 2023</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-primary mb-2">TripAdvisor</h4>
              <p className="text-muted-foreground">Certificate of Excellence</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-primary mb-2">Local Favorite</h4>
              <p className="text-muted-foreground">Beloved by locals and travelers alike</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
