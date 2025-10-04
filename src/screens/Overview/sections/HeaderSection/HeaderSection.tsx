import { BellIcon, SearchIcon, SettingsIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Input } from "../../../../components/ui/input";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full bg-bg-white border-b border-grey-separator">
      <div className="flex items-center justify-between gap-10 px-4 py-3">
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            className="w-9 h-[37px] object-cover"
            alt="Icon"
            src="/icon-192-1.png"
          />
          <div className="[font-family:'Product_Sans_Light-Regular',Helvetica] font-normal text-type-grey-2 text-lg leading-6">
            <span>Drive</span>
            <span className="[font-family:'Product_Sans-Regular',Helvetica]">
              {" "}
              Password
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-5 flex-1 max-w-[900px]">
          <div className="flex items-center gap-3 px-3 py-2 bg-bg-grey rounded-full flex-1 max-w-[500px]">
            <SearchIcon className="w-5 h-5 text-type-grey-2 flex-shrink-0" />
            <Input
              type="text"
              placeholder="SearchIcon in Drive Password"
              className="border-0 bg-transparent p-0 h-auto font-primary-sh1-500 text-type-grey-2 placeholder:text-type-grey-2 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <div className="flex items-center gap-5 flex-shrink-0">
            <div className="relative">
              <BellIcon className="w-6 h-6 text-type-grey-2 cursor-pointer" />
              <Badge className="absolute -top-1 -right-1 h-4 min-w-4 flex items-center justify-center p-1 bg-sea-blue text-bg-white text-[8px] font-medium rounded-full border-0">
                5
              </Badge>
            </div>

            <SettingsIcon className="w-6 h-6 text-type-grey-2 cursor-pointer" />

            <Avatar className="w-6 h-6 cursor-pointer">
              <AvatarImage src="/profile.png" alt="Profile" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};
