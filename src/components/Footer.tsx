const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            {/* Restaurant Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-light tracking-wide mb-6">
                MARBLE BEACH
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Contemporary Sri Lankan coastal dining experience featuring the freshest seafood 
                and stunning ocean views on the beautiful southern coast.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Galle Road, Unawatuna, Galle</p>
                <p>Southern Province, Sri Lanka</p>
                <p className="pt-2">+94 91 234 5678</p>
                <p>reservations@marblebeachsl.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-light tracking-wide uppercase text-gray-300 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-white transition-colors">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-white transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#reservations" className="hover:text-white transition-colors">
                    Reservations
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-sm font-light tracking-wide uppercase text-gray-300 mb-6">
                Opening Hours
              </h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <div>
                  <p className="text-white">Daily</p>
                  <p>12:00 PM - 10:00 PM</p>
                </div>
                <div className="pt-3">
                  <p className="text-gray-500">Lunch: 12:00 - 3:00 PM</p>
                  <p className="text-gray-500">Dinner: 6:00 - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Social Links */}
            <div className="flex space-x-8 mb-6 md:mb-0">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide"
              >
                INSTAGRAM
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide"
              >
                FACEBOOK
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide"
              >
                TRIPADVISOR
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm mb-2">
                © 2024 Marble Beach Sri Lanka. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs">
                Developed by{" "}
                <a 
                  href="https://www.divgaze.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Divgaze
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;