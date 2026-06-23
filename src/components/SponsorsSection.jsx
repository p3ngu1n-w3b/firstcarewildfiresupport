import React, { useEffect, useState } from "react";
import { sponsors } from "../data/siteContent";
import SectionHeader from "./ui/SectionHeader";

const SponsorsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getSponsorUrl = (sponsor) => {
    if (sponsor.name === "The Local Choice") {
      return isMobile ? sponsor.urlMobile : sponsor.urlDesktop;
    }
    return sponsor.url;
  };

  const marqueeSponsors = [...sponsors, ...sponsors];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <SectionHeader title="Proud Sponsors" />
      </div>

      <div className="relative">
        <div className="flex marquee-track w-max">
          {marqueeSponsors.map((sponsor, index) => (
            <a
              key={`${sponsor.name}-${index}`}
              href={getSponsorUrl(sponsor)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mx-10 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className={
                  sponsor.logoClassName ?? "max-h-14 w-auto object-contain"
                }
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
