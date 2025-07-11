import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    {
      src: "https://res.cloudinary.com/dkpuabgjl/image/upload/v1752260367/ChatGPT_Image_Jul_12_2025_at_12_28_46_AM_jdxo4o.png",
      alt: "Ocean View Dining"
    },
    {
      src: "https://res.cloudinary.com/dkpuabgjl/image/upload/v1752259172/ChatGPT_Image_Jul_12_2025_at_12_08_01_AM_vjv4en.png",
      alt: "Fresh Daily Catch"
    },
    {
      src: "https://res.cloudinary.com/dkpuabgjl/image/upload/v1752253413/ChatGPT_Image_Jul_11_2025_at_10_32_53_PM_ckjvri.png",
      alt: "Sunset Dining"
    },
    {
      src: "https://res.cloudinary.com/dkpuabgjl/image/upload/v1752263129/ChatGPT_Image_Jul_12_2025_at_01_13_13_AM_ns4cdb.png",
      alt: "Culinary Artistry"
    },
    {
      src: "https://res.cloudinary.com/dkpuabgjl/image/upload/v1752267401/ChatGPT_Image_Jul_12_2025_at_02_26_07_AM_annt4p.png",
      alt: "Beachfront Ambiance"
    },
    {
      src: "https://res.cloudinary.com/dkpuabgjl/image/upload/v1752263287/ChatGPT_Image_Jul_12_2025_at_01_17_41_AM_p9s7c5.png",
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

        {/* Images Grid - Mobile: 2 columns, Desktop: 3 columns */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
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