"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="pr-2">
      <div className=" items-center justify-center flex ">

      <div className="flex xl:space-x-4">
        <Link href={"/contact"} className="lg:flex items-center hidden">
          <div className="mx-4 my-4">Request demo</div>
        </Link>

        <div className="font-thin     
        lg:flex
            items-center
            hidden">|</div>
      </div>

      <div className="flex lg:space-x-4 items-center pr-4">
        <Link href={"/login"}>
          <Button variant={"outline"} className="lg:flex items-center hidden border-none text-md mx-1 my-2">
            Log in
          </Button>
        </Link>
      </div>
      </div>

      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="rounded-full xl:hidden">
          <X className="h-5 w-5  items-center justify-center rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div onClick={toggleDropdown} className="flex lg:hidden">
          <AlignJustify className="h-6 w-6 items-center justify-center mr-2" />
        </div>
      )}

      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
    </div>
  );
};

export default ActionButtons;
