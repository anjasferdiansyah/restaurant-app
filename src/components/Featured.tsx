import { featuredProducts } from "@/data/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-emerald-700">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single Item */}
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="w-screen h-screen md:h-[80vh] xl:h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-amber-100 transition-all duration-300 md:w-[50vw] xl:w-[33vw]"
          >
            {/* Image Container */}
            {product.img && (
              <div className="relative flex-1 h-full my-4 w-full">
                <Image
                  src={product.img}
                  fill
                  alt=""
                  className="object-contain w-full hover:rotate-[60deg] transition-all duration-500"
                />
              </div>
            )}
            {/* Text Container */}
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {product.title}
              </h1>
              <p className="p-4 2xl:p-8">{product.desc}</p>
              <span className="text-xl font-bold">$ {product.price}</span>
              <button className="bg-amber-600 text-white px-2 py-1 rounded">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
