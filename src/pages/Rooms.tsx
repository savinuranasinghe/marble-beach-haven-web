import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Wifi, Car, Waves, Coffee, Utensils, Dumbbell, Wind, Bed, Eye, Bath, Wine, Snowflake } from "lucide-react";

const Rooms = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const roomTypes = [
    {
      name: "Ocean View Suite",
      size: "65 sqm",
      occupancy: "2 Adults",
      price: "LKR 45,000",
      description: "Luxury suite with panoramic ocean views, private balcony, and direct beach access. Perfect for romantic getaways.",
      amenities: ["King Bed", "Ocean Balcony", "Marble Bathroom", "Minibar", "WiFi", "AC"],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      name: "Garden Villa",
      size: "55 sqm",
      occupancy: "2-3 Adults",
      price: "LKR 35,000",
      description: "Private villa surrounded by tropical gardens with outdoor shower and peaceful courtyard setting.",
      amenities: ["King/Twin Beds", "Garden View", "Outdoor Shower", "Minibar", "WiFi", "AC"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Beach Cabana",
      size: "40 sqm",
      occupancy: "2 Adults",
      price: "LKR 28,000",
      description: "Intimate beachfront accommodation with traditional Sri Lankan design and modern luxury amenities.",
      amenities: ["Queen Bed", "Beach Access", "Traditional Design", "Minibar", "WiFi", "AC"],
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Deluxe Room",
      size: "35 sqm",
      occupancy: "2 Adults",
      price: "LKR 22,000",
      description: "Elegant accommodation with contemporary design, garden or partial ocean views, and modern amenities.",
      amenities: ["King/Twin Beds", "Garden/Ocean View", "Modern Design", "Minibar", "WiFi", "AC"],
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const propertyAmenities = [
    { icon: Utensils, name: "Marble Beach Restaurant", description: "Priority reservations & in-room dining" },
    { icon: Waves, name: "Private Beach", description: "Exclusive beach access with loungers" },
    { icon: Dumbbell, name: "Fitness Center", description: "Modern gym with ocean views" },
    { icon: Wind, name: "Spa Services", description: "Traditional Ayurvedic treatments" },
    { icon: Wifi, name: "High-Speed WiFi", description: "Complimentary throughout property" },
    { icon: Car, name: "Airport Transfer", description: "Luxury transport available" }
  ];

  const getAmenityIcon = (amenity: string) => {
    const iconMap: { [key: string]: any } = {
      "King Bed": Bed,
      "King/Twin Beds": Bed,
      "Queen Bed": Bed,
      "Ocean Balcony": Eye,
      "Garden View": Eye,
      "Ocean View": Eye,
      "Beach Access": Waves,
      "Marble Bathroom": Bath,
      "Outdoor Shower": Bath,
      "Modern Design": Bath,
      "Traditional Design": Bath,
      "Minibar": Wine,
      "WiFi": Wifi,
      "AC": Snowflake
    };
    
    return iconMap[amenity] || Coffee; // Default icon if not found
  };

  const packages = [
    {
      name: "Dine & Stay Package",
      description: "2 nights accommodation with daily breakfast and one dinner at Marble Beach Restaurant",
      savings: "Save 20%",
      color: "bg-gray-100 border-gray-300"
    },
    {
      name: "Romantic Getaway",
      description: "3 nights in Ocean View Suite with couples spa treatment and private beach dinner",
      savings: "Save 25%",
      color: "bg-stone-100 border-stone-300"
    },
    {
      name: "Extended Stay",
      description: "7+ nights accommodation with daily breakfast and weekly spa treatment",
      savings: "Save 30%",
      color: "bg-slate-100 border-slate-300"
    }
  ];

  const RoomCard = ({ room }: { room: any }) => (
    <div className={`bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${room.featured ? 'ring-2 ring-yellow-400' : ''}`}>
      {room.featured && (
        <div className="bg-yellow-400 text-black text-center py-2 text-sm font-bold">
          MOST POPULAR
        </div>
      )}
      <div className="relative h-64">
        <img 
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-light tracking-wide text-black">{room.name}</h3>
          <div className="text-right">
            <p className="text-2xl font-light text-black">{room.price}</p>
            <p className="text-sm text-gray-500">per night</p>
          </div>
        </div>
        
        <div className="flex gap-4 text-sm text-gray-600 mb-4">
          <span>{room.size}</span>
          <span>•</span>
          <span>{room.occupancy}</span>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-4">{room.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-6">
          {room.amenities.map((amenity: string, index: number) => {
            const IconComponent = getAmenityIcon(amenity);
            return (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <IconComponent className="w-4 h-4 text-black" />
                <span>{amenity}</span>
              </div>
            );
          })}
        </div>
        
        <Button className="w-full bg-black text-white border border-black hover:bg-transparent hover:text-black py-3 text-sm tracking-wide uppercase font-bold rounded-none transition-all duration-300">
          Select Room
        </Button>
      </div>
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
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=2000&q=80"
            alt="Marble Beach Resort Ocean View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl font-light tracking-[0.3em] mb-4">
            LUXURY SUITES
          </h1>
          <div className="w-24 h-px bg-white mx-auto mb-4"></div>
          <p className="text-white text-xl md:text-2xl font-light tracking-[0.2em] mb-8">
            COASTAL ACCOMMODATION
          </p>
          <p className="text-white text-lg max-w-2xl leading-relaxed opacity-90">
            Oceanfront luxury accommodation with world-class dining and pristine beach access
          </p>
        </div>
      </section>

      {/* Quick Booking Widget */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-light tracking-wide text-center mb-8">Check Availability</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <Label className="text-sm font-light tracking-wide uppercase text-gray-700 mb-2 block">
                  Check In
                </Label>
                <Input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="h-12 rounded-none border-gray-300"
                />
              </div>
              <div>
                <Label className="text-sm font-light tracking-wide uppercase text-gray-700 mb-2 block">
                  Check Out
                </Label>
                <Input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="h-12 rounded-none border-gray-300"
                />
              </div>
              <div>
                <Label className="text-sm font-light tracking-wide uppercase text-gray-700 mb-2 block">
                  Guests
                </Label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="h-12 rounded-none border-gray-300">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full h-12 bg-black text-white border border-black hover:bg-transparent hover:text-black rounded-none text-sm tracking-wide uppercase font-bold transition-all duration-300">
                  Search Rooms
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-8 text-black">
              Accommodation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of luxury rooms and villas, each designed to provide 
              the ultimate coastal retreat experience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
            {roomTypes.map((room, index) => (
              <RoomCard key={index} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Property Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-8 text-black">
              Resort Amenities
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {propertyAmenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <amenity.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-light tracking-wide text-black mb-2">
                  {amenity.name}
                </h3>
                <p className="text-gray-600">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-8 text-black">
              Special Packages
            </h2>
          </div>
          
                      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`p-8 border-2 ${pkg.color} flex flex-col h-full`}>
                <div className="text-center flex-grow">
                  <span className="inline-block bg-black text-white px-3 py-1 text-xs font-bold rounded-full mb-4">
                    {pkg.savings}
                  </span>
                  <h3 className="text-2xl font-light tracking-wide text-black mb-4">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-700 mb-6 flex-grow">
                    {pkg.description}
                  </p>
                </div>
                <div className="text-center">
                  <Button className="bg-black text-white hover:bg-transparent hover:text-black border border-black px-6 py-2 text-sm tracking-wide uppercase font-bold rounded-none transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies & Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light tracking-wide mb-12 text-center text-black">
              Important Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-light tracking-wide text-black mb-4">Check-in & Check-out</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Check-in: 3:00 PM</li>
                  <li>• Check-out: 12:00 PM</li>
                  <li>• Early check-in subject to availability</li>
                  <li>• Late check-out available for additional fee</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-light tracking-wide text-black mb-4">Cancellation Policy</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Free cancellation up to 48 hours before arrival</li>
                  <li>• 50% charge for cancellations within 48 hours</li>
                  <li>• No-show: full charge applies</li>
                  <li>• Special rates may have different policies</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-light tracking-wide text-black mb-4">Property Policies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Minimum age for check-in: 18 years</li>
                  <li>• Valid ID required at check-in</li>
                  <li>• Smoking permitted in designated areas only</li>
                  <li>• Pet-friendly (additional charges apply)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-light tracking-wide text-black mb-4">Contact & Location</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Galle Road, Unawatuna, Galle</li>
                  <li>• 5 minutes from Galle Fort</li>
                  <li>• Airport transfer: 2.5 hours</li>
                  <li>• Phone: +94 91 234 5678</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              Ready to Experience Marble Beach?
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Book your luxury coastal retreat and enjoy world-class accommodation 
              with unparalleled dining and pristine beach access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black border border-white hover:bg-transparent hover:text-white px-8 py-3 text-sm tracking-wide uppercase font-bold rounded-none transition-all duration-300">
                Book Now
              </Button>
              <Button 
                onClick={makeReservation}
                className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-8 py-3 text-sm tracking-wide uppercase font-bold rounded-none transition-all duration-300"
              >
                Restaurant Reservations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;