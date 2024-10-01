import React from "react";
import { MdMenu } from "react-icons/md";

export default function HumbergerMenu() {
  return (
    <div className="md:hidden sm:hidden">
      <MdMenu className="text-[#736455] text-2xl " />
    </div>
  );
}
