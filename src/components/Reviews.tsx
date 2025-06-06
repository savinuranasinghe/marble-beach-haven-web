
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "The best seafood experience in Sri Lanka! The crab curry was incredible and the sunset views are unmatched. Every dish was a perfect blend of traditional flavors and modern presentation.",
      source: "Google Review"
    },
    {
      name: "James T.",
      rating: 5,
      text: "Authentic Sri Lankan flavors with a modern twist. The ambiance by the beach is simply magical. The staff was knowledgeable about local ingredients and made excellent recommendations.",
      source: "TripAdvisor"
    },
    {
      name: "Priya R.",
      rating: 5,
      text: "Outstanding dining experience! The Jaffna prawn curry transported me back to my childhood, while the presentation was absolutely stunning. Will definitely return on our next visit.",
      source: "Google Review"
    },
    {
      name: "Michael K.",
      rating: 5,
      text: "Perfect for a special occasion. The fresh catch of the day was cooked to perfection, and dining with the sound of waves was incredibly romantic. Worth every penny!",
      source: "TripAdvisor"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Our Guests Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover why diners from around the world choose Marble Beach for their most memorable meals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.source}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  <p className="font-semibold text-primary">- {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recognition */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-8 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.9</div>
                <div className="flex justify-center space-x-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Google Reviews</div>
              </div>
              
              <div className="w-px h-12 bg-gray-300"></div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.8</div>
                <div className="flex justify-center space-x-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">TripAdvisor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
