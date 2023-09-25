import React from "react";
import { menu } from "@/data/data";
import Link from "next/link";
const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 flex flex-col md:flex-row sm:h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 md:h-3/4 bg-cover p-8"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase text-xl md:text-2xl lg:text-4xl font-bold">
              {category.title}
            </h1>
            <p className="text-xs md:text-sm my-6">{category.desc}</p>
            <button
              className={`hidden md:block ${
                category.color === "black" ? "bg-black" : "bg-white"
              } text-${
                category.color === "black" ? "white" : "emerald-700"
              } px-4 py-2 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
