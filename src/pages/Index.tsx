
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuShowcase from "@/components/MenuShowcase";
import ReservationForm from "@/components/ReservationForm";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <MenuShowcase />
      <ReservationForm />
      <Gallery />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Index;
