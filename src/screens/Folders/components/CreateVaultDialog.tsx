import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { ChevronDown, ChevronRight, Wifi, CreditCard, Key, Lock, Users, ShoppingCart, Plane, DollarSign, Mail } from "lucide-react";

interface CreateVaultDialogProps {
  open: boolean;
  onClose: () => void;
}

interface VaultType {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface FolderItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  children?: FolderItem[];
}

const vaultTypes: VaultType[] = [
  { id: "wifi", label: "Wi-fi", icon: <Wifi className="w-5 h-5" /> },
  { id: "card", label: "Card", icon: <CreditCard className="w-5 h-5" /> },
  { id: "password", label: "Password", icon: <Key className="w-5 h-5" /> },
  { id: "secure-note", label: "Secure Note", icon: <Lock className="w-5 h-5" /> },
];

const colors = [
  { id: "gray", value: "#5f6368", class: "bg-[#5f6368]" },
  { id: "blue", value: "#1a73e8", class: "bg-[#1a73e8]" },
  { id: "green", value: "#34a853", class: "bg-[#34a853]" },
  { id: "yellow", value: "#fbbc04", class: "bg-[#fbbc04]" },
  { id: "red", value: "#ea4335", class: "bg-[#ea4335]" },
];

export const CreateVaultDialog = ({
  open,
  onClose,
}: CreateVaultDialogProps): JSX.Element => {
  const [selectedType, setSelectedType] = useState<string>("");
  const [vaultName, setVaultName] = useState("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedFolder, setSelectedFolder] = useState<string>("General");
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["General", "Others"]));
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showColorDropdown, setShowColorDropdown] = useState(false);
  const [showFolderDropdown, setShowFolderDropdown] = useState(false);

  const folders: FolderItem[] = [
    {
      id: "general",
      label: "General",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="7" height="7" strokeWidth="2"/>
          <rect x="14" y="3" width="7" height="7" strokeWidth="2"/>
          <rect x="3" y="14" width="7" height="7" strokeWidth="2"/>
          <rect x="14" y="14" width="7" height="7" strokeWidth="2"/>
        </svg>
      ),
      children: [
        {
          id: "others",
          label: "Others",
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" strokeWidth="2"/>
            </svg>
          ),
          children: [
            {
              id: "final",
              label: "Final",
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" strokeWidth="2"/>
                </svg>
              ),
            },
          ],
        },
      ],
    },
    {
      id: "work",
      label: "Work",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      id: "social-media",
      label: "Social Media",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "shopping",
      label: "Shopping",
      icon: <ShoppingCart className="w-4 h-4" />,
    },
  ];

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const renderFolder = (folder: FolderItem, depth: number = 0) => {
    const isExpanded = expandedFolders.has(folder.id);
    const hasChildren = folder.children && folder.children.length > 0;
    const isSelected = selectedFolder === folder.label || selectedFolder === `${folder.label}/Others`;

    return (
      <div key={folder.id}>
        <div
          className={`flex items-center gap-2 px-3 py-2 cursor-pointer rounded hover:bg-gray-100 ${
            isSelected ? "bg-blue-50" : ""
          }`}
          style={{ paddingLeft: `${12 + depth * 16}px` }}
          onClick={() => {
            if (hasChildren) {
              toggleFolder(folder.id);
            }
            setSelectedFolder(folder.label);
          }}
        >
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFolder(folder.id);
              }}
              className="flex-shrink-0"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-gray-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-600" />
              )}
            </button>
          )}
          {!hasChildren && <div className="w-4" />}
          <span className="text-gray-700 flex-shrink-0">{folder.icon}</span>
          <span className="text-sm text-gray-900">{folder.label}</span>
        </div>
        {hasChildren && isExpanded && (
          <div>
            {folder.children?.map((child) => renderFolder(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const getSelectedTypeLabel = () => {
    const type = vaultTypes.find((t) => t.id === selectedType);
    return type ? type.label : "Choose a vault type";
  };

  const getSelectedColorDisplay = () => {
    const color = colors.find((c) => c.id === selectedColor);
    if (color) {
      return (
        <div className="flex items-center gap-2">
          <div className={`w-5 h-5 rounded ${color.class}`} />
          <span className="capitalize">{color.id}</span>
        </div>
      );
    }
    return "Choose a color";
  };

  const isFormValid = selectedType && vaultName.trim() && selectedColor && selectedFolder;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[480px] p-0 gap-0">
        <div className="bg-gradient-to-b from-blue-100 to-white pt-6 pb-8 px-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                <Lock className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -left-2">
                <div className="w-3 h-3 bg-blue-300 rounded-full" />
              </div>
              <div className="absolute top-0 -right-2">
                <div className="w-2 h-2 bg-blue-200 rounded-full" />
              </div>
              <div className="absolute -bottom-1 right-4">
                <div className="w-4 h-4 bg-blue-200 rounded-full" />
              </div>
            </div>
          </div>
          <DialogTitle className="text-xl font-medium text-gray-900">
            Create a new vault
          </DialogTitle>
        </div>

        <div className="px-6 py-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type
            </label>
            <div className="relative">
              <button
                onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  {selectedType && vaultTypes.find((t) => t.id === selectedType)?.icon}
                  <span>{getSelectedTypeLabel()}</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              {showTypeDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {vaultTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => {
                        setSelectedType(type.id);
                        setShowTypeDropdown(false);
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {type.icon}
                      <span>{type.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <Input
              type="text"
              placeholder="Give a name to your vault"
              value={vaultName}
              onChange={(e) => setVaultName(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color
            </label>
            <div className="relative">
              <button
                onClick={() => setShowColorDropdown(!showColorDropdown)}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
              >
                {getSelectedColorDisplay()}
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              {showColorDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3">
                  <div className="flex gap-2 justify-center">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => {
                          setSelectedColor(color.id);
                          setShowColorDropdown(false);
                        }}
                        className={`w-12 h-12 rounded ${color.class} hover:scale-110 transition-transform ${
                          selectedColor === color.id ? "ring-2 ring-offset-2 ring-blue-500" : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Folder
            </label>
            <div className="relative">
              <button
                onClick={() => setShowFolderDropdown(!showFolderDropdown)}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" strokeWidth="2"/>
                  </svg>
                  <span>{selectedFolder}</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              {showFolderDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                  {folders.map((folder) => renderFolder(folder))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-gray-200">
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (isFormValid) {
                onClose();
              }
            }}
            disabled={!isFormValid}
            className="bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-300 disabled:text-gray-500"
          >
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
