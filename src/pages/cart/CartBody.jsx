import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const CartBody = ({ prod }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex flex-col items-center gap-3 mb-6">
        <h2 className="text-3xl font-semibold text-center">Your cart items</h2>
        <button
          onClick={() => navigate("/")}
          className="underline text-green-500 text-lg"
        >
          Back to shopping
        </button>
      </div>
      <div className="border-t border-gray-300">
        <div className="grid grid-cols-4 text-lg font-medium py-4">
          <p className="col-span-2">Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>

        {prod.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 items-center py-4 border-t border-gray-300"
          >
            <div className="flex items-center gap-4 col-span-2">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 bg-gray-100 rounded-md"
              />
              <h2 className="text-lg font-medium">{item.title}</h2>
            </div>
            <p>${item.price.toFixed(2)}</p>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 border rounded-md">-</button>
              <span>{item.quantity}</span>
              <button className="px-2 py-1 border rounded-md">+</button>
            </div>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <p className="text-xl font-semibold">Sub-total</p>
        <p className="text-xl">
          $
          {prod.price}
        </p>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-green-500 text-white px-6 py-3 rounded-md text-lg">
          Check-out
        </button>
      </div>
    </div>
  );
};

export default memo(CartBody);
