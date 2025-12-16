import React, { useState, useEffect } from "react";
import logoImage from "../assets/logo/fws-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted state when component mounts on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id) => {
    if (typeof document !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        // Add offset to account for navbar height
        const navbarHeight = 80; // Approximate height of navbar in pixels
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-4">
          <div className="flex items-center">
            <img src={logoImage} alt="Firstcare Wildfire Support Logo" className="w-20" />
            <span className="text-2xl font-bold text-[#fc030d] pl-4">Firstcare Wildfire Support</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {mounted ? (
              <>
                <button
                  onClick={() => scrollToSection("home")}
                  className="nav-link"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="nav-link"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="nav-link"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="nav-link"
                >
                  Services
                </button>
                {/* <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button> */}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn"
                >
                  Contact Us
                </button>
              </>
            ) : (
              <>
                <span className="nav-link">Home</span>
                <span className="nav-link">About</span>
                <span className="nav-link">Gallery</span>
                <span className="nav-link">Services</span>
                {/* <span className="nav-link">Testimonials</span> */}
                <span className="btn">Contact Us</span>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => mounted && setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mounted && isMenuOpen && (
        <div className="md:hidden bg-white text-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className="nav-mobile-link"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="nav-mobile-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="nav-mobile-link"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="nav-mobile-link"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-4 text-center bg-[rgb(252,3,13)] rounded-xl w-1/2 mx-auto text-white cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
