"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MenuItem from '../MenuItem'



export const Menu = () => {

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
  fetch("/api/menu-item")
    .then((res) => res.json())
    .then((items) => {
      // Shuffle array
      const shuffled = items.sort(() => 0.5 - Math.random());
      // Pick first 9
      setMenuItems(shuffled.slice(0, 9));
    });
}, []);

  
  return (
    <>
      <section className=" py-25 px-10">
        <div className="flex flex-col items-center justify-center w-full gap-5 space-y-3">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold logo ">
              Our Menu
            </h2>
          </div>

          

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {menuItems.map((food, key) => (
              <MenuItem {...food} key={key} />
            ))}
          </div>

          <Link href={"/menu"}>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-white transition-all duration-300 hover:scale-110 px-4 py-2 outfit text-lg sm:text-2xl rounded-lg cursor-pointer">
              View All
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
