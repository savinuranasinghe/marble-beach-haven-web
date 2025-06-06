
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      alt: "Restaurant interior with ocean view",
      title: "Ocean View Dining"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      alt: "Fresh seafood platter",
      title: "Fresh Daily Catch"
    },
    {
      src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
      alt: "Sunset dining experience",
      title: "Sunset Dining"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      alt: "Chef preparing signature dish",
      title: "Culinary Artistry"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      alt: "Beachfront ambiance",
      title: "Beachfront Ambiance"
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      alt: "Ocean waves",
      title: "Pristine Location"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-coral-100 rounded-full opacity-15 animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-down">
              Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
              Immerse yourself in the beauty of our coastal setting and culinary artistry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>

          {/* Modal for enlarged images */}
          {selectedImage !== null && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-full animate-scale-in">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
