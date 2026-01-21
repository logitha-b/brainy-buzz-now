import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import FeaturedEvents from "@/components/FeaturedEvents";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Categories />
      <FeaturedEvents />
      <Testimonials />
      <Partners />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
