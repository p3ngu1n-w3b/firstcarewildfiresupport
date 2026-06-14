import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion";

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  light = false,
  className = "",
}) => {
  return (
    <motion.div
      className={`text-center mb-12 ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {eyebrow && (
        <p
          className={`uppercase tracking-widest font-semibold mb-2 text-sm ${
            light ? "text-brand-hover" : "text-brand"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-4xl md:text-5xl font-bold ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-20 h-1 mx-auto mt-4 mb-6 ${
          light ? "bg-brand-hover" : "bg-brand"
        }`}
      />
      {subtitle && (
        <p
          className={`text-lg max-w-3xl mx-auto ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
