import React from "react";
import { motion } from "framer-motion";
import workImage from "../assets/gallery/fws-team.jpg";
import { trustedBy } from "../data/siteContent";
import SectionHeader from "./ui/SectionHeader";
import { fadeUp } from "../utils/motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Firstcare Wildfire Support"
          subtitle="A trusted name in the Garden Route and beyond."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={workImage}
              alt="Firstcare Wildfire Support team"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand text-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm font-medium opacity-90">
                Years of combined wildland firefighting experience
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Established through passion for emergency services and helping our
              communities. FWS quickly became a trusted and respected name in
              the Garden Route and further afield. We have strong working
              relationships with several Fire Departments, the Southern Cape
              Fire Protection Association, and Fire Management Units.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With combined experience of well over 50 years in wildland
              firefighting, FWS consistently delivers far beyond expectations.
            </p>

            <blockquote className="border-l-4 border-brand pl-4 mb-8 text-gray-700 italic">
              "Are you looking for advice on fire safety, firebreaks, training
              of staff, combatting wildfires or executing control burns? Contact
              us for a consultation or quotation."
            </blockquote>

            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Trusted by
              </p>
              <div className="flex flex-wrap gap-3">
                {trustedBy.map((name) => (
                  <span
                    key={name}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
