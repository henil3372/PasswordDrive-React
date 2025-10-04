import React from "react";
import { Button } from "../../../../components/ui/button";

interface NavigationItem {
  icon: string;
  label: string;
  isActive: boolean;
  path: string;
}

interface NavigationSectionProps {
  activePath?: string;
  onNavigate?: (path: string) => void;
}

export const NavigationSection = ({
  activePath = "overview",
  onNavigate
}: NavigationSectionProps): JSX.Element => {
  const navigationItems: NavigationItem[] = [
    {
      icon: "/home.svg",
      label: "Vault",
      isActive: activePath === "vault",
      path: "vault",
    },
    {
      icon: "/verified-user.svg",
      label: "Password generator",
      isActive: activePath === "password-generator",
      path: "password-generator",
    },
    {
      icon: "/visibility.svg",
      label: "Overview",
      isActive: activePath === "overview",
      path: "overview",
    },
  ];

  return (
    <nav className="flex flex-col gap-4 pt-4 bg-bg-white">
      {navigationItems.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          onClick={() => onNavigate?.(item.path)}
          className={`h-9 justify-start gap-3 px-5 py-2 rounded-[0px_100px_100px_0px] ${
            item.isActive
              ? "bg-light-blue hover:bg-light-blue"
              : "hover:bg-light-blue/50"
          }`}
        >
          <img className="w-5 h-5" alt={item.label} src={item.icon} />
          <span
            className={`font-[number:var(--desktop-secondary-b1-${
              item.isActive ? "500" : "400"
            }-font-weight)] ${
              item.isActive ? "text-sea-blue" : "text-type-grey-2"
            } font-desktop-secondary-b1-${
              item.isActive ? "500" : "400"
            } text-[length:var(--desktop-secondary-b1-${
              item.isActive ? "500" : "400"
            }-font-size)] tracking-[var(--desktop-secondary-b1-${
              item.isActive ? "500" : "400"
            }-letter-spacing)] leading-[var(--desktop-secondary-b1-${
              item.isActive ? "500" : "400"
            }-line-height)] [font-style:var(--desktop-secondary-b1-${
              item.isActive ? "500" : "400"
            }-font-style)]`}
          >
            {item.label}
          </span>
        </Button>
      ))}
    </nav>
  );
};
