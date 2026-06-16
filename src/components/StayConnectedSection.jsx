import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { social } from "../data/siteContent";
import SectionHeader from "./ui/SectionHeader";
import { fadeUp, staggerContainer } from "../utils/motion";

const StayConnectedSection = () => {
  return (
    <section className="py-20 section-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Stay Connected"
          subtitle="Follow us for fire season updates, training announcements, and community stories."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            variants={fadeUp}
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors">
              Facebook
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Follow our latest photos, fire response updates, and community
              stories.
            </p>
            <span className="inline-flex items-center gap-1 text-brand font-semibold text-sm mt-4">
              Visit Page <ExternalLink className="w-3 h-3" />
            </span>
          </motion.a>

          <motion.a
            variants={fadeUp}
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="50%" stopColor="#e6683c" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#ig)"
                  d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors">
              Instagram
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              See our team in action — training sessions, deployments, and behind
              the scenes.
            </p>
            <span className="inline-flex items-center gap-1 text-brand font-semibold text-sm mt-4">
              Follow Us <ExternalLink className="w-3 h-3" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default StayConnectedSection;
