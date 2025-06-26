import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ReservationForm = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const { toast } = useToast();

  const timeSlots = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !guests || !name || !email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Generate mock booking reference
    const bookingRef = `MB${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    toast({
      title: "Reservation Confirmed!",
      description: `Your table has been reserved. Booking reference: ${bookingRef}`,
    });

    // Reset form
    setDate(undefined);
    setTime("");
    setGuests("");
    setName("");
    setEmail("");
    setPhone("");
    setSpecialRequests("");
  };

  return (
    <section id="reservations" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-black mb-8">
              RESERVATIONS
            </h2>
            <div className="w-24 h-px bg-black mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Experience contemporary Sri Lankan coastal dining with panoramic ocean views. 
              Book your table for an unforgettable culinary journey.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white p-12 shadow-sm">
            <div className="space-y-8">
              
              {/* Date, Time, Guests Row */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Date Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-light tracking-wide uppercase text-gray-700">
                    Date *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-light h-12 rounded-none border-gray-300",
                          !date && "text-gray-400"
                        )}
                      >
                        <CalendarIcon className="mr-3 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-light tracking-wide uppercase text-gray-700">
                    Time *
                  </Label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger className="h-12 rounded-none border-gray-300 font-light">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Guests Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-light tracking-wide uppercase text-gray-700">
                    Guests *
                  </Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="h-12 rounded-none border-gray-300 font-light">
                      <SelectValue placeholder="Number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Name & Phone Row */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-sm font-light tracking-wide uppercase text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="h-12 rounded-none border-gray-300 font-light"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-light tracking-wide uppercase text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="h-12 rounded-none border-gray-300 font-light"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <Label className="text-sm font-light tracking-wide uppercase text-gray-700">
                  Email Address *
                </Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="h-12 rounded-none border-gray-300 font-light"
                />
              </div>

              {/* Special Requests */}
              <div className="space-y-3">
                <Label className="text-sm font-light tracking-wide uppercase text-gray-700">
                  Special Requests
                </Label>
                <Textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Any special dietary requirements, celebrations, or seating preferences?"
                  className="min-h-[100px] rounded-none border-gray-300 font-light resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button 
                  onClick={handleSubmit}
                  className="bg-black text-white hover:bg-gray-800 px-12 py-4 text-sm tracking-wide uppercase font-light rounded-none"
                >
                  Make Reservation
                </Button>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm font-light tracking-wide">
                Operating Hours: Daily 12:00 PM - 10:00 PM
              </p>
              <p className="text-gray-600 text-sm font-light tracking-wide mt-1">
                Dress Code: Smart Casual
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;