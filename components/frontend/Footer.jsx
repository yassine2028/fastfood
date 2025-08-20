import {
  
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-gray-800 flex flex-col items-center justify-center gap-5 mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        <div className="flex flex-col items-center justify-center py-5 space-y-5">
          <h2 className="text-4xl text-white font-bold logo ">
            About Us
          </h2>
          <div className="flex flex-col items-center justify-center gap-3 text-white">
            <p className="flex flex-row items-center justify-center gap-2 text-gray-400">
              <MapPin className="text-yellow-500" /> Marrakech, Daoudiate 
            </p>
            <p className="flex flex-row items-center justify-center gap-2  text-gray-400">
              <Mail className="text-yellow-500" />{" "}
              <a href="mailto:info@Snack.com">info@Snack.com</a>
            </p>
            <p className=" flex flex-row items-center justify-center gap-2  text-gray-400">
              <Phone className="text-yellow-500" /> +0123456789
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-5 space-y-5">
          <h2 className="text-4xl text-white font-bold logo ">Snack</h2>
          <p className="font-semibold text-lg text-gray-400 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            suscipit maxime dolorem, inventore praesentium ut cumque odio! Nemo,
            harum deserunt!
          </p>
          <div className="hidden sm:flex flex-row items-center justify-center gap-2">
            <Instagram className="h-10 w-10  bg-gray-200 rounded-full border p-1.5  hover:text-yellow-400 transition-all duration-300" />
            <Facebook className="h-10 w-10  bg-gray-200 rounded-full border p-1.5  hover:text-yellow-400 transition-all duration-300" />
            <Youtube className="h-10 w-10  bg-gray-200 rounded-full border p-1.5  hover:text-yellow-400 transition-all duration-300" />
            <Twitter className="h-10 w-10  bg-gray-200 rounded-full border p-1.5  hover:text-yellow-400 transition-all duration-300" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-5 space-y-5">
          <h2 className="text-4xl text-white font-bold logo ">
            Opening Hours
          </h2>
          <p className="outfit text-gray-400 text-xl">Everyday</p>
          <p className="outfit text-gray-400 text-xl">10:00 AM - 11:00 PM</p>
        </div>

      </div>

      <div className=" border-t border-white w-full p-5 flex items-center justify-center">
        <p className="outfit text-xl font-bold text-white">
           © 2025 All Rights Reserved By Yassine.co 
        </p>
      </div>
    </div>
  );
};
