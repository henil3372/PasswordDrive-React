import React from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { NavigationSection } from "./sections/NavigationSection";
import { OverviewSection } from "./sections/OverviewSection";

interface OverviewProps {
  onNavigate?: (path: string) => void;
}

export const Overview = ({ onNavigate }: OverviewProps): JSX.Element => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-bg-grey">
      <HeaderSection />
      <div className="flex flex-1">
        <NavigationSection activePath="overview" onNavigate={onNavigate} />
        <OverviewSection />
      </div>
    </div>
  );
};
