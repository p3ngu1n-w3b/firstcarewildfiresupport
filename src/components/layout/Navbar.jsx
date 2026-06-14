import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImage from "../../assets/logo/fws-logo.png";
import { navLinks } from "../../data/siteContent";
import { scrollToSection } from "../../utils/scroll";
import Button from "../ui/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setIsMenuOpen(false);

    if (link.type === "route") {
      navigate(link.path);
      return;
    }

    if (!isHome) {
      navigate("/");
      setTimeout(() => scrollToSection(link.id), 100);
      return;
    }

    scrollToSection(link.id);
  };

  const navBg =
    scrolled || !isHome
      ? "bg-white/95 backdrop-blur-md shadow-md text-gray-800"
      : "bg-transparent text-white";

  const logoTextColor =
    scrolled || !isHome ? "text-brand" : "text-white";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Skip to content
      </a>

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <Link
              to="/"
              className="flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src={logoImage}
                alt="Firstcare Wildfire Support Logo"
                className="w-16 h-16 object-contain"
              />
              <span
                className={`text-xl font-bold hidden sm:block transition-colors ${logoTextColor}`}
              >
                Firstcare Wildfire Support
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`nav-link ${
                    scrolled || !isHome ? "" : "text-white hover:text-brand-hover"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick({ id: "contact", type: "section" })}
                className="ml-2"
              >
                Contact Us
              </Button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg cursor-pointer ${
                scrolled || !isHome
                  ? "hover:bg-gray-100"
                  : "hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white text-gray-800 border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className="nav-mobile-link"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button
                  onClick={() =>
                    handleNavClick({ id: "donations", type: "section" })
                  }
                  className="w-full"
                >
                  Donate
                </Button>
                <Button
                  onClick={() =>
                    handleNavClick({ id: "contact", type: "section" })
                  }
                  className="w-full"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg flex">
        <a
          href="tel:0791909428"
          className="flex-1 py-3 text-center text-sm font-semibold text-brand border-r border-gray-200"
        >
          Call
        </a>
        <a
          href={`https://wa.me/27791909428`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 text-center text-sm font-semibold text-[#25d366] border-r border-gray-200"
        >
          WhatsApp
        </a>
        <button
          onClick={() => handleNavClick({ id: "donations", type: "section" })}
          className="flex-1 py-3 text-center text-sm font-semibold text-white bg-brand cursor-pointer"
        >
          Donate
        </button>
      </div>
    </>
  );
};

export default Navbar;
