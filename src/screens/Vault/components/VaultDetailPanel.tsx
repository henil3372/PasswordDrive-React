import React from "react";
import { Button } from "../../../components/ui/button";
import { Avatar } from "../../../components/ui/avatar";
import { X, CreditCard as Edit2, MoveVertical as MoreVertical, Eye, EyeOff, ExternalLink, UserPlus } from "lucide-react";

interface VaultDetailPanelProps {
  vault: {
    id: string;
    name: string;
    email: string;
    password: string;
    website: string;
    folder: string;
    icon: React.ReactNode;
    color: string;
  };
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onClone: () => void;
}

export const VaultDetailPanel = ({
  vault,
  onClose,
  onEdit,
  onDelete,
  onClone,
}: VaultDetailPanelProps): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  const sharedUsers = [
    {
      name: "Mary M",
      email: "marymary789@gmail.com",
      role: "owner",
      avatar: "/profile.png",
    },
    {
      name: "Denis Pigeon",
      email: "pi.geoden@gmail.com",
      role: "can edit",
      avatar: "/profile.png",
    },
  ];

  return (
    <div className="w-96 h-full bg-white border-l border-gray-200 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onEdit}>
            <Edit2 className="w-4 h-4" />
          </Button>
          <div className="relative">
            <Button variant="ghost" size="sm" onClick={() => setShowMenu(!showMenu)}>
              <MoreVertical className="w-4 h-4" />
            </Button>
            {showMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowMenu(false)}
                />
                <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                  <button
                    onClick={() => {
                      onClone();
                      setShowMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2"
                  >
                    <span>Clone</span>
                  </button>
                  <button
                    onClick={() => {
                      onDelete();
                      setShowMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-red-600 flex items-center gap-2"
                  >
                    <span>Delete</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-8 h-8 rounded flex items-center justify-center ${vault.color}`}>
            {vault.icon}
          </div>
          <h2 className="text-xl font-semibold">{vault.name}</h2>
        </div>

        <div className="space-y-6">
          <div className="flex gap-2">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="outline" className="flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              Go to
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
            <p className="text-sm text-blue-600">{vault.website}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email or Phone
            </label>
            <p className="text-sm text-gray-900">{vault.email}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-900 flex-1">
                {showPassword ? vault.password : "************"}
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Folder</label>
            <p className="text-sm text-gray-900">{vault.folder}</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Who has access
              </label>
              <Button variant="ghost" size="sm">
                <UserPlus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-3">
              {sharedUsers.map((user, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <img src={user.avatar} alt={user.name} />
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <span className="text-xs text-blue-600">{user.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <span>+ Add note</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              <span>+ Add custom field</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
