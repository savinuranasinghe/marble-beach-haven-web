import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      alt: "Ocean View Dining"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      alt: "Fresh Daily Catch"
    },
    {
      src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
      alt: "Sunset Dining"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      alt: "Culinary Artistry"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      alt: "Beachfront Ambiance"
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      alt: "Ocean Waves"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-black mb-8">
            GALLERY
          </h2>
          <div className="w-24 h-px bg-black mx-auto"></div>
        </div>

        {/* Images Grid - Clean Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-square overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for enlarged images */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors font-light"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;