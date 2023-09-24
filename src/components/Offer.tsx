import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <div className="w-full flex flex-col gap-3 h-screen bg-black md:flex-row">
      {/* Text Container */}
      <div className="flex-1 flex p-4 flex-col justify-center items-center gap-4 text-white text-center">
        <h1 className="text-5xl font-bold">
          Delicious Burger and French Fries
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-amber-500 text-white px-2 py-1">Order Now</button>
      </div>
      {/* Image Container */}
      <div className="relative flex-1 w-full">
        <Image
          src={"/offerProduct.png"}
          fill
          alt=""
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
