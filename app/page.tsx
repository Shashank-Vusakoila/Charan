import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Founders from "@/components/Founders";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PageEffects from "@/components/PageEffects";
import Partners from "@/components/Partners";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import ValueProp from "@/components/ValueProp";

export default function Home() {
  return (
    <>
      <PageEffects />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <ValueProp />
        <Products />
        <Founders />
        <Partners />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
