import { ShoppingCart } from "lucide-react";
import React from "react";

export default function ProductCard({onAddToCart, ...item }) {
  const { name, description, price, imageUrl} = item;
  return (
    
      <div
        className="flex flex-col bg-blue-950 w-full group"
        style={{ borderRadius: "20px" }}
      >
        <div className="flex flex-col rounded">
          <div className="bg-[#f1f2f3] flex justify-center items-center h-[250px] p-5 rounded-bl-2xl rounded-t-2xl">
            <img
              src={imageUrl}
              alt="img"
              className="max-h-[160px] max-w-full group-hover:scale-110 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col text-white bg-gray-800 p-5 space-y-3 rounded-b-2xl">
            <h2 className="text-2xl font-bold outfit ">{name}</h2>
            <p className="text-gray-300">{description}</p>
            <div className="flex items-center justify-between">
              <span className="logo text-3xl text-red-300">
                {price} MAD
              </span>
              <ShoppingCart onClick={onAddToCart} className="bg-yellow-400 h-12 w-12 p-2 rounded-2xl cursor-pointer hover:scale-110 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    
  );
};
