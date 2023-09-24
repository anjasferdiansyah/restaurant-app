import { pizzas } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-emerald-700">
      {pizzas.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className="w-full h-[60vh] border-r-2 border-b-2 border-emerald-600/10 sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 group hover:bg-amber-100"
        >
          {/* Image Container */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          {/* Text */}
          <div className="flex justify-between items-center font-bold py-3 text-sm">
            <h1 className="text-lg md:text-xl uppercase w-1/2">{item.title}</h1>
            <p className="group-hover:hidden">${item.price}</p>
            <button className="hidden group-hover:block bg-emerald-700 text-white px-2 py-1 rounded-md uppercase">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
