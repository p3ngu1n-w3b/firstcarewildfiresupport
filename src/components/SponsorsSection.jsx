import React from "react";

const sponsors = [
  {
    name: "Nispro Auto",
    // TODO: Replace this with the actual path to the Optimum Hosting logo image
    // For example, if you place it in public/sponsors/optimum-hosting.png then:
    // logo: "/sponsors/optimum-hosting.png",
    logo: "src/assets/sponsors/nispro-auto-george.jpg",
    url: "https://nisproautogeorge.co.za/",
  },
  {
    name: "Tyremart",
    logo: "src/assets/sponsors/tyremart-george.png",
    url: "https://www.tyremart.co.za/",
  },
  {
    name: "Thousand Sensations",
    logo: "src/assets/sponsors/thousand-sensations-george.jpg",
    url: "https://thousandsensations.co.za/",
  },
];

const SponsorsSection = () => {
  if (!sponsors.length) return null;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Proud Sponsors</h2>
          <div className="w-16 h-1 bg-[rgb(252,3,13)] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;


