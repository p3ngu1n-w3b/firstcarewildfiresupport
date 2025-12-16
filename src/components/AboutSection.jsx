import React from "react";
import workImage from "../assets/gallery/fws-team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Firstcare Wildfire Support</h2>
          <div className="w-16 h-1 bg-[rgb(252,3,13)] mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A trusted name in the Garden Route.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={workImage}
              alt="Firstcare Wildfire Support"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Established through passion for emergency services and helping our communities.
              FWS quickly became a trusted and respected name in the Garden Route and further afield.
              We already have very good working relationships with several Fire Departments, Southern Cape Fire Protection
              Association and Frie Management Units.
            </p>
            <p className="text-gray-600 mb-4">
              With combined experience of well over 50 years in wildland firefighting, FWS consistently deliver far beyond expectations.
            </p>
            <p className="text-gray-600">
              Are you looking for advice on fire safety, firebreaks, training of staff, combatting wildfires or executing control burns? 
              Contact Firstcare Wildfire Support for a consultation or quotation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
