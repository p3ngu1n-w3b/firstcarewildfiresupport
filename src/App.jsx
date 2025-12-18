import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import SponsorsSection from "./components/SponsorsSection";
import DonationsSection from "./components/DonationsSection";

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      <DonationsSection />
      <ContactSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}

export default App;
