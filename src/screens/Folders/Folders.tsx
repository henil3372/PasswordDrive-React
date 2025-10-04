import React, { useState } from "react";
import { HeaderSection } from "../Overview/sections/HeaderSection";
import { NavigationSection } from "../Overview/sections/NavigationSection";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Plus, MoveVertical as MoreVertical, Wifi } from "lucide-react";
import { CreateVaultDialog } from "./components/CreateVaultDialog";

interface Folder {
  id: string;
  name: string;
  icon: React.ReactNode;
  ownerCount: number;
  fileCount: number;
}

interface VaultItem {
  id: string;
  name: string;
  email: string;
  folder: string;
  icon: React.ReactNode;
  color: string;
}

interface FoldersProps {
  onNavigate?: (path: string) => void;
}

export const Folders = ({ onNavigate }: FoldersProps): JSX.Element => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const folders: Folder[] = [
    {
      id: "1",
      name: "Home Internet",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      ownerCount: 1,
      fileCount: 1,
    },
  ];

  const vaults: VaultItem[] = [
    {
      id: "1",
      name: "Test 3333",
      email: "",
      folder: "General/Others",
      icon: <Wifi className="w-6 h-6 text-white" />,
      color: "bg-green-500",
    },
    {
      id: "2",
      name: "Wikipedia",
      email: "sakura789@jihhp.com",
      folder: "General/Others",
      icon: <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-gray-800">W</div>,
      color: "bg-gray-800",
    },
    {
      id: "3",
      name: "jim@drivepasssaw...",
      email: "jimj@drivepasssaword.comd...",
      folder: "General/Others",
      icon: <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-red-500">$</div>,
      color: "bg-red-500",
    },
    {
      id: "4",
      name: "Amazon",
      email: "namoha7995@kamaelii.com",
      folder: "General/Others",
      icon: <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-yellow-600">a</div>,
      color: "bg-yellow-400",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col bg-bg-grey">
      <HeaderSection />
      <div className="flex flex-1 overflow-hidden">
        <NavigationSection activePath="folders" onNavigate={onNavigate} />

        <div className="w-64 bg-white border-r border-gray-200">
          <div className="p-4">
            <nav className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <polyline points="12 6 12 12 16 14" strokeWidth="2"/>
                </svg>
                Last used
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="3" width="7" height="7" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" strokeWidth="2"/>
                </svg>
                General
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2"/>
                  <circle cx="12" cy="7" r="4" strokeWidth="2"/>
                </svg>
                Shared with me
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth="2"/>
                </svg>
                Work
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 2l4 4-4 4" strokeWidth="2"/>
                  <path d="M3 11v-1a4 4 0 0 1 4-4h14" strokeWidth="2"/>
                  <path d="M7 22l-4-4 4-4" strokeWidth="2"/>
                  <path d="M21 13v1a4 4 0 0 1-4 4H3" strokeWidth="2"/>
                </svg>
                Social Media
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="9" cy="21" r="1" strokeWidth="2"/>
                  <circle cx="20" cy="21" r="1" strokeWidth="2"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="2"/>
                </svg>
                Shopping
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" strokeWidth="2"/>
                </svg>
                Travel
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="12" y1="1" x2="12" y2="23" strokeWidth="2"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeWidth="2"/>
                </svg>
                Banking
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" strokeWidth="2"/>
                </svg>
                Emails
              </button>
            </nav>
          </div>
        </div>

        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-2xl font-medium text-gray-900 mb-6">Last used</h1>

          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Folders</h2>
            <div className="grid grid-cols-3 gap-4">
              {folders.map((folder) => (
                <Card key={folder.id} className="p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700">
                      {folder.icon}
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{folder.name}</h3>
                  <p className="text-sm text-gray-500">
                    {folder.ownerCount} {folder.ownerCount === 1 ? "owner" : "owners"} · {folder.fileCount} {folder.fileCount === 1 ? "file" : "files"}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Vaults</h2>
            <div className="grid grid-cols-2 gap-4">
              {vaults.map((vault) => (
                <Card
                  key={vault.id}
                  className="p-4 hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
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
        </main>
      </div>

      <Button
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center"
        onClick={() => setShowCreateDialog(true)}
      >
        <Plus className="w-6 h-6 text-white" />
      </Button>

      <CreateVaultDialog
        open={showCreateDialog}
        onClose={() => setShowCreateDialog(false)}
      />
    </div>
  );
};
