import React from "react";

export const EmptyState = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="mx-auto mb-6"
        >
          <defs>
            <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#E0E7FF", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#C7D2FE", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M50 120 Q30 100 30 75 Q30 45 55 35 Q60 15 85 15 Q110 15 120 35 Q145 30 160 50 Q180 60 180 85 Q180 110 160 120 Z"
            fill="url(#cloudGradient)"
            opacity="0.6"
          />
          <rect x="70" y="80" width="25" height="25" fill="#93A5D1" rx="2" />
          <rect x="105" y="80" width="25" height="25" fill="#93A5D1" rx="2" />
          <rect x="70" y="115" width="25" height="25" fill="#93A5D1" rx="2" />
          <rect x="105" y="115" width="25" height="25" fill="#93A5D1" rx="2" />
        </svg>
      </div>
    </div>
  );
};
