import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import headerImg from "../assets/gallery/Header.jpg";
import { heroTaglines } from "../data/siteContent";
import { scrollToSection } from "../utils/scroll";
import Button from "./ui/Button";

const HeroSection = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % heroTaglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns"
          style={{ backgroundImage: `url(${headerImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-brand-dark/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-20">
        <motion.p
          className="uppercase tracking-[0.3em] text-brand-hover text-sm font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Garden Route, Western Cape
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Protecting the Garden Route
        </motion.h1>

        <motion.div
          className="h-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p
            key={taglineIndex}
            className="text-xl md:text-2xl text-gray-200 font-medium animate-[fadeIn_0.5s_ease-out]"
          >
            {heroTaglines[taglineIndex]}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button onClick={() => scrollToSection("contact")}>
            Get Help Now
          </Button>
          <Button variant="outline" onClick={() => scrollToSection("donations")}>
            Support Our Team
          </Button>
        </motion.div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer bounce-subtle"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
