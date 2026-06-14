import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion";

const Card = ({ children, className = "", hover = true, ...props }) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-md p-6 ${
        hover ? "hover:shadow-xl transition-shadow duration-300" : ""
      } ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
