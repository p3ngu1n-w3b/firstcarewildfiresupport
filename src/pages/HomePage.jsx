import React from "react";
import HeroSection from "../components/HeroSection";
import ImpactStats from "../components/ImpactStats";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import DonationsSection from "../components/DonationsSection";
import StayConnectedSection from "../components/StayConnectedSection";
import ContactSection from "../components/ContactSection";
import SponsorsSection from "../components/SponsorsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <AboutSection />
      <ServicesSection />
      <GallerySection preview />
      <TestimonialsSection />
      <DonationsSection />
      <StayConnectedSection />
      <ContactSection />
      <SponsorsSection />
    </>
  );
};

export default HomePage;
