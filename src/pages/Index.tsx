import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuShowcase from "@/components/MenuShowcase";
import Gallery from "@/components/Gallery";
import ReservationForm from "@/components/ReservationForm";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  // Handle navigation state for scrolling to sections
  useEffect(() => {
    if (location.state?.scrollTo) {
      // Add a small delay to ensure the page has rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <MenuShowcase />
      <Gallery />
      <ReservationForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;