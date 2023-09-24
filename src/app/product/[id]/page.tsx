import Price from "@/components/Price";
import { singleProduct } from "@/data/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 md:h-screen flex flex-col justify-around items-center text-emerald-700 md:flex-row">
      {/* Image Container */}
      {singleProduct.img && (
        <div className="w-full h-full flex items-center justify-center p-4">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            width={400}
            height={400}
          />
        </div>
      )}
      {/* Text */}
      <div className="h-1/2 flex flex-col gap-4">
        <h1 className="text-xl uppercase font-bold">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
