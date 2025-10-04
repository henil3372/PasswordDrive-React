import React, { useState } from "react";
import { Overview } from "./screens/Overview";
import { PasswordGenerator } from "./screens/PasswordGenerator";
import { Vault } from "./screens/Vault";
import { Folders } from "./screens/Folders";

export const App = (): JSX.Element => {
  const [currentPath, setCurrentPath] = useState("folders");

  const renderScreen = () => {
    switch (currentPath) {
      case "vault":
        return <Vault onNavigate={setCurrentPath} />;
      case "password-generator":
        return <PasswordGenerator onNavigate={setCurrentPath} />;
      case "overview":
        return <Overview onNavigate={setCurrentPath} />;
      case "folders":
        return <Folders onNavigate={setCurrentPath} />;
      default:
        return <Folders onNavigate={setCurrentPath} />;
    }
  };

  return <>{renderScreen()}</>;
};
