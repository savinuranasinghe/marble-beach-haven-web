
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Marble Beach</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection("menu")} className="text-foreground hover:text-primary transition-colors">Menu</button>
            <button onClick={() => scrollToSection("reservations")} className="text-foreground hover:text-primary transition-colors">Reservations</button>
            <button onClick={() => scrollToSection("gallery")} className="text-foreground hover:text-primary transition-colors">Gallery</button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">Contact</button>
          </div>

          <Button onClick={() => scrollToSection("reservations")} className="hidden md:block bg-blue-600 hover:bg-blue-700">
            Reserve Table
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-2 pt-4">
              <button onClick={() => scrollToSection("home")} className="text-left py-2 text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection("about")} className="text-left py-2 text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection("menu")} className="text-left py-2 text-foreground hover:text-primary transition-colors">Menu</button>
              <button onClick={() => scrollToSection("reservations")} className="text-left py-2 text-foreground hover:text-primary transition-colors">Reservations</button>
              <button onClick={() => scrollToSection("gallery")} className="text-left py-2 text-foreground hover:text-primary transition-colors">Gallery</button>
              <button onClick={() => scrollToSection("contact")} className="text-left py-2 text-foreground hover:text-primary transition-colors">Contact</button>
              <Button onClick={() => scrollToSection("reservations")} className="mt-4 bg-blue-600 hover:bg-blue-700">
                Reserve Table
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
