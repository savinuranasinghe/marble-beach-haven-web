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
                <p>Unawatuna, Galle</p>
                <p>Southern Province, Sri Lanka</p>
                <p className="text-xs text-gray-500 mt-2">6.010039, 80.249366</p>
              </div>
            </div>

            {/* Phone */}
            <div className="text-center">
              <h3 className="text-sm font-light tracking-wide uppercase text-gray-700 mb-4">
                Phone
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>+94 91 234 5678</p>
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

          {/* Map Section - Interactive Google Maps with Exact Location Marker */}
          <div className="mt-20">
            <div className="bg-gray-100 h-96 relative overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=6.010039,80.249366&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Marble Beach Sri Lanka - Exact Restaurant Location"
              ></iframe>
            </div>
          </div>

          {/* Directions */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-light tracking-wide text-black mb-6">
              HOW TO FIND US
            </h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-4">
                Marble Beach is located in Unawatuna along the scenic Galle Road on Sri Lanka's southern coast. 
                We're easily accessible by car, taxi, or tuk-tuk from major cities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From Colombo: Take the Southern Expressway to Galle, then follow Galle Road towards Unawatuna. 
                From Galle Fort: 6km southeast along Galle Road to our beachfront location.
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