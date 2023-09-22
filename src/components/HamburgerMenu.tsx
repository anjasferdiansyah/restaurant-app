"use client";
import React from "react";

const HamburgerMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      onClick={handleClick}
      className="w-4 h-4 flex flex-col justify-around"
    >
      <span
        className={`transition-all block w-4 h-0.5 bg-emerald-600 rounded ${
          isOpen &&
          "-translate-x-1 -rotate-45 origin-right scale-x-90 transition-all"
        }`}
      ></span>
      <span
        className={`transition-all block w-4 h-0.5 bg-emerald-600 rounded ${
          isOpen && "opacity-0 transition-all"
        }`}
      ></span>
      <span
        className={`transition-all block w-4 h-0.5 bg-emerald-600 rounded ${
          isOpen &&
          " -translate-x-1 rotate-45 origin-right scale-x-90 transition-all"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
