import React, { useState, useEffect } from "react";
import { HeaderSection } from "../Overview/sections/HeaderSection";
import { NavigationSection } from "../Overview/sections/NavigationSection";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Switch } from "../../components/ui/switch";
import { Shield, Copy } from "lucide-react";

interface PasswordGeneratorProps {
  onNavigate?: (path: string) => void;
}

export const PasswordGenerator = ({ onNavigate }: PasswordGeneratorProps): JSX.Element => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(20);
  const [entropy, setEntropy] = useState(128);
  const [customSymbols, setCustomSymbols] = useState("");
  const [options, setOptions] = useState({
    numbers: true,
    lowercase: true,
    uppercase: true,
    symbols: true,
    space: true,
  });

  const generatePassword = () => {
    let chars = "";
    if (options.numbers) chars += "0123456789";
    if (options.lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (options.uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    if (options.space) chars += " ";
    if (customSymbols) chars += customSymbols;

    if (!chars) chars = "abcdefghijklmnopqrstuvwxyz";

    let result = "";
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      result += chars[array[i] % chars.length];
    }

    setPassword(result);
  };

  useEffect(() => {
    generatePassword();
  }, [length, entropy, customSymbols, options]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  const getStrength = () => {
    if (password.length >= 16) return "Secure";
    if (password.length >= 12) return "Good";
    return "Weak";
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-bg-grey">
      <HeaderSection />
      <div className="flex flex-1">
        <NavigationSection activePath="password-generator" onNavigate={onNavigate} />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-medium text-gray-900 mb-6">Password generator</h1>

          <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="white" opacity="0.3"/>
              </svg>
            </div>
            <div className="relative">
              <p className="text-white text-3xl font-mono mb-6 break-all">{password}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">{getStrength()}</span>
                </div>
                <Button
                  onClick={copyToClipboard}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium"
                >
                  Copy
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 mb-6">
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Length</label>
                <Input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  min="8"
                  max="128"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Entropy</label>
                <Input
                  type="number"
                  value={entropy}
                  onChange={(e) => setEntropy(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Custom symbols</label>
                <Input
                  type="text"
                  value={customSymbols}
                  onChange={(e) => setCustomSymbols(e.target.value)}
                  placeholder="Add the characters that you would like to see in the password"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-700">Numbers 0-9</span>
                <Switch
                  checked={options.numbers}
                  onCheckedChange={(checked) => setOptions({ ...options, numbers: checked })}
                />
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-700">Lowercase a-z</span>
                <Switch
                  checked={options.lowercase}
                  onCheckedChange={(checked) => setOptions({ ...options, lowercase: checked })}
                />
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-700">Uppercase A-Z</span>
                <Switch
                  checked={options.uppercase}
                  onCheckedChange={(checked) => setOptions({ ...options, uppercase: checked })}
                />
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-700">ASCII symbols !@#*</span>
                <Switch
                  checked={options.symbols}
                  onCheckedChange={(checked) => setOptions({ ...options, symbols: checked })}
                />
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-700">Space</span>
                <Switch
                  checked={options.space}
                  onCheckedChange={(checked) => setOptions({ ...options, space: checked })}
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 flex items-start gap-6">
            <div className="flex-shrink-0">
              <svg width="120" height="120" viewBox="0 0 120 120" className="text-blue-300">
                <circle cx="40" cy="70" r="25" fill="currentColor" opacity="0.6"/>
                <circle cx="80" cy="70" r="20" fill="currentColor" opacity="0.4"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">What is a random password generator?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A random password generator is a tool that frees you from having to constantly come up with
                unique passwords for each of your sites.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
