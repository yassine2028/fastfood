"use client";
import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import { CartContext } from "@/lib/AppContext";
import toast from "react-hot-toast";
import { X } from "lucide-react";

const MenuItem = (menuItem) => {
  const { name, description, price, category, imageUrl, sizes, extras } =
    menuItem;

  const [selectedSize, setSelectedSize] = useState(sizes?.[0] || null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const { addToCart } = useContext(CartContext);


  function handleAddToCartButtonClick() {
    const hasOptions = sizes?.length > 0 || extras?.length > 0;

    if (hasOptions && !showPopUp) {
      setShowPopUp(true);
      return;
    }

    addToCart(menuItem, selectedSize, selectedExtras);
    toast.success("Added To Cart");
    setShowPopUp(false);
  }

  function handleExtrasClick(ev, extraThing) {
    const checked = ev.target.checked;
    if (checked) {
      setSelectedExtras(prev => [...prev, extraThing])
    } else {
      setSelectedExtras(prev => {
        return prev.filter(e => e.name !== extraThing.name)
      })
    }
  }

  let selectedPrice = price;
  if (selectedSize) {
    selectedPrice = selectedSize.price;
  }
  if (selectedExtras?.length > 0) {
    for (const extra of selectedExtras) {
      selectedPrice += extra.price;
    }

  }

  return (
    <>
      {showPopUp && (
        <div
          onClick={() => setShowPopUp(false)}
          className="fixed z-[999] inset-0 bg-black/50 flex items-center justify-center py-10"
        >
          <div
            onClick={(ev) => ev.stopPropagation()}
            style={{ maxHeight: "calc(100vh - 80px)" }}
            className="bg-white p-2 rounded-lg flex flex-col justify-center  w-[30%]     my-8  "
          >
            <X className="ml-auto items-end h-8 w-8 hover:scale-120 transition-all duration-300 cursor-pointer" onClick={() => setShowPopUp(false)} strokeWidth={3} />
            <div className="overflow-y-auto scroll-auto p-2 overflow-x-hidden">
              <img
                src={imageUrl}
                alt="img"
                className="max-h-[160px] mx-auto max-w-full group-hover:scale-110 transition-all duration-300"
              />
              <h2 className="text-2xl text-center font-bold outfit ">{name}</h2>
              <p className="text-gray-600 text-center pb-4">{description}</p>
              {sizes?.length > 0 && (
                <div className="bg-gray-300 rounded-md p-2  mb-4">
                  <h3 className="font-semibold outfit text-[#1d2b3a] text-lg text-center mb-1">
                    Choose A Size
                  </h3>
                  {sizes.map((size) => (

                    <label
                      key={size.name}
                      className={`
    flex items-center justify-between gap-3 px-4 py-3 rounded-lg border-6
    cursor-pointer transition-all duration-300 select-none
    bg-white shadow-sm hover:shadow-md 
    hover:border-purple-400 my-2
    ${selectedSize?.name === size.name
                          ? "border-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.3)] bg-purple-300"
                          : "border-white"
                        }
  `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="size"
                          onChange={() => setSelectedSize(size)}
                          checked={selectedSize?.name === size.name}
                          className="hidden peer"
                        />
                        <span className="text-gray-800 font-semibold">
                          {size.name}
                        </span>
                      </div>

                      <span
                        className={`text-sm font-medium transition-colors duration-300
      ${selectedSize?.name === size.name ? "text-purple-600" : "text-gray-600"
                          }`}
                      >
                        {size.price} MAD
                      </span>
                    </label>
                  ))}
                </div>
              )}

              {extras?.length > 0 && (
                <div className="bg-gray-300 rounded-md p-2 mb-4">
                  <h3 className="font-semibold outfit text-[#1d2b3a] text-lg text-center mb-1">
                    Add Extras
                  </h3>

                  {extras.map((extra) => (
                    // <label className="flex items-center gap-2 p-2 rounded-sm bg-gray-200 mb-2 border" key={extra.name}>
                    //     <input
                    //         //    onChange={e => handleExtrasClick(e, extra)}
                    //         type="checkbox" name={extra.name} /> {extra.name}    +{extra.price} MAD
                    // </label>
                    <label
                      key={extra.name}
                      className={`
    flex items-center justify-between gap-3 px-4 py-3 rounded-lg border-6 border-white my-2
    cursor-pointer transition-all duration-300 select-none
    bg-white shadow-sm hover:shadow-md 
    hover:border-emerald-400
    has-[:checked]:border-emerald-500 
    has-[:checked]:shadow-[0_0_12px_rgba(16,185,129,0.3)] 
    has-[:checked]:bg-emerald-50
  `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name={extra.name}
                          onChange={e => handleExtrasClick(e, extra)}
                          className="hidden peer"
                        />
                        <span className="text-gray-800 font-semibold">
                          {extra.name}
                        </span>
                      </div>

                      <span
                        className={`text-sm font-medium transition-colors duration-300
      peer-checked:text-emerald-600`}
                      >
                        +{extra.price} MAD
                      </span>
                    </label>
                  ))}
                </div>
              )}
              <button
                onClick={handleAddToCartButtonClick}
                type="button"
                className="w-full py-3 text-lg bg-orange-600 text-white font-semibold rounded-lg hover:scale-105 active:scale-90 hoverEffect cursor-pointer mb-4 sticky bottom-2"
              >
                Order ({selectedPrice}MAD)
              </button>
              <button
                type="button"
                onClick={() => setShowPopUp(false)}
                className="w-full py-3 text-lg bg-white text-black border font-semibold rounded-lg hover:scale-105 active:scale-90 hoverEffect cursor-pointer mb-4"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      <ProductCard {...menuItem} onAddToCart={handleAddToCartButtonClick} />
    </>
  );
};

export default MenuItem;
