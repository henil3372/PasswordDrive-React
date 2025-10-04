import React, { useState } from "react";
import { HeaderSection } from "../Overview/sections/HeaderSection";
import { NavigationSection } from "../Overview/sections/NavigationSection";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Plus, MoveVertical as MoreVertical, Wifi, CreditCard, Twitter, DollarSign } from "lucide-react";
import { VaultDetailPanel } from "./components/VaultDetailPanel";
import { VaultEditPanel } from "./components/VaultEditPanel";
import { AddVaultMenu } from "./components/AddVaultMenu";
import { EmptyState } from "./components/EmptyState";

interface Folder {
  id: string;
  name: string;
  icon: string;
  ownerCount: number;
  fileCount: number;
}

interface VaultItem {
  id: string;
  name: string;
  email: string;
  password: string;
  website: string;
  folder: string;
  icon: React.ReactNode;
  color: string;
}

interface VaultProps {
  onNavigate?: (path: string) => void;
}

export const Vault = ({ onNavigate }: VaultProps): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("Last used");
  const [selectedVault, setSelectedVault] = useState<VaultItem | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddMenu, setShowAddMenu] = useState(false);

  const categories = [
    { id: "last-used", label: "Last used", icon: "clock" },
    { id: "general", label: "General", icon: "grid" },
    { id: "shared", label: "Shared with me", icon: "users" },
    { id: "work", label: "Work", icon: "briefcase" },
    { id: "social", label: "Social media", icon: "share" },
    { id: "shopping", label: "Shopping", icon: "shopping-cart" },
    { id: "travel", label: "Travel", icon: "plane" },
    { id: "banking", label: "Banking", icon: "dollar" },
    { id: "emails", label: "Emails", icon: "mail" },
  ];

  const folders: Folder[] = [
    { id: "1", name: "Home Internet", icon: "github", ownerCount: 1, fileCount: 52 },
    { id: "2", name: "Office", icon: "users", ownerCount: 15, fileCount: 120 },
    { id: "3", name: "Test 1213", icon: "folder", ownerCount: 3, fileCount: 1 },
  ];

  const vaults: VaultItem[] = [
    {
      id: "1",
      name: "Test 3333",
      email: "",
      password: "password123",
      website: "test3333.com",
      folder: "General/Others",
      icon: <Wifi className="w-6 h-6 text-white" />,
      color: "bg-green-500",
    },
    {
      id: "2",
      name: "Test 123 1",
      email: "",
      password: "password123",
      website: "test123.com",
      folder: "General/Others",
      icon: <CreditCard className="w-6 h-6 text-white" />,
      color: "bg-yellow-500",
    },
    {
      id: "3",
      name: "VK",
      email: "fabolcbz43@rc3s.com",
      password: "password123",
      website: "vk.com",
      folder: "General/Others",
      icon: <div className="w-6 h-6 bg-white rounded text-blue-600 flex items-center justify-center font-bold">VK</div>,
      color: "bg-blue-600",
    },
    {
      id: "4",
      name: "Amazon",
      email: "namoha7995@kamaelii.com",
      password: "password123",
      website: "amazon.com",
      folder: "General/Others",
      icon: <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-yellow-600">a</div>,
      color: "bg-yellow-400",
    },
    {
      id: "5",
      name: "Wikipedia",
      email: "sakura789@jihhp.com",
      password: "password123",
      website: "wikipedia.org",
      folder: "General/Others",
      icon: <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold">W</div>,
      color: "bg-gray-800",
    },
    {
      id: "6",
      name: "Twitter",
      email: "namoha7995@kamaelii.com",
      password: "1111111",
      website: "twitter.com",
      folder: "General/Others",
      icon: <Twitter className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
    },
    {
      id: "7",
      name: "jim@drivepasssaw...",
      email: "jimj@drivepasssaword.comd...",
      password: "password123",
      website: "drivepasssaword.com",
      folder: "General/Others",
      icon: <DollarSign className="w-6 h-6 text-white" />,
      color: "bg-red-500",
    },
  ];

  const handleVaultClick = (vault: VaultItem) => {
    setSelectedVault(vault);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (data: any) => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    setSelectedVault(null);
  };

  const handleClone = () => {
    console.log("Clone vault");
  };

  const handleAddOption = (option: "category" | "folder" | "team" | "vault") => {
    console.log("Add", option);
  };

  const showFoldersAndVaults = activeCategory === "Last used";
  const showEmptyState = activeCategory === "General";

  return (
    <div className="w-full min-h-screen flex flex-col bg-bg-grey">
      <HeaderSection />
      <div className="flex flex-1 overflow-hidden">
        <NavigationSection activePath="vault" onNavigate={onNavigate} />
        <div className="w-64 bg-white border-r border-gray-200">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <rect x="3" y="3" width="7" height="7" fill="currentColor" />
                  <rect x="14" y="3" width="7" height="7" fill="currentColor" />
                  <rect x="3" y="14" width="7" height="7" fill="currentColor" />
                  <rect x="14" y="14" width="7" height="7" fill="currentColor" />
                </svg>
              </div>
            </div>

            <nav className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.label)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    activeCategory === category.label
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="w-5 h-5" />
                  {category.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <main className="flex-1 p-8 overflow-y-auto">
          {showEmptyState ? (
            <EmptyState />
          ) : (
            <>
              <h1 className="text-2xl font-medium text-gray-900 mb-6">{activeCategory}</h1>

              {showFoldersAndVaults && (
                <>
                  <div className="mb-8">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Folders</h2>
                    <div className="grid grid-cols-3 gap-4">
                      {folders.map((folder) => (
                        <Card key={folder.id} className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                              {folder.icon === "github" && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                              )}
                              {folder.icon === "users" && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-700">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                              )}
                              {folder.icon === "folder" && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
                                  <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
                                </svg>
                              )}
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                              <MoreVertical className="w-5 h-5" />
                            </button>
                          </div>
                          <h3 className="font-medium text-gray-900 mb-1">{folder.name}</h3>
                          <p className="text-sm text-gray-500">
                            {folder.ownerCount} {folder.ownerCount === 1 ? "owner" : "owners"} · {folder.fileCount} files
                          </p>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Accounts</h2>
                    <div className="grid grid-cols-2 gap-4">
                      {vaults.map((vault) => (
                        <Card
                          key={vault.id}
                          className={`p-4 hover:shadow-md transition-shadow cursor-pointer ${
                            selectedVault?.id === vault.id ? "ring-2 ring-blue-500" : ""
                          }`}
                          onClick={() => handleVaultClick(vault)}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${vault.color}`}>
                              {vault.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-gray-900 truncate mb-1">{vault.name}</h3>
                              {vault.email && (
                                <p className="text-xs text-gray-500 truncate">{vault.email}</p>
                              )}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </main>

        {selectedVault && !isEditing && (
          <VaultDetailPanel
            vault={selectedVault}
            onClose={() => setSelectedVault(null)}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onClone={handleClone}
          />
        )}

        {selectedVault && isEditing && (
          <VaultEditPanel
            vault={selectedVault}
            onClose={() => setIsEditing(false)}
            onSave={handleSave}
          />
        )}
      </div>

      <Button
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center"
        onClick={() => setShowAddMenu(!showAddMenu)}
      >
        {showAddMenu ? (
          <Plus className="w-6 h-6 text-white rotate-45 transition-transform" />
        ) : (
          <Plus className="w-6 h-6 text-white transition-transform" />
        )}
      </Button>

      <AddVaultMenu
        open={showAddMenu}
        onClose={() => setShowAddMenu(false)}
        onSelectOption={handleAddOption}
      />
    </div>
  );
};
