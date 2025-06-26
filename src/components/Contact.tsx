const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-black mb-8">
              VISIT US
            </h2>
            <div className="w-24 h-px bg-black mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Located on Sri Lanka's stunning southern coast, we're ready to welcome you 
              for an unforgettable dining experience.
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Address */}
            <div className="text-center">
              <h3 className="text-sm font-light tracking-wide uppercase text-gray-700 mb-4">
                Address
              </h3>
              <div className="space-y-2 text-gray-600 leading-relaxed">
                <p>Marble Beach Resort</p>
                <p>Galle Road</p>
                <p>Southern Province</p>
                <p>Sri Lanka</p>
              </div>
            </div>

            {/* Phone */}
            <div className="text-center">
              <h3 className="text-sm font-light tracking-wide uppercase text-gray-700 mb-4">
                Phone
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>+94 11 234 5678</p>
                <p className="text-sm text-gray-500">Reservations</p>
              </div>
            </div>

            {/* Email */}
            <div className="text-center">
              <h3 className="text-sm font-light tracking-wide uppercase text-gray-700 mb-4">
                Email
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>reservations@marblebeachsl.com</p>
                <p className="text-sm text-gray-500">Inquiries</p>
              </div>
            </div>

            {/* Hours */}
            <div className="text-center">
              <h3 className="text-sm font-light tracking-wide uppercase text-gray-700 mb-4">
                Opening Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Daily</p>
                <p>12:00 PM - 10:00 PM</p>
                <div className="pt-2 text-sm text-gray-500">
                  <p>Lunch: 12:00 - 3:00 PM</p>
                  <p>Dinner: 6:00 - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20">
            <div className="bg-gray-100 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm font-light">Interactive Map</p>
                <p className="text-xs text-gray-400 mt-1">Galle Road, Southern Province, Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-light tracking-wide text-black mb-6">
              HOW TO FIND US
            </h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-4">
                Marble Beach is located along the scenic Galle Road on Sri Lanka's southern coast. 
                We're easily accessible by car, taxi, or tuk-tuk from major cities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From Colombo: 2-hour drive south along the coastal highway. 
                From Galle: 30-minute drive north along Galle Road.
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-sm font-light tracking-wide uppercase text-gray-700 mb-6">
                Follow Us
              </h3>
              <div className="flex justify-center space-x-8">
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm tracking-wide">
                  INSTAGRAM
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm tracking-wide">
                  FACEBOOK
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm tracking-wide">
                  TRIPADVISOR
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;