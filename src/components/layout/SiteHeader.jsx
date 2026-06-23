import React, { useState } from "react";
import { fireSeasonAlert } from "../../data/siteContent";
import FireSeasonBanner from "../FireSeasonBanner";
import Navbar from "./Navbar";

const SiteHeader = () => {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const showBanner = fireSeasonAlert.enabled && !bannerDismissed;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {showBanner && (
        <FireSeasonBanner onDismiss={() => setBannerDismissed(true)} />
      )}
      <Navbar />
    </header>
  );
};

export default SiteHeader;
