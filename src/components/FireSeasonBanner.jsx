import React, { useState } from "react";
import { AlertTriangle, X } from "lucide-react";
import { fireSeasonAlert } from "../data/siteContent";

const FireSeasonBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  if (!fireSeasonAlert.enabled || dismissed) return null;

  return (
    <div className="bg-brand text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <p className="truncate font-medium">{fireSeasonAlert.message}</p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 rounded hover:bg-white/20 transition-colors flex-shrink-0 cursor-pointer"
          aria-label="Dismiss alert"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FireSeasonBanner;
