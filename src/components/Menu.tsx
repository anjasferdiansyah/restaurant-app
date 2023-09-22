"use client";
import React, { useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menu",
  },
  {
    name: "Working Hours",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
];
const Menu = () => {
  const user = false;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div
          className={`bg-emerald-600 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex flex-col justify-center items-center text-xl gap-4 z-10 animate-slideIn`}
        >
          {links.map((link, index) => (
            <Link key={index} href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setIsOpen(false)}>
              Order
            </Link>
          )}
          <Link href={"/cart"} onClick={() => setIsOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
