import React, { useState } from "react";
import { Overview } from "./screens/Overview";
import { PasswordGenerator } from "./screens/PasswordGenerator";
import { Vault } from "./screens/Vault";

export const App = (): JSX.Element => {
  const [currentPath, setCurrentPath] = useState("vault");

  const renderScreen = () => {
    switch (currentPath) {
      case "vault":
        return <Vault onNavigate={setCurrentPath} />;
      case "password-generator":
        return <PasswordGenerator onNavigate={setCurrentPath} />;
      case "overview":
        return <Overview onNavigate={setCurrentPath} />;
      default:
        return <Vault onNavigate={setCurrentPath} />;
    }
  };

  return <>{renderScreen()}</>;
};
