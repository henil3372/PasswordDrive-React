import React from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Select, SelectItem } from "../../../components/ui/select";
import { X, Check, Eye, EyeOff, ChevronRight, Folder } from "lucide-react";

interface VaultEditPanelProps {
  vault: {
    id: string;
    name: string;
    email: string;
    password: string;
    website: string;
    folder: string;
    color: string;
  };
  onClose: () => void;
  onSave: (data: any) => void;
}

export const VaultEditPanel = ({
  vault,
  onClose,
  onSave,
}: VaultEditPanelProps): JSX.Element => {
  const [formData, setFormData] = React.useState({
    name: vault.name,
    color: vault.color,
    website: vault.website,
    email: vault.email,
    password: vault.password,
    folder: vault.folder,
    sharedWith: [
      { email: "pi.geoden@gmail.com", permission: "can view" },
    ],
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [newUserEmail, setNewUserEmail] = React.useState("");

  const colors = [
    { name: "Blue", value: "bg-blue-500" },
    { name: "Green", value: "bg-green-500" },
    { name: "Yellow", value: "bg-yellow-500" },
    { name: "Red", value: "bg-red-500" },
    { name: "Purple", value: "bg-purple-500" },
    { name: "Gray", value: "bg-gray-500" },
  ];

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="w-96 h-full bg-white border-l border-gray-200 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSave}
          className="text-blue-600"
        >
          <Check className="w-4 h-4 mr-1" />
          Save
        </Button>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
            <Select
              value={colors.find((c) => c.value === formData.color)?.name || "Blue"}
              onValueChange={(value) => {
                const color = colors.find((c) => c.name === value);
                if (color) {
                  setFormData({ ...formData, color: color.value });
                }
              }}
            >
              {colors.map((color) => (
                <SelectItem key={color.value} value={color.name}>
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${color.value}`} />
                    {color.name}
                  </div>
                </SelectItem>
              ))}
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
            <Input
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              placeholder="https://"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email or Phone
            </label>
            <Input
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter email or phone"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="flex items-center gap-2">
              <Input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter password"
                className="flex-1"
              />
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
            <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <Folder className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{formData.folder}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Who has access
            </label>
            <div className="space-y-3">
              {formData.sharedWith.map((user, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Input
                    value={user.email}
                    onChange={(e) => {
                      const newShared = [...formData.sharedWith];
                      newShared[index].email = e.target.value;
                      setFormData({ ...formData, sharedWith: newShared });
                    }}
                    placeholder="Enter email"
                    className="flex-1"
                  />
                  <Select
                    value={user.permission}
                    onValueChange={(value) => {
                      const newShared = [...formData.sharedWith];
                      newShared[index].permission = value;
                      setFormData({ ...formData, sharedWith: newShared });
                    }}
                  >
                    <SelectItem value="can view">can view</SelectItem>
                    <SelectItem value="can edit">can edit</SelectItem>
                  </Select>
                </div>
              ))}
              <Input
                value={newUserEmail}
                onChange={(e) => setNewUserEmail(e.target.value)}
                placeholder="Add user or team"
                onKeyPress={(e) => {
                  if (e.key === "Enter" && newUserEmail) {
                    setFormData({
                      ...formData,
                      sharedWith: [
                        ...formData.sharedWith,
                        { email: newUserEmail, permission: "can view" },
                      ],
                    });
                    setNewUserEmail("");
                  }
                }}
              />
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
