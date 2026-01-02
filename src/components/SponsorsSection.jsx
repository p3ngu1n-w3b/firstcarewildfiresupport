import React, { useEffect, useState } from "react";

import nisproAutoLogo from "../assets/sponsors/nispro-auto-george.jpg";
import tyremartLogo from "../assets/sponsors/tyremart-george.png";
import thousandSensationsLogo from "../assets/sponsors/thousand-sensations-george.jpg";
import optimumHostingLogo from "../assets/sponsors/optimumhosting.jpg";
import theLocalChoiceLogo from "../assets/sponsors/theLocalChoiceLogo.png";
import cmsLogo from "../assets/sponsors/cmsLogo.jpg";

const sponsors = [
  {
    name: "Nispro Auto",
    logo: nisproAutoLogo,
    url: "https://nisproautogeorge.co.za/",
  },
  {
    name: "Tyremart",
    logo: tyremartLogo,
    url: "https://www.tyremart.co.za/",
  },
  {
    name: "Thousand Sensations",
    logo: thousandSensationsLogo,
    url: "https://thousandsensations.co.za/",
  },
  {
    name: "Optimum Hosting",
    logo: optimumHostingLogo,
    url: "https://www.ohs.co.za/",
  },
  {
    name: "The Local Choice",
    logo: theLocalChoiceLogo,
    urlDesktop: "https://www.facebook.com/TheLocalChoiceGrootbrak",
    urlMobile: "https://whatsapp.com/channel/0029VbBCelFInlqJbPjfVS0s",
  },
  {
    name: "CMS Towing",
    logo: cmsLogo,
    url: "https://www.facebook.com/profile.php?id=100063961935693",
  },
];

const SponsorsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!sponsors.length) return null;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Proud Sponsors
          </h2>
          <div className="w-16 h-1 bg-[rgb(252,3,13)] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor) => {
            const link =
              sponsor.name === "The Local Choice"
                ? isMobile
                  ? sponsor.urlMobile
                  : sponsor.urlDesktop
                : sponsor.url;

            return (
              <a
                key={sponsor.name}
                href={link}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
