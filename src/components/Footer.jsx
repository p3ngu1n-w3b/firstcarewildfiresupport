import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Firstcare Wildfire Support</h3>
            <p className="mb-4">
              Fire Risk Reduction, Wildfire Prevention Training, Wildfire Support Services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">
              Phone:{" "}
              <a href="tel:0791909428" className="hover:underline">
                079 190 9428
              </a>
            </p>
            <p className="mb-2">
              Phone:{" "}
              <a href="tel:0843144323" className="hover:underline">
                084 314 4323
              </a>
            </p>
            <p className="mb-2">
              Email:{" "}
              <a href="mailto:firstcarewildfire@gmail.com" className="hover:underline">
                firstcarewildfire@gmail.com
              </a>
            </p>
            <p>Address: George, Western Cape</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p className="mb-2">24 hours,</p>
            <p>7 days a week.</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Firstcare Wildfire Support. All rights reserved.
          </p>
          <p>
            Hosting proudly sponsored by Optimum Hosting.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
