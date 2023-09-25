import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      <table className="w-full border-separate border-spacing-1">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base odd:bg-amber-100">
            <td className="hidden md:block py-6 px-1">123456789</td>
            <td className="py-6 px-1">12/12/2023</td>
            <td className="py-6 px-1">$79.90</td>
            <td className="hidden md:block">1 pcs</td>
            <td className="py-6 px-1">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-amber-100">
            <td className="hidden md:block py-6 px-1">123456789</td>
            <td className="py-6 px-1">12/12/2023</td>
            <td className="py-6 px-1">$79.90</td>
            <td className="hidden md:block">1 pcs</td>
            <td className="py-6 px-1">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-amber-100">
            <td className="hidden md:block py-6 px-1">123456789</td>
            <td className="py-6 px-1">12/12/2023</td>
            <td className="py-6 px-1">$79.90</td>
            <td className="hidden md:block">1 pcs</td>
            <td className="py-6 px-1">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-amber-100">
            <td className="hidden md:block py-6 px-1">123456789</td>
            <td className="py-6 px-1">12/12/2023</td>
            <td className="py-6 px-1">$79.90</td>
            <td className="hidden md:block">1 pcs</td>
            <td className="py-6 px-1">Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
