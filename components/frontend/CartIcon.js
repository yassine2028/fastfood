import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { CartContext } from "@/lib/AppContext";
import React, { useContext } from "react";


export const CartIcon = () => {
  const {cartProducts} = useContext(CartContext);
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingCart className="w-8 h-8 hover:text-[#ffbe33] text-white transition-all duration-300" />
      <span className="absolute -top-1 -right-1 bg-[#ffbe33] text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        {cartProducts?.length}
      </span>
    </Link>
  );
};
