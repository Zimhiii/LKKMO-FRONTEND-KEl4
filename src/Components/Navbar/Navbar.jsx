import React from "react";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import HumbergerMenu from "./HumbergerMenu";
import NavLink from "./NavLink";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-[#D9D9D9] px-6 py-2 md:px-12 md:py-4 border-solid border-b-[1px] md:border-[#736455]">
      <Logo width={42} height={30} responsive="md:hidden" />
      <Logo width={91} height={66} responsive="hidden md:block" />
      <NavLink />
      <NavSearch />
      <HumbergerMenu />
      <NavButton />
    </div>
  );
};

export default Navbar;
