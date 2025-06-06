
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-blue-900 text-white py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-coral-400 rounded-full opacity-10 animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Restaurant Info */}
            <div className="md:col-span-2 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4 text-blue-200">Marble Beach Sri Lanka</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Contemporary Sri Lankan coastal dining experience featuring the freshest seafood and stunning ocean views.
              </p>
              <div className="space-y-2 text-blue-100">
                <p>📍 Marble Beach Resort, Galle Road, Southern Province, Sri Lanka</p>
                <p>📞 +94 11 234 5678</p>
                <p>✉️ reservations@marblebeachsl.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="text-lg font-semibold mb-4 text-blue-200">Quick Links</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#home" className="hover:text-white transition-colors hover:underline">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors hover:underline">About</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors hover:underline">Menu</a></li>
                <li><a href="#reservations" className="hover:text-white transition-colors hover:underline">Reservations</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors hover:underline">Gallery</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Hours & Social */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h4 className="text-lg font-semibold mb-4 text-blue-200">Opening Hours</h4>
              <div className="space-y-2 text-blue-100 mb-6">
                <p>Monday - Sunday</p>
                <p>12:00 PM - 10:00 PM</p>
                <p className="text-sm text-blue-200 mt-2">Lunch: 12:00 PM - 3:00 PM</p>
                <p className="text-sm text-blue-200">Dinner: 6:00 PM - 10:00 PM</p>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors transform hover:scale-110">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors transform hover:scale-110">
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors transform hover:scale-110">
                  <span className="sr-only">TripAdvisor</span>
                  🌐
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-blue-300/30 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-blue-100 text-sm mb-4 md:mb-0 animate-fade-in">
                © 2024 Marble Beach Sri Lanka. All rights reserved.
              </div>
              <div className="text-blue-200 text-sm animate-fade-in hover:text-white transition-colors">
                Developed by <span className="font-semibold text-coral-300">Divgaze</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
