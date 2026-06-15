import React from "react";
import { AlertTriangle, X } from "lucide-react";
import { fireSeasonAlert } from "../data/siteContent";

const FireSeasonBanner = ({ onDismiss }) => {
  const tickerContent = (
    <>
      <span className="inline-flex items-center gap-2 mx-8">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
        <span className="font-medium">{fireSeasonAlert.message}</span>
      </span>
      <span className="inline-flex items-center gap-2 mx-8" aria-hidden="true">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
        <span className="font-medium">{fireSeasonAlert.message}</span>
      </span>
    </>
  );

  return (
    <div className="bg-brand text-white text-sm border-b border-white/10">
      <div className="flex items-center">
        <div className="flex-1 overflow-hidden py-2.5">
          <div className="alert-marquee-track flex w-max">{tickerContent}</div>
        </div>
        <button
          onClick={onDismiss}
          className="flex-shrink-0 p-2.5 hover:bg-white/20 transition-colors cursor-pointer border-l border-white/10"
          aria-label="Dismiss fire season alert"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FireSeasonBanner;
