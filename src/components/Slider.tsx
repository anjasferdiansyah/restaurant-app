"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const data: { id: number; title: string; image: string }[] = [
  {
    id: 1,
    title: "always fresh & always crispy hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "share with your family & friends",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "we are always ready to serve you",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Text Container */}
      <div className="flex flex-1 items-center justify-center flex-col font-bold gap-8 text-emerald-700 bg-amber-100">
        <h1 className="text-4xl text-center uppercase p-4 m-4 md:p-10 md:text-5xl xl:text-6xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-amber-500 text-white px-4 py-2 ">
          Order Now
        </button>
      </div>
      {/* Image Container */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover object-center h-full w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Slider;
