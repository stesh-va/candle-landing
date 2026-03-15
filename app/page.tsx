import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import AboutProduct from "@/components/AboutProduct";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Audience />
        <AboutProduct />
        <Benefits />
        <HowItWorks />
        <Products />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
