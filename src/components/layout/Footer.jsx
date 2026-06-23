import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { contact, social } from "../../data/siteContent";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-24 md:pb-8">
      <div className="bg-brand py-3 px-4 text-center text-sm font-semibold">
        <p className="mb-2 sm:mb-1">24/7 Emergency Support</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
          <a
            href={`tel:${contact.phones[0].tel}`}
            className="underline whitespace-nowrap"
          >
            {contact.phones[0].display}
          </a>
          <span className="hidden sm:inline">or</span>
          <a
            href={`tel:${contact.phones[1].tel}`}
            className="underline whitespace-nowrap"
          >
            {contact.phones[1].display}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Firstcare Wildfire Support
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Fire risk reduction, wildfire prevention, and professional
              training across the Garden Route. Protecting communities when it
              matters most.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#donations" className="hover:text-white transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand flex-shrink-0" />
                <a
                  href={`tel:${contact.phones[0].tel}`}
                  className="hover:text-white"
                >
                  {contact.phones[0].display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand flex-shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand flex-shrink-0" />
                {contact.location}
              </li>
            </ul>

            <div className="flex gap-4 mt-4">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm space-y-2">
          <p>
            &copy; {new Date().getFullYear()} Firstcare Wildfire Support. All
            rights reserved.
          </p>
          <p>Hosting proudly sponsored by Optimum Hosting.</p>
          <p>
            Website by{" "}
            <a
              href="https://www.linkedin.com/in/jaco-roux/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              Jaco Roux
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
