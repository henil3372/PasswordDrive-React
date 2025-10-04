import React from "react";
import { Plus, X, FolderPlus, Users, Shield } from "lucide-react";
import { Button } from "../../../components/ui/button";

interface AddVaultMenuProps {
  open: boolean;
  onClose: () => void;
  onSelectOption: (option: "category" | "folder" | "team" | "vault") => void;
}

export const AddVaultMenu = ({
  open,
  onClose,
  onSelectOption,
}: AddVaultMenuProps): JSX.Element | null => {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="fixed bottom-24 right-8 z-50 bg-white rounded-lg shadow-xl border border-gray-200 py-2 w-48">
        <button
          onClick={() => {
            onSelectOption("category");
            onClose();
          }}
          className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Category</span>
        </button>
        <button
          onClick={() => {
            onSelectOption("folder");
            onClose();
          }}
          className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3"
        >
          <FolderPlus className="w-5 h-5 text-gray-600" />
          <span className="text-sm text-gray-700">Folder</span>
        </button>
        <button
          onClick={() => {
            onSelectOption("vault");
            onClose();
          }}
          className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3"
        >
          <Plus className="w-5 h-5 text-gray-600" />
          <span className="text-sm text-gray-700">New vault</span>
        </button>
      </div>
    </>
  );
};
