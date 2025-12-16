import React from "react";
import headerImg from "../assets/gallery/Header.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    if (typeof document !== "undefined") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${headerImg})`,
      }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Fire Risk Reduction
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Wildfire Prevention Training
        </h1>
        <button onClick={scrollToContact} className="btn mt-8">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
