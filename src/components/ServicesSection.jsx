import React from "react";
import {
  Calendar,
  MessageCircle,
  Flame,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import { services } from "../data/siteContent";
import { scrollToSection } from "../utils/scroll";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import { staggerContainer, fadeUp } from "../utils/motion";

const iconMap = {
  calendar: Calendar,
  message: MessageCircle,
  flame: Flame,
  graduation: GraduationCap,
};

const ServicesSection = () => {
  const handleServiceClick = (serviceId) => {
    scrollToSection("contact");
    setTimeout(() => {
      const select = document.getElementById("service");
      if (select) {
        const labelMap = {
          events: "Events",
          consultation: "Consultation",
          "control-burns": "Control Burns",
          training: "Training",
        };
        select.value = labelMap[serviceId] || "";
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }, 500);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          subtitle="Assisting and combatting wildfires, veldfires and structure protection."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div key={service.id} variants={fadeUp}>
                <Card
                  className="h-full border border-transparent hover:border-brand/30 cursor-pointer group"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
