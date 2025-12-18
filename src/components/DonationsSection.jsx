import React from "react";

const DonationsSection = () => {
  return (
    <section id="donations" className="py-20 bg-gradient-to-b from-white via-red-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="uppercase tracking-widest text-[rgb(252,3,13)] font-semibold mb-2">
            Support our volunteers
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Fire season is here
          </h2>
          <div className="w-24 h-1 bg-[rgb(252,3,13)] mx-auto mt-4"></div>
        </div>

        <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 space-y-8 border border-[rgb(252,3,13)]/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-lg text-gray-800 leading-relaxed md:max-w-xl">
              Help us to make a difference as a volunteer organisation we are
              reliant on donations and sponsorships to continue assisting the
              communities of the western cape in the fight against fire.
            </p>
            <div className="bg-[rgb(252,3,13)] text-white rounded-xl px-6 py-4 text-center shadow-md">
              <p className="text-sm font-semibold uppercase tracking-wide">
                Every donation helps
              </p>
              <p className="text-lg font-bold mt-1">No amount is too small</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="inline-block w-2 h-6 bg-[rgb(252,3,13)] rounded-full"></span>
                Bank details
              </h3>
              <dl className="space-y-1 text-gray-800">
                <div>
                  <dt className="font-medium">Account type</dt>
                  <dd>Capitec savings account</dd>
                </div>
                <div>
                  <dt className="font-medium">Account name</dt>
                  <dd>Firstcare Wildfire</dd>
                </div>
                <div>
                  <dt className="font-medium">Account number</dt>
                  <dd>196758637</dd>
                </div>
                <div>
                  <dt className="font-medium">Reference</dt>
                  <dd className="font-semibold text-[rgb(252,3,13)]">
                    Wildfire
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sponsorships & enquiries
              </h3>
              <p className="text-gray-800 leading-relaxed">
                For other sponsorhips please contact 
              </p>
              <p className="text-gray-800 leading-relaxed">Charlene on{" "}
                <a
                  href="tel:0843144323"
                  className="font-semibold text-[rgb(252,3,13)]"
                >
                  084 314 4323
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:firstcarewildfire@gmail.com"
                  className="font-semibold text-[rgb(252,3,13)]"
                >
                  firstcarewildfire@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationsSection;


