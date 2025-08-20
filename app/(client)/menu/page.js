"use client";
import React, { useEffect, useState } from "react";
import MenuItem from "../../../components/MenuItem";

const page = () => {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/api/category").then((res) => {
      res.json().then((categories) => setCategories(categories));
    });
  }, []);

  useEffect(() => {
    fetch("/api/menu-item").then((res) => {
      res.json().then((menuItems) => setMenuItems(menuItems));
    });
  }, []);

  return (
    <>
      <section className=" pb-25 pt-10 px-10">
        <div className="text-center pb-10 ">
          <h2 className="text-2xl sm:text-4xl md:text-8xl font-bold text-red-600 logo border-b-2 border-dashed">
            Our Complete Menu
          </h2>
        </div>

        <div className=" space-y-15">
          {categories.map((category, index) => (
            <div className="" key={index}>
              <div className="text-center my-5">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold outfit ">
                  {category.name}
                </h2>
              </div>

              <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {menuItems
                  .filter((item) => item.category._id === category._id)
                  .map((product) => (
                    <MenuItem {...product} key={product.name} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
