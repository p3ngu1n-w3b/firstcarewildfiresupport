import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Events",
      description:
        "Providing fire safety services at various events.",
      icon: "🎪",
    },
    {
      title: "Consultation",
      description:
        "Assisting landowners with reducing fire risks on their properties.",
      icon: "💬",
    },
    {
      title: "Control Burns",
      description:
        "Planning and executing all types of control burns fore landowners. From stackburns, grass burns and large ecological burns, we do it all.",
      icon: "🔥",
    },
    {
      title: "Training",
      description:
        "We offer the following training. Accredited First Aid, Fire Marshall / use of extinguishers, Basic Wildfire Trainging, Snake Awareness Workshops, First aid Workshops.",
      icon: "🎓",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <div className="w-16 h-1 bg-[rgb(252,3,13)] mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Assisting and combatting wilfires, veldfires and structure protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
