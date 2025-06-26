import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuShowcase from "@/components/MenuShowcase";
import Gallery from "@/components/Gallery";
import ReservationForm from "@/components/ReservationForm";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
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