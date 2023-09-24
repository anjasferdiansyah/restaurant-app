"use client";
import React, { useEffect } from "react";

type PriceProps = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};
const Price = ({ price, id, options }: PriceProps) => {
  const [totalPrice, setTotalPrice] = React.useState(price);
  const [quantity, setQuantity] = React.useState(1);
  const [selectedOptions, setSelectedOptions] = React.useState(0);

  useEffect(() => {
    setTotalPrice(
      quantity *
        (options ? price + options[selectedOptions].additionalPrice : price)
    );
  }, [quantity, selectedOptions, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">{totalPrice.toFixed(2)}</h2>
      {/* Options Container */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="p-2 ring-1 ring-emerald-700 rounded-md"
            style={{
              background: selectedOptions === index ? "#34d399" : "white",
              color: selectedOptions === index ? "white" : "#047857",
            }}
            onClick={() => {
              setSelectedOptions(index);
            }}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity and Add Container */}
      <div className="flex justify-between items-center ring-1 ring-emerald-700 rounded">
        {/* Quantity */}
        <div className="w-full flex justify-between px-2">
          <span>Quantity</span>
          <div className="flex gap-4">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >{`-`}</button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((next) => (next < 9 ? next + 1 : 9))}
            >{`+`}</button>
          </div>
        </div>
        {/* Add */}
        <button className="uppercase text-xs sm:text-sm w-1/3 font-bold bg-emerald-700 text-white p-2">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
