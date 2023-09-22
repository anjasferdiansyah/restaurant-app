import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 text-sm bg-emerald-600 md:h-20 p-4 lg:20 xl:20 flex item-center justify-between text-white">
      <Link href="/">BRAND</Link>
      <p>© All rights reserved.</p>
    </div>
  );
};

export default Footer;
