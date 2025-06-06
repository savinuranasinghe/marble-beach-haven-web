
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Visit Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Located on Sri Lanka's stunning southern coast, we're ready to welcome you for an unforgettable dining experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Location</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Marble Beach Resort<br />
                        Galle Road, Southern Province<br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
                      <p className="text-muted-foreground">+94 11 234 5678</p>
                      <p className="text-sm text-muted-foreground mt-1">Available daily for reservations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
                      <p className="text-muted-foreground">reservations@marblebeachsl.com</p>
                      <p className="text-sm text-muted-foreground mt-1">For reservations and inquiries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Operating Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Sunday: 12:00 PM - 10:00 PM</p>
                        <p className="text-sm mt-2">
                          <span className="font-medium">Lunch:</span> 12:00 PM - 3:00 PM<br />
                          <span className="font-medium">Dinner:</span> 6:00 PM - 10:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="bg-slate-100 rounded-lg p-8 text-center">
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                    <p>Located along Sri Lanka's beautiful southern coastline</p>
                    <p className="mt-2 text-sm">Exact coordinates and directions available upon reservation</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-3">Getting Here</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• 2 hours drive from Colombo International Airport</p>
                  <p>• 30 minutes from Galle Fort</p>
                  <p>• Free parking available for guests</p>
                  <p>• Taxi and tuk-tuk services readily available</p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-3">Dining Information</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• <span className="font-medium">Dress Code:</span> Smart casual</p>
                  <p>• <span className="font-medium">Average Price:</span> $25-40 per person</p>
                  <p>• <span className="font-medium">Specialties:</span> Fresh seafood, Sri Lankan curries</p>
                  <p>• <span className="font-medium">Features:</span> Beachfront seating, sunset views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
