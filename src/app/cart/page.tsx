import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div className="h-[100vh] md:h-[calc(100vh-9rem)] flex flex-col text-emerald-700 lg:flex-row">
      {/* Product Container */}
      <div className="w-full h-full overflow-scroll flex flex-col justify-center items-center lg:h-full lg:w-2/3 md:px-20 2xl:px-40">
        {/* single item */}
        <div className="flex gap-4 justify-between mb-4 border-b-2 border-emerald-700/10 py-2 ">
          <Image src={"/temporary/p1.png"} alt="" width={100} height={100} />
          <div className="">
            <h1 className="font-bold uppercase">sicillian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex gap-4 justify-between mb-4 border-b-2 border-emerald-700/10 py-2 ">
          <Image src={"/temporary/p1.png"} alt="" width={100} height={100} />
          <div className="">
            <h1 className="font-bold uppercase">sicillian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex gap-4 justify-between mb-4 border-b-2 border-emerald-700/10 py-2 ">
          <Image src={"/temporary/p1.png"} alt="" width={100} height={100} />
          <div className="">
            <h1 className="font-bold uppercase">sicillian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* Payment Container */}
      <div className="flex-1 p-4 bg-amber-200 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 md:px-20 2xl:px-40">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$00.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE !</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="uppercase">Total(INCL. VAT)</span>
          <span className="text-green-500 font-bold">$81.70</span>
        </div>
        <button className="bg-amber-500 text-white px-2 py-1 rounded w-1/2 uppercase self-end">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
