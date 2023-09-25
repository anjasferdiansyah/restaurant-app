import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import CallIcon from "@mui/icons-material/Call";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 w-full md:h-20 text-emerald-700 p-4 flex justify-between items-center border-b-2 border-emerald-700 md:text-lg uppercase lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="hidden md:flex flex-1 gap-4">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      {/* Logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Brand</Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Links */}

      <div className="hidden md:flex flex-1 items-center gap-4 justify-end">
        <div className="flex justify-center flex-1 items-center gap-2">
          <div className="text-center md:absolute flex justify-center lg:static top-3 right-2 cursor-pointer gap-2 px-1 bg-amber-500 text-white rounded">
            <CallIcon />
            <span>08123456789</span>
          </div>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
